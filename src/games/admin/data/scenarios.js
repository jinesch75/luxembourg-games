/**
 * Lëtz Admin — Luxembourg daily life & administrative knowledge
 *
 * Each scenario: id, level, category, situation (the scenario text),
 *                options[], answer (0-based), explanation
 *
 * Levels: 'newcomer' | 'explorer' | 'resident' | 'citizen' | 'ambassador'
 * 5 levels × 5 sub-levels × 5 scenarios = 125 scenarios total
 *
 * Categories: housing, work, health, transport, taxes, family, digital, finance
 *
 * Sources: guichet.public.lu, cns.lu, ccss.lu, adem.lu, snct.lu, acl.lu, etc.
 */

// ─── NEWCOMER (Level 1) — First steps in Luxembourg ───────────────────────
const NEWCOMER = [
  // sub-level 1
  {
    id: 'a-commune-register', level: 'newcomer', category: 'housing',
    situation: 'You just moved to Luxembourg. Within how many days must you register with your commune?',
    options: ['8 days', '30 days', '90 days', '6 months'],
    answer: 0,
    explanation: 'Any person who moves to Luxembourg must declare their arrival at the commune (municipality) within 8 days of moving in. You need a valid ID, proof of accommodation, and your rental agreement or property deed.',
  },
  {
    id: 'a-cns-what', level: 'newcomer', category: 'health',
    situation: 'You start a new job in Luxembourg. Which organisation manages your mandatory health insurance?',
    options: ['CNS (Caisse nationale de santé)', 'CCSS (Centre commun de la sécurité sociale)', 'ADEM', 'Mutualité de Luxembourg'],
    answer: 0,
    explanation: 'The CNS (Caisse nationale de santé) is Luxembourg\'s national health fund that manages compulsory health insurance for all residents and cross-border workers. It reimburses medical costs according to fixed tariffs.',
  },
  {
    id: 'a-matricule', level: 'newcomer', category: 'digital',
    situation: 'What is the 13-digit personal identification number used across all Luxembourg administrations?',
    options: ['The matricule (national identification number)', 'The Luxtrust code', 'The MyGuichet PIN', 'The CNS card number'],
    answer: 0,
    explanation: 'The matricule is a unique 13-digit number assigned to every person registered in Luxembourg. It is used for all administrative dealings — taxes, healthcare, social security, and official documents.',
  },
  {
    id: 'a-languages-official', level: 'newcomer', category: 'work',
    situation: 'Which are the three official languages of Luxembourg according to the 1984 Language Law?',
    options: ['Luxembourgish, French, German', 'French, German, English', 'Luxembourgish, French, English', 'French, German, Portuguese'],
    answer: 0,
    explanation: 'The 1984 Language Law established Luxembourgish as the national language, French as the language of legislation, and German alongside French as administrative languages. In practice, French dominates business and administration.',
  },
  {
    id: 'a-myguichet', level: 'newcomer', category: 'digital',
    situation: 'Which online platform is Luxembourg\'s one-stop shop for administrative procedures?',
    options: ['MyGuichet.lu', 'Luxembourg.lu', 'GovJobs.lu', 'Biergerzenter.lu'],
    answer: 0,
    explanation: 'MyGuichet.lu is the official platform where residents can complete most administrative tasks online — from tax declarations to requesting official documents. It requires a Luxtrust product or eID for secure login.',
  },
  // sub-level 2
  {
    id: 'a-ccss-role', level: 'newcomer', category: 'finance',
    situation: 'Which institution collects social security contributions from employers and employees in Luxembourg?',
    options: ['CCSS (Centre commun de la sécurité sociale)', 'CNS', 'ADEM', 'ACD (Administration des contributions directes)'],
    answer: 0,
    explanation: 'The CCSS is the central body that collects all social security contributions — including health, pension, and dependency insurance — from employers, employees, and self-employed persons.',
  },
  {
    id: 'a-adem-role', level: 'newcomer', category: 'work',
    situation: 'You lost your job. Where must you register to receive unemployment benefits?',
    options: ['ADEM (Agence pour le développement de l\'emploi)', 'CCSS', 'Your commune', 'ITM (Inspection du travail et des mines)'],
    answer: 0,
    explanation: 'ADEM is Luxembourg\'s public employment service. You must register with ADEM within specified deadlines to be eligible for unemployment benefits and to access job-seeking support, training, and placement services.',
  },
  {
    id: 'a-luxtrust', level: 'newcomer', category: 'digital',
    situation: 'Which product do you need to securely access MyGuichet.lu and other e-government services?',
    options: ['A Luxtrust product (token, mobile, or smartcard)', 'A VPN connection', 'A dedicated government laptop', 'A special SIM card from POST'],
    answer: 0,
    explanation: 'Luxtrust provides digital certificates used for secure authentication and electronic signatures. Products include the Luxtrust Token (USB key), Luxtrust Mobile, and smartcard-based solutions. These are essential for e-government and e-banking.',
  },
  {
    id: 'a-frontalier', level: 'newcomer', category: 'work',
    situation: 'Approximately how many cross-border workers (frontaliers) commute to Luxembourg daily?',
    options: ['About 220,000', 'About 50,000', 'About 500,000', 'About 100,000'],
    answer: 0,
    explanation: 'Luxembourg has about 220,000 cross-border workers — from France (~120,000), Belgium (~50,000), and Germany (~50,000). They represent nearly half of Luxembourg\'s workforce and are essential to the economy.',
  },
  {
    id: 'a-public-holidays', level: 'newcomer', category: 'work',
    situation: 'How many public holidays does Luxembourg have per year?',
    options: ['11', '8', '14', '10'],
    answer: 0,
    explanation: 'Luxembourg has 11 official public holidays per year, including New Year\'s Day, Easter Monday, Labour Day (1 May), Europe Day (9 May), Ascension, Whit Monday, National Day (23 June), Assumption (15 August), All Saints\' Day, Christmas Day, and St. Stephen\'s Day (26 December).',
  },
  // sub-level 3
  {
    id: 'a-leave-days', level: 'newcomer', category: 'work',
    situation: 'What is the minimum statutory annual leave entitlement for a full-time employee in Luxembourg?',
    options: ['26 working days', '20 working days', '30 working days', '15 working days'],
    answer: 0,
    explanation: 'All full-time employees in Luxembourg are entitled to a minimum of 26 working days (5.2 weeks) of paid annual leave. This is one of the highest statutory minimums in Europe. Some collective agreements grant additional days.',
  },
  {
    id: 'a-transport-free', level: 'newcomer', category: 'transport',
    situation: 'Since March 2020, what is special about public transport in Luxembourg?',
    options: ['It is completely free nationwide', 'It runs 24 hours a day', 'It only accepts contactless payment', 'It is free only for residents'],
    answer: 0,
    explanation: 'Since 1 March 2020, all public transport in Luxembourg — buses, trams, and trains (2nd class) — is free for everyone, including tourists. Luxembourg was the first country in the world to make all public transport free.',
  },
  {
    id: 'a-smic', level: 'newcomer', category: 'finance',
    situation: 'What is the SSM (salaire social minimum) in Luxembourg commonly known as in everyday language?',
    options: ['The minimum wage', 'The median salary', 'The pension base', 'The tax threshold'],
    answer: 0,
    explanation: 'The SSM (salaire social minimum) is Luxembourg\'s minimum wage, which is one of the highest in the EU. It is adjusted periodically by the government and is indexed to inflation (the index system). A higher "qualified" SSM applies to workers with certain qualifications.',
  },
  {
    id: 'a-carte-sejour', level: 'newcomer', category: 'housing',
    situation: 'A non-EU citizen who wants to live and work in Luxembourg needs to apply for which document?',
    options: ['An authorisation to stay (titre de séjour)', 'A Schengen visa only', 'A Luxembourgish passport', 'A CNS membership card'],
    answer: 0,
    explanation: 'Non-EU/EEA nationals must obtain an authorisation to stay (titre de séjour) from the Direction de l\'Immigration. The process typically starts with an application before arrival and involves providing proof of employment, housing, health insurance, and sufficient resources.',
  },
  {
    id: 'a-national-day', level: 'newcomer', category: 'family',
    situation: 'When is Luxembourg\'s National Day celebrated?',
    options: ['23 June', '14 July', '21 March', '26 October'],
    answer: 0,
    explanation: 'Luxembourg\'s National Day is celebrated on 23 June. It is the Grand Duke\'s official birthday celebration (not the actual birthday). Festivities begin the evening of 22 June with a torchlight parade and fireworks across the country.',
  },
  // sub-level 4
  {
    id: 'a-emergency', level: 'newcomer', category: 'health',
    situation: 'What is the single European emergency number you can call in Luxembourg?',
    options: ['112', '911', '999', '15'],
    answer: 0,
    explanation: '112 is the European emergency number, valid across all EU countries including Luxembourg. It connects you to emergency services (ambulance, fire brigade). For police, the dedicated number is 113.',
  },
  {
    id: 'a-post', level: 'newcomer', category: 'digital',
    situation: 'Which company is the main postal and telecommunications provider in Luxembourg?',
    options: ['POST Luxembourg', 'DHL Luxembourg', 'Tango Telecom', 'Proximus Luxembourg'],
    answer: 0,
    explanation: 'POST Luxembourg is the national postal and telecommunications operator. Beyond mail delivery, it provides mobile, internet, and financial services (POST Finance). It is state-owned and one of Luxembourg\'s largest employers.',
  },
  {
    id: 'a-driving-side', level: 'newcomer', category: 'transport',
    situation: 'In Luxembourg, on which side of the road do you drive?',
    options: ['The right side', 'The left side', 'It depends on the region', 'It alternates by day'],
    answer: 0,
    explanation: 'Like all continental European countries, Luxembourg drives on the right side of the road. Speed limits are typically 50 km/h in built-up areas, 90 km/h on national roads, and 130 km/h on motorways.',
  },
  {
    id: 'a-index', level: 'newcomer', category: 'finance',
    situation: 'What is Luxembourg\'s "index" system that affects salaries?',
    options: ['An automatic wage adjustment linked to inflation', 'A stock market index for Luxembourg companies', 'A ranking of employers by salary', 'A government-set maximum salary cap'],
    answer: 0,
    explanation: 'Luxembourg\'s index system automatically adjusts all salaries, pensions, and social benefits by 2.5% when the consumer price index rises by that amount. This indexation protects purchasing power against inflation and is a distinctive feature of the Luxembourg economy.',
  },
  {
    id: 'a-commune-count', level: 'newcomer', category: 'housing',
    situation: 'Approximately how many communes (municipalities) does Luxembourg have?',
    options: ['About 100', 'About 50', 'About 200', 'About 30'],
    answer: 0,
    explanation: 'Luxembourg currently has 100 communes (municipalities), reduced from 116 through mergers. Each commune has an elected communal council and a mayor (bourgmestre). The City of Luxembourg is the largest commune by population.',
  },
  // sub-level 5
  {
    id: 'a-eu-institutions', level: 'newcomer', category: 'work',
    situation: 'Luxembourg hosts several EU institutions. Which of these is based on the Kirchberg plateau?',
    options: ['The European Court of Justice', 'The European Parliament (main chamber)', 'The European Central Bank', 'NATO Headquarters'],
    answer: 0,
    explanation: 'The European Court of Justice (CJEU) is based in Luxembourg on the Kirchberg plateau, along with the European Court of Auditors, the European Investment Bank, and parts of the European Commission. Luxembourg is one of three capitals of the EU.',
  },
  {
    id: 'a-pharmacie-garde', level: 'newcomer', category: 'health',
    situation: 'You need medication on a Sunday. What is the system for finding an open pharmacy?',
    options: ['Pharmacie de garde (duty pharmacy rota)', 'All pharmacies are open on Sundays', 'You must go to the hospital', 'Pharmacies deliver on Sundays via app'],
    answer: 0,
    explanation: 'Luxembourg has a "pharmacie de garde" rotation system. At least one pharmacy in each area is open outside normal hours, on Sundays, and on public holidays. You can find the current duty pharmacy at pharmacie.lu or by calling 80025 for information.',
  },
  {
    id: 'a-tap-water', level: 'newcomer', category: 'housing',
    situation: 'Is tap water safe to drink in Luxembourg?',
    options: ['Yes, it is safe and high quality throughout the country', 'Only in Luxembourg City', 'No, you should always buy bottled water', 'Only if you have a filter installed'],
    answer: 0,
    explanation: 'Tap water in Luxembourg is perfectly safe to drink and of high quality. It is regularly tested and meets strict EU standards. About half of Luxembourg\'s drinking water comes from the upper Sûre lake reservoir, and the rest from groundwater sources.',
  },
  {
    id: 'a-recycling', level: 'newcomer', category: 'housing',
    situation: 'What colour is the "Valorlux" bag used for collecting packaging waste (plastic, metal, cartons)?',
    options: ['Blue', 'Yellow', 'Green', 'White'],
    answer: 0,
    explanation: 'The blue Valorlux bag is used throughout Luxembourg for collecting packaging waste — plastic bottles and containers, metal cans, and drink cartons. Glass goes to bottle banks, and paper has its own collection. Each commune also has a recycling centre (Recycling Center).',
  },
  {
    id: 'a-speed-motorway', level: 'newcomer', category: 'transport',
    situation: 'What is the maximum speed limit on Luxembourg motorways?',
    options: ['130 km/h', '120 km/h', '110 km/h', 'No limit'],
    answer: 0,
    explanation: 'The speed limit on Luxembourg\'s motorways is 130 km/h (reduced to 110 km/h in rain). On national roads it is 90 km/h, and in built-up areas 50 km/h. Speed cameras are common and fines are strict.',
  },
]

