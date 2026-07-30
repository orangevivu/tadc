import { REVIEW_DATA } from './data.js';
import { sounds } from './sound.js';
import { CaineSwearFilter } from './swearFilter.js';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  // Sound FX toggle listener
  const soundToggle = document.getElementById('sound-toggle');
  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      const active = sounds.toggle();
      soundToggle.classList.toggle('muted', !active);
      soundToggle.innerHTML = active ? '🔊 Audio ON' : '🔇 Audio OFF';
      sounds.playClick();
    });
  }

  // Glitch mode toggle listener
  const glitchToggle = document.getElementById('glitch-toggle');
  if (glitchToggle) {
    glitchToggle.addEventListener('click', () => {
      document.body.classList.toggle('glitch-mode-active');
      sounds.playGlitch();
      glitchToggle.classList.toggle('active');
    });
  }

  // Swear Blocker simulation init
  const swearFilter = new CaineSwearFilter();
  swearFilter.initUI('swear-blocker-widget');

  // Interactive Curtain Raising
  const enterBtn = document.getElementById('enter-circus-btn');
  const curtainLeft = document.getElementById('curtain-l');
  const curtainRight = document.getElementById('curtain-r');
  const introOverlay = document.getElementById('intro-overlay');

  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
      sounds.playFanfare();
      curtainLeft.classList.add('open');
      curtainRight.classList.add('open');
      setTimeout(() => {
        introOverlay.style.display = 'none';
      }, 1200);
    });
  }

  // Render Likes (The Positives)
  renderLikes();

  // Render Dislikes (The Critiques)
  renderDislikes();

  // Render Tier Lists
  renderEpisodeTierList();
  renderCharacterTierList();

  // Setup Character Inspector Modal Events
  setupModalEvents();

  // Setup Songs Jukebox
  renderJukebox();

  // Setup Jax Line Count chart
  renderJaxChart();
}

function renderLikes() {
  const container = document.getElementById('likes-cards-container');
  if (!container) return;

  container.innerHTML = REVIEW_DATA.likes.map(item => `
    <div class="glow-card card-like" data-id="${item.id}">
      <div class="card-accent-bar"></div>
      <div class="card-icon">${item.icon}</div>
      <span class="card-tag positive">${item.tag}</span>
      <h3>${item.title}</h3>
      <p class="summary-text">${item.summary}</p>
      <div class="card-expand-content">
        <p class="detail-text">${item.detail}</p>
      </div>
      <button class="expand-btn">Read Deep Dive 👁️</button>
    </div>
  `).join('');

  container.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      sounds.playClick();
      const card = e.target.closest('.glow-card');
      card.classList.toggle('expanded');
      btn.innerText = card.classList.contains('expanded') ? 'Collapse View 🔺' : 'Read Deep Dive 👁️';
    });
  });
}

function renderDislikes() {
  const container = document.getElementById('dislikes-cards-container');
  if (!container) return;

  container.innerHTML = REVIEW_DATA.dislikes.map(item => `
    <div class="glow-card card-dislike" data-id="${item.id}">
      <div class="card-accent-bar"></div>
      <div class="card-icon">${item.icon}</div>
      <span class="card-tag negative">${item.tag}</span>
      <h3>${item.title}</h3>
      <p class="summary-text">${item.summary}</p>
      <div class="card-expand-content">
        <p class="detail-text">${item.detail}</p>
      </div>
      <button class="expand-btn">Read Deep Dive 👁️</button>
    </div>
  `).join('');

  container.querySelectorAll('.expand-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      sounds.playClick();
      const card = e.target.closest('.glow-card');
      card.classList.toggle('expanded');
      btn.innerText = card.classList.contains('expanded') ? 'Collapse View 🔺' : 'Read Deep Dive 👁️';
    });
  });
}

function renderEpisodeTierList() {
  const tiers = ['S', 'A', 'B'];
  tiers.forEach(tier => {
    const listEl = document.getElementById(`episodes-tier-${tier.toLowerCase()}`);
    if (!listEl) return;

    const episodesInTier = REVIEW_DATA.episodes.filter(ep => ep.tier === tier);
    listEl.innerHTML = episodesInTier.map(ep => `
      <div class="tier-item-card episode-card" title="${ep.desc}">
        <div class="ep-num">Ep ${ep.num}</div>
        <div class="ep-title">${ep.title}</div>
        <div class="ep-desc">${ep.desc}</div>
        ${ep.mirrorPilot ? '<span class="ep-badge mirror">🔄 Mirrors Pilot</span>' : ''}
        ${ep.finale ? '<span class="ep-badge finale">🏁 Finale</span>' : ''}
        ${ep.pilot ? '<span class="ep-badge pilot">⭐ Pilot</span>' : ''}
      </div>
    `).join('');
  });
}

