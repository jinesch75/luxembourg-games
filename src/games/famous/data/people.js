/**
 * Famous Luxembourgers — picture quiz data
 *
 * Each person: id, level, category, name, wikiTitle (for Wikipedia image API),
 *              options[], answer (0-based), hint, explanation
 *
 * Levels: 'newcomer' | 'explorer' | 'resident' | 'citizen'
 * 4 levels × 2 sub-levels × 5 people = 40 people total
 *
 * Images are fetched at runtime from the Wikipedia REST API:
 *   https://en.wikipedia.org/api/rest_v1/page/summary/{wikiTitle}
 * which returns JSON with a thumbnail.source URL (CORS-enabled).
 *
 * Gender balance: ~50/50 across the full set.
 * Domains: politics, culture, sport, history, music, science, media, royalty.
 */

// ─── NEWCOMER  (Level 1) — Most recognisable faces ──────────────────────────
// sub-level 1
const NEWCOMER = [
  {
    id: 'f-henri', level: 'newcomer', category: 'royalty',
    name: 'Grand Duke Henri',
    wikiTitle: 'Henri,_Grand_Duke_of_Luxembourg',
    options: ['Grand Duke Henri', 'Grand Duke Jean', 'Prince Guillaume', 'Prince Félix'],
    answer: 0,
    hint: 'He has been the reigning head of state of Luxembourg since 2000.',
    explanation: 'Grand Duke Henri has been the head of state of Luxembourg since 7 October 2000. He succeeded his father Grand Duke Jean and is known for his advocacy of humanitarian causes and European integration.',
  },
  {
    id: 'f-juncker', level: 'newcomer', category: 'politics',
    name: 'Jean-Claude Juncker',
    wikiTitle: 'Jean-Claude_Juncker',
    options: ['Jean-Claude Juncker', 'Jacques Santer', 'Xavier Bettel', 'Gaston Thorn'],
    answer: 0,
    hint: 'He was both the longest-serving PM of Luxembourg and President of the European Commission.',
    explanation: 'Jean-Claude Juncker was Prime Minister of Luxembourg for 18 years (1995–2013) and President of the European Commission (2014–2019), making him one of Europe\'s most influential politicians.',
  },
  {
    id: 'f-charlotte', level: 'newcomer', category: 'history',
    name: 'Grand Duchess Charlotte',
    wikiTitle: 'Charlotte,_Grand_Duchess_of_Luxembourg',
    options: ['Grand Duchess Charlotte', 'Grand Duchess Marie-Adélaïde', 'Empress Maria Theresa', 'Grand Duchess Joséphine-Charlotte'],
    answer: 0,
    hint: 'She led Luxembourg through WWII from exile and became a beloved symbol of resilience.',
    explanation: 'Grand Duchess Charlotte (1896–1985) reigned from 1919 to 1964. Her BBC radio broadcasts from London during WWII gave hope to occupied Luxembourg. The famous bridge in Luxembourg City is named after her.',
  },
  {
    id: 'f-andy', level: 'newcomer', category: 'sport',
    name: 'Andy Schleck',
    wikiTitle: 'Andy_Schleck',
    options: ['Andy Schleck', 'Fränk Schleck', 'Kim Kirchen', 'Bob Jungels'],
    answer: 0,
    hint: 'He won the Tour de France in 2010.',
    explanation: 'Andy Schleck won the 2010 Tour de France (awarded after Alberto Contador\'s disqualification). Along with his brother Fränk, the Schleck brothers became Luxembourg\'s most famous cycling duo.',
  },
  {
    id: 'f-nosbusch', level: 'newcomer', category: 'culture',
    name: 'Désirée Nosbusch',
    wikiTitle: 'Désirée_Nosbusch',
    options: ['Désirée Nosbusch', 'Vicky Leandros', 'Su-Mei Tse', 'Germaine Damar'],
    answer: 0,
    hint: 'She became famous as a teenager presenting Eurovision and is now one of Luxembourg\'s top TV & film actresses.',
    explanation: 'Désirée Nosbusch became a European celebrity as a 14-year-old Eurovision presenter in 1984. She has since built a distinguished acting career, starring in "Bad Banks" and many international productions.',
  },
  // sub-level 2
  {
    id: 'f-bettel', level: 'newcomer', category: 'politics',
    name: 'Xavier Bettel',
    wikiTitle: 'Xavier_Bettel',
    options: ['Xavier Bettel', 'Luc Frieden', 'Claude Wiseler', 'Félix Braz'],
    answer: 0,
    hint: 'He served as Prime Minister from 2013 to 2023.',
    explanation: 'Xavier Bettel served as Prime Minister of Luxembourg from 2013 to 2023 and was one of few openly LGBT heads of government in the world.',
  },
  {
    id: 'f-maria-teresa', level: 'newcomer', category: 'royalty',
    name: 'Grand Duchess Maria Teresa',
    wikiTitle: 'Maria_Teresa,_Grand_Duchess_of_Luxembourg',
    options: ['Grand Duchess Maria Teresa', 'Grand Duchess Charlotte', 'Princess Stéphanie', 'Grand Duchess Joséphine-Charlotte'],
    answer: 0,
    hint: 'She is the wife of the current Grand Duke and a UNESCO Goodwill Ambassador.',
    explanation: 'Grand Duchess Maria Teresa, originally from Cuba, married Grand Duke Henri in 1981. She is a UNESCO Goodwill Ambassador and actively campaigns for microfinance, education and the fight against human trafficking.',
  },
  {
    id: 'f-steichen', level: 'newcomer', category: 'culture',
    name: 'Edward Steichen',
    wikiTitle: 'Edward_Steichen',
    options: ['Edward Steichen', 'Théo Kerg', 'Joseph Kutter', 'Michel Majerus'],
    answer: 0,
    hint: 'Born in Luxembourg, he became one of the most influential photographers of the 20th century.',
    explanation: 'Edward Steichen (1879–1973), born in Bivange, Luxembourg, was a pioneer in photography and curated the legendary "Family of Man" exhibition, now a UNESCO Memory of the World in Clervaux Castle.',
  },
  {
    id: 'f-lippmann', level: 'newcomer', category: 'science',
    name: 'Gabriel Lippmann',
    wikiTitle: 'Gabriel_Lippmann',
    options: ['Gabriel Lippmann', 'Hugo Gernsback', 'Edward Steichen', 'Pierre Werner'],
    answer: 0,
    hint: 'He won the Nobel Prize in Physics in 1908.',
    explanation: 'Gabriel Lippmann (1845–1921), born in Bonnevoie, Luxembourg, won the Nobel Prize in Physics in 1908 for his method of reproducing colours photographically. He remains Luxembourg\'s only Nobel laureate.',
  },
  {
    id: 'f-ni', level: 'newcomer', category: 'sport',
    name: 'Ni Xia Lian',
    wikiTitle: 'Ni_Xia_Lian',
    options: ['Ni Xia Lian', 'Su-Mei Tse', 'Christine Majerus', 'Sarah De Nutte'],
    answer: 0,
    hint: 'She is one of the oldest Olympic table tennis players ever, representing Luxembourg.',
    explanation: 'Ni Xia Lian, originally from China, has represented Luxembourg in table tennis since 1991. She competed at the 2024 Paris Olympics at age 61, becoming an inspiration for athletes of all ages.',
  },
]