// ─── EXPLORER (Level 2) — Getting settled ─────────────────────────────────
const EXPLORER = [
  // sub-level 1
  {
    id: 'a-tax-class', level: 'explorer', category: 'taxes',
    situation: 'In Luxembourg\'s tax system, which tax class applies to a married couple filing jointly?',
    options: ['Class 2', 'Class 1', 'Class 1a', 'Class 3'],
    answer: 0,
    explanation: 'Luxembourg has three main tax classes: Class 1 (single, no dependants), Class 1a (single with dependants, or aged 65+), and Class 2 (married couples or civil partners filing jointly). Class 2 generally offers the most favourable tax rates.',
  },
  {
    id: 'a-cns-tiers-payant', level: 'explorer', category: 'health',
    situation: 'You see a doctor in Luxembourg. How does the standard reimbursement process work?',
    options: ['You pay upfront, then the CNS reimburses you', 'The doctor bills the CNS directly — you pay nothing', 'You need private insurance to see any doctor', 'You pay a monthly flat fee for unlimited visits'],
    answer: 0,
    explanation: 'In Luxembourg\'s standard system, patients pay the doctor upfront and then submit the receipt to the CNS for reimbursement (usually 80–100% of the official tariff). In hospitals, the "tiers payant" system applies — the CNS pays its share directly.',
  },
  {
    id: 'a-bail-caution', level: 'explorer', category: 'housing',
    situation: 'When renting in Luxembourg, what is the maximum deposit (caution) a landlord can legally require?',
    options: ['2 months\' rent', '1 month\'s rent', '6 months\' rent', '3 months\' rent'],
    answer: 0,
    explanation: 'Since August 2024, a landlord can legally ask for a rental deposit of up to 2 months\' base rent (previously 3 months). This must be held in a dedicated bank account. It is returned at the end of the lease, minus any deductions for damages beyond normal wear and tear.',
  },
  {
    id: 'a-mvehicle-control', level: 'explorer', category: 'transport',
    situation: 'How often must cars in Luxembourg undergo a mandatory technical inspection (contrôle technique)?',
    options: ['Every year after the car is 4 years old', 'Every 2 years', 'Every 6 months', 'Only when changing ownership'],
    answer: 0,
    explanation: 'New cars are exempt from technical inspection for the first 4 years. After that, a yearly inspection at the SNCT (Société nationale de contrôle technique) is mandatory. The SNCT has stations across the country.',
  },
  {
    id: 'a-pension-pillar', level: 'explorer', category: 'finance',
    situation: 'Luxembourg\'s pension system has three pillars. What is the first pillar?',
    options: ['Mandatory state pension (CNAP)', 'Employer-sponsored pension plan', 'Private savings scheme', 'EU pension fund'],
    answer: 0,
    explanation: 'The first pillar is the mandatory state pension managed by the CNAP (Caisse nationale d\'assurance pension). It is funded by contributions from employees, employers, and the state. The second pillar is employer-sponsored, and the third is voluntary private savings.',
  },
  // sub-level 2
  {
    id: 'a-cheque-service', level: 'explorer', category: 'family',
    situation: 'What is the "chèque-service accueil" (CSA) system for families in Luxembourg?',
    options: ['Government-subsidised childcare vouchers', 'A school meal payment system', 'A healthcare cheque for children', 'A housing benefit for young families'],
    answer: 0,
    explanation: 'The CSA provides subsidised childcare for children aged 0–12. Families receive up to 60 free hours per week of childcare during school weeks (and more during holidays). It covers crèches, maisons relais, and approved childminders.',
  },
  {
    id: 'a-itm', level: 'explorer', category: 'work',
    situation: 'Which body inspects working conditions and enforces labour law in Luxembourg?',
    options: ['ITM (Inspection du travail et des mines)', 'ADEM', 'CCSS', 'The Ministry of Justice'],
    answer: 0,
    explanation: 'The ITM (Inspection du travail et des mines) ensures compliance with labour law, workplace safety, and working conditions. It handles worker complaints, inspects workplaces, and can impose sanctions on non-compliant employers.',
  },
  {
    id: 'a-guichet-birth', level: 'explorer', category: 'family',
    situation: 'You just had a baby in Luxembourg. Within how many days must you register the birth at the civil registry?',
    options: ['5 days', '30 days', '10 days', '1 day'],
    answer: 0,
    explanation: 'A birth must be declared at the civil registry office (état civil) of the commune where the child was born within 5 working days. You need the hospital birth certificate, parents\' IDs, and the family booklet (livret de famille) if applicable.',
  },
  {
    id: 'a-rent-commission', level: 'explorer', category: 'housing',
    situation: 'You have a dispute with your landlord about the rent amount. Which body can you turn to?',
    options: ['The Rent Commission (Commission des loyers)', 'The police', 'ADEM', 'The CNS'],
    answer: 0,
    explanation: 'The Commission des loyers is a communal body that arbitrates disputes between tenants and landlords about rent amounts. If conciliation fails, the case can go before the Justice de Paix (magistrate\'s court).',
  },
  {
    id: 'a-bank-account', level: 'explorer', category: 'finance',
    situation: 'What documents do you typically need to open a bank account in Luxembourg?',
    options: ['Valid ID, proof of address, and proof of income or employment', 'Just a valid passport', 'A notarised letter from your employer', 'Only your matricule number'],
    answer: 0,
    explanation: 'Opening a bank account in Luxembourg typically requires a valid ID or passport, proof of address (e.g., a utility bill or commune registration certificate), and proof of professional activity or income. Banks may request additional documents for compliance reasons.',
  },
  // sub-level 3
  {
    id: 'a-congeparental', level: 'explorer', category: 'family',
    situation: 'What is the maximum duration of full-time parental leave in Luxembourg for each parent?',
    options: ['6 months per parent', '3 months per parent', '12 months per parent', '1 month per parent'],
    answer: 0,
    explanation: 'Each parent is entitled to 4 or 6 months of full-time parental leave (or equivalent part-time). One period must be taken right after maternity/paternity leave, and the other before the child turns 6. The allowance is paid by the CAE (Caisse pour l\'avenir des enfants).',
  },
  {
    id: 'a-acd', level: 'explorer', category: 'taxes',
    situation: 'Which administration is responsible for direct taxation (income tax) in Luxembourg?',
    options: ['ACD (Administration des contributions directes)', 'AED (Administration de l\'enregistrement)', 'CCSS', 'Customs and Excise'],
    answer: 0,
    explanation: 'The ACD handles income tax for individuals and corporations — declarations, assessments, and collection. The AED handles indirect taxes like VAT and registration duties. Together they form the core of Luxembourg\'s tax administration.',
  },
  {
    id: 'a-school-system', level: 'explorer', category: 'family',
    situation: 'At what age does compulsory education begin in Luxembourg?',
    options: ['4 years old', '5 years old', '6 years old', '3 years old'],
    answer: 0,
    explanation: 'Compulsory schooling in Luxembourg starts at age 4 (with early childhood education / Spillschoul) and lasts until age 16. The public school system teaches in Luxembourgish and German first, with French introduced in the second year of primary school.',
  },
  {
    id: 'a-vignette', level: 'explorer', category: 'transport',
    situation: 'Does Luxembourg require a motorway vignette (toll sticker) for cars?',
    options: ['No, motorways are free for all vehicles', 'Yes, an annual vignette is required', 'Only for foreign-registered cars', 'Only for trucks over 3.5 tons'],
    answer: 0,
    explanation: 'Luxembourg does not charge tolls or require vignettes for cars on its motorways — they are completely free. However, trucks over 7.5 tons must use an electronic toll system. Note that neighboring countries (Switzerland, Austria) do require vignettes.',
  },
  {
    id: 'a-assurance-dependance', level: 'explorer', category: 'health',
    situation: 'What does the "assurance dépendance" (dependency insurance) cover in Luxembourg?',
    options: ['Care for people who need help with daily activities due to illness or disability', 'Car insurance against accidents', 'Home insurance for natural disasters', 'Travel insurance for EU residents'],
    answer: 0,
    explanation: 'The assurance dépendance is a mandatory social insurance that covers the cost of care for people who need regular assistance with daily activities (hygiene, meals, mobility) due to physical or mental conditions. It is managed by the CNS.',
  },
  // sub-level 4
  {
    id: 'a-mobility-card', level: 'explorer', category: 'transport',
    situation: 'What is the "mKaart" in Luxembourg\'s public transport system?',
    options: ['A personal smart card for first-class train travel and other premium services', 'A driver\'s licence in card format', 'A parking permit for Luxembourg City', 'A bicycle-sharing membership card'],
    answer: 0,
    explanation: 'The mKaart is a personal smart card used for first-class train travel (since second class is free), reduced parking, and future mobility services. It can be loaded with subscriptions and can integrate with vel\'oh bike-sharing.',
  },
  {
    id: 'a-notary-role', level: 'explorer', category: 'housing',
    situation: 'When buying property in Luxembourg, which professional must handle the sale contract?',
    options: ['A notary (notaire)', 'A real estate agent', 'A lawyer', 'The commune mayor'],
    answer: 0,
    explanation: 'In Luxembourg, all real estate purchases must go through a notary, who drafts and authenticates the sale deed (acte de vente), ensures legal compliance, registers the transaction with the Mortgage Registry, and collects transfer taxes on behalf of the state.',
  },
  {
    id: 'a-cae', level: 'explorer', category: 'family',
    situation: 'Which institution manages family benefits (allocations familiales) in Luxembourg?',
    options: ['CAE (Caisse pour l\'avenir des enfants)', 'CNS', 'CCSS', 'Ministry of Family Affairs'],
    answer: 0,
    explanation: 'The CAE (Caisse pour l\'avenir des enfants) manages all family benefits including child allowances, back-to-school allowances, birth grants, parental leave allowances, and the chèque-service accueil.',
  },
  {
    id: 'a-tax-filing', level: 'explorer', category: 'taxes',
    situation: 'By what date must Luxembourg residents typically submit their annual income tax return?',
    options: ['31 March of the following year', '30 June of the following year', '31 December of the same year', '15 April of the following year'],
    answer: 0,
    explanation: 'The standard deadline for filing annual income tax returns in Luxembourg is 31 March of the year following the tax year. Extensions may be available on request. Tax returns can be filed on paper (form 100) or online via MyGuichet.lu.',
  },
  {
    id: 'a-veloh', level: 'explorer', category: 'transport',
    situation: 'What is the name of Luxembourg City\'s public bike-sharing system?',
    options: ['vel\'oh!', 'LuxBike', 'CityWheel', 'Pedal.lu'],
    answer: 0,
    explanation: 'vel\'oh! is the City of Luxembourg\'s public e-bike sharing system operated by JCDecaux. It has over 100 stations across the city and surrounding areas. The first 30 minutes are free for subscribers, making it ideal for short trips.',
  },
  // sub-level 5
  {
    id: 'a-cnap', level: 'explorer', category: 'finance',
    situation: 'What is the CNAP responsible for in Luxembourg?',
    options: ['Managing the mandatory state pension system', 'Managing the national health fund', 'Collecting customs duties', 'Regulating the banking sector'],
    answer: 0,
    explanation: 'The CNAP (Caisse nationale d\'assurance pension) manages Luxembourg\'s mandatory state pension scheme. It calculates and pays retirement pensions, disability pensions, and survivor\'s pensions based on contribution history.',
  },
  {
    id: 'a-snct', level: 'explorer', category: 'transport',
    situation: 'Where do you go for the mandatory vehicle technical inspection in Luxembourg?',
    options: ['SNCT (Société nationale de contrôle technique)', 'ACL (Automobile Club)', 'Any car dealership', 'The communal police station'],
    answer: 0,
    explanation: 'The SNCT is Luxembourg\'s sole authorised body for vehicle technical inspections. Stations are located across the country (Sandweiler, Esch, Wilwerwiltz, etc.). You can book appointments online at snct.lu.',
  },
  {
    id: 'a-double-taxation', level: 'explorer', category: 'taxes',
    situation: 'A frontalier who works from home — where are they taxed if they exceed the tolerated home-office days?',
    options: ['In their country of residence for the excess days', 'Always in Luxembourg regardless', 'They are exempt from taxation', 'Only in the country with lower tax rates'],
    answer: 0,
    explanation: 'Luxembourg has bilateral tax treaties with its neighbors. Frontaliers may work from home up to a threshold (e.g., 34 days for Belgium, 34 for France, 34 for Germany) without losing their Luxembourg-only taxation status. Exceeding those days triggers taxation in the residence country for those excess days.',
  },
  {
    id: 'a-eau-distribution', level: 'explorer', category: 'housing',
    situation: 'Who provides tap water in Luxembourg — is it a national utility or managed locally?',
    options: ['Each commune manages its own water supply', 'A single national company (POST Water)', 'A private company chosen by the tenant', 'The EU manages it directly'],
    answer: 0,
    explanation: 'Water distribution in Luxembourg is managed at the communal level. Each commune is responsible for its own water supply, quality, and pricing. The SEBES (Syndicat des Eaux du Barrage d\'Esch-sur-Sûre) supplies drinking water to many communes from the upper Sûre dam.',
  },
  {
    id: 'a-elections-commune', level: 'explorer', category: 'housing',
    situation: 'Can a non-Luxembourgish EU citizen vote in communal elections?',
    options: ['Yes, after registering on the electoral roll', 'No, only Luxembourg nationals can vote', 'Only after 10 years of residence', 'Only if they hold a permanent residence permit'],
    answer: 0,
    explanation: 'Since 2022, non-Luxembourgish residents who are EU citizens can vote in communal elections by registering on the electoral roll, with no minimum residence requirement. Voting in national (legislative) elections is reserved for Luxembourg nationals.',
  },
]