function renderCharacterTierList() {
  const tiers = ['S', 'A', 'B', 'C'];
  tiers.forEach(tier => {
    const listEl = document.getElementById(`characters-tier-${tier.toLowerCase()}`);
    if (!listEl) return;

    const charsInTier = REVIEW_DATA.characters.filter(char => char.tier === tier);
    listEl.innerHTML = charsInTier.map(char => `
      <div class="tier-item-card character-card" data-id="${char.id}">
        <div class="char-image-wrap">
          <img src="${char.image}" alt="${char.name}" onerror="this.src='https://static.wikia.nocookie.net/tadc/images/8/82/GlitchWebsitePomniRender.png'" />
        </div>
        <div class="char-name">${char.name}</div>
        <span class="char-role-badge">${char.role}</span>
        <button class="inspect-btn">Inspect 🔍</button>
      </div>
    `).join('');
  });

  document.querySelectorAll('.character-card').forEach(card => {
    card.addEventListener('click', () => {
      const charId = card.getAttribute('data-id');
      const character = REVIEW_DATA.characters.find(c => c.id === charId);
      if (character) {
        openCharacterModal(character);
      }
    });
  });
}

function openCharacterModal(char) {
  sounds.playClick();
  const modal = document.getElementById('character-modal');
  const overlay = document.getElementById('modal-overlay');
  
  if (!modal || !overlay) return;

  document.getElementById('modal-char-image').src = char.image;
  document.getElementById('modal-char-image').onerror = function() {
    this.src = 'https://static.wikia.nocookie.net/tadc/images/8/82/GlitchWebsitePomniRender.png';
  };
  document.getElementById('modal-char-name').innerText = char.name;
  document.getElementById('modal-char-tier').innerText = `${char.tier} Tier`;
  document.getElementById('modal-char-tier').className = `tier-indicator tier-${char.tier.toLowerCase()}`;
  document.getElementById('modal-char-role').innerText = char.role;
  document.getElementById('modal-char-quote').innerText = `"${char.quote}"`;
  document.getElementById('modal-char-opinion').innerText = char.vivaanOpinion;
  document.getElementById('modal-char-lineshare').innerText = char.lineShare;

  modal.style.display = 'block';
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

function setupModalEvents() {
  const closeBtn = document.getElementById('modal-close-btn');
  const overlay = document.getElementById('modal-overlay');
  const modal = document.getElementById('character-modal');

  const closeModal = () => {
    sounds.playClick();
    if (modal) modal.style.display = 'none';
    if (overlay) overlay.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', closeModal);
}

function renderJukebox() {
  const peakContainer = document.getElementById('jukebox-peak-songs');
  const falloffContainer = document.getElementById('jukebox-falloff-songs');

  if (peakContainer) {
    peakContainer.innerHTML = REVIEW_DATA.songs.peak.map(song => `
      <div class="song-row peak">
        <span class="music-icon">🎵</span>
        <span class="song-name">${song.name}</span>
        <span class="song-status">${song.status}</span>
      </div>
    `).join('');
  }

  if (falloffContainer) {
    falloffContainer.innerHTML = REVIEW_DATA.songs.falloff.map(song => `
      <div class="song-row falloff">
        <span class="music-icon">🔇</span>
        <span class="song-name">${song.name}</span>
        <span class="song-status">${song.status}</span>
      </div>
    `).join('');
  }
}

function renderJaxChart() {
  const chartContainer = document.getElementById('jax-line-chart');
  if (!chartContainer) return;

  const characters = REVIEW_DATA.characters.slice().sort((a, b) => {
    return parseFloat(b.lineShare) - parseFloat(a.lineShare);
  });

  chartContainer.innerHTML = `
    <div class="chart-wrapper">
      <div class="chart-header">
        <h4>Show Screen Time & Line Share Percentage (According to Ayy Lmao stats)</h4>
        <p>Jax has the absolute highest volume of script lines in every episode combined, overtaking even the main character Pomni.</p>
      </div>
      <div class="bar-chart">
        ${characters.map(c => {
          const val = parseFloat(c.lineShare);
          const isJax = c.id === 'jax';
          return `
            <div class="chart-bar-row ${isJax ? 'highlight-jax' : ''}">
              <div class="bar-label">${c.name}</div>
              <div class="bar-track">
                <div class="bar-fill" style="width: ${val * 3}%">
                  <span class="bar-val-text">${c.lineShare}</span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}
