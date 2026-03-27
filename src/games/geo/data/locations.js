/**
 * Luxembourg Geo Game — Location data (50 locations)
 * coords: [lat, lng] — accurate coordinates for each location
 * clue: a text-based description (no giving away the name directly)
 */

export const LOCATIONS = [
  {
    id: 'vianden',
    name: 'Vianden Castle',
    coords: [49.9339, 6.2003],
    emoji: '🏰',
    clue: 'High above a river in the north of Luxembourg, this medieval fortress with round towers once housed the Counts of Vianden. Victor Hugo visited and was so enchanted he drew it. It was restored in the 20th century and is now one of the most visited sites in the country.',
    fact: 'Vianden Castle dates back to the 10th century and was home to the Counts of Vianden and later the House of Orange-Nassau. Victor Hugo lived in exile here in 1871.',
    region: 'Diekirch',
    link: 'https://www.visitluxembourg.com/en/place/site/vianden-castle'
  },
  {
    id: 'echternach',
    name: 'Echternach',
    coords: [49.8125, 6.4211],
    emoji: '⛪',
    clue: 'This town in the east of Luxembourg, near the German border, hosts a UNESCO-listed "dancing procession" every Whit Tuesday. Founded around a 7th-century abbey by St. Willibrord, it is one of Luxembourg\'s oldest towns.',
    fact: 'Echternach is Luxembourg\'s oldest town, founded by St. Willibrord in 698 AD. Its famous dancing procession (Sprangprozessioun) has been held since the Middle Ages.',
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/place/site/echternach-abbey'
  },
  {
    id: 'bock',
    name: 'Bock Casemates',
    coords: [49.6117, 6.1397],
    emoji: '🏛️',
    clue: 'Carved deep into the rock beneath Luxembourg City\'s old town, this network of underground galleries and tunnels once sheltered 35,000 people during wartime. They were hollowed out over centuries of fortress-building and are part of a UNESCO World Heritage Site.',
    fact: 'The Bock Casemates are a 23km network of tunnels carved into sandstone rock over three centuries. During WWII they sheltered 35,000 civilians from Allied bombing.',
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/the-bock-casemates'
  },
  {
    id: 'mullerthal',
    name: 'Mullerthal (Little Switzerland)',
    coords: [49.7963, 6.3611],
    emoji: '🌿',
    clue: 'Known as "Luxembourg\'s Little Switzerland," this nature reserve in the east features dramatic sandstone rock formations, deep gorges, and lush forests. Hikers come from across Europe for its scenic trails.',
    fact: 'The Mullerthal region is famous for its unique sandstone rock formations sculpted by water over millions of years. The 112km Mullerthal Trail winds through this magical landscape.',
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/place/site/mullerthal-trail'
  },
  {
    id: 'schengen',
    name: 'Schengen',
    coords: [49.4745, 6.3676],
    emoji: '🤝',
    clue: 'This small village on the banks of the Moselle, in the southernmost tip of Luxembourg, gave its name to one of Europe\'s most significant agreements. In 1985, on a boat moored here, five countries signed a treaty abolishing border controls.',
    fact: 'The Schengen Agreement was signed here on 14 June 1985, creating the borderless Schengen Area that today covers 27 European countries. The European Museum of Schengen celebrates this history.',
    region: 'Remich',
    link: 'https://www.visitluxembourg.com/en/place/site/european-museum-schengen'
  },
  {
    id: 'remich',
    name: 'Remich',
    coords: [49.5447, 6.3674],
    emoji: '🍷',
    clue: 'Called the "Pearl of the Moselle," this charming town on Luxembourg\'s eastern border with Germany is surrounded by vineyards. It is the heart of the Luxembourg wine region and home to several famous wineries producing Riesling and Crémant.',
    fact: 'Remich is the wine capital of Luxembourg, home to the Pundel and Bernard-Massard wineries. The Moselle wine route stretches 42km from Schengen to Wasserbillig.',
    region: 'Remich',
    link: 'https://www.visitluxembourg.com/en/country/moselle'
  },
  {
    id: 'clervaux',
    name: 'Clervaux Castle',
    coords: [50.0547, 6.0327],
    emoji: '📷',
    clue: 'In the heart of the Ardennes in northern Luxembourg, this white castle in a valley houses the famous "Family of Man" photography exhibition — 503 photographs from 68 countries, compiled by a Luxembourger who grew up in America and presented it at New York\'s MoMA in 1955.',
    fact: 'Clervaux Castle houses the permanent "Family of Man" exhibition, compiled by Edward Steichen in 1955. The exhibition was inscribed on UNESCO\'s Memory of the World register.',
    region: 'Clervaux',
    link: 'https://www.visitluxembourg.com/en/place/museum/clervaux-castle-and-the-family-of-man-exhibition'
  },
  {
    id: 'bourscheid',
    name: 'Bourscheid Castle',
    coords: [49.9272, 6.0597],
    emoji: '🏯',
    clue: 'Perched on a rocky promontory 150 metres above the confluence of two rivers in the north of Luxembourg, this ruined fortress was once one of the most powerful castles in the region. Today it offers dramatic views of wooded hills and the Sauer river valley.',
    fact: 'Bourscheid Castle dates from around the 10th century and was once home to the powerful Bourscheid dynasty. The ruins are among Luxembourg\'s most romantic, perched high above the Sauer river.',
    region: 'Diekirch',
    link: 'https://www.visitluxembourg.com/en/place/site/bourscheid-castle'
  },
  {
    id: 'wiltz',
    name: 'Wiltz',
    coords: [49.9661, 5.9326],
    emoji: '🎭',
    clue: 'This town in the northwest of Luxembourg, set in the heart of the Ardennes, is known for its annual open-air summer festival and a castle with a striking staircase. It was heavily damaged during the Battle of the Bulge and later rebuilt.',
    fact: 'Wiltz hosts the famous annual Wiltz Festival, an open-air theatre and music event since 1951 — one of Luxembourg\'s oldest cultural festivals, held in the castle grounds.',
    region: 'Wiltz',
    link: 'https://www.visitluxembourg.com/en/place/site/wiltz-castle'
  },
  {
    id: 'kirchberg',
    name: 'Kirchberg (EU Quarter)',
    coords: [49.6279, 6.1624],
    emoji: '🏢',
    clue: 'This plateau on the eastern edge of Luxembourg City is home to the European Court of Justice, the Court of Auditors, the Philharmonie concert hall, the National Museum of History and Art, and a major business district. Bridges connect it to the old town.',
    fact: 'Kirchberg is Luxembourg\'s "European Quarter," home to major EU institutions. The Adolphe Bridge and Grand Duchess Charlotte Bridge span the deep Alzette valley, connecting it to the city centre.',
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/kirchberg-plateau'
  },
  // 40 new locations below
  {
    id: 'diekirch',
    name: 'Diekirch',
    coords: [49.8673, 6.1598],
    emoji: '⚔️',
    clue: 'This town on the banks of the Sauer river in central Luxembourg is home to a renowned museum dedicated to the Battle of the Bulge (1944–1945). Life-size dioramas and original equipment tell the story of the fierce winter fighting in the Ardennes.',
    fact: 'The National Museum of Military History in Diekirch is one of Europe\'s best dedicated to World War II. Over 400 mannequins re-create the brutal Battle of the Bulge in stunning detail.',
    region: 'Diekirch',
    link: 'https://www.visitluxembourg.com/en/place/museum/national-museum-of-military-history'
  },
  {
    id: 'esch-alzette',
    name: 'Esch-sur-Alzette',
    coords: [49.4941, 5.9806],
    emoji: '🏭',
    clue: 'Luxembourg\'s second-largest city sits in the south, in the heart of the old steel-producing "Minette" region. It was the 2022 European Capital of Culture and has transformed its industrial heritage into vibrant cultural spaces and street art.',
    fact: 'Esch-sur-Alzette was European Capital of Culture 2022. The Esch Minett region was once the beating heart of Luxembourg\'s steel industry; today its former blast furnaces are cultural landmarks.',
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/city/esch-sur-alzette'
  },
  {
    id: 'differdange',
    name: 'Differdange',
    coords: [49.5243, 5.8892],
    emoji: '🔩',
    clue: 'In the far southwest of Luxembourg, close to France, this industrial town built its identity on steel. Its distinctive wide-flange steel beams ("grey steel") were used to build the Empire State Building and the Rockefeller Center in New York.',
    fact: 'Differdange\'s Arbed steelworks produced the wide-flange steel beams used in the Empire State Building and Rockefeller Center. The steel tradition is honoured in the town\'s heritage trails.',
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/city/differdange'
  },
  {
    id: 'mondorf',
    name: 'Mondorf-les-Bains',
    coords: [49.5028, 6.2835],
    emoji: '💧',
    clue: 'Near the French border in the southeast, this elegant spa town has been known for its mineral springs since Roman times. Today it is home to Luxembourg\'s only thermal spa resort, surrounded by a magnificent park.',
    fact: 'Mondorf-les-Bains has been a spa destination since the 19th century. Its Domaine Thermal offers thermal pools, saunas, and wellness treatments fed by natural mineral springs rich in calcium and magnesium.',
    region: 'Remich',
    link: 'https://www.visitluxembourg.com/en/city/mondorf-les-bains'
  },
  {
    id: 'beaufort',
    name: 'Beaufort Castle',
    coords: [49.8415, 6.2983],
    emoji: '🏚️',
    clue: 'Hidden among the forests of the Mullerthal region, these dramatic ruins consist of two castle structures side by side — a medieval fortress and a later Renaissance château. The area is famous for its blackcurrant liqueur produced nearby.',
    fact: 'Beaufort Castle has two structures: a medieval fortress (12th–14th c.) and a Renaissance château (17th c.). The surrounding village is renowned for its Cassero blackcurrant liqueur, made from local berries.',
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/place/site/beaufort-castle'
  },
  {
    id: 'larochette',
    name: 'Larochette Castle',
    coords: [49.7795, 6.2271],
    emoji: '🗼',
    clue: 'Perched dramatically above a small town in central Luxembourg, these twin medieval ruins overlook the Ernz Blanche valley. The castle was split between two noble families for centuries — you can still see the remains of both their residences.',
    fact: 'Larochette Castle (Fiels and Meysembourg towers) dates to the 12th century. The ruins rise dramatically above the picturesque town of Larochette, popular with visitors exploring the Mullerthal region.',
    region: 'Mersch',
    link: 'https://www.visitluxembourg.com/en/place/site/larochette-castle'
  },
  {
    id: 'mudam',
    name: 'MUDAM – Grand Duke Jean Museum of Modern Art',
    coords: [49.6257, 6.1614],
    emoji: '🎨',
    clue: 'On the Kirchberg plateau of Luxembourg City, this striking glass and stone building designed by I.M. Pei houses Luxembourg\'s premier collection of contemporary art. It incorporates the ruins of an old fortress into its foundations.',
    fact: 'MUDAM was designed by architect I.M. Pei and opened in 2006. It sits on the historic Fort Thüngen site and showcases international contemporary art with a focus on emerging artists.',
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/museum/mudam-luxembourg'
  },
  {
    id: 'philharmonie',
    name: 'Philharmonie Luxembourg',
    coords: [49.6250, 6.1611],
    emoji: '🎵',
    clue: 'Standing like a white colonnade on the Kirchberg plateau, this concert hall opened in 2005 and is considered one of Europe\'s finest acoustic venues. Its distinctive exterior features 823 freestanding steel columns surrounding a glass and steel structure.',
    fact: 'The Philharmonie Luxembourg was designed by Christian de Portzamparc and opened in 2005. Its Grande Salle seats 1,500 and is praised by musicians worldwide for its exceptional acoustics.',
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/philharmonie-luxembourg'
  },
  {
    id: 'gelle-fra',
    name: 'Gëlle Fra (Golden Lady)',
    coords: [49.6111, 6.1303],
    emoji: '🗽',
    clue: 'On a grand square near Luxembourg City\'s Old Town, a golden winged woman stands atop a 21-metre column, overlooking the Pétrusse valley. This war memorial was melted down by the Nazi occupiers in 1940 and faithfully reconstructed after liberation.',
    fact: 'The Gëlle Fra (Golden Lady) was erected in 1923 to honour WWI volunteers. The Nazis destroyed it in 1940, but it was rebuilt after liberation. Today it is one of Luxembourg\'s most beloved national symbols.',
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/golden-lady-monument-constitution-square'
  },
  {
    id: 'notre-dame',
    name: 'Notre-Dame Cathedral Luxembourg City',
    coords: [49.6113, 6.1289],
    emoji: '⛪',
    clue: 'In the heart of Luxembourg\'s old town, this early 17th-century cathedral was built by Jesuits and is the country\'s only cathedral. Every May, thousands of pilgrims gather here for the Octave — a two-week veneration of the Consolatrix Afflictorum.',
    fact: 'Notre-Dame Cathedral was built between 1613 and 1621 in late Gothic/early Renaissance style. It houses a revered statue of Our Lady of Luxembourg, patroness of the Grand Duchy, venerated during the annual Octave pilgrimage.',
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/notre-dame-cathedral'
  },
  {
    id: 'grund',
    name: 'The Grund',
    coords: [49.6087, 6.1340],
    emoji: '🌊',
    clue: 'Deep in the valley of the Alzette river, far below Luxembourg City\'s plateau, lies this charming historic quarter. Its cobbled lanes, old mill buildings, and the Abbaye de Neumünster cultural centre make it one of the city\'s most picturesque neighbourhoods.',
    fact: 'The Grund is Luxembourg City\'s lowest and oldest district. The Abbaye de Neumünster, founded in the 7th century, is now a vibrant cultural centre. The area is also known for its lively café and restaurant scene.',
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/neumunster-abbey'
  },
  {
    id: 'dudelange',
    name: 'Dudelange',
    coords: [49.4783, 6.0863],
    emoji: '📸',
    clue: 'In southern Luxembourg near the French border, this former steel town reinvented itself as a cultural hub. It is home to the Centre national de l\'audiovisuel and the Kulturfabrik, one of Luxembourg\'s leading alternative cultural venues.',
    fact: 'Dudelange hosts the CNA (Centre national de l\'audiovisuel), which preserves Luxembourg\'s photographic and film heritage. The photographer Edward Steichen grew up in nearby Bivange.',
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/city/dudelange'
  },
  {
    id: 'bettembourg',
    name: 'Parc Merveilleux, Bettembourg',
    coords: [49.5205, 6.1024],
    emoji: '🦚',
    clue: 'In central-southern Luxembourg, this beloved park has been delighting families since 1954 with its fairy-tale-themed attractions, free-roaming animals (including peacocks and deer), and playgrounds inspired by fairy tales. It is one of the country\'s most visited outdoor attractions.',
    fact: 'Parc Merveilleux has been a family favourite since 1954. Set in beautiful parkland, it features animals, fairy-tale scenes, rides, and attractions. Over 200,000 visitors come each year.',
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/place/site/parc-merveilleux'
  },
  {
    id: 'ettelbruck',
    name: 'Ettelbruck',
    coords: [49.8476, 6.1005],
    emoji: '🎖️',
    clue: 'Known as the "Patton City," this crossroads town in central-north Luxembourg honours the American general whose 3rd Army liberated it in September 1944. Every year a General Patton Memorial Day parade is held here.',
    fact: 'Ettelbruck holds a General Patton Memorial Day every July, honouring General George S. Patton whose 3rd Army liberated the town on 25 September 1944. A statue of Patton stands in the town square.',
    region: 'Diekirch',
    link: 'https://www.visitluxembourg.com/en/city/ettelbruck'
  },
  {
    id: 'grevenmacher',
    name: 'Grevenmacher',
    coords: [49.6802, 6.4403],
    emoji: '🦋',
    clue: 'On the banks of the Moselle river in eastern Luxembourg, this wine-producing town is also home to one of Europe\'s largest butterfly gardens, where hundreds of free-flying tropical butterflies surround visitors in a glass greenhouse.',
    fact: 'Grevenmacher\'s Butterfly Garden (Schmetterlingsgarten) houses over 400 exotic butterfly species in a heated tropical greenhouse. The town is also a key hub of Luxembourg\'s Moselle wine route.',
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/place/site/grevenmacher-butterfly-garden'
  },
  {
    id: 'wormeldange',
    name: 'Wormeldange',
    coords: [49.6175, 6.4016],
    emoji: '🍇',
    clue: 'This small wine village on the Moselle in eastern Luxembourg is famous for its Auxerrois and Pinot Gris grapes. Terraced vineyards climb the hillside behind the village, and the local cooperative winery is one of Luxembourg\'s most respected.',
    fact: 'Wormeldange is the heart of Luxembourg\'s Auxerrois grape production. The Vinsmoselle cooperative, founded in 1921, is the country\'s largest wine producer and has its main winery here.',
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/country/moselle'
  },
  {
    id: 'rumelange',
    name: 'Rumelange Mining Museum',
    coords: [49.4638, 5.9439],
    emoji: '⛏️',
    clue: 'In the heart of the southern Minette iron-ore basin, this museum lets visitors descend into a real former iron mine. The subterranean galleries and original equipment bring Luxembourg\'s industrial past vividly to life.',
    fact: 'The National Mining Museum in Rumelange allows visitors to explore authentic mine galleries and ride a mine train underground. The Minette basin once supplied iron ore to furnaces across Europe.',
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/place/museum/national-mining-museum'
  },
  {
    id: 'useldange',
    name: 'Useldange Castle',
    coords: [49.7615, 5.9861],
    emoji: '🏰',
    clue: 'This well-preserved medieval tower house stands above a quiet village in western Luxembourg. Unlike many Luxembourg castles, parts of the interior can still be visited, and the surrounding area is dotted with hiking trails through the Attert valley.',
    fact: 'Useldange Castle dates to the 12th century. The keep and part of the curtain wall are remarkably intact. The castle overlooks the Attert river and the peaceful village of Useldange below.',
    region: 'Capellen',
    link: 'https://www.visitluxembourg.com/en/place/site/useldange-castle'
  },
  {
    id: 'ansembourg',
    name: 'Ansembourg Castle',
    coords: [49.7110, 6.0213],
    emoji: '🌳',
    clue: 'In the forested Eisch valley in central Luxembourg, this elegant 17th-century château still belongs to a noble family. Its formal French gardens, terraced fountains, and surrounding woodland make it one of the most picturesque estates in the country.',
    fact: 'Ansembourg Old Castle (12th c.) and New Castle (17th c.) stand together in the Eisch valley. The gardens of the new castle were laid out in the French formal style and are open to visitors.',
    region: 'Mersch',
    link: 'https://www.visitluxembourg.com/en/place/site/ansembourg-valley'
  },
  {
    id: 'hollenfels',
    name: 'Hollenfels Castle',
    coords: [49.7501, 6.0451],
    emoji: '🏕️',
    clue: 'Overlooking the Eisch valley in central Luxembourg, this 12th-century castle was restored in the 19th century and now serves as a youth hostel. It is surrounded by hiking trails and is a popular base for families exploring the region.',
    fact: 'Hollenfels Castle is one of Luxembourg\'s oldest medieval fortresses. Converted into a youth hostel, it offers budget accommodation with a medieval atmosphere. The Eisch valley trails are right at the doorstep.',
    region: 'Mersch',
    link: 'https://www.visitluxembourg.com/en/place/site/hollenfels-castle'
  },
  {
    id: 'colpach',
    name: 'Château de Colpach',
    coords: [49.8203, 5.9178],
    emoji: '🎭',
    clue: 'Hidden in the northern forests near the Belgian border, this château and its surrounding park became a gathering place for European artists and intellectuals in the early 20th century, hosted by Luxembourg\'s most famous industrialist family. The sculptor Auguste Rodin visited here.',
    fact: 'Colpach was the estate of Emile and Aline Mayrisch, who hosted luminaries including André Gide, Jean Schlumberger, and Auguste Rodin. The park and chapel are open to visitors today.',
    region: 'Redange',
    link: 'https://www.visitluxembourg.com/en/place/site/colpach-estate'
  },
  {
    id: 'brandenbourg',
    name: 'Brandenbourg Castle',
    coords: [49.9574, 6.0809],
    emoji: '🏯',
    clue: 'In the wooded hills of the northern Ardennes, the ruins of this 13th-century castle overlook a peaceful valley near a small village. The site is part of a scenic hiking loop through oak and beech forests typical of this unspoilt part of Luxembourg.',
    fact: 'Brandenbourg Castle was built in the 13th century and gradually fell into ruin after the 17th century. Today its ivy-clad towers and walls rise dramatically from the surrounding forest, offering a romantic ruin experience.',
    region: 'Diekirch',
    link: 'https://www.visitluxembourg.com/en/place/site/brandenbourg-castle'
  },
  {
    id: 'eisch-valley',
    name: 'Eisch Valley',
    coords: [49.7021, 6.0074],
    emoji: '🌿',
    clue: 'Sometimes called the "Valley of the Seven Castles," this lush valley in western Luxembourg is threaded by a river and a hiking trail that passes the ruins and towers of seven medieval fortresses within a short distance. It is one of the most scenic walks in the country.',
    fact: 'The "Vallée des Sept Châteaux" (Valley of Seven Castles) follows the Eisch river through Koerich, Ansembourg, Hollenfels, and more. The 37km trail is one of Luxembourg\'s most rewarding hikes.',
    region: 'Capellen',
    link: 'https://www.visitluxembourg.com/en/place/site/seven-castles-trail'
  },
  {
    id: 'mersch',
    name: 'Mersch',
    coords: [49.7488, 6.0944],
    emoji: '🛤️',
    clue: 'Often called the "geographic heart of Luxembourg," this central town sits where major roads and rivers converge. Near the town centre lies an old Roman villa site, and the surrounding area contains numerous prehistoric tumuli (burial mounds).',
    fact: 'Mersch is geographically at Luxembourg\'s centre. Nearby are important archaeological sites including the Roman villa of Steinsel and numerous Bronze Age tumuli. The town has been a crossroads since antiquity.',
    region: 'Mersch',
    link: 'https://www.visitluxembourg.com/en/city/mersch'
  },
  {
    id: 'wasserbillig',
    name: 'Wasserbillig',
    coords: [49.7163, 6.5003],
    emoji: '🌊',
    clue: 'At the far eastern tip of Luxembourg, where the Sauer river meets the Moselle at the German border, this town marks the end of the Luxembourg wine route. Its name — meaning "cheap water" — is explained by the legend of a Roman soldier who found a spring here.',
    fact: 'Wasserbillig sits at the confluence of the Sauer and Moselle rivers, at the tripoint where Luxembourg meets Germany. It marks the northern end of the 42km Moselle wine route.',
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/country/moselle'
  },
  {
    id: 'petange',
    name: 'Pétange',
    coords: [49.5578, 5.8758],
    emoji: '🚂',
    clue: 'In the far southwest, where Luxembourg meets France and Belgium, this town grew up around its railway junction and iron industry. A heritage steam railway runs from here through the former steel country on special event days.',
    fact: 'Pétange\'s Fond-de-Gras site preserves Luxembourg\'s industrial railway heritage, with steam trains running through the former mining landscape. It is also close to the three-country border of Luxembourg, France, and Belgium.',
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/place/site/fond-de-gras'
  },
  {
    id: 'adolphe-bridge',
    name: 'Adolphe Bridge',
    coords: [49.6080, 6.1300],
    emoji: '🌉',
    clue: 'This elegant stone arch bridge spans a deep gorge in Luxembourg City, connecting the old town to the new quarters. When it was completed in 1903, its central arch (85 metres) was the largest stone arch bridge in the world. Today it is one of the city\'s most photographed landmarks.',
    fact: 'The Adolphe Bridge (Pont Adolphe) was completed in 1903 and named after Grand Duke Adolphe. Its two stone arches span the Pétrusse valley, and its central span of 85m was the largest in the world at the time of construction.',
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/adolphe-bridge'
  },
  {
    id: 'luxembourg-airport',
    name: 'Luxembourg Airport (Findel)',
    coords: [49.6286, 6.2044],
    emoji: '✈️',
    clue: 'East of Luxembourg City, this is one of Europe\'s smallest national airports — yet one of the most important air cargo hubs in Europe. A certain large e-commerce company uses it as its European logistics base, making it the busiest cargo airport in the Benelux region.',
    fact: 'Luxembourg Airport (Findel) is Europe\'s 5th largest cargo airport, handling over 1 million tonnes annually. Amazon, Cargolux, and Luxair make it a critical logistics hub. It opened in 1946.',
    region: 'Luxembourg City',
    link: 'https://www.lux-airport.lu'
  },
  {
    id: 'redange',
    name: 'Rédange-sur-Attert',
    coords: [49.7625, 5.8894],
    emoji: '🌾',
    clue: 'In the rural west of Luxembourg, near the Belgian border, this quiet cantonal capital is surrounded by farmland and gentle hills. The surrounding area is known for its unspoilt landscapes, organic farms, and the nearby Attert valley nature reserve.',
    fact: 'Rédange-sur-Attert is the administrative capital of Luxembourg\'s westernmost canton. The surrounding Attert valley is known for its biodiversity, organic farming, and tranquil countryside far from the bustle of the capital.',
    region: 'Redange',
    link: 'https://www.visitluxembourg.com/en/region/redange'
  },
  {
    id: 'viandencity',
    name: 'Vianden Town',
    coords: [49.9340, 6.2040],
    emoji: '🏘️',
    clue: 'Beneath the great castle in the Our river valley, this picturesque town of 1,500 inhabitants is one of Luxembourg\'s most visited. Its medieval streets, Gothic church, and riverside setting inspired writers and artists for centuries — including the French poet who spent time here in exile.',
    fact: 'Vianden\'s old town preserves its medieval street pattern almost intact. Victor Hugo spent several summers here during his Belgian exile, sketching the town and castle and writing about Luxembourg\'s natural beauty.',
    region: 'Diekirch',
    link: 'https://www.visitluxembourg.com/en/city/vianden'
  },
  {
    id: 'hesperange',
    name: 'Hesperange',
    coords: [49.5771, 6.1571],
    emoji: '🌳',
    clue: 'Just south of Luxembourg City, along the Alzette river, this municipality contains both residential suburbs and the ruins of a 13th-century castle amid a nature reserve. The Alzette valley here is a green corridor protected as a natural park.',
    fact: 'Hesperange Castle ruins date to the 13th century and once served as a Luxembourg stronghold. Today the site is a peaceful park overlooking the Alzette valley, popular with local walkers.',
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/hesperange-castle'
  },
  {
    id: 'consdorf',
    name: 'Consdorf',
    coords: [49.7729, 6.3448],
    emoji: '🪨',
    clue: 'Perched on a hill in the Mullerthal region of eastern Luxembourg, this village is a gateway to the most dramatic rock formations of "Little Switzerland." A popular hiking trail from here leads through narrow gorges and past towering sandstone cliffs to neighbouring villages.',
    fact: 'Consdorf is one of the main starting points for the Mullerthal Trail. The village sits at 400m altitude above the Ernz Noire river, and the surrounding sandstone landscape is unlike anywhere else in Luxembourg.',
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/place/site/mullerthal-trail'
  },
  {
    id: 'castle-des-monts',
    name: 'Meysembourg Castle',
    coords: [49.8080, 6.2502],
    emoji: '🏰',
    clue: 'A perfectly preserved 17th-century château-fort stands in a small village in the northern Mullerthal area. Unlike Luxembourg\'s many ruins, this castle is largely intact and has been carefully restored. Its formal gardens and towers offer one of the best preserved examples of baroque castle architecture in the region.',
    fact: 'Meysembourg Castle was rebuilt in 1603 and is one of Luxembourg\'s best-preserved Renaissance castles. It remains a private residence and is visible from the village road, a photogenic jewel in the Mullerthal countryside.',
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/place/site/mullerthal-trail'
  },
  {
    id: 'our-valley',
    name: 'Our Valley (Vallée de l\'Our)',
    coords: [49.8802, 6.1956],
    emoji: '🏞️',
    clue: 'Forming the natural border between Luxembourg and Germany in the north, this rugged river valley is one of the wildest and most scenic landscapes in the country. The river flows through deep gorges and wooded slopes, forming part of the Germano-Luxembourg Natural Park.',
    fact: 'The Our river forms 73km of Luxembourg\'s border with Germany. The Our Valley is part of the Germano-Luxembourg Natural Park (Naturpark Our), a cross-border protected area noted for its biodiversity and unspoilt scenery.',
    region: 'Diekirch',
    link: 'https://www.visitluxembourg.com/en/region/our-valley'
  },
  {
    id: 'steinfort',
    name: 'Steinfort',
    coords: [49.6629, 5.9237],
    emoji: '🌲',
    clue: 'Near the Belgian border in western Luxembourg, this small town was home to one of the country\'s oldest and most famous breweries, which produced beer for over 150 years. Today the former brewery buildings are being repurposed for cultural and commercial use.',
    fact: 'Brasserie Nationale (Bofferding brand) was founded in Steinfort in 1764, making it one of Luxembourg\'s oldest breweries. The company later merged and moved operations, but Bofferding remains Luxembourg\'s most popular local beer brand.',
    region: 'Capellen',
    link: 'https://www.visitluxembourg.com/en/region/capellen'
  },
  {
    id: 'stadtbredimus',
    name: 'Stadtbredimus',
    coords: [49.5667, 6.3886],
    emoji: '🍾',
    clue: 'In a curve of the Moselle river in southeastern Luxembourg, this wine village is the home of a famous sparkling wine producer. The caves carved into the hillside where Crémant de Luxembourg ages are open to visitors, and the riverside terrace offers spectacular views across to Germany.',
    fact: 'Stadtbredimus is home to Bernard-Massard, one of Luxembourg\'s premier sparkling wine producers, whose cellars have been producing Crémant de Luxembourg since 1921. The Moselle here forms the border with Germany.',
    region: 'Remich',
    link: 'https://www.visitluxembourg.com/en/country/moselle'
  },
  {
    id: 'merveilles-hachiville',
    name: 'Hachiville',
    coords: [50.0705, 5.9469],
    emoji: '🌟',
    clue: 'In the extreme north of Luxembourg, close to Belgium, this tiny village has one of the darkest skies in the Benelux countries. An astronomical observatory and Dark Sky Park have been established here, and on clear nights the Milky Way is clearly visible with the naked eye.',
    fact: 'Hachiville hosts the only IAU Dark Sky Park in Luxembourg, certified for its exceptional nocturnal darkness. The local observatory organises stargazing events, and the surrounding area is among the least light-polluted in the Benelux.',
    region: 'Clervaux',
    link: 'https://www.visitluxembourg.com/en/place/site/hachiville-dark-sky-park'
  },
  {
    id: 'fond-de-gras',
    name: 'Fond-de-Gras',
    coords: [49.5355, 5.8763],
    emoji: '🚂',
    clue: 'In a hidden valley in southwestern Luxembourg, this open-air industrial heritage site preserves an authentic early 20th-century iron-mining village. A vintage narrow-gauge railway runs through the site, and on event weekends steam locomotives pull passenger cars through the former mining landscape.',
    fact: 'Fond-de-Gras was an active iron-ore mining site until the 1980s. Today it is preserved as an industrial museum with restored buildings, mining equipment, and heritage railways. The site transports visitors back to Luxembourg\'s industrial era.',
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/place/site/fond-de-gras'
  },
  {
    id: 'castle-clervaux-town',
    name: 'Clervaux Town',
    coords: [50.0550, 6.0350],
    emoji: '🏔️',
    clue: 'Nestled in a deep valley of the northern Ardennes, completely encircled by forested hills, this town is a natural gateway to Luxembourg\'s "Little Eifel" region. The surrounding countryside offers mountain biking, cross-country skiing in winter, and some of the country\'s most dramatic Nordic landscapes.',
    fact: 'Clervaux sits 275m above sea level in a valley of the Clerve river. The northern Luxembourg Ardennes around it receive more snow than anywhere else in the country and are known for spectacular autumn foliage.',
    region: 'Clervaux',
    link: 'https://www.visitluxembourg.com/en/city/clervaux'
  },
  {
    id: 'sanem',
    name: 'Sanem Cultural Centre',
    coords: [49.5398, 5.9388],
    emoji: '🎪',
    clue: 'In the southwestern industrial belt of Luxembourg, this former mining commune has invested heavily in culture. Its cultural centre hosts international concerts, theatre, and exhibitions, and the surrounding area has been revitalised with public art, parks, and creative spaces.',
    fact: 'Sanem has transformed itself from an industrial municipality into a cultural hub. The Opderschmelz cultural complex and the active arts scene make it one of the most dynamic communities in southern Luxembourg.',
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/city/sanem'
  },
  {
    id: 'moselle-bridge',
    name: 'Rosport',
    coords: [49.7434, 6.4928],
    emoji: '🚣',
    clue: 'Near Luxembourg\'s eastern border with Germany, this small village on the Sauer river is known as the heart of Luxembourg\'s white-water kayaking and canoeing. A famous rapids section here draws paddle sports enthusiasts from across the region.',
    fact: 'Rosport on the Sauer river hosts international canoe and kayak competitions, including European Cup events. The Sauer rapids here are among the most challenging in the Benelux region for white-water sports.',
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/place/site/our-valley'
  },
  {
    id: 'pfaffenthal',
    name: 'Pfaffenthal & Funicular',
    coords: [49.6141, 6.1362],
    emoji: '🚡',
    clue: 'Below the cliffs of Luxembourg City\'s plateau, this lower valley district is connected to the upper city by a striking glass funicular built inside the cliff face. The lift transports commuters and visitors from the train station to the Kirchberg plateau, offering dramatic views.',
    fact: 'The Pfaffenthal-Kirchberg funicular opened in 2017, running through the cliff inside a glass shaft. It connects the rail station in the valley to the EU quarter 45 metres above, in under 2 minutes.',
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/pfaffenthal-lift'
  },
  {
    id: 'minett-trail',
    name: 'Minett (UNESCO Biosphere Reserve)',
    coords: [49.5100, 5.9500],
    emoji: '🌱',
    clue: 'The southern belt of Luxembourg, once dominated by iron ore extraction and steel mills, has been designated a UNESCO Biosphere Reserve. Slag heaps draped in rare wildflowers, restored industrial sites, and emerging eco-tourism make this one of Europe\'s most fascinating post-industrial landscapes.',
    fact: 'The Minett was designated a UNESCO Biosphere Reserve in 2021 — the only urban-industrial biosphere reserve in the EU. Former slag heaps now host rare orchids and butterflies found nowhere else in Luxembourg.',
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/region/minett'
  },
  {
    id: 'esch-belval',
    name: 'Belval (Esch)',
    coords: [49.5021, 5.9473],
    emoji: '🏗️',
    clue: 'On the site of a former steelworks in southern Luxembourg, two giant blast furnaces have been preserved as industrial monuments, now floodlit at night. Around them, the University of Luxembourg\'s main campus has been built, transforming the former heavy-industry zone into a knowledge and cultural district.',
    fact: 'Belval was the flagship project of Luxembourg\'s post-industrial regeneration. The two preserved blast furnaces ("hauts fourneaux") are 60m tall and can be climbed by visitors. The University of Luxembourg campus opened here in 2015.',
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/place/site/rockhal-and-belval'
  }
]

/**
 * Returns 5 locations for a play session using a given seed.
 * @param {number} seed  — use a random number for randomisation per session
 * @param {Array}  [locationsPool]  optional override (from admin/server)
 */
export function getSessionLocations(seed = 0, locationsPool = null) {
  const pool = locationsPool || LOCATIONS
  const shuffled = [...pool].sort((a, b) => {
    const h = (str) => {
      let hash = seed
      for (let i = 0; i < str.length; i++) {
        hash = (hash * 31 + str.charCodeAt(i)) >>> 0
      }
      return hash % 10000
    }
    return h(a.id) - h(b.id)
  })
  return shuffled.slice(0, 5)
}

/**
 * Calculate distance between two lat/lng points in km (Haversine).
 */
export function calcDistance(lat1, lng1, lat2, lng2) {
  const R = 6371
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLng = ((lng2 - lng1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) ** 2
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
}

/**
 * Convert distance (km) to a score out of 1000.
 */
export function distanceToScore(km) {
  if (km < 0.5) return 1000
  if (km > 60) return 0
  return Math.round(1000 * Math.max(0, 1 - km / 60))
}