// ─── RESIDENT (Level 3) — Navigating the system ──────────────────────────
const RESIDENT = [
  // sub-level 1
  {
    id: 'a-bierger-budget', level: 'resident', category: 'finance',
    situation: 'What is a "Biergerbudget" that some communes in Luxembourg offer?',
    options: ['A participatory budget where residents propose and vote on projects', 'A personal tax calculator tool', 'A savings account with government matching', 'A voucher for free public services'],
    answer: 0,
    explanation: 'Several Luxembourg communes have introduced a "Biergerbudget" (citizen budget) — a participatory budgeting process where residents can propose projects and vote on how a portion of the communal budget is spent.',
  },
  {
    id: 'a-carte-europeenne', level: 'resident', category: 'health',
    situation: 'What does the European Health Insurance Card (CEAM) allow you to do when travelling in the EU?',
    options: ['Access necessary healthcare in other EU/EEA countries under local conditions', 'Get free private healthcare abroad', 'Transfer your Luxembourg doctor to another country', 'Skip queues at foreign hospitals'],
    answer: 0,
    explanation: 'The CEAM (Carte Européenne d\'Assurance Maladie) entitles you to necessary healthcare during temporary stays in EU/EEA countries and Switzerland, under the same conditions as locally insured persons. In Luxembourg, it is issued by the CNS.',
  },
  {
    id: 'a-bail-duration', level: 'resident', category: 'housing',
    situation: 'What is the typical minimum notice period to terminate a standard residential lease in Luxembourg?',
    options: ['3 months', '1 month', '6 months', '2 weeks'],
    answer: 0,
    explanation: 'Tenants must typically give 3 months\' notice to terminate a residential lease. The notice period starts on the 15th of the month or the last day of the month. Landlords generally need 6 months\' notice and must provide a valid legal reason.',
  },
  {
    id: 'a-deduction-interet', level: 'resident', category: 'taxes',
    situation: 'Can you deduct mortgage interest from your taxable income in Luxembourg?',
    options: ['Yes, up to certain annual limits that depend on how long you\'ve had the loan', 'No, mortgage interest is never deductible', 'Only if the property is rented out', 'Only for loans taken before 2015'],
    answer: 0,
    explanation: 'Mortgage interest on your primary residence is tax-deductible in Luxembourg. The deductible amount decreases over time: it is highest during the first years of the mortgage (€2,000 per person for the first 5 years, then €1,500, then €1,000 after 10 years).',
  },
  {
    id: 'a-apprenticeship', level: 'resident', category: 'work',
    situation: 'What is a "DAP" in the Luxembourg education system?',
    options: ['A vocational diploma (Diplôme d\'aptitude professionnelle)', 'A university degree', 'A driving aptitude permit', 'A digital access pass'],
    answer: 0,
    explanation: 'The DAP (Diplôme d\'aptitude professionnelle) is a vocational qualification typically achieved after 3 years of apprenticeship combining school and on-the-job training. It covers trades like electrician, cook, mechanic, and many others.',
  },
  // sub-level 2
  {
    id: 'a-fonds-logement', level: 'resident', category: 'housing',
    situation: 'Which public body develops affordable housing in Luxembourg?',
    options: ['The Fonds du Logement', 'POST Luxembourg', 'The Chamber of Commerce', 'ADEM'],
    answer: 0,
    explanation: 'The Fonds du Logement is a public institution that builds and manages affordable housing (social housing) across Luxembourg. It sells and rents properties below market prices to eligible households based on income criteria.',
  },
  {
    id: 'a-pension-age', level: 'resident', category: 'finance',
    situation: 'What is the standard retirement age in Luxembourg?',
    options: ['65 years', '60 years', '67 years', '62 years'],
    answer: 0,
    explanation: 'The standard retirement age in Luxembourg is 65, provided you have at least 10 years of pension contributions. Early retirement at 57 is possible with 40 years of contributions, or at 60 with 40 years including certain conditions.',
  },
  {
    id: 'a-mediation', level: 'resident', category: 'work',
    situation: 'Before going to labour court, what step is usually required in an employment dispute in Luxembourg?',
    options: ['Conciliation before the president of the labour tribunal', 'Mediation by your commune', 'Arbitration by ADEM', 'A complaint to the European Court of Justice'],
    answer: 0,
    explanation: 'In Luxembourg, most employment disputes must first go through a conciliation attempt before the president of the Tribunal du travail. If conciliation fails, the case proceeds to a formal hearing before the labour court.',
  },
  {
    id: 'a-prime-maison', level: 'resident', category: 'housing',
    situation: 'What government subsidies exist for renovating your home for energy efficiency in Luxembourg?',
    options: ['PRIMe House grants for insulation, heating, and renewable energy', 'Free renovation by state workers', 'Tax-free renovation loans from CCSS', 'None — energy renovation is not subsidised'],
    answer: 0,
    explanation: 'PRIMe House is Luxembourg\'s subsidy programme for sustainable housing renovation. It provides grants for insulation, efficient heating systems, solar panels, heat pumps, and more. Applications go through the Ministry of Energy and Spatial Planning.',
  },
  {
    id: 'a-nationality-conditions', level: 'resident', category: 'housing',
    situation: 'One path to Luxembourg nationality requires continuous residence of how many years?',
    options: ['5 years (with the last year uninterrupted)', '1 year', '3 years', '10 years'],
    answer: 0,
    explanation: 'One of the main paths to Luxembourg nationality requires 5 years of legal residence (with the last year uninterrupted), passing a Luxembourgish language test (spoken A2/listening B1), and completing a "Vivre ensemble au Grand-Duché de Luxembourg" civic course.',
  },
  // sub-level 3
  {
    id: 'a-declaration-impots', level: 'resident', category: 'taxes',
    situation: 'Which form is used for the annual income tax return for individuals in Luxembourg?',
    options: ['Model 100', 'Model 200', 'Form 1040', 'Declaration F1'],
    answer: 0,
    explanation: 'The "Modèle 100" is the standard annual income tax return form for individuals in Luxembourg. It can be filed on paper or electronically via MyGuichet.lu. Married couples in Class 2 file a single joint return.',
  },
  {
    id: 'a-aide-juridique', level: 'resident', category: 'finance',
    situation: 'Can low-income residents in Luxembourg access free legal aid?',
    options: ['Yes, through the assistance judiciaire system', 'No, legal aid is not available in Luxembourg', 'Only for criminal cases', 'Only for EU citizens'],
    answer: 0,
    explanation: 'Luxembourg provides "assistance judiciaire" (legal aid) to residents whose income is below a certain threshold. Eligible persons are assigned a lawyer free of charge. Applications are made to the president of the Bar Association (Bâtonnier).',
  },
  {
    id: 'a-frontalier-healthcare', level: 'resident', category: 'health',
    situation: 'Can a cross-border worker choose to receive healthcare in Luxembourg or in their country of residence?',
    options: ['Yes, they have the right to healthcare in both countries', 'Only in Luxembourg where they work', 'Only in their country of residence', 'Only with private supplementary insurance'],
    answer: 0,
    explanation: 'Cross-border workers insured in Luxembourg can access healthcare both in Luxembourg and in their country of residence. They receive an S1 form from the CNS to register with the health system in their home country.',
  },
  {
    id: 'a-parking-residents', level: 'resident', category: 'transport',
    situation: 'How can Luxembourg City residents get preferential parking in their neighbourhood?',
    options: ['By applying for a resident parking vignette from the city', 'Parking is free for all residents everywhere', 'By registering their car with the police', 'Residents cannot get special parking rights'],
    answer: 0,
    explanation: 'Luxembourg City residents can apply for a resident parking vignette (vignette riverain) that allows preferential parking in designated zones near their home. The vignette is renewed annually and costs a modest fee.',
  },
  {
    id: 'a-consumer-protection', level: 'resident', category: 'finance',
    situation: 'Where can you file a consumer complaint in Luxembourg if a business treated you unfairly?',
    options: ['The ULC (Union Luxembourgeoise des Consommateurs)', 'The police', 'ADEM', 'The commune'],
    answer: 0,
    explanation: 'The ULC is Luxembourg\'s main consumer protection organisation. It advises consumers, mediates disputes, and can take legal action. For EU cross-border disputes, the Centre Européen des Consommateurs (CEC Luxembourg) can also help.',
  },
  // sub-level 4
  {
    id: 'a-cni-validity', level: 'resident', category: 'digital',
    situation: 'A Luxembourg national ID card (carte d\'identité) for adults is valid for how many years?',
    options: ['10 years', '5 years', '15 years', 'Lifetime'],
    answer: 0,
    explanation: 'A Luxembourg national ID card is valid for 10 years for adults (5 years for minors under 15). It is issued by the commune of residence and serves as a travel document within the EU/EEA and for authentication with Luxtrust electronic functions.',
  },
  {
    id: 'a-declaration-accident', level: 'resident', category: 'work',
    situation: 'If you have a work accident in Luxembourg, which institution manages the insurance and compensation?',
    options: ['AAA (Association d\'assurance accident)', 'CNS', 'CCSS', 'ITM'],
    answer: 0,
    explanation: 'The AAA (Association d\'assurance accident) manages Luxembourg\'s mandatory work accident insurance. It covers medical costs, disability pensions, and compensation for workplace accidents and occupational diseases, for all employed persons.',
  },
  {
    id: 'a-energie-passeport', level: 'resident', category: 'housing',
    situation: 'What is an "energy passport" (certificat de performance énergétique) required for in Luxembourg?',
    options: ['Selling or renting a property', 'Registering a new car', 'Applying for a business licence', 'Connecting to the electricity grid'],
    answer: 0,
    explanation: 'An energy performance certificate is mandatory when selling or renting a building or apartment in Luxembourg. It rates the property\'s energy efficiency from A (most efficient) to I (least efficient) and must be presented to potential buyers or tenants.',
  },
  {
    id: 'a-conge-collectif', level: 'resident', category: 'work',
    situation: 'What is the "congé collectif" that affects the construction sector every summer?',
    options: ['A mandatory sector-wide collective holiday period', 'A mass hiring event for seasonal workers', 'A training programme for apprentices', 'A government construction freeze'],
    answer: 0,
    explanation: 'The congé collectif is a mandatory collective holiday period, typically 2–3 weeks in August, when the entire construction and related sectors close down. Dates are set annually by grand-ducal regulation.',
  },
  {
    id: 'a-tva-rates', level: 'resident', category: 'taxes',
    situation: 'What is the standard VAT (TVA) rate in Luxembourg?',
    options: ['17%', '21%', '19%', '15%'],
    answer: 0,
    explanation: 'Luxembourg\'s standard VAT rate is 17%, one of the lowest in the EU. Reduced rates apply to certain goods and services: 14% (wines, advertising), 8% (gas, electricity, hairdressing), and 3% (food, books, children\'s clothing, medicines).',
  },
  // sub-level 5
  {
    id: 'a-ombudsman', level: 'resident', category: 'digital',
    situation: 'What is the role of the Ombudsman (Médiateur) in Luxembourg?',
    options: ['To mediate disputes between citizens and public administrations', 'To manage the national budget', 'To lead the judiciary', 'To represent Luxembourg abroad'],
    answer: 0,
    explanation: 'The Ombudsman (Médiateur du Grand-Duché de Luxembourg) is an independent institution that helps resolve disputes between citizens and public administrations when normal complaint procedures have failed. The service is free.',
  },
  {
    id: 'a-guichet-entreprise', level: 'resident', category: 'work',
    situation: 'You want to start your own business in Luxembourg. Which body must grant you a business permit?',
    options: ['The Ministry of Economy (Direction générale PME)', 'ADEM', 'Your commune', 'The Chamber of Commerce only'],
    answer: 0,
    explanation: 'The Ministry of Economy\'s Direction générale des classes moyennes issues business permits (autorisation d\'établissement) in Luxembourg. You must demonstrate professional qualifications and good repute. The House of Entrepreneurship offers guidance through the process.',
  },
  {
    id: 'a-mutuelle', level: 'resident', category: 'health',
    situation: 'What role do "mutuelles" (mutual insurance societies) play alongside the CNS?',
    options: ['They provide supplementary health coverage beyond what the CNS reimburses', 'They replace the CNS entirely', 'They manage pension funds', 'They are trade unions'],
    answer: 0,
    explanation: 'Mutuelles in Luxembourg provide complementary health insurance that covers costs not fully reimbursed by the CNS — such as dental care, optical, alternative medicine, or private hospital rooms. Membership is voluntary.',
  },
  {
    id: 'a-cadastre', level: 'resident', category: 'housing',
    situation: 'What is the ACT (Administration du cadastre et de la topographie) responsible for?',
    options: ['Land registry, surveying, and mapping of Luxembourg', 'Collecting communal taxes', 'Managing social housing', 'Traffic management and road planning'],
    answer: 0,
    explanation: 'The ACT manages Luxembourg\'s land registry (cadastre), official maps, geodata, and property boundaries. It is essential for real estate transactions, construction projects, and spatial planning. The Geoportail.lu website provides public access to geographic data.',
  },
  {
    id: 'a-driving-licence-exchange', level: 'resident', category: 'transport',
    situation: 'Can you exchange a non-EU driving licence for a Luxembourg one?',
    options: ['Yes, if your country has a reciprocal agreement with Luxembourg', 'No, you must always retake the driving test', 'Yes, automatically for all countries', 'Only if you have lived in Luxembourg for 10+ years'],
    answer: 0,
    explanation: 'Luxembourg has reciprocal driving licence exchange agreements with certain non-EU countries. If your country is on the list, you can exchange your licence without retaking the test. Otherwise, you must pass both the theory and practical driving exams.',
  },
]