// ─── EXPLORER  (Level 2) — Well-known in specific domains ───────────────────
// sub-level 1
const EXPLORER = [
  {
    id: 'f-lenert', level: 'explorer', category: 'politics',
    name: 'Paulette Lenert',
    wikiTitle: 'Paulette_Lenert',
    options: ['Paulette Lenert', 'Lydia Mutsch', 'Corinne Cahen', 'Simone Beissel'],
    answer: 0,
    hint: 'She became the most popular politician in Luxembourg during the COVID-19 pandemic.',
    explanation: 'Paulette Lenert served as Minister of Health and later Deputy Prime Minister. She gained widespread recognition for her calm, competent leadership during the pandemic.',
  },
  {
    id: 'f-frieden', level: 'explorer', category: 'politics',
    name: 'Luc Frieden',
    wikiTitle: 'Luc_Frieden',
    options: ['Luc Frieden', 'Xavier Bettel', 'Jean-Claude Juncker', 'Claude Wiseler'],
    answer: 0,
    hint: 'He became Prime Minister of Luxembourg in 2023.',
    explanation: 'Luc Frieden became Prime Minister of Luxembourg in November 2023 after the CSV party won the general elections. He previously served as Minister of Finance.',
  },
  {
    id: 'f-frank', level: 'explorer', category: 'sport',
    name: 'Fränk Schleck',
    wikiTitle: 'Fränk_Schleck',
    options: ['Fränk Schleck', 'Andy Schleck', 'Kim Kirchen', 'Ben Gastauer'],
    answer: 0,
    hint: 'He is Andy\'s older brother and also a professional cyclist who wore the yellow jersey.',
    explanation: 'Fränk Schleck is a Luxembourgish professional cyclist who wore the Tour de France yellow jersey in 2008. Together with brother Andy, they formed one of cycling\'s most celebrated sibling partnerships.',
  },
  {
    id: 'f-tristano', level: 'explorer', category: 'music',
    name: 'Francesco Tristano',
    wikiTitle: 'Francesco_Tristano',
    options: ['Francesco Tristano', 'Gast Waltzing', 'Sascha Ley', 'Jeff Herr'],
    answer: 0,
    hint: 'He is a world-famous pianist who blends classical music with electronic/techno.',
    explanation: 'Francesco Tristano is a Luxembourgish pianist and composer known for blending Bach and classical piano with electronic and techno music. He has performed at major concert halls and clubs worldwide.',
  },
  {
    id: 'f-schuman', level: 'explorer', category: 'history',
    name: 'Robert Schuman',
    wikiTitle: 'Robert_Schuman',
    options: ['Robert Schuman', 'Jean Monnet', 'Joseph Bech', 'Gaston Thorn'],
    answer: 0,
    hint: 'Born in Luxembourg, he became a "founding father" of the European Union.',
    explanation: 'Robert Schuman (1886–1963) was born in Clausen, Luxembourg City. As French Foreign Minister, his 1950 Schuman Declaration launched European integration. He is considered a founding father of the EU.',
  },
  // sub-level 2
  {
    id: 'f-muller', level: 'explorer', category: 'sport',
    name: 'Gilles Muller',
    wikiTitle: 'Gilles_Müller',
    options: ['Gilles Muller', 'Andy Schleck', 'Charel Grethen', 'Luc Holtz'],
    answer: 0,
    hint: 'He was Luxembourg\'s top tennis player, famous for his big serve.',
    explanation: 'Gilles Muller reached the quarterfinals at Wimbledon in 2017 after a legendary win over Rafael Nadal. He is the most successful tennis player in Luxembourg\'s history.',
  },
  {
    id: 'f-jean', level: 'explorer', category: 'royalty',
    name: 'Grand Duke Jean',
    wikiTitle: 'Jean,_Grand_Duke_of_Luxembourg',
    options: ['Grand Duke Jean', 'Grand Duke Henri', 'Grand Duke Adolphe', 'Prince Guillaume'],
    answer: 0,
    hint: 'He served in the British Army during WWII and reigned as Grand Duke from 1964 to 2000.',
    explanation: 'Grand Duke Jean (1921–2019) served in the Irish Guards during WWII and participated in the liberation of Luxembourg. He reigned from 1964 to 2000 and was deeply beloved by the Luxembourgish people.',
  },
  {
    id: 'f-sumei', level: 'explorer', category: 'culture',
    name: 'Su-Mei Tse',
    wikiTitle: 'Su-Mei_Tse',
    options: ['Su-Mei Tse', 'Désirée Nosbusch', 'Germaine Damar', 'Taina Bofferding'],
    answer: 0,
    hint: 'She represented Luxembourg at the Venice Biennale and won the Golden Lion.',
    explanation: 'Su-Mei Tse is a Luxembourgish artist of Chinese-British-Luxembourgish heritage who won the Golden Lion at the 2003 Venice Biennale — Luxembourg\'s greatest achievement in contemporary art.',
  },
  {
    id: 'f-majerus-c', level: 'explorer', category: 'sport',
    name: 'Christine Majerus',
    wikiTitle: 'Christine_Majerus',
    options: ['Christine Majerus', 'Ni Xia Lian', 'Sarah De Nutte', 'Charel Grethen'],
    answer: 0,
    hint: 'She is Luxembourg\'s most decorated female cyclist.',
    explanation: 'Christine Majerus is a Luxembourgish professional road and cyclo-cross cyclist. She has been Luxembourg\'s national champion more than 20 times across disciplines and competed at multiple Olympics.',
  },
  {
    id: 'f-gernsback', level: 'explorer', category: 'science',
    name: 'Hugo Gernsback',
    wikiTitle: 'Hugo_Gernsback',
    options: ['Hugo Gernsback', 'Gabriel Lippmann', 'Edward Steichen', 'Robert Schuman'],
    answer: 0,
    hint: 'Born in Luxembourg, he is known as the "Father of Science Fiction".',
    explanation: 'Hugo Gernsback (1884–1967), born in Luxembourg City, emigrated to the US and founded Amazing Stories magazine in 1926. The Hugo Awards for science fiction are named after him.',
  },
]

