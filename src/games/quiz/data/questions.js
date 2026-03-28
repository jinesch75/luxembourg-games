/**
 * Quiz question bank — Luxembourg
 * Each question: id, level, category, question, options[], answer (0-based), explanation, link
 * Levels: 'newcomer' | 'explorer' | 'resident' | 'citizen' | 'ambassador'
 * 25 questions per level (5 sub-levels × 5 questions each), categories interleaved.
 */

// ─── NEWCOMER (Level 1) ───────────────────────────────────────────────────────
const NEWCOMER = [
  // sub-level 1
  {
    id: 'lang-1', level: 'newcomer', category: 'language',
    question: 'What does "Moien" mean in Luxembourgish?',
    options: ['Good evening', 'Hello / Good morning', 'Thank you', 'Goodbye'],
    answer: 1,
    explanation: '"Moien" is the most common greeting in Luxembourgish, used any time of day. It comes from the German "Morgen" (morning).',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html'
  },
  {
    id: 'hist-1', level: 'newcomer', category: 'history',
    question: 'In which year did Luxembourg gain full independence?',
    options: ['1815', '1839', '1867', '1890'],
    answer: 1,
    explanation: 'The Treaty of London of 19 April 1839 recognised Luxembourg as a fully independent state, separating it from the Netherlands.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'cult-1', level: 'newcomer', category: 'culture',
    question: 'What is Luxembourg\'s National Day and when is it celebrated?',
    options: ['24 October — Independence Day', '23 June — National Day (Nationalfeierdag)', '14 July — Bastille Day', '15 November — Day of the Dynasty'],
    answer: 1,
    explanation: 'Luxembourg\'s National Day (Nationalfeierdag) is celebrated on 23 June, officially the birthday of the Grand Duke. It features concerts, fireworks, and the "Torch Procession" the night before.',
    link: 'https://luxembourg.public.lu/en/culture/traditions.html'
  },
  {
    id: 'peop-1', level: 'newcomer', category: 'people',
    question: 'Edward Steichen, born in Bivange, Luxembourg, became world-famous as what?',
    options: ['A jazz musician', 'A photographer and curator at MoMA New York', 'A Formula 1 racing driver', 'A Nobel Prize-winning economist'],
    answer: 1,
    explanation: 'Edward Steichen (1879–1973) was a pioneering photographer and director of the photography department at MoMA (New York). He created the iconic "Family of Man" exhibition (1955).',
    link: 'https://luxembourg.public.lu/en/culture/patrimoine-culturel.html'
  },
  {
    id: 'inst-1', level: 'newcomer', category: 'institutions',
    question: 'How many members does the Luxembourg parliament (Chambre des Députés) have?',
    options: ['40', '60', '72', '100'],
    answer: 1,
    explanation: 'The Chambre des Députés has 60 members elected for five-year terms. Luxembourg is divided into 4 constituencies: South, Centre, North, and East.',
    link: 'https://luxembourg.public.lu/en/gouvernement/chambre-des-deputes.html'
  },
  // sub-level 2
  {
    id: 'econ-1', level: 'newcomer', category: 'economy',
    question: 'Luxembourg is the world\'s second-largest investment fund centre after which country?',
    options: ['Switzerland', 'The United States', 'United Kingdom', 'Hong Kong'],
    answer: 1,
    explanation: 'Luxembourg is the world\'s second-largest investment fund domicile after the USA, hosting over 3,500 funds. The financial sector accounts for roughly a quarter of GDP.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html'
  },
  {
    id: 'lang-2', level: 'newcomer', category: 'language',
    question: 'In which year was Luxembourgish officially recognised as the national language?',
    options: ['1945', '1964', '1984', '2000'],
    answer: 2,
    explanation: 'The Law of 24 February 1984 established Luxembourgish as the national language, alongside French and German as administrative languages.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html'
  },
  {
    id: 'hist-2', level: 'newcomer', category: 'history',
    question: 'What was the significance of the Treaty of London (1867) for Luxembourg?',
    options: ['Luxembourg joined the European Community', 'Luxembourg was declared permanently neutral and its great fortress demolished', 'Luxembourg gained its current borders', 'Luxembourg became a Grand Duchy'],
    answer: 1,
    explanation: 'The 1867 Treaty of London declared Luxembourg perpetually neutral and required the demolition of its famous fortress. The Allies called the city "Gibraltar of the North".',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'n-cult-1', level: 'newcomer', category: 'culture',
    question: 'What is the national motto of Luxembourg?',
    options: ['"Lëtzebuerg fir ëmmer"', '"Mir wëlle bleiwe wat mir sinn"', '"Eent fir all, all fir eent"', '"Fräiheet an Demokratie"'],
    answer: 1,
    explanation: '"Mir wëlle bleiwe wat mir sinn" means "We want to remain what we are" — Luxembourg\'s national motto, expressing the country\'s determination to preserve its identity and independence.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg.html'
  },
  {
    id: 'n-peop-1', level: 'newcomer', category: 'people',
    question: 'Who is the Head of State of Luxembourg?',
    options: ['Grand Duke Jean', 'Grand Duke Henri', 'Grand Duke Guillaume', 'Grand Duke Adolphe'],
    answer: 1,
    explanation: 'Grand Duke Henri has been the constitutional monarch of Luxembourg since October 2000, when his father Grand Duke Jean abdicated. He is married to Grand Duchess Maria Teresa.',
    link: 'https://luxembourg.public.lu/en/gouvernement/maison-grand-ducale.html'
  },
  // sub-level 3
  {
    id: 'n-inst-1', level: 'newcomer', category: 'institutions',
    question: 'What currency does Luxembourg use?',
    options: ['Luxembourg Franc', 'Euro', 'Belgian Franc', 'Swiss Franc'],
    answer: 1,
    explanation: 'Luxembourg uses the Euro (€) as its currency. Luxembourg was one of the founding members of the Eurozone and adopted euro notes and coins on 1 January 2002.',
    link: 'https://luxembourg.public.lu/en/vivre.html'
  },
  {
    id: 'n-econ-1', level: 'newcomer', category: 'economy',
    question: 'What is the approximate area of Luxembourg in km²?',
    options: ['1,286 km²', '2,586 km²', '3,986 km²', '5,200 km²'],
    answer: 1,
    explanation: 'Luxembourg covers 2,586 km², making it one of the smallest countries in Europe and the world. Despite its small size, it is one of the wealthiest nations per capita.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg.html'
  },
  {
    id: 'n-lang-1', level: 'newcomer', category: 'language',
    question: 'What does "Äddi" mean in Luxembourgish?',
    options: ['Hello', 'Please', 'Goodbye', 'Thank you'],
    answer: 2,
    explanation: '"Äddi" is the standard way to say goodbye in Luxembourgish. It is derived from "adieu" via French influence — a good example of how Luxembourgish blends Germanic and Romance elements.',
    link: null
  },
  {
    id: 'n-hist-1', level: 'newcomer', category: 'history',
    question: 'What is the name of the rock promontory at the heart of Luxembourg City\'s fortifications?',
    options: ['The Pétrusse Rock', 'The Bock', 'The Alzette Cliff', 'The Vauban Ridge'],
    answer: 1,
    explanation: 'The Bock promontory is where Count Sigefroid built his castle in 963 AD, founding Luxembourg. It towers above the Alzette river valley and is the historic heart of the city.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'n-econ-2', level: 'newcomer', category: 'economy',
    question: 'Which is the second-largest city in Luxembourg?',
    options: ['Differdange', 'Dudelange', 'Esch-sur-Alzette', 'Ettelbruck'],
    answer: 2,
    explanation: 'Esch-sur-Alzette, in the south of the country, is Luxembourg\'s second-largest city. It was the historical centre of Luxembourg\'s steel industry and is known today for its cultural scene.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg.html'
  },
  // sub-level 4
  {
    id: 'cult-2', level: 'newcomer', category: 'culture',
    question: 'What is "Bretzelsonndeg" (Pretzel Sunday) in Luxembourg?',
    options: ['A harvest festival where farmers share pretzels', 'A Valentine\'s Day tradition where boys give pretzels to girls they like', 'An Easter tradition of eating sweet pretzels', 'A Carnival custom involving pretzel-shaped costumes'],
    answer: 1,
    explanation: 'Bretzelsonndeg (the 4th Sunday of Lent) is a Luxembourg Valentine\'s Day: boys give a decorated pretzel to the girl they like. If she reciprocates, she gives him a decorated egg at Easter.',
    link: 'https://luxembourg.public.lu/en/culture/traditions.html'
  },
  {
    id: 'peop-2', level: 'newcomer', category: 'people',
    question: 'Which Luxembourger won Olympic gold in the 1500m at the 1952 Helsinki Olympics?',
    options: ['Michel Théato', 'Nicolas Frantz', 'Josy Barthel', 'Charly Gaul'],
    answer: 2,
    explanation: 'Josy Barthel (1927–1992) won gold in the 1500m at the 1952 Helsinki Olympics — Luxembourg\'s only Olympic gold medal to date. The national athletics stadium is named after him.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'inst-2', level: 'newcomer', category: 'institutions',
    question: 'Which major EU institutions have their headquarters in Luxembourg City?',
    options: ['European Parliament and European Commission', 'Court of Justice of the EU, Court of Auditors, and Eurostat', 'European Central Bank and European Council', 'European Defence Agency and Europol'],
    answer: 1,
    explanation: 'Luxembourg hosts the Court of Justice of the EU, the Court of Auditors, Eurostat, the European Investment Bank (EIB), and part of the European Parliament\'s Secretariat.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/institutions-europeennes.html'
  },
  {
    id: 'econ-2', level: 'newcomer', category: 'economy',
    question: 'Approximately what percentage of Luxembourg\'s workforce are cross-border commuters?',
    options: ['15%', '25%', '45%', '60%'],
    answer: 2,
    explanation: 'About 45% of workers in Luxembourg commute daily from neighbouring France, Belgium, and Germany — making Luxembourg unique in Europe.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html'
  },
  {
    id: 'n-lang-2', level: 'newcomer', category: 'language',
    question: 'What are the three official administrative languages of Luxembourg?',
    options: ['English, French, German', 'Luxembourgish, French, German', 'French, German, Portuguese', 'Luxembourgish, English, French'],
    answer: 1,
    explanation: 'Luxembourg uses three official languages: Luxembourgish (national language), French (legislation and courts), and German (media and press).',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html'
  },
  // sub-level 5
  {
    id: 'n-hist-2', level: 'newcomer', category: 'history',
    question: 'In which year was Luxembourg occupied by Nazi Germany during World War II?',
    options: ['1938', '1939', '1940', '1941'],
    answer: 2,
    explanation: 'Germany invaded and occupied Luxembourg on 10 May 1940. Luxembourg was later annexed into the Third Reich in 1942. It was liberated by Allied forces in September 1944.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'n-cult-2', level: 'newcomer', category: 'culture',
    question: 'What animal appears on Luxembourg\'s coat of arms?',
    options: ['A golden eagle', 'A red lion', 'A white horse', 'A silver bear'],
    answer: 1,
    explanation: 'A red lion on a white and blue striped background is the central element of Luxembourg\'s coat of arms. The lion has appeared on Luxembourg\'s heraldry since the 13th century.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg.html'
  },
  {
    id: 'n-peop-2', level: 'newcomer', category: 'people',
    question: 'Cyclist Andy Schleck won the Tour de France in which year?',
    options: ['2008', '2009', '2010', '2011'],
    answer: 2,
    explanation: 'Andy Schleck was awarded the 2010 Tour de France victory after Alberto Contador was disqualified for doping. Schleck is one of Luxembourg\'s most celebrated modern athletes.',
    link: null
  },
  {
    id: 'n-inst-2', level: 'newcomer', category: 'institutions',
    question: 'Into how many electoral constituencies is Luxembourg divided?',
    options: ['2', '3', '4', '6'],
    answer: 2,
    explanation: 'Luxembourg is divided into 4 electoral constituencies for parliamentary elections: South (the most populous), Centre, North, and East. The 60 seats are distributed proportionally among them.',
    link: 'https://luxembourg.public.lu/en/gouvernement/chambre-des-deputes.html'
  },
  {
    id: 'n-econ-3', level: 'newcomer', category: 'economy',
    question: 'Luxembourg regularly ranks first in the EU for which economic indicator?',
    options: ['Unemployment rate', 'GDP per capita', 'Agricultural output', 'Manufacturing exports'],
    answer: 1,
    explanation: 'Luxembourg consistently has the highest GDP per capita in the EU and among the highest in the world, driven by its financial sector, European institutions, and skilled workforce.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html'
  },
]

