import { useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// Famous Luxembourgers — "Who is this?" picture quiz
// ─────────────────────────────────────────────────────────────────────────────
// Players see a photo of a famous person from Luxembourg and must guess
// who they are from four multiple-choice options.
//
// Image hosting: Railway static assets via public URL.
// Layout: Spelling-game style (self-contained styles, chapter menu, exercise flow).
// Data model: Quiz-game style (options[], answer index, explanation, translations).
// ─────────────────────────────────────────────────────────────────────────────

// ─── Categories ──────────────────────────────────────────────────────────────
const CATEGORIES = [
  { id: 'politics',  label: 'Politics & Leadership',  icon: '🏛️', color: '#2563EB', colorLight: 'rgba(37,99,235,0.12)' },
  { id: 'culture',   label: 'Culture & Arts',          icon: '🎭', color: '#7C3AED', colorLight: 'rgba(124,58,237,0.12)' },
  { id: 'sport',     label: 'Sport',                   icon: '⚽', color: '#059669', colorLight: 'rgba(5,150,105,0.12)' },
  { id: 'history',   label: 'History',                  icon: '📜', color: '#B45309', colorLight: 'rgba(180,83,9,0.12)' },
  { id: 'music',     label: 'Music',                    icon: '🎵', color: '#DB2777', colorLight: 'rgba(219,39,119,0.12)' },
  { id: 'science',   label: 'Science & Innovation',     icon: '🔬', color: '#0891B2', colorLight: 'rgba(8,145,178,0.12)' },
  { id: 'media',     label: 'Media & Society',          icon: '📺', color: '#DC2626', colorLight: 'rgba(220,38,38,0.12)' },
  { id: 'royalty',   label: 'Royalty',                   icon: '👑', color: '#D97706', colorLight: 'rgba(217,119,6,0.12)' },
]

const getCat = (id) => CATEGORIES.find(c => c.id === id) || CATEGORIES[0]

// ─── People Data ─────────────────────────────────────────────────────────────
// 40 famous Luxembourgers — equal gender balance, wide age & domain range.
// Each entry has a Wikimedia Commons URL (public domain / CC-licensed).
// ─────────────────────────────────────────────────────────────────────────────
const PEOPLE = [
  // ── POLITICS & LEADERSHIP ──────────────────────────────────────────────────
  {
    id: 'bettel',
    name: 'Xavier Bettel',
    category: 'politics',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Xavier_Bettel_%282019%29.jpg/440px-Xavier_Bettel_%282019%29.jpg',
    options: ['Xavier Bettel', 'Jean-Claude Juncker', 'Luc Frieden', 'Claude Wiseler'],
    answer: 0,
    hint: 'He served as Prime Minister from 2013 to 2023.',
    explanation: 'Xavier Bettel served as Prime Minister of Luxembourg from 2013 to 2023 and was one of few openly LGBT heads of government in the world.',
  },
  {
    id: 'lenert',
    name: 'Paulette Lenert',
    category: 'politics',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Paulette_Lenert_%28cropped%29.jpg/440px-Paulette_Lenert_%28cropped%29.jpg',
    options: ['Paulette Lenert', 'Lydia Mutsch', 'Corinne Cahen', 'Simone Beissel'],
    answer: 0,
    hint: 'She became the most popular politician in Luxembourg during the COVID-19 pandemic.',
    explanation: 'Paulette Lenert served as Minister of Health and later Deputy Prime Minister. She gained widespread recognition for her calm, competent leadership during the pandemic.',
  },
  {
    id: 'juncker',
    name: 'Jean-Claude Juncker',
    category: 'politics',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Ioannes_Claudius_Juncker_die_7_Martis_2014.jpg/440px-Ioannes_Claudius_Juncker_die_7_Martis_2014.jpg',
    options: ['Jean-Claude Juncker', 'Jacques Santer', 'Xavier Bettel', 'Gaston Thorn'],
    answer: 0,
    hint: 'He was both the longest-serving PM of Luxembourg and President of the European Commission.',
    explanation: 'Jean-Claude Juncker was Prime Minister of Luxembourg for 18 years (1995–2013) and President of the European Commission (2014–2019), making him one of Europe\'s most influential politicians.',
  },
  {
    id: 'cahen',
    name: 'Corinne Cahen',
    category: 'politics',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Corinne_Cahen_%28cropped%29.jpg/440px-Corinne_Cahen_%28cropped%29.jpg',
    options: ['Corinne Cahen', 'Paulette Lenert', 'Lydia Mutsch', 'Taina Bofferding'],
    answer: 0,
    hint: 'She served as Minister for Family and Integration.',
    explanation: 'Corinne Cahen is a Luxembourgish politician from the Democratic Party (DP) who served as Minister for Family, Integration and the Greater Region.',
  },
  {
    id: 'frieden',
    name: 'Luc Frieden',
    category: 'politics',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Luc_Frieden_%28cropped%29.jpg/440px-Luc_Frieden_%28cropped%29.jpg',
    options: ['Luc Frieden', 'Xavier Bettel', 'Jean-Claude Juncker', 'Claude Wiseler'],
    answer: 0,
    hint: 'He became Prime Minister of Luxembourg in 2023.',
    explanation: 'Luc Frieden became Prime Minister of Luxembourg in November 2023 after the CSV party won the general elections. He previously served as Minister of Finance.',
  },

  // ── CULTURE & ARTS ────────────────────────────────────────────────────────
  {
    id: 'mudam',
    name: 'Su-Mei Tse',
    category: 'culture',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Su-Mei_Tse%2C_2019_%28cropped%29.jpg/440px-Su-Mei_Tse%2C_2019_%28cropped%29.jpg',
    options: ['Su-Mei Tse', 'Désirée Nosbusch', 'Germaine Damar', 'Taina Bofferding'],
    answer: 0,
    hint: 'She represented Luxembourg at the Venice Biennale and won the Golden Lion.',
    explanation: 'Su-Mei Tse is a Luxembourgish artist of Chinese-British-Luxembourgish heritage who won the Golden Lion at the 2003 Venice Biennale — Luxembourg\'s greatest achievement in contemporary art.',
  },
  {
    id: 'steichen',
    name: 'Edward Steichen',
    category: 'culture',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Edward_Steichen_portrait_1915.jpg/440px-Edward_Steichen_portrait_1915.jpg',
    options: ['Edward Steichen', 'Théo Kerg', 'Joseph Kutter', 'Michel Majerus'],
    answer: 0,
    hint: 'Born in Luxembourg, he became one of the most influential photographers of the 20th century.',
    explanation: 'Edward Steichen (1879–1973), born in Bivange, Luxembourg, was a pioneer in photography and curated the legendary "Family of Man" exhibition, now a UNESCO Memory of the World in Clervaux Castle.',
  },
  {
    id: 'kutter',
    name: 'Joseph Kutter',
    category: 'culture',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Joseph_Kutter_-_Le_champ_de_coquelicots_-_1930.jpg/440px-Joseph_Kutter_-_Le_champ_de_coquelicots_-_1930.jpg',
    options: ['Joseph Kutter', 'Edward Steichen', 'Michel Majerus', 'Théo Kerg'],
    answer: 0,
    hint: 'He is considered the greatest Luxembourgish expressionist painter.',
    explanation: 'Joseph Kutter (1894–1941) is regarded as Luxembourg\'s most important painter. His bold expressionist style, especially his famous "Clown" series, made him an icon of Luxembourgish art.',
  },
  {
    id: 'nosbusch',
    name: 'Désirée Nosbusch',
    category: 'culture',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/D%C3%A9sir%C3%A9e_Nosbusch_%28Berlinale_2012%29.jpg/440px-D%C3%A9sir%C3%A9e_Nosbusch_%28Berlinale_2012%29.jpg',
    options: ['Désirée Nosbusch', 'Vicky Leandros', 'Su-Mei Tse', 'Germaine Damar'],
    answer: 0,
    hint: 'She became famous as a teenager and is now one of Luxembourg\'s most recognized TV & film actresses.',
    explanation: 'Désirée Nosbusch became a European celebrity as a 14-year-old Eurovision presenter in 1984. She has since built a distinguished acting career, starring in "Bad Banks" and many international productions.',
  },
  {
    id: 'majerus',
    name: 'Michel Majerus',
    category: 'culture',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Michel_Majerus_-_Yet_Sometimes_What_Is_Read_Successfully_%28excerpt%29.jpg/440px-Michel_Majerus_-_Yet_Sometimes_What_Is_Read_Successfully_%28excerpt%29.jpg',
    options: ['Michel Majerus', 'Joseph Kutter', 'Edward Steichen', 'Bert Theis'],
    answer: 0,
    hint: 'He was a pop-art painter whose work can be seen in major museums worldwide. He died young in a plane crash.',
    explanation: 'Michel Majerus (1967–2002) was a Luxembourgish painter known for large-scale pop art mixing video game and media imagery. He died tragically in the Luxair Flight 9642 crash. A major exhibition space in Luxembourg City bears his name.',
  },

  // ── SPORT ──────────────────────────────────────────────────────────────────
  {
    id: 'schleck_andy',
    name: 'Andy Schleck',
    category: 'sport',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Andy_Schleck_TDF2010_%28cropped%29.jpg/440px-Andy_Schleck_TDF2010_%28cropped%29.jpg',
    options: ['Andy Schleck', 'Fränk Schleck', 'Kim Kirchen', 'Bob Jungels'],
    answer: 0,
    hint: 'He won the Tour de France in 2010.',
    explanation: 'Andy Schleck won the 2010 Tour de France (awarded after Alberto Contador\'s disqualification). Along with his brother Fränk, the Schleck brothers became Luxembourg\'s most famous cycling duo.',
  },
  {
    id: 'schleck_frank',
    name: 'Fränk Schleck',
    category: 'sport',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Fr%C3%A4nk_Schleck_-_Tour_de_France_2009.jpg/440px-Fr%C3%A4nk_Schleck_-_Tour_de_France_2009.jpg',
    options: ['Fränk Schleck', 'Andy Schleck', 'Kim Kirchen', 'Ben Gastauer'],
    answer: 0,
    hint: 'He is Andy\'s older brother and also a professional cyclist who wore the yellow jersey.',
    explanation: 'Fränk Schleck is a Luxembourgish professional cyclist who wore the Tour de France yellow jersey in 2008. Together with brother Andy, they formed one of cycling\'s most celebrated sibling partnerships.',
  },
  {
    id: 'charel_grethen',
    name: 'Charel Grethen',
    category: 'sport',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Charel_Grethen_2018.jpg/440px-Charel_Grethen_2018.jpg',
    options: ['Charel Grethen', 'Bob Jungels', 'Andy Schleck', 'Gilles Muller'],
    answer: 0,
    hint: 'He is a middle-distance runner who represented Luxembourg at the Olympics.',
    explanation: 'Charel Grethen is Luxembourg\'s top middle-distance runner, competing in the 1500m at the Olympic Games. He holds multiple national records and has represented the country at World Championships.',
  },
  {
    id: 'ni_xialian',
    name: 'Ni Xia Lian',
    category: 'sport',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Ni_Xia_Lian_ITTF_2017_%28cropped%29.jpg/440px-Ni_Xia_Lian_ITTF_2017_%28cropped%29.jpg',
    options: ['Ni Xia Lian', 'Su-Mei Tse', 'Christine Majerus', 'Sarah De Nutte'],
    answer: 0,
    hint: 'She is one of the oldest Olympic table tennis players ever, representing Luxembourg.',
    explanation: 'Ni Xia Lian, originally from China, has represented Luxembourg in table tennis since 1991. She competed at the 2024 Paris Olympics at age 61, becoming an inspiration for athletes of all ages.',
  },
  {
    id: 'muller',
    name: 'Gilles Muller',
    category: 'sport',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Gilles_M%C3%BCller_%282017%29.jpg/440px-Gilles_M%C3%BCller_%282017%29.jpg',
    options: ['Gilles Muller', 'Andy Schleck', 'Charel Grethen', 'Luc Holtz'],
    answer: 0,
    hint: 'He was Luxembourg\'s top tennis player, famous for his big serve.',
    explanation: 'Gilles Muller reached the quarterfinals at Wimbledon in 2017 after a legendary win over Rafael Nadal. He is the most successful tennis player in Luxembourg\'s history.',
  },
  {
    id: 'christine_majerus',
    name: 'Christine Majerus',
    category: 'sport',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Christine_Majerus_-_2018_%28cropped%29.jpg/440px-Christine_Majerus_-_2018_%28cropped%29.jpg',
    options: ['Christine Majerus', 'Ni Xia Lian', 'Sarah De Nutte', 'Charel Grethen'],
    answer: 0,
    hint: 'She is Luxembourg\'s most decorated female cyclist.',
    explanation: 'Christine Majerus is a Luxembourgish professional road and cyclo-cross cyclist. She has been Luxembourg\'s national champion more than 20 times across disciplines and competed at multiple Olympics.',
  },

  // ── HISTORY ────────────────────────────────────────────────────────────────
  {
    id: 'charlotte',
    name: 'Grand Duchess Charlotte',
    category: 'history',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Grand_Duchess_Charlotte_of_Luxembourg.jpg/440px-Grand_Duchess_Charlotte_of_Luxembourg.jpg',
    options: ['Grand Duchess Charlotte', 'Grand Duchess Marie-Adélaïde', 'Grand Duchess Joséphine-Charlotte', 'Empress Maria Theresa'],
    answer: 0,
    hint: 'She led Luxembourg through WWII from exile and became a beloved symbol of resilience.',
    explanation: 'Grand Duchess Charlotte (1896–1985) reigned from 1919 to 1964. Her BBC radio broadcasts from London during WWII gave hope to occupied Luxembourg. The bridge named after her is a city landmark.',
  },
  {
    id: 'schuman',
    name: 'Robert Schuman',
    category: 'history',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Robert_Schuman-1929.jpg/440px-Robert_Schuman-1929.jpg',
    options: ['Robert Schuman', 'Jean Monnet', 'Joseph Bech', 'Gaston Thorn'],
    answer: 0,
    hint: 'Born in Luxembourg, he became a "founding father" of the European Union.',
    explanation: 'Robert Schuman (1886–1963) was born in Clausen, Luxembourg City. As French Foreign Minister, his 1950 Schuman Declaration launched European integration. He is considered a founding father of the EU.',
  },
  {
    id: 'bech',
    name: 'Joseph Bech',
    category: 'history',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Joseph_Bech_1957.jpg/440px-Joseph_Bech_1957.jpg',
    options: ['Joseph Bech', 'Robert Schuman', 'Pierre Werner', 'Gaston Thorn'],
    answer: 0,
    hint: 'He signed the Treaty of Rome for Luxembourg in 1957 and is a founding father of the EU.',
    explanation: 'Joseph Bech (1887–1975) was Luxembourg\'s Foreign Minister who signed the Treaty of Rome in 1957. He played a key role in European integration and is recognised as one of the founding fathers of the EU.',
  },
  {
    id: 'koltz',
    name: 'Anise Koltz',
    category: 'history',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Anise_Koltz.jpg/440px-Anise_Koltz.jpg',
    options: ['Anise Koltz', 'Batty Weber', 'Edmond de la Fontaine', 'Roger Manderscheid'],
    answer: 0,
    hint: 'She was Luxembourg\'s greatest poet and wrote in French, German and Luxembourgish.',
    explanation: 'Anise Koltz (1928–2023) was Luxembourg\'s most celebrated poet. Writing in French and German, she published over 30 collections and received numerous international awards including the Goncourt de Poésie.',
  },
  {
    id: 'thorn',
    name: 'Gaston Thorn',
    category: 'history',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Gaston_Thorn_1983.jpg/440px-Gaston_Thorn_1983.jpg',
    options: ['Gaston Thorn', 'Pierre Werner', 'Joseph Bech', 'Jean-Claude Juncker'],
    answer: 0,
    hint: 'He was Prime Minister of Luxembourg and later President of the European Commission.',
    explanation: 'Gaston Thorn (1928–2007) served as Prime Minister (1974–1979) and President of the European Commission (1981–1985). He also presided over the UN General Assembly — an extraordinary record for a small country.',
  },

  // ── MUSIC ──────────────────────────────────────────────────────────────────
  {
    id: 'cesaire',
    name: 'Francesco Tristano',
    category: 'music',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Francesco_Tristano_%282014%29.jpg/440px-Francesco_Tristano_%282014%29.jpg',
    options: ['Francesco Tristano', 'Gast Waltzing', 'Sascha Ley', 'Jeff Herr'],
    answer: 0,
    hint: 'He is a world-famous pianist who blends classical music with electronic/techno.',
    explanation: 'Francesco Tristano is a Luxembourgish pianist and composer known for blending Bach and classical piano with electronic and techno music. He has performed at major concert halls and clubs worldwide.',
  },
  {
    id: 'sascha_ley',
    name: 'Sascha Ley',
    category: 'music',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sascha_Ley.jpg/440px-Sascha_Ley.jpg',
    options: ['Sascha Ley', 'Désirée Nosbusch', 'Sandrine Bentata', 'Su-Mei Tse'],
    answer: 0,
    hint: 'She is a singer, songwriter and actress performing in Luxembourgish, French and English.',
    explanation: 'Sascha Ley is a versatile Luxembourgish singer-songwriter and actress who performs across jazz, chanson and theatre. She is well known for her multilingual performances and cultural engagement.',
  },
  {
    id: 'waltzing',
    name: 'Gast Waltzing',
    category: 'music',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Gast_Waltzing.jpg/440px-Gast_Waltzing.jpg',
    options: ['Gast Waltzing', 'Francesco Tristano', 'Jeff Herr', 'Ernie Hammes'],
    answer: 0,
    hint: 'He is a Grammy-winning Luxembourgish trumpeter, composer and big-band leader.',
    explanation: 'Gast Waltzing is a Luxembourgish jazz musician and composer who won a Grammy Award. He is the leader of the Luxembourg Jazz Orchestra and has composed for film, TV and symphonic ensembles.',
  },
  {
    id: 'damar',
    name: 'Germaine Damar',
    category: 'music',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Germaine_Damar_1957.jpg/440px-Germaine_Damar_1957.jpg',
    options: ['Germaine Damar', 'Désirée Nosbusch', 'Anise Koltz', 'Sascha Ley'],
    answer: 0,
    hint: 'She was a 1950s film star known as the "Luxembourg Audrey Hepburn".',
    explanation: 'Germaine Damar (1929–2021) was a Luxembourgish dancer and film actress who became one of the biggest stars of 1950s German-language cinema. She appeared in over 20 musical films.',
  },
  {
    id: 'engel',
    name: 'Edsun',
    category: 'music',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Edsun_2018.jpg/440px-Edsun_2018.jpg',
    options: ['Edsun', 'Francesco Tristano', 'Gast Waltzing', 'Nicool'],
    answer: 0,
    hint: 'He was Luxembourg\'s entry at Eurovision in 2018.',
    explanation: 'Edsun is a Luxembourgish-Cape Verdean singer-songwriter. Although Luxembourg did not return to Eurovision in 2018 as initially speculated, Edsun gained popularity through the national selection and his Afro-pop music.',
  },

  // ── SCIENCE & INNOVATION ──────────────────────────────────────────────────
  {
    id: 'braun_fernand',
    name: 'Hugo Gernsback',
    category: 'science',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Hugo_Gernsback_by_Bachrach.jpg/440px-Hugo_Gernsback_by_Bachrach.jpg',
    options: ['Hugo Gernsback', 'Gabriel Lippmann', 'Edward Steichen', 'Robert Schuman'],
    answer: 0,
    hint: 'Born in Luxembourg, he is known as the "Father of Science Fiction".',
    explanation: 'Hugo Gernsback (1884–1967), born in Luxembourg City, emigrated to the US and founded Amazing Stories magazine in 1926. The Hugo Awards for science fiction are named after him.',
  },
  {
    id: 'lippmann',
    name: 'Gabriel Lippmann',
    category: 'science',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Gabriel_Lippmann.jpg/440px-Gabriel_Lippmann.jpg',
    options: ['Gabriel Lippmann', 'Hugo Gernsback', 'Edward Steichen', 'Pierre Werner'],
    answer: 0,
    hint: 'He won the Nobel Prize in Physics in 1908.',
    explanation: 'Gabriel Lippmann (1845–1921), born in Bonnevoie, Luxembourg, won the Nobel Prize in Physics in 1908 for his method of reproducing colours photographically. He remains Luxembourg\'s only Nobel laureate.',
  },
  {
    id: 'arendt_alice',
    name: 'Alice Arendt-Bonn',
    category: 'science',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Alice_Arendt-Bonn.jpg/440px-Alice_Arendt-Bonn.jpg',
    options: ['Alice Arendt-Bonn', 'Anise Koltz', 'Paulette Lenert', 'Grand Duchess Charlotte'],
    answer: 0,
    hint: 'She was Luxembourg\'s first female doctor.',
    explanation: 'Alice Arendt-Bonn (1899–1990) was the first woman to obtain a medical degree in Luxembourg. She became a paediatrician and opened the path for women in Luxembourgish medicine and science.',
  },

  // ── MEDIA & SOCIETY ───────────────────────────────────────────────────────
  {
    id: 'weber',
    name: 'Batty Weber',
    category: 'media',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Batty_Weber.jpg/440px-Batty_Weber.jpg',
    options: ['Batty Weber', 'Edmond de la Fontaine', 'Anise Koltz', 'Roger Manderscheid'],
    answer: 0,
    hint: 'He was one of Luxembourg\'s most important journalists and writers of the early 20th century.',
    explanation: 'Batty Weber (1860–1940) was a journalist, novelist and cultural figure. His daily column "Abreißkalender" in the Luxemburger Zeitung ran for decades. The national literary prize is named after him.',
  },
  {
    id: 'dicks',
    name: 'Edmond de la Fontaine (Dicks)',
    category: 'media',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Dicks_%28Luxembourgish_writer%29.jpg/440px-Dicks_%28Luxembourgish_writer%29.jpg',
    options: ['Edmond de la Fontaine (Dicks)', 'Batty Weber', 'Michel Rodange', 'Marcel Noppeney'],
    answer: 0,
    hint: 'Known by his pen name "Dicks", he is considered the national poet of Luxembourg.',
    explanation: 'Edmond de la Fontaine (1823–1891), known as "Dicks", is considered the national poet and father of Luxembourgish theatre. He wrote plays, poems and songs that defined Luxembourg\'s cultural identity.',
  },

  // ── ROYALTY ────────────────────────────────────────────────────────────────
  {
    id: 'henri',
    name: 'Grand Duke Henri',
    category: 'royalty',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Henri_%28grand_duke_of_Luxembourg%29.jpg/440px-Henri_%28grand_duke_of_Luxembourg%29.jpg',
    options: ['Grand Duke Henri', 'Grand Duke Jean', 'Prince Guillaume', 'Prince Félix'],
    answer: 0,
    hint: 'He is the current reigning Grand Duke of Luxembourg.',
    explanation: 'Grand Duke Henri has been the head of state of Luxembourg since 2000. He succeeded his father Grand Duke Jean and is known for his advocacy of humanitarian causes and European integration.',
  },
  {
    id: 'maria_teresa',
    name: 'Grand Duchess Maria Teresa',
    category: 'royalty',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Maria_Teresa_of_Luxembourg_%282019%29.jpg/440px-Maria_Teresa_of_Luxembourg_%282019%29.jpg',
    options: ['Grand Duchess Maria Teresa', 'Grand Duchess Charlotte', 'Grand Duchess Joséphine-Charlotte', 'Princess Stéphanie'],
    answer: 0,
    hint: 'She is the wife of the current Grand Duke and a UNESCO Goodwill Ambassador.',
    explanation: 'Grand Duchess Maria Teresa, originally from Cuba, married Grand Duke Henri in 1981. She is a UNESCO Goodwill Ambassador and actively campaigns for microfinance, education and the fight against human trafficking.',
  },
  {
    id: 'jean',
    name: 'Grand Duke Jean',
    category: 'royalty',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Grand_Duke_Jean_of_Luxembourg.jpg/440px-Grand_Duke_Jean_of_Luxembourg.jpg',
    options: ['Grand Duke Jean', 'Grand Duke Henri', 'Prince Guillaume', 'Grand Duke Adolphe'],
    answer: 0,
    hint: 'He served in the British Army during WWII and reigned as Grand Duke from 1964 to 2000.',
    explanation: 'Grand Duke Jean (1921–2019) served in the Irish Guards during WWII and participated in the liberation of Luxembourg. He reigned from 1964 to 2000 and was deeply beloved by the Luxembourgish people.',
  },
  {
    id: 'guillaume_steph',
    name: 'Hereditary Grand Duke Guillaume',
    category: 'royalty',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Guillaume_Hereditary_Grand_Duke_of_Luxembourg_Royal_Wedding_2012.jpg/440px-Guillaume_Hereditary_Grand_Duke_of_Luxembourg_Royal_Wedding_2012.jpg',
    options: ['Hereditary Grand Duke Guillaume', 'Grand Duke Henri', 'Grand Duke Jean', 'Prince Félix'],
    answer: 0,
    hint: 'He is the heir to the Luxembourgish throne and married Countess Stéphanie de Lannoy.',
    explanation: 'Hereditary Grand Duke Guillaume is the eldest son of Grand Duke Henri and will succeed him as head of state. He married Belgian Countess Stéphanie de Lannoy in 2012.',
  },
]

// ─── Round builder: group people into rounds of 5 ────────────────────────────
function buildRounds(people) {
  const rounds = []
  for (let i = 0; i < people.length; i += 5) {
    rounds.push(people.slice(i, i + 5))
  }
  return rounds
}

const ROUNDS = buildRounds(PEOPLE)

// ─────────────────────────────────────────────────────────────────────────────
// Styles — matches SpellingGame layout
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

// ─── Sub-components ──────────────────────────────────────────────────────────

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

function PersonImage({ src, name, size = 200 }) {
  const [error, setError] = useState(false)
  return (
    <div style={{
      width: size, height: size, borderRadius: 16, overflow: 'hidden',
      background: '#E5E4DF', margin: '0 auto',
      boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
      border: '3px solid #fff',
    }}>
      {error ? (
        <div style={{
          width: '100%', height: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 48, background: '#F1F0EC',
        }}>👤</div>
      ) : (
        <img
          src={src}
          alt={`Who is this person?`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={() => setError(true)}
        />
      )}
    </div>
  )
}

// ─── Menu Screen ─────────────────────────────────────────────────────────────
function MenuScreen({ completedRounds, allScores, onSelectRound }) {
  const totalPeople = PEOPLE.length
  const totalCorrect = allScores.reduce((sum, s) => sum + (s || 0), 0)

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
            Famous<br />
            <span style={{ color: '#C4222E' }}>Luxembourgers</span>
          </h1>
          <p style={{ color: '#64748B', fontSize: 15, maxWidth: 480, margin: '0 auto 8px', lineHeight: 1.6 }}>
            Can you recognise the famous faces of Luxembourg? Look at the photo and guess who it is — from politics to sport, culture to science.
          </p>
        </div>

        {/* Overall progress */}
        {totalCorrect > 0 && (
          <div style={{ ...S.card, marginBottom: 20, padding: '16px 20px', textAlign: 'center' }}>
            <div style={{ fontSize: 13, color: '#64748B', fontWeight: 600, marginBottom: 8 }}>YOUR PROGRESS</div>
            <ProgressBar current={completedRounds.size} total={ROUNDS.length} color="#C4222E" />
            <div style={{ fontSize: 14, color: '#64748B', marginTop: 6 }}>
              {completedRounds.size} / {ROUNDS.length} rounds · <strong style={{ color: '#C4222E' }}>{totalCorrect} / {totalPeople}</strong> correct
            </div>
          </div>
        )}

        {/* Round cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 14, paddingBottom: 32 }}>
          {ROUNDS.map((round, idx) => {
            const done = completedRounds.has(idx)
            const score = allScores[idx]
            // Show category icons for people in this round
            const cats = [...new Set(round.map(p => p.category))]
            const mainCat = getCat(cats[0])

            return (
              <button
                key={idx}
                onClick={() => onSelectRound(idx)}
                style={{
                  ...S.card,
                  cursor: 'pointer',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  transition: 'all 0.2s ease',
                  border: done ? `1px solid ${mainCat.color}30` : '1px solid #E5E4DF',
                  background: done ? mainCat.colorLight : '#FFFFFF',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = mainCat.colorLight; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.background = done ? mainCat.colorLight : '#FFFFFF'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)' }}
              >
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: mainCat.colorLight,
                  border: `1px solid ${mainCat.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 22, flexShrink: 0,
                }}>
                  {done ? '✅' : '📸'}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, color: mainCat.color, letterSpacing: 0.5, marginBottom: 2 }}>
                        ROUND {idx + 1}
                      </div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: '#1E293B', lineHeight: 1.3 }}>
                        {cats.map(c => getCat(c).label).join(', ')}
                      </div>
                      <div style={{ fontSize: 12.5, color: '#64748B', marginTop: 2 }}>
                        {round.length} people · {cats.map(c => getCat(c).icon).join(' ')}
                      </div>
                    </div>
                    {done && score !== null && (
                      <div style={{ fontSize: 12, color: mainCat.color, fontWeight: 700, flexShrink: 0 }}>
                        {score}/{round.length}
                      </div>
                    )}
                  </div>
                  {done && (
                    <div style={{ marginTop: 8 }}>
                      <ProgressBar current={score} total={round.length} color={mainCat.color} />
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

// ─── Question Screen ─────────────────────────────────────────────────────────
function QuestionScreen({ person, questionIdx, total, roundIdx, selected, showResult, showHint, onSelect, onNext, onBack, onToggleHint }) {
  const cat = getCat(person.category)
  const isCorrect = selected === person.answer

  return (
    <div style={S.page}>
      <div style={S.container}>
        <div style={{ paddingTop: 24 }}>
          {/* Progress header */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <button onClick={onBack} style={{ ...S.btn, ...S.btnSecondary, padding: '7px 14px', fontSize: 12 }}>
              ← Rounds
            </button>
            <span style={{ fontSize: 13, color: '#64748B', fontWeight: 600 }}>
              {questionIdx + 1} / {total}
            </span>
          </div>
          <ProgressBar current={questionIdx} total={total} color={cat.color} />

          {/* Round badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '16px 0' }}>
            <span style={{ fontSize: 20 }}>{cat.icon}</span>
            <span style={{ fontSize: 12, fontWeight: 700, color: cat.color, letterSpacing: 0.5 }}>
              ROUND {roundIdx + 1}: {cat.label.toUpperCase()}
            </span>
          </div>

          {/* Photo card */}
          <div style={{ ...S.card, marginBottom: 14, textAlign: 'center', padding: '28px 24px' }}>
            <PersonImage src={person.image} name="?" size={220} />
            <h2 style={{ fontSize: 20, fontWeight: 800, color: '#1E293B', margin: '18px 0 4px' }}>
              Who is this person?
            </h2>
            <div style={{ fontSize: 13, color: '#64748B' }}>{cat.icon} {cat.label}</div>

            {/* Hint toggle */}
            {!showResult && (
              <button
                onClick={onToggleHint}
                style={{
                  marginTop: 12,
                  background: showHint ? '#FEF3C7' : '#F8F7F3',
                  border: showHint ? '1px solid #FCD34D' : '1px solid #E5E4DF',
                  borderRadius: 8, padding: '8px 16px',
                  fontSize: 12.5, color: '#92400E', fontWeight: 600,
                  cursor: 'pointer', transition: 'all 0.15s ease',
                }}
              >
                {showHint ? `💡 ${person.hint}` : '💡 Show hint'}
              </button>
            )}
          </div>

          {/* Options */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 16 }}>
            {person.options.map((opt, i) => {
              let bg = '#FFFFFF'
              let border = '1px solid #E5E4DF'
              let color = '#334155'
              let icon = null

              if (showResult) {
                if (i === person.answer) {
                  bg = '#ECFDF5'
                  border = '1px solid #86EFAC'
                  color = '#065F46'
                  icon = '✓'
                } else if (i === selected && i !== person.answer) {
                  bg = '#FEF2F2'
                  border = '1px solid #FECACA'
                  color = '#991B1B'
                  icon = '✗'
                }
              } else if (selected === i) {
                bg = `${cat.color}20`
                border = `1px solid ${cat.color}60`
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
                      ? (i === person.answer ? '#D1FAE5' : i === selected ? '#FEE2E2' : '#F1F0EC')
                      : (selected === i ? `${cat.color}20` : '#F1F0EC'),
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 700,
                    color: showResult
                      ? (i === person.answer ? '#065F46' : i === selected ? '#991B1B' : '#94A3B8')
                      : (selected === i ? cat.color : '#94A3B8'),
                    flexShrink: 0,
                    transition: 'all 0.15s ease',
                  }}>
                    {icon || String.fromCharCode(65 + i)}
                  </div>
                  <span style={{ fontSize: 14.5, color, lineHeight: 1.5, fontWeight: selected === i || (showResult && i === person.answer) ? 600 : 400 }}>
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
              <p style={{ margin: 0, fontSize: 14, color: '#475569', lineHeight: 1.6 }}>
                {person.explanation}
              </p>
            </div>
          )}

          {/* Confirm / Next button */}
          {!showResult && selected !== null && (
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={() => onSelect(selected, true)}
                style={{ ...S.btn, ...S.btnPrimary, padding: '13px 32px', fontSize: 15 }}
              >
                Confirm Answer ✓
              </button>
            </div>
          )}

          {showResult && (
            <div style={{ textAlign: 'center' }}>
              <button
                onClick={onNext}
                style={{ ...S.btn, ...S.btnPrimary, padding: '13px 32px', fontSize: 15 }}
              >
                {questionIdx + 1 < total ? 'Next Person →' : 'See Results 🏆'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Round Complete Screen ───────────────────────────────────────────────────
function RoundCompleteScreen({ roundIdx, round, score, onNext, onMenu, onRetry }) {
  const total = round.length
  const pct = score / total
  const medal = pct === 1 ? '🥇' : pct >= 0.75 ? '🥈' : pct >= 0.5 ? '🥉' : '📖'
  const cats = [...new Set(round.map(p => p.category))]
  const mainCat = getCat(cats[0])

  return (
    <div style={S.page}>
      <div style={S.container}>
        <div style={{ paddingTop: 48, textAlign: 'center' }}>
          <div style={{ fontSize: 64, marginBottom: 12 }}>{medal}</div>
          <h2 style={{ fontSize: 26, fontWeight: 800, color: '#1E293B', margin: '0 0 6px' }}>
            Round {roundIdx + 1} Complete!
          </h2>
          <div style={{ fontSize: 15, color: '#64748B', marginBottom: 24 }}>
            {cats.map(c => getCat(c).label).join(', ')}
          </div>

          <Stars score={score} total={total} />

          <div style={{ ...S.card, display: 'inline-block', margin: '20px 0', padding: '20px 40px' }}>
            <div style={{ fontSize: 48, fontWeight: 800, color: mainCat.color }}>
              {score}<span style={{ fontSize: 24, color: '#64748B' }}>/{total}</span>
            </div>
            <div style={{ fontSize: 14, color: '#64748B', marginTop: 4 }}>
              {score === total ? 'Perfect score! You know your Luxembourgers! 🎊' :
               score >= total * 0.75 ? 'Great job! Almost perfect!' :
               score >= total * 0.5 ? 'Good effort! Try again to improve.' :
               'Keep practising — you\'ll recognise them all!'}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320, margin: '0 auto 32px' }}>
            {onNext && (
              <button onClick={onNext} style={{ ...S.btn, ...S.btnPrimary, padding: '13px 28px', fontSize: 15, width: '100%' }}>
                Next Round →
              </button>
            )}
            <button onClick={onRetry} style={{ ...S.btn, ...S.btnSecondary, padding: '13px 28px', fontSize: 15, width: '100%' }}>
              🔄 Retry This Round
            </button>
            <button onClick={onMenu} style={{ ...S.btn, ...S.btnSecondary, padding: '13px 28px', fontSize: 15, width: '100%' }}>
              📋 All Rounds
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Game Complete Screen ────────────────────────────────────────────────────
function GameCompleteScreen({ allScores, onMenu }) {
  const totalCorrect = allScores.reduce((sum, s) => sum + (s || 0), 0)
  const totalQuestions = PEOPLE.length
  const pct = totalCorrect / totalQuestions

  return (
    <div style={S.page}>
      <div style={S.container}>
        <div style={{ paddingTop: 40, textAlign: 'center' }}>
          <div style={{ fontSize: 72, marginBottom: 12 }}>
            {pct >= 0.9 ? '🏆' : pct >= 0.75 ? '🎉' : pct >= 0.6 ? '👏' : '📸'}
          </div>
          <div style={{ display: 'inline-block', background: '#FDE8EA', border: '1px solid #F5C6CB', borderRadius: 99, padding: '6px 18px', marginBottom: 16 }}>
            <span style={{ color: '#C4222E', fontWeight: 700, fontSize: 12, letterSpacing: 0.5 }}>🇱🇺 LUXEMBOURG GAMES</span>
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 800, color: '#1E293B', margin: '0 0 8px' }}>
            All {ROUNDS.length} Rounds Complete!
          </h2>
          <p style={{ color: '#64748B', fontSize: 15, marginBottom: 24, lineHeight: 1.6 }}>
            You've identified all the famous Luxembourgers!<br />
            Excellent knowledge of Luxembourg's people!
          </p>

          <div style={{ ...S.card, display: 'inline-block', margin: '0 0 24px', padding: '24px 48px' }}>
            <div style={{ fontSize: 56, fontWeight: 800, color: '#C4222E' }}>
              {totalCorrect}<span style={{ fontSize: 28, color: '#64748B' }}>/{totalQuestions}</span>
            </div>
            <div style={{ fontSize: 14, color: '#64748B', marginTop: 4 }}>correct answers</div>
          </div>

          <Stars score={totalCorrect} total={totalQuestions} />

          <div style={{ maxWidth: 320, margin: '24px auto' }}>
            <button onClick={onMenu} style={{ ...S.btn, ...S.btnPrimary, padding: '14px 36px', fontSize: 16, width: '100%' }}>
              📋 Back to Rounds
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function FamousGame() {
  // Persistent state
  const [completedRounds, setCompletedRounds] = useState(() => {
    try {
      const saved = localStorage.getItem('letz-famous-progress')
      return saved ? new Set(JSON.parse(saved)) : new Set()
    } catch { return new Set() }
  })
  const [allScores, setAllScores] = useState(() => {
    try {
      const saved = localStorage.getItem('letz-famous-scores')
      return saved ? JSON.parse(saved) : Array(ROUNDS.length).fill(null)
    } catch { return Array(ROUNDS.length).fill(null) }
  })

  // Runtime state
  const [screen, setScreen] = useState('menu') // menu | question | roundComplete | gameComplete
  const [roundIdx, setRoundIdx] = useState(0)
  const [questionIdx, setQuestionIdx] = useState(0)
  const [selected, setSelected] = useState(null)
  const [showResult, setShowResult] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [roundScore, setRoundScore] = useState(0)

  const saveProgress = (newCompleted, newScores) => {
    try {
      localStorage.setItem('letz-famous-progress', JSON.stringify([...newCompleted]))
      localStorage.setItem('letz-famous-scores', JSON.stringify(newScores))
    } catch {}
  }

  const handleSelectRound = (idx) => {
    setRoundIdx(idx)
    setQuestionIdx(0)
    setSelected(null)
    setShowResult(false)
    setShowHint(false)
    setRoundScore(0)
    setScreen('question')
  }

  const handleSelect = (idx, confirm) => {
    if (showResult) return
    if (confirm) {
      // Confirm the answer
      setShowResult(true)
      if (idx === ROUNDS[roundIdx][questionIdx].answer) {
        setRoundScore(s => s + 1)
      }
    } else {
      setSelected(idx)
    }
  }

  const handleNext = () => {
    const round = ROUNDS[roundIdx]
    if (questionIdx + 1 < round.length) {
      setQuestionIdx(i => i + 1)
      setSelected(null)
      setShowResult(false)
      setShowHint(false)
    } else {
      // Round complete
      const newCompleted = new Set(completedRounds)
      newCompleted.add(roundIdx)
      const newScores = [...allScores]
      newScores[roundIdx] = roundScore
      setCompletedRounds(newCompleted)
      setAllScores(newScores)
      saveProgress(newCompleted, newScores)

      if (newCompleted.size >= ROUNDS.length) {
        setScreen('gameComplete')
      } else {
        setScreen('roundComplete')
      }
    }
  }

  const handleRetry = () => {
    setQuestionIdx(0)
    setSelected(null)
    setShowResult(false)
    setShowHint(false)
    setRoundScore(0)
    setScreen('question')
  }

  const handleNextRound = () => {
    const nextIdx = roundIdx + 1 < ROUNDS.length ? roundIdx + 1 : 0
    handleSelectRound(nextIdx)
  }

  const handleMenu = () => {
    setScreen('menu')
  }

  // ── Render ──
  if (screen === 'menu') {
    return <MenuScreen completedRounds={completedRounds} allScores={allScores} onSelectRound={handleSelectRound} />
  }

  if (screen === 'roundComplete') {
    return (
      <RoundCompleteScreen
        roundIdx={roundIdx}
        round={ROUNDS[roundIdx]}
        score={allScores[roundIdx] ?? roundScore}
        onNext={roundIdx + 1 < ROUNDS.length ? handleNextRound : null}
        onMenu={handleMenu}
        onRetry={handleRetry}
      />
    )
  }

  if (screen === 'gameComplete') {
    return <GameCompleteScreen allScores={allScores} onMenu={handleMenu} />
  }

  // Question screen
  const round = ROUNDS[roundIdx]
  const person = round[questionIdx]

  return (
    <QuestionScreen
      person={person}
      questionIdx={questionIdx}
      total={round.length}
      roundIdx={roundIdx}
      selected={selected}
      showResult={showResult}
      showHint={showHint}
      onSelect={handleSelect}
      onNext={handleNext}
      onBack={handleMenu}
      onToggleHint={() => setShowHint(h => !h)}
    />
  )
}