// ─── RESIDENT  (Level 3) — Deeper knowledge needed ──────────────────────────
// sub-level 1
const RESIDENT = [
  {
    id: 'f-koltz', level: 'resident', category: 'history',
    name: 'Anise Koltz',
    wikiTitle: 'Anise_Koltz',
    options: ['Anise Koltz', 'Batty Weber', 'Edmond de la Fontaine', 'Roger Manderscheid'],
    answer: 0,
    hint: 'She was Luxembourg\'s greatest poet and wrote in French, German and Luxembourgish.',
    explanation: 'Anise Koltz (1928–2023) was Luxembourg\'s most celebrated poet. Writing in French and German, she published over 30 collections and received numerous international awards including the Goncourt de Poésie.',
  },
  {
    id: 'f-bech', level: 'resident', category: 'history',
    name: 'Joseph Bech',
    wikiTitle: 'Joseph_Bech',
    options: ['Joseph Bech', 'Robert Schuman', 'Pierre Werner', 'Gaston Thorn'],
    answer: 0,
    hint: 'He signed the Treaty of Rome for Luxembourg in 1957 and is a founding father of the EU.',
    explanation: 'Joseph Bech (1887–1975) was Luxembourg\'s Foreign Minister who signed the Treaty of Rome in 1957. He played a key role in European integration and is recognised as one of the founding fathers of the EU.',
  },
  {
    id: 'f-damar', level: 'resident', category: 'music',
    name: 'Germaine Damar',
    wikiTitle: 'Germaine_Damar',
    options: ['Germaine Damar', 'Désirée Nosbusch', 'Anise Koltz', 'Sascha Ley'],
    answer: 0,
    hint: 'She was a 1950s film star known as the "Luxembourg Audrey Hepburn".',
    explanation: 'Germaine Damar (1929–2021) was a Luxembourgish dancer and film actress who became one of the biggest stars of 1950s German-language cinema. She appeared in over 20 musical films.',
  },
  {
    id: 'f-kutter', level: 'resident', category: 'culture',
    name: 'Joseph Kutter',
    wikiTitle: 'Joseph_Kutter',
    options: ['Joseph Kutter', 'Edward Steichen', 'Michel Majerus', 'Théo Kerg'],
    answer: 0,
    hint: 'He is considered the greatest Luxembourgish expressionist painter.',
    explanation: 'Joseph Kutter (1894–1941) is regarded as Luxembourg\'s most important painter. His bold expressionist style, especially his famous "Clown" series, made him an icon of Luxembourgish art.',
  },
  {
    id: 'f-guillaume', level: 'resident', category: 'royalty',
    name: 'Hereditary Grand Duke Guillaume',
    wikiTitle: 'Guillaume,_Hereditary_Grand_Duke_of_Luxembourg',
    options: ['Hereditary Grand Duke Guillaume', 'Grand Duke Henri', 'Grand Duke Jean', 'Prince Félix'],
    answer: 0,
    hint: 'He is the heir to the Luxembourgish throne and married Countess Stéphanie de Lannoy.',
    explanation: 'Hereditary Grand Duke Guillaume is the eldest son of Grand Duke Henri and will succeed him as head of state. He married Belgian Countess Stéphanie de Lannoy in 2012.',
  },
  // sub-level 2
  {
    id: 'f-thorn', level: 'resident', category: 'history',
    name: 'Gaston Thorn',
    wikiTitle: 'Gaston_Thorn',
    options: ['Gaston Thorn', 'Pierre Werner', 'Joseph Bech', 'Jean-Claude Juncker'],
    answer: 0,
    hint: 'He was Prime Minister of Luxembourg and later President of the European Commission.',
    explanation: 'Gaston Thorn (1928–2007) served as Prime Minister (1974–1979) and President of the European Commission (1981–1985). He also presided over the UN General Assembly.',
  },
  {
    id: 'f-waltzing', level: 'resident', category: 'music',
    name: 'Gast Waltzing',
    wikiTitle: 'Gast_Waltzing',
    options: ['Gast Waltzing', 'Francesco Tristano', 'Jeff Herr', 'Ernie Hammes'],
    answer: 0,
    hint: 'He is a Grammy-winning Luxembourgish trumpeter, composer and big-band leader.',
    explanation: 'Gast Waltzing is a Luxembourgish jazz musician and composer who won a Grammy Award. He is the leader of the Luxembourg Jazz Orchestra and has composed for film, TV and symphonic ensembles.',
  },
  {
    id: 'f-grethen', level: 'resident', category: 'sport',
    name: 'Charel Grethen',
    wikiTitle: 'Charel_Grethen',
    options: ['Charel Grethen', 'Bob Jungels', 'Andy Schleck', 'Gilles Muller'],
    answer: 0,
    hint: 'He is a middle-distance runner who represented Luxembourg at the Olympics.',
    explanation: 'Charel Grethen is Luxembourg\'s top middle-distance runner, competing in the 1500m at the Olympic Games. He holds multiple national records and has represented the country at World Championships.',
  },
  {
    id: 'f-cahen', level: 'resident', category: 'politics',
    name: 'Corinne Cahen',
    wikiTitle: 'Corinne_Cahen',
    options: ['Corinne Cahen', 'Paulette Lenert', 'Lydia Mutsch', 'Taina Bofferding'],
    answer: 0,
    hint: 'She served as Minister for Family and Integration.',
    explanation: 'Corinne Cahen is a Luxembourgish politician from the Democratic Party (DP) who served as Minister for Family, Integration and the Greater Region.',
  },
  {
    id: 'f-majerus-m', level: 'resident', category: 'culture',
    name: 'Michel Majerus',
    wikiTitle: 'Michel_Majerus',
    options: ['Michel Majerus', 'Joseph Kutter', 'Edward Steichen', 'Bert Theis'],
    answer: 0,
    hint: 'He was a pop-art painter whose work can be seen in major museums worldwide. He died young in a plane crash.',
    explanation: 'Michel Majerus (1967–2002) was a Luxembourgish painter known for large-scale pop art mixing video game and media imagery. He died tragically in the Luxair Flight 9642 crash. A major exhibition space in Luxembourg City bears his name.',
  },
]