// ─── CITIZEN (Level 4) — Deep knowledge ──────────────────────────────────
const CITIZEN = [
  // sub-level 1
  {
    id: 'a-chamber-deputies', level: 'citizen', category: 'digital',
    situation: 'How many members does the Chambre des Députés (Luxembourg\'s parliament) have?',
    options: ['60', '100', '45', '80'],
    answer: 0,
    explanation: 'The Chambre des Députés has 60 members elected every 5 years through proportional representation in 4 constituencies. It is Luxembourg\'s legislative body and votes on all laws, the national budget, and treaties.',
  },
  {
    id: 'a-conseil-etat', level: 'citizen', category: 'digital',
    situation: 'What is the role of the Conseil d\'État in Luxembourg\'s legislative process?',
    options: ['It gives advisory opinions on draft legislation before parliamentary vote', 'It is the supreme court', 'It manages the civil service', 'It elects the Prime Minister'],
    answer: 0,
    explanation: 'The Conseil d\'État (Council of State) is an advisory body of 21 members that reviews all draft laws and provides opinions to the Chambre des Députés. It can issue a "formal opposition" that requires a second parliamentary vote, acting as a constitutional safeguard.',
  },
  {
    id: 'a-bierger-center', level: 'citizen', category: 'digital',
    situation: 'What service do Biergerzenter (citizen centres) provide in Luxembourg City?',
    options: ['A one-stop shop for communal administrative services', 'A shopping centre for residents', 'A cultural events venue', 'A citizen militia headquarters'],
    answer: 0,
    explanation: 'The Biergerzenter are citizen service centres of the City of Luxembourg where residents can handle most communal procedures in person — from registering their address, requesting certificates, to paying communal taxes.',
  },
  {
    id: 'a-cnpd', level: 'citizen', category: 'digital',
    situation: 'Which Luxembourg authority is responsible for data protection (GDPR enforcement)?',
    options: ['CNPD (Commission nationale pour la protection des données)', 'The police', 'POST Luxembourg', 'The Ministry of Justice'],
    answer: 0,
    explanation: 'The CNPD is Luxembourg\'s independent data protection authority that enforces the GDPR. It handles complaints from citizens about data misuse, advises public and private bodies, and can impose fines on organisations that violate data protection rules.',
  },
  {
    id: 'a-tri-partite', level: 'citizen', category: 'work',
    situation: 'What is the "Tripartite" in Luxembourg\'s social and economic governance?',
    options: ['A negotiation forum between government, employers, and trade unions', 'A three-party political coalition', 'A trilingual administration policy', 'A three-step tax appeal process'],
    answer: 0,
    explanation: 'The Tripartite (or Tripartite Coordination Committee) brings together the government, employer organisations, and trade unions to negotiate on major economic and social issues — especially during crises. It has shaped key policies like the index system and labour reforms.',
  },
  // sub-level 2
  {
    id: 'a-referendum', level: 'citizen', category: 'digital',
    situation: 'In the 2015 referendum, Luxembourg voted on three questions. Which was NOT one of them?',
    options: ['Joining the eurozone', 'Voting rights for foreign residents in legislative elections', 'Lowering the voting age to 16', 'Limiting ministerial mandates to 10 years'],
    answer: 0,
    explanation: 'The 2015 referendum asked about (1) voting rights for non-citizen residents in legislative elections, (2) lowering the voting age to 16, and (3) limiting ministerial mandates to 10 years. All three proposals were rejected by a large majority.',
  },
  {
    id: 'a-csl', level: 'citizen', category: 'work',
    situation: 'What is the CSL (Chambre des salariés) and what power does it have?',
    options: ['A professional chamber that represents all private-sector employees and advises on legislation', 'A courtroom for salary disputes', 'A government ministry for employment', 'A trade union federation'],
    answer: 0,
    explanation: 'The CSL (Chambre des salariés / Arbeitnehmerkammer) represents the interests of all employees, retirees, and job seekers in the private sector. It gives mandatory opinions on draft laws affecting workers and provides training, studies, and legal guidance.',
  },
  {
    id: 'a-superdreckskescht', level: 'citizen', category: 'housing',
    situation: 'What is the "SuperDrecksKëscht" in Luxembourg?',
    options: ['A national programme for the collection of hazardous and special waste', 'A luxury waste bin brand', 'A recycling-themed restaurant', 'A children\'s cartoon about littering'],
    answer: 0,
    explanation: 'The SuperDrecksKëscht (SDK) is Luxembourg\'s award-winning national programme for collecting and managing hazardous household waste, old electronics, batteries, paints, and chemicals. SDK collection points and mobile collections are available in all communes.',
  },
  {
    id: 'a-protection-sites', level: 'citizen', category: 'housing',
    situation: 'What does Luxembourg\'s Sites et Monuments Nationaux (SSMN) protect?',
    options: ['The country\'s architectural heritage and historic monuments', 'National parks and forests', 'Luxembourg\'s sports stadiums', 'The EU quarter buildings'],
    answer: 0,
    explanation: 'The SSMN (Service des sites et monuments nationaux) is responsible for protecting, conserving, and restoring Luxembourg\'s built heritage — from castles and churches to historic town centres. It also advises on restoration projects and classifies protected buildings.',
  },
  {
    id: 'a-geoportail', level: 'citizen', category: 'digital',
    situation: 'What can you find on map.geoportail.lu?',
    options: ['Official maps, land plots, zoning plans, and geographic data of Luxembourg', 'Public transport schedules', 'Weather forecasts', 'Restaurant reviews and ratings'],
    answer: 0,
    explanation: 'The Geoportail.lu platform provides official geographic information for Luxembourg — including cadastral maps, building footprints, zoning plans (PAG/PAP), aerial photos, flood zones, and environmental data. It is managed by the ACT.',
  },
  // sub-level 3
  {
    id: 'a-registre-commerce', level: 'citizen', category: 'work',
    situation: 'Where must all companies in Luxembourg be registered?',
    options: ['The RCS (Registre de Commerce et des Sociétés)', 'The Chamber of Commerce only', 'The commune where the business operates', 'The ACD (tax administration)'],
    answer: 0,
    explanation: 'All companies and commercial entities in Luxembourg must be registered with the RCS (Registre de Commerce et des Sociétés), managed by the LBR (Luxembourg Business Registers). The RCS number is required for all official and commercial activities.',
  },
  {
    id: 'a-liser', level: 'citizen', category: 'finance',
    situation: 'What is LISER in Luxembourg?',
    options: ['A public research institute for socio-economic studies', 'A lottery company', 'A stock exchange subsidiary', 'A labour inspection service'],
    answer: 0,
    explanation: 'LISER (Luxembourg Institute of Socio-Economic Research) is a public research centre that studies living conditions, labour markets, urban development, and social policies. Its research directly informs Luxembourg government policy decisions.',
  },
  {
    id: 'a-pacte-logement', level: 'citizen', category: 'housing',
    situation: 'What is the "Pacte Logement 2.0" between the state and communes?',
    options: ['An agreement to increase affordable housing construction in each commune', 'A law fixing maximum rent prices', 'A plan to build a new city', 'An insurance pact for homeowners'],
    answer: 0,
    explanation: 'The Pacte Logement 2.0 is a partnership between the Luxembourg state and communes to tackle the housing crisis. Participating communes commit to creating affordable housing, mobilising unused land, and increasing housing supply in exchange for state funding.',
  },
  {
    id: 'a-fondation-idea', level: 'citizen', category: 'finance',
    situation: 'What is the IDEA Foundation linked to the Luxembourg Chamber of Commerce?',
    options: ['A think tank that produces studies on Luxembourg\'s economic and social challenges', 'An investment fund for startups', 'An innovation design agency', 'A vocational training centre'],
    answer: 0,
    explanation: 'The IDEA Foundation (Idées pour le Développement Economique et l\'Amélioration de la gouvernance) is a think tank created by the Chamber of Commerce. It publishes studies and proposals on Luxembourg\'s competitiveness, sustainability, and governance.',
  },
  {
    id: 'a-syvicol', level: 'citizen', category: 'digital',
    situation: 'What is SYVICOL in Luxembourg?',
    options: ['The association representing all Luxembourg communes (syndicat des villes et communes)', 'A civil protection organisation', 'A syndicate of vineyard owners', 'A public transport coordination body'],
    answer: 0,
    explanation: 'SYVICOL (Syndicat des Villes et Communes Luxembourgeoises) represents the interests of Luxembourg\'s 100 communes at the national and European level. It coordinates between communes on shared challenges and negotiates with the central government.',
  },
  // sub-level 4
  {
    id: 'a-decompte-annuel', level: 'citizen', category: 'taxes',
    situation: 'What is a "décompte annuel" that many employees receive from the ACD?',
    options: ['An annual tax settlement that may result in a tax refund or additional payment', 'An annual salary statement from your employer', 'A social security contribution summary', 'A pension forecast'],
    answer: 0,
    explanation: 'The décompte annuel is the ACD\'s annual tax settlement for employees. Based on your tax withheld during the year vs. your actual tax liability, it determines whether you owe additional tax or receive a refund.',
  },
  {
    id: 'a-conge-politique', level: 'citizen', category: 'work',
    situation: 'Can an elected communal councillor in Luxembourg take time off work for council duties?',
    options: ['Yes, they have a right to political leave (congé politique)', 'No, council duties are strictly after-hours', 'Only if the employer agrees voluntarily', 'Only the mayor gets leave'],
    answer: 0,
    explanation: 'Luxembourg law grants political leave (congé politique) to elected communal councillors, allowing them to attend council meetings and perform their duties during working hours. The amount of leave depends on the position (mayor, échevin, or councillor).',
  },
  {
    id: 'a-cssf', level: 'citizen', category: 'finance',
    situation: 'What does the CSSF (Commission de surveillance du secteur financier) do?',
    options: ['It supervises and regulates Luxembourg\'s financial sector', 'It sets interest rates for the eurozone', 'It manages the national debt', 'It insures bank deposits'],
    answer: 0,
    explanation: 'The CSSF is Luxembourg\'s financial regulator, supervising banks, investment funds, insurance companies, and other financial entities. It ensures compliance with regulations, protects consumers, and contributes to the stability of the financial system.',
  },
  {
    id: 'a-pag-pap', level: 'citizen', category: 'housing',
    situation: 'What are the PAG and PAP in Luxembourg\'s urban planning system?',
    options: ['Communal land-use plans: PAG for the whole commune, PAP for specific neighbourhoods', 'Political party acronyms', 'Pension contribution plans', 'Parking zone designations'],
    answer: 0,
    explanation: 'The PAG (Plan d\'aménagement général) is a commune\'s overall land-use plan defining zones (residential, commercial, green, etc.). The PAP (Plan d\'aménagement particulier) is a detailed plan for a specific area within the PAG, defining building parameters.',
  },
  {
    id: 'a-chambre-metiers', level: 'citizen', category: 'work',
    situation: 'What role does the Chambre des Métiers play in Luxembourg?',
    options: ['It represents artisans and craft enterprises and is consulted on legislation affecting them', 'It is a museum of traditional crafts', 'It registers all foreign workers', 'It sets prices for construction services'],
    answer: 0,
    explanation: 'The Chambre des Métiers is a professional chamber representing artisans and craft businesses in Luxembourg. It gives mandatory opinions on legislation affecting the craft sector, provides business support, and manages the master craftsman (Brevet de maîtrise) qualification.',
  },
  // sub-level 5
  {
    id: 'a-stability-pact', level: 'citizen', category: 'finance',
    situation: 'Luxembourg consistently maintains one of the lowest public debt levels in the EU. What is its approximate debt-to-GDP ratio?',
    options: ['Around 25–30%', 'Around 60%', 'Around 100%', 'Around 5%'],
    answer: 0,
    explanation: 'Luxembourg\'s public debt-to-GDP ratio hovers around 25–30%, well below the EU Maastricht criterion of 60% and among the lowest in Europe. This low debt level is maintained despite the country\'s high public spending per capita.',
  },
  {
    id: 'a-spaceresources', level: 'citizen', category: 'work',
    situation: 'Luxembourg passed a pioneering 2017 law concerning what emerging industry?',
    options: ['Space resources (asteroid mining)', 'Cryptocurrency regulation', 'Autonomous vehicle licensing', 'Drone delivery services'],
    answer: 0,
    explanation: 'Luxembourg\'s 2017 Space Resources Law was one of the first in Europe to establish a legal framework for private companies to own resources extracted from asteroids and other celestial bodies, positioning Luxembourg as a hub for the space industry.',
  },
  {
    id: 'a-statec', level: 'citizen', category: 'digital',
    situation: 'What is STATEC and what service does it provide to the public?',
    options: ['Luxembourg\'s national statistics institute that produces official economic and demographic data', 'A state-owned tech company', 'A standardised testing organisation for schools', 'A state electricity company'],
    answer: 0,
    explanation: 'STATEC (Institut national de la statistique et des études économiques du Grand-Duché de Luxembourg) produces official statistics on population, economy, employment, prices, and social conditions. Its data informs policy decisions and is freely available online.',
  },
  {
    id: 'a-etat-civil', level: 'citizen', category: 'family',
    situation: 'Where must a marriage between two people living in Luxembourg be legally officiated?',
    options: ['At the commune\'s civil registry (état civil)', 'At any church or religious venue', 'At the Ministry of Justice', 'At the Grand Ducal Palace'],
    answer: 0,
    explanation: 'In Luxembourg, civil marriage must take place at the état civil (civil registry office) of the commune where one of the future spouses resides. A religious ceremony can follow but has no legal effect on its own. The civil officer (officier de l\'état civil) conducts the ceremony.',
  },
  {
    id: 'a-conge-formation', level: 'citizen', category: 'work',
    situation: 'What is the "congé individuel de formation" available to employees in Luxembourg?',
    options: ['Paid leave of up to 80 days over a career for approved training or education', 'A one-day team-building event', 'A language course at work', 'An unpaid gap year for personal development'],
    answer: 0,
    explanation: 'The congé individuel de formation allows employees to take paid leave for approved training courses (up to 80 days over their career). The employer pays the salary and is reimbursed by the state. It can be used for professional or personal development.',
  },
]

