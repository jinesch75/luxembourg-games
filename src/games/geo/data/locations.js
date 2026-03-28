/**
 * Luxembourg Geo Game — Location data (50 locations)
 * coords: [lat, lng] — accurate coordinates for each location
 * clue: a text-based description (no giving away the name directly)
 */

export const LOCATIONS = [
  {
    id: 'vianden',
    name: {
    en: 'Vianden Castle',
    fr: 'Château de Vianden',
    de: 'Burg Vianden',
    lb: 'Buerg Veianen'
  },
    coords: [49.9339, 6.2003],
    emoji: '🏰',
    clue: {
    en: 'High above a river in the north of Luxembourg, this medieval fortress with round towers once housed the Counts of Vianden. Victor Hugo visited and was so enchanted he drew it. It was restored in the 20th century and is now one of the most visited sites in the country.',
    fr: 'Dominant une rivière dans le nord du Luxembourg, cette forteresse médiévale aux tours rondes abrita autrefois les comtes de Vianden. Victor Hugo la visita et en fut si enchanté qu\'il la dessina. Restaurée au XXe siècle, elle est aujourd\'hui l\'un des sites les plus visités du pays.',
    de: 'Hoch über einem Fluss im Norden Luxemburgs thronte diese mittelalterliche Festung mit runden Türmen einst als Sitz der Grafen von Vianden. Victor Hugo besuchte sie und war so begeistert, dass er sie zeichnete. Im 20. Jahrhundert restauriert, gehört sie heute zu den meistbesuchten Stätten des Landes.',
    lb: 'Héich iwwer engem Floss am Norden vu Lëtzebuerg steet dës mëttelalterlecher Festung mat ronnen Tierm, wou fréier d\'Grafe vu Veianen gelieft hunn. Victor Hugo huet si besicht a war sou begeeschtert, datt hien se gezeechent huet. Am 20. Joerhonnert restauréiert, ass si haut ee vun den meeschte besichte Plazen am Land.'
  },
    fact: {
    en: 'Vianden Castle dates back to the 10th century and was home to the Counts of Vianden and later the House of Orange-Nassau. Victor Hugo lived in exile here in 1871.',
    fr: 'Le château de Vianden remonte au Xe siècle et fut la demeure des comtes de Vianden, puis de la Maison d\'Orange-Nassau. Victor Hugo y vécut en exil en 1871.',
    de: 'Die Burg Vianden geht auf das 10. Jahrhundert zurück und war Residenz der Grafen von Vianden und später des Hauses Oranien-Nassau. Victor Hugo lebte 1871 im Exil hier.',
    lb: 'D\'Buerg Veianen geet op d\'10. Joerhonnert zréck a war d\'Heem vun de Grafe vu Veianen an duerno vum Haus Oranien-Nassau. Victor Hugo huet 1871 am Exil hei gelieft.'
  },
    region: 'Diekirch',
    link: 'https://www.visitluxembourg.com/en/place/site/vianden-castle'
  },
  {
    id: 'echternach',
    name: {
    en: 'Echternach',
    fr: 'Echternach',
    de: 'Echternach',
    lb: 'Iechternach'
  },
    coords: [49.8125, 6.4211],
    emoji: '⛪',
    clue: {
    en: 'This town in the east of Luxembourg, near the German border, hosts a UNESCO-listed "dancing procession" every Whit Tuesday. Founded around a 7th-century abbey by St. Willibrord, it is one of Luxembourg\'s oldest towns.',
    fr: 'Cette ville de l\'est du Luxembourg, près de la frontière allemande, accueille chaque mardi de Pentecôte une "procession dansante" inscrite au patrimoine de l\'UNESCO. Fondée autour d\'une abbaye du VIIe siècle par saint Willibrord, c\'est l\'une des plus anciennes villes du Luxembourg.',
    de: 'Diese Stadt im Osten Luxemburgs nahe der deutschen Grenze veranstaltet jeden Pfingstdienstag eine von der UNESCO gelistete „Springprozession". Sie wurde um ein Kloster aus dem 7. Jahrhundert von St. Willibrord gegründet und ist eine der ältesten Städte Luxemburgs.',
    lb: 'Dës Stad am Osten vu Lëtzebuerg, no bei der däitscher Grenz, huet all Pfingstdënschdeg eng vun der UNESCO gelisteten „Sprangprozessioun". Si gouf ronderëm eng Abtei aus dem 7. Joerhonnert vum Hellege Willibrord gegrënnt a gehéiert zu de eelste Stied vu Lëtzebuerg.'
  },
    fact: {
    en: 'Echternach is Luxembourg\'s oldest town, founded by St. Willibrord in 698 AD. Its famous dancing procession (Sprangprozessioun) has been held since the Middle Ages.',
    fr: 'Echternach est la plus ancienne ville du Luxembourg, fondée par saint Willibrord en 698. Sa célèbre procession dansante (Sprangprozessioun) est célébrée depuis le Moyen Âge.',
    de: 'Echternach ist die älteste Stadt Luxemburgs, gegründet von St. Willibrord im Jahr 698. Die berühmte Springprozession (Sprangprozessioun) wird seit dem Mittelalter abgehalten.',
    lb: 'Iechternach ass déi eelste Stad vu Lëtzebuerg, gegrënnt vum Hellege Willibrord am Joer 698. Déi berühmte Sprangprozessioun gëtt säit dem Mëttelalter ofgehalen.'
  },
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/place/site/echternach-abbey'
  },
  {
    id: 'bock',
    name: {
    en: 'Bock Casemates',
    fr: 'Casemates du Bock',
    de: 'Bock-Kasematten',
    lb: 'Bock-Kasematten'
  },
    coords: [49.6117, 6.1397],
    emoji: '🏛️',
    clue: {
    en: 'Carved deep into the rock beneath Luxembourg City\'s old town, this network of underground galleries and tunnels once sheltered 35,000 people during wartime. They were hollowed out over centuries of fortress-building and are part of a UNESCO World Heritage Site.',
    fr: 'Creusées dans le rocher sous la vieille ville de Luxembourg, ces galeries souterraines ont abrité 35 000 personnes pendant la guerre. Taillées au fil des siècles de construction de la forteresse, elles font partie d\'un site classé au patrimoine mondial de l\'UNESCO.',
    de: 'Tief im Fels unter der Altstadt von Luxemburg-Stadt wurden diese unterirdischen Gänge und Tunnel ins Gestein gehauen und boten im Krieg 35.000 Menschen Schutz. Jahrhundertelang in der Festung gegraben, sind sie Teil eines UNESCO-Weltkulturerbes.',
    lb: 'Déif am Fiels ënner der Aler Stad vu Lëtzebuerg-Stad, gouf dëst Netz vun ënnerierdesche Gäng a Tunnele gegrawen a huet am Krich 35.000 Mënsche Schutz geboten. Si sinn Deel vun engem UNESCO-Welterbesäit.'
  },
    fact: {
    en: 'The Bock Casemates are a 23km network of tunnels carved into sandstone rock over three centuries. During WWII they sheltered 35,000 civilians from Allied bombing.',
    fr: 'Les casemates du Bock forment un réseau de 23 km de tunnels creusés dans le grès sur trois siècles. Pendant la Seconde Guerre mondiale, elles ont abrité 35 000 civils des bombardements alliés.',
    de: 'Die Bock-Kasematten sind ein 23 km langes Tunnelnetz, das über drei Jahrhunderte in Sandstein gehauen wurde. Im Zweiten Weltkrieg schützten sie 35.000 Zivilisten vor alliierten Bombenangriffen.',
    lb: 'D\'Bock-Kasematten sinn e 23 km laangt Tunnelnetz, dat iwwer dräi Joerhonnerten an de Sandstein gegrawen gouf. Wärend dem Zweete Weltkrich hunn si 35.000 Ziviliste virun alliierten Bombardementer geschützt.'
  },
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/the-bock-casemates'
  },
  {
    id: 'mullerthal',
    name: {
    en: 'Mullerthal (Little Switzerland)',
    fr: 'Mullerthal (Petite Suisse)',
    de: 'Mullerthal (Kleine Schweiz)',
    lb: 'Mullerthal (Kleng Schwäiz)'
  },
    coords: [49.7963, 6.3611],
    emoji: '🌿',
    clue: {
    en: 'Known as "Luxembourg\'s Little Switzerland," this nature reserve in the east features dramatic sandstone rock formations, deep gorges, and lush forests. Hikers come from across Europe for its scenic trails.',
    fr: 'Surnommée la "Petite Suisse luxembourgeoise", cette réserve naturelle de l\'est du pays offre des formations rocheuses en grès spectaculaires, des gorges profondes et des forêts luxuriantes. Les randonneurs viennent de toute l\'Europe pour ses sentiers pittoresques.',
    de: 'Als „Kleine Schweiz Luxemburgs" bekannt, bietet dieses Naturschutzgebiet im Osten des Landes dramatische Sandsteinfelsformationen, tiefe Schluchten und üppige Wälder. Wanderer aus ganz Europa kommen für seine malerischen Wege hierher.',
    lb: 'Als „Kleng Schwäiz vu Lëtzebuerg" bekannt, bitt dëst Naturschutzgebitt am Oste vum Land spektakulär Sandsteinfelsformatiounen, déif Schluuchten a räich Bëscher. Wanderer aus ganz Europa kommen fir seng bëlleg Weeër.'
  },
    fact: {
    en: 'The Mullerthal region is famous for its unique sandstone rock formations sculpted by water over millions of years. The 112km Mullerthal Trail winds through this magical landscape.',
    fr: 'La région du Mullerthal est connue pour ses formations rocheuses en grès uniques, sculptées par l\'eau sur des millions d\'années. Le sentier du Mullerthal, long de 112 km, serpente à travers ce paysage féerique.',
    de: 'Die Mullerthal-Region ist für ihre einzigartigen Sandsteinfelsformationen bekannt, die über Millionen von Jahren durch Wasser geformt wurden. Der 112 km lange Mullerthal-Trail windet sich durch diese zauberhafte Landschaft.',
    lb: 'D\'Mullerthal-Regioun ass berüümt fir hir eenzegaarteg Sandsteinfelsformatiounen, déi iwwer Millioune Joer duerch Waasser geformt goufen. De 112 km laangen Mullerthal-Trail wënnt sech duerch dës zauberhaft Landschaft.'
  },
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/place/site/mullerthal-trail'
  },
  {
    id: 'schengen',
    name: {
    en: 'Schengen',
    fr: 'Schengen',
    de: 'Schengen',
    lb: 'Schengen'
  },
    coords: [49.4745, 6.3676],
    emoji: '🤝',
    clue: {
    en: 'This small village on the banks of the Moselle, in the southernmost tip of Luxembourg, gave its name to one of Europe\'s most significant agreements. In 1985, on a boat moored here, five countries signed a treaty abolishing border controls.',
    fr: 'Ce petit village sur les rives de la Moselle, à la pointe sud du Luxembourg, a donné son nom à l\'un des accords les plus importants d\'Europe. En 1985, sur un bateau amarré ici, cinq pays ont signé un traité supprimant les contrôles aux frontières.',
    de: 'Dieses kleine Dorf an den Ufern der Mosel, an der südlichsten Spitze Luxemburgs, gab einem der bedeutendsten europäischen Abkommen seinen Namen. 1985 unterzeichneten fünf Länder auf einem hier vertäuten Boot einen Vertrag zur Abschaffung der Grenzkontrollen.',
    lb: 'Dëst klenge Duerf um Ufier vun der Musel, un der südlechster Spëtzt vu Lëtzebuerg, huet engem vun den wichtegsten europäesche Verträg säin Numm ginn. Am Joer 1985 hunn fënnef Länner op engem Boot, dat hei verankert war, e Vertrag ënnerschriwwen, deen d\'Grenzkontrollen ofgeschaf huet.'
  },
    fact: {
    en: 'The Schengen Agreement was signed here on 14 June 1985, creating the borderless Schengen Area that today covers 27 European countries. The European Museum of Schengen celebrates this history.',
    fr: 'L\'Accord de Schengen fut signé ici le 14 juin 1985, créant l\'espace Schengen qui couvre aujourd\'hui 27 pays européens. Le Musée européen de Schengen célèbre cette histoire.',
    de: 'Das Schengener Abkommen wurde am 14. Juni 1985 hier unterzeichnet und schuf den Schengen-Raum, der heute 27 europäische Länder umfasst. Das Europäische Museum Schengen feiert diese Geschichte.',
    lb: 'D\'Schengener Ofkommes gouf hei de 14. Juni 1985 ënnerschriwwen an huet den Schengen-Raum geschaaft, dee haut 27 europäesch Länner ëmfaasst. D\'Europäescht Museum Schengen feiert dës Geschicht.'
  },
    region: 'Remich',
    link: 'https://www.visitluxembourg.com/en/place/site/european-museum-schengen'
  },
  {
    id: 'remich',
    name: {
    en: 'Remich',
    fr: 'Remich',
    de: 'Remich',
    lb: 'Réimech'
  },
    coords: [49.5447, 6.3674],
    emoji: '🍷',
    clue: {
    en: 'Called the "Pearl of the Moselle," this charming town on Luxembourg\'s eastern border with Germany is surrounded by vineyards. It is the heart of the Luxembourg wine region and home to several famous wineries producing Riesling and Crémant.',
    fr: 'Surnommée la "Perle de la Moselle", cette charmante ville sur la frontière orientale du Luxembourg avec l\'Allemagne est entourée de vignobles. Elle est le cœur de la région viticole luxembourgeoise et abrite plusieurs caves renommées produisant du Riesling et du Crémant.',
    de: 'Als „Perle der Mosel" bezeichnet, liegt diese charmante Stadt an der östlichen Grenze Luxemburgs zu Deutschland inmitten von Weinbergen. Sie ist das Herz der luxemburgischen Weinregion und beherbergt mehrere renommierte Weinkellereien, die Riesling und Crémant produzieren.',
    lb: 'Als „Perl vun der Musel" genannt, läit dës charmantt Stad un der éischtlecher Grenz vu Lëtzebuerg mat Däitschland mëtten a Wéngerten. Si ass d\'Häerz vun der lëtzebuerger Wäiregioun a beherbergt verschidde renomméiert Kellereien, déi Riesling a Crémant produzéieren.'
  },
    fact: {
    en: 'Remich is the wine capital of Luxembourg, home to the Pundel and Bernard-Massard wineries. The Moselle wine route stretches 42km from Schengen to Wasserbillig.',
    fr: 'Remich est la capitale viticole du Luxembourg, siège des caves Pundel et Bernard-Massard. La route des vins de la Moselle s\'étend sur 42 km de Schengen à Wasserbillig.',
    de: 'Remich ist die Weinhauptstadt Luxemburgs und Heimat der Weinkellereien Pundel und Bernard-Massard. Die Moselweinstraße erstreckt sich über 42 km von Schengen bis Wasserbillig.',
    lb: 'Réimech ass d\'Wäinhaaptstad vu Lëtzebuerg, Heem vun de Kellereien Pundel a Bernard-Massard. D\'Muselwéistrooss erstreckt sech 42 km vu Schengen bis Waasserbëlleg.'
  },
    region: 'Remich',
    link: 'https://www.visitluxembourg.com/en/country/moselle'
  },
  {
    id: 'clervaux',
    name: {
    en: 'Clervaux Castle',
    fr: 'Château de Clervaux',
    de: 'Burg Clervaux',
    lb: 'Schlass Clervaux'
  },
    coords: [50.0547, 6.0327],
    emoji: '📷',
    clue: {
    en: 'In the heart of the Ardennes in northern Luxembourg, this white castle in a valley houses the famous "Family of Man" photography exhibition — 503 photographs from 68 countries, compiled by a Luxembourger who grew up in America and presented it at New York\'s MoMA in 1955.',
    fr: 'Au cœur des Ardennes dans le nord du Luxembourg, ce château blanc dans une vallée abrite la célèbre exposition photographique "La Famille des hommes" — 503 photographies de 68 pays, réunies par un Luxembourgeois élevé en Amérique et présentée au MoMA de New York en 1955.',
    de: 'Im Herzen der Ardennen im Norden Luxemburgs beherbergt dieses weiße Schloss in einem Tal die berühmte Fotoausstellung „The Family of Man" — 503 Fotografien aus 68 Ländern, zusammengestellt von einem Luxemburger, der in Amerika aufwuchs und sie 1955 im New Yorker MoMA präsentierte.',
    lb: 'Am Häerz vun den Ardennen am Norden vu Lëtzebuerg beherbergt dëst wäisst Schlass an engem Daal d\'berüümt Fotoausstellung „The Family of Man" — 503 Fotoen aus 68 Länner, zesummegesat vun engem Lëtzebuerger, deen a Amerika opgewuess ass a se 1955 am New Yorker MoMA presentéiert huet.'
  },
    fact: {
    en: 'Clervaux Castle houses the permanent "Family of Man" exhibition, compiled by Edward Steichen in 1955. The exhibition was inscribed on UNESCO\'s Memory of the World register.',
    fr: 'Le château de Clervaux accueille l\'exposition permanente "La Famille des hommes", composée par Edward Steichen en 1955. L\'exposition est inscrite au registre Mémoire du monde de l\'UNESCO.',
    de: 'Burg Clervaux beherbergt die ständige Ausstellung „The Family of Man", zusammengestellt von Edward Steichen im Jahr 1955. Die Ausstellung ist im UNESCO-Register „Memory of the World" eingetragen.',
    lb: 'D\'Schlass Clervaux beherbergt d\'Permanentausstellung „The Family of Man", déi vum Edward Steichen am Joer 1955 zesummegesat gouf. D\'Ausstellung ass am UNESCO Memory of the World Register ageschriwwen.'
  },
    region: 'Clervaux',
    link: 'https://www.visitluxembourg.com/en/place/museum/clervaux-castle-and-the-family-of-man-exhibition'
  },
  {
    id: 'bourscheid',
    name: {
    en: 'Bourscheid Castle',
    fr: 'Château de Bourscheid',
    de: 'Burg Bourscheid',
    lb: 'Buerg Buurscheid'
  },
    coords: [49.9272, 6.0597],
    emoji: '🏯',
    clue: {
    en: 'Perched on a rocky promontory 150 metres above the confluence of two rivers in the north of Luxembourg, this ruined fortress was once one of the most powerful castles in the region. Today it offers dramatic views of wooded hills and the Sauer river valley.',
    fr: 'Perchée sur un promontoire rocheux à 150 mètres au-dessus de la confluence de deux rivières dans le nord du Luxembourg, cette forteresse en ruine fut l\'une des plus puissantes de la région. Elle offre aujourd\'hui des vues spectaculaires sur les collines boisées et la vallée de la Sûre.',
    de: 'Auf einem Felsvorsprung 150 Meter über dem Zusammenfluss zweier Flüsse im Norden Luxemburgs thront diese Burgruine, einst eine der mächtigsten Festungen der Region. Heute bietet sie dramatische Ausblicke auf bewaldete Hügel und das Sauertal.',
    lb: 'Op engem Fielsvirsprong 150 Meter iwwer dem Zesummefloss vun zwee Flëss am Norden vu Lëtzebuerg steet dës Burgruine, eemol eng vun de mächtegsten Festungen an der Regioun. Haut bitt si dramatesch Aussichten op d\'bewaldete Hiwwele an d\'Sauerdall.'
  },
    fact: {
    en: 'Bourscheid Castle dates from around the 10th century and was once home to the powerful Bourscheid dynasty. The ruins are among Luxembourg\'s most romantic, perched high above the Sauer river.',
    fr: 'Le château de Bourscheid date d\'environ Xe siècle et fut jadis la demeure de la puissante dynastie de Bourscheid. Ses ruines sont parmi les plus romantiques du Luxembourg, perchées au-dessus de la Sûre.',
    de: 'Die Burg Bourscheid stammt aus dem 10. Jahrhundert und war einst Sitz der mächtigen Bourscheid-Dynastie. Die Ruinen gehören zu den romantischsten Luxemburgs und thronen hoch über der Sauer.',
    lb: 'D\'Buerg Buurscheid gouf ronderëm am 10. Joerhonnert gebaut a war eemol d\'Heem vun der mächteger Bourscheid-Dynasti. D\'Ruinen sinn ënner de romanteschste vu Lëtzebuerg, héich iwwer der Sauer.'
  },
    region: 'Diekirch',
    link: 'https://www.visitluxembourg.com/en/place/site/bourscheid-castle'
  },
  {
    id: 'wiltz',
    name: {
    en: 'Wiltz',
    fr: 'Wiltz',
    de: 'Wiltz',
    lb: 'Wolz'
  },
    coords: [49.9661, 5.9326],
    emoji: '🎭',
    clue: {
    en: 'This town in the northwest of Luxembourg, set in the heart of the Ardennes, is known for its annual open-air summer festival and a castle with a striking staircase. It was heavily damaged during the Battle of the Bulge and later rebuilt.',
    fr: 'Cette ville du nord-ouest du Luxembourg, au cœur des Ardennes, est connue pour son festival estival en plein air et un château à l\'escalier remarquable. Très endommagée pendant la Bataille des Ardennes, elle fut ensuite reconstruite.',
    de: 'Diese Stadt im Nordwesten Luxemburgs, im Herzen der Ardennen, ist bekannt für ihr jährliches Open-Air-Sommerfestival und ein Schloss mit einer markanten Treppe. Sie wurde in der Ardennenoffensive stark beschädigt und anschließend wiederaufgebaut.',
    lb: 'Dës Stad am Nordweste vu Lëtzebuerg, am Häerz vun den Ardennen, ass bekannt fir hire jährlecht Open-Air-Summerfestival an e Schlass mat enger auffälleger Trapp. Si gouf an der Ardennenschluecht staark beschiedegt a duerno erëmgebaut.'
  },
    fact: {
    en: 'Wiltz hosts the famous annual Wiltz Festival, an open-air theatre and music event since 1951 — one of Luxembourg\'s oldest cultural festivals, held in the castle grounds.',
    fr: 'Wiltz accueille le célèbre Festival de Wiltz, événement de théâtre et de musique en plein air depuis 1951 — l\'un des plus anciens festivals culturels du Luxembourg, tenu dans les jardins du château.',
    de: 'Wiltz beherbergt das berühmte Wiltzer Festival, ein Open-Air-Theater- und Musikevent seit 1951 — eines der ältesten Kulturfestivals Luxemburgs, das im Schlossgarten stattfindet.',
    lb: 'Wolz beherbergt dat berüümte Wolzer Festival, e Open-Air-Theater- a Museksevent zënter 1951 — eent vun de eelste Kulturfestivaler vu Lëtzebuerg, dat am Schlasskäregaart stattfënnt.'
  },
    region: 'Wiltz',
    link: 'https://www.visitluxembourg.com/en/place/site/wiltz-castle'
  },
  {
    id: 'kirchberg',
    name: {
    en: 'Kirchberg (EU Quarter)',
    fr: 'Kirchberg (Quartier européen)',
    de: 'Kirchberg (EU-Viertel)',
    lb: 'Kierchbierg (EU-Viertel)'
  },
    coords: [49.6279, 6.1624],
    emoji: '🏢',
    clue: {
    en: 'This plateau on the eastern edge of Luxembourg City is home to the European Court of Justice, the Court of Auditors, the Philharmonie concert hall, the National Museum of History and Art, and a major business district. Bridges connect it to the old town.',
    fr: 'Ce plateau à l\'est de Luxembourg-Ville abrite la Cour de justice de l\'Union européenne, la Cour des comptes, la Philharmonie, le Musée national d\'histoire et d\'art, et un grand quartier d\'affaires. Des ponts le relient à la vieille ville.',
    de: 'Dieses Plateau am östlichen Rand von Luxemburg-Stadt beherbergt den Europäischen Gerichtshof, den Rechnungshof, die Philharmonie, das Nationalmuseum für Geschichte und Kunst sowie ein großes Geschäftsviertel. Brücken verbinden es mit der Altstadt.',
    lb: 'Dëst Plateau am Oste vu Lëtzebuerg-Stad beherbergt de Europäesche Geriichtshaff, de Rechnungshaff, d\'Philharmonie, de Nationalmusée fir Geschicht a Konscht an e grousst Geschäftsviertel. Brécke verbannen et mat der Aler Stad.'
  },
    fact: {
    en: 'Kirchberg is Luxembourg\'s "European Quarter," home to major EU institutions. The Adolphe Bridge and Grand Duchess Charlotte Bridge span the deep Alzette valley, connecting it to the city centre.',
    fr: 'Kirchberg est le "Quartier européen" du Luxembourg, siège de grandes institutions de l\'UE. Le pont Adolphe et le pont Grande-Duchesse Charlotte enjambent la profonde vallée de l\'Alzette pour relier Kirchberg au centre-ville.',
    de: 'Kirchberg ist Luxemburgs „Europaviertel" mit bedeutenden EU-Institutionen. Die Adolphe-Brücke und die Großherzogin-Charlotte-Brücke überspannen das tiefe Alzettetal und verbinden Kirchberg mit dem Stadtzentrum.',
    lb: 'Kierchbierg ass Lëtzebuerg seng „EU-Quartier" mat wichtegen EU-Institutiounen. D\'Adolphe-Bréck an d\'Groussherzogin-Charlotte-Bréck iwwerspannen dat déift Alzette-Daal a verbannen Kierchbierg mat dem Stadtzentrum.'
  },
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/kirchberg-plateau'
  },
  // 40 new locations below
  {
    id: 'diekirch',
    name: {
    en: 'Diekirch',
    fr: 'Diekirch',
    de: 'Diekirch',
    lb: 'Diekirch'
  },
    coords: [49.8673, 6.1598],
    emoji: '⚔️',
    clue: {
    en: 'This town on the banks of the Sauer river in central Luxembourg is home to a renowned museum dedicated to the Battle of the Bulge (1944–1945). Life-size dioramas and original equipment tell the story of the fierce winter fighting in the Ardennes.',
    fr: 'Cette ville sur les rives de la Sûre, au centre du Luxembourg, abrite un musée de renommée mondiale consacré à la Bataille des Ardennes (1944–1945). Des dioramas grandeur nature et des équipements d\'origine retracent les combats hivernaux acharnés dans les Ardennes.',
    de: 'Diese Stadt am Ufer der Sauer im Zentrum Luxemburgs beherbergt ein renommiertes Museum zur Ardennenoffensive (1944–1945). Lebensgroße Dioramen und Originalausrüstung erzählen die Geschichte der heftigen Winterkämpfe in den Ardennen.',
    lb: 'Dës Stad um Ufier vun der Sauer am Zentrum vu Lëtzebuerg beherbergt e renomméierte Musée iwwer d\'Ardennenschluecht (1944–1945). Liebensgréisst Dioramen an Originalausrüstung erzielen d\'Geschicht vun de féierleche Wanterkämpf an den Ardennen.'
  },
    fact: {
    en: 'The National Museum of Military History in Diekirch is one of Europe\'s best dedicated to World War II. Over 400 mannequins re-create the brutal Battle of the Bulge in stunning detail.',
    fr: 'Le Musée national d\'histoire militaire de Diekirch est l\'un des meilleurs d\'Europe consacrés à la Seconde Guerre mondiale. Plus de 400 mannequins reconstituent la brutale Bataille des Ardennes avec un réalisme saisissant.',
    de: 'Das Nationalmuseum für Militärgeschichte in Diekirch ist eines der besten Europas zum Zweiten Weltkrieg. Über 400 Schaufensterpuppen stellen die brutale Ardennenoffensive mit verblüffendem Detail nach.',
    lb: 'De Nationalmusée fir Militärgeschicht zu Diekirch ass ee vun de beschten an Europa fir den Zweete Weltkrich. Iwwer 400 Mannequinen stellen d\'brutal Ardennenschluecht mat verblëffender Detaillidder.'
  },
    region: 'Diekirch',
    link: 'https://www.visitluxembourg.com/en/place/museum/national-museum-of-military-history'
  },
  {
    id: 'esch-alzette',
    name: {
    en: 'Esch-sur-Alzette',
    fr: 'Esch-sur-Alzette',
    de: 'Esch-an-der-Alzette',
    lb: 'Esch-Uelzecht'
  },
    coords: [49.4941, 5.9806],
    emoji: '🏭',
    clue: {
    en: 'Luxembourg\'s second-largest city sits in the south, in the heart of the old steel-producing "Minette" region. It was the 2022 European Capital of Culture and has transformed its industrial heritage into vibrant cultural spaces and street art.',
    fr: 'La deuxième ville du Luxembourg se trouve dans le sud, au cœur de l\'ancienne région sidérurgique du "Minett". Capitale européenne de la Culture 2022, elle a transformé son patrimoine industriel en espaces culturels dynamiques et en art de rue.',
    de: 'Die zweitgrößte Stadt Luxemburgs liegt im Süden, im Herzen der alten Stahlindustrieregion „Minett". Als Kulturhauptstadt Europas 2022 hat sie ihr industrielles Erbe in lebendige Kulturräume und Street-Art verwandelt.',
    lb: 'Lëtzebuerg seng zweet gréisst Stad läit am Süden, am Häerz vun der aler Stolindustrieregioun „Minett". Als Europäesch Kulturhaaptstad 2022 huet si hiert industriellt Ierwen a lieweg Kulturräim a Stroossekonschten ëmgewandelt.'
  },
    fact: {
    en: 'Esch-sur-Alzette was European Capital of Culture 2022. The Esch Minett region was once the beating heart of Luxembourg\'s steel industry; today its former blast furnaces are cultural landmarks.',
    fr: 'Esch-sur-Alzette fut Capitale européenne de la Culture 2022. La région Esch Minett était le cœur de la sidérurgie luxembourgeoise ; aujourd\'hui ses anciens hauts fourneaux sont des monuments culturels.',
    de: 'Esch-an-der-Alzette war Kulturhauptstadt Europas 2022. Die Region Esch Minett war einst das Herz der luxemburgischen Stahlindustrie; heute sind die ehemaligen Hochöfen Kulturdenkmäler.',
    lb: 'Esch-Uelzecht war Europäesch Kulturhaaptstad 2022. D\'Esch-Minett-Regioun war eemol d\'Häerz vun der lëtzebuerger Stolindustrie; haut sinn d\'eemoleg Héichiewen kulturell Monumenter.'
  },
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/city/esch-sur-alzette'
  },
  {
    id: 'differdange',
    name: {
    en: 'Differdange',
    fr: 'Differdange',
    de: 'Differdingen',
    lb: 'Déifferdeng'
  },
    coords: [49.5243, 5.8892],
    emoji: '🔩',
    clue: {
    en: 'In the far southwest of Luxembourg, close to France, this industrial town built its identity on steel. Its distinctive wide-flange steel beams ("grey steel") were used to build the Empire State Building and the Rockefeller Center in New York.',
    fr: 'Dans l\'extrême sud-ouest du Luxembourg, près de la France, cette ville industrielle a bâti son identité sur l\'acier. Ses poutrelles en acier à larges ailes ("acier gris") ont été utilisées pour construire l\'Empire State Building et le Rockefeller Center à New York.',
    de: 'Im äußersten Südwesten Luxemburgs nahe der französischen Grenze baute diese Industriestadt ihre Identität auf Stahl. Ihre charakteristischen Breitflanschträger („Grausstahl") wurden beim Bau des Empire State Building und des Rockefeller Center in New York verwendet.',
    lb: 'Am äusserste Südweste vu Lëtzebuerg, no bei Frankräich, huet dës Industriestad hir Identitéit op Stol gebaut. Hir bredbeflanschte Stollträger goufen zum Bau vum Empire State Building an dem Rockefeller Center a New York benotzt.'
  },
    fact: {
    en: 'Differdange\'s Arbed steelworks produced the wide-flange steel beams used in the Empire State Building and Rockefeller Center. The steel tradition is honoured in the town\'s heritage trails.',
    fr: 'Les aciéries Arbed de Differdange ont produit les poutrelles utilisées pour l\'Empire State Building et le Rockefeller Center. La tradition sidérurgique est honorée dans les parcours patrimoniaux de la ville.',
    de: 'Die Arbed-Stahlwerke in Differdingen produzierten die Breitflanschträger für das Empire State Building und das Rockefeller Center. Die Stahltradition wird in den Erbepfaden der Stadt geehrt.',
    lb: 'D\'Arbed-Stollwierker zu Déifferdeng hunn d\'bredbeflanschte Stollträger fir d\'Empire State Building an d\'Rockefeller Center produzéiert. D\'Stooltradition gëtt an de Patrimounisweeër vun der Stad geéiert.'
  },
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/city/differdange'
  },
  {
    id: 'mondorf',
    name: {
    en: 'Mondorf-les-Bains',
    fr: 'Mondorf-les-Bains',
    de: 'Mondorf-les-Bains',
    lb: 'Munneref'
  },
    coords: [49.5028, 6.2835],
    emoji: '💧',
    clue: {
    en: 'Near the French border in the southeast, this elegant spa town has been known for its mineral springs since Roman times. Today it is home to Luxembourg\'s only thermal spa resort, surrounded by a magnificent park.',
    fr: 'Près de la frontière française dans le sud-est, cette élégante ville thermale est connue pour ses sources minérales depuis l\'époque romaine. Elle abrite aujourd\'hui le seul complexe thermal du Luxembourg, entouré d\'un magnifique parc.',
    de: 'Nahe der französischen Grenze im Südosten ist diese elegante Kurstadt seit der Römerzeit für ihre Mineralquellen bekannt. Heute beherbergt sie Luxemburgs einzigen Thermalkurort, umgeben von einem prächtigen Park.',
    lb: 'No bei der fransäischer Grenz am Südosten ass dës elegant Kurstad zënter der Réimerzäit fir hir Mineralquellen bekannt. Haut beherbergt si Lëtzebuerg säin eenzegen Thermalresort, ëmginn vu engem prächtege Parc.'
  },
    fact: {
    en: 'Mondorf-les-Bains has been a spa destination since the 19th century. Its Domaine Thermal offers thermal pools, saunas, and wellness treatments fed by natural mineral springs rich in calcium and magnesium.',
    fr: 'Mondorf-les-Bains est une destination thermale depuis le XIXe siècle. Son Domaine Thermal propose piscines thermales, saunas et soins de bien-être alimentés par des sources minérales naturelles riches en calcium et en magnésium.',
    de: 'Mondorf-les-Bains ist seit dem 19. Jahrhundert ein Kurort. Das Domaine Thermal bietet Thermalbäder, Saunas und Wellnessbehandlungen aus natürlichen Mineralquellen reich an Kalzium und Magnesium.',
    lb: 'Munneref ass zënter dem 19. Joerhonnert e Kurort. Säin Domaine Thermal bitt Thermalbäeder, Saunaen a Wellnessbehandlungen aus natierleche Mineralquellen, déi räich u Kalzium a Magnesium sinn.'
  },
    region: 'Remich',
    link: 'https://www.visitluxembourg.com/en/city/mondorf-les-bains'
  },
  {
    id: 'beaufort',
    name: {
    en: 'Beaufort Castle',
    fr: 'Château de Beaufort',
    de: 'Burg Beaufort',
    lb: 'Buerg Beefort'
  },
    coords: [49.8415, 6.2983],
    emoji: '🏚️',
    clue: {
    en: 'Hidden among the forests of the Mullerthal region, these dramatic ruins consist of two castle structures side by side — a medieval fortress and a later Renaissance château. The area is famous for its blackcurrant liqueur produced nearby.',
    fr: 'Caché dans les forêts de la région du Mullerthal, ces ruines spectaculaires comprennent deux structures de châteaux côte à côte — une forteresse médiévale et un château Renaissance plus récent. La région est connue pour sa liqueur de cassis produite à proximité.',
    de: 'Versteckt in den Wäldern der Mullerthal-Region bestehen diese dramatischen Ruinen aus zwei Burgstrukturen nebeneinander — einer mittelalterlichen Festung und einem späteren Renaissance-Schloss. Die Gegend ist für ihren Johannisbeerlikör bekannt.',
    lb: 'Verstoppt an de Bëscher vun der Mullerthal-Regioun bestinn dës dramatesch Ruinen aus zwee Buergstrukturen nieweneneen — enger mëttelalterlecher Festung an engem méi spéide Renaissance-Schlass. D\'Géigend ass berüümt fir hire lokal produzeierte Johannisbierren-Likör.'
  },
    fact: {
    en: 'Beaufort Castle has two structures: a medieval fortress (12th–14th c.) and a Renaissance château (17th c.). The surrounding village is renowned for its Cassero blackcurrant liqueur, made from local berries.',
    fr: 'Le château de Beaufort comprend deux structures : une forteresse médiévale (XIIe–XIVe s.) et un château Renaissance (XVIIe s.). Le village environnant est réputé pour sa liqueur de cassis Cassero, fabriquée à partir de baies locales.',
    de: 'Die Burg Beaufort umfasst zwei Strukturen: eine mittelalterliche Festung (12.–14. Jh.) und ein Renaissance-Schloss (17. Jh.). Das umliegende Dorf ist für seinen Cassero-Johannisbeerlikör aus einheimischen Beeren bekannt.',
    lb: 'D\'Buerg Beefort ëmfaasst zwou Strukturen: eng mëttelalterleche Festung (12.–14. Jh.) an e Renaissance-Schlass (17. Jh.). D\'Nopeschduerf ass berüümt fir säi Cassero-Johannisbierren-Likör aus lokaale Beiere.'
  },
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/place/site/beaufort-castle'
  },
  {
    id: 'larochette',
    name: {
    en: 'Larochette Castle',
    fr: 'Château de Larochette',
    de: 'Burg Larochette',
    lb: 'Fels (Buerg)'
  },
    coords: [49.7795, 6.2271],
    emoji: '🗼',
    clue: {
    en: 'Perched dramatically above a small town in central Luxembourg, these twin medieval ruins overlook the Ernz Blanche valley. The castle was split between two noble families for centuries — you can still see the remains of both their residences.',
    fr: 'Perchées de façon spectaculaire au-dessus d\'une petite ville au centre du Luxembourg, ces doubles ruines médiévales dominent la vallée de l\'Ernz Blanche. Le château fut partagé entre deux familles nobles pendant des siècles — on peut encore voir les vestiges de leurs deux résidences.',
    de: 'Dramatisch über einer kleinen Stadt im Zentrum Luxemburgs thronend, überblicken diese mittelalterlichen Doppelruinen das Ernz-Blanche-Tal. Die Burg war jahrhundertelang zwischen zwei Adelsfamilien aufgeteilt — man kann noch die Überreste beider Wohnsitze sehen.',
    lb: 'Dramatesch iwwer enger klenger Stad am Zentrum vu Lëtzebuerg throunend, iwwerblécken dës mëttelalterleche Duebellruinen d\'Ernz-Blanche-Daal. D\'Buerg war Jorhonnerte laang tëschent zwou Adelsfamilien opgedeelt — ee kann nach ëmmer d\'Iwwerreschter vun hire béide Residenzen gesinn.'
  },
    fact: {
    en: 'Larochette Castle (Fiels and Meysembourg towers) dates to the 12th century. The ruins rise dramatically above the picturesque town of Larochette, popular with visitors exploring the Mullerthal region.',
    fr: 'Le château de Larochette (tours Fiels et Meysembourg) date du XIIe siècle. Les ruines s\'élèvent de façon spectaculaire au-dessus de la pittoresque ville de Larochette, très fréquentée par les visiteurs du Mullerthal.',
    de: 'Die Burg Larochette (Türme Fiels und Meysembourg) stammt aus dem 12. Jahrhundert. Die Ruinen erheben sich dramatisch über der malerischen Stadt Larochette, die bei Besuchern der Mullerthal-Region beliebt ist.',
    lb: 'D\'Buerg Fels (Tierm Fiels a Meysembourg) staamt aus dem 12. Joerhonnert. D\'Ruinen erhiewe sech dramatesch iwwer der pittoresker Stad Fels, déi populär bei Besuchern vun der Mullerthal-Regioun ass.'
  },
    region: 'Mersch',
    link: 'https://www.visitluxembourg.com/en/place/site/larochette-castle'
  },
  {
    id: 'mudam',
    name: {
    en: 'MUDAM – Grand Duke Jean Museum of Modern Art',
    fr: 'MUDAM – Musée d\'Art Moderne Grand-Duc Jean',
    de: 'MUDAM – Großherzog-Jean-Museum für Moderne Kunst',
    lb: 'MUDAM – Musée d\'Art Moderne Grand-Duc Jean'
  },
    coords: [49.6257, 6.1614],
    emoji: '🎨',
    clue: {
    en: 'On the Kirchberg plateau of Luxembourg City, this striking glass and stone building designed by I.M. Pei houses Luxembourg\'s premier collection of contemporary art. It incorporates the ruins of an old fortress into its foundations.',
    fr: 'Sur le plateau de Kirchberg à Luxembourg-Ville, ce bâtiment remarquable en verre et en pierre conçu par I.M. Pei abrite la principale collection d\'art contemporain du Luxembourg. Il intègre dans ses fondations les ruines d\'une ancienne forteresse.',
    de: 'Auf dem Kirchberg-Plateau in Luxemburg-Stadt beherbergt dieses markante Glas-und-Stein-Gebäude von I.M. Pei Luxemburgs bedeutendste Sammlung zeitgenössischer Kunst. In seine Fundamente sind die Ruinen einer alten Festung eingebettet.',
    lb: 'Op dem Kierchbierg-Plateau zu Lëtzebuerg-Stad beherbergt dëst markant Glas-a-Steengebai vum I.M. Pei Lëtzebuerg seng wichtegst Sammlung vun zäitgenëssecher Konscht. Et integréiert d\'Ruinen vun enger aler Festung an seng Grondléiunge.'
  },
    fact: {
    en: 'MUDAM was designed by architect I.M. Pei and opened in 2006. It sits on the historic Fort Thüngen site and showcases international contemporary art with a focus on emerging artists.',
    fr: 'Le MUDAM a été conçu par l\'architecte I.M. Pei et inauguré en 2006. Il est situé sur le site historique du Fort Thüngen et présente l\'art contemporain international en mettant l\'accent sur les artistes émergents.',
    de: 'Das MUDAM wurde vom Architekten I.M. Pei entworfen und 2006 eröffnet. Es steht auf dem historischen Gelände des Fort Thüngen und zeigt internationale zeitgenössische Kunst mit Fokus auf Nachwuchskünstler.',
    lb: 'De MUDAM gouf vum Architekt I.M. Pei entworf a 2006 ageweit. En steet um historësche Gelände vum Fort Thüngen a weist international zäitgenëssesch Konscht mat Fokus op opkommend Kënschtler.'
  },
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/museum/mudam-luxembourg'
  },
  {
    id: 'philharmonie',
    name: {
    en: 'Philharmonie Luxembourg',
    fr: 'Philharmonie Luxembourg',
    de: 'Philharmonie Luxemburg',
    lb: 'Philharmonie Lëtzebuerg'
  },
    coords: [49.6250, 6.1611],
    emoji: '🎵',
    clue: {
    en: 'Standing like a white colonnade on the Kirchberg plateau, this concert hall opened in 2005 and is considered one of Europe\'s finest acoustic venues. Its distinctive exterior features 823 freestanding steel columns surrounding a glass and steel structure.',
    fr: 'Dressée comme une colonnade blanche sur le plateau de Kirchberg, cette salle de concert inaugurée en 2005 est considérée comme l\'une des meilleures salles acoustiques d\'Europe. Son extérieur distinctif est entouré de 823 colonnes en acier indépendantes.',
    de: 'Wie eine weiße Kolonnade auf dem Kirchberg-Plateau stehend, gilt dieser 2005 eröffnete Konzertsaal als eine der besten Akustikstätten Europas. Seine markante Außenhülle besteht aus 823 freistehenden Stahlsäulen.',
    lb: 'Wéi eng wäiss Kolonnad op dem Kierchbierg-Plateau stehend, gëtt dëse Konzertsal, deen 2005 opgaangen ass, als ee vun de beschten Akusteksäll vun Europa ugesinn. Seng markant Fassad ass vu 823 fräistehende Stollsäulen ëmginn.'
  },
    fact: {
    en: 'The Philharmonie Luxembourg was designed by Christian de Portzamparc and opened in 2005. Its Grande Salle seats 1,500 and is praised by musicians worldwide for its exceptional acoustics.',
    fr: 'La Philharmonie Luxembourg a été conçue par Christian de Portzamparc et inaugurée en 2005. Sa Grande Salle accueille 1 500 places et est saluée par les musiciens du monde entier pour son acoustique exceptionnelle.',
    de: 'Die Philharmonie Luxemburg wurde von Christian de Portzamparc entworfen und 2005 eröffnet. Ihr Großer Saal fasst 1.500 Plätze und wird von Musikern weltweit für seine herausragende Akustik gelobt.',
    lb: 'D\'Philharmonie Lëtzebuerg gouf vum Christian de Portzamparc entworf a 2005 ageweit. Hiren Groussal huet 1.500 Plazen a gëtt vu Museker weltwäit fir seng aussergewéinlech Akustek gelueft.'
  },
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/philharmonie-luxembourg'
  },
  {
    id: 'gelle-fra',
    name: {
    en: 'Gëlle Fra (Golden Lady)',
    fr: 'Gëlle Fra (Dame d\'Or)',
    de: 'Gëlle Fra (Goldene Frau)',
    lb: 'Gëlle Fra'
  },
    coords: [49.6111, 6.1303],
    emoji: '🗽',
    clue: {
    en: 'On a grand square near Luxembourg City\'s Old Town, a golden winged woman stands atop a 21-metre column, overlooking the Pétrusse valley. This war memorial was melted down by the Nazi occupiers in 1940 and faithfully reconstructed after liberation.',
    fr: 'Sur une grande place près de la vieille ville de Luxembourg, une femme ailée dorée se dresse au sommet d\'une colonne de 21 mètres, dominant la vallée de la Pétrusse. Ce monument aux morts fut fondu par les occupants nazis en 1940 et fidèlement reconstruit après la libération.',
    de: 'Auf einem großen Platz nahe der Luxemburger Altstadt steht eine goldene geflügelte Frau auf einer 21 Meter hohen Säule und überblickt das Pétrussetal. Dieses Kriegsdenkmal wurde 1940 von den NS-Besatzern eingeschmolzen und nach der Befreiung originalgetreu wiederhergestellt.',
    lb: 'Op engem grousse Plaz no bei der Aler Stad vu Lëtzebuerg steet eng gëlleng beflillecht Fra uewen op enger 21 Meter héijer Säul, déi dat Péitruss-Daal iwwerbléckt. Dëst Krichsdenkmal gouf 1940 vun den NS-Besetzer geschmollzt a no der Befreiung getreit rekonstruéiert.'
  },
    fact: {
    en: 'The Gëlle Fra (Golden Lady) was erected in 1923 to honour WWI volunteers. The Nazis destroyed it in 1940, but it was rebuilt after liberation. Today it is one of Luxembourg\'s most beloved national symbols.',
    fr: 'La Gëlle Fra (Dame d\'Or) fut érigée en 1923 pour honorer les volontaires de la Première Guerre mondiale. Les nazis la détruisirent en 1940, mais elle fut reconstruite après la libération. Elle est aujourd\'hui l\'un des symboles nationaux les plus aimés du Luxembourg.',
    de: 'Die Gëlle Fra (Goldene Frau) wurde 1923 zur Ehrung der Freiwilligen des Ersten Weltkriegs errichtet. Die Nazis zerstörten sie 1940, doch nach der Befreiung wurde sie wieder aufgebaut. Heute ist sie eines der beliebtesten Nationalsymbole Luxemburgs.',
    lb: 'D\'Gëlle Fra gouf 1923 opgeriicht fir d\'Fräiwëlleger vum Éischte Weltkrich ze éieren. D\'Nazien hunn si 1940 zerstéiert, ma si gouf no der Befreiung erëmgebaut. Haut ass si ee vun de geliifste Nationalsymboler vu Lëtzebuerg.'
  },
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/golden-lady-monument-constitution-square'
  },
  {
    id: 'notre-dame',
    name: {
    en: 'Notre-Dame Cathedral Luxembourg City',
    fr: 'Cathédrale Notre-Dame de Luxembourg',
    de: 'Kathedrale Notre-Dame Luxemburg-Stadt',
    lb: 'Kathedral Notre-Dame Lëtzebuerg-Stad'
  },
    coords: [49.6113, 6.1289],
    emoji: '⛪',
    clue: {
    en: 'In the heart of Luxembourg\'s old town, this early 17th-century cathedral was built by Jesuits and is the country\'s only cathedral. Every May, thousands of pilgrims gather here for the Octave — a two-week veneration of the Consolatrix Afflictorum.',
    fr: 'Au cœur de la vieille ville de Luxembourg, cette cathédrale du début du XVIIe siècle, construite par les Jésuites, est la seule cathédrale du pays. Chaque mois de mai, des milliers de pèlerins s\'y retrouvent pour l\'Octave — une vénération de deux semaines de la Consolatrix Afflictorum.',
    de: 'Im Herzen der Luxemburger Altstadt wurde diese Kathedrale aus dem frühen 17. Jahrhundert von Jesuiten erbaut und ist die einzige Kathedrale des Landes. Jeden Mai versammeln sich hier Tausende von Pilgern zur Oktav — einer zweiwöchigen Verehrung der Consolatrix Afflictorum.',
    lb: 'Am Häerz vun der Aler Stad vu Lëtzebuerg, gouf dës fréi 17. Joerhonnert Kathedral vun de Jesuiten gebaut a ass déi eenzeg Kathedral vum Land. All Mee versammelen sech hei Dausende vu Pilgere fir d\'Oktav — eng zwou-Wochen-Verehrung vun der Consolatrix Afflictorum.'
  },
    fact: {
    en: 'Notre-Dame Cathedral was built between 1613 and 1621 in late Gothic/early Renaissance style. It houses a revered statue of Our Lady of Luxembourg, patroness of the Grand Duchy, venerated during the annual Octave pilgrimage.',
    fr: 'La cathédrale Notre-Dame fut construite entre 1613 et 1621 dans un style gothique tardif/début Renaissance. Elle abrite une statue vénérée de Notre-Dame du Luxembourg, patronne du Grand-Duché.',
    de: 'Die Kathedrale Notre-Dame wurde zwischen 1613 und 1621 im spätgotisch/frühneuzeitlichen Stil erbaut. Sie beherbergt eine verehrte Statue Unserer Lieben Frau von Luxemburg, Schutzpatronin des Großherzogtums.',
    lb: 'D\'Kathedral Notre-Dame gouf tëschent 1613 a 1621 am spéitgotesche/fréimodernen Stil gebaut. Si beherbergt eng veréierter Statu vun Eis Léif Fra vu Lëtzebuerg, Schutzpatronin vum Groussherzogtum.'
  },
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/notre-dame-cathedral'
  },
  {
    id: 'grund',
    name: {
    en: 'The Grund',
    fr: 'Le Grund',
    de: 'Das Grund',
    lb: 'De Grond'
  },
    coords: [49.6087, 6.1340],
    emoji: '🌊',
    clue: {
    en: 'Deep in the valley of the Alzette river, far below Luxembourg City\'s plateau, lies this charming historic quarter. Its cobbled lanes, old mill buildings, and the Abbaye de Neumünster cultural centre make it one of the city\'s most picturesque neighbourhoods.',
    fr: 'Au fond de la vallée de l\'Alzette, bien en contrebas du plateau de Luxembourg-Ville, se trouve ce charmant quartier historique. Ses ruelles pavées, ses anciens moulins et l\'Abbaye de Neumünster en font l\'un des quartiers les plus pittoresques de la capitale.',
    de: 'Tief im Alzettetal, weit unterhalb des Plateaus von Luxemburg-Stadt, liegt dieses charmante historische Viertel. Seine gepflasterten Gassen, alten Mühlengebäude und die Abtei Neumünster als Kulturzentrum machen es zu einem der malerischsten Stadtteile der Hauptstadt.',
    lb: 'Déif am Alzette-Daal, wäit ënner dem Plateau vu Lëtzebuerg-Stad, läit dëst charmant historescht Quartier. Seng gepflasterte Gaassen, al Millen a d\'Abtei Neumünster als Kulturzentrum maache se zu engem vun de pittoreskste Quartiere vun der Haaptstad.'
  },
    fact: {
    en: 'The Grund is Luxembourg City\'s lowest and oldest district. The Abbaye de Neumünster, founded in the 7th century, is now a vibrant cultural centre. The area is also known for its lively café and restaurant scene.',
    fr: 'Le Grund est le quartier le plus bas et le plus ancien de Luxembourg-Ville. L\'Abbaye de Neumünster, fondée au VIIe siècle, est aujourd\'hui un centre culturel dynamique. Le quartier est aussi connu pour ses cafés et restaurants animés.',
    de: 'Das Grund ist der niedrigste und älteste Stadtteil Luxemburg-Stadts. Die Abtei Neumünster, im 7. Jahrhundert gegründet, ist heute ein lebendiges Kulturzentrum. Das Viertel ist auch für seine lebhafte Café- und Restaurantszene bekannt.',
    lb: 'De Grond ass den ënneschten a eelste Stadtteil vu Lëtzebuerg-Stad. D\'Abtei Neumünster, am 7. Joerhonnert gegrënnt, ass haut e lieweg Kulturzentrum. D\'Quartier ass och bekannt fir seng lieweg Kaffi- a Restaurantszene.'
  },
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/neumunster-abbey'
  },
  {
    id: 'dudelange',
    name: {
    en: 'Dudelange',
    fr: 'Dudelange',
    de: 'Düdelingen',
    lb: 'Diddeleng'
  },
    coords: [49.4783, 6.0863],
    emoji: '📸',
    clue: {
    en: 'In southern Luxembourg near the French border, this former steel town reinvented itself as a cultural hub. It is home to the Centre national de l\'audiovisuel and the Kulturfabrik, one of Luxembourg\'s leading alternative cultural venues.',
    fr: 'Dans le sud du Luxembourg, près de la frontière française, cette ancienne ville sidérurgique s\'est réinventée en pôle culturel. Elle abrite le Centre national de l\'audiovisuel et la Kulturfabrik, l\'une des principales salles culturelles alternatives du Luxembourg.',
    de: 'Im Süden Luxemburgs nahe der französischen Grenze hat sich diese ehemalige Stahlstadt zu einem Kulturzentrum gewandelt. Sie beherbergt das Centre national de l\'audiovisuel und die Kulturfabrik, eine der führenden alternativen Kulturstätten Luxemburgs.',
    lb: 'Am Süden vu Lëtzebuerg no bei der fransäischer Grenz huet dës eemoleg Stolstad sech zu engem Kulturzentrum ëmgeformt. Si beherbergt dat Centre national de l\'audiovisuel an d\'Kulturfabrik, ee vun de féierenden alternativen Kulturplazen vu Lëtzebuerg.'
  },
    fact: {
    en: 'Dudelange hosts the CNA (Centre national de l\'audiovisuel), which preserves Luxembourg\'s photographic and film heritage. The photographer Edward Steichen grew up in nearby Bivange.',
    fr: 'Dudelange accueille le CNA (Centre national de l\'audiovisuel), qui préserve le patrimoine photographique et cinématographique du Luxembourg. Le photographe Edward Steichen a grandi dans le village voisin de Bivange.',
    de: 'Düdelingen beherbergt das CNA (Centre national de l\'audiovisuel), das das fotografische und filmische Erbe Luxemburgs bewahrt. Der Fotograf Edward Steichen wuchs im nahe gelegenen Bivange auf.',
    lb: 'Diddeleng beherbergt dat CNA (Centre national de l\'audiovisuel), dat d\'fotografescht a filmescht Ierwen vu Lëtzebuerg erhält. De Fotograf Edward Steichen ass am Nopeschduerf Bivange opgewuess.'
  },
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/city/dudelange'
  },
  {
    id: 'bettembourg',
    name: {
    en: 'Parc Merveilleux, Bettembourg',
    fr: 'Parc Merveilleux, Bettembourg',
    de: 'Parc Merveilleux, Bettemburg',
    lb: 'Parc Merveilleux, Beetebuerg'
  },
    coords: [49.5205, 6.1024],
    emoji: '🦚',
    clue: {
    en: 'In central-southern Luxembourg, this beloved park has been delighting families since 1954 with its fairy-tale-themed attractions, free-roaming animals (including peacocks and deer), and playgrounds inspired by fairy tales. It is one of the country\'s most visited outdoor attractions.',
    fr: 'Dans le centre-sud du Luxembourg, ce parc bien-aimé enchante les familles depuis 1954 avec ses attractions féeriques, ses animaux en liberté (paons, cerfs) et ses aires de jeux inspirées des contes de fées. C\'est l\'une des attractions de plein air les plus visitées du pays.',
    de: 'Im Zentrum-Süden Luxemburgs begeistert dieser beliebte Park Familien seit 1954 mit märchenhaften Attraktionen, freilaufenden Tieren (darunter Pfauen und Rehe) und Spielplätzen nach Märchenmotiven. Er ist eine der meistbesuchten Freiluftattraktionen des Landes.',
    lb: 'Am Zentrum-Süden vu Lëtzebuerg begeeschtert dëse geliibte Parc Famillen zënter 1954 mat Faeréitesattraktiounen, fräilafende Bieren (dorënner Päipen a Wëller) a Spillplazen aus Mäerchenmotiver. Hien ass eng vun de meeschte besichte Fräiloftattraktiounen am Land.'
  },
    fact: {
    en: 'Parc Merveilleux has been a family favourite since 1954. Set in beautiful parkland, it features animals, fairy-tale scenes, rides, and attractions. Over 200,000 visitors come each year.',
    fr: 'Le Parc Merveilleux est un lieu de prédilection des familles depuis 1954. Situé dans un beau parc, il propose des animaux, des scènes de contes, des manèges et des attractions. Plus de 200 000 visiteurs s\'y rendent chaque année.',
    de: 'Der Parc Merveilleux ist seit 1954 ein Familienklassiker. Im schönen Parkgelände gibt es Tiere, Märchenszenen, Fahrgeschäfte und Attraktionen. Jährlich kommen über 200.000 Besucher.',
    lb: 'De Parc Merveilleux ass zënter 1954 e Familljefavorit. Am schéine Parc gi Bieren, Mäerchenszennen, Achterbunn a Attraktiounen ugebueden. All Joer kommen iwwer 200.000 Besucher.'
  },
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/place/site/parc-merveilleux'
  },
  {
    id: 'ettelbruck',
    name: {
    en: 'Ettelbruck',
    fr: 'Ettelbruck',
    de: 'Ettelbrück',
    lb: 'Ettelbréck'
  },
    coords: [49.8476, 6.1005],
    emoji: '🎖️',
    clue: {
    en: 'Known as the "Patton City," this crossroads town in central-north Luxembourg honours the American general whose 3rd Army liberated it in September 1944. Every year a General Patton Memorial Day parade is held here.',
    fr: 'Connue sous le nom de "Patton City", cette ville carrefour du centre-nord du Luxembourg rend hommage au général américain dont la 3e armée la libéra en septembre 1944. Un défilé commémoratif General Patton Memorial Day y est organisé chaque année.',
    de: 'Als „Patton-Stadt" bekannt, ehrt dieser Kreuzungsort im Zentrum-Norden Luxemburgs den amerikanischen General, dessen 3. Armee ihn im September 1944 befreite. Jedes Jahr findet hier eine Gedenkparade zum General Patton Memorial Day statt.',
    lb: 'Bekannt als „Patton-Stad", éiert dëst Kreuzungsstaedtchen am Zentrum-Norde vu Lëtzebuerg de amerikaneschen General, deem seng 3. Arméi et am September 1944 befreit huet. All Joer gëtt hei eng Gedenkprozessioun zum General Patton Memorial Day ofgehalen.'
  },
    fact: {
    en: 'Ettelbruck holds a General Patton Memorial Day every July, honouring General George S. Patton whose 3rd Army liberated the town on 25 September 1944. A statue of Patton stands in the town square.',
    fr: 'Ettelbruck organise chaque juillet un General Patton Memorial Day en l\'honneur du général George S. Patton, dont la 3e armée libéra la ville le 25 septembre 1944. Une statue de Patton se dresse sur la place principale.',
    de: 'Ettelbrück veranstaltet jeden Juli einen General Patton Memorial Day zu Ehren von General George S. Patton, dessen 3. Armee die Stadt am 25. September 1944 befreite. Eine Patton-Statue steht auf dem Stadtplatz.',
    lb: 'Ettelbréck organiséiert all Juli e General Patton Memorial Day fir d\'Éier vum General George S. Patton, deem seng 3. Arméi d\'Stad de 25. September 1944 befreit huet. Eng Patton-Statu steet op dem Stadtplatz.'
  },
    region: 'Diekirch',
    link: 'https://www.visitluxembourg.com/en/city/ettelbruck'
  },
  {
    id: 'grevenmacher',
    name: {
    en: 'Grevenmacher',
    fr: 'Grevenmacher',
    de: 'Grevenmacher',
    lb: 'Greiwemaacher'
  },
    coords: [49.6802, 6.4403],
    emoji: '🦋',
    clue: {
    en: 'On the banks of the Moselle river in eastern Luxembourg, this wine-producing town is also home to one of Europe\'s largest butterfly gardens, where hundreds of free-flying tropical butterflies surround visitors in a glass greenhouse.',
    fr: 'Sur les rives de la Moselle dans l\'est du Luxembourg, cette ville viticole abrite également l\'un des plus grands jardins de papillons d\'Europe, où des centaines de papillons tropicaux s\'envolent librement autour des visiteurs dans une serre en verre.',
    de: 'Am Ufer der Mosel im Osten Luxemburgs beherbergt diese Weinstadt auch einen der größten Schmetterlingsparks Europas, wo hunderte frei fliegende Tropenschmetterlinge die Besucher in einem Glasgewächshaus umgeben.',
    lb: 'Um Ufier vun der Musel am Oste vu Lëtzebuerg beherbergt dës Wäinstad och ee vun de gréisste Päipertsgäert vun Europa, wou Honnerte fräi fléiend tropescher Päipert d\'Besucher an engem Glasgewächshaus ëmginn.'
  },
    fact: {
    en: 'Grevenmacher\'s Butterfly Garden (Schmetterlingsgarten) houses over 400 exotic butterfly species in a heated tropical greenhouse. The town is also a key hub of Luxembourg\'s Moselle wine route.',
    fr: 'Le jardin des papillons (Schmetterlingsgarten) de Grevenmacher abrite plus de 400 espèces de papillons exotiques dans une serre tropicale chauffée. La ville est aussi un hub de la route des vins de la Moselle luxembourgeoise.',
    de: 'Der Schmetterlingspark (Schmetterlingsgarten) in Grevenmacher beherbergt über 400 exotische Schmetterlingsarten in einem beheizten Tropengewächshaus. Die Stadt ist auch ein wichtiger Knotenpunkt der luxemburgischen Moselweinstraße.',
    lb: 'De Päipertsgaart (Schmetterlingsgarten) zu Greiwemaacher beherbergt iwwer 400 exotesch Päipertsarten an engem behëtzte Tropikgewächshaus. D\'Stad ass och e wichtege Knotenpunkt vun der lëtzebuerger Muselwäistrooss.'
  },
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/place/site/grevenmacher-butterfly-garden'
  },
  {
    id: 'wormeldange',
    name: {
    en: 'Wormeldange',
    fr: 'Wormeldange',
    de: 'Wormeldingen',
    lb: 'Wuermeldeng'
  },
    coords: [49.6175, 6.4016],
    emoji: '🍇',
    clue: {
    en: 'This small wine village on the Moselle in eastern Luxembourg is famous for its Auxerrois and Pinot Gris grapes. Terraced vineyards climb the hillside behind the village, and the local cooperative winery is one of Luxembourg\'s most respected.',
    fr: 'Ce petit village viticole sur la Moselle dans l\'est du Luxembourg est réputé pour ses raisins Auxerrois et Pinot Gris. Des vignobles en terrasses s\'accrochent à la colline derrière le village, et la cave coopérative locale est l\'une des plus respectées du Luxembourg.',
    de: 'Dieses kleine Weindorf an der Mosel im Osten Luxemburgs ist für seine Auxerrois- und Pinot-Gris-Trauben berühmt. Terrassenförmig angelegte Weinberge erklimmen den Hang hinter dem Dorf, und die örtliche Genossenschaftskellerei gehört zu den angesehensten Luxemburgs.',
    lb: 'Dëst klenge Wäinduerf un der Musel am Oste vu Lëtzebuerg ass berüümt fir seng Auxerrois- a Pinot-Gris-Drauwen. Terrasséiert Wéngerten klammen den Hiwwel hannert dem Duerf erop, an d\'lokal Genossenschaftskellerei ass eng vun de respektéiersten vu Lëtzebuerg.'
  },
    fact: {
    en: 'Wormeldange is the heart of Luxembourg\'s Auxerrois grape production. The Vinsmoselle cooperative, founded in 1921, is the country\'s largest wine producer and has its main winery here.',
    fr: 'Wormeldange est le cœur de la production d\'Auxerrois au Luxembourg. La coopérative Vinsmoselle, fondée en 1921, est le plus grand producteur de vin du pays et y possède sa cave principale.',
    de: 'Wormeldingen ist das Herz der luxemburgischen Auxerrois-Weinproduktion. Die 1921 gegründete Genossenschaft Vinsmoselle ist der größte Weinproduzent des Landes und betreibt hier ihre Hauptkellerei.',
    lb: 'Wuermeldeng ass d\'Häerz vun der lëtzebuerger Auxerrois-Wäinproduktioun. D\'Vinsmoselle Genossenschaft, 1921 gegrënnt, ass de gréisste Wäinproduzent vum Land a huet hei hir Haaptkellerei.'
  },
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/country/moselle'
  },
  {
    id: 'rumelange',
    name: {
    en: 'Rumelange Mining Museum',
    fr: 'Musée de la Mine, Rumelange',
    de: 'Bergbaumuseum Rümelingen',
    lb: 'Minettmusée Rëmeleng'
  },
    coords: [49.4638, 5.9439],
    emoji: '⛏️',
    clue: {
    en: 'In the heart of the southern Minette iron-ore basin, this museum lets visitors descend into a real former iron mine. The subterranean galleries and original equipment bring Luxembourg\'s industrial past vividly to life.',
    fr: 'Au cœur du bassin minier du Minett dans le sud, ce musée permet aux visiteurs de descendre dans une ancienne mine de fer. Les galeries souterraines et les équipements d\'origine font revivre de manière saisissante le passé industriel du Luxembourg.',
    de: 'Im Herzen des südlichen Minette-Eisenerzgebiets ermöglicht dieses Museum den Besuchern, in eine echte ehemalige Eisengrube hinabzusteigen. Die unterirdischen Stollen und Originalgeräte lassen Luxemburgs industrielle Vergangenheit lebendig werden.',
    lb: 'Am Häerz vum südleche Minette-Äerztbasin erlaabt dëse Musée de Besucher, an eng echt eemoleg Äerztgruf erofzeklammen. D\'ënnerierdesch Stollen an d\'Originalausrüstung bréngen Lëtzebuerg seng industriell Vergaangenheet lieweg op.'
  },
    fact: {
    en: 'The National Mining Museum in Rumelange allows visitors to explore authentic mine galleries and ride a mine train underground. The Minette basin once supplied iron ore to furnaces across Europe.',
    fr: 'Le Musée national des mines de Rumelange permet aux visiteurs d\'explorer d\'authentiques galeries et de prendre un train minier souterrain. Le bassin du Minett fournissait autrefois du minerai de fer aux hauts fourneaux de toute l\'Europe.',
    de: 'Das Nationale Bergbaumuseum in Rümelingen ermöglicht es, authentische Minenstollen zu erkunden und mit einem Grubenbahnwagen unter die Erde zu fahren. Das Minette-Becken lieferte einst Eisenerz an Hochöfen in ganz Europa.',
    lb: 'De Nationalmusée fir Biergbaugeschicht zu Rëmeleng erlaabt d\'Entdeckung vun authentesche Gruftstollen an d\'Fahrt mat engem Gruftbunnwunn ënner d\'Äerd. D\'Minette-Becken huet eemol Äerzt fir Héichiewen an ganz Europa geliwwert.'
  },
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/place/museum/national-mining-museum'
  },
  {
    id: 'useldange',
    name: {
    en: 'Useldange Castle',
    fr: 'Château d\'Useldange',
    de: 'Burg Useldingen',
    lb: 'Buerg Useldeng'
  },
    coords: [49.7615, 5.9861],
    emoji: '🏰',
    clue: {
    en: 'This well-preserved medieval tower house stands above a quiet village in western Luxembourg. Unlike many Luxembourg castles, parts of the interior can still be visited, and the surrounding area is dotted with hiking trails through the Attert valley.',
    fr: 'Cette tour médiévale bien préservée domine un village tranquille de l\'ouest du Luxembourg. Contrairement à beaucoup de châteaux luxembourgeois, une partie de l\'intérieur est encore accessible. Les environs sont parsemés de sentiers de randonnée dans la vallée de l\'Attert.',
    de: 'Dieses gut erhaltene mittelalterliche Turmhaus überragt ein ruhiges Dorf im Westen Luxemburgs. Anders als viele luxemburgische Burgen können Teile des Inneren noch besichtigt werden. Die Umgebung ist von Wanderwegen durch das Attert-Tal durchzogen.',
    lb: 'Dësen immens gutt erhaltene mëttelalterleche Tuermhaus dominéiert e rouegt Duerf im Westen vu Lëtzebuerg. Onlëschent vill lëtzebuerger Buergen, kann een Deel vum Interieur nach ëmmer besicht ginn, an d\'Ëmgéigend ass mat Wanderweeër duerch dat Attert-Daal iwwersait.'
  },
    fact: {
    en: 'Useldange Castle dates to the 12th century. The keep and part of the curtain wall are remarkably intact. The castle overlooks the Attert river and the peaceful village of Useldange below.',
    fr: 'Le château d\'Useldange date du XIIe siècle. Le donjon et une partie du mur d\'enceinte sont remarquablement intacts. Le château surplombe la rivière Attert et le paisible village d\'Useldange.',
    de: 'Die Burg Useldingen stammt aus dem 12. Jahrhundert. Der Bergfried und ein Teil der Ringmauer sind bemerkenswert intakt. Die Burg überblickt den Fluss Attert und das friedliche Dorf Useldingen.',
    lb: 'D\'Buerg Useldeng staamt aus dem 12. Joerhonnert. De Biergfrid an en Deel vun der Ringmauer sinn bemierkenswäert intakt. D\'Buerg iwwerbléckt den Attert-Floss an dat fridlecht Duerf Useldeng ënnert sech.'
  },
    region: 'Capellen',
    link: 'https://www.visitluxembourg.com/en/place/site/useldange-castle'
  },
  {
    id: 'ansembourg',
    name: {
    en: 'Ansembourg Castle',
    fr: 'Château d\'Ansembourg',
    de: 'Schloss Ansembourg',
    lb: 'Schlass Ansembuer'
  },
    coords: [49.7110, 6.0213],
    emoji: '🌳',
    clue: {
    en: 'In the forested Eisch valley in central Luxembourg, this elegant 17th-century château still belongs to a noble family. Its formal French gardens, terraced fountains, and surrounding woodland make it one of the most picturesque estates in the country.',
    fr: 'Dans la forêt de la vallée de l\'Eisch au centre du Luxembourg, cet élégant château du XVIIe siècle appartient encore à une famille noble. Ses jardins à la française, ses fontaines en terrasses et ses bois environnants en font l\'un des domaines les plus pittoresques du pays.',
    de: 'Im bewaldeten Eischtal im Zentrum Luxemburgs gehört dieses elegante Schloss aus dem 17. Jahrhundert noch einer Adelsfamilie. Seine französischen Gärten, terrassenförmigen Brunnen und das umliegende Waldland machen es zu einem der pittoresksten Güter des Landes.',
    lb: 'Am bewaldete Eisch-Daal am Zentrum vu Lëtzebuerg gehéiert dëst elegant Schlass aus dem 17. Joerhonnert nach ëmmer enger Adeligefamill. Seng franséisch Formalgäert, Terrassebrunnen an d\'Bëschumgéigend maache se zu engem vun de pittoreskste Guiter vum Land.'
  },
    fact: {
    en: 'Ansembourg Old Castle (12th c.) and New Castle (17th c.) stand together in the Eisch valley. The gardens of the new castle were laid out in the French formal style and are open to visitors.',
    fr: 'Le vieux château d\'Ansembourg (XIIe s.) et le nouveau château (XVIIe s.) se dressent ensemble dans la vallée de l\'Eisch. Les jardins du nouveau château, aménagés dans le style français formel, sont ouverts aux visiteurs.',
    de: 'Das Alte Schloss Ansembourg (12. Jh.) und das Neue Schloss (17. Jh.) stehen gemeinsam im Eischtal. Die Gärten des neuen Schlosses wurden im französischen Formalstil angelegt und sind für Besucher geöffnet.',
    lb: 'D\'Aal Schlass Ansembuer (12. Jh.) an dat Neit Schlass (17. Jh.) stinn zesummen am Eisch-Daal. D\'Gäert vum neie Schlass goufe am franséische Formalstil ugeluecht a si fir Besucher opgaangen.'
  },
    region: 'Mersch',
    link: 'https://www.visitluxembourg.com/en/place/site/ansembourg-valley'
  },
  {
    id: 'hollenfels',
    name: {
    en: 'Hollenfels Castle',
    fr: 'Château de Hollenfels',
    de: 'Burg Hollenfels',
    lb: 'Buerg Helperknapp'
  },
    coords: [49.7501, 6.0451],
    emoji: '🏕️',
    clue: {
    en: 'Overlooking the Eisch valley in central Luxembourg, this 12th-century castle was restored in the 19th century and now serves as a youth hostel. It is surrounded by hiking trails and is a popular base for families exploring the region.',
    fr: 'Surplombant la vallée de l\'Eisch dans le centre du Luxembourg, ce château du XIIe siècle a été restauré au XIXe siècle et sert désormais d\'auberge de jeunesse. Entouré de sentiers de randonnée, il est une base prisée des familles explorant la région.',
    de: 'Mit Blick auf das Eischtal im Zentrum Luxemburgs wurde diese Burg aus dem 12. Jahrhundert im 19. Jahrhundert restauriert und dient heute als Jugendherberge. Umgeben von Wanderwegen ist sie eine beliebte Basis für Familien, die die Region erkunden.',
    lb: 'Mat Bléck op d\'Eisch-Daal am Zentrum vu Lëtzebuerg gouf dës Buerg aus dem 12. Joerhonnert am 19. Joerhonnert restauréiert a déngt haut als Jugendherberg. Ëmginn vu Wanderweeër, ass se eng populär Basis fir Famillen, déi d\'Regioun entdecken.'
  },
    fact: {
    en: 'Hollenfels Castle is one of Luxembourg\'s oldest medieval fortresses. Converted into a youth hostel, it offers budget accommodation with a medieval atmosphere. The Eisch valley trails are right at the doorstep.',
    fr: 'Le château de Hollenfels est l\'une des plus anciennes forteresses médiévales du Luxembourg. Transformé en auberge de jeunesse, il offre un hébergement à petit prix dans une atmosphère médiévale. Les sentiers de la vallée de l\'Eisch sont tout proches.',
    de: 'Die Burg Hollenfels ist eine der ältesten mittelalterlichen Festungen Luxemburgs. Zur Jugendherberge umgebaut, bietet sie preiswerte Unterkünfte mit mittelalterlicher Atmosphäre. Die Wanderwege des Eischtals liegen direkt vor der Tür.',
    lb: 'D\'Buerg Helperknapp ass eng vun de eelste mëttelalterleche Festungen vu Lëtzebuerg. Als Jugendherberg ëmgebaut, bitt se preisgënschteg Ënnerkonft mat mëttelalterlecher Atmosphär. D\'Wanderweeër vum Eisch-Daal sinn direkt virun der Dier.'
  },
    region: 'Mersch',
    link: 'https://www.visitluxembourg.com/en/place/site/hollenfels-castle'
  },
  {
    id: 'colpach',
    name: {
    en: 'Château de Colpach',
    fr: 'Château de Colpach',
    de: 'Schloss Colpach',
    lb: 'Schlass Colpach'
  },
    coords: [49.8203, 5.9178],
    emoji: '🎭',
    clue: {
    en: 'Hidden in the northern forests near the Belgian border, this château and its surrounding park became a gathering place for European artists and intellectuals in the early 20th century, hosted by Luxembourg\'s most famous industrialist family. The sculptor Auguste Rodin visited here.',
    fr: 'Caché dans les forêts du nord près de la frontière belge, ce château et son parc devinrent au début du XXe siècle un lieu de rassemblement pour les artistes et les intellectuels européens, accueillis par la famille industrielle la plus célèbre du Luxembourg. Le sculpteur Auguste Rodin y séjourna.',
    de: 'In den nördlichen Wäldern nahe der belgischen Grenze versteckt, wurde dieses Schloss und sein Park im frühen 20. Jahrhundert zum Treffpunkt europäischer Künstler und Intellektueller, eingeladen von Luxemburgs berühmtester Industriellenfamilie. Der Bildhauer Auguste Rodin besuchte es.',
    lb: 'Verstoppt an de Bëscher vum Norden no bei der belgescher Grenz, gouf dëst Schlass an seng Parc am fréien 20. Joerhonnert e Versammlungsplaz fir europäesch Kënschtler an Intellektuell, agelueden vun der berüümtster Industriellfamill vu Lëtzebuerg. De Bildhaier Auguste Rodin huet et besicht.'
  },
    fact: {
    en: 'Colpach was the estate of Emile and Aline Mayrisch, who hosted luminaries including André Gide, Jean Schlumberger, and Auguste Rodin. The park and chapel are open to visitors today.',
    fr: 'Colpach fut le domaine d\'Emile et Aline Mayrisch, qui y reçurent des personnalités comme André Gide, Jean Schlumberger et Auguste Rodin. Le parc et la chapelle sont ouverts aux visiteurs aujourd\'hui.',
    de: 'Colpach war das Gut von Emile und Aline Mayrisch, die Persönlichkeiten wie André Gide, Jean Schlumberger und Auguste Rodin empfingen. Park und Kapelle sind heute für Besucher geöffnet.',
    lb: 'Colpach war d\'Besëtz vun Emile an Aline Mayrisch, déi Perséinlechkeeten wéi André Gide, Jean Schlumberger a Auguste Rodin empfaangen hunn. De Parc an d\'Kapell sinn haut fir Besucher opgaangen.'
  },
    region: 'Redange',
    link: 'https://www.visitluxembourg.com/en/place/site/colpach-estate'
  },
  {
    id: 'brandenbourg',
    name: {
    en: 'Brandenbourg Castle',
    fr: 'Château de Brandenbourg',
    de: 'Burg Brandenbourg',
    lb: 'Buerg Brandenbuer'
  },
    coords: [49.9574, 6.0809],
    emoji: '🏯',
    clue: {
    en: 'In the wooded hills of the northern Ardennes, the ruins of this 13th-century castle overlook a peaceful valley near a small village. The site is part of a scenic hiking loop through oak and beech forests typical of this unspoilt part of Luxembourg.',
    fr: 'Dans les collines boisées des Ardennes du nord, les ruines de ce château du XIIIe siècle dominent une paisible vallée près d\'un petit village. Le site fait partie d\'une boucle de randonnée pittoresque à travers les forêts de chênes et de hêtres typiques de cette partie préservée du Luxembourg.',
    de: 'In den bewaldeten Hügeln der nördlichen Ardennen überblicken die Ruinen dieser Burg aus dem 13. Jahrhundert ein friedliches Tal nahe einem kleinen Dorf. Der Ort ist Teil einer malerischen Wanderschleife durch Eichen- und Buchenwälder.',
    lb: 'An de bewaldete Hiwwele vun den nordleche Ardennen iwwerblécken d\'Ruinen vun dëser Buerg aus dem 13. Joerhonnert e fridlecht Daal no bei engem klenge Duerf. De Site ass Deel vun enger malerischer Wanderschleif duerch Eech- a Buchebëscher.'
  },
    fact: {
    en: 'Brandenbourg Castle was built in the 13th century and gradually fell into ruin after the 17th century. Today its ivy-clad towers and walls rise dramatically from the surrounding forest, offering a romantic ruin experience.',
    fr: 'Le château de Brandenbourg fut construit au XIIIe siècle et tomba progressivement en ruine après le XVIIe siècle. Aujourd\'hui ses tours et murailles couvertes de lierre surgissent dramatiquement de la forêt environnante.',
    de: 'Die Burg Brandenbourg wurde im 13. Jahrhundert erbaut und verfiel nach dem 17. Jahrhundert allmählich. Heute erheben sich ihre efeuumrankten Türme und Mauern dramatisch aus dem umliegenden Wald.',
    lb: 'D\'Buerg Brandenbuer gouf am 13. Joerhonnert gebaut a verfill no dem 17. Joerhonnert lues a lues. Haut erhiewe sech hir efeubedeckte Tierm an d\'Maueren dramatesch aus dem ëmlegende Bësch.'
  },
    region: 'Diekirch',
    link: 'https://www.visitluxembourg.com/en/place/site/brandenbourg-castle'
  },
  {
    id: 'eisch-valley',
    name: {
    en: 'Eisch Valley',
    fr: 'Vallée de l\'Eisch',
    de: 'Eischtal',
    lb: 'Eisch-Daal'
  },
    coords: [49.7021, 6.0074],
    emoji: '🌿',
    clue: {
    en: 'Sometimes called the "Valley of the Seven Castles," this lush valley in western Luxembourg is threaded by a river and a hiking trail that passes the ruins and towers of seven medieval fortresses within a short distance. It is one of the most scenic walks in the country.',
    fr: 'Parfois appelée la "Vallée des sept châteaux", cette vallée verdoyante de l\'ouest du Luxembourg est parcourue par une rivière et un sentier qui passe les ruines et les tours de sept forteresses médiévales à faible distance. C\'est l\'une des promenades les plus pittoresques du pays.',
    de: 'Manchmal als „Tal der sieben Burgen" bezeichnet, durchzieht ein Fluss und ein Wanderweg dieses üppige Tal im Westen Luxemburgs, vorbei an Ruinen und Türmen sieben mittelalterlicher Burgen. Es ist einer der schönsten Spaziergänge des Landes.',
    lb: 'Heiansdo „Siwe-Buerge-Daal" genannt, gëtt dëst üppegt Daal am Weste vu Lëtzebuerg vun engem Floss an engem Wanderweeg duerchgezunn, dee laangs de Ruinen a Tierm vu siwe mëttelalterleche Festungen a kuerzer Distanz passéiert. Et ass ee vun de schéinste Spazéiergäng vum Land.'
  },
    fact: {
    en: 'The "Vallée des Sept Châteaux" (Valley of Seven Castles) follows the Eisch river through Koerich, Ansembourg, Hollenfels, and more. The 37km trail is one of Luxembourg\'s most rewarding hikes.',
    fr: 'La "Vallée des Sept Châteaux" suit la rivière Eisch à travers Koerich, Ansembourg, Hollenfels et autres. Le sentier de 37 km est l\'une des randonnées les plus gratifiantes du Luxembourg.',
    de: 'Das Tal der Sieben Burgen (Vallée des Sept Châteaux) folgt der Eisch durch Koerich, Ansembourg, Hollenfels und weitere. Der 37 km lange Weg ist eine der lohnendsten Wanderungen Luxemburgs.',
    lb: 'D\'Vallée des Sept Châteaux follegt der Eisch duerch Koerich, Ansembuer, Helperknapp a méi. De 37 km laange Weeg ass eng vun de lohendste Wanderunge vu Lëtzebuerg.'
  },
    region: 'Capellen',
    link: 'https://www.visitluxembourg.com/en/place/site/seven-castles-trail'
  },
  {
    id: 'mersch',
    name: {
    en: 'Mersch',
    fr: 'Mersch',
    de: 'Mersch',
    lb: 'Miersch'
  },
    coords: [49.7488, 6.0944],
    emoji: '🛤️',
    clue: {
    en: 'Often called the "geographic heart of Luxembourg," this central town sits where major roads and rivers converge. Near the town centre lies an old Roman villa site, and the surrounding area contains numerous prehistoric tumuli (burial mounds).',
    fr: 'Souvent appelée le "cœur géographique du Luxembourg", cette ville centrale se situe au carrefour des principales routes et rivières. Près du centre-ville se trouve un ancien site de villa romaine, et les environs recèlent de nombreux tumulus préhistoriques.',
    de: 'Oft als „geographisches Herz Luxemburgs" bezeichnet, liegt diese zentrale Stadt dort, wo wichtige Straßen und Flüsse zusammenkommen. Nahe dem Stadtzentrum befindet sich eine alte römische Villenanlage, und die Umgebung enthält zahlreiche prähistorische Tumuli (Grabhügel).',
    lb: 'Dacks als „geographescht Häerz vu Lëtzebuerg" bezeechent, läit dës zentral Stad do, wou wichteg Stroossen a Flëss zesummekommen. No beim Stadtzentrum befënnt sech eng al réimesch Villasite, an d\'Ëmgéigend enthält vill prehistoresch Grabhiwwele (Tumuli).'
  },
    fact: {
    en: 'Mersch is geographically at Luxembourg\'s centre. Nearby are important archaeological sites including the Roman villa of Steinsel and numerous Bronze Age tumuli. The town has been a crossroads since antiquity.',
    fr: 'Mersch est géographiquement au centre du Luxembourg. À proximité se trouvent d\'importants sites archéologiques, dont la villa romaine de Steinsel et de nombreux tumulus de l\'âge du bronze. La ville est un carrefour depuis l\'Antiquité.',
    de: 'Mersch liegt geographisch im Zentrum Luxemburgs. In der Nähe befinden sich wichtige archäologische Stätten, darunter die Römer-Villa von Steinsel und zahlreiche bronzezeitliche Hügelgräber. Die Stadt ist seit der Antike ein Knotenpunkt.',
    lb: 'Miersch läit geographesch am Zentrum vu Lëtzebuerg. An der Nopesch befanne sech wichteg archaeologesch Siten dorënner d\'réimesch Villa vu Stesel a vill bronzezäitlech Grabhiwwelen. D\'Stad ass säit der Antike e Knotenponng.'
  },
    region: 'Mersch',
    link: 'https://www.visitluxembourg.com/en/city/mersch'
  },
  {
    id: 'wasserbillig',
    name: {
    en: 'Wasserbillig',
    fr: 'Wasserbillig',
    de: 'Wasserbillig',
    lb: 'Waasserbëlleg'
  },
    coords: [49.7163, 6.5003],
    emoji: '🌊',
    clue: {
    en: 'At the far eastern tip of Luxembourg, where the Sauer river meets the Moselle at the German border, this town marks the end of the Luxembourg wine route. Its name — meaning "cheap water" — is explained by the legend of a Roman soldier who found a spring here.',
    fr: 'À l\'extrémité orientale du Luxembourg, là où la Sûre rejoint la Moselle à la frontière allemande, cette ville marque la fin de la route des vins du Luxembourg. Son nom — signifiant "eau bon marché" — s\'explique par la légende d\'un soldat romain qui y aurait trouvé une source.',
    de: 'An der östlichsten Spitze Luxemburgs, wo die Sauer an der deutschen Grenze in die Mosel mündet, markiert diese Stadt das Ende der luxemburgischen Weinstraße. Ihr Name — „billiges Wasser" — erklärt sich durch die Legende eines römischen Soldaten, der hier eine Quelle fand.',
    lb: 'Un der äischtlechster Spëtzt vu Lëtzebuerg, wou d\'Sauer un der däitscher Grenz an d\'Musel fléisst, markéiert dës Stad d\'Enn vun der lëtzebuerger Wäistrooss. Hire Numm — „bëllegt Waasser" — gëtt duerch d\'Liewen vun engem réimeschen Zaldot erkläert, deen hei eng Quell entdeckt huet.'
  },
    fact: {
    en: 'Wasserbillig sits at the confluence of the Sauer and Moselle rivers, at the tripoint where Luxembourg meets Germany. It marks the northern end of the 42km Moselle wine route.',
    fr: 'Wasserbillig est situé au confluent de la Sûre et de la Moselle, au tripoint entre le Luxembourg et l\'Allemagne. Il marque l\'extrémité nord de la route des vins de la Moselle longue de 42 km.',
    de: 'Wasserbillig liegt am Zusammenfluss von Sauer und Mosel, am Dreiländereck zwischen Luxemburg und Deutschland. Es markiert das nördliche Ende der 42 km langen Moselweinstraße.',
    lb: 'Waasserbëlleg läit um Zesummefloss vu Sauer a Musel, um Dreiländerpunkt tëschent Lëtzebuerg an Däitschland. Et markéiert den nërdlechen Enn vun der 42 km laanger Muselwäistrooss.'
  },
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/country/moselle'
  },
  {
    id: 'petange',
    name: {
    en: 'Pétange',
    fr: 'Pétange',
    de: 'Petingen',
    lb: 'Péiteng'
  },
    coords: [49.5578, 5.8758],
    emoji: '🚂',
    clue: {
    en: 'In the far southwest, where Luxembourg meets France and Belgium, this town grew up around its railway junction and iron industry. A heritage steam railway runs from here through the former steel country on special event days.',
    fr: 'Dans l\'extrême sud-ouest, là où le Luxembourg rejoint la France et la Belgique, cette ville s\'est développée autour de son nœud ferroviaire et de son industrie du fer. Un chemin de fer touristique à vapeur y circule à travers l\'ancien pays minier lors de journées spéciales.',
    de: 'Im äußersten Südwesten, wo Luxemburg auf Frankreich und Belgien trifft, wuchs diese Stadt rund um ihren Eisenbahnknoten und die Eisendustrie. Eine Museumsdampfbahn fährt an Sondertagen durch das ehemalige Stahlland.',
    lb: 'Am äischtlechste Südwesten, wou Lëtzebuerg op Frankräich a Belgien treffe, huet dës Stad sech ronderëm hire Bahnjunction an d\'Äerzindustrie entwéckelt. Eng Museumdampfbunn fiert un spezielle Veranstaltungsdeeg duerch d\'eemoleg Stollland.'
  },
    fact: {
    en: 'Pétange\'s Fond-de-Gras site preserves Luxembourg\'s industrial railway heritage, with steam trains running through the former mining landscape. It is also close to the three-country border of Luxembourg, France, and Belgium.',
    fr: 'Le site de Fond-de-Gras à Pétange préserve le patrimoine ferroviaire industriel luxembourgeois, avec des trains à vapeur traversant l\'ancien paysage minier. La ville est aussi proche de la frontière des trois pays : Luxembourg, France et Belgique.',
    de: 'Der Fond-de-Gras in Petingen bewahrt das industrielle Eisenbahnerbe Luxemburgs mit Dampfzügen durch die ehemalige Bergbaulandschaft. Die Stadt liegt auch nahe dem Dreiländerpunkt Luxemburg, Frankreich und Belgien.',
    lb: 'D\'Fond-de-Gras zu Péiteng erhält Lëtzebuerg seng industriellt Bunn-Ierwen mat Dampflokomotiven duerch d\'eemoleg Biergbaulandschaft. D\'Stad läit och no beim Dreiländerpunkt vu Lëtzebuerg, Frankräich a Belgien.'
  },
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/place/site/fond-de-gras'
  },
  {
    id: 'adolphe-bridge',
    name: {
    en: 'Adolphe Bridge',
    fr: 'Pont Adolphe',
    de: 'Adolphe-Brücke',
    lb: 'Adolphe-Bréck'
  },
    coords: [49.6080, 6.1300],
    emoji: '🌉',
    clue: {
    en: 'This elegant stone arch bridge spans a deep gorge in Luxembourg City, connecting the old town to the new quarters. When it was completed in 1903, its central arch (85 metres) was the largest stone arch bridge in the world. Today it is one of the city\'s most photographed landmarks.',
    fr: 'Ce beau pont en pierre enjambe une profonde gorge à Luxembourg-Ville, reliant la vieille ville aux nouveaux quartiers. À son achèvement en 1903, son arche centrale (85 mètres) était le plus grand pont en pierre du monde. Aujourd\'hui c\'est l\'un des monuments les plus photographiés de la ville.',
    de: 'Diese elegante Steinbogenbrücke überspannt eine tiefe Schlucht in Luxemburg-Stadt und verbindet die Altstadt mit den neuen Vierteln. Bei ihrer Fertigstellung 1903 war ihr Mittelbogen (85 Meter) die größte Steinbogenbrücke der Welt. Heute ist sie eines der meistfotografierten Wahrzeichen der Stadt.',
    lb: 'Dës elegant Steenbogenbréck iwwerspannt eng déif Schluucht zu Lëtzebuerg-Stad a verbënnt d\'Aal Stad mat den neie Quartieren. Bei hirer Fäerdegstellung 1903 war hire Mëttelbou (85 Meter) déi gréisst Steenbogenbréck vun der Welt. Haut ass si ee vun de meist fotograféierte Monumenter vun der Stad.'
  },
    fact: {
    en: 'The Adolphe Bridge (Pont Adolphe) was completed in 1903 and named after Grand Duke Adolphe. Its two stone arches span the Pétrusse valley, and its central span of 85m was the largest in the world at the time of construction.',
    fr: 'Le pont Adolphe fut achevé en 1903 et nommé d\'après le Grand-Duc Adolphe. Ses deux arches en pierre enjambent la vallée de la Pétrusse, et son arche centrale de 85 m était la plus grande du monde lors de sa construction.',
    de: 'Die Adolphe-Brücke (Pont Adolphe) wurde 1903 fertiggestellt und nach Großherzog Adolphe benannt. Ihre zwei Steinbögen überspannen das Pétrussetal, und ihr Mittelbogen von 85 m war zum Zeitpunkt des Baus der größte der Welt.',
    lb: 'D\'Adolphe-Bréck gouf 1903 fäerdeg a no dem Groussherzog Adolphe benannt. Hir zwou Steenbue iwwerspannen dat Péitruss-Daal, an hire Mëttelbou vu 85 m war beim Bau dee gréisste vun der Welt.'
  },
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/adolphe-bridge'
  },
  {
    id: 'luxembourg-airport',
    name: {
    en: 'Luxembourg Airport (Findel)',
    fr: 'Aéroport de Luxembourg (Findel)',
    de: 'Flughafen Luxemburg (Findel)',
    lb: 'Lëtzebuerg Fluchhafen (Findel)'
  },
    coords: [49.6286, 6.2044],
    emoji: '✈️',
    clue: {
    en: 'East of Luxembourg City, this is one of Europe\'s smallest national airports — yet one of the most important air cargo hubs in Europe. A certain large e-commerce company uses it as its European logistics base, making it the busiest cargo airport in the Benelux region.',
    fr: 'À l\'est de Luxembourg-Ville, c\'est l\'un des plus petits aéroports nationaux d\'Europe — et pourtant l\'un des hubs de fret aérien les plus importants du continent. Un grand groupe de commerce électronique y a installé sa base logistique européenne, en faisant le plus grand aéroport de fret du Benelux.',
    de: 'Östlich von Luxemburg-Stadt ist dies einer der kleinsten Nationalflughäfen Europas — und doch einer der wichtigsten Luftfrachtdrehkreuze des Kontinents. Ein großer E-Commerce-Konzern nutzt ihn als europäische Logistikbasis und macht ihn zum größten Frachtflughafen der Benelux-Region.',
    lb: 'Ëstlech vu Lëtzebuerg-Stad ass dëst ee vun de klengste Nationalfluchhäfen vun Europa — an dach ee vun de wichtegste Loftfracht-Drehkreuzen vum Kontinent. E grousse E-Commerce-Grupp notzt en als europäesche Logistikhaf, wat en zum gréissten Frachtfluchhafen vun de Benelux-Länner mécht.'
  },
    fact: {
    en: 'Luxembourg Airport (Findel) is Europe\'s 5th largest cargo airport, handling over 1 million tonnes annually. Amazon, Cargolux, and Luxair make it a critical logistics hub. It opened in 1946.',
    fr: 'L\'aéroport de Luxembourg (Findel) est le 5e plus grand aéroport de fret d\'Europe, traitant plus d\'un million de tonnes par an. Amazon, Cargolux et Luxair en font un hub logistique essentiel. Il a ouvert en 1946.',
    de: 'Der Flughafen Luxemburg (Findel) ist Europas fünftgrößter Frachtflughafen mit über einer Million Tonnen jährlich. Amazon, Cargolux und Luxair machen ihn zu einem wichtigen Logistikdrehkreuz. Er wurde 1946 eröffnet.',
    lb: 'De Lëtzebuerg Fluchhafen (Findel) ass Europas 5. gréissten Frachtfluchhafen mat iwwer enger Millioun Tonnen d\'Joer. Amazon, Cargolux a Luxair maachen en zu engem wichtege Logistikdrehkreuz. Hien huet 1946 opgemaach.'
  },
    region: 'Luxembourg City',
    link: 'https://www.lux-airport.lu'
  },
  {
    id: 'redange',
    name: {
    en: 'Rédange-sur-Attert',
    fr: 'Rédange-sur-Attert',
    de: 'Redingen-an-der-Attert',
    lb: 'Réiden'
  },
    coords: [49.7625, 5.8894],
    emoji: '🌾',
    clue: {
    en: 'In the rural west of Luxembourg, near the Belgian border, this quiet cantonal capital is surrounded by farmland and gentle hills. The surrounding area is known for its unspoilt landscapes, organic farms, and the nearby Attert valley nature reserve.',
    fr: 'Dans l\'ouest rural du Luxembourg, près de la frontière belge, cette tranquille capitale cantonale est entourée de terres agricoles et de douces collines. La région est connue pour ses paysages préservés, ses fermes biologiques et la réserve naturelle de la vallée de l\'Attert.',
    de: 'Im ländlichen Westen Luxemburgs nahe der belgischen Grenze ist diese ruhige Kantonshauptstadt von Ackerland und sanften Hügeln umgeben. Die Umgebung ist bekannt für ihre unberührten Landschaften, ökologische Landwirtschaft und das nahe gelegene Naturschutzgebiet im Attert-Tal.',
    lb: 'Am ländleche Weste vu Lëtzebuerg, no bei der belgescher Grenz, ass dës roueg Kantoune-Haaptstad vu Ackerland a sanften Hiwwele ëmginn. D\'Regioun ass bekannt fir hir onerréiert Landschaften, bio-Bauernhaff a dat nopescht Naturschutzgebitt am Attert-Daal.'
  },
    fact: {
    en: 'Rédange-sur-Attert is the administrative capital of Luxembourg\'s westernmost canton. The surrounding Attert valley is known for its biodiversity, organic farming, and tranquil countryside far from the bustle of the capital.',
    fr: 'Rédange-sur-Attert est la capitale administrative du canton le plus occidental du Luxembourg. La vallée de l\'Attert environnante est reconnue pour sa biodiversité, son agriculture biologique et sa campagne paisible loin de l\'agitation de la capitale.',
    de: 'Redingen-an-der-Attert ist der Verwaltungshauptort von Luxemburgs westlichstem Kanton. Das umliegende Attert-Tal ist bekannt für seine Artenvielfalt, ökologische Landwirtschaft und ruhige Landschaft fernab des Hauptstadtrummels.',
    lb: 'Réiden ass d\'Verwaltungshaaptstad vum westlechste Kanton vu Lëtzebuerg. Dat ëmleegend Attert-Daal ass bekannt fir seng Artevielfalt, bio-Landwirtschaft a roueg Landschaft wäit vum Stress vun der Haaptstad.'
  },
    region: 'Redange',
    link: 'https://www.visitluxembourg.com/en/region/redange'
  },
  {
    id: 'viandencity',
    name: {
    en: 'Vianden Town',
    fr: 'Ville de Vianden',
    de: 'Stadt Vianden',
    lb: 'Stad Veianen'
  },
    coords: [49.9340, 6.2040],
    emoji: '🏘️',
    clue: {
    en: 'Beneath the great castle in the Our river valley, this picturesque town of 1,500 inhabitants is one of Luxembourg\'s most visited. Its medieval streets, Gothic church, and riverside setting inspired writers and artists for centuries — including the French poet who spent time here in exile.',
    fr: 'Sous le grand château, dans la vallée de l\'Our, cette pittoresque ville de 1 500 habitants est l\'une des plus visitées du Luxembourg. Ses rues médiévales, son église gothique et son cadre au bord de la rivière ont inspiré écrivains et artistes pendant des siècles — dont le poète français qui y séjourna en exil.',
    de: 'Unterhalb der großen Burg im Our-Tal liegt diese malerische Stadt mit 1.500 Einwohnern — eine der meistbesuchten Luxemburgs. Ihre mittelalterlichen Straßen, die gotische Kirche und die Lage am Flussufer inspirierten Jahrhunderte lang Schriftsteller und Künstler — darunter den französischen Dichter, der hier im Exil lebte.',
    lb: 'Ënner der grousser Buerg am Our-Daal läit dës pittoresk Stad mat 1.500 Awunner — eng vun de meist besichte vu Lëtzebuerg. Hir mëttelalterleche Stroossen, gottesch Kierch a Rivière-Silhouette hunn Honnert Joer laang Schrëfteller a Kënschtler inspiréiert — dorënner de franséische Dichter, dee hei am Exil gelieft huet.'
  },
    fact: {
    en: 'Vianden\'s old town preserves its medieval street pattern almost intact. Victor Hugo spent several summers here during his Belgian exile, sketching the town and castle and writing about Luxembourg\'s natural beauty.',
    fr: 'La vieille ville de Vianden conserve presque intact son tracé médiéval. Victor Hugo y passa plusieurs étés lors de son exil belge, croquant la ville et le château et écrivant sur la beauté naturelle du Luxembourg.',
    de: 'Die Altstadt Vianden bewahrt ihr mittelalterliches Straßenmuster fast unverändert. Victor Hugo verbrachte hier mehrere Sommer im belgischen Exil, zeichnete Stadt und Burg und schrieb über die Naturschönheit Luxemburgs.',
    lb: 'D\'Aal Stad Veianen huet hir mëttelalterleche Stroossestruktur bal onverännert erhalen. Victor Hugo huet hei méi Summer wärend sengem belgeschen Exil verbruecht, d\'Stad an d\'Buerg gezeechent a iwwer Lëtzebuerg seng Naturschéinheet geschriwwen.'
  },
    region: 'Diekirch',
    link: 'https://www.visitluxembourg.com/en/city/vianden'
  },
  {
    id: 'hesperange',
    name: {
    en: 'Hesperange',
    fr: 'Hesperange',
    de: 'Hesperingen',
    lb: 'Hesper'
  },
    coords: [49.5771, 6.1571],
    emoji: '🌳',
    clue: {
    en: 'Just south of Luxembourg City, along the Alzette river, this municipality contains both residential suburbs and the ruins of a 13th-century castle amid a nature reserve. The Alzette valley here is a green corridor protected as a natural park.',
    fr: 'Juste au sud de Luxembourg-Ville, le long de l\'Alzette, cette commune abrite à la fois des banlieues résidentielles et les ruines d\'un château du XIIIe siècle au milieu d\'une réserve naturelle. La vallée de l\'Alzette ici est un couloir vert protégé comme parc naturel.',
    de: 'Direkt südlich von Luxemburg-Stadt, am Ufer der Alzette, umfasst diese Gemeinde sowohl Wohnviertel als auch die Ruinen einer Burg aus dem 13. Jahrhundert inmitten eines Naturschutzgebiets. Das Alzettetal ist hier ein grüner Korridor, der als Naturpark geschützt ist.',
    lb: 'Direkt südlech vu Lëtzebuerg-Stad, laanscht d\'Alzette, ëmfaasst dës Gemeng souwuel Wunnsiedlungen als och d\'Ruinen vun enger Buerg aus dem 13. Joerhonnert mëtten an engem Naturschutzgebitt. Dat Alzette-Daal hei ass e grénge Korridor, dee als Naturpark geschützt ass.'
  },
    fact: {
    en: 'Hesperange Castle ruins date to the 13th century and once served as a Luxembourg stronghold. Today the site is a peaceful park overlooking the Alzette valley, popular with local walkers.',
    fr: 'Les ruines du château d\'Hesperange datent du XIIIe siècle et servaient autrefois de bastion luxembourgeois. Le site est aujourd\'hui un parc paisible surplombant la vallée de l\'Alzette, apprécié des promeneurs locaux.',
    de: 'Die Ruinen von Burg Hesperingen stammen aus dem 13. Jahrhundert und dienten einst als luxemburgische Festung. Heute ist es ein ruhiger Park mit Blick auf das Alzettetal, beliebt bei Spaziergängern aus der Region.',
    lb: 'D\'Ruinen vun der Hesper-Buerg stammen aus dem 13. Joerhonnert a goudde fréier als lëtzebuerger Festung. Haut ass et e friddleche Parc mat Bléck op dat Alzette-Daal, bei Spaziergänger aus der Regioun populär.'
  },
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/hesperange-castle'
  },
  {
    id: 'consdorf',
    name: {
    en: 'Consdorf',
    fr: 'Consdorf',
    de: 'Consdorf',
    lb: 'Consdref'
  },
    coords: [49.7729, 6.3448],
    emoji: '🪨',
    clue: {
    en: 'Perched on a hill in the Mullerthal region of eastern Luxembourg, this village is a gateway to the most dramatic rock formations of "Little Switzerland." A popular hiking trail from here leads through narrow gorges and past towering sandstone cliffs to neighbouring villages.',
    fr: 'Perché sur une colline dans la région du Mullerthal dans l\'est du Luxembourg, ce village est une porte d\'entrée vers les formations rocheuses les plus spectaculaires de la "Petite Suisse". Un sentier de randonnée populaire y conduit à travers des gorges étroites et d\'imposantes falaises de grès.',
    de: 'Auf einem Hügel in der Mullerthal-Region im Osten Luxemburgs gelegen, ist dieses Dorf ein Tor zu den dramatischsten Felsformationen der „Kleinen Schweiz". Ein beliebter Wanderweg führt von hier durch enge Schluchten und an mächtigen Sandsteinfelsen vorbei.',
    lb: 'Op engem Hiwwel an der Mullerthal-Regioun am Oste vu Lëtzebuerg gelegen, ass dëst Duerf e Porta zu de dramatesche Felsformatiounen vun der „Klengschwäiz". E populäre Wanderweeg vun hei féiert duerch eng Schluucht a laangs imposante Sandsteenfelsen.'
  },
    fact: {
    en: 'Consdorf is one of the main starting points for the Mullerthal Trail. The village sits at 400m altitude above the Ernz Noire river, and the surrounding sandstone landscape is unlike anywhere else in Luxembourg.',
    fr: 'Consdorf est l\'un des principaux points de départ du sentier du Mullerthal. Le village est situé à 400 m d\'altitude au-dessus de la rivière Ernz Noire, et le paysage en grès environnant est unique au Luxembourg.',
    de: 'Consdorf ist einer der wichtigsten Ausgangspunkte des Mullerthal-Trails. Das Dorf liegt 400 m über dem Fluss Ernz Noire, und die umgebende Sandsteinlandschaft ist einzigartig in Luxemburg.',
    lb: 'Consdref ass ee vun de wichtegste Startpunkten fir de Mullerthal-Trail. D\'Duerf läit op 400 m Héicht iwwer dem Floss Ernz Noire, an d\'ëmleegend Sandsteenlandschaft ass eenzegaarteg a Lëtzebuerg.'
  },
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/place/site/mullerthal-trail'
  },
  {
    id: 'castle-des-monts',
    name: {
    en: 'Meysembourg Castle',
    fr: 'Château de Meysembourg',
    de: 'Schloss Meysembourg',
    lb: 'Schlass Meysembuer'
  },
    coords: [49.8080, 6.2502],
    emoji: '🏰',
    clue: {
    en: 'A perfectly preserved 17th-century château-fort stands in a small village in the northern Mullerthal area. Unlike Luxembourg\'s many ruins, this castle is largely intact and has been carefully restored. Its formal gardens and towers offer one of the best preserved examples of baroque castle architecture in the region.',
    fr: 'Un château-fort du XVIIe siècle parfaitement conservé se dresse dans un petit village du nord du Mullerthal. Contrairement aux nombreuses ruines du Luxembourg, ce château est en grande partie intact et a été soigneusement restauré. Il offre l\'un des meilleurs exemples d\'architecture castrale baroque de la région.',
    de: 'Ein vollständig erhaltenes Schloss-Fort aus dem 17. Jahrhundert steht in einem kleinen Dorf im nördlichen Mullerthal. Anders als Luxemburgs viele Ruinen ist dieses Schloss weitgehend intakt und sorgfältig restauriert worden. Es bietet eines der besten erhaltenen Beispiele barocker Schlossarchitektur der Region.',
    lb: 'E perfekt erhaltent Schlass-Fort aus dem 17. Joerhonnert steet an engem klenge Duerf am nërdleche Mullerthal. Onlëschent Lëtzebuerg senge ville Ruinen, ass dëst Schlass grousstentdeels intakt a suergfälteg restauréiert. Et bitt ee vun de beschte Beispiller barocker Schlossarchitektur an der Regioun.'
  },
    fact: {
    en: 'Meysembourg Castle was rebuilt in 1603 and is one of Luxembourg\'s best-preserved Renaissance castles. It remains a private residence and is visible from the village road, a photogenic jewel in the Mullerthal countryside.',
    fr: 'Le château de Meysembourg fut reconstruit en 1603 et est l\'un des châteaux Renaissance les mieux conservés du Luxembourg. Il demeure une résidence privée et est visible depuis la route du village.',
    de: 'Das Schloss Meysembourg wurde 1603 umgebaut und ist eines der besterhaltenen Renaissanceschlösser Luxemburgs. Es ist nach wie vor eine Privatresidenz und von der Dorfstraße aus sichtbar.',
    lb: 'D\'Schlass Meysembuer gouf 1603 nei gebaut a gehéiert zu de beschterhaltenste Renaissanceschlässer vu Lëtzebuerg. Et bleibt eng Privatresidenz a kann vun der Duerfsstroos aus gesinn ginn.'
  },
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/place/site/mullerthal-trail'
  },
  {
    id: 'our-valley',
    name: {
    en: 'Our Valley (Vallée de l\'Our)',
    fr: 'Vallée de l\'Our',
    de: 'Ourtal',
    lb: 'Our-Daal'
  },
    coords: [49.8802, 6.1956],
    emoji: '🏞️',
    clue: {
    en: 'Forming the natural border between Luxembourg and Germany in the north, this rugged river valley is one of the wildest and most scenic landscapes in the country. The river flows through deep gorges and wooded slopes, forming part of the Germano-Luxembourg Natural Park.',
    fr: 'Formant la frontière naturelle entre le Luxembourg et l\'Allemagne dans le nord, cette vallée sauvage est l\'un des paysages les plus spectaculaires du pays. La rivière traverse de profondes gorges et des versants boisés, formant une partie du Parc naturel germano-luxembourgeois.',
    de: 'Als natürliche Grenze zwischen Luxemburg und Deutschland im Norden ist dieses wilde Flusstal eine der wildesten und malerischsten Landschaften des Landes. Der Fluss fließt durch tiefe Schluchten und bewaldete Hänge als Teil des Deutsch-Luxemburgischen Naturparks.',
    lb: 'Als natierleche Grenz tëschent Lëtzebuerg an Däitschland am Norden ass dëst wëllt Floss-Daal eng vun de wëllste a malereschste Landschaften vum Land. De Floss fléisst duerch déif Schluuchten a bewaldete Hängen als Deel vum Däitsch-Lëtzebuerger Naturpark.'
  },
    fact: {
    en: 'The Our river forms 73km of Luxembourg\'s border with Germany. The Our Valley is part of the Germano-Luxembourg Natural Park (Naturpark Our), a cross-border protected area noted for its biodiversity and unspoilt scenery.',
    fr: 'La rivière Our forme 73 km de la frontière luxembourgeoise avec l\'Allemagne. La vallée de l\'Our fait partie du Parc naturel germano-luxembourgeois (Naturpark Our), une zone protégée transfrontalière réputée pour sa biodiversité.',
    de: 'Die Our bildet 73 km der luxemburgischen Grenze zu Deutschland. Das Ourtal ist Teil des Deutsch-Luxemburgischen Naturparks (Naturpark Our), eines grenzüberschreitenden Schutzgebiets mit hoher Biodiversität.',
    lb: 'D\'Our bildt 73 km vun der lëtzebuerger Grenz mat Däitschland. Dat Our-Daal ass Deel vum Naturpark Our, engem grenziwwerschreidende Schutzgebitt mat héijer Artenvielfalt.'
  },
    region: 'Diekirch',
    link: 'https://www.visitluxembourg.com/en/region/our-valley'
  },
  {
    id: 'steinfort',
    name: {
    en: 'Steinfort',
    fr: 'Steinfort',
    de: 'Steinfort',
    lb: 'Steefort'
  },
    coords: [49.6629, 5.9237],
    emoji: '🌲',
    clue: {
    en: 'Near the Belgian border in western Luxembourg, this small town was home to one of the country\'s oldest and most famous breweries, which produced beer for over 150 years. Today the former brewery buildings are being repurposed for cultural and commercial use.',
    fr: 'Près de la frontière belge dans l\'ouest du Luxembourg, cette petite ville abritait l\'une des brasseries les plus anciennes et les plus célèbres du pays, qui produisit de la bière pendant plus de 150 ans. Les anciens bâtiments de la brasserie sont aujourd\'hui réaffectés à des usages culturels et commerciaux.',
    de: 'Nahe der belgischen Grenze im Westen Luxemburgs war diese Kleinstadt Heimat einer der ältesten und bekanntesten Brauereien des Landes, die über 150 Jahre lang Bier produzierte. Die ehemaligen Brauereigebäude werden heute für kulturelle und gewerbliche Zwecke umgenutzt.',
    lb: 'No bei der belgescher Grenz am Weste vu Lëtzebuerg war dës kleng Stad Heem vun enger vun de eelste a berüümtste Brassereien vum Land, déi iwwer 150 Joer laang Béier produzéiert huet. D\'Brässerei-Gebaier ginn haut fir kulturell a kommerziell Zwecker ëmgenotzt.'
  },
    fact: {
    en: 'Brasserie Nationale (Bofferding brand) was founded in Steinfort in 1764, making it one of Luxembourg\'s oldest breweries. The company later merged and moved operations, but Bofferding remains Luxembourg\'s most popular local beer brand.',
    fr: 'La Brasserie Nationale (marque Bofferding) fut fondée à Steinfort en 1764, ce qui en fait l\'une des plus anciennes brasseries du Luxembourg. Bofferding reste la marque de bière locale la plus populaire du pays.',
    de: 'Die Brasserie Nationale (Marke Bofferding) wurde 1764 in Steinfort gegründet und gehört damit zu den ältesten Brauereien Luxemburgs. Bofferding ist nach wie vor die beliebteste lokale Biermarke des Landes.',
    lb: 'D\'Brasserie Nationale (Marke Bofferding) gouf 1764 zu Steefort gegrënnt, wat se zu enger vun de eelste Brassereien vu Lëtzebuerg mécht. Bofferding bleift d\'populärste lokal Béiermark vum Land.'
  },
    region: 'Capellen',
    link: 'https://www.visitluxembourg.com/en/region/capellen'
  },
  {
    id: 'stadtbredimus',
    name: {
    en: 'Stadtbredimus',
    fr: 'Stadtbredimus',
    de: 'Stadtbredimus',
    lb: 'Stadtbredimus'
  },
    coords: [49.5667, 6.3886],
    emoji: '🍾',
    clue: {
    en: 'In a curve of the Moselle river in southeastern Luxembourg, this wine village is the home of a famous sparkling wine producer. The caves carved into the hillside where Crémant de Luxembourg ages are open to visitors, and the riverside terrace offers spectacular views across to Germany.',
    fr: 'Dans un méandre de la Moselle dans le sud-est du Luxembourg, ce village viticole est le siège d\'un célèbre producteur de vin pétillant. Les caves creusées dans la colline où vieillit le Crémant de Luxembourg sont ouvertes aux visiteurs, et la terrasse en bord de rivière offre une vue splendide sur l\'Allemagne.',
    de: 'In einer Biegung der Mosel im Südosten Luxemburgs ist dieses Weindorf Sitz eines berühmten Schaumweinproduzenten. Die in den Hang gegrabenen Keller, in denen Crémant de Luxembourg reift, sind für Besucher geöffnet, und die Flussterrasse bietet herrliche Aussichten nach Deutschland.',
    lb: 'An enger Kurv vun der Musel am Südoste vu Lëtzebuerg ass dëst Wäinduerf d\'Heem vun engem berüümte Schaumwäinproduzent. D\'Keller, déi an de Hiwwel gegrawen sinn, wou Crémant de Luxembourg reit, sinn fir Besucher opgaangen, an d\'Floss-Terrasse bitt herrleche Aussichten op Däitschland.'
  },
    fact: {
    en: 'Stadtbredimus is home to Bernard-Massard, one of Luxembourg\'s premier sparkling wine producers, whose cellars have been producing Crémant de Luxembourg since 1921. The Moselle here forms the border with Germany.',
    fr: 'Stadtbredimus est le siège de Bernard-Massard, l\'un des premiers producteurs de vins pétillants du Luxembourg, dont les caves produisent du Crémant de Luxembourg depuis 1921. La Moselle y forme la frontière avec l\'Allemagne.',
    de: 'Stadtbredimus ist Heimat von Bernard-Massard, einem der bedeutendsten Schaumweinproduzenten Luxemburgs, dessen Keller seit 1921 Crémant de Luxembourg herstellen. Die Mosel bildet hier die Grenze zu Deutschland.',
    lb: 'Stadtbredimus ass Heem vum Bernard-Massard, engem vun de féierenden Schaumwäinproduzenten vu Lëtzebuerg, deem seng Keller zënter 1921 Crémant de Luxembourg hirstellen. D\'Musel bildt hei d\'Grenz mat Däitschland.'
  },
    region: 'Remich',
    link: 'https://www.visitluxembourg.com/en/country/moselle'
  },
  {
    id: 'merveilles-hachiville',
    name: {
    en: 'Hachiville',
    fr: 'Hachiville',
    de: 'Hachiville',
    lb: 'Haschpelt'
  },
    coords: [50.0705, 5.9469],
    emoji: '🌟',
    clue: {
    en: 'In the extreme north of Luxembourg, close to Belgium, this tiny village has one of the darkest skies in the Benelux countries. An astronomical observatory and Dark Sky Park have been established here, and on clear nights the Milky Way is clearly visible with the naked eye.',
    fr: 'Dans l\'extrême nord du Luxembourg, près de la Belgique, ce minuscule village bénéficie de l\'un des ciels nocturnes les plus sombres du Benelux. Un observatoire astronomique et un Parc du ciel étoilé y ont été établis, et par nuit claire la Voie lactée est visible à l\'œil nu.',
    de: 'Im äußersten Norden Luxemburgs, nahe Belgien, hat dieses winzige Dorf einen der dunkelsten Nachthimmel der Benelux-Länder. Ein astronomisches Observatorium und ein Sternenpark wurden hier eingerichtet, und bei klarer Nacht ist die Milchstraße mit bloßem Auge zu sehen.',
    lb: 'Am äischtlechste Norden vu Lëtzebuerg, no bei Belgien, huet dëst winzegt Duerf ee vun den däischtersten Nächthimmelen an de Benelux-Länner. En astronomeschen Observatoire an e Stäre-Park sinn hei ageriicht ginn, a bei klarem Wetter ass d\'Mëllechstroos mat bloussem A sichtbar.'
  },
    fact: {
    en: 'Hachiville hosts the only IAU Dark Sky Park in Luxembourg, certified for its exceptional nocturnal darkness. The local observatory organises stargazing events, and the surrounding area is among the least light-polluted in the Benelux.',
    fr: 'Hachiville accueille le seul Parc du ciel étoilé IAU du Luxembourg, certifié pour son obscurité nocturne exceptionnelle. L\'observatoire local organise des soirées d\'observation des étoiles, et la région est parmi les moins polluées lumineusement du Benelux.',
    de: 'Hachiville beherbergt den einzigen IAU-Sternenpark Luxemburgs, zertifiziert für seine außergewöhnliche Nachtdunkelheit. Das örtliche Observatorium veranstaltet Sternbeobachtungsabende, und die Umgebung gehört zu den lichtverschmutzungsärmsten im Benelux.',
    lb: 'Haschpelt beherbergt dee eenzegen IAU-Stäre-Park vu Lëtzebuerg, zertifizéiert fir seng aussergewéinlech Nacht-Däischtert. Den lokalen Observatoire organiséiert Stäregucker-Ofenden, an d\'Ëmgéigend gehéiert zu de wéinegst liichtverdrecksten am Benelux.'
  },
    region: 'Clervaux',
    link: 'https://www.visitluxembourg.com/en/place/site/hachiville-dark-sky-park'
  },
  {
    id: 'fond-de-gras',
    name: {
    en: 'Fond-de-Gras',
    fr: 'Fond-de-Gras',
    de: 'Fond-de-Gras',
    lb: 'Fond-de-Gras'
  },
    coords: [49.5355, 5.8763],
    emoji: '🚂',
    clue: {
    en: 'In a hidden valley in southwestern Luxembourg, this open-air industrial heritage site preserves an authentic early 20th-century iron-mining village. A vintage narrow-gauge railway runs through the site, and on event weekends steam locomotives pull passenger cars through the former mining landscape.',
    fr: 'Dans une vallée cachée du sud-ouest du Luxembourg, ce site patrimonial industriel en plein air préserve un authentique village minier du début du XXe siècle. Un chemin de fer à voie étroite traverse le site, et lors des week-ends événementiels des locomotives à vapeur tirent des wagons de passagers dans l\'ancien paysage minier.',
    de: 'In einem versteckten Tal im Südwesten Luxemburgs bewahrt dieses Industriefreilichtmuseum ein authentisches Eisenbergbaudorf aus dem frühen 20. Jahrhundert. Eine Schmalspurbahn fährt durch das Gelände, und an Veranstaltungswochenenden ziehen Dampflokomotiven Personenwagen durch die ehemalige Bergbaulandschaft.',
    lb: 'An engem verstoppte Daal am Südweste vu Lëtzebuerg erhält dëse Fräiloft-Industriearchivsäit en authentesche Biergbauweiler aus dem fréie 20. Joerhonnert. Eng Schmaalspur-Eisebann fiert duerch de Site, a bei Veranstaltungswochenden zéien Dampflokomotiven Personenwunn duerch d\'eemoleg Biergbaulandschaft.'
  },
    fact: {
    en: 'Fond-de-Gras was an active iron-ore mining site until the 1980s. Today it is preserved as an industrial museum with restored buildings, mining equipment, and heritage railways. The site transports visitors back to Luxembourg\'s industrial era.',
    fr: 'Fond-de-Gras fut un site d\'extraction de minerai de fer jusqu\'aux années 1980. Aujourd\'hui préservé comme musée industriel, il accueille des bâtiments restaurés, des équipements miniers et des chemins de fer patrimoniaux qui transportent les visiteurs dans l\'ère industrielle du Luxembourg.',
    de: 'Fond-de-Gras war bis in die 1980er Jahre ein aktives Eisenerzbergbaugebiet. Heute als Industriemuseum erhalten, bietet es restaurierte Gebäude, Bergbaugeräte und historische Eisenbahnen, die Besucher in Luxemburgs Industriezeitalter zurückversetzen.',
    lb: 'Fond-de-Gras war bis an d\'1980er Joren en aktive Äerztbiergbausite. Haut als Industriemusée erhalen, bitt en restauréiert Gebaier, Biergbaugeräter an historesch Eisebunnen, déi d\'Besucher an Lëtzebuerg seng Industriezäit zeréckversetzen.'
  },
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/place/site/fond-de-gras'
  },
  {
    id: 'castle-clervaux-town',
    name: {
    en: 'Clervaux Town',
    fr: 'Ville de Clervaux',
    de: 'Stadt Clervaux',
    lb: 'Stad Clervaux'
  },
    coords: [50.0550, 6.0350],
    emoji: '🏔️',
    clue: {
    en: 'Nestled in a deep valley of the northern Ardennes, completely encircled by forested hills, this town is a natural gateway to Luxembourg\'s "Little Eifel" region. The surrounding countryside offers mountain biking, cross-country skiing in winter, and some of the country\'s most dramatic Nordic landscapes.',
    fr: 'Nichée dans une profonde vallée des Ardennes du nord, entièrement encerclée de collines boisées, cette ville est un point d\'entrée naturel vers la région de la "Petite Eifel" luxembourgeoise. Les environs offrent du vélo de montagne, du ski de fond en hiver et certains des paysages nordiques les plus spectaculaires du pays.',
    de: 'In einem tiefen Ardennental, vollständig von bewaldeten Hügeln umgeben, ist diese Stadt ein natürliches Eingangstor zur luxemburgischen „Kleinen Eifel". Die Umgebung bietet Mountainbiking, Skilanglauf im Winter und einige der dramatischsten nordischen Landschaften des Landes.',
    lb: 'An engem déife Ardennendaal, deen vun bewaldete Hiwwele ëmrënnt ass, ass dës Stad e natierleche Gateway an d\'lëtzebuerger „Kleng Eifel". D\'Ëmgéigend bitt Mountainbiking, Langlafski am Wanter a senger dramatesche nordleche Landschaft.'
  },
    fact: {
    en: 'Clervaux sits 275m above sea level in a valley of the Clerve river. The northern Luxembourg Ardennes around it receive more snow than anywhere else in the country and are known for spectacular autumn foliage.',
    fr: 'Clervaux est perchée à 275 m d\'altitude dans une vallée de la rivière Clerve. Les Ardennes luxembourgeoises du nord reçoivent plus de neige que partout ailleurs dans le pays et sont connues pour leur superbe feuillage automnal.',
    de: 'Clervaux liegt auf 275 m Höhe in einem Tal der Clerve. Die nördlichen luxemburgischen Ardennen ringsum erhalten mehr Schnee als irgendwo sonst im Land und sind für ihr spektakuläres Herbstlaub bekannt.',
    lb: 'Clervaux läit op 275 m Héicht an engem Daal vum Clerve-Floss. D\'nordlech lëtzebuerger Ardennen ronderëm kréien méi Schnéi wéi iwwerall anescht am Land a si bekannt fir hire spektakuläre Hierbstlaabraichtum.'
  },
    region: 'Clervaux',
    link: 'https://www.visitluxembourg.com/en/city/clervaux'
  },
  {
    id: 'sanem',
    name: {
    en: 'Sanem Cultural Centre',
    fr: 'Centre culturel de Sanem',
    de: 'Kulturzentrum Sanem',
    lb: 'Kulturzentrum Sanen'
  },
    coords: [49.5398, 5.9388],
    emoji: '🎪',
    clue: {
    en: 'In the southwestern industrial belt of Luxembourg, this former mining commune has invested heavily in culture. Its cultural centre hosts international concerts, theatre, and exhibitions, and the surrounding area has been revitalised with public art, parks, and creative spaces.',
    fr: 'Dans la ceinture industrielle du sud-ouest du Luxembourg, cette ancienne commune minière a investi massivement dans la culture. Son centre culturel accueille des concerts internationaux, du théâtre et des expositions, et la région a été revitalisée avec de l\'art public, des parcs et des espaces créatifs.',
    de: 'Im südwestlichen Industriegürtel Luxemburgs hat diese ehemalige Bergbaugemeinde stark in Kultur investiert. Ihr Kulturzentrum veranstaltet internationale Konzerte, Theater und Ausstellungen, und die Umgebung wurde mit öffentlicher Kunst, Parks und kreativen Räumen belebt.',
    lb: 'Am südwëstleche Industriegürtel vu Lëtzebuerg huet dës eemoleg Biergbaugemengen staark an d\'Kultur investéiert. Säin Kulturzentrum accueilléiert international Konzerten, Theater an Ausstellungen, an d\'Regioun gouf mat ëffentlecher Konscht, Pärk a kreativen Raimlechkeeten beleeft.'
  },
    fact: {
    en: 'Sanem has transformed itself from an industrial municipality into a cultural hub. The Opderschmelz cultural complex and the active arts scene make it one of the most dynamic communities in southern Luxembourg.',
    fr: 'Sanem s\'est transformée d\'une commune industrielle en pôle culturel. Le complexe culturel Opderschmelz et la scène artistique active en font l\'une des communes les plus dynamiques du sud du Luxembourg.',
    de: 'Sanem hat sich von einer Industriegemeinde zu einem Kulturzentrum gewandelt. Der Kulturkomplex Opderschmelz und die aktive Kunstszene machen ihn zu einer der dynamischsten Gemeinden im Süden Luxemburgs.',
    lb: 'Sanen huet sech vun enger Industriegemengen an e Kulturzentrum ëmgewandelt. De Kulturkomplex Opderschmelz an d\'aktiv Konschtszene maachen en zu enger vun de dynameschste Gemenge vum Süden vu Lëtzebuerg.'
  },
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/city/sanem'
  },
  {
    id: 'moselle-bridge',
    name: {
    en: 'Rosport',
    fr: 'Rosport',
    de: 'Rosport',
    lb: 'Rosport'
  },
    coords: [49.7434, 6.4928],
    emoji: '🚣',
    clue: {
    en: 'Near Luxembourg\'s eastern border with Germany, this small village on the Sauer river is known as the heart of Luxembourg\'s white-water kayaking and canoeing. A famous rapids section here draws paddle sports enthusiasts from across the region.',
    fr: 'Près de la frontière orientale du Luxembourg avec l\'Allemagne, ce petit village sur la Sûre est le cœur du kayak et du canoë-kayak au Luxembourg. Un célèbre passage de rapides y attire des passionnés de sports en eaux vives de toute la région.',
    de: 'Nahe der östlichen Grenze Luxemburgs zu Deutschland ist dieses kleine Dorf an der Sauer das Herz des Wildwasserkajak- und Kanusports in Luxemburg. Ein berühmter Stromschnellenabschnitt hier zieht Paddelsportbegeisterte aus der ganzen Region an.',
    lb: 'No bei der éischtlecher Grenz vu Lëtzebuerg mat Däitschland ass dëst kleng Duerf un der Sauer d\'Häerz vum lëtzebuerger Wildwaasserpaddle- a Kanusport. Eng berüümte Rappiden-Secteur hei zitt Paddelsport-Begeeschtert aus der ganzer Regioun un.'
  },
    fact: {
    en: 'Rosport on the Sauer river hosts international canoe and kayak competitions, including European Cup events. The Sauer rapids here are among the most challenging in the Benelux region for white-water sports.',
    fr: 'Rosport, sur la Sûre, accueille des compétitions internationales de canoë-kayak, dont des épreuves de la Coupe d\'Europe. Les rapides de la Sûre y sont parmi les plus exigeants du Benelux pour les sports en eaux vives.',
    de: 'Rosport an der Sauer beherbergt internationale Kanu- und Kajakwettbewerbe, darunter Europacup-Veranstaltungen. Die Sauer-Stromschnellen hier gehören zu den anspruchsvollsten im Benelux für Wildwassersport.',
    lb: 'Rosport un der Sauer beherbergt international Kanu- a Kajakcompetitioune, dorënner Europacup-Eventer. D\'Sauer-Rappiden hei gehéieren zu de fuerderlichste vum Benelux fir Wildwaassersport.'
  },
    region: 'Grevenmacher',
    link: 'https://www.visitluxembourg.com/en/place/site/our-valley'
  },
  {
    id: 'pfaffenthal',
    name: {
    en: 'Pfaffenthal & Funicular',
    fr: 'Pfaffenthal et funiculaire',
    de: 'Pfaffenthal & Standseilbahn',
    lb: 'Pfaffenthal a Funniculaire'
  },
    coords: [49.6141, 6.1362],
    emoji: '🚡',
    clue: {
    en: 'Below the cliffs of Luxembourg City\'s plateau, this lower valley district is connected to the upper city by a striking glass funicular built inside the cliff face. The lift transports commuters and visitors from the train station to the Kirchberg plateau, offering dramatic views.',
    fr: 'Sous les falaises du plateau de Luxembourg-Ville, ce quartier de vallée est relié à la ville haute par un funiculaire en verre spectaculaire construit à l\'intérieur de la falaise. L\'ascenseur transporte navetteurs et visiteurs de la gare au plateau de Kirchberg, offrant des vues spectaculaires.',
    de: 'Unterhalb der Klippen des Luxemburger Plateaus ist dieser untere Talstadtteil durch eine auffällige Standseilbahn aus Glas, die im Fels eingebaut ist, mit der Oberstadt verbunden. Der Aufzug befördert Pendler und Besucher vom Bahnhof auf das Kirchberg-Plateau mit dramatischer Aussicht.',
    lb: 'Ënner de Kliffe vum Lëtzebuerger Plateau verbënnt dëse Daalstadtteil e spektakuläre Glaskabinenfunniculaire, deen am Fiels gebaut ass, mat der Uewerstad. Den Lëft transportéiert Pendler a Besucher vum Bunnhaf op de Kirchbierg-Plateau mat dramatesche Sichten.'
  },
    fact: {
    en: 'The Pfaffenthal-Kirchberg funicular opened in 2017, running through the cliff inside a glass shaft. It connects the rail station in the valley to the EU quarter 45 metres above, in under 2 minutes.',
    fr: 'Le funiculaire Pfaffenthal-Kirchberg a ouvert en 2017, traversant la falaise dans un puits en verre. Il relie la gare dans la vallée au quartier européen 45 mètres plus haut en moins de 2 minutes.',
    de: 'Die Standseilbahn Pfaffenthal-Kirchberg wurde 2017 eröffnet und verläuft durch den Fels in einem Glasschacht. Sie verbindet den Bahnhof im Tal in unter 2 Minuten mit dem EU-Viertel 45 Meter darüber.',
    lb: 'De Pfaffenthal-Kirchbierg Funniculaire huet 2017 opgemaach a laaft duerch de Fiels an engem Glasschacht. Hien verbënnt de Bunnhaf am Daal mat dem EU-Quartier 45 Meter iwweruecht a manner wéi 2 Minutten.'
  },
    region: 'Luxembourg City',
    link: 'https://www.visitluxembourg.com/en/place/site/pfaffenthal-lift'
  },
  {
    id: 'minett-trail',
    name: {
    en: 'Minett (UNESCO Biosphere Reserve)',
    fr: 'Minett (Réserve de biosphère UNESCO)',
    de: 'Minett (UNESCO-Biosphärenreservat)',
    lb: 'Minett (UNESCO-Biosphäre)'
  },
    coords: [49.5100, 5.9500],
    emoji: '🌱',
    clue: {
    en: 'The southern belt of Luxembourg, once dominated by iron ore extraction and steel mills, has been designated a UNESCO Biosphere Reserve. Slag heaps draped in rare wildflowers, restored industrial sites, and emerging eco-tourism make this one of Europe\'s most fascinating post-industrial landscapes.',
    fr: 'La ceinture méridionale du Luxembourg, autrefois dominée par l\'extraction du minerai de fer et les aciéries, a été classée Réserve de biosphère par l\'UNESCO. Des terrils couverts de fleurs sauvages rares, des sites industriels restaurés et un écotourisme émergent en font l\'un des paysages post-industriels les plus fascinants d\'Europe.',
    de: 'Das südliche Luxemburg, einst dominiert von Eisenerzabbau und Stahlwerken, wurde zum UNESCO-Biosphärenreservat erklärt. Mit seltenen Wildblumen bedeckte Schlackehalden, restaurierte Industriestätten und aufkommender Ökotourismus machen es zu einer der faszinierendsten Nachkriegslandschaften Europas.',
    lb: 'Den südleche Gürtel vu Lëtzebuerg, eemol dominéiert vun Äerztofbau a Stoliwierker, gouf zu enger UNESCO-Biosphär erkläert. Schlackhäifer, mat rare Wëldbluemen bedeckt, restauréiert Industriesiten an opkommenden Ökotourismus maache se zu enger vun de fascinéierendste Post-Industrielandschaften vun Europa.'
  },
    fact: {
    en: 'The Minett was designated a UNESCO Biosphere Reserve in 2021 — the only urban-industrial biosphere reserve in the EU. Former slag heaps now host rare orchids and butterflies found nowhere else in Luxembourg.',
    fr: 'Le Minett a été désigné Réserve de biosphère de l\'UNESCO en 2021 — la seule réserve de biosphère urbaine-industrielle de l\'UE. D\'anciens terrils accueillent désormais de rares orchidées et papillons introuvables ailleurs au Luxembourg.',
    de: 'Das Minett wurde 2021 zum UNESCO-Biosphärenreservat ernannt — das einzige urban-industrielle Biosphärenreservat in der EU. Ehemalige Schlackehalden beherbergen heute seltene Orchideen und Schmetterlinge, die nirgendwo sonst in Luxemburg vorkommen.',
    lb: 'De Minett gouf 2021 zur UNESCO-Biosphär erkläert — déi eenzeg urban-industriell Biosphär an der EU. Eemoleg Schlackhäifer beherbergen haut rare Orchideien a Päipert, déi soss néirgends a Lëtzebuerg ze fanne sinn.'
  },
    region: 'Esch',
    link: 'https://www.visitluxembourg.com/en/region/minett'
  },
  {
    id: 'esch-belval',
    name: {
    en: 'Belval (Esch)',
    fr: 'Belval (Esch)',
    de: 'Belval (Esch)',
    lb: 'Belval (Esch)'
  },
    coords: [49.5021, 5.9473],
    emoji: '🏗️',
    clue: {
    en: 'On the site of a former steelworks in southern Luxembourg, two giant blast furnaces have been preserved as industrial monuments, now floodlit at night. Around them, the University of Luxembourg\'s main campus has been built, transforming the former heavy-industry zone into a knowledge and cultural district.',
    fr: 'Sur le site d\'une ancienne aciérie dans le sud du Luxembourg, deux gigantesques hauts fourneaux ont été conservés comme monuments industriels, illuminés la nuit. Autour d\'eux, le campus principal de l\'Université du Luxembourg a été construit, transformant l\'ancienne zone de l\'industrie lourde en quartier du savoir et de la culture.',
    de: 'Auf dem Gelände eines ehemaligen Stahlwerks im Süden Luxemburgs wurden zwei riesige Hochöfen als Industriedenkmäler erhalten, nachts angestrahlt. Um sie herum wurde der Hauptcampus der Universität Luxemburg gebaut und die ehemalige Schwerindustriezone in ein Wissens- und Kulturviertel verwandelt.',
    lb: 'Op dem Gelände vun engem eemoleg Stolwierk am Süden vu Lëtzebuerg goufe zwee gëgant Héichiewen als Industriedenkmäler erhalen, nuets beliicht. Ronderëm hinnen gouf de Haaptcampus vun der Universitéit Lëtzebuerg gebaut, wat d\'eemoleg Schwéirindustriezon an e Wëssens- a Kulturquartier ëmgeformmt huet.'
  },
    fact: {
    en: 'Belval was the flagship project of Luxembourg\'s post-industrial regeneration. The two preserved blast furnaces ("hauts fourneaux") are 60m tall and can be climbed by visitors. The University of Luxembourg campus opened here in 2015.',
    fr: 'Belval était le projet phare de la reconversion post-industrielle du Luxembourg. Les deux hauts fourneaux préservés font 60 m de hauteur et peuvent être escaladés par les visiteurs. Le campus de l\'Université du Luxembourg y a ouvert en 2015.',
    de: 'Belval war das Flaggschiffprojekt der post-industriellen Umgestaltung Luxemburgs. Die zwei erhaltenen Hochöfen (Hauts Fourneaux) sind 60 m hoch und können von Besuchern bestiegen werden. Der Universitätscampus Luxemburg öffnete hier 2015.',
    lb: 'Belval war dat Leuchtturm-Projet vun der lëtzebuerger Post-Industrieëmgestaltung. Déi zwou erhaltene Héichiewen (hauts fourneaux) si 60 m héich a kënnen vun de Besuchern erklammen ginn. De Lëtzebuerg-Universitéitscampus huet hei 2015 opgemaach.'
  },
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