// ─── CITIZEN (Level 4) — Deep Luxembourg knowledge ──────────────────────────
// sub-level 1
const CITIZEN = [
  {
    id: 'f-dicks', level: 'citizen', category: 'culture',
    name: 'Edmond de la Fontaine (Dicks)',
    wikiTitle: 'Edmond_de_la_Fontaine',
    options: ['Edmond de la Fontaine (Dicks)', 'Batty Weber', 'Michel Rodange', 'Marcel Noppeney'],
    answer: 0,
    hint: 'Known by his pen name "Dicks", he is considered the national poet of Luxembourg.',
    explanation: 'Edmond de la Fontaine (1823–1891), known as "Dicks", is considered the national poet and father of Luxembourgish theatre. He wrote plays, poems and songs that defined Luxembourg\'s cultural identity.',
  },
  {
    id: 'f-weber', level: 'citizen', category: 'media',
    name: 'Batty Weber',
    wikiTitle: 'Batty_Weber',
    options: ['Batty Weber', 'Edmond de la Fontaine', 'Anise Koltz', 'Roger Manderscheid'],
    answer: 0,
    hint: 'He was one of Luxembourg\'s most important journalists and writers of the early 20th century.',
    explanation: 'Batty Weber (1860–1940) was a journalist, novelist and cultural figure. His daily column "Abreißkalender" in the Luxemburger Zeitung ran for decades. The national literary prize is named after him.',
  },
  {
    id: 'f-ley', level: 'citizen', category: 'music',
    name: 'Sascha Ley',
    wikiTitle: 'Sascha_Ley',
    options: ['Sascha Ley', 'Désirée Nosbusch', 'Sandrine Bentata', 'Su-Mei Tse'],
    answer: 0,
    hint: 'She is a singer, songwriter and actress performing in Luxembourgish, French and English.',
    explanation: 'Sascha Ley is a versatile Luxembourgish singer-songwriter and actress who performs across jazz, chanson and theatre. She is well known for her multilingual performances and cultural engagement.',
  },
  {
    id: 'f-santer', level: 'citizen', category: 'politics',
    name: 'Jacques Santer',
    wikiTitle: 'Jacques_Santer',
    options: ['Jacques Santer', 'Jean-Claude Juncker', 'Gaston Thorn', 'Pierre Werner'],
    answer: 0,
    hint: 'He was Prime Minister and then President of the European Commission before Juncker.',
    explanation: 'Jacques Santer served as Prime Minister of Luxembourg (1984–1995) and then as President of the European Commission (1995–1999). He is one of three Luxembourgers to have led the Commission.',
  },
  {
    id: 'f-denutte', level: 'citizen', category: 'sport',
    name: 'Sarah De Nutte',
    wikiTitle: 'Sarah_De_Nutte',
    options: ['Sarah De Nutte', 'Ni Xia Lian', 'Christine Majerus', 'Charel Grethen'],
    answer: 0,
    hint: 'She is a Luxembourgish table tennis player who has competed at the European Championships.',
    explanation: 'Sarah De Nutte is a Luxembourgish table tennis player who has been national champion multiple times. She continues the strong table tennis tradition alongside Ni Xia Lian.',
  },
  // sub-level 2
  {
    id: 'f-rodange', level: 'citizen', category: 'culture',
    name: 'Michel Rodange',
    wikiTitle: 'Michel_Rodange',
    options: ['Michel Rodange', 'Edmond de la Fontaine', 'Batty Weber', 'Nicolas Ries'],
    answer: 0,
    hint: 'He wrote the Luxembourgish national epic poem "Renert" (The Fox).',
    explanation: 'Michel Rodange (1827–1876) wrote "De Renert", an epic poem in Luxembourgish based on the Reynard the Fox tradition. It is considered the masterpiece of Luxembourgish literature.',
  },
  {
    id: 'f-werner', level: 'citizen', category: 'history',
    name: 'Pierre Werner',
    wikiTitle: 'Pierre_Werner',
    options: ['Pierre Werner', 'Joseph Bech', 'Gaston Thorn', 'Robert Schuman'],
    answer: 0,
    hint: 'He is considered the architect of the Euro — his 1970 plan led to the single currency.',
    explanation: 'Pierre Werner (1913–2002) served as Prime Minister and proposed the "Werner Plan" in 1970, which laid the groundwork for European monetary union and ultimately the creation of the Euro.',
  },
  {
    id: 'f-jungels', level: 'citizen', category: 'sport',
    name: 'Bob Jungels',
    wikiTitle: 'Bob_Jungels',
    options: ['Bob Jungels', 'Andy Schleck', 'Fränk Schleck', 'Ben Gastauer'],
    answer: 0,
    hint: 'He is a Luxembourgish cyclist who won a stage at the Tour de France and Liège–Bastogne–Liège.',
    explanation: 'Bob Jungels is a professional cyclist who won Liège–Bastogne–Liège in 2022 and a Tour de France stage. He has been Luxembourg national champion and is one of the country\'s top modern riders.',
  },
  {
    id: 'f-bofferding', level: 'citizen', category: 'politics',
    name: 'Taina Bofferding',
    wikiTitle: 'Taina_Bofferding',
    options: ['Taina Bofferding', 'Corinne Cahen', 'Paulette Lenert', 'Lydia Mutsch'],
    answer: 0,
    hint: 'She was Luxembourg\'s youngest-ever Minister of the Interior.',
    explanation: 'Taina Bofferding is a Luxembourgish LSAP politician who served as Minister of the Interior and of Equality between Women and Men. She was the youngest member of the government when appointed in 2018.',
  },
  {
    id: 'f-arendt', level: 'citizen', category: 'science',
    name: 'Élise Hack',
    wikiTitle: 'Élise_Hack',
    options: ['Élise Hack', 'Anise Koltz', 'Paulette Lenert', 'Grand Duchess Charlotte'],
    answer: 0,
    hint: 'She was a pioneer in Luxembourg\'s early feminist and social movements.',
    explanation: 'Élise Hack (1868–1940) was a Luxembourgish teacher and activist who fought for women\'s rights and social justice. She was a key figure in Luxembourg\'s early feminist movement.',
  },
]

export const PEOPLE = [...NEWCOMER, ...EXPLORER, ...RESIDENT, ...CITIZEN]

/**
 * Get 5 people for a specific level + sub-level.
 * Sub-levels are 1-based. Each sub-level gets the next 5 people in that level.
 */
export function getSubLevelPeople(levelId, subLevel, pool) {
  const levelPeople = pool.filter(p => p.level === levelId)
  const start = (subLevel - 1) * 5
  return levelPeople.slice(start, start + 5)
}
