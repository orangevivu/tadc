// Vivaan Tonni's TADC Review Data Store
export const REVIEW_DATA = {
  author: "Vivaan Tonni",
  title: "My Thoughts On The Amazing Digital Circus",
  subtitle: "Full Rundown, Likes, Hot Takes, Character & Episode Tier Lists",
  intro: "I have been a fan since the pilot. Now that the show is over, these are my thoughts on everything about the Digital Circus. It will include likes, dislikes, episode/character rankings, and more. Let's dive in!",
  
  likes: [
    {
      id: "animation",
      title: "Animation Evolution",
      icon: "✨",
      summary: "The animation has really improved so much since episode 1!",
      detail: "If you compare episodes 8 or 9 to the pilot, you can see the major difference! Especially in episode 8 because there are a bunch of scenes that mirror the pilot. Everyone on the animation team is very talented. All of them pay so much attention to detail and subtle character expressions.",
      tag: "Peak Visuals"
    },
    {
      id: "characters",
      title: "Character Journeys & Growth",
      icon: "🎭",
      summary: "I think all of the characters are great (not really on Jax, but we'll get to that!).",
      detail: "Even side characters like Gummigoo, Scratch, or Queenie are super cool! I also love Pomni's character arc: she went from a scared little jester to a brave little jester. She was the one to start insulting Caine in episode 8, inspiring the others! She was also the 1st to discover Kinger wasn't crazy. Speaking of, Kinger has really grown on me—he'd be the best parent Ragatha never had.",
      tag: "Character Arc"
    },
    {
      id: "voice-acting",
      title: "Phenomenal Voice Acting",
      icon: "🎙️",
      summary: "The Voice Actors in the Digital Circus were phenomenal, especially in episode 9.",
      detail: "Michael Kovach delivered an iconic performance in episode 9, but all of the other voice actors were amazing too. GLITCH made the absolute right choice when finding voice actors.",
      tag: "Performance"
    },
    {
      id: "caine-redemption",
      title: "Caine Resolving His Issues",
      icon: "🎩",
      summary: "Caine getting along with the cast at the end was so heartwarming!",
      detail: "He used to be this all-powerful AI that shoved the cast into random adventures against their will, and now he just becomes part of them. He actually redeemed himself! It was just so cool!",
      tag: "Redemption Arc"
    }
  ],

  dislikes: [
    {
      id: "not-for-kids",
      title: "People Thinking It's For 6-Year-Olds",
      icon: "⚠️",
      summary: "Animation does NOT equal kid-friendly! This is NOT a kids show.",
      detail: "Abstraction is literally suicide! The cast does curse (though Caine uses a swear blocker, like Zooble saying 'Holy S**t' at the end of Ep 8). Caine brutally tortures them in Ep 8, and kids actually get traumatized. Ep 6 features Zooble's mature line (which happens in Ep 9 credits). Even GLITCH and Gooseworx explicitly state it is NOT for kids!",
      tag: "Hot Take"
    },
    {
      id: "too-much-jax",
      title: "Too Much Jax Dominance",
      icon: "🐰",
      summary: "The Finale had too much Jax in it. I am personally not a Jax fan.",
      detail: "I was hoping for attention on Zooble or Gangle, but Jax stole the spotlight. Traumatic backstory is NO excuse to be an asshole! He bullies Gangle and Ragatha relentlessly. According to Youtuber Ayy Lmao, Jax has the most lines in every episode combined—even more than Pomni! Main and side cast (Zooble, Gangle, Ribbit, Scratch) got neglected. I just know Gangle, Zooble, and Ragatha celebrate Jax's death when Pomni isn't around!",
      tag: "Overrated"
    },
    {
      id: "song-falloff",
      title: "TADC Songs & Fan Animation Falloff",
      icon: "🎵",
      summary: "Remember when TADC songs were PEAK?",
      detail: "We used to have classics like 'Happy Place', 'Abstraction', 'Jax Toy', 'The One Who's Running The Show', and 'Not Supposed to Love Me'. But nowadays we have 'Jax Requiem', 'TADC alternate ending' (Kinger 500 cigarettes voice), and 'So Hoppy (Jax version)'. Why did we have such a falloff?! We all want peak TADC songs again!",
      tag: "Fandom Era"
    },
    {
      id: "toxic-fandom",
      title: "Toxic Fandom & Harassment",
      icon: "☣️",
      summary: "About 85% of the fandom is toxic and can't handle opinions.",
      detail: "They are the exact reason Gooseworx hates her fandom! Marissa Lenti (Gangle's VA) actually got death threats just because she shipped Jax and Gangle! This is NOT okay! All of you toxic fans need to lock in.",
      tag: "Callout"
    }
  ],

  episodes: [
    { num: 8, tier: "S", title: "Episode 8 (Mirror & Torment)", desc: "Mirrors pilot scenes, intense Caine torture, Zooble uncensored curse moment.", mirrorPilot: true },
    { num: 9, tier: "S", title: "Episode 9 (The Finale)", desc: "Phenomenal voice acting by Michael Kovach & cast, Caine's heartwarming redemption.", finale: true },
    { num: 4, tier: "S", title: "Episode 4", desc: "Peak animation performance and major character dynamics.", standout: true },
    { num: 7, tier: "S", title: "Episode 7", desc: "Key narrative shifts and emotional weight leading to the finale.", standout: true },
    { num: 6, tier: "A", title: "Episode 6", desc: "Zooble's memorable lines and intense circus trial challenges.", standout: false },
    { num: 5, tier: "A", title: "Episode 5", desc: "Solid character interplay and world-building depth.", standout: false },
    { num: 1, tier: "A", title: "Episode 1 (The Pilot)", desc: "The iconic beginning where it all started!", pilot: true },
    { num: 3, tier: "B", title: "Episode 3", desc: "Decent episode with fun moments, but outshone by later entries.", standout: false },
    { num: 2, tier: "B", title: "Episode 2", desc: "Gummigoo introduction and early digital world exploration.", standout: false }
  ],

  characters: [
    {
      id: "gangle",
      name: "Gangle",
      tier: "S",
      image: "assets/images/gangle_official.png",
      role: "Ribbon & Masks",
      quote: "My comedy mask keeps breaking...",
      vivaanOpinion: "S-Tier absolute favorite! Relentlessly bullied by Jax. Deserves way more love and celebration!",
      lineShare: "6%"
    },
    {
      id: "zooble",
      name: "Zooble",
      tier: "S",
      image: "assets/images/zooble_official.png",
      role: "Mix-and-Match Geometry",
      quote: "Holy S**t!",
      vivaanOpinion: "S-Tier! Delivers iconic mature lines and drops the only uncensored curse in Ep 8. Neglected due to Jax!",
      lineShare: "8%"
    },
    {
      id: "pomni",
      name: "Pomni",
      tier: "S",
      image: "assets/images/pomni_official.png",
      role: "The Main Jester",
      quote: "Is this... real?",
      vivaanOpinion: "S-Tier! Amazing character progression from a scared jester to a brave leader who stood up to Caine!",
      lineShare: "22%"
    },
    {
      id: "kinger",
      name: "Kinger",
      tier: "A",
      image: "assets/images/kinger_official.png",
      role: "Chess King & Veteran",
      quote: "DID SOMEONE MENTION INSECT COLLECTION?!",
      vivaanOpinion: "A-Tier! Grew on me so much since pilot. He would be the best parent that Ragatha never had!",
      lineShare: "12%"
    },
    {
      id: "ragatha",
      name: "Ragatha",
      tier: "A",
      image: "assets/images/ragatha_official.png",
      role: "The Optimistic Doll",
      quote: "Everything is going to be okay!",
      vivaanOpinion: "A-Tier! Extremely sweet and patient despite Jax's constant bullying. Needs Kinger's parent energy!",
      lineShare: "15%"
    },
    {
      id: "caine",
      name: "Caine",
      tier: "A",
      image: "assets/images/caine_official.webp",
      role: "Ringmaster AI",
      quote: "WELCOME TO THE AMAZING DIGITAL CIRCUS!",
      vivaanOpinion: "A-Tier! Went from an all-powerful AI tyrant to redeeming himself and becoming part of the family!",
      lineShare: "18%"
    },
    {
      id: "ribbit",
      name: "Ribbit",
      tier: "A",
      image: "assets/images/ribbit_official.png",
      role: "Frog Companion",
      quote: "Ribbit...",
      vivaanOpinion: "A-Tier! Very cool character who unfortunately got neglected during the finale spotlight.",
      lineShare: "4%"
    },
    {
      id: "kaufmo",
      name: "Kaufmo",
      tier: "A",
      image: "assets/images/kaufmo_official.png",
      role: "Abstracted Jester",
      quote: "[Abstracted Noises]",
      vivaanOpinion: "A-Tier! Tragic figure whose Abstraction proves TADC is NOT a 6-year-old kid's show!",
      lineShare: "2%"
    },
    {
      id: "scratch",
      name: "Scratch",
      tier: "B",
      image: "assets/images/scratch_official.png",
      role: "Side Cast",
      quote: "*Bark/Scratch*",
      vivaanOpinion: "B-Tier! Really cool side character who deserved more screen time.",
      lineShare: "3%"
    },
    {
      id: "queenie",
      name: "Queenie",
      tier: "B",
      image: "assets/images/queenie_official.png",
      role: "Abstracted Chess Queen",
      quote: "[Memory Echo]",
      vivaanOpinion: "B-Tier! Kinger's lost piece. Beautiful lore significance.",
      lineShare: "2%"
    },
    {
      id: "bubble",
      name: "Bubble",
      tier: "B",
      image: "assets/images/bubble_official.png",
      role: "Caine's Sidekick",
      quote: "You made it with special love!",
      vivaanOpinion: "B-Tier! Fun chaotic bubble assistant.",
      lineShare: "5%"
    },
    {
      id: "gummigoo",
      name: "Gummigoo",
      tier: "B",
      image: "assets/images/gummigoo_official.png",
      role: "Gummy Crocodile Bandit",
      quote: "Crikey, mate!",
      vivaanOpinion: "B-Tier! Great side character from Ep 2 who left a lasting impression.",
      lineShare: "4%"
    },
    {
      id: "jax",
      name: "Jax",
      tier: "C",
      image: "assets/images/jax_official.png",
      role: "The Purple Rabbit",
      quote: "Ladies first... or whatever.",
      vivaanOpinion: "C-Tier! Having a traumatic backstory is NO excuse to be an asshole! Stole the finale spotlight & has the MOST lines in the entire show (even more than Pomni according to Ayy Lmao). Bullies Gangle and Ragatha!",
      lineShare: "28%"
    }
  ],

  songs: {
    peak: [
      { name: "Happy Place", status: "🔥 PEAK CLASSIC" },
      { name: "Abstraction", status: "🔥 PEAK CLASSIC" },
      { name: "Jax Toy", status: "🔥 PEAK CLASSIC" },
      { name: "The One Who's Running The Show", status: "🔥 PEAK CLASSIC" },
      { name: "Not Supposed to Love Me", status: "🔥 PEAK CLASSIC" }
    ],
    falloff: [
      { name: "Jax Requiem", status: "📉 FALLOFF ERA" },
      { name: "TADC Alternate Ending (500 Cigarettes Voice)", status: "📉 FALLOFF ERA" },
      { name: "So Hoppy (Jax Version)", status: "📉 FALLOFF ERA" }
    ]
  }
};
