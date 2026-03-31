import { useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// ZLS Attribution — Referenced at every stage of the game
// ─────────────────────────────────────────────────────────────────────────────
const ZLS_REF = {
  book: "Eis Sprooch richteg schreiwen — English Version",
  author: "Josy Braun",
  publisher: "ZLS (Zenter fir d'Lëtzebuerger Sprooch) / SCRIPT",
  year: "2020",
  isbn: "ISBN 978-99959-1-207-9",
  ortho: "D'Lëtzebuerger Orthografie (ZLS/CPLL, 2019, ISBN 978-99959-1-163-8)",
  lod: "Lëtzebuerger Online Dictionnaire — www.lod.lu",
  note: "All spelling rules in this game are based on and referenced from official ZLS publications. This game does not reproduce copyrighted content — it explains and practises the rules described in those works. For the complete reference, please consult the official publications.",
}

// ─────────────────────────────────────────────────────────────────────────────
// Game Data — 8 Chapters based on ZLS spelling guide
// ─────────────────────────────────────────────────────────────────────────────
const CHAPTERS = [
  {
    id: 1,
    title: "The Luxembourgish Alphabet",
    subtitle: "Meet the special characters",
    icon: "🔤",
    color: "#8B5CF6",
    colorLight: "rgba(139,92,246,0.15)",
    chapterRef: "Based on: Josy Braun, Eis Sprooch richteg schreiwen (English Version), ZLS/SCRIPT 2020 — Chapter on the Alphabet & Special Characters",
    rule: {
      title: "The Alphabet & Special Characters",
      intro: "Luxembourgish uses the 26 standard Latin letters — plus 3 special characters that make the language unique:",
      points: [
        { char: "ä", description: "A vowel sound between 'a' and 'e' — like the 'e' in 'bed'. Example: mäi (my)." },
        { char: "é", description: "A long 'ay' sound — like the 'ay' in 'say'. Example: schéin (beautiful)." },
        { char: "ë", description: "A reduced 'e' sound (schwa) — unique to Luxembourgish! Example: Lëtzebuergesch." },
      ],
      highlight: "The letter ë is found only in Luxembourgish — you won't see it in French or German!",
    },
    exercises: [
      {
        question: "Which of these letters is unique to Luxembourgish and not found in standard German or French?",
        options: ["ä", "ë", "é", "ü"],
        correct: 1,
        explanation: "The letter ë is Luxembourgish's own! While ä appears in German and é in French, ë is characteristic only of Lëtzebuergesch.",
      },
      {
        question: "How many special characters does Luxembourgish add to the standard Latin alphabet?",
        options: ["1 — only ë", "2 — é and ë", "3 — ä, é, and ë", "4 — ä, é, ë, and ü"],
        correct: 2,
        explanation: "Luxembourgish adds 3 special characters: ä, é, and ë. Each represents a specific sound not covered by the standard 26 letters.",
      },
      {
        question: "Which is the correct spelling of the word for 'Luxembourgish' in Luxembourgish?",
        options: ["Letzebuergesch", "Lëtzebuergesch", "Létzebuergesch", "Lëtzebüergesch"],
        correct: 1,
        explanation: "The correct spelling is 'Lëtzebuergesch' — the ë in the second position is essential! It's one of the most recognised uses of this unique character.",
      },
      {
        question: "The letter é in Luxembourgish sounds like which English sound?",
        options: ["The 'ee' in 'see'", "The 'ay' in 'say'", "The 'ah' in 'car'", "Silent — not pronounced"],
        correct: 1,
        explanation: "The é sounds like 'ay' (as in 'say' or 'day'). You can hear it clearly in 'schéin' (beautiful) — a word you'll use a lot in Luxembourg!",
      },
    ],
  },
  {
    id: 2,
    title: "Long & Short Vowels",
    subtitle: "Vowel length changes meaning!",
    icon: "🔊",
    color: "#C4222E",
    colorLight: "rgba(239,51,64,0.15)",
    chapterRef: "Based on: Josy Braun, Eis Sprooch richteg schreiwen (English Version), ZLS/SCRIPT 2020 — Chapter on Vowel Length & Spelling",
    rule: {
      title: "Long Vowels and Short Vowels",
      intro: "In Luxembourgish, vowel length is crucial — it can completely change the meaning of a word! The rule is simple:",
      points: [
        { char: "Short", description: "A single vowel letter is SHORT: a, e, i, o, u, ä. Example: Wand (wind), Bud (bath)." },
        { char: "Long", description: "A doubled vowel is LONG: aa, ee, ii, oo, uu. Example: Waand (wall), Buud (stall)." },
        { char: "Long é/ë", description: "The special letters é and ë also represent specific vowel qualities. Long 'i' is written as 'ie' (see Chapter 3!)." },
      ],
      highlight: "Short vowel = single letter · Long vowel = double letter (aa, ee, oo, uu…)",
    },
    exercises: [
      {
        question: "In Luxembourgish, how do you show that a vowel is LONG in spelling?",
        options: ["Add an accent mark on top", "Double the vowel letter", "Add a silent 'e' at the end", "Put an 'h' before it"],
        correct: 1,
        explanation: "In Luxembourgish, vowels are doubled to show they're long: aa, ee, ii, oo, uu. This is different from English, where long vowels are shown in all sorts of tricky ways!",
      },
      {
        question: "'Buur' (farmer) has a long 'u'. 'Bur' would have a short 'u'. How can you tell 'Buur' has a long vowel?",
        options: ["The 'uu' — doubled vowel means long", "The 'r' — it lengthens the vowel before it", "The capital letter B", "You can't tell from spelling alone"],
        correct: 0,
        explanation: "The doubled 'uu' is the signal! In Luxembourgish, doubled vowels always indicate a long vowel sound. Consistent and logical!",
      },
      {
        question: "The word 'Strooss' (road/street) — what signals that the 'o' sound is long?",
        options: ["The 'r' before it", "The double 'oo'", "The 'ss' at the end", "The capital 'S'"],
        correct: 1,
        explanation: "The 'oo' in 'Strooss' tells you the vowel is long. The 'ss' is a consonant doubling rule (separate topic!), but the long vowel is shown by 'oo'.",
      },
      {
        question: "'Wand' means wind and 'Waand' means wall. Why are they spelled differently?",
        options: ["They are misspellings of the same word", "The 'aa' signals a long vowel in 'Waand', changing the meaning", "The extra 'a' is a prefix", "Spelling is historical and has no logic"],
        correct: 1,
        explanation: "Vowel length changes meaning! 'Wand' (short 'a') = wind. 'Waand' (long 'aa') = wall. This is a key reason why correct spelling matters in Luxembourgish!",
      },
    ],
  },
  {
    id: 3,
    title: "The 'ie' Sound",
    subtitle: "The long 'i' in disguise",
    icon: "👁️",
    color: "#64748B",
    colorLight: "rgba(0,163,224,0.15)",
    chapterRef: "Based on: Josy Braun, Eis Sprooch richteg schreiwen (English Version), ZLS/SCRIPT 2020 — Chapter on the 'ie' Vowel",
    rule: {
      title: "Writing the Long 'i' Sound",
      intro: "Luxembourgish has a very consistent rule for the long 'i' sound — it is almost always written as 'ie'. This is different from doubling ('ii') and is its own special pattern.",
      points: [
        { char: "ie", description: "Represents the long 'i' sound (like 'ee' in 'see'). Example: Bier (beer), Dier (door/animal)." },
        { char: "Consistent", description: "This rule is highly regular — whenever you hear a long 'ee/i' sound, write 'ie'. Example: Lieb (dear/kind)." },
        { char: "Not ii!", description: "Don't confuse with doubled 'ii' — 'ii' also appears but in different words. 'ie' is the dominant pattern." },
      ],
      highlight: "Long 'i' sound → almost always written as 'ie'",
    },
    exercises: [
      {
        question: "Which is the correct spelling of 'beer' in Luxembourgish?",
        options: ["Bir", "Bier", "Béer", "Bieer"],
        correct: 1,
        explanation: "'Bier' is correct! The long 'i' sound is written as 'ie'. This is one of the most consistent patterns in Luxembourgish spelling.",
      },
      {
        question: "The 'ie' combination in Luxembourgish represents which sound?",
        options: ["A short 'i' as in 'sit'", "A long 'i/ee' sound as in 'see'", "A 'ye' sound as in 'yes'", "An 'ai' sound as in 'rain'"],
        correct: 1,
        explanation: "'ie' in Luxembourgish gives the long 'i/ee' sound — like 'ee' in 'see'. Once you know this, reading Luxembourgish becomes much easier!",
      },
      {
        question: "The Luxembourgish word 'Lieb' means 'dear' or 'kind'. Which spelling rule does it demonstrate?",
        options: ["Doubled vowel for long sound", "The 'ie' for long i-sound", "A special character (é/ä/ë)", "Consonant doubling"],
        correct: 1,
        explanation: "'Lieb' uses 'ie' for the long 'i' sound — exactly the rule! The pattern is very regular throughout the language.",
      },
      {
        question: "A Luxembourgish word has a long 'ee/i' sound. How should you spell it?",
        options: ["With a single 'i'", "With 'ii' (doubled i)", "With 'ie'", "With 'iy'"],
        correct: 2,
        explanation: "Almost always 'ie'! The long 'i/ee' sound in Luxembourgish is consistently written as 'ie'. Simple, reliable, and easy to apply once you know it!",
      },
    ],
  },
  {
    id: 4,
    title: "Diphthongs",
    subtitle: "Two vowels, one flowing sound!",
    icon: "🎵",
    color: "#D97706",
    colorLight: "rgba(217,119,6,0.15)",
    chapterRef: "Based on: Josy Braun, Eis Sprooch richteg schreiwen (English Version), ZLS/SCRIPT 2020 — Chapter on Diphthongs",
    rule: {
      title: "Luxembourgish Diphthongs",
      intro: "A diphthong is a combination of two vowel sounds that glide into each other within one syllable. Luxembourgish is particularly rich in diphthongs — it's one of the most musical features of the language!",
      points: [
        { char: "au", description: "Like 'ow' in 'cow'. Example: Haus (house), au, kaufen." },
        { char: "ou", description: "A rounded 'oo-oo' glide. Example: Boun (bean), Doudel." },
        { char: "äi", description: "A distinctly Luxembourgish diphthong. Example: fräi (free), mäi (my)." },
        { char: "ei / éi", description: "An 'ay-i' glide. Example: Fräizäit (leisure), Méindeg (Monday)." },
      ],
      highlight: "Luxembourgish diphthongs: au · ou · äi · ei · éi · eu · ui · ieu · iou",
    },
    exercises: [
      {
        question: "The word 'Haus' (house) — which diphthong does it contain?",
        options: ["ou", "au", "äi", "ei"],
        correct: 1,
        explanation: "'Haus' uses the 'au' diphthong — it glides from 'a' to 'u', sounding like 'ow' in 'cow'. This diphthong is shared with German!",
      },
      {
        question: "The word 'fräi' (free) — which diphthong does it use?",
        options: ["ei", "ai", "äi", "éi"],
        correct: 2,
        explanation: "'fräi' uses the 'äi' diphthong — a distinctly Luxembourgish combination! The ä gives it a unique sound you won't find in French or German.",
      },
      {
        question: "What is a diphthong?",
        options: [
          "Two consonants placed side by side",
          "A combination of two vowel sounds that glide together in one syllable",
          "A doubled vowel that creates a long sound",
          "A silent letter combination",
        ],
        correct: 1,
        explanation: "A diphthong is two vowel sounds gliding together in one syllable! Luxembourgish is unusually rich in them — one of the reasons it sounds so distinctive and musical.",
      },
      {
        question: "Which of these is a genuine Luxembourgish diphthong?",
        options: ["ou", "iy", "uw", "ao"],
        correct: 0,
        explanation: "'ou' is a real Luxembourgish diphthong! You can hear it in 'Boun' (bean). The others — iy, uw, ao — don't exist in Luxembourgish spelling.",
      },
    ],
  },
  {
    id: 5,
    title: "The Eifeler Regel",
    subtitle: "The famous N-Rule!",
    icon: "🎯",
    color: "#059669",
    colorLight: "rgba(5,150,105,0.15)",
    chapterRef: "Based on: Josy Braun, Eis Sprooch richteg schreiwen (English Version), ZLS/SCRIPT 2020 — Chapter on the Eifeler Regel (N-Rule)",
    rule: {
      title: "The Eifeler Regel — The N-Rule",
      intro: "This is one of the most famous and distinctive rules in Luxembourgish! Certain words add (or keep) an 'n' at the end when followed by words starting with specific sounds.",
      points: [
        { char: "N-triggers", description: "The 'n' appears before words starting with: d, t, z, s(ch), j, n, v/f, or h." },
        { char: "Example 1", description: "ee Buch (a book — 'b' does NOT trigger n) BUT een Hond (a dog — 'h' DOES trigger n)." },
        { char: "Example 2", description: "meng Fra (my wife — 'f'? Wait — f IS a trigger!) → Actually: mengen Hond (my dog — h triggers n)." },
        { char: "Practice!", description: "Don't worry — with practice and exposure to spoken Luxembourgish, this rule becomes instinctive!" },
      ],
      highlight: "N-triggers: d · t · z · s/sch · j · n · v · f · h",
    },
    exercises: [
      {
        question: "The Eifeler Regel (N-Rule) adds an 'n' at word-end before certain letters. Which set of letters triggers the 'n'?",
        options: [
          "All vowels (a, e, i, o, u)",
          "d, t, z, s, j, n, v, f, h",
          "b, p, m, k, g, r, l",
          "All consonants without exception",
        ],
        correct: 1,
        explanation: "The N-rule is triggered by: d, t, z, s(ch), j, n, v/f, and h. Before these sounds, certain words add an 'n' at the end. Other consonants (b, p, m, k…) don't trigger it.",
      },
      {
        question: "'Hond' (dog) starts with 'h' — an N-rule trigger. 'A dog' in Luxembourgish is…?",
        options: ["ee Hond", "een Hond", "eene Hond", "en Hond"],
        correct: 1,
        explanation: "'een Hond' — the 'h' in 'Hond' triggers the N-rule, so 'ee' becomes 'een'. Great application of the rule!",
      },
      {
        question: "'Buch' (book) starts with 'b' — NOT an N-rule trigger. 'A book' in Luxembourgish is…?",
        options: ["ee Buch", "een Buch", "eng Buch", "en Buch"],
        correct: 0,
        explanation: "'ee Buch' — no 'n' added, because 'b' is not one of the N-rule trigger letters! The rule only applies before d, t, z, s, j, n, v, f, h.",
      },
      {
        question: "True or False: The Eifeler Regel (N-Rule) is a uniquely Luxembourgish phonetic rule with no equivalent in German or French.",
        options: ["True — it's unique to Luxembourgish", "False — German has the same rule"],
        correct: 0,
        explanation: "True! The Eifeler Regel is distinctly Luxembourgish — named after the Eifel region, it reflects how spoken Luxembourgish evolved. It's one of the most characteristic features of the language!",
      },
    ],
  },
  {
    id: 6,
    title: "Capital Letters",
    subtitle: "Nouns always get uppercase!",
    icon: "🔡",
    color: "#EC4899",
    colorLight: "rgba(236,72,153,0.15)",
    chapterRef: "Based on: Josy Braun, Eis Sprooch richteg schreiwen (English Version), ZLS/SCRIPT 2020 — Chapter on Capitalisation",
    rule: {
      title: "Capitalisation in Luxembourgish",
      intro: "Like German (but unlike French or English), Luxembourgish capitalises ALL nouns — every person, place, thing, or concept. This is a consistent and very helpful rule!",
      points: [
        { char: "All nouns", description: "Every noun gets a capital, even in the middle of a sentence. Example: den Hond (the dog), d'Stad (the city)." },
        { char: "Days & months", description: "Days of the week and months are capitalised: Méindeg, Januar, Mee." },
        { char: "Adjectives → lowercase", description: "Adjectives, verbs, and adverbs stay lowercase: schéin (beautiful), grouss (big), séier (fast)." },
      ],
      highlight: "Every noun is capitalised — always, every time, no exceptions!",
    },
    exercises: [
      {
        question: "In Luxembourgish, which type of word is ALWAYS capitalised, even in the middle of a sentence?",
        options: ["Adjectives (big, beautiful, fast)", "Verbs (to run, to see)", "Nouns (dog, city, idea)", "Adverbs (quickly, often)"],
        correct: 2,
        explanation: "All nouns are capitalised in Luxembourgish! This is consistent — if a word is a noun (a person, place, thing, or concept), it always gets a capital letter.",
      },
      {
        question: "'The beautiful house' — which is the correct Luxembourgish spelling?",
        options: ["dat schéint haus", "dat Schéint Haus", "dat schéint Haus", "Dat Schéint Haus"],
        correct: 2,
        explanation: "'dat schéint Haus' — 'Haus' (house) is a noun → capital H. 'schéint' (beautiful) is an adjective → lowercase s. 'dat' (the) is an article → lowercase d.",
      },
      {
        question: "Is the Luxembourgish word for Monday ('Méindeg') capitalised?",
        options: ["Yes — days of the week are nouns in Luxembourgish", "No — only proper names are capitalised", "Only at the start of a sentence", "It depends on the context"],
        correct: 0,
        explanation: "Yes! Days of the week are nouns in Luxembourgish, so they're always capitalised: Méindeg, Dënschdeg, Mëttwoch, Donneschdeg, Freideg, Samschdeg, Sonnden.",
      },
      {
        question: "In 'e grousse Kapp' (a big head) — which word should have a capital letter?",
        options: ["e (the article)", "grousse (big — adjective)", "Kapp (head — noun)", "All three words"],
        correct: 2,
        explanation: "'Kapp' (head) is the noun, so it gets the capital! 'e' is an article and 'grousse' is an adjective — both stay lowercase. The rule is simple: nouns = capitals.",
      },
    ],
  },
  {
    id: 7,
    title: "Special Letters: é, ä, ë",
    subtitle: "The accented characters explained",
    icon: "✨",
    color: "#2563EB",
    colorLight: "rgba(37,99,235,0.15)",
    chapterRef: "Based on: Josy Braun, Eis Sprooch richteg schreiwen (English Version), ZLS/SCRIPT 2020 — Chapter on Special Letters; also D'Lëtzebuerger Orthografie (ZLS/CPLL, 2019)",
    rule: {
      title: "The Three Special Characters",
      intro: "Each special letter in Luxembourgish has a precise sound and specific role. Learning them is key to both reading and spelling correctly!",
      points: [
        { char: "é", description: "Long 'ay' sound (like in English 'say'). Used in many common words: schéin (beautiful), Méindeg (Monday), Bréck (bridge)." },
        { char: "ä", description: "A vowel between 'a' and 'e' — similar to the 'e' in 'bed'. Used in: mäi (my), Käpp (heads), fräi (free)." },
        { char: "ë", description: "A reduced schwa sound — unique to Luxembourgish! Found in: Lëtzebuergesch, ëmmer (always), Dësch (table)." },
      ],
      highlight: "é = 'ay' sound · ä = between a & e · ë = schwa (unique to Luxembourgish!)",
    },
    exercises: [
      {
        question: "What sound does the letter 'é' represent in Luxembourgish?",
        options: ["A short 'e' as in 'bed'", "A long 'ay' sound as in 'say'", "A silent letter like in French", "An 'eh' sound as in 'meh'"],
        correct: 1,
        explanation: "The 'é' (accent aigu) in Luxembourgish represents a long 'ay' sound. You can hear it clearly in 'schéin' (beautiful) — one of the most common words in the language!",
      },
      {
        question: "The Luxembourgish word for 'beautiful' — which spelling is correct?",
        options: ["schein", "shéin", "schéin", "schëin"],
        correct: 2,
        explanation: "'schéin' is correct! The 'é' gives the word its characteristic 'ay' sound, and 'sch' is the Luxembourgish spelling of the 'sh' sound. A word you'll use every day!",
      },
      {
        question: "The letter 'ë' in 'Lëtzebuergesch' represents which sound?",
        options: ["A long 'ee' sound", "A schwa — a reduced, unstressed 'e'", "A silent letter", "The same as the French 'e'"],
        correct: 1,
        explanation: "The 'ë' represents a schwa — a reduced, unstressed vowel sound. Think of the 'e' in English 'the' (when said quickly). This sound is unique to Luxembourgish!",
      },
      {
        question: "The letter 'ä' in Luxembourgish represents a sound similar to…?",
        options: ["The 'a' in 'father' (long, open)", "The 'e' in 'bed' (short, mid)", "The 'i' in 'sit' (short, high)", "The 'o' in 'go' (long, round)"],
        correct: 1,
        explanation: "The 'ä' sits between 'a' and 'e' — closest to the 'e' in 'bed'. You can hear it in 'mäi' (my) or 'fräi' (free). It gives Luxembourgish its distinctive flavour!",
      },
    ],
  },
  {
    id: 8,
    title: "Consonants & Doubling",
    subtitle: "When consonants pair up",
    icon: "🔁",
    color: "#0891B2",
    colorLight: "rgba(8,145,178,0.15)",
    chapterRef: "Based on: Josy Braun, Eis Sprooch richteg schreiwen (English Version), ZLS/SCRIPT 2020 — Chapter on Consonants; also D'Lëtzebuerger Orthografie (ZLS/CPLL, 2019)",
    rule: {
      title: "Consonant Doubling",
      intro: "In Luxembourgish, consonants are often doubled after a SHORT vowel. This helps the reader know the vowel is short — it's a consistent and logical system!",
      points: [
        { char: "Pattern", description: "Short vowel + doubled consonant. Example: Kapp (head — short 'a' + double pp), Bett (bed — short 'e' + double tt)." },
        { char: "Signal", description: "The double consonant acts as a signal: 'the vowel before me is short!' Without it, the vowel might be read as long." },
        { char: "Common pairs", description: "Common doubled consonants: pp, tt, ss, mm, ll, nn, ff, ck→kk. Example: Kuss (kiss), Ball (ball)." },
      ],
      highlight: "Short vowel + double consonant = clear pronunciation signal",
    },
    exercises: [
      {
        question: "In Luxembourgish, why are consonants sometimes doubled (like in 'Kapp' — head)?",
        options: [
          "To make the word look more impressive",
          "To show the preceding vowel is SHORT",
          "To show the preceding vowel is LONG",
          "It's a historical quirk with no logical rule",
        ],
        correct: 1,
        explanation: "Consonants are doubled to signal that the preceding vowel is short! 'Kapp' (head) has a short 'a', shown by the double 'pp'. It's a clever spelling system!",
      },
      {
        question: "The Luxembourgish word for 'bed' has a short 'e'. Which spelling is correct?",
        options: ["Bet", "Bett", "Beet", "Bétt"],
        correct: 1,
        explanation: "'Bett' is correct! The short 'e' is followed by double 'tt' — the consonant doubling signals the short vowel sound. Clear and consistent!",
      },
      {
        question: "The word 'Kuss' (kiss) has double 'ss'. What does this tell you about the 'u' vowel?",
        options: ["The 'u' is long", "The 'u' is short", "The 'u' is silent", "The 'u' is a special character"],
        correct: 1,
        explanation: "The double 'ss' signals that the 'u' is SHORT! If it were long, it would be written 'Kuuss' (which is not a word). The consonant doubling system is very reliable.",
      },
      {
        question: "Which word correctly demonstrates the short vowel + double consonant pattern?",
        options: ["Buur (farmer — long uu)", "Kapp (head — short a + pp)", "Bier (beer — ie diphthong)", "Schoul (school — ou diphthong)"],
        correct: 1,
        explanation: "'Kapp' is the perfect example: short 'a' + double 'pp'. 'Buur' has a long vowel (doubled 'uu'), 'Bier' has the 'ie' pattern, and 'Schoul' has an 'ou' diphthong.",
      },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Styles
// ─────────────────────────────────────────────────────────────────────────────
const S = {
  page: {
    minHeight: '100vh',
    background: '#F6F5F1',
    fontFamily: "'Inter', system-ui, sans-serif",
    color: '#1E293B',
    paddingBottom: 60,
  },
  container: {
    maxWidth: 720,
    margin: '0 auto',
    padding: '0 16px',
  },
  card: {
    background: '#FFFFFF',
    border: '1px solid #E5E4DF',
    borderRadius: 16,
    padding: '24px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
  },
  creditBox: {
    background: '#F0EFE9',
    border: '1px solid #DDD9D0',
    borderRadius: 10,
    padding: '10px 14px',
    fontSize: 11.5,
    color: '#64748B',
    lineHeight: 1.6,
    marginTop: 16,
  },
  btn: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: '12px 24px',
    borderRadius: 10,
    border: 'none',
    cursor: 'pointer',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontWeight: 600,
    fontSize: 15,
    transition: 'all 0.15s ease',
    textDecoration: 'none',
  },
  btnPrimary: {
    background: '#C4222E',
    color: '#fff',
  },
  btnSecondary: {
    background: '#FFFFFF',
    color: '#1E293B',
    border: '1px solid #D4D3CE',
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

function CreditBadge({ chapterRef }) {
  return (
    <div style={S.creditBox}>
      📚 <span style={{ color: '#64748B', fontWeight: 600 }}>Source: </span>
      {chapterRef} — {ZLS_REF.lod}
      <br />
      <span style={{ fontSize: 10.5, opacity: 0.75 }}>{ZLS_REF.note}</span>
    </div>
  )
}

function ProgressBar({ current, total, color }) {
  const pct = total > 0 ? ((current / total) * 100) : 0
  return (
    <div style={{ background: '#E5E4DF', borderRadius: 99, height: 6, overflow: 'hidden', marginBottom: 4 }}>
      <div style={{
        height: '100%',
        width: `${pct}%`,
        background: color || '#C4222E',
        borderRadius: 99,
        transition: 'width 0.4s ease',
      }} />
    </div>
  )
}

function Stars({ score, total }) {
  const pct = total > 0 ? score / total : 0
  const stars = pct >= 0.95 ? 3 : pct >= 0.75 ? 2 : pct >= 0.5 ? 1 : 0
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'center', fontSize: 32, letterSpacing: 4 }}>
      {[0, 1, 2].map(i => (
        <span key={i} style={{ opacity: i < stars ? 1 : 0.2, filter: i < stars ? 'none' : 'grayscale(1)' }}>⭐</span>
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Screens
// ─────────────────────────────────────────────────────────────────────────────

function MenuScreen({ completedChapters, allScores, onSelectChapter }) {
  return (
    <div style={S.page}>
      <div style={S.container}>
        {/* Header */}
        <div style={{ paddingTop: 32, paddingBottom: 24, textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: '#FDE8EA', border: '1px solid #F5C6CB', borderRadius: 99, padding: '6px 16px', marginBottom: 20 }}>
            <span style={{ fontSize: 18 }}>🇱🇺</span>
            <span style={{ color: '#C4222E', fontWeight: 700, fontSize: 13, letterSpacing: 0.5 }}>LUXEMBOURG GAMES</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.2, margin: '0 0 10px', color: '#1E293B' }}>
            Lëtzebuergesch<br />
            <span style={{ color: '#C4222E' }}>Spelling</span> Game
          </h1>
          <p style={{ color: '#64748B', fontSize: 15, maxWidth: 480, margin: '0 auto 8px', lineHeight: 1.6 }}>
            Learn the spelling rules of Luxembourgish through 8 chapters — each with an explanation and fun exercises.
          </p>
          <div style={{ ...S.creditBox, textAlign: 'left', maxWidth: 560, margin: '16px auto 0' }}>
            📚 <span style={{ color: '#64748B', fontWeight: 600 }}>Based on: </span>
            <em>{ZLS_REF.book}</em> — {ZLS_REF.author} ({ZLS_REF.publisher}, {ZLS_REF.year}, {ZLS_REF.isbn})
            &nbsp;and <em>{ZLS_REF.ortho}</em>.
          </div>
        </div>

        {/* Chapter grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 14, paddingBottom: 32 }}>
          {CHAPTERS.map((ch, idx) => {
            const done = completedChapters.has(idx)
            const score = allScores[idx]
            return (
              <button
                key={ch.id}
                onClick={() => onSelectChapter(idx)}
                style={{
                  ...S.card,
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  transition: 'all 0.2s ease',
                  border: done ? `1px solid ${ch.color}30` : '1px solid #E5E4DF',
                  background: done ? ch.colorLight : '#FFFFFF',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = ch.colorLight; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.background = done ? ch.colorLight : '#FFFFFF'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)' }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: ch.colorLight,
                  border: `1px solid ${ch.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, flexShrink: 0,
                }}>
                  {done ? '✅' : ch.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: ch.color, letterSpacing: 0.5, marginBottom: 2 }}>
                        CHAPTER {ch.id}
                      </div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: '#1E293B', lineHeight: 1.3 }}>{ch.title}</div>
                      <div style={{ fontSize: 12.5, color: '#64748B', marginTop: 2 }}>{ch.subtitle}</div>
                    </div>
                    {done && score !== null && (
                      <div style={{ fontSize: 12, color: ch.color, fontWeight: 700, flexShrink: 0 }}>
                        {score}/{ch.exercises.length}
                      </div>
                    )}
                  </div>
                  {done && (
                    <div style={{ marginTop: 8 }}>
                      <ProgressBar current={score} total={ch.exercises.length} color={ch.color} />
                    </div>
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function LessonScreen({ chapter, onStartExercises, onBack }) {
  return (
    <div style={S.page}>
      <div style={S.container}>
        <div style={{ paddingTop: 24 }}>
          {/* Back */}
          <button onClick={onBack} style={{ ...S.btn, ...S.btnSecondary, padding: '8px 16px', fontSize: 13, marginBottom: 20 }}>
            ← All Chapters
          </button>

          {/* Chapter header */}
          <div style={{ ...S.card, marginBottom: 16, borderColor: `${chapter.color}40`, background: chapter.colorLight }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: `${chapter.color}25`,
                border: `1px solid ${chapter.color}50`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 28, flexShrink: 0,
              }}>
                {chapter.icon}
              </div>
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: chapter.color, letterSpacing: 0.8, marginBottom: 3 }}>
                  CHAPTER {chapter.id} OF {CHAPTERS.length}
                </div>
                <h2 style={{ margin: 0, fontSize: 22, fontWeight: 800, color: '#1E293B' }}>{chapter.title}</h2>
                <div style={{ fontSize: 13, color: '#64748B', marginTop: 2 }}>{chapter.subtitle}</div>
              </div>
            </div>

            {/* Highlight box */}
            <div style={{
              background: `${chapter.color}20`,
              border: `1px solid ${chapter.color}40`,
              borderRadius: 10, padding: '12px 16px',
              fontSize: 14, fontWeight: 600, color: '#1E293B',
              marginBottom: 20, lineHeight: 1.5,
            }}>
              💡 {chapter.rule.highlight}
            </div>

            {/* Rule explanation */}
            <div style={{ marginBottom: 16 }}>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1E293B', margin: '0 0 10px' }}>{chapter.rule.title}</h3>
              <p style={{ color: '#475569', fontSize: 14.5, lineHeight: 1.7, margin: '0 0 16px' }}>{chapter.rule.intro}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {chapter.rule.points.map((pt, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 12,
                    background: '#F8F7F3',
                    border: '1px solid #E5E4DF',
                    borderRadius: 10, padding: '12px 14px',
                  }}>
                    <div style={{
                      minWidth: 44, height: 28, borderRadius: 7,
                      background: `${chapter.color}30`,
                      border: `1px solid ${chapter.color}50`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 13, fontWeight: 700, color: chapter.color, flexShrink: 0,
                    }}>
                      {pt.char}
                    </div>
                    <p style={{ margin: 0, fontSize: 13.5, color: '#475569', lineHeight: 1.6 }}>{pt.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <CreditBadge chapterRef={chapter.chapterRef} />
          </div>

          {/* CTA */}
          <div style={{ textAlign: 'center', paddingBottom: 40 }}>
            <button
              onClick={onStartExercises}
              style={{ ...S.btn, ...S.btnPrimary, padding: '14px 36px', fontSize: 16, borderRadius: 12 }}
            >
              Start Practice Exercises →
            </button>
            <p style={{ fontSize: 12, color: '#64748B', marginTop: 10 }}>
              {chapter.exercises.length} exercises • Takes about 2 minutes
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ExerciseScreen({ chapter, exerciseIdx, selected, showResult, onSelect, onNext, onBack }) {
  const exercise = chapter.exercises[exerciseIdx]
  const isCorrect = selected === exercise.correct
  const total = chapter.exercises.length

  return (
    <div style={S.page}>
      <div style={S.container}>
        <div style={{ paddingTop: 24 }}>
          {/* Progress header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <button onClick={onBack} style={{ ...S.btn, ...S.btnSecondary, padding: '7px 14px', fontSize: 12 }}>
              ← Lesson
            </button>
            <span style={{ fontSize: 13, color: '#64748B', fontWeight: 600 }}>
              {exerciseIdx + 1} / {total}
            </span>
          </div>
          <ProgressBar current={exerciseIdx} total={total} color={chapter.color} />

          {/* Chapter badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '16px 0' }}>
            <span style={{ fontSize: 20 }}>{chapter.icon}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: chapter.color, letterSpacing: 0.5 }}>
              CHAPTER {chapter.id}: {chapter.title.toUpperCase()}
            </span>
          </div>

          {/* Question card */}
          <div style={{ ...S.card, marginBottom: 14 }}>
            <p style={{ fontSize: 17, fontWeight: 700, color: '#1E293B', lineHeight: 1.5, margin: 0 }}>
              {exercise.question}
            </p>
          </div>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
            {exercise.options.map((opt, i) => {
              let bg = '#FFFFFF'
              let border = '1px solid #E5E4DF'
              let color = '#334155'
              let icon = null

              if (showResult) {
                if (i === exercise.correct) {
                  bg = '#ECFDF5'
                  border = '1px solid #86EFAC'
                  color = '#065F46'
                  icon = '✓'
                } else if (i === selected && i !== exercise.correct) {
                  bg = '#FEF2F2'
                  border = '1px solid #FECACA'
                  color = '#991B1B'
                  icon = '✗'
                }
              } else if (selected === i) {
                bg = `${chapter.color}20`
                border = `1px solid ${chapter.color}60`
                color = '#F1F5F9'
              }

              return (
                <button
                  key={i}
                  onClick={() => !showResult && onSelect(i)}
                  style={{
                    ...S.card,
                    padding: '14px 18px',
                    cursor: showResult ? 'default' : 'pointer',
                    background: bg,
                    border,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    textAlign: 'left',
                    transition: 'all 0.15s ease',
                    width: '100%',
                  }}
                >
                  <div style={{
                    width: 28, height: 28, borderRadius: 7,
                    background: showResult
                      ? (i === exercise.correct ? '#D1FAE5' : i === selected ? '#FEE2E2' : '#F1F0EC')
                      : (selected === i ? `${chapter.color}20` : '#F1F0EC'),
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 700,
                    color: showResult
                      ? (i === exercise.correct ? '#065F46' : i === selected ? '#991B1B' : '#94A3B8')
                      : (selected === i ? chapter.color : '#94A3B8'),
                    flexShrink: 0,
                    transition: 'all 0.15s ease',
                  }}>
                    {icon || String.fromCharCode(65 + i)}
                  </div>
                  <span style={{ fontSize: 14.5, color, lineHeight: 1.5, fontWeight: selected === i || (showResult && i === exercise.correct) ? 600 : 400 }}>
                    {opt}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Feedback */}
          {showResult && (
            <div style={{
              ...S.card,
              background: isCorrect ? '#ECFDF5' : '#FEF2F2',
              border: isCorrect ? '1px solid #A7F3D0' : '1px solid #FECACA',
              marginBottom: 16,
            }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: isCorrect ? '#065F46' : '#991B1B', marginBottom: 6 }}>
                {isCorrect ? '🎉 Correct!' : '🤔 Not quite!'}
              </div>
              <p style={{ margin: '0 0 12px', fontSize: 14, color: '#475569', lineHeight: 1.6 }}>
                {exercise.explanation}
              </p>
              <CreditBadge chapterRef={chapter.chapterRef} />
            </div>
          )}

          {/* Next button */}
          {showResult && (
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={onNext}
                style={{ ...S.btn, ...S.btnPrimary, padding: '13px 32px', fontSize: 15 }}
              >
                {exerciseIdx + 1 < total ? 'Next Question →' : 'See Results 🏆'}
              </button>
            </div>
          )}

          {/* Source credit at bottom */}
          <div style={{ ...S.creditBox, marginTop: 24, fontSize: 11 }}>
            📚 Spelling rule source: {chapter.chapterRef}
          </div>
        </div>
      </div>
    </div>
  )
}

function ChapterCompleteScreen({ chapter, score, onNext, onMenu, onRetry }) {
  const total = chapter.exercises.length
  const pct = score / total
  const medal = pct === 1 ? '🥇' : pct >= 0.75 ? '🥈' : pct >= 0.5 ? '🥉' : '📖'

  return (
    <div style={S.page}>
      <div style={S.container}>
        <div style={{ paddingTop: 48, textAlign: 'center' }}>
          <div style={{ fontSize: 64, marginBottom: 12 }}>{medal}</div>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#1E293B', margin: '0 0 6px' }}>
            Chapter {chapter.id} Complete!
          </h2>
          <div style={{ fontSize: 15, color: '#64748B', marginBottom: 24 }}>{chapter.title}</div>

          <Stars score={score} total={total} />

          <div style={{ ...S.card, display: 'inline-block', margin: '20px 0', padding: '20px 40px' }}>
            <div style={{ fontSize: 48, fontWeight: 800, color: chapter.color }}>
              {score}<span style={{ fontSize: 24, color: '#64748B' }}>/{total}</span>
            </div>
            <div style={{ fontSize: 14, color: '#64748B', marginTop: 4 }}>
              {score === total ? 'Perfect score! Excellent work! 🎊' :
               score >= total * 0.75 ? 'Great job! Keep it up!' :
               score >= total * 0.5 ? 'Good effort! Try again to improve.' :
               'Keep practising — you\'ll get it!'}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320, margin: '0 auto 32px' }}>
            {onNext && (
              <button onClick={onNext} style={{ ...S.btn, ...S.btnPrimary, padding: '13px 28px', fontSize: 15, width: '100%' }}>
                Next Chapter →
              </button>
            )}
            <button onClick={onRetry} style={{ ...S.btn, ...S.btnSecondary, padding: '13px 28px', fontSize: 15, width: '100%' }}>
              🔄 Retry This Chapter
            </button>
            <button onClick={onMenu} style={{ ...S.btn, ...S.btnSecondary, padding: '13px 28px', fontSize: 15, width: '100%' }}>
              📋 All Chapters
            </button>
          </div>

          <CreditBadge chapterRef={chapter.chapterRef} />
        </div>
      </div>
    </div>
  )
}

function GameCompleteScreen({ allScores, onMenu }) {
  const totalCorrect = allScores.reduce((sum, s) => sum + (s || 0), 0)
  const totalQuestions = CHAPTERS.reduce((sum, ch) => sum + ch.exercises.length, 0)
  const pct = totalCorrect / totalQuestions

  return (
    <div style={S.page}>
      <div style={S.container}>
        <div style={{ paddingTop: 40, textAlign: 'center' }}>
          <div style={{ fontSize: 72, marginBottom: 12 }}>
            {pct >= 0.9 ? '🏆' : pct >= 0.75 ? '🎉' : pct >= 0.6 ? '👏' : '📚'}
          </div>
          <div style={{ display: 'inline-block', background: '#FDE8EA', border: '1px solid #F5C6CB', borderRadius: 99, padding: '6px 18px', marginBottom: 16 }}>
            <span style={{ color: '#C4222E', fontWeight: 700, fontSize: 12, letterSpacing: 0.5 }}>🇱🇺 LUXEMBOURG GAMES</span>
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#1E293B', margin: '0 0 8px' }}>
            All 8 Chapters Complete!
          </h2>
          <p style={{ color: '#64748B', fontSize: 15, marginBottom: 24, lineHeight: 1.6 }}>
            You've worked through all the Luxembourgish spelling rules.<br />
            Excellent dedication to learning Lëtzebuergesch!
          </p>

          <div style={{ ...S.card, display: 'inline-block', margin: '0 0 24px', padding: '24px 48px' }}>
            <div style={{ fontSize: 56, fontWeight: 800, color: '#C4222E' }}>
              {totalCorrect}<span style={{ fontSize: 28, color: '#64748B' }}>/{totalQuestions}</span>
            </div>
            <div style={{ fontSize: 13, color: '#64748B', marginTop: 4 }}>Total correct answers</div>
            <Stars score={totalCorrect} total={totalQuestions} />
          </div>

          {/* Chapter summary */}
          <div style={{ ...S.card, textAlign: 'left', marginBottom: 24 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: '#64748B', marginBottom: 14 }}>Chapter Scores</div>
            {CHAPTERS.map((ch, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10,
              }}>
                <span style={{ fontSize: 16, width: 24 }}>{ch.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span style={{ fontSize: 12.5, color: '#475569', fontWeight: 500 }}>{ch.title}</span>
                    <span style={{ fontSize: 12.5, color: ch.color, fontWeight: 700 }}>
                      {allScores[i] ?? 0}/{ch.exercises.length}
                    </span>
                  </div>
                  <ProgressBar current={allScores[i] ?? 0} total={ch.exercises.length} color={ch.color} />
                </div>
              </div>
            ))}
          </div>

          {/* Full attribution at completion */}
          <div style={{ ...S.creditBox, textAlign: 'left', marginBottom: 24 }}>
            <div style={{ fontWeight: 700, color: '#64748B', marginBottom: 6, fontSize: 12 }}>📚 Official ZLS References</div>
            <div style={{ marginBottom: 4 }}>
              <strong style={{ color: '#475569' }}>Primary source:</strong> {ZLS_REF.author}, <em>{ZLS_REF.book}</em>. {ZLS_REF.publisher}, {ZLS_REF.year}. {ZLS_REF.isbn}. {ZLS_REF.pages}.
            </div>
            <div style={{ marginBottom: 4 }}>
              <strong style={{ color: '#475569' }}>Also referenced:</strong> <em>{ZLS_REF.ortho}</em>
            </div>
            <div>
              <strong style={{ color: '#475569' }}>Online dictionary:</strong> {ZLS_REF.lod}
            </div>
            <div style={{ marginTop: 8, fontSize: 10.5, opacity: 0.7 }}>{ZLS_REF.note}</div>
          </div>

          <button onClick={onMenu} style={{ ...S.btn, ...S.btnPrimary, padding: '13px 32px', fontSize: 15 }}>
            🔄 Play Again from Menu
          </button>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main Game Component
// ─────────────────────────────────────────────────────────────────────────────
export default function SpellingGame() {
  const [screen, setScreen] = useState('menu')     // menu | lesson | exercises | chapter-done | all-done
  const [chapterIdx, setChapterIdx] = useState(0)
  const [exerciseIdx, setExerciseIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [chapterScore, setChapterScore] = useState(0)
  const [allScores, setAllScores] = useState(Array(CHAPTERS.length).fill(null))
  const [completedChapters, setCompletedChapters] = useState(new Set())

  const chapter = CHAPTERS[chapterIdx]

  // ── Handlers ──────────────────────────────────────────────────────────────
  const goToChapter = (idx) => {
    setChapterIdx(idx)
    setScreen('lesson')
  }

  const startExercises = () => {
    setExerciseIdx(0)
    setSelected(null)
    setShowResult(false)
    setChapterScore(0)
    setScreen('exercises')
  }

  const handleSelect = (optIdx) => {
    if (showResult) return
    setSelected(optIdx)
    const correct = optIdx === chapter.exercises[exerciseIdx].correct
    setShowResult(true)
    if (correct) setChapterScore(s => s + 1)
  }

  const handleNext = () => {
    const nextIdx = exerciseIdx + 1
    if (nextIdx < chapter.exercises.length) {
      setExerciseIdx(nextIdx)
      setSelected(null)
      setShowResult(false)
    } else {
      // Chapter complete
      const finalScore = chapterScore
      setAllScores(prev => {
        const updated = [...prev]
        updated[chapterIdx] = finalScore + (selected === chapter.exercises[exerciseIdx].correct && !showResult ? 0 : 0)
        // Score was already accumulated
        updated[chapterIdx] = chapterScore
        return updated
      })
      setCompletedChapters(prev => new Set([...prev, chapterIdx]))
      setScreen('chapter-done')
    }
  }

  const handleNextChapter = () => {
    const next = chapterIdx + 1
    if (next < CHAPTERS.length) {
      setChapterIdx(next)
      setScreen('lesson')
    } else {
      setScreen('all-done')
    }
  }

  const handleRetry = () => {
    setExerciseIdx(0)
    setSelected(null)
    setShowResult(false)
    setChapterScore(0)
    setScreen('exercises')
  }

  // Fix: record score on last question correctly
  const handleNextFixed = () => {
    const isLastQ = exerciseIdx + 1 >= chapter.exercises.length
    if (isLastQ) {
      const finalScore = chapterScore
      setAllScores(prev => {
        const updated = [...prev]
        updated[chapterIdx] = finalScore
        return updated
      })
      setCompletedChapters(prev => new Set([...prev, chapterIdx]))
      setScreen('chapter-done')
    } else {
      setExerciseIdx(exerciseIdx + 1)
      setSelected(null)
      setShowResult(false)
    }
  }

  // ── Render ─────────────────────────────────────────────────────────────────
  if (screen === 'menu') return (
    <MenuScreen
      completedChapters={completedChapters}
      allScores={allScores}
      onSelectChapter={goToChapter}
    />
  )

  if (screen === 'lesson') return (
    <LessonScreen
      chapter={chapter}
      onStartExercises={startExercises}
      onBack={() => setScreen('menu')}
    />
  )

  if (screen === 'exercises') return (
    <ExerciseScreen
      chapter={chapter}
      exerciseIdx={exerciseIdx}
      selected={selected}
      showResult={showResult}
      onSelect={handleSelect}
      onNext={handleNextFixed}
      onBack={() => setScreen('lesson')}
    />
  )

  if (screen === 'chapter-done') return (
    <ChapterCompleteScreen
      chapter={chapter}
      score={allScores[chapterIdx] ?? chapterScore}
      onNext={chapterIdx + 1 < CHAPTERS.length ? handleNextChapter : null}
      onMenu={() => setScreen('menu')}
      onRetry={handleRetry}
    />
  )

  if (screen === 'all-done') return (
    <GameCompleteScreen
      allScores={allScores}
      onMenu={() => setScreen('menu')}
    />
  )

  return null
}