// ─── AMBASSADOR (Level 5) — Expert knowledge ─────────────────────────────
const AMBASSADOR = [
  // sub-level 1
  {
    id: 'a-avis-formel', level: 'ambassador', category: 'digital',
    situation: 'What happens when the Conseil d\'État issues a "formal opposition" (opposition formelle) to a draft law?',
    options: ['The Chambre des Députés must vote on it a second time, with at least 3 months in between', 'The law is permanently blocked', 'The Grand Duke must personally approve it', 'A new government must be formed'],
    answer: 0,
    explanation: 'An opposition formelle by the Conseil d\'État is Luxembourg\'s substitute for a constitutional court review. It forces a "second constitutional vote" in the Chambre des Députés, with a mandatory waiting period of at least 3 months, ensuring that contentious laws receive extra scrutiny.',
  },
  {
    id: 'a-rdi', level: 'ambassador', category: 'finance',
    situation: 'What has Luxembourg identified as a key pillar for economic diversification beyond finance?',
    options: ['Research, development, and innovation (RDI) — including space, health tech, and clean tech', 'Agriculture and wine export', 'Heavy industry and steel', 'Mass tourism'],
    answer: 0,
    explanation: 'Luxembourg has invested heavily in RDI to diversify its economy: the Luxembourg Space Agency, the University of Luxembourg, LIST and LISER research institutes, and innovation hubs like the Technoport incubator. Focus sectors include ICT, health tech, space, and clean energy.',
  },
  {
    id: 'a-fond-compensation', level: 'ambassador', category: 'work',
    situation: 'What is the Fonds pour l\'emploi that finances active employment measures in Luxembourg?',
    options: ['A fund financed by a solidarity tax that supports employment programmes and training', 'A venture capital fund for startups', 'A pension reserve fund', 'A fund for paying civil servant salaries'],
    answer: 0,
    explanation: 'The Fonds pour l\'emploi is funded by the solidarity tax (impôt de solidarité) and finances ADEM\'s active employment measures — job creation schemes, vocational retraining, integration programmes, and subsidised employment for disadvantaged groups.',
  },
  {
    id: 'a-grand-duc-role', level: 'ambassador', category: 'digital',
    situation: 'What is the Grand Duke\'s constitutional role in the legislative process?',
    options: ['He promulgates (formally enacts) laws but does not sanction them since 2008', 'He can veto any law', 'He personally writes all laws', 'He has no role in legislation'],
    answer: 0,
    explanation: 'Since a 2008 constitutional revision, the Grand Duke promulgates laws (formally enacts them) but no longer sanctions them (gives personal approval). This change followed Grand Duke Henri\'s refusal to sign the 2008 euthanasia law, leading Parliament to amend the constitution.',
  },
  {
    id: 'a-rifkin-study', level: 'ambassador', category: 'finance',
    situation: 'What was the "Third Industrial Revolution" study that Luxembourg commissioned from Jeremy Rifkin?',
    options: ['A strategic plan for transitioning to a sustainable, digital, circular economy', 'A study on the decline of the steel industry', 'A military defence modernisation plan', 'A report on the banking secrecy reform'],
    answer: 0,
    explanation: 'In 2016, Luxembourg released the "Third Industrial Revolution" study by economist Jeremy Rifkin, outlining a strategic roadmap for transforming Luxembourg into a sustainable, circular, and sharing economy powered by renewable energy, IoT, and smart mobility.',
  },
  // sub-level 2
  {
    id: 'a-lux-airport', level: 'ambassador', category: 'transport',
    situation: 'Luxembourg\'s Findel Airport is Europe\'s leading airport for what type of traffic?',
    options: ['Air cargo (freight)', 'Low-cost passenger airlines', 'Private jets', 'Military transport'],
    answer: 0,
    explanation: 'Luxembourg Findel Airport is the 5th-largest cargo airport in Europe, thanks largely to Cargolux — Europe\'s largest all-cargo airline, headquartered in Luxembourg. Air freight is a strategic economic pillar alongside finance and space.',
  },
  {
    id: 'a-brevet-maitrise', level: 'ambassador', category: 'work',
    situation: 'What does the "Brevet de maîtrise" qualification allow you to do in Luxembourg?',
    options: ['Operate as a master craftsman and train apprentices in your trade', 'Teach at the University of Luxembourg', 'Practice law in Luxembourg courts', 'Manage a public hospital'],
    answer: 0,
    explanation: 'The Brevet de maîtrise is the master craftsman qualification issued by the Chambre des Métiers. It is required to independently run certain craft businesses and authorises you to train apprentices. It requires several years of professional experience and passing examinations.',
  },
  {
    id: 'a-integration-pci', level: 'ambassador', category: 'family',
    situation: 'What is the "Parcours d\'intégration accompagné" (PIA) offered to newcomers?',
    options: ['A government-funded integration programme with language courses, civic orientation, and support', 'A guided walking tour of Luxembourg', 'A job placement service for immigrants', 'A healthcare onboarding process'],
    answer: 0,
    explanation: 'The PIA (formerly CAI — Contrat d\'accueil et d\'intégration) is an integration programme offered by OLAI (now the Department of Integration). It includes Luxembourgish and French language courses, a civic orientation course about Luxembourg, and personalised guidance.',
  },
  {
    id: 'a-srel', level: 'ambassador', category: 'digital',
    situation: 'What is the SREL in Luxembourg\'s security architecture?',
    options: ['The intelligence service (Service de renseignement de l\'État luxembourgeois)', 'The emergency response team', 'The road safety authority', 'The data centre security team'],
    answer: 0,
    explanation: 'The SREL is Luxembourg\'s civilian intelligence agency, tasked with protecting national security, monitoring threats (terrorism, espionage, cyber), and providing intelligence to the government. It was reformed following a 2013 parliamentary inquiry.',
  },
  {
    id: 'a-clause-bagatelle', level: 'ambassador', category: 'taxes',
    situation: 'What is the "clause bagatelle" in Luxembourg\'s tax system for employees?',
    options: ['A rule that exempts employees from filing a tax return if their situation is simple and tax has been fully withheld', 'A rule that exempts purchases under €10 from VAT', 'A discount on parking tickets for first offences', 'A rounding rule for pension calculations'],
    answer: 0,
    explanation: 'The clause bagatelle exempts certain employees from having to file an annual tax return if they only have one employer, earn below a certain threshold, and their tax was correctly withheld at source. This simplifies things for many workers.',
  },
  // sub-level 3
  {
    id: 'a-societe-nationale-habitation', level: 'ambassador', category: 'housing',
    situation: 'What is the SNHBM and how does it differ from the Fonds du Logement?',
    options: ['SNHBM builds affordable homes for sale; Fonds du Logement focuses more on social rental housing', 'They are the same organisation under different names', 'SNHBM is private; Fonds du Logement is public', 'SNHBM handles commercial buildings only'],
    answer: 0,
    explanation: 'The SNHBM (Société nationale des habitations à bon marché) builds affordable housing mainly for sale at below-market prices. The Fonds du Logement focuses more on social rental housing. Together they are the two main public developers addressing Luxembourg\'s housing shortage.',
  },
  {
    id: 'a-list-research', level: 'ambassador', category: 'finance',
    situation: 'What is LIST and what does it research?',
    options: ['Luxembourg Institute of Science and Technology — materials, environment, and digital innovation', 'Luxembourg\'s stock exchange listing authority', 'A literary studies institute', 'A public library network'],
    answer: 0,
    explanation: 'LIST (Luxembourg Institute of Science and Technology) is a public research centre focusing on materials science, environmental science, and digital technologies. It works on applied research and collaborates with industry, contributing to Luxembourg\'s innovation ecosystem.',
  },
  {
    id: 'a-convention-collective', level: 'ambassador', category: 'work',
    situation: 'What is a "convention collective de travail" in Luxembourg labour law?',
    options: ['A legally binding agreement between employer(s) and trade union(s) covering working conditions', 'A government decree setting all salaries', 'A collective employment contract signed by all employees', 'A retirement agreement between pension funds'],
    answer: 0,
    explanation: 'A convention collective de travail is a collective bargaining agreement negotiated between employer organisations (or a single employer) and representative trade unions. It sets terms on wages, working hours, leave, and other conditions, often exceeding the legal minimums.',
  },
  {
    id: 'a-autorisation-classe3', level: 'ambassador', category: 'housing',
    situation: 'What is a "commodo/incommodo" procedure required for in Luxembourg?',
    options: ['Environmental and nuisance permits for businesses and installations', 'Noise complaints between neighbours', 'Road construction approval', 'School zoning decisions'],
    answer: 0,
    explanation: 'The commodo/incommodo procedure is the environmental permitting process managed by the ITM and the Environment Agency. Businesses, factories, and certain installations must obtain approval, with public consultations to assess environmental and nuisance impacts.',
  },
  {
    id: 'a-fiscal-nonres', level: 'ambassador', category: 'taxes',
    situation: 'Under what condition can a non-resident taxpayer in Luxembourg be treated as a resident for tax purposes?',
    options: ['If at least 90% of their worldwide income is taxed in Luxembourg', 'If they have a Luxembourg bank account', 'If they drive through Luxembourg daily', 'Non-residents can never be treated as residents'],
    answer: 0,
    explanation: 'Non-residents who earn at least 90% of their worldwide professional income in Luxembourg can opt to be taxed as residents (assimilation fiscale). This allows them to access deductions and tax benefits normally reserved for residents, such as mortgage interest deductions.',
  },
  // sub-level 4
  {
    id: 'a-cour-constitutionnelle', level: 'ambassador', category: 'digital',
    situation: 'Does Luxembourg have a Constitutional Court?',
    options: ['Yes, established in 1997 to rule on the constitutionality of laws', 'No, the Conseil d\'État handles constitutionality', 'No, only the Grand Duke decides', 'Yes, but it has been inactive since 2000'],
    answer: 0,
    explanation: 'The Cour Constitutionnelle was established in 1997. It rules on the constitutionality of laws when a question is referred to it by the ordinary courts or the administrative courts. It does not review laws before they are adopted (that role belongs to the Conseil d\'État).',
  },
  {
    id: 'a-sis-interstatal', level: 'ambassador', category: 'finance',
    situation: 'What is the role of the Commissariat aux assurances (CAA) in Luxembourg?',
    options: ['It supervises the insurance and reinsurance sector', 'It provides public health insurance', 'It manages the national lottery', 'It regulates food safety'],
    answer: 0,
    explanation: 'The CAA is Luxembourg\'s independent authority supervising insurance and reinsurance companies, pension funds, and insurance intermediaries. Luxembourg is Europe\'s leading captive reinsurance centre, making the CAA\'s role particularly significant.',
  },
  {
    id: 'a-convention-benelux', level: 'ambassador', category: 'transport',
    situation: 'What modern role does the Benelux Union play for Luxembourg?',
    options: ['A cooperation platform for cross-border issues with Belgium and the Netherlands', 'A customs union that sets import tariffs', 'An agricultural subsidy programme', 'A joint military command'],
    answer: 0,
    explanation: 'The Benelux Union (Belgium, Netherlands, Luxembourg) focuses on cross-border cooperation — police and judicial cooperation, spatial planning, transport, and internal market issues. Its headquarters are in Brussels and it often serves as a testing ground for wider EU policies.',
  },
  {
    id: 'a-grande-region', level: 'ambassador', category: 'work',
    situation: 'What is the "Grande Région" that Luxembourg is part of?',
    options: ['A cross-border cooperation zone with Saarland, Lorraine, Wallonia, and Rhineland-Palatinate', 'Luxembourg\'s largest canton', 'A planned expansion of Luxembourg\'s territory', 'An economic free-trade zone'],
    answer: 0,
    explanation: 'The Grande Région is a cross-border cooperation area comprising Luxembourg, Saarland (DE), Lorraine (FR), Wallonia and the German-speaking Community (BE), and Rhineland-Palatinate (DE). With about 11 million inhabitants, it coordinates on transport, labour markets, culture, and spatial planning.',
  },
  {
    id: 'a-agri-lux', level: 'ambassador', category: 'finance',
    situation: 'What percentage of Luxembourg\'s GDP does agriculture represent today?',
    options: ['Less than 1%', 'About 5%', 'About 10%', 'About 15%'],
    answer: 0,
    explanation: 'Agriculture represents less than 1% of Luxembourg\'s GDP, though it covers about half the country\'s land area. The sector includes dairy farming, wine production (Moselle region), and increasingly organic farming, supported by EU and national subsidies.',
  },
  // sub-level 5
  {
    id: 'a-constitution-reform', level: 'ambassador', category: 'digital',
    situation: 'Luxembourg has been working on a major constitutional reform. What is its key feature?',
    options: ['Replacing the 1868 constitution with a modern, unified text', 'Abolishing the monarchy', 'Creating a federal structure', 'Joining a political union with Belgium'],
    answer: 0,
    explanation: 'Luxembourg has been working for years on a comprehensive revision of its 1868 constitution. The new text aims to modernise institutions, strengthen fundamental rights, clarify the separation of powers, and codify practices that have evolved informally over 150+ years.',
  },
  {
    id: 'a-fdc', level: 'ambassador', category: 'finance',
    situation: 'What is the FDC (Fonds de compensation) in Luxembourg\'s pension system?',
    options: ['The reserve fund that invests pension contributions to ensure long-term sustainability', 'A bank deposit guarantee fund', 'A disaster relief fund', 'A fund for compensating expropriated landowners'],
    answer: 0,
    explanation: 'The FDC (Fonds de compensation commun au régime général de pension) manages and invests the reserves of Luxembourg\'s general pension scheme. It invests globally across asset classes to ensure the pension system can meet future obligations.',
  },
  {
    id: 'a-cour-comptes', level: 'ambassador', category: 'digital',
    situation: 'What does the Cour des comptes (Court of Auditors) of Luxembourg do?',
    options: ['It audits public spending and ensures proper use of state funds', 'It judges financial crimes', 'It sets the national budget', 'It manages the Grand Duke\'s personal finances'],
    answer: 0,
    explanation: 'Luxembourg\'s Cour des comptes is an independent institution that audits all public expenditure — central government, communes, and public establishments. It reports to the Chambre des Députés and plays a key role in ensuring transparency and accountability in public finances.',
  },
  {
    id: 'a-lux-niche', level: 'ambassador', category: 'finance',
    situation: 'Why is Luxembourg the world\'s second-largest investment fund domicile (after the USA)?',
    options: ['Its UCITS passport, regulatory expertise, multilingual workforce, and favourable legal framework', 'Low corporate tax rates alone', 'Mandatory investment requirements for residents', 'Because the EU funds are required to be domiciled there'],
    answer: 0,
    explanation: 'Luxembourg pioneered the UCITS directive, creating "passportable" funds that can be sold across the EU. Combined with regulatory expertise (CSSF), political stability, a multilingual workforce, and a sophisticated legal framework, it attracted the global fund industry.',
  },
  {
    id: 'a-participatory-democracy', level: 'ambassador', category: 'digital',
    situation: 'What is the "Klimabiergerrot" (Citizens\' Climate Council) that Luxembourg created?',
    options: ['A randomly selected citizens\' assembly that made recommendations on climate policy', 'A committee of climate scientists', 'A government ministry for climate change', 'A green political party'],
    answer: 0,
    explanation: 'The Klimabiergerrot (2022) was Luxembourg\'s first citizens\' assembly — 100 randomly selected residents deliberated on climate policy and made recommendations to the government. It reflects Luxembourg\'s experiments with participatory democracy beyond traditional elections.',
  },
]

// ─── Combined & Export ────────────────────────────────────────────────────
export const SCENARIOS = [...NEWCOMER, ...EXPLORER, ...RESIDENT, ...CITIZEN, ...AMBASSADOR]

/**
 * Get 5 scenarios for a given level + sub-level (1-based).
 * Each sub-level → 5 consecutive scenarios within that level.
 */
export function getSubLevelScenarios(levelId, subLevel, allScenarios = SCENARIOS) {
  const levelItems = allScenarios.filter(s => s.level === levelId)
  const start = (subLevel - 1) * 5
  return levelItems.slice(start, start + 5)
}
