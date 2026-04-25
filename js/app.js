// ═══════════════════════════════════════════════════
//   WANDERLUST INDONESIA - App Logic
//   by Agus Satria Adhitama
// ═══════════════════════════════════════════════════

// ─── STATE ───
const state = {
  currentQuestion: 0,
  answers: [],
  scores: {},
  currentScreen: 'hero'
};

// ─── DOM REFS ───
const screens = {
  hero:    document.getElementById('screen-hero'),
  quiz:    document.getElementById('screen-quiz'),
  loading: document.getElementById('screen-loading'),
  result:  document.getElementById('screen-result')
};

// ─── SCREEN TRANSITIONS ───
function showScreen(name) {
  const current = document.querySelector('.screen.active');
  if (current) {
    current.classList.add('exit');
    setTimeout(() => current.classList.remove('active', 'exit'), 500);
  }
  setTimeout(() => {
    screens[name].classList.add('active');
    state.currentScreen = name;
  }, 150);
}

// ─── THEME TOGGLE ───
function initTheme() {
  const saved = localStorage.getItem('wi-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateToggleIcons(saved);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('wi-theme', next);
  updateToggleIcons(next);
}

function updateToggleIcons(theme) {
  document.querySelectorAll('.toggle-icon').forEach(el => {
    el.textContent = theme === 'dark' ? '☀️' : '🌙';
  });
}

document.querySelectorAll('.theme-toggle').forEach(btn => {
  btn.addEventListener('click', toggleTheme);
});

// ─── QUIZ LOGIC ───
function startQuiz() {
  state.currentQuestion = 0;
  state.answers = [];
  state.scores = {};
  showScreen('quiz');
  setTimeout(() => renderQuestion(), 300);
}

function renderQuestion() {
  const q = QUESTIONS[state.currentQuestion];
  const total = QUESTIONS.length;

  // Update header
  document.getElementById('questionCounter').textContent = `${state.currentQuestion + 1} / ${total}`;
  const pct = ((state.currentQuestion) / total) * 100;
  document.getElementById('progressBar').style.width = pct + '%';
  document.getElementById('progressGlow').style.left = pct + '%';

  // Animate body
  const body = document.querySelector('.quiz-body');
  body.classList.remove('animating');
  void body.offsetWidth;
  body.classList.add('animating');

  document.getElementById('questionCategory').textContent = q.category;
  document.getElementById('questionText').textContent = q.text;

  // Render options
  const grid = document.getElementById('optionsGrid');
  grid.innerHTML = '';
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.style.animationDelay = `${i * 0.08}s`;
    btn.innerHTML = `
      <span class="option-emoji">${opt.emoji}</span>
      <span class="option-label">${opt.label}</span>
      <span class="option-desc">${opt.desc}</span>
    `;
    btn.addEventListener('click', () => selectOption(btn, opt, i));
    grid.appendChild(btn);
  });
}

function selectOption(btn, opt, index) {
  // Visual feedback
  document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  // Record score tags
  (opt.tags || []).forEach(tag => {
    state.scores[tag] = (state.scores[tag] || 0) + 1;
  });
  state.answers.push({ question: state.currentQuestion, option: opt });

  // Auto-advance after brief delay
  setTimeout(() => {
    if (state.currentQuestion < QUESTIONS.length - 1) {
      state.currentQuestion++;
      renderQuestion();
    } else {
      showLoading();
    }
  }, 420);
}

// ─── BACK BUTTON ───
document.getElementById('btnBack').addEventListener('click', () => {
  if (state.currentQuestion > 0) {
    // Undo last answer's score
    const last = state.answers.pop();
    (last.option.tags || []).forEach(tag => {
      state.scores[tag] = Math.max(0, (state.scores[tag] || 1) - 1);
    });
    state.currentQuestion--;
    renderQuestion();
  } else {
    showScreen('hero');
  }
});

// ─── LOADING ───
const loadingTexts = [
  "Menganalisis jawabanmu...",
  "Mencocokkan kepribadianmu...",
  "Menjelajahi 17.000 pulau...",
  "Menemukan destinasi terbaik...",
  "Hampir selesai!",
];

function showLoading() {
  showScreen('loading');
  const ring = document.getElementById('ringFill');
  const circumference = 2 * Math.PI * 42;
  let progress = 0;
  let textIdx = 0;

  const textEl = document.getElementById('loadingText');
  textEl.textContent = loadingTexts[0];

  const interval = setInterval(() => {
    progress += 4;
    const offset = circumference - (progress / 100) * circumference;
    ring.style.strokeDashoffset = offset;

    if (progress % 20 === 0 && textIdx < loadingTexts.length - 1) {
      textIdx++;
      textEl.textContent = loadingTexts[textIdx];
    }

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => showResult(), 600);
    }
  }, 40);
}

