/**
 * Intercultural Challenge Game — Weekly Mission Sets
 * Each week has 6 missions across 4 categories:
 *   language  — learn phrases or communicate across languages
 *   visit     — explore a place in Luxembourg
 *   connect   — interact with people from different backgrounds
 *   culture   — experience cultural life
 *   biergerpakt — take part in an official Biergerpakt activity
 *
 * Missions rotate weekly using weekIndex().
 */

export const CATEGORY_META = {
  language:    { bg: '#F3E8FF', text: '#7C3AED', border: '#DDD6FE', icon: '🗣️', label: 'Language' },
  visit:       { bg: '#D1FAE5', text: '#065F46', border: '#6EE7B7', icon: '📍', label: 'Explore' },
  connect:     { bg: '#DBEAFE', text: '#1D4ED8', border: '#BFDBFE', icon: '🤝', label: 'Connect' },
  culture:     { bg: '#FEF3C7', text: '#B45309', border: '#FDE68A', icon: '🎭', label: 'Culture' },
  biergerpakt: { bg: '#E0F2FE', text: '#0369A1', border: '#7DD3FC', icon: '🤝', label: 'Biergerpakt' },
}

export const XP_VALUES = { easy: 30, medium: 60, hard: 100 }

/** Weekly mission packs — indexed by weekIndex() % MISSION_WEEKS.length */
export const MISSION_WEEKS = [
  // ── Week 0 ──────────────────────────────────────────────────────
  {
    theme: 'First Hellos',
    themeIcon: '👋',
    missions: [
      {
        id: 'w0-m1',
        category: 'language',
        difficulty: 'easy',
        emoji: '🗣️',
        title: 'Say "Moien" to three people',
        description: 'Greet three different people today using the Luxembourgish word for hello — "Moien" (MOY-en). Try a shopkeeper, a neighbour, or a colleague.',
        tip: '"Moien" works morning to evening. A smile goes a long way!',
        biergerpaktLink: null,
      },
      {
        id: 'w0-m2',
        category: 'visit',
        difficulty: 'medium',
        emoji: '🏛️',
        title: 'Visit a local market',
        description: 'Head to one of Luxembourg\'s weekly markets — such as the Marché de la Ville in Luxembourg City or a local commune market. Buy at least one item and chat briefly with a vendor.',
        tip: 'Find your nearest market at: luxembourg.public.lu',
        biergerpaktLink: null,
      },
      {
        id: 'w0-m3',
        category: 'connect',
        difficulty: 'medium',
        emoji: '🤝',
        title: 'Ask a neighbour where they\'re from',
        description: 'Strike up a conversation with a neighbour you don\'t know well. Ask where they\'re originally from and share where you\'re from too. You might discover unexpected connections!',
        tip: 'Not sure where to start? A simple "Hi, I don\'t think we\'ve properly met yet" works perfectly.',
        biergerpaktLink: null,
      },
      {
        id: 'w0-m4',
        category: 'culture',
        difficulty: 'easy',
        emoji: '🎵',
        title: 'Listen to a Luxembourgish song',
        description: 'Find and listen to a song in Lëtzebuergesch. Try artists like Serge Tonnar, Def Dogg, or look up "Ons Heemecht" — the national anthem. Bonus: look up the lyrics!',
        tip: 'Search "musique lëtzebuergesch" or browse the RTL Lëtzebuerg music playlist.',
        biergerpaktLink: null,
      },
      {
        id: 'w0-m5',
        category: 'biergerpakt',
        difficulty: 'hard',
        emoji: '📋',
        title: 'Register on the Biergerpakt platform',
        description: 'Create your account on biergerpakt.zesummeliewen.lu. Explore the activities and events available in your area. The platform connects newcomers and long-term residents for shared experiences.',
        tip: 'Registration is free and available in multiple languages.',
        biergerpaktLink: 'https://biergerpakt.zesummeliewen.lu/en/',
      },
      {
        id: 'w0-m6',
        category: 'language',
        difficulty: 'medium',
        emoji: '📚',
        title: 'Learn 5 everyday Luxembourgish phrases',
        description: 'Master these five phrases: "Moien" (hello), "Äddi" (goodbye), "Merci" (thank you), "Wéi geet et?" (how are you?), "Ech verstinn net" (I don\'t understand).',
        tip: 'Write them on a sticky note and keep it somewhere visible for the week.',
        biergerpaktLink: null,
      },
    ],
  },

  // ── Week 1 ──────────────────────────────────────────────────────
  {
    theme: 'Discover Your Neighbourhood',
    themeIcon: '🏘️',
    missions: [
      {
        id: 'w1-m1',
        category: 'visit',
        difficulty: 'easy',
        emoji: '🚶',
        title: 'Take a walk in a new neighbourhood',
        description: 'Explore a part of Luxembourg you\'ve never visited before — a different commune, a new street, or a park you\'ve always passed but never entered. Notice what\'s around you.',
        tip: 'Try Bonnevoie, Hollerich, Esch-sur-Alzette, or Differdange for a different atmosphere.',
        biergerpaktLink: null,
      },
      {
        id: 'w1-m2',
        category: 'connect',
        difficulty: 'medium',
        emoji: '☕',
        title: 'Have coffee with someone from a different culture',
        description: 'Invite a colleague, classmate, or acquaintance from a different cultural background for a coffee or tea. Ask them one thing they love about their home country.',
        tip: 'Be curious and open — everyone has a fascinating story.',
        biergerpaktLink: null,
      },
      {
        id: 'w1-m3',
        category: 'language',
        difficulty: 'easy',
        emoji: '🇫🇷',
        title: 'Order something in French',
        description: 'Next time you\'re at a café or restaurant, place your order in French — even just "Un café, s\'il vous plaît" (a coffee, please). French is one of Luxembourg\'s three official languages!',
        tip: '"L\'addition, s\'il vous plaît" means "the bill, please" — a useful one to know!',
        biergerpaktLink: null,
      },
      {
        id: 'w1-m4',
        category: 'culture',
        difficulty: 'medium',
        emoji: '🏰',
        title: 'Visit a local museum or cultural site',
        description: 'Spend at least 30 minutes at a museum, castle, or cultural heritage site in Luxembourg. Options include the MUDAM, Musée National, Casino Luxembourg, or any of the many local maisons de la culture.',
        tip: 'Many museums have free entry on certain days — check their websites.',
        biergerpaktLink: null,
      },
      {
        id: 'w1-m5',
        category: 'biergerpakt',
        difficulty: 'hard',
        emoji: '🎉',
        title: 'Attend a Biergerpakt activity',
        description: 'Sign up for and attend a Biergerpakt event or activity in your area. This could be a guided walk, a cooking class, a language exchange, or a community gathering.',
        tip: 'Browse upcoming activities on the Biergerpakt platform sorted by your commune.',
        biergerpaktLink: 'https://biergerpakt.zesummeliewen.lu/en/activities/',
      },
      {
        id: 'w1-m6',
        category: 'connect',
        difficulty: 'medium',
        emoji: '🌍',
        title: 'Learn a greeting in a neighbour\'s language',
        description: 'Find out what language your neighbour, colleague, or friend speaks at home, then learn to say "hello" in that language and use it with them this week.',
        tip: 'Luxembourg has residents from over 170 nationalities — the variety is incredible!',
        biergerpaktLink: null,
      },
    ],
  },

  // ── Week 2 ──────────────────────────────────────────────────────
  {
    theme: 'Food & Culture',
    themeIcon: '🍽️',
    missions: [
      {
        id: 'w2-m1',
        category: 'culture',
        difficulty: 'easy',
        emoji: '🥘',
        title: 'Try a traditional Luxembourgish dish',
        description: 'Find and try a traditional Luxembourg dish: Judd mat Gaardebounen (smoked pork with broad beans), Bouneschlupp (green bean soup), or Gromperekichelcher (potato fritters) at a local restaurant or café.',
        tip: 'Many traditional dishes are served at "guinguettes" (local countryside restaurants).',
        biergerpaktLink: null,
      },
      {
        id: 'w2-m2',
        category: 'connect',
        difficulty: 'medium',
        emoji: '🍜',
        title: 'Share a meal from your own culture',
        description: 'Cook or share a dish from your own cultural background with a colleague, friend, or neighbour. Use food as a bridge to tell them something about where you\'re from.',
        tip: 'Potluck lunches at work are a great way to do this together as a group!',
        biergerpaktLink: null,
      },
      {
        id: 'w2-m3',
        category: 'visit',
        difficulty: 'medium',
        emoji: '🌿',
        title: 'Explore a natural site in Luxembourg',
        description: 'Visit one of Luxembourg\'s beautiful natural areas: the Müllerthal (Little Switzerland), the Moselle Valley, the Ardennes, or the Minett biosphere reserve.',
        tip: 'Visit Luxembourg\'s website (visitluxembourg.com) has excellent trail maps and nature guides.',
        biergerpaktLink: null,
      },
      {
        id: 'w2-m4',
        category: 'language',
        difficulty: 'medium',
        emoji: '📰',
        title: 'Read a news article in a language you\'re learning',
        description: 'Find and read a short news article from a Luxembourg media outlet in a language you\'re learning or practising — Luxembourgish (RTL.lu), French (Tageblatt.lu), or German (Wort.lu).',
        tip: 'Even reading headlines and captions counts — the habit is what matters!',
        biergerpaktLink: null,
      },
      {
        id: 'w2-m5',
        category: 'biergerpakt',
        difficulty: 'hard',
        emoji: '👥',
        title: 'Invite someone to a Biergerpakt event',
        description: 'Find a Biergerpakt event you find interesting, then invite a friend, neighbour, or colleague to join you. Sharing the experience makes it even richer.',
        tip: 'The Biergerpakt platform lets you browse events by date, commune, and theme.',
        biergerpaktLink: 'https://biergerpakt.zesummeliewen.lu/en/activities/',
      },
      {
        id: 'w2-m6',
        category: 'culture',
        difficulty: 'easy',
        emoji: '📖',
        title: 'Read about a Luxembourg tradition',
        description: 'Look up and read about one Luxembourg cultural tradition: the Schueberfouer fair, Emaischen (the pottery fair), the Octave pilgrimage, or the Cavalcade de Wasserbillig.',
        tip: 'The luxembourg.public.lu portal has detailed cultural guides.',
        biergerpaktLink: null,
      },
    ],
  },

  // ── Week 3 ──────────────────────────────────────────────────────
  {
    theme: 'Civic Life',
    themeIcon: '🏛️',
    missions: [
      {
        id: 'w3-m1',
        category: 'visit',
        difficulty: 'medium',
        emoji: '🏛️',
        title: 'Visit a public institution',
        description: 'Visit one of Luxembourg\'s public institutions open to the public: the Chamber of Deputies (when open for visits), the European Court of Justice, the Court of Auditors, or a local mairie (town hall).',
        tip: 'The Luxembourg Parliament offers free guided tours — book via chd.lu.',
        biergerpaktLink: null,
      },
      {
        id: 'w3-m2',
        category: 'language',
        difficulty: 'medium',
        emoji: '🗺️',
        title: 'Use Luxembourgish to ask for directions',
        description: 'Ask for directions using Luxembourgish: "Wou ass...?" (Where is...?). Try asking where the nearest train station, post office, or pharmacy is.',
        tip: '"Kënnt Dir mir soen, wou... ass?" = "Could you tell me where... is?" is a polite way to ask.',
        biergerpaktLink: null,
      },
      {
        id: 'w3-m3',
        category: 'connect',
        difficulty: 'hard',
        emoji: '🤲',
        title: 'Volunteer for a local community activity',
        description: 'Sign up for a one-time volunteering activity in your community — a clean-up day, a food bank, a community garden, or a helping hand for a local association.',
        tip: 'Search for volunteering opportunities on luxassoc.lu or your commune\'s website.',
        biergerpaktLink: null,
      },
      {
        id: 'w3-m4',
        category: 'culture',
        difficulty: 'easy',
        emoji: '🎨',
        title: 'Visit a free cultural event',
        description: 'Attend a free cultural event in Luxembourg this week — an outdoor concert, an art exhibition opening, a street performance, or a public lecture.',
        tip: 'Check the Agenda Culturel (agenda.lu) for free events near you.',
        biergerpaktLink: null,
      },
      {
        id: 'w3-m5',
        category: 'biergerpakt',
        difficulty: 'medium',
        emoji: '📝',
        title: 'Complete a Biergerpakt online course',
        description: 'Complete at least one short online course or module available through the Biergerpakt platform about Luxembourg\'s culture, institutions, or intercultural living.',
        tip: 'The online resources are available in multiple languages.',
        biergerpaktLink: 'https://biergerpakt.zesummeliewen.lu/en/',
      },
      {
        id: 'w3-m6',
        category: 'connect',
        difficulty: 'medium',
        emoji: '🧠',
        title: 'Join a language exchange',
        description: 'Participate in a language exchange: find a partner who wants to learn your language while you learn theirs. Meet for 30 minutes, switching halfway.',
        tip: 'Language exchanges can be found through Biergerpakt, Meetup.com, or local Facebook groups.',
        biergerpaktLink: 'https://biergerpakt.zesummeliewen.lu/en/activities/',
      },
    ],
  },

  // ── Week 4 ──────────────────────────────────────────────────────
  {
    theme: 'Nature & Wellbeing',
    themeIcon: '🌿',
    missions: [
      {
        id: 'w4-m1',
        category: 'visit',
        difficulty: 'easy',
        emoji: '🌳',
        title: 'Spend an hour in a Luxembourg park',
        description: 'Visit a park or green space and spend at least one hour there. Observe the people around you — Luxembourg\'s parks reflect the country\'s remarkable diversity.',
        tip: 'Try Parc de Merl, Parc Schlassbësch, or the gardens of the Abbaye de Neumünster in the Grund.',
        biergerpaktLink: null,
      },
      {
        id: 'w4-m2',
        category: 'language',
        difficulty: 'easy',
        emoji: '🔤',
        title: 'Learn 5 nature words in Luxembourgish',
        description: 'Learn these Luxembourgish nature words: Bësch (forest), Floss (river), Bierg (mountain/hill), Blumm (flower), Vull (bird). Use them during your outdoor time this week.',
        tip: 'Try naming what you see during a walk — it\'s the fastest way to make vocabulary stick.',
        biergerpaktLink: null,
      },
      {
        id: 'w4-m3',
        category: 'connect',
        difficulty: 'medium',
        emoji: '🏃',
        title: 'Join a group sport or fitness activity',
        description: 'Participate in a group sport or fitness session — a running club, a yoga class, a football match, or a group hike. Sport is a universal language that breaks barriers.',
        tip: 'Many communes have free or low-cost sports activities open to all residents.',
        biergerpaktLink: null,
      },
      {
        id: 'w4-m4',
        category: 'culture',
        difficulty: 'medium',
        emoji: '🎬',
        title: 'Watch a film from a different culture',
        description: 'Watch a film (or documentary) from a culture different from your own — bonus points if it\'s from one of Luxembourg\'s many represented nationalities. Discuss it with someone afterwards.',
        tip: 'Cinémathèque de la Ville de Luxembourg shows international and art-house films regularly.',
        biergerpaktLink: null,
      },
      {
        id: 'w4-m5',
        category: 'biergerpakt',
        difficulty: 'hard',
        emoji: '🌱',
        title: 'Organise a Biergerpakt-inspired gathering',
        description: 'Take the initiative: organise a small gathering — a picnic, a board game night, a neighbourhood barbecue — and invite people from at least two different cultural backgrounds.',
        tip: 'You can get inspiration and even support for your event through the Biergerpakt platform.',
        biergerpaktLink: 'https://biergerpakt.zesummeliewen.lu/en/',
      },
      {
        id: 'w4-m6',
        category: 'visit',
        difficulty: 'medium',
        emoji: '🚂',
        title: 'Take a train to a different town',
        description: 'Use Luxembourg\'s free public transport (trains, buses, or trams are all free!) to visit a town or village you\'ve never been to. Public transport in Luxembourg is unique in Europe.',
        tip: 'Luxembourg was the first country in the world to make all public transport completely free in 2020.',
        biergerpaktLink: null,
      },
    ],
  },
]

/**
 * Returns the mission set for the given week index.
 */
export function getWeeklyMissions(weekIdx) {
  return MISSION_WEEKS[weekIdx % MISSION_WEEKS.length]
}