// ─── EXPLORER (Level 2) ───────────────────────────────────────────────────────
const EXPLORER = [
  // sub-level 1
  {
    id: 'lang-3', level: 'explorer', category: 'language',
    question: 'Which language family does Luxembourgish (Lëtzebuergesch) belong to?',
    options: ['Romance languages', 'Slavic languages', 'West Germanic (Moselle Franconian)', 'North Germanic'],
    answer: 2,
    explanation: 'Luxembourgish is a West Germanic language of the Moselle Franconian dialect group, closely related to German but with strong French influence.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html'
  },
  {
    id: 'hist-3', level: 'explorer', category: 'history',
    question: 'Who founded the County of Luxembourg in 963 AD by acquiring a small Frankish castle?',
    options: ['Count Baldwin I', 'Sigefroid', 'Ermesinde', 'Henry VII'],
    answer: 1,
    explanation: 'Count Sigefroid acquired the Lucilinburhuc (Little Fortress) in 963 AD, traditionally seen as the founding of Luxembourg.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'cult-3', level: 'explorer', category: 'culture',
    question: 'What is the "Émaischen"?',
    options: ['A traditional harvest festival in the Moselle valley', 'An Easter Monday crafts fair featuring the "Péckvillercher" bird whistles', 'A carnival parade in Esch-sur-Alzette', 'A summer music festival in Vianden'],
    answer: 1,
    explanation: 'The Émaischen is a traditional Easter Monday fair at the Marché-aux-Poissons in Luxembourg City, famous for hand-crafted "Péckvillercher" — terracotta bird-shaped water whistles.',
    link: 'https://luxembourg.public.lu/en/culture/traditions.html'
  },
  {
    id: 'peop-3', level: 'explorer', category: 'people',
    question: 'Charly Gaul, a legendary cyclist from Luxembourg, was nicknamed what?',
    options: ['The Gardener', 'The Angel of the Mountains', 'The Iron Lion', 'The Silent Racer'],
    answer: 1,
    explanation: 'Charly Gaul (1932–2005) was nicknamed "L\'Ange de la Montagne" (The Angel of the Mountains). He won the Tour de France (1958) and Giro d\'Italia twice (1956, 1959).',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'inst-3', level: 'explorer', category: 'institutions',
    question: 'What is STATEC?',
    options: ['The state television broadcaster', 'The National Institute of Statistics and Economic Studies of Luxembourg', 'The state technology agency', 'The national employment agency'],
    answer: 1,
    explanation: 'STATEC (Institut national de la statistique et des études économiques du Grand-Duché de Luxembourg) collects and publishes all official statistics about Luxembourg.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html'
  },
  // sub-level 2
  {
    id: 'econ-3', level: 'explorer', category: 'economy',
    question: 'What was the traditional industrial backbone of Luxembourg\'s economy until the 1970s?',
    options: ['Coal mining', 'Textile industry', 'Steel industry', 'Agriculture'],
    answer: 2,
    explanation: 'Steel was the foundation of Luxembourg\'s economy from the 1870s to the 1970s. Today ArcelorMittal (headquartered in Luxembourg) is the world\'s largest steel producer.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'lang-4', level: 'explorer', category: 'language',
    question: 'How do you say "I love you" in Luxembourgish?',
    options: ['Ech hunn dech gär', 'Je t\'aime', 'Ich liebe dich', 'Mir gefällt dir'],
    answer: 0,
    explanation: '"Ech hunn dech gär" literally means "I have you dear" — the standard Luxembourgish expression of affection.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html'
  },
  {
    id: 'hist-4', level: 'explorer', category: 'history',
    question: 'Luxembourg was a founding member of which three major international organisations?',
    options: ['UN, NATO, and the Council of Europe', 'NATO, EEC (EU), and Benelux', 'EEC, Schengen Area, and WTO', 'Benelux, EFTA, and NATO'],
    answer: 1,
    explanation: 'Luxembourg was a founding member of NATO (1949), the European Economic Community (1957, now EU), and the Benelux Union (1944).',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'e-cult-1', level: 'explorer', category: 'culture',
    question: 'What is "Judd mat Gaardebounen"?',
    options: ['A Luxembourgish folk dance', 'The national dish: smoked collar of pork with broad beans', 'A type of local craft beer', 'A traditional Christmas cake'],
    answer: 1,
    explanation: '"Judd mat Gaardebounen" (smoked collar of pork with broad beans) is considered Luxembourg\'s national dish. It is a hearty, traditional meal with roots in the country\'s agricultural past.',
    link: 'https://www.visitluxembourg.com/en/food-and-drinks'
  },
  {
    id: 'e-peop-1', level: 'explorer', category: 'people',
    question: 'Hugo Gernsback, born in Luxembourg in 1884, is known as the "Father of Science Fiction". Which magazine did he found?',
    options: ['Popular Science', 'Amazing Stories', 'Science Wonder Stories', 'Modern Mechanics'],
    answer: 1,
    explanation: 'Hugo Gernsback (1884–1967) founded "Amazing Stories" in 1926, the first magazine dedicated entirely to science fiction. The Hugo Awards are named in his honour.',
    link: 'https://luxembourg.public.lu/en/culture/patrimoine-culturel.html'
  },
  // sub-level 3
  {
    id: 'inst-4', level: 'explorer', category: 'institutions',
    question: 'What is the role of the "Médiateur" (Ombudsman) in Luxembourg?',
    options: ['To mediate in divorce proceedings', 'To handle citizens\' complaints against public administrations', 'To supervise media and press', 'To manage EU relations'],
    answer: 1,
    explanation: 'The Médiateur de la République acts as an independent intermediary between citizens and public administrations, investigating complaints and seeking solutions without going to court.',
    link: 'https://luxembourg.public.lu/en/gouvernement/institutions.html'
  },
  {
    id: 'econ-4', level: 'explorer', category: 'economy',
    question: 'What is Luxembourg\'s approximate population?',
    options: ['350,000', '520,000', '680,000', '1.2 million'],
    answer: 2,
    explanation: 'Luxembourg had approximately 680,000 residents in 2024 — one of the smallest countries in the EU by population, but also one of the wealthiest per capita.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html'
  },
  {
    id: 'e-lang-1', level: 'explorer', category: 'language',
    question: 'What does "Wéi geet et?" mean in Luxembourgish?',
    options: ['Where are you going?', 'How are you?', 'What time is it?', 'Where is the station?'],
    answer: 1,
    explanation: '"Wéi geet et?" means "How are you?" or "How is it going?" — a very common everyday greeting in Luxembourg.',
    link: null
  },
  {
    id: 'e-hist-1', level: 'explorer', category: 'history',
    question: 'The Schengen Agreement was signed in 1985. Where exactly?',
    options: ['Luxembourg City', 'The village of Schengen, on a boat on the Moselle River', 'Brussels, Belgium', 'Strasbourg, France'],
    answer: 1,
    explanation: 'The Schengen Agreement was signed on 14 June 1985 on the MS Princesse Marie-Astrid, moored at Schengen — a small Luxembourg village where France, Germany, and Luxembourg meet.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/institutions-europeennes.html'
  },
  {
    id: 'cult-4', level: 'explorer', category: 'culture',
    question: 'Luxembourg\'s historic Old Town and its fortifications have been a UNESCO World Heritage Site since which year?',
    options: ['1985', '1994', '2001', '2008'],
    answer: 1,
    explanation: 'Luxembourg City\'s Old Quarters and Fortifications were inscribed on the UNESCO World Heritage List in 1994, recognised for their outstanding universal value.',
    link: 'https://www.visitluxembourg.com/en/place/site/old-quarters-and-fortifications-of-the-city-of-luxembourg'
  },
  // sub-level 4
  {
    id: 'peop-4', level: 'explorer', category: 'people',
    question: 'Jean-Claude Juncker, former Prime Minister of Luxembourg (1995–2013), later served as what?',
    options: ['Secretary General of NATO', 'President of the European Commission (2014–2019)', 'President of the European Council', 'President of the European Parliament'],
    answer: 1,
    explanation: 'Jean-Claude Juncker served as Luxembourg\'s Prime Minister for 18 years, then as President of the European Commission from 2014 to 2019.',
    link: 'https://luxembourg.public.lu/en/gouvernement.html'
  },
  {
    id: 'inst-5', level: 'explorer', category: 'institutions',
    question: 'What does "LCGB" stand for in Luxembourg?',
    options: ['Luxembourg Catholic Governing Body', 'Lëtzebuerger Chrëschtleche Gewerkschafts-Bond (Christian trade union)', 'Luxembourg Commercial and Government Bureau', 'Luxembourg Cultural and Geographical Board'],
    answer: 1,
    explanation: 'LCGB is one of Luxembourg\'s major trade unions, alongside OGBL. Trade unions play an important role in Luxembourg\'s social dialogue model.',
    link: 'https://luxembourg.public.lu/en/vivre/emploi.html'
  },
  {
    id: 'econ-5', level: 'explorer', category: 'economy',
    question: 'Which tech companies have their European headquarters in Luxembourg?',
    options: ['Apple, Google, and Twitter/X', 'Amazon, PayPal, Skype, and many others', 'Microsoft, Samsung, and Sony', 'Facebook, Netflix, and Uber'],
    answer: 1,
    explanation: 'Luxembourg hosts European HQs for Amazon, PayPal, Skype, Rakuten, Ferrero, and many others, attracted by stability, location, and EU market access.',
    link: 'https://luxembourg.public.lu/en/entreprises/faire-affaire.html'
  },
  {
    id: 'e-lang-2', level: 'explorer', category: 'language',
    question: 'What does "Merci villmools" mean in Luxembourgish?',
    options: ['You\'re welcome', 'Thank you very much', 'Excuse me', 'Please'],
    answer: 1,
    explanation: '"Merci villmools" combines the French "merci" with the Luxembourgish "villmools" (many times) to mean "thank you very much". This blend is typical of Luxembourgish.',
    link: null
  },
  {
    id: 'e-hist-2', level: 'explorer', category: 'history',
    question: 'Which Grand Duchess led Luxembourg through exile during World War II?',
    options: ['Marie-Adélaïde', 'Charlotte', 'Joséphine-Charlotte', 'Maria Teresa'],
    answer: 1,
    explanation: 'Grand Duchess Charlotte (1896–1985) led the Luxembourg government in exile during WWII, broadcasting from London to keep national spirit alive. She is one of Luxembourg\'s most beloved figures.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  // sub-level 5
  {
    id: 'e-cult-2', level: 'explorer', category: 'culture',
    question: 'What is "Kachkéis"?',
    options: ['A Luxembourgish folk song', 'A traditional cooked cheese spread eaten on bread', 'A type of local sausage', 'A pastry served at National Day'],
    answer: 1,
    explanation: '"Kachkéis" (cooked cheese) is a traditional Luxembourgish processed cheese spread, made by melting fresh white cheese with butter and eggs. It\'s served on rye bread and is a beloved local comfort food.',
    link: 'https://www.visitluxembourg.com/en/food-and-drinks'
  },
  {
    id: 'e-peop-2', level: 'explorer', category: 'people',
    question: 'Michel Théato won the marathon at which Olympic Games?',
    options: ['1896 Athens', '1900 Paris', '1904 St. Louis', '1908 London'],
    answer: 1,
    explanation: 'Michel Théato won the marathon at the 1900 Paris Olympics. Research later confirmed he was born in Luxembourg in 1878, making him Luxembourg\'s first Olympic gold medallist.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'e-inst-1', level: 'explorer', category: 'institutions',
    question: 'What is the "Conseil d\'État" (Council of State) in Luxembourg?',
    options: ['The government cabinet', 'A consultative body that reviews legislation before parliament votes', 'The supreme court', 'The senate (upper chamber)'],
    answer: 1,
    explanation: 'The Conseil d\'État is a consultative body of 21 members that reviews all bills before parliament votes on them. It acts as a brake on hasty legislation but does not have veto power.',
    link: 'https://luxembourg.public.lu/en/gouvernement/institutions/conseil-etat.html'
  },
  {
    id: 'econ-6', level: 'explorer', category: 'economy',
    question: 'How many nationalities are represented among Luxembourg\'s residents?',
    options: ['About 50', 'About 100', 'About 170', 'About 250'],
    answer: 2,
    explanation: 'Over 170 nationalities call Luxembourg home. About 47% of residents are foreign nationals — one of the highest proportions in the world. Portuguese nationals form the largest non-Luxembourg community.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html'
  },
  {
    id: 'e-lang-3', level: 'explorer', category: 'language',
    question: 'The University of Luxembourg was founded in which year?',
    options: ['1969', '1985', '2003', '2010'],
    answer: 2,
    explanation: 'The University of Luxembourg was established in 2003. It is the only public university in the country and has a strong multilingual and international focus, with campuses in Belval, Limpertsberg, and Kirchberg.',
    link: 'https://www.uni.lu/en/'
  },
]

// ─── RESIDENT (Level 3) ───────────────────────────────────────────────────────
const RESIDENT = [
  // sub-level 1
  {
    id: 'lang-5', level: 'resident', category: 'language',
    question: 'What are the three official administrative languages of Luxembourg?',
    options: ['English, French, German', 'Luxembourgish, French, German', 'French, German, Portuguese', 'Luxembourgish, English, French'],
    answer: 1,
    explanation: 'Luxembourg uses three official languages: Luxembourgish (national language), French (legislation and courts), and German (media and press).',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html'
  },
  {
    id: 'hist-5', level: 'resident', category: 'history',
    question: 'The Battle of the Bulge (December 1944–January 1945) was partly fought in Luxembourg. Which town is famous for this?',
    options: ['Esch-sur-Alzette', 'Clervaux', 'Bastogne (nearby Belgium)', 'Echternach'],
    answer: 1,
    explanation: 'Clervaux, in northern Luxembourg, saw heavy fighting during the Battle of the Bulge (Ardennes Offensive). The town\'s castle was heavily damaged before being retaken by Allied forces.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'cult-5', level: 'resident', category: 'culture',
    question: 'What is the "Schueberfouer"?',
    options: ['A sheep fair that grew into a large funfair held annually in Luxembourg City', 'A medieval jousting tournament held in Vianden', 'A wine festival in Remich on the Moselle', 'A Christmas market on the Place d\'Armes'],
    answer: 0,
    explanation: 'The Schueberfouer started as a sheep fair (Schafsmarkt) in 1340, granted by John the Blind. Today it\'s one of Europe\'s oldest and largest funfairs, held every August/September in Luxembourg City.',
    link: 'https://www.visitluxembourg.com/en/event/schueberfouer-fair'
  },
  {
    id: 'peop-5', level: 'resident', category: 'people',
    question: 'Nicolas Frantz, a cyclist from Mamer, Luxembourg, won the Tour de France in which years?',
    options: ['1921 and 1922', '1927 and 1928', '1933 and 1934', '1938 and 1939'],
    answer: 1,
    explanation: 'Nicolas Frantz won the Tour de France in 1927 and 1928. He is one of Luxembourg\'s greatest sporting legends, alongside Charly Gaul, Josy Barthel, and Andy Schleck.',
    link: null
  },
  {
    id: 'inst-6', level: 'resident', category: 'institutions',
    question: 'What does ADEM do?',
    options: ['It manages the national health insurance', 'It is the national employment agency, helping jobseekers and employers', 'It handles immigration and residence permits', 'It manages social housing'],
    answer: 1,
    explanation: 'ADEM (Agence pour le développement de l\'emploi) is Luxembourg\'s national employment agency. It helps jobseekers find work, manages unemployment benefits, and supports employers.',
    link: 'https://adem.public.lu/en.html'
  },
  // sub-level 2
  {
    id: 'econ-7', level: 'resident', category: 'economy',
    question: 'The Moselle region of Luxembourg is known for producing what?',
    options: ['Craft beer', 'White wines (Riesling, Rivaner, Auxerrois)', 'Cheese', 'Chocolate'],
    answer: 1,
    explanation: 'The Luxembourg Moselle valley produces excellent white wines, especially Riesling, Rivaner, Auxerrois, and sparkling Crémant de Luxembourg.',
    link: 'https://www.visitluxembourg.com/en/country/moselle'
  },
  {
    id: 'lang-6', level: 'resident', category: 'language',
    question: 'Which famous literary work in Luxembourgish is Michel Rodange known for?',
    options: ['De Renert', 'Dil Ueueglen', 'Lëtzebuerger', 'D\'Weltgeschicht'],
    answer: 0,
    explanation: 'Michel Rodange wrote "De Renert" (The Fox) in 1872, an epic poem retelling the medieval Reynard the Fox story in Luxembourgish — a cornerstone of Luxembourg\'s literary heritage.',
    link: 'https://luxembourg.public.lu/en/culture/patrimoine-culturel.html'
  },
  {
    id: 'hist-6', level: 'resident', category: 'history',
    question: 'The Schuman Declaration of 1950 proposed European integration. Where was Robert Schuman born?',
    options: ['Metz, France', 'Clausen, Luxembourg City', 'Trier, Germany', 'Brussels, Belgium'],
    answer: 1,
    explanation: 'Robert Schuman (1886–1963) was born in Clausen, Luxembourg City. He became French Foreign Minister and proposed the European Coal and Steel Community, leading to today\'s EU.',
    link: 'https://luxembourg.public.lu/en/culture/patrimoine-culturel.html'
  },
  {
    id: 'r-cult-1', level: 'resident', category: 'culture',
    question: 'What is the "Octave of Our Lady of Luxembourg"?',
    options: ['Eight days of singing and dancing at the Cathedral', 'A 15-day Marian pilgrimage every May at Notre-Dame Cathedral', 'A procession through the Pétrusse valley on Easter Sunday', 'A Marian festival held in Echternach'],
    answer: 1,
    explanation: 'The Octave of Our Lady of Luxembourg (Oktav) is a 15-day Marian pilgrimage every May at Notre-Dame Cathedral. Thousands gather to venerate the Consolatrix Afflictorum, patroness of Luxembourg.',
    link: 'https://luxembourg.public.lu/en/culture/traditions.html'
  },
  {
    id: 'r-peop-1', level: 'resident', category: 'people',
    question: 'Who was Luxembourg\'s Prime Minister as of 2024?',
    options: ['Xavier Bettel', 'Jean-Claude Juncker', 'Luc Frieden', 'Étienne Schneider'],
    answer: 2,
    explanation: 'Luc Frieden became Luxembourg\'s Prime Minister in November 2023, leading a coalition of the CSV (Christian Social People\'s Party) and DP (Democratic Party).',
    link: 'https://luxembourg.public.lu/en/gouvernement.html'
  },
  // sub-level 3
  {
    id: 'r-inst-1', level: 'resident', category: 'institutions',
    question: 'The European Investment Bank (EIB) is headquartered in Luxembourg. What does it primarily do?',
    options: ['Manages EU member state budgets', 'Finances long-term investment projects supporting EU policy objectives', 'Sets eurozone interest rates', 'Manages the EU\'s foreign exchange reserves'],
    answer: 1,
    explanation: 'The EIB is the EU\'s lending arm, financing infrastructure, climate action, innovation, and development projects. It is the world\'s largest multilateral public bank.',
    link: 'https://www.eib.org/en/index.htm'
  },
  {
    id: 'r-econ-1', level: 'resident', category: 'economy',
    question: 'Which Portuguese-origin community is the largest non-Luxembourgish group in the country?',
    options: ['About 10,000', 'About 40,000', 'About 100,000', 'About 200,000'],
    answer: 2,
    explanation: 'The Portuguese community numbers around 100,000, making it the largest non-Luxembourgish nationality. Many came as workers from the 1960s onward, especially to work in construction and the steel industry.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html'
  },
  {
    id: 'r-lang-1', level: 'resident', category: 'language',
    question: 'In Luxembourgish, what is the word for "yes"?',
    options: ['Oui', 'Jo', 'Yo', 'Ya'],
    answer: 1,
    explanation: '"Jo" is the Luxembourgish word for "yes". It closely resembles the German "ja" and the Dutch "ja", reflecting Luxembourgish\'s West Germanic roots.',
    link: null
  },
  {
    id: 'r-hist-1', level: 'resident', category: 'history',
    question: 'Countess Ermesinde (1186–1247) is considered one of Luxembourg\'s greatest medieval rulers. What did she grant?',
    options: ['The right to collect taxes from merchants', 'Freedoms and charters to Luxembourg City and other towns, expanding the territory', 'Permission to build the Cathedral of Notre-Dame', 'The first Moselle wine appellation'],
    answer: 1,
    explanation: 'Ermesinde significantly expanded Luxembourg\'s territory and granted freedoms (charters) to towns including Luxembourg City (1244), Echternach, and Thionville, laying the foundation for a more structured society.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'cult-6', level: 'resident', category: 'culture',
    question: 'What does "Gëlle Fra" (Golden Lady) refer to?',
    options: ['A famous Luxembourg pastry', 'A monument on Place de la Constitution depicting a winged woman on a tall column', 'A traditional dance from the Ardennes region', 'The nickname for Grand Duchess Charlotte'],
    answer: 1,
    explanation: 'The Gëlle Fra (Golden Lady) is a war memorial on Place de la Constitution. The golden statue atop a 21-metre column commemorates WWI volunteers. It was melted down by Nazi occupiers in 1940 and rebuilt after the war.',
    link: 'https://www.visitluxembourg.com/en/place/site/golden-lady-monument-constitution-square'
  },
  // sub-level 4
  {
    id: 'peop-6', level: 'resident', category: 'people',
    question: 'The "Dancing Procession of Echternach" is a UNESCO Intangible Cultural Heritage. What makes it special?',
    options: ['Participants dance backwards through the streets', 'It is performed entirely in silence', 'Participants hop in a three-step dance while moving in procession on Whit Tuesday', 'It involves costumes of over 100 different countries'],
    answer: 2,
    explanation: 'The Echternach Dancing Procession (Sprangprozessioun) takes place every Whit Tuesday since the 7th century, in honour of St. Willibrord.',
    link: 'https://www.visitluxembourg.com/en/event/echternach-dancing-procession'
  },
  {
    id: 'inst-7', level: 'resident', category: 'institutions',
    question: 'The ADEM is a key institution for people living in Luxembourg. What does ADEM stand for?',
    options: ['Agence pour le Développement de l\'Emploi du Monde', 'Agence pour le développement de l\'emploi', 'Administration des Entreprises et des Marchés', 'Association pour le Développement Économique et Managérial'],
    answer: 1,
    explanation: 'ADEM stands for "Agence pour le développement de l\'emploi" — Luxembourg\'s national employment agency that assists both jobseekers and employers.',
    link: 'https://adem.public.lu/en.html'
  },
  {
    id: 'econ-8', level: 'resident', category: 'economy',
    question: 'Luxembourg\'s financial centre is home to how many banks approximately?',
    options: ['Around 30', 'Around 130', 'Around 300', 'Around 1,000'],
    answer: 1,
    explanation: 'Luxembourg hosts around 130 banks from over 25 countries, making it one of Europe\'s leading banking centres, particularly for private banking, custody, and cross-border investment funds.',
    link: 'https://luxembourg.public.lu/en/entreprises/faire-affaire.html'
  },
  {
    id: 'r-lang-2', level: 'resident', category: 'language',
    question: 'What does "Lëtzebuerg" (the Luxembourgish name for Luxembourg) roughly translate to?',
    options: ['The Little Fortress', 'The Land of Lions', 'The Green Valley', 'The Iron Bridge'],
    answer: 0,
    explanation: '"Lëtzebuerg" derives from "Lucilinburhuc" meaning "Little Fortress" in Old High German — a reference to the castle built by Sigefroid in 963 on the Bock rock.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'r-hist-2', level: 'resident', category: 'history',
    question: 'John the Blind (Jean l\'Aveugle), Count of Luxembourg, died in which famous battle?',
    options: ['Battle of Waterloo (1815)', 'Battle of Crécy (1346)', 'Battle of Agincourt (1415)', 'Battle of the Bulge (1944)'],
    answer: 1,
    explanation: 'John the Blind (1296–1346), King of Bohemia and Count of Luxembourg, died heroically at the Battle of Crécy fighting for France despite being blind. His motto "Ich dien" (I serve) was adopted by the Prince of Wales.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  // sub-level 5
  {
    id: 'r-cult-2', level: 'resident', category: 'culture',
    question: 'What is the Philharmonie Luxembourg known for?',
    options: ['It is Luxembourg\'s national art museum', 'It is a major concert hall on Kirchberg, home of the OPL', 'It is the national theatre of Luxembourg', 'It is an outdoor music festival venue in Esch'],
    answer: 1,
    explanation: 'The Philharmonie Luxembourg, opened in 2005 and designed by Christian de Portzamparc, is one of Europe\'s finest concert halls. It is the home of the Orchestre Philharmonique du Luxembourg (OPL).',
    link: 'https://www.philharmonie.lu/en/'
  },
  {
    id: 'r-peop-2', level: 'resident', category: 'people',
    question: 'Henri Funck was a prominent 19th-century Luxembourg artist. What was he known for?',
    options: ['Landscape paintings of the Alzette valley and Luxembourg City', 'Portraits of the Grand Ducal family', 'Impressionist scenes of the Moselle', 'Abstract sculptures in the national park'],
    answer: 0,
    explanation: 'Henri Funck (1842–1911) is celebrated for his detailed landscape paintings and watercolours of Luxembourg City and the Alzette valley, providing an invaluable visual record of 19th-century Luxembourg.',
    link: 'https://luxembourg.public.lu/en/culture/patrimoine-culturel.html'
  },
  {
    id: 'r-inst-2', level: 'resident', category: 'institutions',
    question: 'What is the role of the "Chambre des Salariés" (CSL) in Luxembourg?',
    options: ['It is the parliament', 'It is a mandatory consultative body representing employees\' interests', 'It manages social security contributions', 'It is the employers\' federation'],
    answer: 1,
    explanation: 'The Chambre des Salariés (CSL) is a mandatory body representing the interests of employees in Luxembourg. All salaried workers are automatically members. It advises parliament on social and economic legislation.',
    link: 'https://luxembourg.public.lu/en/vivre/emploi.html'
  },
  {
    id: 'r-econ-2', level: 'resident', category: 'economy',
    question: 'What is the "Minette" region in southern Luxembourg?',
    options: ['A wine-producing area along the Moselle', 'The historical iron ore and steel belt', 'A nature reserve in the Ardennes', 'A suburb of Luxembourg City'],
    answer: 1,
    explanation: 'The Minette (or "terres rouges") is Luxembourg\'s southern iron ore and steel belt. Its red iron-rich soils fuelled the steel industry from the 1870s. Today the region is being reinvented as a cultural and tech hub (notably Belval).',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'r-lang-3', level: 'resident', category: 'language',
    question: 'Which Luxembourgish TV and radio broadcaster was founded in 1929?',
    options: ['RTL (Radio Télévision Luxembourg)', 'LuxMedia', 'TNT Luxembourg', 'Canal Luxembourg'],
    answer: 0,
    explanation: 'RTL (Radio Télévision Luxembourg) traces its origins to 1929 and became one of Europe\'s most influential commercial broadcasters. The RTL Group, now headquartered in Luxembourg, is a major European media company.',
    link: 'https://luxembourg.public.lu/en/culture.html'
  },
]

// ─── CITIZEN (Level 4) ───────────────────────────────────────────────────────
const CITIZEN = [
  // sub-level 1
  {
    id: 'lang-7', level: 'citizen', category: 'language',
    question: 'What does "D\'Lëtzebuerger Sprooch" refer to?',
    options: ['The Luxembourg dialect of French', 'The Luxembourgish language itself', 'The official legal language of Luxembourg', 'A Luxembourgish language school programme'],
    answer: 1,
    explanation: '"D\'Lëtzebuerger Sprooch" simply means "the Luxembourgish language". The language has a unique alphabet that includes special characters like the ë (e-umlaut), not found in standard German.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html'
  },
  {
    id: 'hist-7', level: 'citizen', category: 'history',
    question: 'Luxembourg became a Grand Duchy under which royal house at the Congress of Vienna (1815)?',
    options: ['Habsburg', 'Nassau-Weilburg', 'Bourbon', 'Hohenzollern'],
    answer: 1,
    explanation: 'At the Congress of Vienna in 1815, Luxembourg became a Grand Duchy under the House of Nassau-Weilburg (later Nassau-Weilburg-Orange), which remains the ruling dynasty today.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'cult-7', level: 'citizen', category: 'culture',
    question: 'Luxembourg City was a European Capital of Culture in which year?',
    options: ['1988', '1995', '2007', '2012'],
    answer: 2,
    explanation: 'Luxembourg (together with the Greater Region) was European Capital of Culture in 2007. The event spurred major cultural investment, including the Philharmonie and Mudam (Museum of Modern Art).',
    link: 'https://luxembourg.public.lu/en/culture.html'
  },
  {
    id: 'peop-7', level: 'citizen', category: 'people',
    question: 'Grand Duchess Charlotte reigned from 1919 to 1964. Who succeeded her?',
    options: ['Grand Duke Henri', 'Grand Duke Jean', 'Grand Duke Adolphe', 'Grand Duke Guillaume IV'],
    answer: 1,
    explanation: 'Grand Duke Jean succeeded his mother Charlotte in 1964 and reigned until 2000, when he abdicated in favour of his son Henri. Jean\'s reign of 36 years was a period of major economic growth.',
    link: 'https://luxembourg.public.lu/en/gouvernement/maison-grand-ducale.html'
  },
  {
    id: 'inst-8', level: 'citizen', category: 'institutions',
    question: 'The Court of Justice of the EU (CJEU) has its seat in Luxembourg. What is its main role?',
    options: ['To prosecute criminals across the EU', 'To ensure EU law is interpreted and applied uniformly in all member states', 'To manage the EU\'s budget disputes', 'To arbitrate trade disputes with non-EU countries'],
    answer: 1,
    explanation: 'The CJEU ensures EU law is interpreted and applied uniformly across all member states. It rules on cases involving EU institutions, member states, businesses, and individuals.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/institutions-europeennes.html'
  },
  // sub-level 2
  {
    id: 'c-econ-1', level: 'citizen', category: 'economy',
    question: 'What is the "tripartite" social dialogue model in Luxembourg?',
    options: ['A three-language requirement for all civil servants', 'A consultation framework between government, employers, and trade unions', 'A three-tier tax system for residents, non-residents, and corporations', 'A three-party coalition government system'],
    answer: 1,
    explanation: 'Luxembourg\'s "tripartite" model brings together the government, employer organisations (like UEL), and trade unions (OGBL, LCGB) to negotiate economic and social policy — a cornerstone of Luxembourg\'s social harmony.',
    link: 'https://luxembourg.public.lu/en/vivre/emploi.html'
  },
  {
    id: 'lang-8', level: 'citizen', category: 'language',
    question: 'What does "Merci villmools" mean in Luxembourgish?',
    options: ['You\'re welcome', 'Thank you very much', 'Excuse me', 'Please'],
    answer: 1,
    explanation: '"Merci villmools" combines the French "merci" with the Luxembourgish "villmools" (many times). This blend of French and Germanic is typical of Luxembourgish.',
    link: null
  },
  {
    id: 'hist-8', level: 'citizen', category: 'history',
    question: 'In which century did the House of Luxembourg produce four Holy Roman Emperors?',
    options: ['11th century', '12th century', '14th–15th centuries', '16th century'],
    answer: 2,
    explanation: 'The House of Luxembourg produced four Holy Roman Emperors in the 14th and early 15th centuries: Henry VII, Charles IV, Wenceslaus, and Sigismund — a remarkable period of European political dominance.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'c-cult-1', level: 'citizen', category: 'culture',
    question: 'What is the Mudam (Musée d\'Art Moderne Grand-Duc Jean)?',
    options: ['A natural history museum in Vianden', 'Luxembourg\'s national modern and contemporary art museum on Kirchberg', 'A medieval castle museum in the Alzette valley', 'A science and technology museum in Belval'],
    answer: 1,
    explanation: 'The Mudam, designed by I.M. Pei (architect of the Louvre Pyramid), opened in 2006 on Kirchberg. It is Luxembourg\'s national museum of modern and contemporary art and hosts international exhibitions.',
    link: 'https://www.mudam.com/en/'
  },
  {
    id: 'c-peop-1', level: 'citizen', category: 'people',
    question: 'Josy Barthel\'s 1952 Olympic gold is still Luxembourg\'s only Olympic gold. What event did he win?',
    options: ['800m', '1500m', '5000m', 'Marathon'],
    answer: 1,
    explanation: 'Josy Barthel won the 1500m at the Helsinki 1952 Olympics in a world-record-equalling 3:45.2. The national athletics stadium in Luxembourg City is named after him.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  // sub-level 3
  {
    id: 'c-inst-1', level: 'citizen', category: 'institutions',
    question: 'What is "Guichet.lu"?',
    options: ['Luxembourg\'s national railway booking system', 'The official Luxembourg government online portal for administrative procedures', 'A Luxembourg City neighbourhood', 'A digital payment system unique to Luxembourg'],
    answer: 1,
    explanation: 'Guichet.lu is the official Luxembourg government digital portal where residents and businesses can handle administrative procedures online, from registering a business to renewing a driving licence.',
    link: 'https://guichet.public.lu/en.html'
  },
  {
    id: 'c-econ-2', level: 'citizen', category: 'economy',
    question: 'What percentage of Luxembourg\'s electricity came from renewable sources by 2022?',
    options: ['About 10%', 'About 25%', 'About 50%', 'About 80%'],
    answer: 2,
    explanation: 'Luxembourg has been rapidly expanding renewable energy. By 2022, about 25–30% of electricity came from renewables (mainly wind and solar), with ambitious targets to reach much higher levels by 2030.',
    link: 'https://luxembourg.public.lu/en/entreprises/faire-affaire.html'
  },
  {
    id: 'c-lang-1', level: 'citizen', category: 'language',
    question: 'What is the Luxembourgish word for "Luxembourg City" (the capital)?',
    options: ['Lëtzebuerg-Stad', 'Letzibuerg', 'Lëtzebuerg', 'D\'Haaptstad'],
    answer: 2,
    explanation: 'In Luxembourgish, the capital city is simply called "Lëtzebuerg" — the same word as the country name. Context makes the difference clear. The term "D\'Haaptstad" (the capital) is also used.',
    link: null
  },
  {
    id: 'c-hist-1', level: 'citizen', category: 'history',
    question: 'The "Révolution du Luxembourg" of 1848 led to which constitutional development?',
    options: ['Luxembourg declared itself a republic', 'The first constitutional parliament (Chambre des Députés) was established', 'Women gained the right to vote', 'Luxembourg joined the German Confederation permanently'],
    answer: 1,
    explanation: 'Following the 1848 revolutionary wave across Europe, Luxembourg established its first constitutional parliament, the Chambre des Députés, with a liberal constitution — a landmark in democratic development.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'c-cult-2', level: 'citizen', category: 'culture',
    question: 'What is Vianden Castle famous for, and which famous writer visited it?',
    options: ['A Renaissance palace; visited by Mozart', 'One of Europe\'s finest medieval castles; Victor Hugo stayed nearby and painted it', 'A Baroque fortress; frequented by Goethe', 'A Roman fort; described by Julius Caesar'],
    answer: 1,
    explanation: 'Vianden Castle is one of the most impressive medieval fortresses in Western Europe. Victor Hugo lived in Vianden in exile (1871) and made numerous sketches and paintings of the town and castle.',
    link: 'https://www.castle-vianden.lu/en/'
  },
  // sub-level 4
  {
    id: 'c-peop-2', level: 'citizen', category: 'people',
    question: 'Which Luxembourger co-founded the global steel company ArcelorMittal?',
    options: ['Gaston Thorn', 'Lakshmi Mittal (Indian, based in Luxembourg)', 'Paul Wurth', 'Henri Funck'],
    answer: 1,
    explanation: 'Lakshmi Mittal, an Indian businessman who relocated to Luxembourg, built Mittal Steel and merged it with Arcelor (based in Luxembourg) in 2006, creating ArcelorMittal — the world\'s largest steel producer, headquartered in Luxembourg City.',
    link: 'https://luxembourg.public.lu/en/entreprises/faire-affaire.html'
  },
  {
    id: 'c-inst-2', level: 'citizen', category: 'institutions',
    question: 'What is the "Chèque-Service Accueil" (CSA) in Luxembourg?',
    options: ['A voucher for public transport', 'A childcare subsidy system that co-finances childcare costs for families', 'A housing benefit for new residents', 'A tax credit for cross-border workers'],
    answer: 1,
    explanation: 'The Chèque-Service Accueil (CSA) is Luxembourg\'s childcare voucher system. The state subsidises childcare costs for all children residing in Luxembourg, making childcare free for lower-income families.',
    link: 'https://guichet.public.lu/en/citoyens/famille/aide-financiere-jeunesse/cheque-service-accueil.html'
  },
  {
    id: 'c-econ-3', level: 'citizen', category: 'economy',
    question: 'What is the "Belval" development in southern Luxembourg?',
    options: ['A luxury residential district in Luxembourg City', 'A redevelopment of former steelworks into a science, culture, and university campus', 'A new motorway junction near the French border', 'An eco-tourism park in the Ardennes'],
    answer: 1,
    explanation: 'Belval (Esch-Belval) is a major urban redevelopment project transforming former steel blast furnaces into a modern campus hosting the University of Luxembourg, research centres, and cultural facilities.',
    link: 'https://luxembourg.public.lu/en/entreprises/faire-affaire.html'
  },
  {
    id: 'c-lang-2', level: 'citizen', category: 'language',
    question: 'What is the "Klasse!" programme in Luxembourg?',
    options: ['A free language school for adult learners of Luxembourgish', 'The national music conservatory', 'A sports programme for school children', 'A government literacy campaign for seniors'],
    answer: 0,
    explanation: '"Klasse!" is a programme by the Ministry of Education offering free Luxembourgish language courses to adults who wish to integrate linguistically. It complements the "Sproochentest" (language test) for Luxembourgish citizenship.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html'
  },
  {
    id: 'c-hist-2', level: 'citizen', category: 'history',
    question: 'In 1890, why did Luxembourg separate from the Netherlands, resulting in a new Grand Duke?',
    options: ['A revolution ousted the Dutch king', 'The Dutch king William III died with no male heir; Nassau law prevented female succession in Luxembourg', 'Luxembourg won a war of independence', 'The Treaty of Paris forced the separation'],
    answer: 1,
    explanation: 'When William III of the Netherlands died in 1890 without male heirs, the Dutch throne passed to his daughter Wilhelmina — but the Nassau law governing Luxembourg required a male heir, so Luxembourg passed to Adolphe of Nassau.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  // sub-level 5
  {
    id: 'c-cult-3', level: 'citizen', category: 'culture',
    question: 'The "Nuit de la Culture" (Long Night of Culture) in Luxembourg City is held annually. What is it?',
    options: ['A midnight fireworks display on National Day', 'An evening when museums, galleries, and cultural venues open late with free admission', 'A festival of Luxembourgish folk music and dance', 'A candlelit procession through the old town'],
    answer: 1,
    explanation: 'The Nuit de la Culture (Kulturnuecht) is an annual event when cultural venues across Luxembourg City open for free until late at night, offering concerts, theatre, exhibitions, and guided tours.',
    link: 'https://luxembourg.public.lu/en/culture.html'
  },
  {
    id: 'c-peop-3', level: 'citizen', category: 'people',
    question: 'Gaston Thorn served as Prime Minister of Luxembourg and later as what?',
    options: ['Secretary General of the UN', 'President of the European Commission (1981–1985)', 'President of the European Parliament', 'President of the European Council'],
    answer: 1,
    explanation: 'Gaston Thorn was Prime Minister of Luxembourg (1974–1979) and later served as President of the European Commission from 1981 to 1985, making him the second Luxembourger to hold that role.',
    link: 'https://luxembourg.public.lu/en/gouvernement.html'
  },
  {
    id: 'c-inst-3', level: 'citizen', category: 'institutions',
    question: 'What is the "Inspection du Travail et des Mines" (ITM) in Luxembourg?',
    options: ['The mining authority for iron ore extraction', 'The labour inspectorate that monitors compliance with employment and safety law', 'The transport ministry\'s vehicle inspection service', 'The environmental protection agency'],
    answer: 1,
    explanation: 'The ITM (Inspection du Travail et des Mines) is Luxembourg\'s labour inspectorate. It monitors compliance with labour law, workplace safety, and employment contracts, and can investigate and sanction violations.',
    link: 'https://luxembourg.public.lu/en/vivre/emploi.html'
  },
  {
    id: 'c-econ-4', level: 'citizen', category: 'economy',
    question: 'What is the legal basis for free public transport in Luxembourg, introduced in 2020?',
    options: ['A EU directive requiring free transport in small member states', 'A national law making all public transport (bus, tram, train) free for everyone', 'An agreement with neighbouring countries to fund cross-border commuter transport', 'A temporary COVID-19 measure that became permanent'],
    answer: 1,
    explanation: 'In March 2020, Luxembourg became the first country in the world to make all public transport (buses, trams, trains) free for all passengers — residents, non-residents, and tourists alike.',
    link: 'https://luxembourg.public.lu/en/vivre/transports.html'
  },
  {
    id: 'c-lang-3', level: 'citizen', category: 'language',
    question: 'What is a "Sproochentest" in Luxembourg?',
    options: ['A school language exam for children', 'An oral Luxembourgish language test required for naturalisation', 'A qualification exam for civil service jobs', 'An entrance test for the University of Luxembourg'],
    answer: 1,
    explanation: 'The Sproochentest (language test) is an oral Luxembourgish test that applicants for Luxembourg citizenship must pass. It assesses the ability to understand and speak Luxembourgish at a basic functional level.',
    link: 'https://guichet.public.lu/en/citoyens/nationalite/acquisition-nationalite-luxembourgeoise.html'
  },
]

// ─── AMBASSADOR (Level 5) ────────────────────────────────────────────────────
const AMBASSADOR = [
  // sub-level 1
  {
    id: 'a-lang-1', level: 'ambassador', category: 'language',
    question: 'What is the Luxembourgish word for the "Fête Nationale" (National Day)?',
    options: ['Nationalfest', 'Nationalfeierdag', 'Fräiheetsdag', 'Groussherzogsdag'],
    answer: 1,
    explanation: '"Nationalfeierdag" is the Luxembourgish term for National Day (23 June). "Feierdag" means "holiday" or "celebration day" — a direct blend of Germanic "Feier" (celebration) and "Dag" (day).',
    link: null
  },
  {
    id: 'a-hist-1', level: 'ambassador', category: 'history',
    question: 'The Romans built a major road through Luxembourg. Which Roman settlement is now beneath Luxembourg City?',
    options: ['Trevorum', 'Vicus Munditiacum', 'Andethanna', 'Mamer Villa'],
    answer: 1,
    explanation: 'The Romans built a settlement at Vicus Munditiacum (near today\'s Luxembourg City) and a major road through the territory. Traces of Roman baths and villas have been found across Luxembourg.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'a-cult-1', level: 'ambassador', category: 'culture',
    question: 'The "Weekender" festival in Esch-sur-Alzette celebrates what?',
    options: ['Traditional crafts and folk music', 'Electronic and contemporary music in the industrial heritage setting', 'Wine and gastronomy of the Moselle', 'Street art and graffiti culture'],
    answer: 1,
    explanation: 'The Weekender festival transforms the former industrial sites of Esch-Belval into a music and arts venue, symbolising the cultural rebirth of Luxembourg\'s former steel belt.',
    link: 'https://luxembourg.public.lu/en/culture.html'
  },
  {
    id: 'a-peop-1', level: 'ambassador', category: 'people',
    question: 'Norbert Braun was one of Luxembourg\'s famous 19th-century painters. His contemporary Joseph Kutter (1894–1941) is known for what style?',
    options: ['Photorealistic portraits of the Grand Ducal family', 'Expressionist paintings, Luxembourg\'s most significant modern artist', 'Impressionist river landscapes of the Moselle', 'Abstract sculptures inspired by Celtic art'],
    answer: 1,
    explanation: 'Joseph Kutter (1894–1941) is Luxembourg\'s most celebrated visual artist. His expressionist style, influenced by the German expressionists, produced haunting portraits and landscapes. His painting "Der Clown" is iconic.',
    link: 'https://luxembourg.public.lu/en/culture/patrimoine-culturel.html'
  },
  {
    id: 'a-inst-1', level: 'ambassador', category: 'institutions',
    question: 'The "Chambre de Commerce" of Luxembourg plays what role?',
    options: ['It collects VAT on behalf of the government', 'It represents the interests of businesses and advises on economic legislation', 'It manages Luxembourg\'s stock exchange', 'It provides legal aid to small businesses'],
    answer: 1,
    explanation: 'The Chambre de Commerce is the mandatory representative body for companies in Luxembourg (excluding crafts and agriculture). It advises on legislation, provides business support services, and promotes Luxembourg as a business location.',
    link: 'https://www.cc.lu/en/'
  },
  // sub-level 2
  {
    id: 'a-econ-1', level: 'ambassador', category: 'economy',
    question: 'What is the "Luxembourg for Finance" initiative?',
    options: ['A public-private agency promoting Luxembourg as an international financial centre', 'A bank exclusively for Luxembourg residents', 'An EU body managing cross-border financial regulations', 'A tax office for multinational companies'],
    answer: 0,
    explanation: 'Luxembourg for Finance is a public-private partnership between the government and the financial industry association (PROFIL) that promotes Luxembourg internationally as a financial centre for fund domiciliation, green finance, and fintech.',
    link: 'https://www.luxembourgforfinance.com/en/'
  },
  {
    id: 'a-lang-2', level: 'ambassador', category: 'language',
    question: 'What is the "Acte de Mariage" written in, in Luxembourg?',
    options: ['Always in Luxembourgish', 'Always in French', 'In the language chosen by the couple (French, German, or Luxembourgish)', 'In Latin, as per historical tradition'],
    answer: 1,
    explanation: 'Official legal documents including civil acts like marriage certificates (acte de mariage) are written in French in Luxembourg, as French is the administrative language for legal and judicial matters.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html'
  },
  {
    id: 'a-hist-2', level: 'ambassador', category: 'history',
    question: 'The "Nassau-Weilburg" dynasty that rules Luxembourg is closely related to the Dutch royal family. Through which marriage did the connection to the current Grand Duke Henri arise?',
    options: ['Grand Duke Adolphe married a Princess of the Netherlands', 'Grand Duchess Charlotte married Prince Félix of Bourbon-Parma; their son Jean became Grand Duke', 'Grand Duke Jean married a Princess of the Orange-Nassau line', 'Grand Duke Henri married Princess Maria Teresa, uniting Luxembourg and Cuba'],
    answer: 1,
    explanation: 'Grand Duchess Charlotte married Prince Félix of Bourbon-Parma in 1919. Their son Jean became Grand Duke in 1964. Jean married Joséphine-Charlotte of Belgium; their son Henri became Grand Duke in 2000.',
    link: 'https://luxembourg.public.lu/en/gouvernement/maison-grand-ducale.html'
  },
  {
    id: 'a-cult-2', level: 'ambassador', category: 'culture',
    question: 'The "Roude Léiw" (Red Lion) is a symbol of Luxembourg. On which historic flag does it traditionally appear?',
    options: ['The Tricolour flag of 1830', 'The banner of the counts and later dukes of Luxembourg since the 13th century', 'The flag of the Benelux Union', 'The flag used during the Nazi occupation'],
    answer: 1,
    explanation: 'The Roude Léiw (Red Lion) on a white and blue striped background has been the banner of the rulers of Luxembourg since the 13th century. It appears on the coat of arms and is deeply embedded in national identity.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg.html'
  },
  {
    id: 'a-peop-2', level: 'ambassador', category: 'people',
    question: 'Pierre Werner, Luxembourg\'s Prime Minister in the 1970s, is famous for what European contribution?',
    options: ['Proposing the Schengen free movement zone', 'Authoring the Werner Report (1970), the blueprint for European monetary union', 'Founding the European Investment Bank', 'Drafting the Treaty of Maastricht'],
    answer: 1,
    explanation: 'Pierre Werner (1913–2002) authored the Werner Report in 1970, which laid out the roadmap for a European Economic and Monetary Union. It was the precursor to the euro, making Werner a founding father of the single currency.',
    link: 'https://luxembourg.public.lu/en/gouvernement.html'
  },
  // sub-level 3
  {
    id: 'a-inst-2', level: 'ambassador', category: 'institutions',
    question: 'What is the "Commissariat aux Assurances" (CAA) in Luxembourg?',
    options: ['A consumer protection body for insurance claims', 'The supervisory authority for the Luxembourg insurance and reinsurance sector', 'A government reinsurance pool for natural disasters', 'An EU-wide insurance regulatory body based in Luxembourg'],
    answer: 1,
    explanation: 'The CAA (Commissariat aux Assurances) is the Luxembourg supervisory authority for the insurance and reinsurance sector. Luxembourg is one of Europe\'s leading insurance and reinsurance domiciles.',
    link: 'https://luxembourg.public.lu/en/entreprises/faire-affaire.html'
  },
  {
    id: 'a-econ-2', level: 'ambassador', category: 'economy',
    question: 'What is Luxembourg\'s "space industry" specialisation?',
    options: ['Manufacturing of satellite components', 'A legal framework (the 2017 SpaceFMI law) allowing companies to own resources extracted in space', 'Operating a national space launch facility', 'Training EU astronauts at a dedicated centre'],
    answer: 1,
    explanation: 'Luxembourg\'s 2017 SpaceFMI law was groundbreaking: it was one of the first national laws to allow private companies to own resources they extract from asteroids and other celestial bodies, attracting space mining companies.',
    link: 'https://luxembourg.public.lu/en/entreprises/faire-affaire.html'
  },
  {
    id: 'a-lang-3', level: 'ambassador', category: 'language',
    question: 'The Luxembourgish alphabet has how many letters, and what is distinctive about it?',
    options: ['24 letters, identical to German', '26 letters plus ë, é, â, and ô accented characters unique to Luxembourgish', '29 letters including unique digraphs ch, sch, and ng', '30 letters including the eszett (ß) and umlaut characters'],
    answer: 1,
    explanation: 'Luxembourgish uses a 26-letter Latin alphabet plus accented characters. Most notably, the ë (e-umlaut) is used for a sound that is specifically Luxembourgish — as in "Lëtzebuerg". French-derived accents (é, â) also appear.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html'
  },
  {
    id: 'a-hist-3', level: 'ambassador', category: 'history',
    question: 'Which medieval emperor built extensive parts of Luxembourg\'s famous fortifications in the 14th century?',
    options: ['Charlemagne', 'Charles IV (King of Bohemia and Holy Roman Emperor)', 'Frederick Barbarossa', 'Henry V'],
    answer: 1,
    explanation: 'Charles IV, Count of Luxembourg and Holy Roman Emperor, significantly expanded and strengthened Luxembourg\'s fortifications in the 14th century, turning it into one of Europe\'s great fortresses.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'a-cult-3', level: 'ambassador', category: 'culture',
    question: 'The Abbaye de Neumünster in Luxembourg City serves what function today?',
    options: ['An active Benedictine monastery', 'A cultural centre and meeting space hosting exhibitions and events', 'The national archive and library', 'A hotel and spa in the Grund district'],
    answer: 1,
    explanation: 'The Abbaye de Neumünster (neimenster) in the Grund quarter has been transformed into a vibrant cultural centre hosting concerts, theatre, exhibitions, and conferences — a symbol of Luxembourg\'s cultural life.',
    link: 'https://www.neimenster.lu/en'
  },
  // sub-level 4
  {
    id: 'a-peop-3', level: 'ambassador', category: 'people',
    question: 'Fernand Thill (1903–1959) was Luxembourg\'s first world champion in which sport?',
    options: ['Cycling road race', 'Boxing (world lightweight champion)', 'Football', 'Athletics (triple jump)'],
    answer: 1,
    explanation: 'Fernand Thill became the first Luxembourger to win a world championship when he won the world lightweight boxing title in 1931. He remains one of Luxembourg\'s greatest sporting heroes.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'a-inst-3', level: 'ambassador', category: 'institutions',
    question: 'What is the "CSSF" in Luxembourg?',
    options: ['The state social security fund', 'The financial sector supervisory authority (Commission de Surveillance du Secteur Financier)', 'The civil service salary framework', 'The customs and excise service'],
    answer: 1,
    explanation: 'The CSSF (Commission de Surveillance du Secteur Financier) is Luxembourg\'s financial regulatory authority, supervising banks, investment firms, funds, and payment institutions. It is one of Europe\'s most important financial regulators.',
    link: 'https://www.cssf.lu/en/'
  },
  {
    id: 'a-econ-3', level: 'ambassador', category: 'economy',
    question: 'What is "LuxLeaks" (2014) in the context of Luxembourg?',
    options: ['A water infrastructure scandal in northern Luxembourg', 'The revelation of secret tax rulings that allowed multinationals to pay very low taxes via Luxembourg', 'A data breach at a Luxembourg bank exposing client details', 'A whistleblower case about environmental dumping near the Moselle'],
    answer: 1,
    explanation: 'LuxLeaks (2014) revealed hundreds of secret tax rulings (tax deals) between Luxembourg and major multinationals, allowing them to minimise taxes globally. It triggered EU-wide debate on tax avoidance and led to significant tax reforms.',
    link: 'https://luxembourg.public.lu/en/entreprises/faire-affaire.html'
  },
  {
    id: 'a-lang-4', level: 'ambassador', category: 'language',
    question: 'What is the "ONL" (Office National de la Langue Luxembourgeoise) responsible for?',
    options: ['Teaching Luxembourgish to immigrants', 'Standardising, promoting, and developing the Luxembourgish language', 'Publishing the official government gazette in Luxembourgish', 'Running language tests for naturalisation'],
    answer: 1,
    explanation: 'The ONL is the official body responsible for standardising Luxembourgish orthography and grammar, developing the language (including neologisms), and promoting its use. It maintains the official Luxembourgish dictionary.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html'
  },
  {
    id: 'a-hist-4', level: 'ambassador', category: 'history',
    question: 'The fortress of Luxembourg was dubbed "The Gibraltar of the North" by Napoleon. It was finally demolished (neutered) after which treaty?',
    options: ['The Treaty of Paris (1815)', 'The Treaty of London (1867)', 'The Treaty of Versailles (1919)', 'The Treaty of Maastricht (1992)'],
    answer: 1,
    explanation: 'The Treaty of London (1867) declared Luxembourg permanently neutral and required the demolition of its formidable fortress — the "Gibraltar of the North". The tunnels and casemates beneath remain and are now a UNESCO World Heritage site.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  // sub-level 5
  {
    id: 'a-cult-4', level: 'ambassador', category: 'culture',
    question: 'The "Casino Luxembourg — Forum d\'Art Contemporain" is located where?',
    options: ['On the plateau du Kirchberg', 'In a converted 19th-century casino building on Boulevard Royal', 'In the Grund quarter next to the Alzette', 'In the Belval Blast Furnaces complex'],
    answer: 1,
    explanation: 'Casino Luxembourg — Forum d\'Art Contemporain is located in a restored 19th-century casino building on Boulevard Royal in the heart of Luxembourg City. It is a leading contemporary art space.',
    link: 'https://www.casino-luxembourg.lu/en/'
  },
  {
    id: 'a-peop-4', level: 'ambassador', category: 'people',
    question: 'Marc Angel is a Luxembourgish politician who became what in 2022?',
    options: ['Prime Minister of Luxembourg', 'Vice-President of the European Parliament', 'EU Commissioner for the Internal Market', 'President of the Eurogroup'],
    answer: 1,
    explanation: 'Marc Angel (LSAP) was elected Vice-President of the European Parliament in January 2022, becoming one of Luxembourg\'s most prominent figures in the EU\'s legislative institution.',
    link: 'https://luxembourg.public.lu/en/gouvernement.html'
  },
  {
    id: 'a-inst-4', level: 'ambassador', category: 'institutions',
    question: 'What is "Lëtzebuergesch als Integratiounssprooch" (LI)?',
    options: ['A mandatory school subject for all children', 'A state-funded Luxembourgish language programme specifically for adult migrants and residents', 'A university degree in Luxembourgish linguistics', 'A radio programme teaching Luxembourgish phrases'],
    answer: 1,
    explanation: '"Lëtzebuergesch als Integratiounssprooch" (LI) is a free language programme for adult migrants and residents in Luxembourg to learn Luxembourgish as part of their integration journey, funded by the Ministry of Education.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html'
  },
  {
    id: 'a-econ-4', level: 'ambassador', category: 'economy',
    question: 'What is Luxembourg\'s "green bond" contribution to global finance?',
    options: ['Luxembourg invented the concept of a green bond in 2003', 'The Luxembourg Green Exchange (LGX), launched in 2016, was the world\'s first platform dedicated to green, social, and sustainable securities', 'Luxembourg banned all non-ESG investment funds in 2018', 'Luxembourg issues sovereign green bonds worth €50 billion annually'],
    answer: 1,
    explanation: 'The Luxembourg Green Exchange (LGX), launched by the Luxembourg Stock Exchange in 2016, was the world\'s first dedicated platform for green, social, and sustainable bonds — cementing Luxembourg\'s position in sustainable finance.',
    link: 'https://www.bourse.lu/green-exchange'
  },
  {
    id: 'a-lang-5', level: 'ambassador', category: 'language',
    question: 'In Luxembourgish, what is the correct plural of "Kand" (child)?',
    options: ['Kands', 'Kanner', 'Kinde', 'Kanden'],
    answer: 1,
    explanation: '"Kanner" is the plural of "Kand" (child) in Luxembourgish. This irregular plural is a distinctive feature of Luxembourgish and differs from both German (Kinder) and other related languages.',
    link: null
  },
]

// ─── Full question pool ────────────────────────────────────────────────────────
export const QUESTIONS = [...NEWCOMER, ...EXPLORER, ...RESIDENT, ...CITIZEN, ...AMBASSADOR]

/**
 * Returns the 5 questions for a given level + sub-level.
 * Questions are grouped by level; within each level they are stored in sub-level order (5 per sub-level).
 */
export function getSubLevelQuestions(levelId, subLevel, questionsPool) {
  const pool = questionsPool || QUESTIONS
  const levelQuestions = pool.filter(q => q.level === levelId)
  const start = (subLevel - 1) * 5
  return levelQuestions.slice(start, start + 5)
}

/**
 * Legacy helper kept for compatibility.
 */
export function getDailyQuestions(dayIdx, questionsPool = null) {
  const pool = questionsPool || QUESTIONS
  const categories = ['language', 'history', 'culture', 'people', 'institutions', 'economy']
  const byCategory = {}
  categories.forEach(c => { byCategory[c] = pool.filter(q => q.category === c) })
  const seed = dayIdx + 1
  const selected = []
  const catOrder = categories.slice((seed % 6)).concat(categories.slice(0, seed % 6))
  for (let i = 0; i < 5; i++) {
    const cat = catOrder[i % categories.length]
    const catPool = byCategory[cat]
    if (!catPool || catPool.length === 0) continue
    selected.push(catPool[(seed * (i + 1) * 7) % catPool.length])
  }
  return selected
}