// ─── RESULT LOGIC ───
function computeResults() {
  // Score each destination
  const scored = DESTINATIONS.map(dest => {
    let score = 0;
    (dest.score_tags || dest.tags || []).forEach(tag => {
      score += (state.scores[tag] || 0);
    });
    // Add small random factor for variety
    score += Math.random() * 0.5;
    return { ...dest, score };
  });

  // Sort and pick top 6
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 6);
}

function computePersonality() {
  const s = state.scores;
  const keys = Object.keys(PERSONALITY_TYPES);

  // Map score tags to personality
  const pMap = {
    explorer:       ['petualangan', 'ekstrem', 'hidden', 'gunung'],
    culture_seeker: ['budaya', 'sejarah', 'adat', 'pengetahuan'],
    beach_lover:    ['pantai', 'bahari', 'laut', 'diving'],
    mountain_soul:  ['gunung', 'vulkanik', 'highland', 'hiking'],
    zen_traveler:   ['healing', 'meditasi', 'resort', 'alam'],
    urban_nomad:    ['kota', 'kuliner', 'fun', 'kopi'],
    eco_warrior:    ['alam', 'taman nasional', 'nature', 'kalimantan'],
    luxury_wanderer:['mewah', 'resort', 'villa', 'couple']
  };

  let topPersonality = 'explorer';
  let topScore = -1;

  Object.entries(pMap).forEach(([type, tags]) => {
    const score = tags.reduce((sum, t) => sum + (s[t] || 0), 0) + Math.random() * 0.3;
    if (score > topScore) {
      topScore = score;
      topPersonality = type;
    }
  });

  return PERSONALITY_TYPES[topPersonality];
}

function showResult() {
  const topDests = computeResults();
  const personality = computePersonality();

  // Render personality
  document.getElementById('personalityIcon').textContent = personality.icon;
  document.getElementById('personalityName').textContent = personality.name;
  document.getElementById('personalityDesc').textContent = personality.desc;
  document.getElementById('resultBadge').textContent = `${personality.icon} ${personality.name}`;

  // Render destination cards
  const grid = document.getElementById('destinationsGrid');
  grid.innerHTML = '';

  topDests.forEach((dest, i) => {
    const card = document.createElement('div');
    card.className = 'dest-card';
    card.style.animationDelay = `${i * 0.1}s`;

    const vibesBadges = (dest.vibes || []).map(v =>
      `<span class="dest-tag">${v}</span>`
    ).join('');

    card.innerHTML = `
      <div class="dest-card-img" style="background: ${dest.gradient}">
        <span class="dest-rank">#${i + 1}</span>
        <span style="filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4)); font-size: 80px;">${dest.emoji}</span>
      </div>
      <div class="dest-card-body">
        <div class="dest-province">📍 ${dest.province}</div>
        <div class="dest-name">${dest.name}</div>
        <div class="dest-desc">${dest.desc}</div>
        <div class="dest-tags">${vibesBadges}</div>
      </div>
    `;

    // Click to open maps
    card.addEventListener('click', () => {
      const q = encodeURIComponent(dest.name + ' ' + dest.province + ' Indonesia');
      window.open(`https://www.google.com/maps/search/?api=1&query=${q}`, '_blank');
    });

    grid.appendChild(card);
  });

  showScreen('result');
}

// ─── ACTIONS ───
document.getElementById('btnStart').addEventListener('click', startQuiz);
document.getElementById('btnRetake').addEventListener('click', startQuiz);
document.getElementById('btnShare').addEventListener('click', shareResult);

function shareResult() {
  const personality = document.getElementById('personalityName').textContent;
  const text = `🌴 Wanderlust Indonesia merekomendasikan aku sebagai "${personality}"!\n\nTemukan destinasi liburanmu di Indonesia → wanderlust-indonesia.vercel.app\n\nMade by Agus Satria Adhitama`;

  if (navigator.share) {
    navigator.share({ title: 'Wanderlust Indonesia', text });
  } else {
    navigator.clipboard.writeText(text).then(() => {
      const btn = document.getElementById('btnShare');
      const original = btn.innerHTML;
      btn.innerHTML = `<span>✓ Disalin!</span>`;
      setTimeout(() => btn.innerHTML = original, 2000);
    });
  }
}

// ─── INIT ───
initTheme();
screens.hero.classList.add('active');
