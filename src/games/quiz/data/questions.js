/**
 * Quiz question bank — Luxembourg
 * Each question has:
 *   id, category, question, options[], answer (0-based index),
 *   explanation, link (optional)
 *
 * Categories: language | history | culture | people | institutions | economy
 */

export const QUESTIONS = [
  // ============ LANGUAGE ============
  {
    id: 'lang-1',
    category: 'language',
    question: 'What does "Moien" mean in Luxembourgish?',
    options: ['Good evening', 'Hello / Good morning', 'Thank you', 'Goodbye'],
    answer: 1,
    explanation: '"Moien" is the most common greeting in Luxembourgish, used any time of day. It comes from the German "Morgen" (morning).',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html'
  },
  {
    id: 'lang-2',
    category: 'language',
    question: 'In which year was Luxembourgish officially recognised as the national language of Luxembourg?',
    options: ['1945', '1964', '1984', '2000'],
    answer: 2,
    explanation: 'The Law of 24 February 1984 established Luxembourgish as the national language, alongside French and German as administrative languages.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html'
  },
  {
    id: 'lang-3',
    category: 'language',
    question: 'Which language family does Luxembourgish (Lëtzebuergesch) belong to?',
    options: ['Romance languages', 'Slavic languages', 'West Germanic (Moselle Franconian)', 'North Germanic'],
    answer: 2,
    explanation: 'Luxembourgish is a West Germanic language of the Moselle Franconian dialect group, closely related to German but with strong French influence.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html'
  },
  {
    id: 'lang-4',
    category: 'language',
    question: 'How do you say "I love you" in Luxembourgish?',
    options: ['Ech hunn dech gär', 'Je t\'aime', 'Ich liebe dich', 'Mir gefällt dir'],
    answer: 0,
    explanation: '"Ech hunn dech gär" literally means "I have you dear" — this is the standard Luxembourgish expression of affection.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html'
  },
  {
    id: 'lang-5',
    category: 'language',
    question: 'What are the three official administrative languages of Luxembourg?',
    options: ['English, French, German', 'Luxembourgish, French, German', 'French, German, Portuguese', 'Luxembourgish, English, French'],
    answer: 1,
    explanation: 'Luxembourg uses three official languages: Luxembourgish (national language), French (legislation and courts), and German (media and press).',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html'
  },
  {
    id: 'lang-6',
    category: 'language',
    question: 'What does "Wéi geet et?" mean in Luxembourgish?',
    options: ['Where are you going?', 'How are you?', 'What time is it?', 'Where is the station?'],
    answer: 1,
    explanation: '"Wéi geet et?" means "How are you?" or "How is it going?" — a very common everyday greeting in Luxembourg.',
    link: null
  },
  {
    id: 'lang-7',
    category: 'language',
    question: 'Which famous literary work in Luxembourgish is Michel Rodange known for?',
    options: ['De Renert', 'Dil Ueueglen', 'Lëtzebuerger', 'D\'Weltgeschicht'],
    answer: 0,
    explanation: 'Michel Rodange wrote "De Renert" (The Fox) in 1872, an epic poem retelling the medieval Reynard the Fox story in Luxembourgish — a cornerstone of Luxembourg\'s literary heritage.',
    link: 'https://luxembourg.public.lu/en/culture/patrimoine-culturel.html'
  },
  {
    id: 'lang-8',
    category: 'language',
    question: 'What does "Merci villmools" mean in Luxembourgish?',
    options: ['You\'re welcome', 'Thank you very much', 'Excuse me', 'Please'],
    answer: 1,
    explanation: '"Merci villmools" combines the French "merci" with the Luxembourgish "villmools" (many times) to mean "thank you very much". This blend of French and Germanic elements is typical of Luxembourgish.',
    link: null
  },

  // ============ HISTORY ============
  {
    id: 'hist-1',
    category: 'history',
    question: 'In which year did Luxembourg gain full independence?',
    options: ['1815', '1839', '1867', '1890'],
    answer: 1,
    explanation: 'The Treaty of London of 19 April 1839 recognised Luxembourg as a fully independent state, separating it from the Netherlands.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'hist-2',
    category: 'history',
    question: 'What was the significance of the Treaty of London (1867) for Luxembourg?',
    options: [
      'Luxembourg joined the European Community',
      'Luxembourg was declared permanently neutral and its great fortress demolished',
      'Luxembourg gained its current borders',
      'Luxembourg became a Grand Duchy'
    ],
    answer: 1,
    explanation: 'The 1867 Treaty of London declared Luxembourg perpetually neutral and required the demolition of its famous fortress — making it one of Europe\'s strongest. The Allies called the city "Gibraltar of the North".',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'hist-3',
    category: 'history',
    question: 'Who founded the County of Luxembourg in 963 AD by acquiring a small Frankish castle?',
    options: ['Count Baldwin I', 'Sigefroid', 'Ermesinde', 'Henry VII'],
    answer: 1,
    explanation: 'Count Sigefroid acquired the Lucilinburhuc (Little Fortress) in 963 AD, traditionally seen as the founding of Luxembourg. The castle stood on the Bock promontory above the Alzette river.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'hist-4',
    category: 'history',
    question: 'In which year was Luxembourg occupied by Nazi Germany during World War II?',
    options: ['1938', '1939', '1940', '1941'],
    answer: 2,
    explanation: 'Germany invaded and occupied Luxembourg on 10 May 1940. Luxembourg was later annexed into the Third Reich in 1942. It was liberated by Allied forces in September 1944.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'hist-5',
    category: 'history',
    question: 'Luxembourg was a founding member of which three major international organisations?',
    options: [
      'UN, NATO, and the Council of Europe',
      'NATO, EEC (EU), and Benelux',
      'EEC, Schengen Area, and WTO',
      'Benelux, EFTA, and NATO'
    ],
    answer: 1,
    explanation: 'Luxembourg was a founding member of NATO (1949), the European Economic Community (1957, now EU), and the Benelux Union (1944). Luxembourg is also home to several EU institutions.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'hist-6',
    category: 'history',
    question: 'The Battle of the Bulge (December 1944–January 1945) was partly fought on Luxembourg territory. Which town became famous for this battle?',
    options: ['Esch-sur-Alzette', 'Clervaux', 'Bastogne (nearby Belgium)', 'Echternach'],
    answer: 1,
    explanation: 'Clervaux, in northern Luxembourg, saw heavy fighting during the Battle of the Bulge (Ardennes Offensive). The town\'s castle was heavily damaged before being retaken by Allied forces.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'hist-7',
    category: 'history',
    question: 'The Schuman Declaration of 1950, the founding document of European integration, was signed by Robert Schuman. Where was he born?',
    options: ['Metz, France', 'Clausen, Luxembourg City', 'Trier, Germany', 'Brussels, Belgium'],
    answer: 1,
    explanation: 'Robert Schuman (1886–1963) was born in Clausen, Luxembourg City. He became French Foreign Minister and proposed the creation of the European Coal and Steel Community, leading to today\'s EU.',
    link: 'https://luxembourg.public.lu/en/culture/patrimoine-culturel.html'
  },
  {
    id: 'hist-8',
    category: 'history',
    question: 'Which Grand Duchess led Luxembourg through exile during World War II and became a symbol of national resistance?',
    options: ['Marie-Adélaïde', 'Charlotte', 'Joséphine-Charlotte', 'Maria Teresa'],
    answer: 1,
    explanation: 'Grand Duchess Charlotte (1896–1985) led the Luxembourg government in exile during WWII, broadcasting from London to keep national spirit alive. She is one of Luxembourg\'s most beloved historical figures.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },

  // ============ CULTURE ============
  {
    id: 'cult-1',
    category: 'culture',
    question: 'What is Luxembourg\'s National Day and when is it celebrated?',
    options: [
      '24 October — Independence Day',
      '23 June — National Day (Nationalfeierdag)',
      '14 July — Bastille Day',
      '15 November — Day of the Dynasty'
    ],
    answer: 1,
    explanation: 'Luxembourg\'s National Day (Nationalfeierdag) is celebrated on 23 June, officially the birthday of the Grand Duke. It features concerts, fireworks, and the "Torch Procession" the night before.',
    link: 'https://luxembourg.public.lu/en/culture/traditions.html'
  },
  {
    id: 'cult-2',
    category: 'culture',
    question: 'What is "Bretzelsonndeg" (Pretzel Sunday) in Luxembourg?',
    options: [
      'A harvest festival where farmers share pretzels',
      'A Valentine\'s Day tradition where boys give pretzels to girls they like',
      'An Easter tradition of eating sweet pretzels',
      'A Carnival custom involving pretzel-shaped costumes'
    ],
    answer: 1,
    explanation: 'Bretzelsonndeg (the 4th Sunday of Lent) is a Luxembourg Valentine\'s Day: boys give a decorated pretzel to the girl they like. If she reciprocates, she gives him a decorated egg at Easter.',
    link: 'https://luxembourg.public.lu/en/culture/traditions.html'
  },
  {
    id: 'cult-3',
    category: 'culture',
    question: 'What is the "Émaischen"?',
    options: [
      'A traditional harvest festival in the Moselle valley',
      'An Easter Monday crafts fair held in Luxembourg City featuring the "Péckvillercher" bird whistles',
      'A carnival parade in Esch-sur-Alzette',
      'A summer music festival in Vianden'
    ],
    answer: 1,
    explanation: 'The Émaischen is a traditional Easter Monday fair at the Marché-aux-Poissons in Luxembourg City, famous for hand-crafted "Péckvillercher" — terracotta bird-shaped water whistles.',
    link: 'https://luxembourg.public.lu/en/culture/traditions.html'
  },
  {
    id: 'cult-4',
    category: 'culture',
    question: 'Luxembourg\'s historic Old Town and its fortifications are a UNESCO World Heritage Site. Since which year?',
    options: ['1985', '1994', '2001', '2008'],
    answer: 1,
    explanation: 'Luxembourg City\'s Old Quarters and Fortifications were inscribed on the UNESCO World Heritage List in 1994, recognised for their outstanding universal value.',
    link: 'https://www.visitluxembourg.com/en/place/site/old-quarters-and-fortifications-of-the-city-of-luxembourg'
  },
  {
    id: 'cult-5',
    category: 'culture',
    question: 'What is the "Schueberfouer"?',
    options: [
      'A sheep fair that grew into a large funfair held annually in Luxembourg City',
      'A medieval jousting tournament held in Vianden',
      'A wine festival in Remich on the Moselle',
      'A Christmas market on the Place d\'Armes'
    ],
    answer: 0,
    explanation: 'The Schueberfouer started as a sheep fair (Schafsmarkt) in 1340, granted by John the Blind. Today it\'s one of Europe\'s oldest and largest funfairs, held every August/September in Luxembourg City.',
    link: 'https://www.visitluxembourg.com/en/event/schueberfouer-fair'
  },
  {
    id: 'cult-6',
    category: 'culture',
    question: 'The "Octave of Our Lady of Luxembourg" is an important religious event. What does it involve?',
    options: [
      'Eight days of singing and dancing at the Cathedral',
      'A two-week pilgrimage to Notre-Dame Cathedral where thousands venerate the Consolatrix Afflictorum',
      'A procession through the Pétrusse valley on Easter Sunday',
      'A Marian festival held in Echternach'
    ],
    answer: 1,
    explanation: 'The Octave of Our Lady of Luxembourg (Oktav) is a 15-day Marian pilgrimage every May at Notre-Dame Cathedral. Thousands gather to venerate the Consolatrix Afflictorum (Consoler of the Afflicted), patroness of Luxembourg.',
    link: 'https://luxembourg.public.lu/en/culture/traditions.html'
  },
  {
    id: 'cult-7',
    category: 'culture',
    question: 'The "Dancing Procession of Echternach" is a unique UNESCO Intangible Cultural Heritage. What makes it special?',
    options: [
      'Participants dance backwards through the streets',
      'It is performed entirely in silence',
      'Participants hop in a three-step dance while moving in procession on Whit Tuesday',
      'It involves costumes of over 100 different countries'
    ],
    answer: 2,
    explanation: 'The Echternach Dancing Procession (Sprangprozessioun) takes place every Whit Tuesday since the 7th century. Participants dance in a hopping, three-step rhythm through the town in honour of St. Willibrord.',
    link: 'https://www.visitluxembourg.com/en/event/echternach-dancing-procession'
  },
  {
    id: 'cult-8',
    category: 'culture',
    question: 'What is "Gëlle Fra" (Golden Lady) in Luxembourg?',
    options: [
      'A famous Luxembourg pastry',
      'A monument in Luxembourg City representing the country\'s spirit of sacrifice, depicting a winged woman on a tall column',
      'A traditional dance from the Ardennes region',
      'The nickname for Grand Duchess Charlotte'
    ],
    answer: 1,
    explanation: 'The Gëlle Fra (Golden Lady) is a war memorial on Place de la Constitution, Luxembourg City. The golden statue atop a 21-metre column commemorates WWI volunteers. It was melted down by Nazi occupiers in 1940 and rebuilt after the war.',
    link: 'https://www.visitluxembourg.com/en/place/site/golden-lady-monument-constitution-square'
  },

  // ============ PEOPLE ============
  {
    id: 'peop-1',
    category: 'people',
    question: 'Edward Steichen, born in Bivange, Luxembourg, became world-famous as what?',
    options: ['A jazz musician', 'A photographer and curator at MoMA New York', 'A Formula 1 racing driver', 'A Nobel Prize-winning economist'],
    answer: 1,
    explanation: 'Edward Steichen (1879–1973) was a pioneering photographer and director of the photography department at MoMA (New York). He created the iconic "Family of Man" exhibition (1955).',
    link: 'https://luxembourg.public.lu/en/culture/patrimoine-culturel.html'
  },
  {
    id: 'peop-2',
    category: 'people',
    question: 'Which Luxembourger won Olympic gold in the 1500m at the 1952 Helsinki Olympics?',
    options: ['Michel Théato', 'Nicolas Frantz', 'Josy Barthel', 'Charly Gaul'],
    answer: 2,
    explanation: 'Josy Barthel (1927–1992) won gold in the 1500m at the 1952 Helsinki Olympics — Luxembourg\'s only Olympic gold medal to date. The national athletics stadium in Luxembourg City is named after him.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'peop-3',
    category: 'people',
    question: 'Charly Gaul, a legendary cyclist from Luxembourg, was nicknamed what?',
    options: ['The Gardener', 'The Angel of the Mountains', 'The Iron Lion', 'The Silent Racer'],
    answer: 1,
    explanation: 'Charly Gaul (1932–2005) was nicknamed "L\'Ange de la Montagne" (The Angel of the Mountains) for his extraordinary climbing ability. He won the Tour de France (1958), Giro d\'Italia twice (1956, 1959).',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'peop-4',
    category: 'people',
    question: 'Hugo Gernsback, born in Luxembourg in 1884, is known as the "Father of Science Fiction". Which magazine did he found?',
    options: ['Popular Science', 'Amazing Stories', 'Science Wonder Stories', 'Modern Mechanics'],
    answer: 1,
    explanation: 'Hugo Gernsback (1884–1967) founded "Amazing Stories" in 1926, the first magazine dedicated entirely to science fiction. The annual Hugo Awards for science fiction are named in his honour.',
    link: 'https://luxembourg.public.lu/en/culture/patrimoine-culturel.html'
  },
  {
    id: 'peop-5',
    category: 'people',
    question: 'Jean-Claude Juncker, former Prime Minister of Luxembourg (1995–2013), later served as what?',
    options: [
      'Secretary General of NATO',
      'President of the European Commission (2014–2019)',
      'President of the European Council',
      'President of the European Parliament'
    ],
    answer: 1,
    explanation: 'Jean-Claude Juncker served as Luxembourg\'s Prime Minister for 18 years, then as President of the European Commission from 2014 to 2019. He was also President of the Eurogroup (2005–2013).',
    link: 'https://luxembourg.public.lu/en/gouvernement.html'
  },
  {
    id: 'peop-6',
    category: 'people',
    question: 'Michel Théato, born in Luxembourg, won gold at which Olympic Games in the marathon?',
    options: ['1896 Athens', '1900 Paris', '1904 St. Louis', '1908 London'],
    answer: 1,
    explanation: 'Michel Théato won the marathon at the 1900 Paris Olympics, originally thought to be French. Research later confirmed he was born in Luxembourg in 1878, making him Luxembourg\'s first Olympic gold medallist.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'peop-7',
    category: 'people',
    question: 'Who is the current (2024) Head of State of Luxembourg?',
    options: ['Grand Duke Jean', 'Grand Duke Henri', 'Grand Duke Guillaume', 'Grand Duke Adolphe'],
    answer: 1,
    explanation: 'Grand Duke Henri has been the constitutional monarch of Luxembourg since October 2000, when his father Grand Duke Jean abdicated. He is married to Grand Duchess Maria Teresa.',
    link: 'https://luxembourg.public.lu/en/gouvernement/maison-grand-ducale.html'
  },
  {
    id: 'peop-8',
    category: 'people',
    question: 'Nicolas Frantz, a cyclist from Mamer, Luxembourg, won the Tour de France in which years?',
    options: ['1921 and 1922', '1927 and 1928', '1933 and 1934', '1938 and 1939'],
    answer: 1,
    explanation: 'Nicolas Frantz won the Tour de France in 1927 and 1928. He is one of Luxembourg\'s greatest sporting legends, along with Charly Gaul, Josy Barthel, and modern-day cyclist Andy Schleck.',
    link: null
  },

  // ============ INSTITUTIONS ============
  {
    id: 'inst-1',
    category: 'institutions',
    question: 'How many members does the Luxembourg parliament (Chambre des Députés) have?',
    options: ['40', '60', '72', '100'],
    answer: 1,
    explanation: 'The Chambre des Députés has 60 members elected for five-year terms. Luxembourg is divided into 4 constituencies: South, Centre, North, and East.',
    link: 'https://luxembourg.public.lu/en/gouvernement/chambre-des-deputes.html'
  },
  {
    id: 'inst-2',
    category: 'institutions',
    question: 'Which major EU institutions have their headquarters in Luxembourg City?',
    options: [
      'European Parliament and European Commission',
      'Court of Justice of the EU, Court of Auditors, and Eurostat',
      'European Central Bank and European Council',
      'European Defence Agency and Europol'
    ],
    answer: 1,
    explanation: 'Luxembourg hosts the Court of Justice of the EU, the Court of Auditors, Eurostat (statistical office), the European Investment Bank (EIB), and part of the European Parliament\'s Secretariat.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/institutions-europeennes.html'
  },
  {
    id: 'inst-3',
    category: 'institutions',
    question: 'What is STATEC?',
    options: [
      'The state television broadcaster',
      'The National Institute of Statistics and Economic Studies of Luxembourg',
      'The state technology agency',
      'The national employment agency'
    ],
    answer: 1,
    explanation: 'STATEC (Institut national de la statistique et des études économiques du Grand-Duché de Luxembourg) collects and publishes all official statistics about Luxembourg.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html'
  },
  {
    id: 'inst-4',
    category: 'institutions',
    question: 'What is the role of the "Médiateur" (Ombudsman) in Luxembourg?',
    options: [
      'To mediate in divorce proceedings',
      'To handle citizens\' complaints against public administrations',
      'To supervise media and press',
      'To manage EU relations'
    ],
    answer: 1,
    explanation: 'The Médiateur de la République (Ombudsman) acts as an independent intermediary between citizens and public administrations, investigating complaints and seeking solutions without going to court.',
    link: 'https://luxembourg.public.lu/en/gouvernement/institutions.html'
  },
  {
    id: 'inst-5',
    category: 'institutions',
    question: 'The Schengen Agreement was signed in 1985. Where exactly was it signed?',
    options: [
      'Luxembourg City',
      'The village of Schengen, on a boat on the Moselle River',
      'Brussels, Belgium',
      'Strasbourg, France'
    ],
    answer: 1,
    explanation: 'The Schengen Agreement was signed on 14 June 1985 on the MS Princesse Marie-Astrid, a boat moored at Schengen — a small Luxembourg village where France, Germany, and Luxembourg meet.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/institutions-europeennes.html'
  },
  {
    id: 'inst-6',
    category: 'institutions',
    question: 'What does "LCGB" stand for in Luxembourg?',
    options: [
      'Luxembourg Catholic Governing Body',
      'Lëtzebuerger Chrëschtleche Gewerkschafts-Bond (Christian trade union)',
      'Luxembourg Commercial and Government Bureau',
      'Luxembourg Cultural and Geographical Board'
    ],
    answer: 1,
    explanation: 'LCGB (Lëtzebuerger Chrëschtleche Gewerkschafts-Bond) is one of Luxembourg\'s major trade unions, alongside OGBL. Trade unions play an important role in Luxembourg\'s social dialogue model.',
    link: 'https://luxembourg.public.lu/en/vivre/emploi.html'
  },
  {
    id: 'inst-7',
    category: 'institutions',
    question: 'What is the "Conseil d\'État" (Council of State) in Luxembourg?',
    options: [
      'The government cabinet',
      'A consultative body that reviews legislation before it is passed by parliament',
      'The supreme court',
      'The senate (upper chamber)'
    ],
    answer: 1,
    explanation: 'The Conseil d\'État is a consultative body of 21 members that reviews all bills before parliament votes on them. It acts as a brake on hasty legislation but does not have veto power.',
    link: 'https://luxembourg.public.lu/en/gouvernement/institutions/conseil-etat.html'
  },
  {
    id: 'inst-8',
    category: 'institutions',
    question: 'The ADEM is a key institution for people living in Luxembourg. What does it do?',
    options: [
      'It manages the national health insurance',
      'It is the national employment agency, helping jobseekers and employers',
      'It handles immigration and residence permits',
      'It manages social housing'
    ],
    answer: 1,
    explanation: 'ADEM (Agence pour le développement de l\'emploi) is Luxembourg\'s national employment agency. It helps jobseekers find work, manages unemployment benefits, and supports employers recruiting staff.',
    link: 'https://adem.public.lu/en.html'
  },

  // ============ ECONOMY ============
  {
    id: 'econ-1',
    category: 'economy',
    question: 'Luxembourg is the world\'s second-largest investment fund centre after which country?',
    options: ['Switzerland', 'The United States', 'United Kingdom', 'Hong Kong'],
    answer: 1,
    explanation: 'Luxembourg is the world\'s second-largest investment fund domicile after the USA, hosting over 3,500 funds. The financial sector accounts for roughly a quarter of GDP.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html'
  },
  {
    id: 'econ-2',
    category: 'economy',
    question: 'Approximately what percentage of Luxembourg\'s workforce are cross-border commuters from France, Germany, and Belgium?',
    options: ['15%', '25%', '45%', '60%'],
    answer: 2,
    explanation: 'About 45% of workers in Luxembourg commute daily from neighbouring France, Belgium, and Germany. This makes Luxembourg unique in Europe — its economy could not function without cross-border workers.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html'
  },
  {
    id: 'econ-3',
    category: 'economy',
    question: 'What was the traditional industrial backbone of Luxembourg\'s economy until the 1970s?',
    options: ['Coal mining', 'Textile industry', 'Steel industry', 'Agriculture'],
    answer: 2,
    explanation: 'Steel was the foundation of Luxembourg\'s economy from the 1870s to the 1970s. The southern "Minette" region was rich in iron ore. Today ArcelorMittal (headquartered in Luxembourg) is the world\'s largest steel producer.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html'
  },
  {
    id: 'econ-4',
    category: 'economy',
    question: 'What is Luxembourg\'s approximate population?',
    options: ['350,000', '520,000', '680,000', '1.2 million'],
    answer: 2,
    explanation: 'Luxembourg had approximately 680,000 residents in 2024 — one of the smallest countries in the EU by population, but also one of the wealthiest per capita.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html'
  },
  {
    id: 'econ-5',
    category: 'economy',
    question: 'Luxembourg regularly ranks first in the EU for which economic indicator?',
    options: ['Unemployment rate', 'GDP per capita', 'Agricultural output', 'Manufacturing exports'],
    answer: 1,
    explanation: 'Luxembourg consistently has the highest GDP per capita in the EU and among the highest in the world, driven by its financial sector, European institutions, and skilled cross-border workforce.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html'
  },
  {
    id: 'econ-6',
    category: 'economy',
    question: 'Which tech companies have their European headquarters in Luxembourg?',
    options: [
      'Apple, Google, and Twitter/X',
      'Amazon, PayPal, Skype, and many others',
      'Microsoft, Samsung, and Sony',
      'Facebook, Netflix, and Uber'
    ],
    answer: 1,
    explanation: 'Luxembourg hosts European HQs for Amazon, PayPal, Skype, Rakuten, Ferrero, and many others, attracted by stability, location, and EU market access. The digital economy is a key growth sector.',
    link: 'https://luxembourg.public.lu/en/entreprises/faire-affaire.html'
  },
  {
    id: 'econ-7',
    category: 'economy',
    question: 'How many nationalities are represented among Luxembourg\'s residents?',
    options: ['About 50', 'About 100', 'About 170', 'About 250'],
    answer: 2,
    explanation: 'Over 170 nationalities call Luxembourg home. About 47% of residents are foreign nationals — one of the highest proportions in the world. Portuguese nationals form the largest non-Luxembourg community.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html'
  },
  {
    id: 'econ-8',
    category: 'economy',
    question: 'The Moselle region of Luxembourg is known for producing what?',
    options: ['Craft beer', 'White wines (Riesling, Rivaner, Auxerrois)', 'Cheese', 'Chocolate'],
    answer: 1,
    explanation: 'The Luxembourg Moselle valley produces excellent white wines, especially Riesling, Rivaner (Müller-Thurgau), Auxerrois, and sparkling Crémant de Luxembourg. The region stretches from Schengen to Wasserbillig.',
    link: 'https://www.visitluxembourg.com/en/country/moselle'
  }
]

/**
 * Picks 5 questions for a given day index, ensuring category variety.
 * @param {number} dayIdx
 * @param {Array}  [questionsPool]  optional override (from admin/server)
 */
export function getDailyQuestions(dayIdx, questionsPool = null) {
  const pool = questionsPool || QUESTIONS
  const categories = ['language', 'history', 'culture', 'people', 'institutions', 'economy']
  const byCategory = {}
  categories.forEach(c => {
    byCategory[c] = pool.filter(q => q.category === c)
  })

  // Seed-based selection using day index
  const seed = dayIdx + 1
  const selected = []
  const usedCategories = new Set()

  // Pick one from each of 5 rotating categories
  const catOrder = categories.slice((seed % 6)).concat(categories.slice(0, seed % 6))
  for (let i = 0; i < 5; i++) {
    const cat = catOrder[i % categories.length]
    const catPool = byCategory[cat]
    if (!catPool || catPool.length === 0) continue
    const q = catPool[(seed * (i + 1) * 7) % catPool.length]
    selected.push(q)
    usedCategories.add(cat)
  }

  return selected
}
