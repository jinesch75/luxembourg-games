/**
 * Lëtz Economy — Luxembourg's economy, financial sector & industries
 *
 * Each scenario: id, level, category, situation (the scenario text),
 *                options[], answer (0-based), explanation
 *
 * Levels: 'starter' | 'analyst' | 'strategist' | 'expert' | 'economist'
 * 5 levels × 5 sub-levels × 5 scenarios = 125 scenarios total
 *
 * Categories: finance, funds, steel, trade, startups, eu_institutions, indicators, banking
 */

// ============================================================
// STARTER LEVEL (Basic knowledge - anyone living in Luxembourg should know this)
// ============================================================

const STARTER = [
  // Sub-level 1
  {
    id: 'e-gdp-percapita-1',
    level: 'starter',
    category: 'indicators',
    situation: 'What is true about Luxembourg\'s GDP per capita compared to other countries?',
    options: [
      'Luxembourg has the highest GDP per capita in the world',
      'Germany has a higher GDP per capita than Luxembourg',
      'Luxembourg ranks fifth globally in GDP per capita',
      'France has approximately the same GDP per capita as Luxembourg',
    ],
    answer: 0,
    explanation: 'Luxembourg consistently ranks #1 globally with GDP per capita over $130,000 USD, significantly ahead of other wealthy nations. This exceptional figure reflects the country\'s wealthy financial sector, high productivity, and relatively small population relative to economic output.'
  },
  {
    id: 'e-arcelormittal-hq',
    level: 'starter',
    category: 'steel',
    situation: 'Where is the global headquarters of ArcelorMittal, the world\'s largest steel producer?',
    options: [
      'Luxembourg City, Luxembourg',
      'Brussels, Belgium',
      'Amsterdam, Netherlands',
      'Cologne, Germany',
    ],
    answer: 0,
    explanation: 'ArcelorMittal, the world\'s leading steel manufacturer by production volume, is headquartered in Luxembourg City. This reflects Luxembourg\'s long industrial heritage in steel production, particularly through ARBED, which merged to form Arcelor before the 2006 acquisition by Mittal Steel.'
  },
  {
    id: 'e-financial-center',
    level: 'starter',
    category: 'finance',
    situation: 'Luxembourg is one of the world\'s leading centers for what type of financial instrument?',
    options: [
      'Investment funds (UCITS and other funds)',
      'Cryptocurrency exchanges',
      'Commodity futures trading',
      'Forex derivatives',
    ],
    answer: 0,
    explanation: 'Luxembourg is the #2 global center for investment fund management and administration, second only to the USA, with over $5 trillion in assets under management. The country pioneered UCITS (Undertakings for Collective Investment in Transferable Securities) in 1988, making it a global hub for regulated fund distribution.'
  },
  {
    id: 'e-public-transport-free',
    level: 'starter',
    category: 'indicators',
    situation: 'When did Luxembourg introduce free public transport for all residents?',
    options: [
      'March 1, 2020',
      'January 1, 2015',
      'September 1, 2018',
      'June 1, 2019',
    ],
    answer: 0,
    explanation: 'Luxembourg became the first country in the world to make all public transport completely free as of March 1, 2020. This major policy initiative was designed to reduce traffic congestion, lower emissions, and improve accessibility for all residents, especially cross-border workers.'
  },
  {
    id: 'e-currency-adoption',
    level: 'starter',
    category: 'banking',
    situation: 'What currency does Luxembourg use for its economy?',
    options: [
      'The Euro (EUR)',
      'The Luxembourg Franc (still used)',
      'The Belgian Franc',
      'A hybrid EUR-LUF system',
    ],
    answer: 0,
    explanation: 'Luxembourg adopted the Euro as its official currency in 1999 for electronic transactions and in 2002 for cash, replacing the Luxembourg Franc. As a founding member of the Eurozone, Luxembourg is fully integrated into the European monetary system and European Central Bank framework.'
  },

  // Sub-level 2
  {
    id: 'e-cross-border-workers',
    level: 'starter',
    category: 'indicators',
    situation: 'Approximately what percentage of Luxembourg\'s workforce are cross-border workers (frontaliers)?',
    options: [
      'Around 47%',
      'Around 15%',
      'Around 30%',
      'Around 5%',
    ],
    answer: 0,
    explanation: 'Approximately 47% of Luxembourg\'s workforce consists of cross-border workers who commute from Belgium, France, and Germany. This high proportion reflects the country\'s labor shortage, high wages, and small domestic population, making it heavily dependent on surrounding labor markets.'
  },
  {
    id: 'e-cssf-role',
    level: 'starter',
    category: 'banking',
    situation: 'What is the CSSF and what does it do?',
    options: [
      'The financial regulator that supervises banks, insurance, and investment firms',
      'The government ministry that sets monetary policy',
      'The European Central Bank\'s Luxembourg office',
      'A private banking association',
    ],
    answer: 0,
    explanation: 'The Commission de Surveillance du Secteur Financier (CSSF) is Luxembourg\'s independent financial regulator, overseeing banks, investment firms, insurance companies, and funds. It ensures financial stability and consumer protection within Luxembourg\'s regulatory framework.'
  },
  {
    id: 'e-stock-exchange',
    level: 'starter',
    category: 'finance',
    situation: 'What is the Luxembourg Stock Exchange\'s global ranking for international securities listing?',
    options: [
      '#1 globally for international securities listing',
      '#3 globally, behind NYSE and LSE',
      '#5 in Europe',
      '#10 globally by trading volume',
    ],
    answer: 0,
    explanation: 'The Luxembourg Stock Exchange (LuxSE) is the #1 global marketplace for listing international securities, particularly bonds and investment funds. With over 36,000 securities listed, it dominates global capital markets infrastructure and serves as a crucial platform for European and international issuers.'
  },
  {
    id: 'e-ses-satellites',
    level: 'starter',
    category: 'startups',
    situation: 'SES is a major global company headquartered in Luxembourg. What industry is it in?',
    options: [
      'Satellite communications and broadcasting',
      'Software and cloud computing',
      'Renewable energy generation',
      'Automotive manufacturing',
    ],
    answer: 0,
    explanation: 'SES is one of the world\'s leading satellite operators, headquartered in Betzdorf, Luxembourg, providing broadcasting and telecommunications services globally. The company operates one of the world\'s largest commercial satellite fleets.'
  },
  {
    id: 'e-cargolux-airline',
    level: 'starter',
    category: 'trade',
    situation: 'Cargolux is a major airline based in Luxembourg. What type of flights does it primarily operate?',
    options: [
      'All-cargo freight flights',
      'Passenger-only flights',
      'Regional commuter flights',
      'Charter and private aviation',
    ],
    answer: 0,
    explanation: 'Cargolux is Europe\'s largest all-cargo airline, headquartered in Luxembourg and operating scheduled international freight services. It plays a crucial role in Luxembourg\'s logistics and aviation sector, connecting major European distribution centers.'
  },

  // Sub-level 3
  {
    id: 'e-ucits-pioneer',
    level: 'starter',
    category: 'funds',
    situation: 'When did Luxembourg pioneer the UCITS directive for investment funds?',
    options: [
      '1988',
      '1992',
      '2001',
      '1975',
    ],
    answer: 0,
    explanation: 'Luxembourg pioneered UCITS (Undertakings for Collective Investment in Transferable Securities) in 1988, creating a harmonized regulatory framework that allows funds to be distributed across EU member states. This innovation established Luxembourg as a global fund management powerhouse.'
  },
  {
    id: 'e-banking-institutions',
    level: 'starter',
    category: 'banking',
    situation: 'Luxembourg hosts how many major international banks?',
    options: [
      'Over 140 banking institutions',
      'Around 50 banking institutions',
      'Around 80 banking institutions',
      'Around 20 banking institutions',
    ],
    answer: 0,
    explanation: 'Luxembourg is home to over 140 banking institutions, making it one of Europe\'s most important financial centers. These include major international banks, investment banks, and specialized financial institutions that contribute significantly to the country\'s economy.'
  },
  {
    id: 'e-eu-institutions',
    level: 'starter',
    category: 'eu_institutions',
    situation: 'Which of these major EU institutions is headquartered in Luxembourg?',
    options: [
      'The European Court of Justice',
      'The European Central Bank',
      'The European Parliament',
      'The European Council',
    ],
    answer: 0,
    explanation: 'The European Court of Justice (ECJ) is headquartered in Luxembourg, making the country a significant center for European legal and institutional authority. Additionally, the European Court of Auditors and Eurostat are also located in Luxembourg.'
  },
  {
    id: 'e-eib-presence',
    level: 'starter',
    category: 'eu_institutions',
    situation: 'The European Investment Bank (EIB) has a major presence in Luxembourg. What does the EIB do?',
    options: [
      'Provides long-term financing for EU investment projects',
      'Manages the EU budget and funds member states',
      'Regulates banking across all EU countries',
      'Distributes development aid to non-EU countries',
    ],
    answer: 0,
    explanation: 'The European Investment Bank (EIB), headquartered in Luxembourg, finances investment projects within and outside the EU, supporting sustainable development, innovation, and infrastructure. It is the EU\'s lending institution and a key financial actor in European policy.'
  },
  {
    id: 'e-population-size',
    level: 'starter',
    category: 'indicators',
    situation: 'Luxembourg\'s small population compared to its economic output is one reason for its exceptionally high GDP per capita. What is Luxembourg\'s approximate population?',
    options: [
      'Around 660,000',
      'Around 1.2 million',
      'Around 380,000',
      'Around 900,000',
    ],
    answer: 0,
    explanation: 'Luxembourg has a population of approximately 660,000 residents, making it one of Europe\'s smallest countries by population. Its high economic output combined with this small population base produces one of the world\'s highest GDP per capita figures.'
  },

  // Sub-level 4
  {
    id: 'e-fund-assets-ranking',
    level: 'starter',
    category: 'funds',
    situation: 'As a global center for investment funds, what is Luxembourg\'s ranking by assets under management?',
    options: [
      'Second globally, after the United States',
      'Third globally, after USA and China',
      'Fourth globally, after USA, China, and Japan',
      'Tenth globally',
    ],
    answer: 0,
    explanation: 'Luxembourg ranks #2 globally for investment funds management with over $5 trillion in assets under administration, second only to the United States. This dominant position reflects decades of regulatory innovation and favorable fund domiciliation policies.'
  },
  {
    id: 'e-steel-production-history',
    level: 'starter',
    category: 'steel',
    situation: 'Luxembourg\'s steel industry was historically built on which company?',
    options: [
      'ARBED (Aciéries Réunies de Burbach-Eich-Dudelange)',
      'LuxSteel Manufacturing',
      'European Iron Works',
      'Benelux Steel Corporation',
    ],
    answer: 0,
    explanation: 'ARBED was Luxembourg\'s historic steel giant, founded in 1912 through the merger of three major iron and steel companies. It dominated European steel production for most of the 20th century before merging to form Arcelor, which later became part of ArcelorMittal.'
  },
  {
    id: 'e-fintech-ecosystem',
    level: 'starter',
    category: 'startups',
    situation: 'Luxembourg is developing a growing fintech ecosystem. Which financial innovation area is Luxembourg particularly focused on?',
    options: [
      'Digital currencies and blockchain technology',
      'High-frequency trading algorithms',
      'Cryptocurrency mining operations',
      'Online gambling platforms',
    ],
    answer: 0,
    explanation: 'Luxembourg is actively developing expertise in digital currencies, blockchain technology, and distributed ledger systems, positioning itself as a hub for financial innovation. The government has created favorable regulatory conditions for fintech startups and blockchain-based financial services.'
  },
  {
    id: 'e-borders-location',
    level: 'starter',
    category: 'trade',
    situation: 'Luxembourg is bordered by three countries. Which countries are they?',
    options: [
      'Belgium, France, and Germany',
      'Belgium, France, and Netherlands',
      'France, Germany, and Austria',
      'Belgium, Germany, and Denmark',
    ],
    answer: 0,
    explanation: 'Luxembourg is bordered by Belgium to the west and north, France to the south, and Germany to the east. This strategic location at the heart of Western Europe has made it historically important for trade, finance, and European integration.'
  },
  {
    id: 'e-unemployment-rate',
    level: 'starter',
    category: 'indicators',
    situation: 'Luxembourg typically has one of Europe\'s lowest unemployment rates. What has it been in recent years?',
    options: [
      'Around 5% or lower',
      'Around 8-10%',
      'Around 12-15%',
      'Around 3-4%',
    ],
    answer: 0,
    explanation: 'Luxembourg consistently maintains one of Europe\'s lowest unemployment rates, typically around 5% or lower, reflecting strong labor demand and economic resilience. The country\'s small population and robust financial sector create multiple employment opportunities despite tight labor markets.'
  },

  // Sub-level 5
  {
    id: 'e-median-salary',
    level: 'starter',
    category: 'indicators',
    situation: 'Luxembourg has among Europe\'s highest median salaries. Which range is typical?',
    options: [
      '3,500-4,000 EUR per month',
      '2,000-2,500 EUR per month',
      '1,500-2,000 EUR per month',
      '4,500-5,500 EUR per month',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s median gross salary is approximately 3,500-4,000 EUR per month, significantly higher than most European countries. This elevated wage level attracts cross-border workers and reflects the country\'s high productivity and wealthy service-based economy.'
  },
  {
    id: 'e-tax-rate-intro',
    level: 'starter',
    category: 'finance',
    situation: 'Luxembourg has a complex tax system. For a basic employee, what is the approximate combined income tax rate?',
    options: [
      'Around 8-20% depending on income level',
      'Around 30-40%',
      'Around 45-50%',
      'Around 2-5%',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s income tax system is progressive, with rates ranging from around 8% for lower incomes to 20% for higher incomes, plus social contributions. This results in effective combined rates of approximately 8-20% depending on income level, relatively favorable by European standards.'
  },
  {
    id: 'e-language-multilingual',
    level: 'starter',
    category: 'indicators',
    situation: 'Luxembourg is highly multilingual. What is the official language?',
    options: [
      'Luxembourgish (Lëtzebuergesch)',
      'French',
      'German',
      'Dutch',
    ],
    answer: 0,
    explanation: 'Luxembourgish (Lëtzebuergesch) is the official national language, though French and German are widely used in government, business, and education. The country\'s multilingual character reflects its position as a crossroads of Western European cultures and its international financial community.'
  },
  {
    id: 'e-climate-initiatives',
    level: 'starter',
    category: 'finance',
    situation: 'Luxembourg is emerging as a leader in what type of financial investments?',
    options: [
      'Green and sustainable finance (ESG investing)',
      'Oil and gas futures',
      'Tobacco industry bonds',
      'Weapons manufacturing stocks',
    ],
    answer: 0,
    explanation: 'Luxembourg is positioning itself as a global hub for green and sustainable finance, with numerous funds focused on environmental, social, and governance (ESG) criteria. The Luxembourg Stock Exchange lists significant numbers of green bonds and sustainable investment vehicles.'
  },
  {
    id: 'e-trade-partners',
    level: 'starter',
    category: 'trade',
    situation: 'What are Luxembourg\'s main trading partners?',
    options: [
      'Belgium, France, Germany, and other EU members',
      'UK, USA, and Asian nations',
      'OPEC countries and Middle Eastern nations',
      'China, India, and Southeast Asian countries',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s trade is primarily conducted with neighboring EU member states, particularly Belgium, France, and Germany, reflecting its integration into European supply chains. Trade within the EU accounts for over 90% of Luxembourg\'s total international trade.'
  },
]

// ============================================================
// ANALYST LEVEL (More specific professional knowledge)
// ============================================================

const ANALYST = [
  // Sub-level 1
  {
    id: 'e-ucits-definition',
    level: 'analyst',
    category: 'funds',
    situation: 'What does UCITS stand for, and what is its primary purpose?',
    options: [
      'Undertakings for Collective Investment in Transferable Securities; allows funds to be distributed across EU member states',
      'United Collective Investment Trading System; regulates stock exchange trading',
      'Universal Currency and Investment Transfer System; manages exchange rates',
      'Unified Credit Investment Tracking Service; monitors corporate lending',
    ],
    answer: 0,
    explanation: 'UCITS (Undertakings for Collective Investment in Transferable Securities) is a regulatory framework that allows investment funds authorized in one EU member state to be marketed in all others under a single authorization. Luxembourg pioneered this framework and benefits enormously from its dominance in UCITS fund administration.'
  },
  {
    id: 'e-cssf-authority',
    level: 'analyst',
    category: 'banking',
    situation: 'Which financial entities does the CSSF regulate?',
    options: [
      'Banks, investment firms, insurance companies, and funds',
      'Only commercial banks and savings institutions',
      'Only insurance companies and pension funds',
      'Only investment fund administrators',
    ],
    answer: 0,
    explanation: 'The CSSF has comprehensive regulatory authority over banks, investment firms, insurance companies, pension funds, and alternative investment fund managers. This broad mandate makes the CSSF one of Europe\'s most influential financial regulators, overseeing a sector representing over 800% of Luxembourg\'s GDP.'
  },
  {
    id: 'e-luxembourg-stock-exchange',
    level: 'analyst',
    category: 'finance',
    situation: 'How many securities are listed on the Luxembourg Stock Exchange, and what type dominate?',
    options: [
      'Over 36,000 securities, primarily international bonds and investment funds',
      'Around 10,000 securities, primarily equity shares',
      'Around 5,000 securities, primarily derivatives',
      'Around 100,000 securities across all markets',
    ],
    answer: 0,
    explanation: 'The Luxembourg Stock Exchange lists over 36,000 securities, making it the world\'s largest exchange by number of listings. The vast majority are international bonds and investment funds, with bonds representing approximately 80% of all listed instruments.'
  },
  {
    id: 'e-arbed-timeline',
    level: 'analyst',
    category: 'steel',
    situation: 'ARBED was founded through a merger in what year?',
    options: [
      '1912',
      '1945',
      '1960',
      '1888',
    ],
    answer: 0,
    explanation: 'ARBED (Aciéries Réunies de Burbach-Eich-Dudelange) was created in 1912 through the merger of three major Luxembourg iron and steel producers. It became one of Europe\'s largest steelmakers and remained dominant for most of the 20th century until its merger to form Arcelor.'
  },
  {
    id: 'e-fund-domiciliation',
    level: 'analyst',
    category: 'funds',
    situation: 'Why do so many international investment funds choose to domicile in Luxembourg?',
    options: [
      'Favorable regulatory framework, tax treaties, CSSF expertise, and access to global distribution networks',
      'Lowest tax rates in the world',
      'Largest stock exchange by trading volume',
      'Proximity to London financial markets',
    ],
    answer: 0,
    explanation: 'International funds domicile in Luxembourg due to its sophisticated regulatory framework (UCITS, AIFMD), extensive tax treaties, experienced CSSF supervision, and established fund administration infrastructure. The presence of numerous fund administrators, depositaries, and financial service providers creates a complete ecosystem.'
  },

  // Sub-level 2
  {
    id: 'e-aifmd-alternative',
    level: 'analyst',
    category: 'funds',
    situation: 'What does AIFMD regulate?',
    options: [
      'Alternative Investment Funds and their managers',
      'All industrial fund management activities',
      'Auto insurance and motor fund policies',
      'Agricultural investment and marketing decisions',
    ],
    answer: 0,
    explanation: 'The Alternative Investment Fund Managers Directive (AIFMD) is an EU regulation that establishes harmonized rules for managing and marketing alternative investment funds (hedge funds, private equity, real estate funds, etc.). Luxembourg, as a major fund hub, has extensive expertise in AIFMD compliance.'
  },
  {
    id: 'e-ses-satellite-fleet',
    level: 'analyst',
    category: 'startups',
    situation: 'What is SES\'s primary business model?',
    options: [
      'Owning and operating a fleet of communications satellites',
      'Manufacturing satellites for government agencies',
      'Providing internet service through fiber optic cables',
      'Conducting space research for ESA',
    ],
    answer: 0,
    explanation: 'SES operates a fleet of over 70 communications satellites providing broadcasting, telecommunications, and data services globally. The company generates revenue through leasing satellite capacity to broadcasters, telecommunications companies, and government agencies.'
  },
  {
    id: 'e-cargolux-operations',
    level: 'analyst',
    category: 'trade',
    situation: 'How many aircraft does Cargolux operate approximately?',
    options: [
      'Around 10-15 all-cargo aircraft',
      'Around 50-60 aircraft',
      'Around 100+ aircraft',
      'Around 3-5 aircraft',
    ],
    answer: 0,
    explanation: 'Cargolux operates approximately 10-15 modern cargo aircraft, primarily Boeing 747 freighters, providing scheduled international freight services. Despite its relatively small fleet, it is Europe\'s largest all-cargo airline by capacity and serves major European distribution centers.'
  },
  {
    id: 'e-banking-cross-border',
    level: 'analyst',
    category: 'banking',
    situation: 'What percentage of Luxembourg\'s banks are foreign-owned or foreign branches?',
    options: [
      'Over 80% are foreign-controlled or branches',
      'Around 30% are foreign-controlled',
      'Around 50% are foreign-controlled',
      'Less than 10% are foreign-controlled',
    ],
    answer: 0,
    explanation: 'Over 80% of Luxembourg\'s more than 140 banking institutions are foreign-owned or branches of foreign banks, reflecting the country\'s role as an international financial center. These include major global banks, regional European banks, and specialized investment banks.'
  },
  {
    id: 'e-european-court-justice',
    level: 'analyst',
    category: 'eu_institutions',
    situation: 'What is the primary function of the European Court of Justice headquartered in Luxembourg?',
    options: [
      'Interpreting EU law and ensuring consistent application across member states',
      'Prosecuting individuals for crimes against the EU',
      'Managing the EU budget and financial resources',
      'Negotiating trade agreements on behalf of the EU',
    ],
    answer: 0,
    explanation: 'The European Court of Justice (ECJ), the highest court of the EU, interprets EU law and ensures its uniform application across member states. It hears cases from national courts and EU institutions, making its Luxembourg location strategically important for European legal governance.'
  },

  // Sub-level 3
  {
    id: 'e-eib-headquarters',
    level: 'analyst',
    category: 'eu_institutions',
    situation: 'The European Investment Bank (EIB) headquartered in Luxembourg focuses on what scale of lending?',
    options: [
      'Long-term financing for large-scale infrastructure and development projects',
      'Short-term commercial loans to small businesses',
      'Personal mortgages and consumer credit',
      'Emergency disaster relief funding',
    ],
    answer: 0,
    explanation: 'The EIB provides long-term financing for large-scale investment projects that promote EU policy objectives, including infrastructure, innovation, environmental projects, and development. It operates outside the EU budget framework and raises capital on financial markets.'
  },
  {
    id: 'e-frontalier-commute',
    level: 'analyst',
    category: 'indicators',
    situation: 'From which countries do the majority of Luxembourg\'s cross-border workers commute?',
    options: [
      'Belgium, France, and Germany',
      'Germany, Netherlands, and Denmark',
      'France, Switzerland, and Italy',
      'Belgium, UK, and Ireland',
    ],
    answer: 0,
    explanation: 'The majority of Luxembourg\'s approximately 47% cross-border workforce commutes from Belgium, France, and Germany, with Belgium being the largest source. This cross-border dynamic reflects wage differentials, labor market integration, and Luxembourg\'s role as a regional employment hub.'
  },
  {
    id: 'e-financial-sector-contribution',
    level: 'analyst',
    category: 'finance',
    situation: 'Approximately what percentage of Luxembourg\'s GDP does the financial sector contribute?',
    options: [
      'Approximately 30-35%',
      'Approximately 10-15%',
      'Approximately 50-60%',
      'Approximately 5-8%',
    ],
    answer: 0,
    explanation: 'The financial sector contributes approximately 30-35% of Luxembourg\'s total GDP, making it the dominant economic sector. This includes banking, funds management, insurance, and related financial services, representing over 800% of GDP in terms of financial sector assets under supervision.'
  },
  {
    id: 'e-arcelor-merger',
    level: 'analyst',
    category: 'steel',
    situation: 'When did Arcelor (formed from ARBED and other European steelmakers) merge with Mittal Steel?',
    options: [
      '2006',
      '2000',
      '2010',
      '1995',
    ],
    answer: 0,
    explanation: 'Mittal Steel acquired Arcelor in 2006, creating ArcelorMittal, the world\'s largest steel producer. This merger consolidated European and global steelmaking capacity, with ArcelorMittal maintaining its headquarters in Luxembourg to preserve the country\'s steel industry legacy.'
  },
  {
    id: 'e-fund-administrator-hub',
    level: 'analyst',
    category: 'funds',
    situation: 'How many major fund administrators operate in Luxembourg?',
    options: [
      'Over 40 major international fund administrators',
      'Around 10-15 administrators',
      'Around 5-8 administrators',
      'Around 20-25 administrators',
    ],
    answer: 0,
    explanation: 'Over 40 of the world\'s largest fund administrators operate in Luxembourg, providing custody, administration, and transfer agent services. This infrastructure supports the $5+ trillion in assets under administration, creating a self-reinforcing ecosystem of financial expertise.'
  },

  // Sub-level 4
  {
    id: 'e-green-bonds-market',
    level: 'analyst',
    category: 'finance',
    situation: 'Luxembourg Stock Exchange leads globally in what type of securities listing?',
    options: [
      'Green bonds and sustainable investment securities',
      'Cryptocurrency and blockchain tokens',
      'High-yield junk bonds',
      'Emerging market sovereign bonds',
    ],
    answer: 0,
    explanation: 'The Luxembourg Stock Exchange is a global leader in green bonds and sustainable securities listing, with thousands of ESG-compliant instruments. This positions Luxembourg as a crucial marketplace for channeling capital toward environmental and social projects.'
  },
  {
    id: 'e-eurostat-role',
    level: 'analyst',
    category: 'eu_institutions',
    situation: 'What is Eurostat, and where is it headquartered?',
    options: [
      'The EU\'s statistical office, headquartered in Luxembourg',
      'The European Central Bank\'s data division in Frankfurt',
      'A private European statistics company',
      'A database system run by member states',
    ],
    answer: 0,
    explanation: 'Eurostat is the official statistical office of the European Union, headquartered in Luxembourg. It produces reliable, impartial, and high-quality statistics on the EU and its member states, providing essential data for policy-making and research.'
  },
  {
    id: 'e-tax-ruling-history',
    level: 'analyst',
    category: 'finance',
    situation: 'What was the LuxLeaks scandal related to?',
    options: [
      'Tax rulings granted to multinational companies by Luxembourg',
      'Leaks of classified EU budget information',
      'Disclosure of private banking client details',
      'Unauthorized access to ECB computer systems',
    ],
    answer: 0,
    explanation: 'LuxLeaks (2014) revealed that Luxembourg had granted favorable tax rulings to hundreds of multinational companies, substantially reducing their tax burdens. This scandal led to increased scrutiny of Luxembourg\'s tax practices and inspired OECD/EU measures against aggressive tax avoidance.'
  },
  {
    id: 'e-delaware-comparison',
    level: 'analyst',
    category: 'finance',
    situation: 'Luxembourg is sometimes compared to which U.S. state for its corporate-friendly policies?',
    options: [
      'Delaware',
      'Nevada',
      'Florida',
      'New York',
    ],
    answer: 0,
    explanation: 'Luxembourg is often compared to Delaware as both jurisdictions offer favorable corporate and tax environments that attract international businesses. However, Luxembourg operates within the EU regulatory framework, while Delaware functions within U.S. law, creating different opportunities and constraints.'
  },
  {
    id: 'e-arcelmittal-workforce',
    level: 'analyst',
    category: 'steel',
    situation: 'Despite being headquartered in Luxembourg, what percentage of ArcelorMittal\'s workforce is actually employed in Luxembourg?',
    options: [
      'Less than 1% (headquarters only; most operations are globally distributed)',
      'Around 15-20%',
      'Around 40-50%',
      'Around 60-70%',
    ],
    answer: 0,
    explanation: 'While ArcelorMittal maintains its global headquarters in Luxembourg City, the country employs less than 1% of the company\'s total workforce of over 190,000. Most operations are conducted in other countries, particularly Ukraine, the USA, and India, making Luxembourg primarily a management and coordination center.'
  },

  // Sub-level 5
  {
    id: 'e-real-estate-market',
    level: 'analyst',
    category: 'indicators',
    situation: 'Luxembourg\'s real estate market is notable for what characteristic?',
    options: [
      'Rapid price appreciation driven by wealthy cross-border workers and limited housing supply',
      'Stable, affordable prices available to all income levels',
      'Decline in property values over the past decade',
      'Primarily commercial real estate development',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s real estate market has experienced rapid price appreciation, particularly around Luxembourg City and commuter areas. Limited housing supply combined with high demand from wealthy cross-border workers and international professionals has made property acquisition increasingly challenging for average residents.'
  },
  {
    id: 'e-social-economy-initiatives',
    level: 'analyst',
    category: 'finance',
    situation: 'What is the social economy in Luxembourg\'s context?',
    options: [
      'Non-profit organizations, cooperatives, and social enterprises addressing social issues',
      'Government welfare programs and unemployment benefits',
      'Social networking platforms and internet companies',
      'Regulation of labor unions and collective bargaining',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s social economy encompasses non-profits, cooperatives, and social enterprises that address community needs while generating sustainable revenues. The sector is increasingly recognized by policymakers as complementary to traditional commercial markets.'
  },
  {
    id: 'e-pension-fund-administration',
    level: 'analyst',
    category: 'banking',
    situation: 'Luxembourg is also a major hub for what type of institutional fund administration?',
    options: [
      'Pension funds and employee benefit trusts',
      'Only mutual funds and ETFs',
      'Cryptocurrency wallets and exchanges',
      'Insurance premium collection only',
    ],
    answer: 0,
    explanation: 'Luxembourg hosts significant pension fund and employee benefit trust administration, serving multinational corporations and international institutions. The country\'s neutral jurisdiction status and CSSF oversight make it attractive for pension and benefit fund domiciliation.'
  },
  {
    id: 'e-fintech-regulatory',
    level: 'analyst',
    category: 'startups',
    situation: 'How has Luxembourg approached fintech regulation?',
    options: [
      'Created favorable regulatory sandbox and streamlined licensing for blockchain and digital currency firms',
      'Banned all blockchain technology and cryptocurrency',
      'Applied identical regulations to fintech as traditional banks',
      'Allowed fintech to operate entirely unregulated',
    ],
    answer: 0,
    explanation: 'Luxembourg has adopted a proactive approach to fintech regulation, creating regulatory sandboxes, favorable licensing pathways, and specific guidance for blockchain and digital currency firms. This forward-looking stance positions Luxembourg as a European hub for financial innovation.'
  },
  {
    id: 'e-moody-aaa-rating',
    level: 'analyst',
    category: 'indicators',
    situation: 'What credit rating does Luxembourg hold from major rating agencies?',
    options: [
      'AAA (highest possible rating) from all major agencies',
      'AA+ from most agencies',
      'A from major agencies',
      'BBB from most agencies',
    ],
    answer: 0,
    explanation: 'Luxembourg maintains the highest possible credit rating (AAA) from all major rating agencies (Moody\'s, S&P, Fitch), reflecting its economic strength, stable institutions, and conservative fiscal policies. This top-tier rating enables Luxembourg to borrow at favorable rates on international capital markets.'
  },
]

// ============================================================
// STRATEGIST LEVEL (Deeper understanding of systems and structures)
// ============================================================

const STRATEGIST = [
  // Sub-level 1
  {
    id: 'e-sicav-sicaf-difference',
    level: 'strategist',
    category: 'funds',
    situation: 'What is the difference between a SICAV and a SICAF in Luxembourg fund structures?',
    options: [
      'SICAV is open-ended (variable capital) while SICAF is closed-ended (fixed capital)',
      'SICAV is for bonds while SICAF is for equities',
      'SICAV is for Luxembourg residents while SICAF is for non-residents',
      'SICAF is older; SICAV is the newer framework',
    ],
    answer: 0,
    explanation: 'A SICAV (Société d\'Investissement à Capital Variable) is an open-ended fund structure with variable capital that can issue and redeem shares continuously, while a SICAF (Société d\'Investissement à Capital Fixe) is a closed-ended fund with fixed capital. Both are standard Luxembourg fund structures catering to different investor needs.'
  },
  {
    id: 'e-sif-structure',
    level: 'strategist',
    category: 'funds',
    situation: 'What is a SIF, and what type of investments does it typically manage?',
    options: [
      'Specialized Investment Fund; typically manages private equity, real estate, and illiquid assets',
      'Structured Investment Facility; manages only government bonds',
      'Securities and Insurance Fund; regulates insurance companies',
      'Special Investment Scheme; government-managed only',
    ],
    answer: 0,
    explanation: 'A SIF (Specialized Investment Fund) is a Luxembourg fund structure designed for professional and semi-professional investors, particularly suited for private equity, real estate, infrastructure, and other alternative investments. SIFs offer greater flexibility than UCITS in terms of portfolio composition and investor restrictions.'
  },
  {
    id: 'e-luxembourg-space-resources',
    level: 'strategist',
    category: 'startups',
    situation: 'In what year did Luxembourg pass pioneering legislation on space resources?',
    options: [
      '2017',
      '2010',
      '2014',
      '2020',
    ],
    answer: 0,
    explanation: 'In 2017, Luxembourg became one of the first countries to establish a legal framework for space resource exploration and exploitation, allowing companies to extract minerals and resources from asteroids and celestial bodies. This legislation positions Luxembourg as a leader in the emerging space economy.'
  },
  {
    id: 'e-freeport-luxembourg',
    level: 'strategist',
    category: 'trade',
    situation: 'What is Freeport Luxembourg used for?',
    options: [
      'Storage and logistics hub for valuable goods in a customs-free zone',
      'A theme park and tourist destination',
      'A military installation and weapons depot',
      'A manufacturing center for industrial exports',
    ],
    answer: 0,
    explanation: 'Freeport Luxembourg is a customs-free bonded warehouse facility for storing, exhibiting, and trading valuable goods such as art, jewelry, watches, and rare items. It provides tax efficiency for international traders and collectors, particularly for high-value goods in transit.'
  },
  {
    id: 'e-securitization-vehicles',
    level: 'strategist',
    category: 'finance',
    situation: 'Why are Luxembourg securitization vehicles popular with financial institutions?',
    options: [
      'Favorable regulatory environment, tax treaties, and CSSF expertise enabling efficient asset-backed security issuance',
      'Lowest interest rates in the world',
      'Direct access to European Central Bank funding',
      'Exemption from EU financial regulations',
    ],
    answer: 0,
    explanation: 'Luxembourg offers a sophisticated environment for securitization transactions, combining favorable tax treatment, extensive debt financing infrastructure, and CSSF regulatory expertise. Financial institutions use Luxembourg securitization vehicles to efficiently transform illiquid assets into tradable securities.'
  },

  // Sub-level 2
  {
    id: 'e-lettres-de-gage',
    level: 'strategist',
    category: 'banking',
    situation: 'What are "lettres de gage" (covered bonds) in Luxembourg\'s financial system?',
    options: [
      'Mortgage-backed bonds secured by a pool of mortgages, a key funding source for banks',
      'Letters of credit issued by the government',
      'Unsecured corporate bonds issued by businesses',
      'Regulatory approval documents from CSSF',
    ],
    answer: 0,
    explanation: 'Lettres de gage (covered bonds) are mortgage-backed securities where specific assets (typically mortgages) provide direct recourse to the issuing bank. They are a significant funding mechanism for Luxembourg banks and are governed by specific regulatory frameworks protecting investors.'
  },
  {
    id: 'e-aifmd-compliance',
    level: 'strategist',
    category: 'funds',
    situation: 'Under AIFMD, what is the primary role of the AIFM (Alternative Investment Fund Manager)?',
    options: [
      'Managing the fund\'s portfolio, risk management, and regulatory compliance',
      'Only collecting fees from investors',
      'Solely providing custody of fund assets',
      'Setting investment policy only',
    ],
    answer: 0,
    explanation: 'The AIFM has comprehensive responsibility for portfolio management, risk oversight, regulatory compliance, and investor protection within the AIFMD framework. Luxembourg\'s AIFM industry includes major global managers and specialized boutiques catering to diverse alternative investment strategies.'
  },
  {
    id: 'e-estonian-digital-governance',
    level: 'strategist',
    category: 'startups',
    situation: 'Luxembourg is developing expertise in what area of digital governance?',
    options: [
      'Blockchain-based government services and digital identity solutions',
      'Traditional paper-based administration modernization',
      'Only banking software development',
      'Internet censorship technologies',
    ],
    answer: 0,
    explanation: 'Luxembourg is investing in blockchain and distributed ledger technology for government services, following digital governance models pioneered by Estonia. These initiatives aim to modernize public administration, improve citizen services, and position Luxembourg as a leader in digital innovation.'
  },
  {
    id: 'e-european-stability-mechanism',
    level: 'strategist',
    category: 'finance',
    situation: 'What is the European Stability Mechanism (ESM)?',
    options: [
      'An intergovernmental organization providing financial assistance to Eurozone members in financial difficulty',
      'A European stock exchange system',
      'A trade policy organization',
      'A regulatory body for bank capital requirements',
    ],
    answer: 0,
    explanation: 'The European Stability Mechanism (ESM) is an international organization that provides financial assistance to Eurozone member states experiencing fiscal crises. While headquartered in Germany, Luxembourg is significantly involved in ESM operations and participates as both a member and financial center.'
  },
  {
    id: 'e-etf-listing-hub',
    level: 'strategist',
    category: 'finance',
    situation: 'The Luxembourg Stock Exchange is a global leader in listing what type of instruments?',
    options: [
      'Exchange-traded funds (ETFs) and indices',
      'Cryptocurrency coins and tokens',
      'Agricultural commodity futures',
      'Sports betting derivatives',
    ],
    answer: 0,
    explanation: 'The Luxembourg Stock Exchange is a global leader for ETF listing, hosting thousands of exchange-traded funds covering diverse asset classes and strategies. This makes it a crucial global platform for passive and factor-based investing.'
  },

  // Sub-level 3
  {
    id: 'e-frdl-sovereign-wealth',
    level: 'strategist',
    category: 'finance',
    situation: 'What is FRDL, and what does it represent for Luxembourg?',
    options: [
      'Fonds de Réserve et de Stabilisation: sovereign wealth fund managing state reserves',
      'Federal Reserve Department of Luxembourg: central banking authority',
      'Financial Reserve Development Law: outdated legislation',
      'Future Resources Development Loan: credit facility',
    ],
    answer: 0,
    explanation: 'FRDL (Fonds de Réserve et de Stabilisation) is Luxembourg\'s sovereign wealth fund, established to manage excess fiscal revenues and provide financial reserves during economic downturns. It represents Luxembourg\'s prudent fiscal management and long-term economic stabilization strategy.'
  },
  {
    id: 'e-gilts-equivalent',
    level: 'strategist',
    category: 'finance',
    situation: 'What is the equivalent term for Luxembourg\'s government bonds in international markets?',
    options: [
      'OLOs (Obligations Linéaires); traded on Luxembourg Stock Exchange',
      'LuxBonds; traded only domestically',
      'EuroBonds; managed by ECB',
      'TreasuryLux; government-only instruments',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s government bonds, called OLOs (Obligations Linéaires), are issued on the capital markets and traded globally. They benefit from Luxembourg\'s AAA credit rating and are attractive to international investors as high-quality, low-risk securities.'
  },
  {
    id: 'e-fund-distribution-network',
    level: 'strategist',
    category: 'funds',
    situation: 'How do funds domiciled in Luxembourg achieve global distribution?',
    options: [
      'Through UCITS passport rights and established distribution networks with banks, brokers, and advisors worldwide',
      'Only through Luxembourg-based financial institutions',
      'By hiring local salespeople in each country',
      'By listing on stock exchanges in each country',
    ],
    answer: 0,
    explanation: 'UCITS funds domiciled in Luxembourg can be distributed across EU member states under a single authorization, and non-UCITS funds leverage Luxembourg\'s established relationships with global distributors. This creates powerful network effects making Luxembourg an efficient domiciliation jurisdiction.'
  },
  {
    id: 'e-crossborder-tax-treaties',
    level: 'strategist',
    category: 'finance',
    situation: 'What advantage do Luxembourg\'s extensive tax treaties provide to financial institutions?',
    options: [
      'Reduced withholding taxes and favorable treaty provisions enabling efficient cross-border investing and fund structuring',
      'Complete exemption from all taxation',
      'Direct access to profits from foreign countries',
      'Unlimited leverage on international loans',
    ],
    answer: 0,
    explanation: 'Luxembourg has negotiated over 100 bilateral tax treaties with countries worldwide, providing significantly reduced withholding taxes on dividends, interest, and royalties. These treaties are crucial for efficient international fund structuring and cross-border investment flows.'
  },
  {
    id: 'e-green-finance-certification',
    level: 'strategist',
    category: 'finance',
    situation: 'What certification system has Luxembourg developed for green and sustainable investments?',
    options: [
      'LuxFLAG (Luxembourg Fund Labelling Agency) certifying ESG and sustainable funds',
      'GreenCert: government-only certification',
      'EULabel: EU-wide certification body',
      'ClimateScore: automated algorithm-based system',
    ],
    answer: 0,
    explanation: 'LuxFLAG (Luxembourg Fund Labelling Agency) provides independent certification for funds meeting strict ESG, environmental sustainability, and social responsibility criteria. The label enhances investor confidence and facilitates marketing of sustainable funds globally.'
  },

  // Sub-level 4
  {
    id: 'e-notional-pooling',
    level: 'strategist',
    category: 'banking',
    situation: 'What financial service do Luxembourg banks frequently offer through notional pooling arrangements?',
    options: [
      'Centralized cash management for multinational corporations operating across multiple countries',
      'Pooled investment accounts for retail investors',
      'Risk pooling for insurance companies',
      'Loan syndication for government debt',
    ],
    answer: 0,
    explanation: 'Luxembourg banks provide notional pooling services enabling multinational corporations to consolidate cash across multiple subsidiaries and countries for efficient liquidity management. This is a high-value financial service requiring sophisticated banking infrastructure and regulatory expertise.'
  },
  {
    id: 'e-private-equity-hub',
    level: 'strategist',
    category: 'funds',
    situation: 'Why is Luxembourg a significant hub for private equity fund domiciliation?',
    options: [
      'SIF structure, favorable tax treatment, and established investor base provide competitive advantages',
      'Direct control over European acquisition targets',
      'Exemption from financial regulatory oversight',
      'Automatic access to public company buyout opportunities',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s SIF structure, favorable tax regime, and deep experience in alternative fund management make it attractive for private equity funds. The country\'s proximity to major European markets and established distribution networks provide additional advantages.'
  },
  {
    id: 'e-infrastructure-investment',
    level: 'strategist',
    category: 'finance',
    situation: 'How does Luxembourg facilitate infrastructure investment fund structures?',
    options: [
      'Through SIFs and specialized funds providing long-term capital for transport, energy, and utility projects',
      'Direct government equity stakes in infrastructure projects',
      'Only through traditional bank lending',
      'Via stock market IPOs exclusively',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s SIF framework allows professional investors to commit long-term capital to infrastructure projects with illiquid investment profiles. This is increasingly important for funding European infrastructure needs and renewable energy transitions.'
  },
  {
    id: 'e-real-estate-fund-structure',
    level: 'strategist',
    category: 'funds',
    situation: 'How are real estate funds typically structured in Luxembourg?',
    options: [
      'As SIFs or closed-ended SICAFs with professional investors providing long-term real estate capital',
      'Only as open-ended UCITS funds',
      'Through direct government real estate ownership',
      'Via bank mortgage portfolios solely',
    ],
    answer: 0,
    explanation: 'Real estate funds in Luxembourg are typically structured as SIFs or closed-ended SICAFs, allowing professional investors to deploy long-term capital into European real estate with potential for appreciation and income generation. This structure is preferred for its flexibility and alignment with illiquid real estate investments.'
  },
  {
    id: 'e-cybersecurity-fintech',
    level: 'strategist',
    category: 'startups',
    situation: 'What cybersecurity focus does Luxembourg\'s fintech ecosystem emphasize?',
    options: [
      'Blockchain security, cryptography, and distributed ledger protection',
      'Only password encryption',
      'Antivirus software development',
      'Network firewall infrastructure',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s fintech community emphasizes blockchain security, cryptographic protocols, and distributed ledger technology given the country\'s focus on digital financial innovation. This specialization attracts cybersecurity experts and emerging fintech startups.'
  },

  // Sub-level 5
  {
    id: 'e-fund-of-funds-strategy',
    level: 'strategist',
    category: 'funds',
    situation: 'Why is Luxembourg a hub for "fund of funds" structures?',
    options: [
      'Tax efficiency, regulatory clarity, and diversification advantages enabling institutional investors to access multiple strategies',
      'Only mutual fund strategy available',
      'Direct access to stock picking opportunities',
      'Guaranteed investment returns',
    ],
    answer: 0,
    explanation: 'Fund of funds structures domiciled in Luxembourg provide institutional investors with diversified exposure to multiple underlying funds and strategies. The favorable tax treatment and regulatory clarity make Luxembourg an efficient domiciliation jurisdiction for these complex structures.'
  },
  {
    id: 'e-junckers-investment-plan',
    level: 'strategist',
    category: 'finance',
    situation: 'What was the Juncker Investment Plan, and what was Luxembourg\'s role?',
    options: [
      'EU investment stimulus program (2015-2020) financing infrastructure; Luxembourg hosted supporting institutions and financing vehicles',
      'German-only economic stimulus',
      'Luxembourg\'s domestic development program',
      'Private equity restructuring initiative',
    ],
    answer: 0,
    explanation: 'The Juncker Investment Plan (2015-2020) was a major EU initiative mobilizing investment across the Union. Luxembourg hosted implementing institutions and structured numerous financing vehicles channeling capital into European infrastructure, research, and social programs.'
  },
  {
    id: 'e-captive-insurance-vehicles',
    level: 'strategist',
    category: 'banking',
    situation: 'What role do captive insurance vehicles play in Luxembourg\'s financial ecosystem?',
    options: [
      'Allow multinational corporations to self-insure through subsidiary insurance companies providing risk management',
      'Direct insurance products for retail consumers',
      'Government-managed social insurance only',
      'Traditional reinsurance treaties',
    ],
    answer: 0,
    explanation: 'Luxembourg hosts numerous captive insurance vehicles enabling multinational corporations to establish subsidiary insurance companies managing their own risks. This provides cost savings, risk control, and favorable regulatory treatment compared to traditional insurance approaches.'
  },
  {
    id: 'e-trade-finance-hubs',
    level: 'strategist',
    category: 'trade',
    situation: 'How does Luxembourg participate in international trade finance?',
    options: [
      'Through banks and specialized lenders providing supply chain financing, letters of credit, and trade facilities',
      'Only through commodity exchanges',
      'Direct tariff and customs administration only',
      'Via maritime shipping regulation',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s banking sector provides sophisticated trade finance services including supply chain financing, letter of credit issuance, and working capital facilities. These services support international trade and enable efficient global commerce.'
  },
  {
    id: 'e-esg-integration-strategy',
    level: 'strategist',
    category: 'finance',
    situation: 'What is Luxembourg\'s strategic approach to ESG (Environmental, Social, Governance) integration?',
    options: [
      'Comprehensive framework combining regulation, labeling (LuxFLAG), and financial market infrastructure promoting sustainable investing',
      'No integration of ESG considerations',
      'Voluntary industry-only commitments',
      'ESG focus exclusively on large corporations',
    ],
    answer: 0,
    explanation: 'Luxembourg has developed a comprehensive ESG strategy integrating regulatory requirements, investor protection, market infrastructure, and certification schemes. This creates a complete ecosystem supporting the flow of capital toward sustainable and socially responsible investments.'
  },
]

// ============================================================
// EXPERT LEVEL (Specialist/niche knowledge)
// ============================================================

const EXPERT = [
  // Sub-level 1
  {
    id: 'e-aifmd-thresholds',
    level: 'expert',
    category: 'funds',
    situation: 'Under AIFMD, what is the significance of the 500 million EUR threshold for AIFMs?',
    options: [
      'AIFMs with EUR 500M+ AUM must comply with stricter prudential requirements and risk management standards',
      'Only AIFMs below 500M EUR can operate',
      'The threshold determines fund currency only',
      'It only applies to banks, not fund managers',
    ],
    answer: 0,
    explanation: 'The EUR 500 million AUM threshold triggers enhanced regulatory requirements under AIFMD, including stricter own fund requirements, risk management protocols, and governance standards. This tiered approach balances regulatory protection with operational flexibility for smaller managers.'
  },
  {
    id: 'e-mmf-regulation',
    level: 'expert',
    category: 'funds',
    situation: 'What are Money Market Funds (MMFs), and how are they regulated differently in Luxembourg?',
    options: [
      'Low-risk liquid funds investing in short-term debt; subject to enhanced regulatory requirements including capital buffers and liquidity stress testing',
      'Equity mutual funds with high volatility',
      'Government-guaranteed savings accounts',
      'Bank deposits only',
    ],
    answer: 0,
    explanation: 'Money Market Funds are UCITS or AIFs investing in short-term debt instruments, regulated under EU money market fund rules. Luxembourg hosts significant MMF domicilation due to expertise in managing liquidity, credit risk, and regulatory compliance in this sensitive asset class.'
  },
  {
    id: 'e-depositary-functions',
    level: 'expert',
    category: 'funds',
    situation: 'What are the key fiduciary responsibilities of a depositary for UCITS funds in Luxembourg?',
    options: [
      'Custody of assets, segregation of fund property, monitoring of compliance, and cash oversight',
      'Only collecting management fees',
      'Sole decision-making on fund investments',
      'Advertising and distribution only',
    ],
    answer: 0,
    explanation: 'The depositary holds critical fiduciary responsibilities including safeguarding fund assets, ensuring segregation of fund property from the management company, monitoring legal compliance, and overseeing cash flows. Luxembourg hosts major international depositaries providing these services.'
  },
  {
    id: 'e-space-mining-legislation',
    level: 'expert',
    category: 'startups',
    situation: 'What specific legal framework did Luxembourg establish in 2017 regarding space resources?',
    options: [
      'Law on the Exploration and Use of Space Resources, defining property rights and regulatory oversight for space mining',
      'Aerial property rights legislation',
      'Satellite broadcasting regulations',
      'International space treaty enforcement',
    ],
    answer: 0,
    explanation: 'In 2017, Luxembourg passed pioneering legislation establishing property rights and regulatory frameworks for space resource exploration and exploitation. This includes defining ownership rights, licensing procedures, and benefit-sharing arrangements for companies engaged in asteroid mining and space resource extraction.'
  },
  {
    id: 'e-cta-registration',
    level: 'expert',
    category: 'funds',
    situation: 'What does CTA stand for in the context of Luxembourg funds, and what special status might a CTA have?',
    options: [
      'Commodity Trading Advisor; may be registered as such if managing commodity-focused alternative strategies',
      'Complex Trading Agreement; purely legal contract',
      'Capital Trading Authority; regulatory body',
      'Centralized Treasury Account; banking function',
    ],
    answer: 0,
    explanation: 'A Commodity Trading Advisor (CTA) manages commodity-focused investment strategies and may be registered with relevant authorities. Luxembourg hosts CTAs managing algorithmic trading, trend-following, and other commodity strategies for qualified investors.'
  },

  // Sub-level 2
  {
    id: 'e-ucits-merger-procedures',
    level: 'expert',
    category: 'funds',
    situation: 'What regulatory pathway does Luxembourg provide for UCITS fund mergers?',
    options: [
      'Streamlined merger procedures under UCITS V allowing funds to consolidate with CSSF approval and investor notification',
      'Mergers are prohibited',
      'Only acquisitions by one fund of another permitted',
      'Mergers require EU Council approval',
    ],
    answer: 0,
    explanation: 'UCITS V (implemented in Luxembourg) created streamlined merger procedures enabling fund consolidations with efficient CSSF approval and proper investor protection. This facilitates portfolio rationalization and efficiency improvements for fund managers.'
  },
  {
    id: 'e-bilateral-currency-swaps',
    level: 'expert',
    category: 'finance',
    situation: 'What purpose do bilateral currency swap arrangements serve for Luxembourg banks in international markets?',
    options: [
      'Enable efficient hedging of currency exposure and liquidity management in multiple currencies',
      'Direct currency speculation only',
      'Government control of foreign exchange',
      'Prevention of import/export activity',
    ],
    answer: 0,
    explanation: 'Bilateral currency swaps allow Luxembourg banks to manage foreign currency exposure, access different currency liquidity, and hedge exchange rate risks. These derivative instruments are essential for banks servicing multinational corporations and international investors.'
  },
  {
    id: 'e-reit-equivalent',
    level: 'expert',
    category: 'funds',
    situation: 'What is the Luxembourg equivalent to U.S. REITs (Real Estate Investment Trusts)?',
    options: [
      'Real Estate Funds structured as SICAFs or SIFs with similar pass-through tax treatment',
      'Government-owned real estate companies',
      'Bank-only property holding vehicles',
      'Residential apartment complexes',
    ],
    answer: 0,
    explanation: 'Luxembourg real estate funds structured as closed-ended SICAFs or SIFs provide REIT-like structures offering real estate investment opportunities with favorable tax treatment. These funds deploy capital across European commercial and residential real estate.'
  },
  {
    id: 'e-dark-pool-regulation',
    level: 'expert',
    category: 'finance',
    situation: 'How does Luxembourg regulate dark pools (alternative trading systems) for equities?',
    options: [
      'Under MiFID II framework with transparent reporting, surveillance, and market abuse detection requirements',
      'Dark pools are prohibited',
      'No regulation of alternative venues',
      'Self-regulation only',
    ],
    answer: 0,
    explanation: 'Luxembourg applies EU MiFID II regulations to dark pools and alternative trading systems, requiring transparency reporting, market surveillance, and trading halts. This balances liquidity benefits with investor protection and market integrity.'
  },
  {
    id: 'e-loan-syndication-center',
    level: 'expert',
    category: 'banking',
    situation: 'How does Luxembourg function as a loan syndication center?',
    options: [
      'Major banks arrange large syndicated loans for corporate and project finance with efficient legal structures and documentation',
      'Only deposits and retail lending',
      'Government bond distribution exclusively',
      'Personal mortgage origination',
    ],
    answer: 0,
    explanation: 'Luxembourg banks are major arrangers and participants in syndicated lending for large corporate acquisition finance, project financing, and leveraged buyouts. The country\'s financial expertise and legal infrastructure support efficient syndication structures.'
  },

  // Sub-level 3
  {
    id: 'e-dusd-trading',
    level: 'expert',
    category: 'finance',
    situation: 'What is DUSD in the context of Luxembourg securities trading?',
    options: [
      'A digital/blockchain-based securities settlement system being developed for faster, more efficient transactions',
      'A currency equivalent to USD',
      'A regulatory reporting system',
      'A database of U.S. equities',
    ],
    answer: 0,
    explanation: 'Digital USD (DUSD) and similar blockchain-based settlement systems represent innovative infrastructure Luxembourg is exploring to modernize securities trading, settlement, and post-trade processes. These initiatives could enhance efficiency and reduce operational risks.'
  },
  {
    id: 'e-emir-derivative-reporting',
    level: 'expert',
    category: 'finance',
    situation: 'Under EMIR (European Market Infrastructure Regulation), what is required for derivatives transactions in Luxembourg?',
    options: [
      'Reporting to trade repositories, central clearing for standardized derivatives, and counterparty risk management',
      'No reporting requirements',
      'Only banks must report transactions',
      'Manual record-keeping only',
    ],
    answer: 0,
    explanation: 'EMIR mandates comprehensive reporting of derivatives transactions to registered trade repositories, central clearing of standardized derivatives through CCPs, and comprehensive counterparty risk management. Luxembourg hosts major derivatives market participants subject to these requirements.'
  },
  {
    id: 'e-arcelmittal-strategic-importance',
    level: 'expert',
    category: 'steel',
    situation: 'Why does Luxembourg maintain ArcelorMittal\'s headquarters despite minimal steel production domestically?',
    options: [
      'Headquarters location provides tax advantages, legal certainty, and preserves Luxembourg\'s industrial heritage and global prestige',
      'Steel production continues domestically',
      'Pure historical accident',
      'Only tax avoidance rationale',
    ],
    answer: 0,
    explanation: 'ArcelorMittal maintains its global headquarters in Luxembourg despite conducting most operations globally, reflecting the country\'s historical steel industry importance, favorable tax and regulatory environment, and strategic corporate governance advantages.'
  },
  {
    id: 'e-ifx-bonds-clearing',
    level: 'expert',
    category: 'finance',
    situation: 'What role does Luxembourg play in international bond clearing and settlement?',
    options: [
      'Major participant in Euroclear system operations and bond clearing for European securities',
      'Only handles domestic bond clearing',
      'No participation in international clearing',
      'Provides only information services',
    ],
    answer: 0,
    explanation: 'Luxembourg hosts significant operations for Euroclear and other international settlement systems that clear and settle bonds and securities traded on Luxembourg Stock Exchange. This infrastructure is critical for global capital markets functioning.'
  },
  {
    id: 'e-distressed-debt-strategies',
    level: 'expert',
    category: 'funds',
    situation: 'How do Luxembourg-domiciled distressed debt funds typically operate?',
    options: [
      'As SIFs investing in discounted debt instruments from financially troubled companies, acquiring claims and restructuring positions',
      'Direct equity investment only',
      'Government bailout programs',
      'Personal lending to individuals',
    ],
    answer: 0,
    explanation: 'Distressed debt funds domiciled in Luxembourg acquire discounted debt from financially troubled companies and work toward capital gains through debt restructuring, company turnarounds, or recovery events. The SIF structure provides flexibility for illiquid, long-duration strategies.'
  },

  // Sub-level 4
  {
    id: 'e-spv-structuring',
    level: 'expert',
    category: 'finance',
    situation: 'What are SPVs (Special Purpose Vehicles), and how are they used in Luxembourg\'s securitization market?',
    options: [
      'Bankruptcy-remote entities holding asset pools for securitization transactions, isolating credit risk and enabling efficient debt issuance',
      'General corporate entities for any business',
      'Government audit entities',
      'Employee benefit schemes',
    ],
    answer: 0,
    explanation: 'SPVs in Luxembourg securitizations are specifically designed legal entities that acquire and hold mortgage or asset pools, issuing securities backed by cash flows. Their bankruptcy-remote status protects investors even if the originating bank fails.'
  },
  {
    id: 'e-cross-jib-regulations',
    level: 'expert',
    category: 'finance',
    situation: 'Under cross-border MiFID II rules, what special provisions apply to Luxembourg fund managers distributing across EU member states?',
    options: [
      'Passporting rights enabling single authorization to market funds in all EU states with local compliance requirements',
      'Separate authorization in each country',
      'No restrictions on distribution',
      'Automatic marketing approval everywhere',
    ],
    answer: 0,
    explanation: 'EU passporting rights allow Luxembourg fund managers to market UCITS and certain AIFs across member states under a single authorization from CSSF, with country-specific documentation and compliance adaptations. This dramatically reduces market entry costs.'
  },
  {
    id: 'e-leverage-derivatives-limits',
    level: 'expert',
    category: 'funds',
    situation: 'What derivative leverage limitations apply to Luxembourg UCITS funds under UCITS V?',
    options: [
      'Leverage calculated through commitment approach with maximum limits depending on fund strategy; provides safeguards against excessive risk',
      'No limits on leverage',
      'Unlimited borrowing permitted',
      'Leverage forbidden completely',
    ],
    answer: 0,
    explanation: 'UCITS V introduced leverage limits using the commitment approach, restricting potential losses from derivative exposure. Different leverage limits apply based on fund investment strategy, providing investor protection while allowing legitimate hedging and efficient positioning.'
  },
  {
    id: 'e-forex-hedging-vehicles',
    level: 'expert',
    category: 'finance',
    situation: 'How do Luxembourg banks manage currency exposure for international corporate clients?',
    options: [
      'Through sophisticated FX hedging vehicles including forwards, swaps, and options customized to client needs',
      'Only accepting currency risk',
      'Direct currency speculation only',
      'Fixed exchange rate arrangements',
    ],
    answer: 0,
    explanation: 'Luxembourg banks provide comprehensive FX hedging services using forwards, swaps, options, and other derivative instruments tailored to multinational corporate clients\' currency exposure management needs. This is a high-value-added service supporting international commerce.'
  },
  {
    id: 'e-infrastructure-equity-secondaries',
    level: 'expert',
    category: 'funds',
    situation: 'What role do secondary market transactions play in Luxembourg infrastructure fund investing?',
    options: [
      'Allow funds to acquire LP positions in infrastructure funds at discounts, accessing mature stable assets with existing cash flows',
      'Only primary fund formation',
      'Direct project ownership exclusively',
      'Dividend reinvestment programs',
    ],
    answer: 0,
    explanation: 'Infrastructure secondary market transactions enable Luxembourg-domiciled funds to acquire existing limited partnership positions in mature infrastructure funds. This provides access to stabilized assets with predictable cash flows at acquisition discounts.'
  },

  // Sub-level 5
  {
    id: 'e-synthetic-cdo-structures',
    level: 'expert',
    category: 'finance',
    situation: 'What are synthetic CDOs, and how do they differ from cash CDOs in Luxembourg structuring?',
    options: [
      'Synthetic CDOs use credit derivatives to transfer risk without owning underlying assets, while cash CDOs own physical bonds/loans',
      'CDOs and CDOs are identical',
      'Synthetic means fake or invalid CDOs',
      'Cash CDOs are obsolete',
    ],
    answer: 0,
    explanation: 'Synthetic CDOs use credit default swaps to synthetically replicate bond/loan exposures without purchasing physical securities, enabling more efficient risk transfer. Cash CDOs actually acquire and hold underlying assets. Both structures are used in Luxembourg securitizations.'
  },
  {
    id: 'e-basel-iii-implementation',
    level: 'expert',
    category: 'banking',
    situation: 'How has Luxembourg implemented Basel III capital and liquidity requirements for banks?',
    options: [
      'Through CRD IV/CRR framework with capital buffers (CET1, Tier 1, Tier 2) and liquidity coverage ratios (LCR, NSFR)',
      'No capital requirements',
      'Only retail bank requirements',
      'Self-regulated without standards',
    ],
    answer: 0,
    explanation: 'Luxembourg banks comply with Basel III standards as implemented through EU CRD IV Directive and CRR Regulation, including minimum capital requirements (CET1, Tier 1, Tier 2) and liquidity metrics (LCR, NSFR). The CSSF monitors compliance continuously.'
  },
  {
    id: 'e-complex-derivatives-valuation',
    level: 'expert',
    category: 'finance',
    situation: 'How are exotic derivatives valued in Luxembourg\'s banking operations?',
    options: [
      'Using quantitative models (Black-Scholes variants, Monte Carlo simulations) with mark-to-market accounting and valuation adjustments',
      'Cost-based accounting only',
      'No valuation; value equals cost',
      'Market prices exclusively',
    ],
    answer: 0,
    explanation: 'Luxembourg banks value complex derivatives using sophisticated quantitative models including stochastic simulations, volatility surfaces, and correlation matrices. These valuations require mark-to-market accounting with credit/counterparty/funding/capital valuation adjustments (CVA, DVA, FVA, KVA).'
  },
  {
    id: 'e-private-wealth-structures',
    level: 'expert',
    category: 'banking',
    situation: 'What specialized private wealth structures do Luxembourg institutions offer?',
    options: [
      'Family offices, holding companies, and trusts enabling efficient multigenerational wealth management and tax planning',
      'Only bank accounts',
      'Government investment programs',
      'Real estate ownership only',
    ],
    answer: 0,
    explanation: 'Luxembourg offers specialized private wealth structures including family offices providing investment management, holding companies providing deferral opportunities, and trust vehicles enabling flexible wealth transfer. These cater to high-net-worth individuals and families globally.'
  },
  {
    id: 'e-collateral-optimization',
    level: 'expert',
    category: 'banking',
    situation: 'What techniques do Luxembourg banks use for collateral management optimization?',
    options: [
      'Collateral substitution, haircut management, and multilateral collateral networks to maximize capital efficiency',
      'No collateral management',
      'Fixed collateral requirements forever',
      'Collateral prohibited',
    ],
    answer: 0,
    explanation: 'Luxembourg banks employ sophisticated collateral management techniques including substitution rights (allowing collateral swaps), dynamic haircut optimization, and participation in multilateral collateral networks. These maximize capital efficiency while maintaining credit protection.'
  },
]

// ============================================================
// ECONOMIST LEVEL (Niche/research-level expertise)
// ============================================================

const ECONOMIST = [
  // Sub-level 1
  {
    id: 'e-gdp-calculation-crossborder',
    level: 'economist',
    category: 'indicators',
    situation: 'How does Luxembourg\'s GDP calculation account for the significant cross-border workforce?',
    options: [
      'GDP includes value added by non-resident cross-border workers; creates measurement issues when comparing productivity metrics',
      'Cross-border workers excluded from GDP entirely',
      'Counted as a separate GDP component',
      'No adjustment for cross-border workforce',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s GDP includes value added by approximately 47% of its workforce who are non-resident cross-border workers, creating accounting complexities. This makes per-capita metrics potentially misleading as they measure value added in Luxembourg divided by resident population, not work performed.'
  },
  {
    id: 'e-financial-sector-fragility',
    level: 'economist',
    category: 'finance',
    situation: 'What economic vulnerability does Luxembourg\'s dependence on the financial sector create?',
    options: [
      'Concentrated economic dependence on financial sector (30-35% of GDP) creates vulnerability to global financial crises and regulatory shifts',
      'Financial sector diversification ensures stability',
      'No economic vulnerability exists',
      'Financial sector makes economy more resilient',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s substantial financial sector dependence (30-35% of GDP, over 800% of financial assets) creates economic fragility: financial crises, regulatory changes, or geopolitical shifts can disproportionately impact the entire economy despite historically strong fiscal management.'
  },
  {
    id: 'e-monetary-transmission',
    level: 'economist',
    category: 'banking',
    situation: 'What unique aspects characterize monetary policy transmission in Luxembourg as a Eurozone member?',
    options: [
      'ECB policies transmitted through banking system; Luxembourg\'s deep financial markets amplify some effects; limited independent monetary policy tool',
      'Luxembourg controls its own monetary policy',
      'No ECB influence on Luxembourg',
      'Monetary policy irrelevant in Luxembourg',
    ],
    answer: 0,
    explanation: 'As a Eurozone member, Luxembourg\'s monetary policy is determined by the European Central Bank. However, Luxembourg\'s deep financial markets and large international banking sector can amplify ECB monetary transmission effects, sometimes creating different outcomes than less financial-dependent economies.'
  },
  {
    id: 'e-sovereign-wealth-countercyclical',
    level: 'economist',
    category: 'finance',
    situation: 'How has Luxembourg\'s sovereign wealth fund (FRDL) been used to manage economic cycles?',
    options: [
      'Accumulates surpluses during boom periods; provides countercyclical spending during downturns to stabilize economy',
      'Distributed all savings annually',
      'Invested only in equities',
      'No countercyclical function',
    ],
    answer: 0,
    explanation: 'The Fonds de Réserve et de Stabilisation (FRDL) accumulates budget surpluses during growth periods and provides resources for countercyclical fiscal policy during downturns. This mechanism partly insulates Luxembourg from fiscal constraints during recessions, similar to sovereign wealth fund operations in resource-rich economies.'
  },
  {
    id: 'e-benelux-customs-history',
    level: 'economist',
    category: 'trade',
    situation: 'What was the historical significance of the Benelux Customs Union for Luxembourg\'s economic development?',
    options: [
      'Established free trade between Belgium, Netherlands, Luxembourg (1944-1958); precursor to EU integration providing market access',
      'Current trade agreement',
      'Bilateral agreement only',
      'No historical importance',
    ],
    answer: 0,
    explanation: 'The Benelux Customs Union (1944-1958) established free trade and labor mobility between Belgium, Netherlands, and Luxembourg, providing a small country access to larger markets. It pioneered customs union concepts later embedded in the European Economic Community and EU.'
  },

  // Sub-level 2
  {
    id: 'e-zollverein-predecessor',
    level: 'economist',
    category: 'trade',
    situation: 'What historical trade union preceded Luxembourg\'s modern economic integration?',
    options: [
      'The German Zollverein (1834); Luxembourg initially participated, influencing trade preferences',
      'The ECSC (European Coal and Steel Community)',
      'Direct EU membership',
      'Benelux only arrangement',
    ],
    answer: 0,
    explanation: 'Luxembourg initially joined the German Zollverein (customs union) in 1834, exposing the country to German trade patterns and markets. This historical precedent influenced Luxembourg\'s later search for larger economic partnerships, eventually finding them through ECSC and EU membership.'
  },
  {
    id: 'e-ecsc-founding',
    level: 'economist',
    category: 'eu_institutions',
    situation: 'What was the ECSC, and how did it affect Luxembourg\'s steel industry?',
    options: [
      'European Coal and Steel Community (1951-2002); removed tariffs on steel, exposed Luxembourg to competition but enabled scale economies',
      'A mining company',
      'A trade union organization',
      'A shipping consortium',
    ],
    answer: 0,
    explanation: 'The ECSC (1951-2002) was the first EU-predecessor organization, establishing free trade in coal and steel. It exposed Luxembourg\'s steel industry to European competition but enabled access to larger markets, driving consolidation and technological advancement.'
  },
  {
    id: 'e-schuman-declaration',
    level: 'economist',
    category: 'eu_institutions',
    situation: 'What was the significance of the Schuman Declaration (1950) for Luxembourg\'s future?',
    options: [
      'Proposed European Coal and Steel Community integration; Luxembourg\'s geographic position made it crucial bridge between France and Germany',
      'Rejected European integration',
      'Proposed currency union only',
      'German rearmament declaration',
    ],
    answer: 0,
    explanation: 'The Schuman Declaration (1950) proposed the ECSC, transforming coal and steel industries through supranational integration. Luxembourg\'s geographic centrality and steel industry made it strategically important for the project, embedding it early in European integration.'
  },
  {
    id: 'e-financial-repression-effects',
    level: 'economist',
    category: 'finance',
    situation: 'How might financial repression policies in other EU countries affect Luxembourg\'s financial sector?',
    options: [
      'Capital controls, deposit restrictions, and regulated rates in other countries may drive capital flows toward Luxembourg\'s open markets',
      'No impact on Luxembourg',
      'Increases Luxembourg\'s restrictions',
      'Eliminates financial flows',
    ],
    answer: 0,
    explanation: 'Financial repression in other countries (capital controls, negative real interest rates, deposit restrictions) can create regulatory arbitrage opportunities, channeling capital toward Luxembourg\'s relatively open financial markets and attracting international financial activity.'
  },
  {
    id: 'e-terms-of-trade-volatility',
    level: 'economist',
    category: 'trade',
    situation: 'How does Luxembourg\'s terms of trade volatility typically manifest?',
    options: [
      'Primarily through financial services pricing and investment valuations; distinct from commodity-dependent economies',
      'Steel price volatility mainly',
      'Currency appreciation exclusively',
      'Fixed terms of trade',
    ],
    answer: 0,
    explanation: 'Unlike commodity exporters, Luxembourg\'s terms of trade fluctuate based on global financial asset valuations, spread movements, and investment demand. This financial-services-driven volatility operates through different channels than commodity price swings, affecting both revenues and asset values.'
  },

  // Sub-level 3
  {
    id: 'e-regulatory-arbitrage-concentration',
    level: 'economist',
    category: 'finance',
    situation: 'What regulatory arbitrage mechanisms enable Luxembourg to concentrate fund management globally?',
    options: [
      'UCITS passporting, favorable tax treaties, CSSF expertise, and distributed regulatory interpretation enable fund domiciliation arbitrage',
      'No arbitrage mechanisms exist',
      'Same regulations everywhere',
      'Higher regulatory burden in Luxembourg',
    ],
    answer: 0,
    explanation: 'Regulatory arbitrage fundamentally explains Luxembourg\'s fund dominance: UCITS single passport allows EU distribution, favorable tax treaties reduce withholding taxes, CSSF expertise reduces compliance costs, and interpretation differences with other regulators create advantages for domiciliation.'
  },
  {
    id: 'e-financial-deepening-metrics',
    level: 'economist',
    category: 'finance',
    situation: 'How is financial deepening measured for Luxembourg given its outsized financial sector?',
    options: [
      'Standard metrics (credit/GDP, assets/GDP) become distorted; require adjusted baselines comparing to other financial hubs',
      'Standard GDP-relative metrics apply',
      'Financial deepening immeasurable',
      'No metrics exist',
    ],
    answer: 0,
    explanation: 'Traditional financial deepening metrics (credit-to-GDP, assets-to-GDP) become economically meaningless for Luxembourg given that financial assets under supervision exceed 800% of GDP. Economists must adjust baselines and compare Luxembourg to other financial centers rather than normal economy benchmarks.'
  },
  {
    id: 'e-monetary-base-composition',
    level: 'economist',
    category: 'banking',
    situation: 'What unusual characteristics does Luxembourg\'s banking system impart on monetary base composition in the Eurozone?',
    options: [
      'Large foreign currency deposits and external liabilities create atypical monetary base relationships; reserve requirements less constraining',
      'Normal monetary base composition',
      'No monetary base effects',
      'Monetary base irrelevant',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s banking system, dominated by international banks and deposit flows, creates unusual monetary base composition with substantial non-euro liabilities and external funds flows. Traditional reserve requirements and monetary base relationships operate differently than in typical Eurozone economies.'
  },
  {
    id: 'e-fiscal-space-mechanisms',
    level: 'economist',
    category: 'finance',
    situation: 'How does Luxembourg maintain fiscal space despite being in the Eurozone?',
    options: [
      'Historically strong financial sector revenues, low unemployment, and conservative spending policies create sustained budget surpluses',
      'Unlimited borrowing capacity',
      'No fiscal constraints exist',
      'Constant budget deficits',
    ],
    answer: 0,
    explanation: 'Luxembourg achieves fiscal space through: (1) substantial financial sector tax revenues exceeding many countries; (2) low unemployment reducing transfer spending; (3) small population limiting infrastructure/defense spending; (4) disciplined fiscal management. This contrasts sharply with highly indebted Eurozone members.'
  },
  {
    id: 'e-balance-of-payments-structure',
    level: 'economist',
    category: 'trade',
    situation: 'What distinguishes Luxembourg\'s balance of payments structure from typical EU economies?',
    options: [
      'Dominated by financial services income and investment flows rather than goods trade; capital account typically shows sustained inflows',
      'Traditional goods trade surplus only',
      'Perpetual trade deficit',
      'No capital flows',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s balance of payments is dominated by services income (banking, funds management, insurance), investment returns, and substantial capital account inflows. Goods trade is relatively minor despite manufacturing legacy, making the overall BoP structure fundamentally different from typical goods-exporting economies.'
  },

  // Sub-level 4
  {
    id: 'e-labour-productivity-measurement',
    level: 'economist',
    category: 'indicators',
    situation: 'What measurement issues arise when calculating labor productivity for Luxembourg?',
    options: [
      'Cross-border workers inflate output metrics; value added includes non-residents; financial sector productivity difficult to measure',
      'Productivity measures straightforward',
      'No measurement issues exist',
      'Productivity consistently accurate',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s labor productivity metrics face fundamental measurement challenges: value added includes non-resident workers\' output (47% of workforce), financial sector productivity involves subjective service valuations, and output prices reflect global financial markets rather than domestic production. These distortions complicate economic interpretation.'
  },
  {
    id: 'e-financial-stability-systemic-risk',
    level: 'economist',
    category: 'banking',
    situation: 'What systemic risks does Luxembourg\'s concentrated financial sector pose to Eurozone stability?',
    options: [
      'Size relative to EU banking system creates potential contagion; cross-border fund flows could transmit shocks; interconnectedness with major banks',
      'No systemic risk exists',
      'Luxembourg isolated from Eurozone',
      'Financial concentration irrelevant',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s financial sector size (over 800% of GDP, with major internationally active banks) creates systemic risk potential: financial stress could transmit rapidly through interconnected global banking networks, investment fund redemptions could create liquidity crises affecting broader EU/global markets.'
  },
  {
    id: 'e-investment-fund-redemption-dynamics',
    level: 'economist',
    category: 'funds',
    situation: 'What redemption risks do Luxembourg\'s $5+ trillion fund assets create?',
    options: [
      'Large-scale simultaneous redemptions could create asset fire sales, liquidity strains, and potential systemic disruption',
      'No redemption risks exist',
      'Funds always maintain excess liquidity',
      'Redemptions impossible',
    ],
    answer: 0,
    explanation: 'The $5+ trillion in Luxembourg-managed funds creates systemic liquidity risk: during market stress or loss of confidence, simultaneous redemptions could exceed liquidity buffers, forcing asset fire sales at depressed prices, disrupting both fund asset values and broader financial markets.'
  },
  {
    id: 'e-ecb-asset-composition',
    level: 'economist',
    category: 'banking',
    situation: 'How do Luxembourg financial institutions affect ECB balance sheet composition?',
    options: [
      'Large collateral pools, participation in open market operations, and deposit holdings make Luxembourg banking central to ECB operations',
      'No ECB participation',
      'ECB balance sheet independent',
      'Luxembourg irrelevant to ECB',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s major banks participate extensively in ECB open market operations (OMOs), hold substantial ECB reserves, and provide collateral for borrowing. These relationships make Luxembourg banking operations integral to ECB monetary policy transmission and balance sheet management.'
  },
  {
    id: 'e-asset-bubble-mechanisms',
    level: 'economist',
    category: 'finance',
    situation: 'How could Luxembourg\'s financial sector amplify asset bubble dynamics?',
    options: [
      'Easy fund creation, leverage provision, and asset price discovery mechanisms enable rapid capital deployment in bubble assets',
      'Bubbles impossible in Luxembourg',
      'No leverage available',
      'Capital immobile in Luxembourg',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s financial infrastructure can amplify bubble dynamics: SIF structures enable rapid capital deployment, securities lending provides leverage, and the sheer scale of assets ($5+ trillion) means significant capital can concentrate in speculative assets, inflating bubbles and increasing crash severity.'
  },

  // Sub-level 5
  {
    id: 'e-fintech-disruption-scenario',
    level: 'economist',
    category: 'startups',
    situation: 'What could be the impact of successful fintech disruption on Luxembourg\'s traditional financial services model?',
    options: [
      'Decentralized finance, blockchain settlement, and automated asset management could disintermediate traditional fund/banking structures',
      'Fintech incapable of disruption',
      'Traditional model forever protected',
      'No possible fintech impact',
    ],
    answer: 0,
    explanation: 'Large-scale fintech disruption (DeFi protocols, blockchain settlement, automated wealth management) could potentially disintermediate Luxembourg\'s fund administration, custodian, and banking intermediaries. This represents a long-term existential risk to the current business model despite Luxembourg\'s fintech investments.'
  },
  {
    id: 'e-climate-transition-stranded-assets',
    level: 'economist',
    category: 'finance',
    situation: 'What stranded asset risks could affect Luxembourg\'s fund portfolios during climate transition?',
    options: [
      'Fossil fuel investments, carbon-intensive companies may face rapid devaluation; transition risk could create significant fund losses',
      'No climate risks to assets',
      'All assets inflation-proof',
      'Transition impossible',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s $5+ trillion fund portfolio faces substantial transition risk: fossil fuel assets face potential stranding, carbon-intensive investments may be rapidly repriced, regulatory/market shifts could trigger losses. Fund managers face increasing pressure to manage these risks, potentially constraining returns.'
  },
  {
    id: 'e-tax-competition-sustainability',
    level: 'economist',
    category: 'finance',
    situation: 'Is Luxembourg\'s tax-based financial center model sustainable given global tax coordination efforts?',
    options: [
      'International minimum tax (15%+ OECD/G20), BEPS initiatives, and country-by-country reporting reduce tax arbitrage; model faces long-term erosion',
      'Tax competition eliminated immediately',
      'All tax avoidance mechanisms remain',
      'No international coordination possible',
    ],
    answer: 0,
    explanation: 'International minimum tax agreements (OECD minimum 15% corporate tax), BEPS initiatives, and automatic information exchange progressively erode Luxembourg\'s tax-based competitive advantages. Over time, this may force transition from tax arbitrage toward genuine service quality differentiation.'
  },
  {
    id: 'e-european-budget-leverage',
    level: 'economist',
    category: 'eu_institutions',
    situation: 'How has Luxembourg historically leveraged its institutional seat to influence EU budget negotiations?',
    options: [
      'As ECJ, ECA, and Eurostat host; Luxembourg has negotiated favorable budget allocations and institutional resource flows',
      'No institutional leverage available',
      'Luxembourg institutions powerless',
      'No budget influence possible',
    ],
    answer: 0,
    explanation: 'Luxembourg\'s hosting of the European Court of Justice, European Court of Auditors, and Eurostat gives it structural leverage in EU budget negotiations. These institutions require substantial budget allocations, supporting Luxembourg\'s economic interests in EU spending priorities and regional development.'
  },
  {
    id: 'e-multipolarity-financial-hub',
    level: 'economist',
    category: 'finance',
    situation: 'How might emerging multipolarity (U.S., China, EU as competing centers) reshape Luxembourg\'s role as financial hub?',
    options: [
      'Potential Eurozone fragmentation, reduced EU integration, capital flight to competing centers could undermine Luxembourg\'s UCITS/EU-centric model',
      'Multipolarity impossible',
      'Luxembourg permanently dominant',
      'No competitive threats exist',
    ],
    answer: 0,
    explanation: 'Long-term geopolitical multipolarity could fundamentally challenge Luxembourg\'s financial model: EU fragmentation, independent European monetary policy divergence, or loss of confidence in European institutions could redirect capital toward competing U.S., Asian, or independent financial centers, eroding Luxembourg\'s dominance.'
  },
]

// ============================================================
// EXPORT
// ============================================================

export const SCENARIOS = [...STARTER, ...ANALYST, ...STRATEGIST, ...EXPERT, ...ECONOMIST]

export function getSubLevelScenarios(levelId, subLevel, allScenarios = SCENARIOS) {
  const levelItems = allScenarios.filter(s => s.level === levelId)
  const start = (subLevel - 1) * 5
  return levelItems.slice(start, start + 5)
}
