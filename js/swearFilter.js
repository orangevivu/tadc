import { sounds } from './sound.js';

export class CaineSwearFilter {
  constructor() {
    this.curseWords = [
      "br*th*rf*ck*r", "br*therfucker", "brotherfucker", "ch*ld f*ck*r", "ch*ld fucker", "ch*ld-f*ck*r",
      "ch*ld-fucker", "child fucker", "child-fucker", "f*th*rf*ck*r", "f*therfucker", "fatherfucker",
      "m*th*rf*ck*r", "m*therfucker", "motherfucker", "s*st*rf*ck*r", "s*sterfucker", "sisterfucker",
      "ch*ldf*ck*r", "ch*ldfucker", "childfucker", "c*cks*ck*r", "c*cksucker", "cocksucker",
      "s*st*rf*ck", "s*sterfuck", "sisterfuck", "d*ck h**d", "d*ck head", "d*ck-h**d",
      "d*ck-head", "dick head", "dick-head", "g*dd*mm*t", "g*dd*mn*d", "g*dd*mn*t",
      "g*ddammit", "g*ddamned", "g*ddamnit", "goddammit", "goddamned", "goddamnit",
      "h*rs*sh*t", "h*rseshit", "horseshit", "p*gf*ck*r", "p*gfucker", "pigfucker",
      "*rs*h**d", "*rs*h*l*", "*rsehead", "*rsehole", "arsehead", "arsehole",
      "b*ll*cks", "b*llocks", "b*llsh*t", "b*llshit", "bollocks", "bullshit",
      "d*ckh**d", "d*ckhead", "d*mb *ss", "d*mb ass", "d*mb-*ss", "d*mb-ass",
      "dickhead", "dumb ass", "dumb-ass", "g*dsd*mn", "g*dsdamn", "godsdamn",
      "j*ck *ss", "j*ck ass", "j*ck-*ss", "j*ck-ass", "jack ass", "jack-ass",
      "*ssh*l*", "*sshole", "asshole", "b*st*rd", "b*stard", "bastard",
      "d*mb*ss", "d*mbass", "dumbass", "f*ck*ng", "f*cking", "fucking",
      "g*dd*mn", "g*ddamn", "goddamn", "j*ck*ss", "j*ckass", "jackass",
      "sp*st*c", "sp*stic", "spastic", "b*gg*r", "b*gger", "bl**dy",
      "bl*ody", "bloody", "bugger", "ch*gg*", "ch*gga", "chigga",
      "d*mm*t", "d*mmit", "d*mn*d", "d*mned", "dammit", "damned",
      "f*ck*d", "f*ck*r", "f*cked", "f*cker", "f*gg*t", "f*ggot",
      "faggot", "fucked", "fucker", "tr*nny", "tranny", "w*nk*r",
      "w*nker", "wanker", "b*tch", "bitch", "n*gg*", "n*gga",
      "nigga", "p*ssy", "pr*ck", "prick", "pussy", "sh*t*",
      "sh*te", "shite", "*rs*", "*rse", "a**e", "a*s*",
      "arse", "c**k", "c**p", "c**t", "c*a*", "c*c*",
      "cock", "cr*p", "crap", "cunt", "d**e", "d**k",
      "d**n", "d*c*", "d*ck", "d*k*", "d*m*", "d*mn",
      "damn", "dick", "dyk*", "dyke", "f**k", "f*c*",
      "f*ck", "fuck", "h**l", "h*l*", "h*ll", "hell",
      "k**e", "k*k*", "k*ke", "kike", "p**s", "p*s*",
      "p*ss", "piss", "s**t", "s*i*", "s*u*", "sh*t",
      "shit", "sl*t", "slut", "t**t", "t*a*", "tw*t",
      "twat", "*ss", "a**", "a*s", "ass", "f**",
      "f*g", "fag", "sex", "s**", "nigger", "n*gger", "penis", "p*nis", "epstein"
    ];
  }

  escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  filterText(text) {
    if (!text) return '';
    let replaced = text;
    let foundCurse = false;

    this.curseWords.forEach(word => {
      const escaped = this.escapeRegExp(word);
      const hasSpecial = /[^a-zA-Z0-9]/.test(word);
      const pattern = hasSpecial ? escaped : `\\b${escaped}\\b`;
      const regex = new RegExp(pattern, 'gi');

      if (regex.test(replaced)) {
        foundCurse = true;
        // Reset regex index
        regex.lastIndex = 0;
        replaced = replaced.replace(regex, `<span class="censor-badge" title="Caine Swear Blocker Active!">🎪 [CENSOR] 🎺</span>`);
      }
    });

    if (foundCurse) {
      sounds.playCensorSqueak();
    }
    return replaced;
  }

  initUI(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="swear-filter-card">
        <div class="caine-avatar-mini">
          <img src="assets/images/caine_official.webp" alt="Caine Ringmaster" />
        </div>
        <div class="filter-body">
          <h3>🎩 Caine's Interactive Swear Blocker Simulator</h3>
          <p class="filter-desc">
            "Remember folks, Caine strictly enforces a family-friendly filter in the Digital Circus! Try typing a cursed sentence below to see the Swear Blocker in action!"
          </p>
          <div class="filter-input-wrap">
            <textarea id="swear-input" placeholder="Type something like: 'Jax is being a total asshole' or 'Holy shit Zooble!'"></textarea>
            <button id="swear-btn" class="tadc-btn primary">Block Profanity 📢</button>
          </div>
          <div class="filter-output-wrap">
            <label>Caine-Approved Clean Output:</label>
            <div id="swear-output" class="swear-output-box">Your filtered output will appear here with TADC squeaks!</div>
          </div>
        </div>
      </div>
    `;

    const input = document.getElementById('swear-input');
    const btn = document.getElementById('swear-btn');
    const output = document.getElementById('swear-output');

    const updateFilter = () => {
      const val = input.value;
      if (!val.trim()) {
        output.innerHTML = '<span style="color: rgba(255,255,255,0.4)">Your filtered output will appear here with TADC squeaks!</span>';
        return;
      }
      output.innerHTML = this.filterText(val);
    };

    btn.addEventListener('click', () => {
      sounds.playClick();
      updateFilter();
    });

    input.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') {
        updateFilter();
      }
    });
  }
}

