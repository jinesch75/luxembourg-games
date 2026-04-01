/**
 * Luxembourg Geo Game — Location data (50 locations)
 * coords: [lat, lng] — accurate coordinates for each location
 * clue: a text-based description (no giving away the name directly)
 */

export const LOCATIONS = [
  {
    id: "vianden",
    level: "tourist",
    subLevel: 1,
    name: {
    en: "Vianden Castle",
    fr: "Château de Vianden",
    de: "Burg Vianden",
    lb: "Buerg Veianen"
  },
    coords: [49.9339, 6.2003],
    emoji: "🏰",
    clue: {
    en: "High above a river in the north of Luxembourg, this medieval fortress with round towers once housed the Counts of Vianden. Victor Hugo visited and was so enchanted he drew it. It was restored in the 20th century and is now one of the most visited sites in the country.",
    fr: "Dominant une rivière dans le nord du Luxembourg, cette forteresse médiévale aux tours rondes abrita autrefois les comtes de Vianden. Victor Hugo la visita et en fut si enchanté qu'il la dessina. Restaurée au XXe siècle, elle est aujourd'hui l'un des sites les plus visités du pays.",
    de: "Hoch über einem Fluss im Norden Luxemburgs thronte diese mittelalterliche Festung mit runden Türmen einst als Sitz der Grafen von Vianden. Victor Hugo besuchte sie und war so begeistert, dass er sie zeichnete. Im 20. Jahrhundert restauriert, gehört sie heute zu den meistbesuchten Stätten des Landes.",
    lb: "Héich iwwer engem Floss am Norden vu Lëtzebuerg steet dës mëttelalterlecher Festung mat ronnen Tierm, wou fréier d'Grafe vu Veianen gelieft hunn. Victor Hugo huet si besicht a war sou begeeschtert, datt hien se gezeechent huet. Am 20. Joerhonnert restauréiert, ass si haut ee vun den meeschte besichte Plazen am Land."
  },
    fact: {
    en: "Vianden Castle dates back to the 10th century and was home to the Counts of Vianden and later the House of Orange-Nassau. Victor Hugo lived in exile here in 1871.",
    fr: "Le château de Vianden remonte au Xe siècle et fut la demeure des comtes de Vianden, puis de la Maison d'Orange-Nassau. Victor Hugo y vécut en exil en 1871.",
    de: "Die Burg Vianden geht auf das 10. Jahrhundert zurück und war Residenz der Grafen von Vianden und später des Hauses Oranien-Nassau. Victor Hugo lebte 1871 im Exil hier.",
    lb: "D'Buerg Veianen geet op d'10. Joerhonnert zréck a war d'Heem vun de Grafe vu Veianen an duerno vum Haus Oranien-Nassau. Victor Hugo huet 1871 am Exil hei gelieft."
  },
    region: "Diekirch",
    link: "https://www.visitluxembourg.com/en/place/site/vianden-castle"
  },
  {
    id: "echternach",
    level: "tourist",
    subLevel: 1,
    name: {
    en: "Echternach",
    fr: "Echternach",
    de: "Echternach",
    lb: "Iechternach"
  },
    coords: [49.8125, 6.4211],
    emoji: "⛪",
    clue: {
    en: "This town in the east of Luxembourg, near the German border, hosts a UNESCO-listed \"dancing procession\" every Whit Tuesday. Founded around a 7th-century abbey by St. Willibrord, it is one of Luxembourg's oldest towns.",
    fr: "Cette ville de l'est du Luxembourg, près de la frontière allemande, accueille chaque mardi de Pentecôte une \"procession dansante\" inscrite au patrimoine de l'UNESCO. Fondée autour d'une abbaye du VIIe siècle par saint Willibrord, c'est l'une des plus anciennes villes du Luxembourg.",
    de: "Diese Stadt im Osten Luxemburgs nahe der deutschen Grenze veranstaltet jeden Pfingstdienstag eine von der UNESCO gelistete „Springprozession\". Sie wurde um ein Kloster aus dem 7. Jahrhundert von St. Willibrord gegründet und ist eine der ältesten Städte Luxemburgs.",
    lb: "Dës Stad am Osten vu Lëtzebuerg, no bei der däitscher Grenz, huet all Pfingstdënschdeg eng vun der UNESCO gelisteten „Sprangprozessioun\". Si gouf ronderëm eng Abtei aus dem 7. Joerhonnert vum Hellege Willibrord gegrënnt a gehéiert zu de eelste Stied vu Lëtzebuerg."
  },
    fact: {
    en: "Echternach is Luxembourg's oldest town, founded by St. Willibrord in 698 AD. Its famous dancing procession (Sprangprozessioun) has been held since the Middle Ages.",
    fr: "Echternach est la plus ancienne ville du Luxembourg, fondée par saint Willibrord en 698. Sa célèbre procession dansante (Sprangprozessioun) est célébrée depuis le Moyen Âge.",
    de: "Echternach ist die älteste Stadt Luxemburgs, gegründet von St. Willibrord im Jahr 698. Die berühmte Springprozession (Sprangprozessioun) wird seit dem Mittelalter abgehalten.",
    lb: "Iechternach ass déi eelste Stad vu Lëtzebuerg, gegrënnt vum Hellege Willibrord am Joer 698. Déi berühmte Sprangprozessioun gëtt säit dem Mëttelalter ofgehalen."
  },
    region: "Grevenmacher",
    link: "https://www.visitluxembourg.com/en/place/site/echternach-abbey"
  },
  {
    id: "bock",
    level: "tourist",
    subLevel: 1,
    name: {
    en: "Bock Casemates",
    fr: "Casemates du Bock",
    de: "Bock-Kasematten",
    lb: "Bock-Kasematten"
  },
    coords: [49.6117, 6.1397],
    emoji: "🏛️",
    clue: {
    en: "Carved deep into the rock beneath Luxembourg City's old town, this network of underground galleries and tunnels once sheltered 35,000 people during wartime. They were hollowed out over centuries of fortress-building and are part of a UNESCO World Heritage Site.",
    fr: "Creusées dans le rocher sous la vieille ville de Luxembourg, ces galeries souterraines ont abrité 35 000 personnes pendant la guerre. Taillées au fil des siècles de construction de la forteresse, elles font partie d'un site classé au patrimoine mondial de l'UNESCO.",
    de: "Tief im Fels unter der Altstadt von Luxemburg-Stadt wurden diese unterirdischen Gänge und Tunnel ins Gestein gehauen und boten im Krieg 35.000 Menschen Schutz. Jahrhundertelang in der Festung gegraben, sind sie Teil eines UNESCO-Weltkulturerbes.",
    lb: "Déif am Fiels ënner der Aler Stad vu Lëtzebuerg-Stad, gouf dëst Netz vun ënnerierdesche Gäng a Tunnele gegrawen a huet am Krich 35.000 Mënsche Schutz geboten. Si sinn Deel vun engem UNESCO-Welterbesäit."
  },
    fact: {
    en: "The Bock Casemates are a 23km network of tunnels carved into sandstone rock over three centuries. During WWII they sheltered 35,000 civilians from Allied bombing.",
    fr: "Les casemates du Bock forment un réseau de 23 km de tunnels creusés dans le grès sur trois siècles. Pendant la Seconde Guerre mondiale, elles ont abrité 35 000 civils des bombardements alliés.",
    de: "Die Bock-Kasematten sind ein 23 km langes Tunnelnetz, das über drei Jahrhunderte in Sandstein gehauen wurde. Im Zweiten Weltkrieg schützten sie 35.000 Zivilisten vor alliierten Bombenangriffen.",
    lb: "D'Bock-Kasematten sinn e 23 km laangt Tunnelnetz, dat iwwer dräi Joerhonnerten an de Sandstein gegrawen gouf. Wärend dem Zweete Weltkrich hunn si 35.000 Ziviliste virun alliierten Bombardementer geschützt."
  },
    region: "Luxembourg City",
    link: "https://www.visitluxembourg.com/en/place/site/the-bock-casemates"
  },
  {
    id: "mullerthal",
    level: "tourist",
    subLevel: 2,
    name: {
    en: "Mullerthal (Little Switzerland)",
    fr: "Mullerthal (Petite Suisse)",
    de: "Mullerthal (Kleine Schweiz)",
    lb: "Mullerthal (Kleng Schwäiz)"
  },
    coords: [49.7963, 6.3611],
    emoji: "🌿",
    clue: {
    en: "Known as \"Luxembourg's Little Switzerland,\" this nature reserve in the east features dramatic sandstone rock formations, deep gorges, and lush forests. Hikers come from across Europe for its scenic trails.",
    fr: "Surnommée la \"Petite Suisse luxembourgeoise\", cette réserve naturelle de l'est du pays offre des formations rocheuses en grès spectaculaires, des gorges profondes et des forêts luxuriantes. Les randonneurs viennent de toute l'Europe pour ses sentiers pittoresques.",
    de: "Als „Kleine Schweiz Luxemburgs\" bekannt, bietet dieses Naturschutzgebiet im Osten des Landes dramatische Sandsteinfelsformationen, tiefe Schluchten und üppige Wälder. Wanderer aus ganz Europa kommen für seine malerischen Wege hierher.",
    lb: "Als „Kleng Schwäiz vu Lëtzebuerg\" bekannt, bitt dëst Naturschutzgebitt am Oste vum Land spektakulär Sandsteinfelsformatiounen, déif Schluuchten a räich Bëscher. Wanderer aus ganz Europa kommen fir seng bëlleg Weeër."
  },
    fact: {
    en: "The Mullerthal region is famous for its unique sandstone rock formations sculpted by water over millions of years. The 112km Mullerthal Trail winds through this magical landscape.",
    fr: "La région du Mullerthal est connue pour ses formations rocheuses en grès uniques, sculptées par l'eau sur des millions d'années. Le sentier du Mullerthal, long de 112 km, serpente à travers ce paysage féerique.",
    de: "Die Mullerthal-Region ist für ihre einzigartigen Sandsteinfelsformationen bekannt, die über Millionen von Jahren durch Wasser geformt wurden. Der 112 km lange Mullerthal-Trail windet sich durch diese zauberhafte Landschaft.",
    lb: "D'Mullerthal-Regioun ass berüümt fir hir eenzegaarteg Sandsteinfelsformatiounen, déi iwwer Millioune Joer duerch Waasser geformt goufen. De 112 km laangen Mullerthal-Trail wënnt sech duerch dës zauberhaft Landschaft."
  },
    region: "Grevenmacher",
    link: "https://www.visitluxembourg.com/en/place/site/mullerthal-trail"
  },
  {
    id: "schengen",
    level: "tourist",
    subLevel: 2,
    name: {
    en: "Schengen",
    fr: "Schengen",
    de: "Schengen",
    lb: "Schengen"
  },
    coords: [49.4745, 6.3676],
    emoji: "🤝",
    clue: {
    en: "This small village on the banks of the Moselle, in the southernmost tip of Luxembourg, gave its name to one of Europe's most significant agreements. In 1985, on a boat moored here, five countries signed a treaty abolishing border controls.",
    fr: "Ce petit village sur les rives de la Moselle, à la pointe sud du Luxembourg, a donné son nom à l'un des accords les plus importants d'Europe. En 1985, sur un bateau amarré ici, cinq pays ont signé un traité supprimant les contrôles aux frontières.",
    de: "Dieses kleine Dorf an den Ufern der Mosel, an der südlichsten Spitze Luxemburgs, gab einem der bedeutendsten europäischen Abkommen seinen Namen. 1985 unterzeichneten fünf Länder auf einem hier vertäuten Boot einen Vertrag zur Abschaffung der Grenzkontrollen.",
    lb: "Dëst klenge Duerf um Ufier vun der Musel, un der südlechster Spëtzt vu Lëtzebuerg, huet engem vun den wichtegsten europäesche Verträg säin Numm ginn. Am Joer 1985 hunn fënnef Länner op engem Boot, dat hei verankert war, e Vertrag ënnerschriwwen, deen d'Grenzkontrollen ofgeschaf huet."
  },
    fact: {
    en: "The Schengen Agreement was signed here on 14 June 1985, creating the borderless Schengen Area that today covers 27 European countries. The European Museum of Schengen celebrates this history.",
    fr: "L'Accord de Schengen fut signé ici le 14 juin 1985, créant l'espace Schengen qui couvre aujourd'hui 27 pays européens. Le Musée européen de Schengen célèbre cette histoire.",
    de: "Das Schengener Abkommen wurde am 14. Juni 1985 hier unterzeichnet und schuf den Schengen-Raum, der heute 27 europäische Länder umfasst. Das Europäische Museum Schengen feiert diese Geschichte.",
    lb: "D'Schengener Ofkommes gouf hei de 14. Juni 1985 ënnerschriwwen an huet den Schengen-Raum geschaaft, dee haut 27 europäesch Länner ëmfaasst. D'Europäescht Museum Schengen feiert dës Geschicht."
  },
    region: "Remich",
    link: "https://www.visitluxembourg.com/en/place/site/european-museum-schengen"
  },
  {
    id: "remich",
    level: "tourist",
    subLevel: 3,
    name: {
    en: "Remich",
    fr: "Remich",
    de: "Remich",
    lb: "Réimech"
  },
    coords: [49.5447, 6.3674],
    emoji: "🍷",
    clue: {
    en: "Called the \"Pearl of the Moselle,\" this charming town on Luxembourg's eastern border with Germany is surrounded by vineyards. It is the heart of the Luxembourg wine region and home to several famous wineries producing Riesling and Crémant.",
    fr: "Surnommée la \"Perle de la Moselle\", cette charmante ville sur la frontière orientale du Luxembourg avec l'Allemagne est entourée de vignobles. Elle est le cœur de la région viticole luxembourgeoise et abrite plusieurs caves renommées produisant du Riesling et du Crémant.",
    de: "Als „Perle der Mosel\" bezeichnet, liegt diese charmante Stadt an der östlichen Grenze Luxemburgs zu Deutschland inmitten von Weinbergen. Sie ist das Herz der luxemburgischen Weinregion und beherbergt mehrere renommierte Weinkellereien, die Riesling und Crémant produzieren.",
    lb: "Als „Perl vun der Musel\" genannt, läit dës charmantt Stad un der éischtlecher Grenz vu Lëtzebuerg mat Däitschland mëtten a Wéngerten. Si ass d'Häerz vun der lëtzebuerger Wäiregioun a beherbergt verschidde renomméiert Kellereien, déi Riesling a Crémant produzéieren."
  },
    fact: {
    en: "Remich is the wine capital of Luxembourg, home to the Pundel and Bernard-Massard wineries. The Moselle wine route stretches 42km from Schengen to Wasserbillig.",
    fr: "Remich est la capitale viticole du Luxembourg, siège des caves Pundel et Bernard-Massard. La route des vins de la Moselle s'étend sur 42 km de Schengen à Wasserbillig.",
    de: "Remich ist die Weinhauptstadt Luxemburgs und Heimat der Weinkellereien Pundel und Bernard-Massard. Die Moselweinstraße erstreckt sich über 42 km von Schengen bis Wasserbillig.",
    lb: "Réimech ass d'Wäinhaaptstad vu Lëtzebuerg, Heem vun de Kellereien Pundel a Bernard-Massard. D'Muselwéistrooss erstreckt sech 42 km vu Schengen bis Waasserbëlleg."
  },
    region: "Remich",
    link: "https://www.visitluxembourg.com/en/country/moselle"
  },
  {
    id: "clervaux",
    level: "tourist",
    subLevel: 3,
    name: {
    en: "Clervaux Castle",
    fr: "Château de Clervaux",
    de: "Burg Clervaux",
    lb: "Schlass Clervaux"
  },
    coords: [50.0547, 6.0327],
    emoji: "📷",
    clue: {
    en: "In the heart of the Ardennes in northern Luxembourg, this white castle in a valley houses the famous \"Family of Man\" photography exhibition — 503 photographs from 68 countries, compiled by a Luxembourger who grew up in America and presented it at New York's MoMA in 1955.",
    fr: "Au cœur des Ardennes dans le nord du Luxembourg, ce château blanc dans une vallée abrite la célèbre exposition photographique \"La Famille des hommes\" — 503 photographies de 68 pays, réunies par un Luxembourgeois élevé en Amérique et présentée au MoMA de New York en 1955.",
    de: "Im Herzen der Ardennen im Norden Luxemburgs beherbergt dieses weiße Schloss in einem Tal die berühmte Fotoausstellung „The Family of Man\" — 503 Fotografien aus 68 Ländern, zusammengestellt von einem Luxemburger, der in Amerika aufwuchs und sie 1955 im New Yorker MoMA präsentierte.",
    lb: "Am Häerz vun den Ardennen am Norden vu Lëtzebuerg beherbergt dëst wäisst Schlass an engem Daal d'berüümt Fotoausstellung „The Family of Man\" — 503 Fotoen aus 68 Länner, zesummegesat vun engem Lëtzebuerger, deen a Amerika opgewuess ass a se 1955 am New Yorker MoMA presentéiert huet."
  },
    fact: {
    en: "Clervaux Castle houses the permanent \"Family of Man\" exhibition, compiled by Edward Steichen in 1955. The exhibition was inscribed on UNESCO's Memory of the World register.",
    fr: "Le château de Clervaux accueille l'exposition permanente \"La Famille des hommes\", composée par Edward Steichen en 1955. L'exposition est inscrite au registre Mémoire du monde de l'UNESCO.",
    de: "Burg Clervaux beherbergt die ständige Ausstellung „The Family of Man\", zusammengestellt von Edward Steichen im Jahr 1955. Die Ausstellung ist im UNESCO-Register „Memory of the World\" eingetragen.",
    lb: "D'Schlass Clervaux beherbergt d'Permanentausstellung „The Family of Man\", déi vum Edward Steichen am Joer 1955 zesummegesat gouf. D'Ausstellung ass am UNESCO Memory of the World Register ageschriwwen."
  },
    region: "Clervaux",
    link: "https://www.visitluxembourg.com/en/place/museum/clervaux-castle-and-the-family-of-man-exhibition"
  },
  {
    id: "bourscheid",
    level: "tourist",
    subLevel: 3,
    name: {
    en: "Bourscheid Castle",
    fr: "Château de Bourscheid",
    de: "Burg Bourscheid",
    lb: "Buerg Buurscheid"
  },
    coords: [49.9272, 6.0597],
    emoji: "🏯",
    clue: {
    en: "Perched on a rocky promontory 150 metres above the confluence of two rivers in the north of Luxembourg, this ruined fortress was once one of the most powerful castles in the region. Today it offers dramatic views of wooded hills and the Sauer river valley.",
    fr: "Perchée sur un promontoire rocheux à 150 mètres au-dessus de la confluence de deux rivières dans le nord du Luxembourg, cette forteresse en ruine fut l'une des plus puissantes de la région. Elle offre aujourd'hui des vues spectaculaires sur les collines boisées et la vallée de la Sûre.",
    de: "Auf einem Felsvorsprung 150 Meter über dem Zusammenfluss zweier Flüsse im Norden Luxemburgs thront diese Burgruine, einst eine der mächtigsten Festungen der Region. Heute bietet sie dramatische Ausblicke auf bewaldete Hügel und das Sauertal.",
    lb: "Op engem Fielsvirsprong 150 Meter iwwer dem Zesummefloss vun zwee Flëss am Norden vu Lëtzebuerg steet dës Burgruine, eemol eng vun de mächtegsten Festungen an der Regioun. Haut bitt si dramatesch Aussichten op d'bewaldete Hiwwele an d'Sauerdall."
  },
    fact: {
    en: "Bourscheid Castle dates from around the 10th century and was once home to the powerful Bourscheid dynasty. The ruins are among Luxembourg's most romantic, perched high above the Sauer river.",
    fr: "Le château de Bourscheid date d'environ Xe siècle et fut jadis la demeure de la puissante dynastie de Bourscheid. Ses ruines sont parmi les plus romantiques du Luxembourg, perchées au-dessus de la Sûre.",
    de: "Die Burg Bourscheid stammt aus dem 10. Jahrhundert und war einst Sitz der mächtigen Bourscheid-Dynastie. Die Ruinen gehören zu den romantischsten Luxemburgs und thronen hoch über der Sauer.",
    lb: "D'Buerg Buurscheid gouf ronderëm am 10. Joerhonnert gebaut a war eemol d'Heem vun der mächteger Bourscheid-Dynasti. D'Ruinen sinn ënner de romanteschste vu Lëtzebuerg, héich iwwer der Sauer."
  },
    region: "Diekirch",
    link: "https://www.visitluxembourg.com/en/place/site/bourscheid-castle"
  },
  {
    id: "wiltz",
    level: "tourist",
    subLevel: 5,
    name: {
    en: "Wiltz",
    fr: "Wiltz",
    de: "Wiltz",
    lb: "Wolz"
  },
    coords: [49.9661, 5.9326],
    emoji: "🎭",
    clue: {
    en: "This town in the northwest of Luxembourg, set in the heart of the Ardennes, is known for its annual open-air summer festival and a castle with a striking staircase. It was heavily damaged during the Battle of the Bulge and later rebuilt.",
    fr: "Cette ville du nord-ouest du Luxembourg, au cœur des Ardennes, est connue pour son festival estival en plein air et un château à l'escalier remarquable. Très endommagée pendant la Bataille des Ardennes, elle fut ensuite reconstruite.",
    de: "Diese Stadt im Nordwesten Luxemburgs, im Herzen der Ardennen, ist bekannt für ihr jährliches Open-Air-Sommerfestival und ein Schloss mit einer markanten Treppe. Sie wurde in der Ardennenoffensive stark beschädigt und anschließend wiederaufgebaut.",
    lb: "Dës Stad am Nordweste vu Lëtzebuerg, am Häerz vun den Ardennen, ass bekannt fir hire jährlecht Open-Air-Summerfestival an e Schlass mat enger auffälleger Trapp. Si gouf an der Ardennenschluecht staark beschiedegt a duerno erëmgebaut."
  },
    fact: {
    en: "Wiltz hosts the famous annual Wiltz Festival, an open-air theatre and music event since 1951 — one of Luxembourg's oldest cultural festivals, held in the castle grounds.",
    fr: "Wiltz accueille le célèbre Festival de Wiltz, événement de théâtre et de musique en plein air depuis 1951 — l'un des plus anciens festivals culturels du Luxembourg, tenu dans les jardins du château.",
    de: "Wiltz beherbergt das berühmte Wiltzer Festival, ein Open-Air-Theater- und Musikevent seit 1951 — eines der ältesten Kulturfestivals Luxemburgs, das im Schlossgarten stattfindet.",
    lb: "Wolz beherbergt dat berüümte Wolzer Festival, e Open-Air-Theater- a Museksevent zënter 1951 — eent vun de eelste Kulturfestivaler vu Lëtzebuerg, dat am Schlasskäregaart stattfënnt."
  },
    region: "Wiltz",
    link: "https://www.visitluxembourg.com/en/place/site/wiltz-castle"
  },
  {
    id: "kirchberg",
    level: "tourist",
    subLevel: 2,
    name: {
    en: "Kirchberg (EU Quarter)",
    fr: "Kirchberg (Quartier européen)",
    de: "Kirchberg (EU-Viertel)",
    lb: "Kierchbierg (EU-Viertel)"
  },
    coords: [49.6279, 6.1624],
    emoji: "🏢",
    clue: {
    en: "This plateau on the eastern edge of Luxembourg City is home to the European Court of Justice, the Court of Auditors, the Philharmonie concert hall, the National Museum of History and Art, and a major business district. Bridges connect it to the old town.",
    fr: "Ce plateau à l'est de Luxembourg-Ville abrite la Cour de justice de l'Union européenne, la Cour des comptes, la Philharmonie, le Musée national d'histoire et d'art, et un grand quartier d'affaires. Des ponts le relient à la vieille ville.",
    de: "Dieses Plateau am östlichen Rand von Luxemburg-Stadt beherbergt den Europäischen Gerichtshof, den Rechnungshof, die Philharmonie, das Nationalmuseum für Geschichte und Kunst sowie ein großes Geschäftsviertel. Brücken verbinden es mit der Altstadt.",
    lb: "Dëst Plateau am Oste vu Lëtzebuerg-Stad beherbergt de Europäesche Geriichtshaff, de Rechnungshaff, d'Philharmonie, de Nationalmusée fir Geschicht a Konscht an e grousst Geschäftsviertel. Brécke verbannen et mat der Aler Stad."
  },
    fact: {
    en: "Kirchberg is Luxembourg's \"European Quarter,\" home to major EU institutions. The Adolphe Bridge and Grand Duchess Charlotte Bridge span the deep Alzette valley, connecting it to the city centre.",
    fr: "Kirchberg est le \"Quartier européen\" du Luxembourg, siège de grandes institutions de l'UE. Le pont Adolphe et le pont Grande-Duchesse Charlotte enjambent la profonde vallée de l'Alzette pour relier Kirchberg au centre-ville.",
    de: "Kirchberg ist Luxemburgs „Europaviertel\" mit bedeutenden EU-Institutionen. Die Adolphe-Brücke und die Großherzogin-Charlotte-Brücke überspannen das tiefe Alzettetal und verbinden Kirchberg mit dem Stadtzentrum.",
    lb: "Kierchbierg ass Lëtzebuerg seng „EU-Quartier\" mat wichtegen EU-Institutiounen. D'Adolphe-Bréck an d'Groussherzogin-Charlotte-Bréck iwwerspannen dat déift Alzette-Daal a verbannen Kierchbierg mat dem Stadtzentrum."
  },
    region: "Luxembourg City",
    link: "https://www.visitluxembourg.com/en/place/site/kirchberg-plateau"
  },
  // 40 new locations below
  {
    id: "diekirch",
    level: "tourist",
    subLevel: 3,
    name: {
    en: "Diekirch",
    fr: "Diekirch",
    de: "Diekirch",
    lb: "Diekirch"
  },
    coords: [49.8673, 6.1598],
    emoji: "⚔️",
    clue: {
    en: "This town on the banks of the Sauer river in central Luxembourg is home to a renowned museum dedicated to the Battle of the Bulge (1944–1945). Life-size dioramas and original equipment tell the story of the fierce winter fighting in the Ardennes.",
    fr: "Cette ville sur les rives de la Sûre, au centre du Luxembourg, abrite un musée de renommée mondiale consacré à la Bataille des Ardennes (1944–1945). Des dioramas grandeur nature et des équipements d'origine retracent les combats hivernaux acharnés dans les Ardennes.",
    de: "Diese Stadt am Ufer der Sauer im Zentrum Luxemburgs beherbergt ein renommiertes Museum zur Ardennenoffensive (1944–1945). Lebensgroße Dioramen und Originalausrüstung erzählen die Geschichte der heftigen Winterkämpfe in den Ardennen.",
    lb: "Dës Stad um Ufier vun der Sauer am Zentrum vu Lëtzebuerg beherbergt e renomméierte Musée iwwer d'Ardennenschluecht (1944–1945). Liebensgréisst Dioramen an Originalausrüstung erzielen d'Geschicht vun de féierleche Wanterkämpf an den Ardennen."
  },
    fact: {
    en: "The National Museum of Military History in Diekirch is one of Europe's best dedicated to World War II. Over 400 mannequins re-create the brutal Battle of the Bulge in stunning detail.",
    fr: "Le Musée national d'histoire militaire de Diekirch est l'un des meilleurs d'Europe consacrés à la Seconde Guerre mondiale. Plus de 400 mannequins reconstituent la brutale Bataille des Ardennes avec un réalisme saisissant.",
    de: "Das Nationalmuseum für Militärgeschichte in Diekirch ist eines der besten Europas zum Zweiten Weltkrieg. Über 400 Schaufensterpuppen stellen die brutale Ardennenoffensive mit verblüffendem Detail nach.",
    lb: "De Nationalmusée fir Militärgeschicht zu Diekirch ass ee vun de beschten an Europa fir den Zweete Weltkrich. Iwwer 400 Mannequinen stellen d'brutal Ardennenschluecht mat verblëffender Detaillidder."
  },
    region: "Diekirch",
    link: "https://www.visitluxembourg.com/en/place/museum/national-museum-of-military-history"
  },
  {
    id: "esch-alzette",
    level: "tourist",
    subLevel: 3,
    name: {
    en: "Esch-sur-Alzette",
    fr: "Esch-sur-Alzette",
    de: "Esch-an-der-Alzette",
    lb: "Esch-Uelzecht"
  },
    coords: [49.4941, 5.9806],
    emoji: "🏭",
    clue: {
    en: "Luxembourg's second-largest city sits in the south, in the heart of the old steel-producing \"Minette\" region. It was the 2022 European Capital of Culture and has transformed its industrial heritage into vibrant cultural spaces and street art.",
    fr: "La deuxième ville du Luxembourg se trouve dans le sud, au cœur de l'ancienne région sidérurgique du \"Minett\". Capitale européenne de la Culture 2022, elle a transformé son patrimoine industriel en espaces culturels dynamiques et en art de rue.",
    de: "Die zweitgrößte Stadt Luxemburgs liegt im Süden, im Herzen der alten Stahlindustrieregion „Minett\". Als Kulturhauptstadt Europas 2022 hat sie ihr industrielles Erbe in lebendige Kulturräume und Street-Art verwandelt.",
    lb: "Lëtzebuerg seng zweet gréisst Stad läit am Süden, am Häerz vun der aler Stolindustrieregioun „Minett\". Als Europäesch Kulturhaaptstad 2022 huet si hiert industriellt Ierwen a lieweg Kulturräim a Stroossekonschten ëmgewandelt."
  },
    fact: {
    en: "Esch-sur-Alzette was European Capital of Culture 2022. The Esch Minett region was once the beating heart of Luxembourg's steel industry; today its former blast furnaces are cultural landmarks.",
    fr: "Esch-sur-Alzette fut Capitale européenne de la Culture 2022. La région Esch Minett était le cœur de la sidérurgie luxembourgeoise ; aujourd'hui ses anciens hauts fourneaux sont des monuments culturels.",
    de: "Esch-an-der-Alzette war Kulturhauptstadt Europas 2022. Die Region Esch Minett war einst das Herz der luxemburgischen Stahlindustrie; heute sind die ehemaligen Hochöfen Kulturdenkmäler.",
    lb: "Esch-Uelzecht war Europäesch Kulturhaaptstad 2022. D'Esch-Minett-Regioun war eemol d'Häerz vun der lëtzebuerger Stolindustrie; haut sinn d'eemoleg Héichiewen kulturell Monumenter."
  },
    region: "Esch",
    link: "https://www.visitluxembourg.com/en/city/esch-sur-alzette"
  },
  {
    id: "differdange",
    level: "wanderer",
    subLevel: 1,
    name: {
    en: "Differdange",
    fr: "Differdange",
    de: "Differdingen",
    lb: "Déifferdeng"
  },
    coords: [49.5243, 5.8892],
    emoji: "🔩",
    clue: {
    en: "In the far southwest of Luxembourg, close to France, this industrial town built its identity on steel. Its distinctive wide-flange steel beams (\"grey steel\") were used to build the Empire State Building and the Rockefeller Center in New York.",
    fr: "Dans l'extrême sud-ouest du Luxembourg, près de la France, cette ville industrielle a bâti son identité sur l'acier. Ses poutrelles en acier à larges ailes (\"acier gris\") ont été utilisées pour construire l'Empire State Building et le Rockefeller Center à New York.",
    de: "Im äußersten Südwesten Luxemburgs nahe der französischen Grenze baute diese Industriestadt ihre Identität auf Stahl. Ihre charakteristischen Breitflanschträger („Grausstahl\") wurden beim Bau des Empire State Building und des Rockefeller Center in New York verwendet.",
    lb: "Am äusserste Südweste vu Lëtzebuerg, no bei Frankräich, huet dës Industriestad hir Identitéit op Stol gebaut. Hir bredbeflanschte Stollträger goufen zum Bau vum Empire State Building an dem Rockefeller Center a New York benotzt."
  },
    fact: {
    en: "Differdange's Arbed steelworks produced the wide-flange steel beams used in the Empire State Building and Rockefeller Center. The steel tradition is honoured in the town's heritage trails.",
    fr: "Les aciéries Arbed de Differdange ont produit les poutrelles utilisées pour l'Empire State Building et le Rockefeller Center. La tradition sidérurgique est honorée dans les parcours patrimoniaux de la ville.",
    de: "Die Arbed-Stahlwerke in Differdingen produzierten die Breitflanschträger für das Empire State Building und das Rockefeller Center. Die Stahltradition wird in den Erbepfaden der Stadt geehrt.",
    lb: "D'Arbed-Stollwierker zu Déifferdeng hunn d'bredbeflanschte Stollträger fir d'Empire State Building an d'Rockefeller Center produzéiert. D'Stooltradition gëtt an de Patrimounisweeër vun der Stad geéiert."
  },
    region: "Esch",
    link: "https://www.visitluxembourg.com/en/city/differdange"
  },
  {
    id: "mondorf",
    level: "tourist",
    subLevel: 4,
    name: {
    en: "Mondorf-les-Bains",
    fr: "Mondorf-les-Bains",
    de: "Mondorf-les-Bains",
    lb: "Munneref"
  },
    coords: [49.5028, 6.2835],
    emoji: "💧",
    clue: {
    en: "Near the French border in the southeast, this elegant spa town has been known for its mineral springs since Roman times. Today it is home to Luxembourg's only thermal spa resort, surrounded by a magnificent park.",
    fr: "Près de la frontière française dans le sud-est, cette élégante ville thermale est connue pour ses sources minérales depuis l'époque romaine. Elle abrite aujourd'hui le seul complexe thermal du Luxembourg, entouré d'un magnifique parc.",
    de: "Nahe der französischen Grenze im Südosten ist diese elegante Kurstadt seit der Römerzeit für ihre Mineralquellen bekannt. Heute beherbergt sie Luxemburgs einzigen Thermalkurort, umgeben von einem prächtigen Park.",
    lb: "No bei der fransäischer Grenz am Südosten ass dës elegant Kurstad zënter der Réimerzäit fir hir Mineralquellen bekannt. Haut beherbergt si Lëtzebuerg säin eenzegen Thermalresort, ëmginn vu engem prächtege Parc."
  },
    fact: {
    en: "Mondorf-les-Bains has been a spa destination since the 19th century. Its Domaine Thermal offers thermal pools, saunas, and wellness treatments fed by natural mineral springs rich in calcium and magnesium.",
    fr: "Mondorf-les-Bains est une destination thermale depuis le XIXe siècle. Son Domaine Thermal propose piscines thermales, saunas et soins de bien-être alimentés par des sources minérales naturelles riches en calcium et en magnésium.",
    de: "Mondorf-les-Bains ist seit dem 19. Jahrhundert ein Kurort. Das Domaine Thermal bietet Thermalbäder, Saunas und Wellnessbehandlungen aus natürlichen Mineralquellen reich an Kalzium und Magnesium.",
    lb: "Munneref ass zënter dem 19. Joerhonnert e Kurort. Säin Domaine Thermal bitt Thermalbäeder, Saunaen a Wellnessbehandlungen aus natierleche Mineralquellen, déi räich u Kalzium a Magnesium sinn."
  },
    region: "Remich",
    link: "https://www.visitluxembourg.com/en/city/mondorf-les-bains"
  },
  {
    id: "beaufort",
    level: "tourist",
    subLevel: 4,
    name: {
    en: "Beaufort Castle",
    fr: "Château de Beaufort",
    de: "Burg Beaufort",
    lb: "Buerg Beefort"
  },
    coords: [49.8415, 6.2983],
    emoji: "🏚️",
    clue: {
    en: "Hidden among the forests of the Mullerthal region, these dramatic ruins consist of two castle structures side by side — a medieval fortress and a later Renaissance château. The area is famous for its blackcurrant liqueur produced nearby.",
    fr: "Caché dans les forêts de la région du Mullerthal, ces ruines spectaculaires comprennent deux structures de châteaux côte à côte — une forteresse médiévale et un château Renaissance plus récent. La région est connue pour sa liqueur de cassis produite à proximité.",
    de: "Versteckt in den Wäldern der Mullerthal-Region bestehen diese dramatischen Ruinen aus zwei Burgstrukturen nebeneinander — einer mittelalterlichen Festung und einem späteren Renaissance-Schloss. Die Gegend ist für ihren Johannisbeerlikör bekannt.",
    lb: "Verstoppt an de Bëscher vun der Mullerthal-Regioun bestinn dës dramatesch Ruinen aus zwee Buergstrukturen nieweneneen — enger mëttelalterlecher Festung an engem méi spéide Renaissance-Schlass. D'Géigend ass berüümt fir hire lokal produzeierte Johannisbierren-Likör."
  },
    fact: {
    en: "Beaufort Castle has two structures: a medieval fortress (12th–14th c.) and a Renaissance château (17th c.). The surrounding village is renowned for its Cassero blackcurrant liqueur, made from local berries.",
    fr: "Le château de Beaufort comprend deux structures : une forteresse médiévale (XIIe–XIVe s.) et un château Renaissance (XVIIe s.). Le village environnant est réputé pour sa liqueur de cassis Cassero, fabriquée à partir de baies locales.",
    de: "Die Burg Beaufort umfasst zwei Strukturen: eine mittelalterliche Festung (12.–14. Jh.) und ein Renaissance-Schloss (17. Jh.). Das umliegende Dorf ist für seinen Cassero-Johannisbeerlikör aus einheimischen Beeren bekannt.",
    lb: "D'Buerg Beefort ëmfaasst zwou Strukturen: eng mëttelalterleche Festung (12.–14. Jh.) an e Renaissance-Schlass (17. Jh.). D'Nopeschduerf ass berüümt fir säi Cassero-Johannisbierren-Likör aus lokaale Beiere."
  },
    region: "Grevenmacher",
    link: "https://www.visitluxembourg.com/en/place/site/beaufort-castle"
  },
  {
    id: "larochette",
    level: "tourist",
    subLevel: 4,
    name: {
    en: "Larochette Castle",
    fr: "Château de Larochette",
    de: "Burg Larochette",
    lb: "Fels (Buerg)"
  },
    coords: [49.7795, 6.2271],
    emoji: "🗼",
    clue: {
    en: "Perched dramatically above a small town in central Luxembourg, these twin medieval ruins overlook the Ernz Blanche valley. The castle was split between two noble families for centuries — you can still see the remains of both their residences.",
    fr: "Perchées de façon spectaculaire au-dessus d'une petite ville au centre du Luxembourg, ces doubles ruines médiévales dominent la vallée de l'Ernz Blanche. Le château fut partagé entre deux familles nobles pendant des siècles — on peut encore voir les vestiges de leurs deux résidences.",
    de: "Dramatisch über einer kleinen Stadt im Zentrum Luxemburgs thronend, überblicken diese mittelalterlichen Doppelruinen das Ernz-Blanche-Tal. Die Burg war jahrhundertelang zwischen zwei Adelsfamilien aufgeteilt — man kann noch die Überreste beider Wohnsitze sehen.",
    lb: "Dramatesch iwwer enger klenger Stad am Zentrum vu Lëtzebuerg throunend, iwwerblécken dës mëttelalterleche Duebellruinen d'Ernz-Blanche-Daal. D'Buerg war Jorhonnerte laang tëschent zwou Adelsfamilien opgedeelt — ee kann nach ëmmer d'Iwwerreschter vun hire béide Residenzen gesinn."
  },
    fact: {
    en: "Larochette Castle (Fiels and Meysembourg towers) dates to the 12th century. The ruins rise dramatically above the picturesque town of Larochette, popular with visitors exploring the Mullerthal region.",
    fr: "Le château de Larochette (tours Fiels et Meysembourg) date du XIIe siècle. Les ruines s'élèvent de façon spectaculaire au-dessus de la pittoresque ville de Larochette, très fréquentée par les visiteurs du Mullerthal.",
    de: "Die Burg Larochette (Türme Fiels und Meysembourg) stammt aus dem 12. Jahrhundert. Die Ruinen erheben sich dramatisch über der malerischen Stadt Larochette, die bei Besuchern der Mullerthal-Region beliebt ist.",
    lb: "D'Buerg Fels (Tierm Fiels a Meysembourg) staamt aus dem 12. Joerhonnert. D'Ruinen erhiewe sech dramatesch iwwer der pittoresker Stad Fels, déi populär bei Besuchern vun der Mullerthal-Regioun ass."
  },
    region: "Mersch",
    link: "https://www.visitluxembourg.com/en/place/site/larochette-castle"
  },
  {
    id: "mudam",
    level: "tourist",
    subLevel: 4,
    name: {
    en: "MUDAM – Grand Duke Jean Museum of Modern Art",
    fr: "MUDAM – Musée d'Art Moderne Grand-Duc Jean",
    de: "MUDAM – Großherzog-Jean-Museum für Moderne Kunst",
    lb: "MUDAM – Musée d'Art Moderne Grand-Duc Jean"
  },
    coords: [49.6257, 6.1614],
    emoji: "🎨",
    clue: {
    en: "On the Kirchberg plateau of Luxembourg City, this striking glass and stone building designed by I.M. Pei houses Luxembourg's premier collection of contemporary art. It incorporates the ruins of an old fortress into its foundations.",
    fr: "Sur le plateau de Kirchberg à Luxembourg-Ville, ce bâtiment remarquable en verre et en pierre conçu par I.M. Pei abrite la principale collection d'art contemporain du Luxembourg. Il intègre dans ses fondations les ruines d'une ancienne forteresse.",
    de: "Auf dem Kirchberg-Plateau in Luxemburg-Stadt beherbergt dieses markante Glas-und-Stein-Gebäude von I.M. Pei Luxemburgs bedeutendste Sammlung zeitgenössischer Kunst. In seine Fundamente sind die Ruinen einer alten Festung eingebettet.",
    lb: "Op dem Kierchbierg-Plateau zu Lëtzebuerg-Stad beherbergt dëst markant Glas-a-Steengebai vum I.M. Pei Lëtzebuerg seng wichtegst Sammlung vun zäitgenëssecher Konscht. Et integréiert d'Ruinen vun enger aler Festung an seng Grondléiunge."
  },
    fact: {
    en: "MUDAM was designed by architect I.M. Pei and opened in 2006. It sits on the historic Fort Thüngen site and showcases international contemporary art with a focus on emerging artists.",
    fr: "Le MUDAM a été conçu par l'architecte I.M. Pei et inauguré en 2006. Il est situé sur le site historique du Fort Thüngen et présente l'art contemporain international en mettant l'accent sur les artistes émergents.",
    de: "Das MUDAM wurde vom Architekten I.M. Pei entworfen und 2006 eröffnet. Es steht auf dem historischen Gelände des Fort Thüngen und zeigt internationale zeitgenössische Kunst mit Fokus auf Nachwuchskünstler.",
    lb: "De MUDAM gouf vum Architekt I.M. Pei entworf a 2006 ageweit. En steet um historësche Gelände vum Fort Thüngen a weist international zäitgenëssesch Konscht mat Fokus op opkommend Kënschtler."
  },
    region: "Luxembourg City",
    link: "https://www.visitluxembourg.com/en/place/museum/mudam-luxembourg"
  },
  {
    id: "philharmonie",
    level: "tourist",
    subLevel: 4,
    name: {
    en: "Philharmonie Luxembourg",
    fr: "Philharmonie Luxembourg",
    de: "Philharmonie Luxemburg",
    lb: "Philharmonie Lëtzebuerg"
  },
    coords: [49.6250, 6.1611],
    emoji: "🎵",
    clue: {
    en: "Standing like a white colonnade on the Kirchberg plateau, this concert hall opened in 2005 and is considered one of Europe's finest acoustic venues. Its distinctive exterior features 823 freestanding steel columns surrounding a glass and steel structure.",
    fr: "Dressée comme une colonnade blanche sur le plateau de Kirchberg, cette salle de concert inaugurée en 2005 est considérée comme l'une des meilleures salles acoustiques d'Europe. Son extérieur distinctif est entouré de 823 colonnes en acier indépendantes.",
    de: "Wie eine weiße Kolonnade auf dem Kirchberg-Plateau stehend, gilt dieser 2005 eröffnete Konzertsaal als eine der besten Akustikstätten Europas. Seine markante Außenhülle besteht aus 823 freistehenden Stahlsäulen.",
    lb: "Wéi eng wäiss Kolonnad op dem Kierchbierg-Plateau stehend, gëtt dëse Konzertsal, deen 2005 opgaangen ass, als ee vun de beschten Akusteksäll vun Europa ugesinn. Seng markant Fassad ass vu 823 fräistehende Stollsäulen ëmginn."
  },
    fact: {
    en: "The Philharmonie Luxembourg was designed by Christian de Portzamparc and opened in 2005. Its Grande Salle seats 1,500 and is praised by musicians worldwide for its exceptional acoustics.",
    fr: "La Philharmonie Luxembourg a été conçue par Christian de Portzamparc et inaugurée en 2005. Sa Grande Salle accueille 1 500 places et est saluée par les musiciens du monde entier pour son acoustique exceptionnelle.",
    de: "Die Philharmonie Luxemburg wurde von Christian de Portzamparc entworfen und 2005 eröffnet. Ihr Großer Saal fasst 1.500 Plätze und wird von Musikern weltweit für seine herausragende Akustik gelobt.",
    lb: "D'Philharmonie Lëtzebuerg gouf vum Christian de Portzamparc entworf a 2005 ageweit. Hiren Groussal huet 1.500 Plazen a gëtt vu Museker weltwäit fir seng aussergewéinlech Akustek gelueft."
  },
    region: "Luxembourg City",
    link: "https://www.visitluxembourg.com/en/place/site/philharmonie-luxembourg"
  },
  {
    id: "gelle-fra",
    level: "tourist",
    subLevel: 1,
    name: {
    en: "Gëlle Fra (Golden Lady)",
    fr: "Gëlle Fra (Dame d'Or)",
    de: "Gëlle Fra (Goldene Frau)",
    lb: "Gëlle Fra"
  },
    coords: [49.6111, 6.1303],
    emoji: "🗽",
    clue: {
    en: "On a grand square near Luxembourg City's Old Town, a golden winged woman stands atop a 21-metre column, overlooking the Pétrusse valley. This war memorial was melted down by the Nazi occupiers in 1940 and faithfully reconstructed after liberation.",
    fr: "Sur une grande place près de la vieille ville de Luxembourg, une femme ailée dorée se dresse au sommet d'une colonne de 21 mètres, dominant la vallée de la Pétrusse. Ce monument aux morts fut fondu par les occupants nazis en 1940 et fidèlement reconstruit après la libération.",
    de: "Auf einem großen Platz nahe der Luxemburger Altstadt steht eine goldene geflügelte Frau auf einer 21 Meter hohen Säule und überblickt das Pétrussetal. Dieses Kriegsdenkmal wurde 1940 von den NS-Besatzern eingeschmolzen und nach der Befreiung originalgetreu wiederhergestellt.",
    lb: "Op engem grousse Plaz no bei der Aler Stad vu Lëtzebuerg steet eng gëlleng beflillecht Fra uewen op enger 21 Meter héijer Säul, déi dat Péitruss-Daal iwwerbléckt. Dëst Krichsdenkmal gouf 1940 vun den NS-Besetzer geschmollzt a no der Befreiung getreit rekonstruéiert."
  },
    fact: {
    en: "The Gëlle Fra (Golden Lady) was erected in 1923 to honour WWI volunteers. The Nazis destroyed it in 1940, but it was rebuilt after liberation. Today it is one of Luxembourg's most beloved national symbols.",
    fr: "La Gëlle Fra (Dame d'Or) fut érigée en 1923 pour honorer les volontaires de la Première Guerre mondiale. Les nazis la détruisirent en 1940, mais elle fut reconstruite après la libération. Elle est aujourd'hui l'un des symboles nationaux les plus aimés du Luxembourg.",
    de: "Die Gëlle Fra (Goldene Frau) wurde 1923 zur Ehrung der Freiwilligen des Ersten Weltkriegs errichtet. Die Nazis zerstörten sie 1940, doch nach der Befreiung wurde sie wieder aufgebaut. Heute ist sie eines der beliebtesten Nationalsymbole Luxemburgs.",
    lb: "D'Gëlle Fra gouf 1923 opgeriicht fir d'Fräiwëlleger vum Éischte Weltkrich ze éieren. D'Nazien hunn si 1940 zerstéiert, ma si gouf no der Befreiung erëmgebaut. Haut ass si ee vun de geliifste Nationalsymboler vu Lëtzebuerg."
  },
    region: "Luxembourg City",
    link: "https://www.visitluxembourg.com/en/place/site/golden-lady-monument-constitution-square"
  },
  {
    id: "notre-dame",
    level: "tourist",
    subLevel: 1,
    name: {
    en: "Notre-Dame Cathedral Luxembourg City",
    fr: "Cathédrale Notre-Dame de Luxembourg",
    de: "Kathedrale Notre-Dame Luxemburg-Stadt",
    lb: "Kathedral Notre-Dame Lëtzebuerg-Stad"
  },
    coords: [49.6113, 6.1289],
    emoji: "⛪",
    clue: {
    en: "In the heart of Luxembourg's old town, this early 17th-century cathedral was built by Jesuits and is the country's only cathedral. Every May, thousands of pilgrims gather here for the Octave — a two-week veneration of the Consolatrix Afflictorum.",
    fr: "Au cœur de la vieille ville de Luxembourg, cette cathédrale du début du XVIIe siècle, construite par les Jésuites, est la seule cathédrale du pays. Chaque mois de mai, des milliers de pèlerins s'y retrouvent pour l'Octave — une vénération de deux semaines de la Consolatrix Afflictorum.",
    de: "Im Herzen der Luxemburger Altstadt wurde diese Kathedrale aus dem frühen 17. Jahrhundert von Jesuiten erbaut und ist die einzige Kathedrale des Landes. Jeden Mai versammeln sich hier Tausende von Pilgern zur Oktav — einer zweiwöchigen Verehrung der Consolatrix Afflictorum.",
    lb: "Am Häerz vun der Aler Stad vu Lëtzebuerg, gouf dës fréi 17. Joerhonnert Kathedral vun de Jesuiten gebaut a ass déi eenzeg Kathedral vum Land. All Mee versammelen sech hei Dausende vu Pilgere fir d'Oktav — eng zwou-Wochen-Verehrung vun der Consolatrix Afflictorum."
  },
    fact: {
    en: "Notre-Dame Cathedral was built between 1613 and 1621 in late Gothic/early Renaissance style. It houses a revered statue of Our Lady of Luxembourg, patroness of the Grand Duchy, venerated during the annual Octave pilgrimage.",
    fr: "La cathédrale Notre-Dame fut construite entre 1613 et 1621 dans un style gothique tardif/début Renaissance. Elle abrite une statue vénérée de Notre-Dame du Luxembourg, patronne du Grand-Duché.",
    de: "Die Kathedrale Notre-Dame wurde zwischen 1613 und 1621 im spätgotisch/frühneuzeitlichen Stil erbaut. Sie beherbergt eine verehrte Statue Unserer Lieben Frau von Luxemburg, Schutzpatronin des Großherzogtums.",
    lb: "D'Kathedral Notre-Dame gouf tëschent 1613 a 1621 am spéitgotesche/fréimodernen Stil gebaut. Si beherbergt eng veréierter Statu vun Eis Léif Fra vu Lëtzebuerg, Schutzpatronin vum Groussherzogtum."
  },
    region: "Luxembourg City",
    link: "https://www.visitluxembourg.com/en/place/site/notre-dame-cathedral"
  },
  {
    id: "grund",
    level: "tourist",
    subLevel: 2,
    name: {
    en: "The Grund",
    fr: "Le Grund",
    de: "Das Grund",
    lb: "De Grond"
  },
    coords: [49.6087, 6.1340],
    emoji: "🌊",
    clue: {
    en: "Deep in the valley of the Alzette river, far below Luxembourg City's plateau, lies this charming historic quarter. Its cobbled lanes, old mill buildings, and the Abbaye de Neumünster cultural centre make it one of the city's most picturesque neighbourhoods.",
    fr: "Au fond de la vallée de l'Alzette, bien en contrebas du plateau de Luxembourg-Ville, se trouve ce charmant quartier historique. Ses ruelles pavées, ses anciens moulins et l'Abbaye de Neumünster en font l'un des quartiers les plus pittoresques de la capitale.",
    de: "Tief im Alzettetal, weit unterhalb des Plateaus von Luxemburg-Stadt, liegt dieses charmante historische Viertel. Seine gepflasterten Gassen, alten Mühlengebäude und die Abtei Neumünster als Kulturzentrum machen es zu einem der malerischsten Stadtteile der Hauptstadt.",
    lb: "Déif am Alzette-Daal, wäit ënner dem Plateau vu Lëtzebuerg-Stad, läit dëst charmant historescht Quartier. Seng gepflasterte Gaassen, al Millen a d'Abtei Neumünster als Kulturzentrum maache se zu engem vun de pittoreskste Quartiere vun der Haaptstad."
  },
    fact: {
    en: "The Grund is Luxembourg City's lowest and oldest district. The Abbaye de Neumünster, founded in the 7th century, is now a vibrant cultural centre. The area is also known for its lively café and restaurant scene.",
    fr: "Le Grund est le quartier le plus bas et le plus ancien de Luxembourg-Ville. L'Abbaye de Neumünster, fondée au VIIe siècle, est aujourd'hui un centre culturel dynamique. Le quartier est aussi connu pour ses cafés et restaurants animés.",
    de: "Das Grund ist der niedrigste und älteste Stadtteil Luxemburg-Stadts. Die Abtei Neumünster, im 7. Jahrhundert gegründet, ist heute ein lebendiges Kulturzentrum. Das Viertel ist auch für seine lebhafte Café- und Restaurantszene bekannt.",
    lb: "De Grond ass den ënneschten a eelste Stadtteil vu Lëtzebuerg-Stad. D'Abtei Neumünster, am 7. Joerhonnert gegrënnt, ass haut e lieweg Kulturzentrum. D'Quartier ass och bekannt fir seng lieweg Kaffi- a Restaurantszene."
  },
    region: "Luxembourg City",
    link: "https://www.visitluxembourg.com/en/place/site/neumunster-abbey"
  },
  {
    id: "dudelange",
    level: "tourist",
    subLevel: 5,
    name: {
    en: "Dudelange",
    fr: "Dudelange",
    de: "Düdelingen",
    lb: "Diddeleng"
  },
    coords: [49.4783, 6.0863],
    emoji: "📸",
    clue: {
    en: "In southern Luxembourg near the French border, this former steel town reinvented itself as a cultural hub. It is home to the Centre national de l'audiovisuel and the Kulturfabrik, one of Luxembourg's leading alternative cultural venues.",
    fr: "Dans le sud du Luxembourg, près de la frontière française, cette ancienne ville sidérurgique s'est réinventée en pôle culturel. Elle abrite le Centre national de l'audiovisuel et la Kulturfabrik, l'une des principales salles culturelles alternatives du Luxembourg.",
    de: "Im Süden Luxemburgs nahe der französischen Grenze hat sich diese ehemalige Stahlstadt zu einem Kulturzentrum gewandelt. Sie beherbergt das Centre national de l'audiovisuel und die Kulturfabrik, eine der führenden alternativen Kulturstätten Luxemburgs.",
    lb: "Am Süden vu Lëtzebuerg no bei der fransäischer Grenz huet dës eemoleg Stolstad sech zu engem Kulturzentrum ëmgeformt. Si beherbergt dat Centre national de l'audiovisuel an d'Kulturfabrik, ee vun de féierenden alternativen Kulturplazen vu Lëtzebuerg."
  },
    fact: {
    en: "Dudelange hosts the CNA (Centre national de l'audiovisuel), which preserves Luxembourg's photographic and film heritage. The photographer Edward Steichen grew up in nearby Bivange.",
    fr: "Dudelange accueille le CNA (Centre national de l'audiovisuel), qui préserve le patrimoine photographique et cinématographique du Luxembourg. Le photographe Edward Steichen a grandi dans le village voisin de Bivange.",
    de: "Düdelingen beherbergt das CNA (Centre national de l'audiovisuel), das das fotografische und filmische Erbe Luxemburgs bewahrt. Der Fotograf Edward Steichen wuchs im nahe gelegenen Bivange auf.",
    lb: "Diddeleng beherbergt dat CNA (Centre national de l'audiovisuel), dat d'fotografescht a filmescht Ierwen vu Lëtzebuerg erhält. De Fotograf Edward Steichen ass am Nopeschduerf Bivange opgewuess."
  },
    region: "Esch",
    link: "https://www.visitluxembourg.com/en/city/dudelange"
  },
  {
    id: "bettembourg",
    level: "wanderer",
    subLevel: 1,
    name: {
    en: "Parc Merveilleux, Bettembourg",
    fr: "Parc Merveilleux, Bettembourg",
    de: "Parc Merveilleux, Bettemburg",
    lb: "Parc Merveilleux, Beetebuerg"
  },
    coords: [49.5205, 6.1024],
    emoji: "🦚",
    clue: {
    en: "In central-southern Luxembourg, this beloved park has been delighting families since 1954 with its fairy-tale-themed attractions, free-roaming animals (including peacocks and deer), and playgrounds inspired by fairy tales. It is one of the country's most visited outdoor attractions.",
    fr: "Dans le centre-sud du Luxembourg, ce parc bien-aimé enchante les familles depuis 1954 avec ses attractions féeriques, ses animaux en liberté (paons, cerfs) et ses aires de jeux inspirées des contes de fées. C'est l'une des attractions de plein air les plus visitées du pays.",
    de: "Im Zentrum-Süden Luxemburgs begeistert dieser beliebte Park Familien seit 1954 mit märchenhaften Attraktionen, freilaufenden Tieren (darunter Pfauen und Rehe) und Spielplätzen nach Märchenmotiven. Er ist eine der meistbesuchten Freiluftattraktionen des Landes.",
    lb: "Am Zentrum-Süden vu Lëtzebuerg begeeschtert dëse geliibte Parc Famillen zënter 1954 mat Faeréitesattraktiounen, fräilafende Bieren (dorënner Päipen a Wëller) a Spillplazen aus Mäerchenmotiver. Hien ass eng vun de meeschte besichte Fräiloftattraktiounen am Land."
  },
    fact: {
    en: "Parc Merveilleux has been a family favourite since 1954. Set in beautiful parkland, it features animals, fairy-tale scenes, rides, and attractions. Over 200,000 visitors come each year.",
    fr: "Le Parc Merveilleux est un lieu de prédilection des familles depuis 1954. Situé dans un beau parc, il propose des animaux, des scènes de contes, des manèges et des attractions. Plus de 200 000 visiteurs s'y rendent chaque année.",
    de: "Der Parc Merveilleux ist seit 1954 ein Familienklassiker. Im schönen Parkgelände gibt es Tiere, Märchenszenen, Fahrgeschäfte und Attraktionen. Jährlich kommen über 200.000 Besucher.",
    lb: "De Parc Merveilleux ass zënter 1954 e Familljefavorit. Am schéine Parc gi Bieren, Mäerchenszennen, Achterbunn a Attraktiounen ugebueden. All Joer kommen iwwer 200.000 Besucher."
  },
    region: "Esch",
    link: "https://www.visitluxembourg.com/en/place/site/parc-merveilleux"
  },
  {
    id: "ettelbruck",
    level: "wanderer",
    subLevel: 1,
    name: {
    en: "Ettelbruck",
    fr: "Ettelbruck",
    de: "Ettelbrück",
    lb: "Ettelbréck"
  },
    coords: [49.8476, 6.1005],
    emoji: "🎖️",
    clue: {
    en: "Known as the \"Patton City,\" this crossroads town in central-north Luxembourg honours the American general whose 3rd Army helped liberate it during the Battle of the Bulge in late 1944. Every year a General Patton Memorial Day parade is held here.",
    fr: "Connue sous le nom de \"Patton City\", cette ville carrefour du centre-nord du Luxembourg rend hommage au général américain dont la 3e armée contribua à la libérer lors de la Bataille des Ardennes fin 1944. Un défilé commémoratif General Patton Memorial Day y est organisé chaque année.",
    de: "Als „Patton-Stadt\" bekannt, ehrt dieser Kreuzungsort im Zentrum-Norden Luxemburgs den amerikanischen General, dessen 3. Armee ihn während der Ardennenoffensive Ende 1944 befreite. Jedes Jahr findet hier eine Gedenkparade zum General Patton Memorial Day statt.",
    lb: "Bekannt als „Patton-Stad\", éiert dëst Kreuzungsstaedtchen am Zentrum-Norde vu Lëtzebuerg de amerikaneschen General, deem seng 3. Arméi et während der Ardennenoffensiv Enn 1944 befreit huet. All Joer gëtt hei eng Gedenkprozessioun zum General Patton Memorial Day ofgehalen."
  },
    fact: {
    en: "Ettelbruck holds a General Patton Memorial Day every July, honouring General George S. Patton whose 3rd Army helped liberate the town during the Battle of the Bulge in late 1944. A statue of Patton stands in the town square.",
    fr: "Ettelbruck organise chaque juillet un General Patton Memorial Day en l'honneur du général George S. Patton, dont la 3e armée contribua à libérer la ville lors de la Bataille des Ardennes fin 1944. Une statue de Patton se dresse sur la place principale.",
    de: "Ettelbrück veranstaltet jeden Juli einen General Patton Memorial Day zu Ehren von General George S. Patton, dessen 3. Armee die Stadt während der Ardennenoffensive Ende 1944 befreite. Eine Patton-Statue steht auf dem Stadtplatz.",
    lb: "Ettelbréck organiséiert all Juli e General Patton Memorial Day fir d'Éier vum General George S. Patton, deem seng 3. Arméi d'Stad während der Ardennenoffensiv Enn 1944 befreit huet. Eng Patton-Statu steet op dem Stadtplatz."
  },
    region: "Diekirch",
    link: "https://www.visitluxembourg.com/en/city/ettelbruck"
  },
  {
    id: "grevenmacher",
    level: "tourist",
    subLevel: 5,
    name: {
    en: "Grevenmacher",
    fr: "Grevenmacher",
    de: "Grevenmacher",
    lb: "Greiwemaacher"
  },
    coords: [49.6802, 6.4403],
    emoji: "🦋",
    clue: {
    en: "On the banks of the Moselle river in eastern Luxembourg, this wine-producing town is also home to one of Europe's largest butterfly gardens, where hundreds of free-flying tropical butterflies surround visitors in a glass greenhouse.",
    fr: "Sur les rives de la Moselle dans l'est du Luxembourg, cette ville viticole abrite également l'un des plus grands jardins de papillons d'Europe, où des centaines de papillons tropicaux s'envolent librement autour des visiteurs dans une serre en verre.",
    de: "Am Ufer der Mosel im Osten Luxemburgs beherbergt diese Weinstadt auch einen der größten Schmetterlingsparks Europas, wo hunderte frei fliegende Tropenschmetterlinge die Besucher in einem Glasgewächshaus umgeben.",
    lb: "Um Ufier vun der Musel am Oste vu Lëtzebuerg beherbergt dës Wäinstad och ee vun de gréisste Päipertsgäert vun Europa, wou Honnerte fräi fléiend tropescher Päipert d'Besucher an engem Glasgewächshaus ëmginn."
  },
    fact: {
    en: "Grevenmacher's Butterfly Garden (Schmetterlingsgarten) houses over 400 exotic butterfly species in a heated tropical greenhouse. The town is also a key hub of Luxembourg's Moselle wine route.",
    fr: "Le jardin des papillons (Schmetterlingsgarten) de Grevenmacher abrite plus de 400 espèces de papillons exotiques dans une serre tropicale chauffée. La ville est aussi un hub de la route des vins de la Moselle luxembourgeoise.",
    de: "Der Schmetterlingspark (Schmetterlingsgarten) in Grevenmacher beherbergt über 400 exotische Schmetterlingsarten in einem beheizten Tropengewächshaus. Die Stadt ist auch ein wichtiger Knotenpunkt der luxemburgischen Moselweinstraße.",
    lb: "De Päipertsgaart (Schmetterlingsgarten) zu Greiwemaacher beherbergt iwwer 400 exotesch Päipertsarten an engem behëtzte Tropikgewächshaus. D'Stad ass och e wichtege Knotenpunkt vun der lëtzebuerger Muselwäistrooss."
  },
    region: "Grevenmacher",
    link: "https://www.visitluxembourg.com/en/place/site/grevenmacher-butterfly-garden"
  },
  {
    id: "wormeldange",
    level: "wanderer",
    subLevel: 1,
    name: {
    en: "Wormeldange",
    fr: "Wormeldange",
    de: "Wormeldingen",
    lb: "Wuermeldeng"
  },
    coords: [49.6175, 6.4016],
    emoji: "🍇",
    clue: {
    en: "This small wine village on the Moselle in eastern Luxembourg is famous for its Auxerrois and Pinot Gris grapes. Terraced vineyards climb the hillside behind the village, and the local cooperative winery is one of Luxembourg's most respected.",
    fr: "Ce petit village viticole sur la Moselle dans l'est du Luxembourg est réputé pour ses raisins Auxerrois et Pinot Gris. Des vignobles en terrasses s'accrochent à la colline derrière le village, et la cave coopérative locale est l'une des plus respectées du Luxembourg.",
    de: "Dieses kleine Weindorf an der Mosel im Osten Luxemburgs ist für seine Auxerrois- und Pinot-Gris-Trauben berühmt. Terrassenförmig angelegte Weinberge erklimmen den Hang hinter dem Dorf, und die örtliche Genossenschaftskellerei gehört zu den angesehensten Luxemburgs.",
    lb: "Dëst klenge Wäinduerf un der Musel am Oste vu Lëtzebuerg ass berüümt fir seng Auxerrois- a Pinot-Gris-Drauwen. Terrasséiert Wéngerten klammen den Hiwwel hannert dem Duerf erop, an d'lokal Genossenschaftskellerei ass eng vun de respektéiersten vu Lëtzebuerg."
  },
    fact: {
    en: "Wormeldange is the heart of Luxembourg's Auxerrois grape production. The Vinsmoselle cooperative, founded in 1921, is the country's largest wine producer and has its main winery here.",
    fr: "Wormeldange est le cœur de la production d'Auxerrois au Luxembourg. La coopérative Vinsmoselle, fondée en 1921, est le plus grand producteur de vin du pays et y possède sa cave principale.",
    de: "Wormeldingen ist das Herz der luxemburgischen Auxerrois-Weinproduktion. Die 1921 gegründete Genossenschaft Vinsmoselle ist der größte Weinproduzent des Landes und betreibt hier ihre Hauptkellerei.",
    lb: "Wuermeldeng ass d'Häerz vun der lëtzebuerger Auxerrois-Wäinproduktioun. D'Vinsmoselle Genossenschaft, 1921 gegrënnt, ass de gréisste Wäinproduzent vum Land a huet hei hir Haaptkellerei."
  },
    region: "Grevenmacher",
    link: "https://www.visitluxembourg.com/en/country/moselle"
  },
  {
    id: "rumelange",
    level: "wanderer",
    subLevel: 1,
    name: {
    en: "Rumelange Mining Museum",
    fr: "Musée de la Mine, Rumelange",
    de: "Bergbaumuseum Rümelingen",
    lb: "Minettmusée Rëmeleng"
  },
    coords: [49.4638, 5.9439],
    emoji: "⛏️",
    clue: {
    en: "In the heart of the southern Minette iron-ore basin, this museum lets visitors descend into a real former iron mine. The subterranean galleries and original equipment bring Luxembourg's industrial past vividly to life.",
    fr: "Au cœur du bassin minier du Minett dans le sud, ce musée permet aux visiteurs de descendre dans une ancienne mine de fer. Les galeries souterraines et les équipements d'origine font revivre de manière saisissante le passé industriel du Luxembourg.",
    de: "Im Herzen des südlichen Minette-Eisenerzgebiets ermöglicht dieses Museum den Besuchern, in eine echte ehemalige Eisengrube hinabzusteigen. Die unterirdischen Stollen und Originalgeräte lassen Luxemburgs industrielle Vergangenheit lebendig werden.",
    lb: "Am Häerz vum südleche Minette-Äerztbasin erlaabt dëse Musée de Besucher, an eng echt eemoleg Äerztgruf erofzeklammen. D'ënnerierdesch Stollen an d'Originalausrüstung bréngen Lëtzebuerg seng industriell Vergaangenheet lieweg op."
  },
    fact: {
    en: "The National Mining Museum in Rumelange allows visitors to explore authentic mine galleries and ride a mine train underground. The Minette basin once supplied iron ore to furnaces across Europe.",
    fr: "Le Musée national des mines de Rumelange permet aux visiteurs d'explorer d'authentiques galeries et de prendre un train minier souterrain. Le bassin du Minett fournissait autrefois du minerai de fer aux hauts fourneaux de toute l'Europe.",
    de: "Das Nationale Bergbaumuseum in Rümelingen ermöglicht es, authentische Minenstollen zu erkunden und mit einem Grubenbahnwagen unter die Erde zu fahren. Das Minette-Becken lieferte einst Eisenerz an Hochöfen in ganz Europa.",
    lb: "De Nationalmusée fir Biergbaugeschicht zu Rëmeleng erlaabt d'Entdeckung vun authentesche Gruftstollen an d'Fahrt mat engem Gruftbunnwunn ënner d'Äerd. D'Minette-Becken huet eemol Äerzt fir Héichiewen an ganz Europa geliwwert."
  },
    region: "Esch",
    link: "https://www.visitluxembourg.com/en/place/museum/national-mining-museum"
  },
  {
    id: "useldange",
    level: "wanderer",
    subLevel: 2,
    name: {
    en: "Useldange Castle",
    fr: "Château d'Useldange",
    de: "Burg Useldingen",
    lb: "Buerg Useldeng"
  },
    coords: [49.7615, 5.9861],
    emoji: "🏰",
    clue: {
    en: "This well-preserved medieval tower house stands above a quiet village in western Luxembourg. Unlike many Luxembourg castles, parts of the interior can still be visited, and the surrounding area is dotted with hiking trails through the Attert valley.",
    fr: "Cette tour médiévale bien préservée domine un village tranquille de l'ouest du Luxembourg. Contrairement à beaucoup de châteaux luxembourgeois, une partie de l'intérieur est encore accessible. Les environs sont parsemés de sentiers de randonnée dans la vallée de l'Attert.",
    de: "Dieses gut erhaltene mittelalterliche Turmhaus überragt ein ruhiges Dorf im Westen Luxemburgs. Anders als viele luxemburgische Burgen können Teile des Inneren noch besichtigt werden. Die Umgebung ist von Wanderwegen durch das Attert-Tal durchzogen.",
    lb: "Dësen immens gutt erhaltene mëttelalterleche Tuermhaus dominéiert e rouegt Duerf im Westen vu Lëtzebuerg. Onlëschent vill lëtzebuerger Buergen, kann een Deel vum Interieur nach ëmmer besicht ginn, an d'Ëmgéigend ass mat Wanderweeër duerch dat Attert-Daal iwwersait."
  },
    fact: {
    en: "Useldange Castle dates to the 12th century. The keep and part of the curtain wall are remarkably intact. The castle overlooks the Attert river and the peaceful village of Useldange below.",
    fr: "Le château d'Useldange date du XIIe siècle. Le donjon et une partie du mur d'enceinte sont remarquablement intacts. Le château surplombe la rivière Attert et le paisible village d'Useldange.",
    de: "Die Burg Useldingen stammt aus dem 12. Jahrhundert. Der Bergfried und ein Teil der Ringmauer sind bemerkenswert intakt. Die Burg überblickt den Fluss Attert und das friedliche Dorf Useldingen.",
    lb: "D'Buerg Useldeng staamt aus dem 12. Joerhonnert. De Biergfrid an en Deel vun der Ringmauer sinn bemierkenswäert intakt. D'Buerg iwwerbléckt den Attert-Floss an dat fridlecht Duerf Useldeng ënnert sech."
  },
    region: "Capellen",
    link: "https://www.visitluxembourg.com/en/place/site/useldange-castle"
  },
  {
    id: "ansembourg",
    level: "wanderer",
    subLevel: 2,
    name: {
    en: "Ansembourg Castle",
    fr: "Château d'Ansembourg",
    de: "Schloss Ansembourg",
    lb: "Schlass Ansembuer"
  },
    coords: [49.7110, 6.0213],
    emoji: "🌳",
    clue: {
    en: "In the forested Eisch valley in central Luxembourg, this elegant 17th-century château still belongs to a noble family. Its formal French gardens, terraced fountains, and surrounding woodland make it one of the most picturesque estates in the country.",
    fr: "Dans la forêt de la vallée de l'Eisch au centre du Luxembourg, cet élégant château du XVIIe siècle appartient encore à une famille noble. Ses jardins à la française, ses fontaines en terrasses et ses bois environnants en font l'un des domaines les plus pittoresques du pays.",
    de: "Im bewaldeten Eischtal im Zentrum Luxemburgs gehört dieses elegante Schloss aus dem 17. Jahrhundert noch einer Adelsfamilie. Seine französischen Gärten, terrassenförmigen Brunnen und das umliegende Waldland machen es zu einem der pittoresksten Güter des Landes.",
    lb: "Am bewaldete Eisch-Daal am Zentrum vu Lëtzebuerg gehéiert dëst elegant Schlass aus dem 17. Joerhonnert nach ëmmer enger Adeligefamill. Seng franséisch Formalgäert, Terrassebrunnen an d'Bëschumgéigend maache se zu engem vun de pittoreskste Guiter vum Land."
  },
    fact: {
    en: "Ansembourg Old Castle (12th c.) and New Castle (17th c.) stand together in the Eisch valley. The gardens of the new castle were laid out in the French formal style and are open to visitors.",
    fr: "Le vieux château d'Ansembourg (XIIe s.) et le nouveau château (XVIIe s.) se dressent ensemble dans la vallée de l'Eisch. Les jardins du nouveau château, aménagés dans le style français formel, sont ouverts aux visiteurs.",
    de: "Das Alte Schloss Ansembourg (12. Jh.) und das Neue Schloss (17. Jh.) stehen gemeinsam im Eischtal. Die Gärten des neuen Schlosses wurden im französischen Formalstil angelegt und sind für Besucher geöffnet.",
    lb: "D'Aal Schlass Ansembuer (12. Jh.) an dat Neit Schlass (17. Jh.) stinn zesummen am Eisch-Daal. D'Gäert vum neie Schlass goufe am franséische Formalstil ugeluecht a si fir Besucher opgaangen."
  },
    region: "Mersch",
    link: "https://www.visitluxembourg.com/en/place/site/ansembourg-valley"
  },
  {
    id: "hollenfels",
    level: "wanderer",
    subLevel: 2,
    name: {
    en: "Hollenfels Castle",
    fr: "Château de Hollenfels",
    de: "Burg Hollenfels",
    lb: "Buerg Helperknapp"
  },
    coords: [49.7501, 6.0451],
    emoji: "🏕️",
    clue: {
    en: "Overlooking the Eisch valley in central Luxembourg, this 12th-century castle was restored in the 19th century and now serves as a youth hostel. It is surrounded by hiking trails and is a popular base for families exploring the region.",
    fr: "Surplombant la vallée de l'Eisch dans le centre du Luxembourg, ce château du XIIe siècle a été restauré au XIXe siècle et sert désormais d'auberge de jeunesse. Entouré de sentiers de randonnée, il est une base prisée des familles explorant la région.",
    de: "Mit Blick auf das Eischtal im Zentrum Luxemburgs wurde diese Burg aus dem 12. Jahrhundert im 19. Jahrhundert restauriert und dient heute als Jugendherberge. Umgeben von Wanderwegen ist sie eine beliebte Basis für Familien, die die Region erkunden.",
    lb: "Mat Bléck op d'Eisch-Daal am Zentrum vu Lëtzebuerg gouf dës Buerg aus dem 12. Joerhonnert am 19. Joerhonnert restauréiert a déngt haut als Jugendherberg. Ëmginn vu Wanderweeër, ass se eng populär Basis fir Famillen, déi d'Regioun entdecken."
  },
    fact: {
    en: "Hollenfels Castle is one of Luxembourg's oldest medieval fortresses. Converted into a youth hostel, it offers budget accommodation with a medieval atmosphere. The Eisch valley trails are right at the doorstep.",
    fr: "Le château de Hollenfels est l'une des plus anciennes forteresses médiévales du Luxembourg. Transformé en auberge de jeunesse, il offre un hébergement à petit prix dans une atmosphère médiévale. Les sentiers de la vallée de l'Eisch sont tout proches.",
    de: "Die Burg Hollenfels ist eine der ältesten mittelalterlichen Festungen Luxemburgs. Zur Jugendherberge umgebaut, bietet sie preiswerte Unterkünfte mit mittelalterlicher Atmosphäre. Die Wanderwege des Eischtals liegen direkt vor der Tür.",
    lb: "D'Buerg Helperknapp ass eng vun de eelste mëttelalterleche Festungen vu Lëtzebuerg. Als Jugendherberg ëmgebaut, bitt se preisgënschteg Ënnerkonft mat mëttelalterlecher Atmosphär. D'Wanderweeër vum Eisch-Daal sinn direkt virun der Dier."
  },
    region: "Mersch",
    link: "https://www.visitluxembourg.com/en/place/site/hollenfels-castle"
  },
  {
    id: "colpach",
    level: "wanderer",
    subLevel: 2,
    name: {
    en: "Château de Colpach",
    fr: "Château de Colpach",
    de: "Schloss Colpach",
    lb: "Schlass Colpach"
  },
    coords: [49.8203, 5.9178],
    emoji: "🎭",
    clue: {
    en: "Hidden in the northern forests near the Belgian border, this château and its surrounding park became a gathering place for European artists and intellectuals in the early 20th century, hosted by Luxembourg's most famous industrialist family. The sculptor Auguste Rodin visited here.",
    fr: "Caché dans les forêts du nord près de la frontière belge, ce château et son parc devinrent au début du XXe siècle un lieu de rassemblement pour les artistes et les intellectuels européens, accueillis par la famille industrielle la plus célèbre du Luxembourg. Le sculpteur Auguste Rodin y séjourna.",
    de: "In den nördlichen Wäldern nahe der belgischen Grenze versteckt, wurde dieses Schloss und sein Park im frühen 20. Jahrhundert zum Treffpunkt europäischer Künstler und Intellektueller, eingeladen von Luxemburgs berühmtester Industriellenfamilie. Der Bildhauer Auguste Rodin besuchte es.",
    lb: "Verstoppt an de Bëscher vum Norden no bei der belgescher Grenz, gouf dëst Schlass an seng Parc am fréien 20. Joerhonnert e Versammlungsplaz fir europäesch Kënschtler an Intellektuell, agelueden vun der berüümtster Industriellfamill vu Lëtzebuerg. De Bildhaier Auguste Rodin huet et besicht."
  },
    fact: {
    en: "Colpach was the estate of Emile and Aline Mayrisch, who hosted luminaries including André Gide, Jean Schlumberger, and Auguste Rodin. The park and chapel are open to visitors today.",
    fr: "Colpach fut le domaine d'Emile et Aline Mayrisch, qui y reçurent des personnalités comme André Gide, Jean Schlumberger et Auguste Rodin. Le parc et la chapelle sont ouverts aux visiteurs aujourd'hui.",
    de: "Colpach war das Gut von Emile und Aline Mayrisch, die Persönlichkeiten wie André Gide, Jean Schlumberger und Auguste Rodin empfingen. Park und Kapelle sind heute für Besucher geöffnet.",
    lb: "Colpach war d'Besëtz vun Emile an Aline Mayrisch, déi Perséinlechkeeten wéi André Gide, Jean Schlumberger a Auguste Rodin empfaangen hunn. De Parc an d'Kapell sinn haut fir Besucher opgaangen."
  },
    region: "Redange",
    link: "https://www.visitluxembourg.com/en/place/site/colpach-estate"
  },
  {
    id: "brandenbourg",
    level: "wanderer",
    subLevel: 2,
    name: {
    en: "Brandenbourg Castle",
    fr: "Château de Brandenbourg",
    de: "Burg Brandenbourg",
    lb: "Buerg Brandenbuer"
  },
    coords: [49.9574, 6.0809],
    emoji: "🏯",
    clue: {
    en: "In the wooded hills of the northern Ardennes, the ruins of this 13th-century castle overlook a peaceful valley near a small village. The site is part of a scenic hiking loop through oak and beech forests typical of this unspoilt part of Luxembourg.",
    fr: "Dans les collines boisées des Ardennes du nord, les ruines de ce château du XIIIe siècle dominent une paisible vallée près d'un petit village. Le site fait partie d'une boucle de randonnée pittoresque à travers les forêts de chênes et de hêtres typiques de cette partie préservée du Luxembourg.",
    de: "In den bewaldeten Hügeln der nördlichen Ardennen überblicken die Ruinen dieser Burg aus dem 13. Jahrhundert ein friedliches Tal nahe einem kleinen Dorf. Der Ort ist Teil einer malerischen Wanderschleife durch Eichen- und Buchenwälder.",
    lb: "An de bewaldete Hiwwele vun den nordleche Ardennen iwwerblécken d'Ruinen vun dëser Buerg aus dem 13. Joerhonnert e fridlecht Daal no bei engem klenge Duerf. De Site ass Deel vun enger malerischer Wanderschleif duerch Eech- a Buchebëscher."
  },
    fact: {
    en: "Brandenbourg Castle was built in the 13th century and gradually fell into ruin after the 17th century. Today its ivy-clad towers and walls rise dramatically from the surrounding forest, offering a romantic ruin experience.",
    fr: "Le château de Brandenbourg fut construit au XIIIe siècle et tomba progressivement en ruine après le XVIIe siècle. Aujourd'hui ses tours et murailles couvertes de lierre surgissent dramatiquement de la forêt environnante.",
    de: "Die Burg Brandenbourg wurde im 13. Jahrhundert erbaut und verfiel nach dem 17. Jahrhundert allmählich. Heute erheben sich ihre efeuumrankten Türme und Mauern dramatisch aus dem umliegenden Wald.",
    lb: "D'Buerg Brandenbuer gouf am 13. Joerhonnert gebaut a verfill no dem 17. Joerhonnert lues a lues. Haut erhiewe sech hir efeubedeckte Tierm an d'Maueren dramatesch aus dem ëmlegende Bësch."
  },
    region: "Diekirch",
    link: "https://www.visitluxembourg.com/en/place/site/brandenbourg-castle"
  },
  {
    id: "eisch-valley",
    level: "wanderer",
    subLevel: 3,
    name: {
    en: "Eisch Valley",
    fr: "Vallée de l'Eisch",
    de: "Eischtal",
    lb: "Eisch-Daal"
  },
    coords: [49.7021, 6.0074],
    emoji: "🌿",
    clue: {
    en: "Sometimes called the \"Valley of the Seven Castles,\" this lush valley in western Luxembourg is threaded by a river and a hiking trail that passes the ruins and towers of seven medieval fortresses within a short distance. It is one of the most scenic walks in the country.",
    fr: "Parfois appelée la \"Vallée des sept châteaux\", cette vallée verdoyante de l'ouest du Luxembourg est parcourue par une rivière et un sentier qui passe les ruines et les tours de sept forteresses médiévales à faible distance. C'est l'une des promenades les plus pittoresques du pays.",
    de: "Manchmal als „Tal der sieben Burgen\" bezeichnet, durchzieht ein Fluss und ein Wanderweg dieses üppige Tal im Westen Luxemburgs, vorbei an Ruinen und Türmen sieben mittelalterlicher Burgen. Es ist einer der schönsten Spaziergänge des Landes.",
    lb: "Heiansdo „Siwe-Buerge-Daal\" genannt, gëtt dëst üppegt Daal am Weste vu Lëtzebuerg vun engem Floss an engem Wanderweeg duerchgezunn, dee laangs de Ruinen a Tierm vu siwe mëttelalterleche Festungen a kuerzer Distanz passéiert. Et ass ee vun de schéinste Spazéiergäng vum Land."
  },
    fact: {
    en: "The \"Vallée des Sept Châteaux\" (Valley of Seven Castles) follows the Eisch river through Koerich, Ansembourg, Hollenfels, and more. The 37km trail is one of Luxembourg's most rewarding hikes.",
    fr: "La \"Vallée des Sept Châteaux\" suit la rivière Eisch à travers Koerich, Ansembourg, Hollenfels et autres. Le sentier de 37 km est l'une des randonnées les plus gratifiantes du Luxembourg.",
    de: "Das Tal der Sieben Burgen (Vallée des Sept Châteaux) folgt der Eisch durch Koerich, Ansembourg, Hollenfels und weitere. Der 37 km lange Weg ist eine der lohnendsten Wanderungen Luxemburgs.",
    lb: "D'Vallée des Sept Châteaux follegt der Eisch duerch Koerich, Ansembuer, Helperknapp a méi. De 37 km laange Weeg ass eng vun de lohendste Wanderunge vu Lëtzebuerg."
  },
    region: "Capellen",
    link: "https://www.visitluxembourg.com/en/place/site/seven-castles-trail"
  },
  {
    id: "mersch",
    level: "wanderer",
    subLevel: 3,
    name: {
    en: "Mersch",
    fr: "Mersch",
    de: "Mersch",
    lb: "Miersch"
  },
    coords: [49.7488, 6.0944],
    emoji: "🛤️",
    clue: {
    en: "Often called the \"geographic heart of Luxembourg,\" this central town sits where major roads and rivers converge. Near the town centre lies an old Roman villa site, and the surrounding area contains numerous prehistoric tumuli (burial mounds).",
    fr: "Souvent appelée le \"cœur géographique du Luxembourg\", cette ville centrale se situe au carrefour des principales routes et rivières. Près du centre-ville se trouve un ancien site de villa romaine, et les environs recèlent de nombreux tumulus préhistoriques.",
    de: "Oft als „geographisches Herz Luxemburgs\" bezeichnet, liegt diese zentrale Stadt dort, wo wichtige Straßen und Flüsse zusammenkommen. Nahe dem Stadtzentrum befindet sich eine alte römische Villenanlage, und die Umgebung enthält zahlreiche prähistorische Tumuli (Grabhügel).",
    lb: "Dacks als „geographescht Häerz vu Lëtzebuerg\" bezeechent, läit dës zentral Stad do, wou wichteg Stroossen a Flëss zesummekommen. No beim Stadtzentrum befënnt sech eng al réimesch Villasite, an d'Ëmgéigend enthält vill prehistoresch Grabhiwwele (Tumuli)."
  },
    fact: {
    en: "Mersch is geographically at Luxembourg's centre. Nearby are important archaeological sites including the Roman villa of Steinsel and numerous Bronze Age tumuli. The town has been a crossroads since antiquity.",
    fr: "Mersch est géographiquement au centre du Luxembourg. À proximité se trouvent d'importants sites archéologiques, dont la villa romaine de Steinsel et de nombreux tumulus de l'âge du bronze. La ville est un carrefour depuis l'Antiquité.",
    de: "Mersch liegt geographisch im Zentrum Luxemburgs. In der Nähe befinden sich wichtige archäologische Stätten, darunter die Römer-Villa von Steinsel und zahlreiche bronzezeitliche Hügelgräber. Die Stadt ist seit der Antike ein Knotenpunkt.",
    lb: "Miersch läit geographesch am Zentrum vu Lëtzebuerg. An der Nopesch befanne sech wichteg archaeologesch Siten dorënner d'réimesch Villa vu Stesel a vill bronzezäitlech Grabhiwwelen. D'Stad ass säit der Antike e Knotenponng."
  },
    region: "Mersch",
    link: "https://www.visitluxembourg.com/en/city/mersch"
  },
  {
    id: "wasserbillig",
    level: "wanderer",
    subLevel: 3,
    name: {
    en: "Wasserbillig",
    fr: "Wasserbillig",
    de: "Wasserbillig",
    lb: "Waasserbëlleg"
  },
    coords: [49.7163, 6.5003],
    emoji: "🌊",
    clue: {
    en: "At the far eastern tip of Luxembourg, where the Sauer river meets the Moselle at the German border, this town marks the end of the Luxembourg wine route. Its name — meaning \"cheap water\" — is explained by the legend of a Roman soldier who found a spring here.",
    fr: "À l'extrémité orientale du Luxembourg, là où la Sûre rejoint la Moselle à la frontière allemande, cette ville marque la fin de la route des vins du Luxembourg. Son nom — signifiant \"eau bon marché\" — s'explique par la légende d'un soldat romain qui y aurait trouvé une source.",
    de: "An der östlichsten Spitze Luxemburgs, wo die Sauer an der deutschen Grenze in die Mosel mündet, markiert diese Stadt das Ende der luxemburgischen Weinstraße. Ihr Name — „billiges Wasser\" — erklärt sich durch die Legende eines römischen Soldaten, der hier eine Quelle fand.",
    lb: "Un der äischtlechster Spëtzt vu Lëtzebuerg, wou d'Sauer un der däitscher Grenz an d'Musel fléisst, markéiert dës Stad d'Enn vun der lëtzebuerger Wäistrooss. Hire Numm — „bëllegt Waasser\" — gëtt duerch d'Liewen vun engem réimeschen Zaldot erkläert, deen hei eng Quell entdeckt huet."
  },
    fact: {
    en: "Wasserbillig sits at the confluence of the Sauer and Moselle rivers, at the tripoint where Luxembourg meets Germany. It marks the northern end of the 42km Moselle wine route.",
    fr: "Wasserbillig est situé au confluent de la Sûre et de la Moselle, au tripoint entre le Luxembourg et l'Allemagne. Il marque l'extrémité nord de la route des vins de la Moselle longue de 42 km.",
    de: "Wasserbillig liegt am Zusammenfluss von Sauer und Mosel, am Dreiländereck zwischen Luxemburg und Deutschland. Es markiert das nördliche Ende der 42 km langen Moselweinstraße.",
    lb: "Waasserbëlleg läit um Zesummefloss vu Sauer a Musel, um Dreiländerpunkt tëschent Lëtzebuerg an Däitschland. Et markéiert den nërdlechen Enn vun der 42 km laanger Muselwäistrooss."
  },
    region: "Grevenmacher",
    link: "https://www.visitluxembourg.com/en/country/moselle"
  },
  {
    id: "petange",
    level: "wanderer",
    subLevel: 3,
    name: {
    en: "Pétange",
    fr: "Pétange",
    de: "Petingen",
    lb: "Péiteng"
  },
    coords: [49.5578, 5.8758],
    emoji: "🚂",
    clue: {
    en: "In the far southwest, where Luxembourg meets France and Belgium, this town grew up around its railway junction and iron industry. A heritage steam railway runs from here through the former steel country on special event days.",
    fr: "Dans l'extrême sud-ouest, là où le Luxembourg rejoint la France et la Belgique, cette ville s'est développée autour de son nœud ferroviaire et de son industrie du fer. Un chemin de fer touristique à vapeur y circule à travers l'ancien pays minier lors de journées spéciales.",
    de: "Im äußersten Südwesten, wo Luxemburg auf Frankreich und Belgien trifft, wuchs diese Stadt rund um ihren Eisenbahnknoten und die Eisendustrie. Eine Museumsdampfbahn fährt an Sondertagen durch das ehemalige Stahlland.",
    lb: "Am äischtlechste Südwesten, wou Lëtzebuerg op Frankräich a Belgien treffe, huet dës Stad sech ronderëm hire Bahnjunction an d'Äerzindustrie entwéckelt. Eng Museumdampfbunn fiert un spezielle Veranstaltungsdeeg duerch d'eemoleg Stollland."
  },
    fact: {
    en: "Pétange's Fond-de-Gras site preserves Luxembourg's industrial railway heritage, with steam trains running through the former mining landscape. It is also close to the three-country border of Luxembourg, France, and Belgium.",
    fr: "Le site de Fond-de-Gras à Pétange préserve le patrimoine ferroviaire industriel luxembourgeois, avec des trains à vapeur traversant l'ancien paysage minier. La ville est aussi proche de la frontière des trois pays : Luxembourg, France et Belgique.",
    de: "Der Fond-de-Gras in Petingen bewahrt das industrielle Eisenbahnerbe Luxemburgs mit Dampfzügen durch die ehemalige Bergbaulandschaft. Die Stadt liegt auch nahe dem Dreiländerpunkt Luxemburg, Frankreich und Belgien.",
    lb: "D'Fond-de-Gras zu Péiteng erhält Lëtzebuerg seng industriellt Bunn-Ierwen mat Dampflokomotiven duerch d'eemoleg Biergbaulandschaft. D'Stad läit och no beim Dreiländerpunkt vu Lëtzebuerg, Frankräich a Belgien."
  },
    region: "Esch",
    link: "https://www.visitluxembourg.com/en/place/site/fond-de-gras"
  },
  {
    id: "adolphe-bridge",
    level: "tourist",
    subLevel: 2,
    name: {
    en: "Adolphe Bridge",
    fr: "Pont Adolphe",
    de: "Adolphe-Brücke",
    lb: "Adolphe-Bréck"
  },
    coords: [49.6080, 6.1300],
    emoji: "🌉",
    clue: {
    en: "This elegant stone arch bridge spans a deep gorge in Luxembourg City, connecting the old town to the new quarters. When it was completed in 1903, its central arch (85 metres) was the largest stone arch bridge in the world. Today it is one of the city's most photographed landmarks.",
    fr: "Ce beau pont en pierre enjambe une profonde gorge à Luxembourg-Ville, reliant la vieille ville aux nouveaux quartiers. À son achèvement en 1903, son arche centrale (85 mètres) était le plus grand pont en pierre du monde. Aujourd'hui c'est l'un des monuments les plus photographiés de la ville.",
    de: "Diese elegante Steinbogenbrücke überspannt eine tiefe Schlucht in Luxemburg-Stadt und verbindet die Altstadt mit den neuen Vierteln. Bei ihrer Fertigstellung 1903 war ihr Mittelbogen (85 Meter) die größte Steinbogenbrücke der Welt. Heute ist sie eines der meistfotografierten Wahrzeichen der Stadt.",
    lb: "Dës elegant Steenbogenbréck iwwerspannt eng déif Schluucht zu Lëtzebuerg-Stad a verbënnt d'Aal Stad mat den neie Quartieren. Bei hirer Fäerdegstellung 1903 war hire Mëttelbou (85 Meter) déi gréisst Steenbogenbréck vun der Welt. Haut ass si ee vun de meist fotograféierte Monumenter vun der Stad."
  },
    fact: {
    en: "The Adolphe Bridge (Pont Adolphe) was completed in 1903 and named after Grand Duke Adolphe. Its two stone arches span the Pétrusse valley, and its central span of 85m was the largest in the world at the time of construction.",
    fr: "Le pont Adolphe fut achevé en 1903 et nommé d'après le Grand-Duc Adolphe. Ses deux arches en pierre enjambent la vallée de la Pétrusse, et son arche centrale de 85 m était la plus grande du monde lors de sa construction.",
    de: "Die Adolphe-Brücke (Pont Adolphe) wurde 1903 fertiggestellt und nach Großherzog Adolphe benannt. Ihre zwei Steinbögen überspannen das Pétrussetal, und ihr Mittelbogen von 85 m war zum Zeitpunkt des Baus der größte der Welt.",
    lb: "D'Adolphe-Bréck gouf 1903 fäerdeg a no dem Groussherzog Adolphe benannt. Hir zwou Steenbue iwwerspannen dat Péitruss-Daal, an hire Mëttelbou vu 85 m war beim Bau dee gréisste vun der Welt."
  },
    region: "Luxembourg City",
    link: "https://www.visitluxembourg.com/en/place/site/adolphe-bridge"
  },
  {
    id: "luxembourg-airport",
    level: "navigator",
    subLevel: 1,
    name: {
    en: "Luxembourg Airport (Findel)",
    fr: "Aéroport de Luxembourg (Findel)",
    de: "Flughafen Luxemburg (Findel)",
    lb: "Lëtzebuerg Fluchhafen (Findel)"
  },
    coords: [49.6286, 6.2044],
    emoji: "✈️",
    clue: {
    en: "East of Luxembourg City, this is one of Europe's smallest national airports — yet one of the most important air cargo hubs in Europe. A certain large e-commerce company uses it as its European logistics base, making it the busiest cargo airport in the Benelux region.",
    fr: "À l'est de Luxembourg-Ville, c'est l'un des plus petits aéroports nationaux d'Europe — et pourtant l'un des hubs de fret aérien les plus importants du continent. Un grand groupe de commerce électronique y a installé sa base logistique européenne, en faisant le plus grand aéroport de fret du Benelux.",
    de: "Östlich von Luxemburg-Stadt ist dies einer der kleinsten Nationalflughäfen Europas — und doch einer der wichtigsten Luftfrachtdrehkreuze des Kontinents. Ein großer E-Commerce-Konzern nutzt ihn als europäische Logistikbasis und macht ihn zum größten Frachtflughafen der Benelux-Region.",
    lb: "Ëstlech vu Lëtzebuerg-Stad ass dëst ee vun de klengste Nationalfluchhäfen vun Europa — an dach ee vun de wichtegste Loftfracht-Drehkreuzen vum Kontinent. E grousse E-Commerce-Grupp notzt en als europäesche Logistikhaf, wat en zum gréissten Frachtfluchhafen vun de Benelux-Länner mécht."
  },
    fact: {
    en: "Luxembourg Airport (Findel) is Europe's 5th largest cargo airport, handling over 1 million tonnes annually. Amazon, Cargolux, and Luxair make it a critical logistics hub. It opened in 1946.",
    fr: "L'aéroport de Luxembourg (Findel) est le 5e plus grand aéroport de fret d'Europe, traitant plus d'un million de tonnes par an. Amazon, Cargolux et Luxair en font un hub logistique essentiel. Il a ouvert en 1946.",
    de: "Der Flughafen Luxemburg (Findel) ist Europas fünftgrößter Frachtflughafen mit über einer Million Tonnen jährlich. Amazon, Cargolux und Luxair machen ihn zu einem wichtigen Logistikdrehkreuz. Er wurde 1946 eröffnet.",
    lb: "De Lëtzebuerg Fluchhafen (Findel) ass Europas 5. gréissten Frachtfluchhafen mat iwwer enger Millioun Tonnen d'Joer. Amazon, Cargolux a Luxair maachen en zu engem wichtege Logistikdrehkreuz. Hien huet 1946 opgemaach."
  },
    region: "Luxembourg City",
    link: "https://www.lux-airport.lu"
  },
  {
    id: "redange",
    level: "wanderer",
    subLevel: 3,
    name: {
    en: "Rédange-sur-Attert",
    fr: "Rédange-sur-Attert",
    de: "Redingen-an-der-Attert",
    lb: "Réiden"
  },
    coords: [49.7625, 5.8894],
    emoji: "🌾",
    clue: {
    en: "In the rural west of Luxembourg, near the Belgian border, this quiet cantonal capital is surrounded by farmland and gentle hills. The surrounding area is known for its unspoilt landscapes, organic farms, and the nearby Attert valley nature reserve.",
    fr: "Dans l'ouest rural du Luxembourg, près de la frontière belge, cette tranquille capitale cantonale est entourée de terres agricoles et de douces collines. La région est connue pour ses paysages préservés, ses fermes biologiques et la réserve naturelle de la vallée de l'Attert.",
    de: "Im ländlichen Westen Luxemburgs nahe der belgischen Grenze ist diese ruhige Kantonshauptstadt von Ackerland und sanften Hügeln umgeben. Die Umgebung ist bekannt für ihre unberührten Landschaften, ökologische Landwirtschaft und das nahe gelegene Naturschutzgebiet im Attert-Tal.",
    lb: "Am ländleche Weste vu Lëtzebuerg, no bei der belgescher Grenz, ass dës roueg Kantoune-Haaptstad vu Ackerland a sanften Hiwwele ëmginn. D'Regioun ass bekannt fir hir onerréiert Landschaften, bio-Bauernhaff a dat nopescht Naturschutzgebitt am Attert-Daal."
  },
    fact: {
    en: "Rédange-sur-Attert is the administrative capital of Luxembourg's westernmost canton. The surrounding Attert valley is known for its biodiversity, organic farming, and tranquil countryside far from the bustle of the capital.",
    fr: "Rédange-sur-Attert est la capitale administrative du canton le plus occidental du Luxembourg. La vallée de l'Attert environnante est reconnue pour sa biodiversité, son agriculture biologique et sa campagne paisible loin de l'agitation de la capitale.",
    de: "Redingen-an-der-Attert ist der Verwaltungshauptort von Luxemburgs westlichstem Kanton. Das umliegende Attert-Tal ist bekannt für seine Artenvielfalt, ökologische Landwirtschaft und ruhige Landschaft fernab des Hauptstadtrummels.",
    lb: "Réiden ass d'Verwaltungshaaptstad vum westlechste Kanton vu Lëtzebuerg. Dat ëmleegend Attert-Daal ass bekannt fir seng Artevielfalt, bio-Landwirtschaft a roueg Landschaft wäit vum Stress vun der Haaptstad."
  },
    region: "Redange",
    link: "https://www.visitluxembourg.com/en/region/redange"
  },
  {
    id: "viandencity",
    level: "wanderer",
    subLevel: 4,
    name: {
    en: "Vianden Town",
    fr: "Ville de Vianden",
    de: "Stadt Vianden",
    lb: "Stad Veianen"
  },
    coords: [49.9340, 6.2040],
    emoji: "🏘️",
    clue: {
    en: "Beneath the great castle in the Our river valley, this picturesque town of 1,500 inhabitants is one of Luxembourg's most visited. Its medieval streets, Gothic church, and riverside setting inspired writers and artists for centuries — including the French poet who spent time here in exile.",
    fr: "Sous le grand château, dans la vallée de l'Our, cette pittoresque ville de 1 500 habitants est l'une des plus visitées du Luxembourg. Ses rues médiévales, son église gothique et son cadre au bord de la rivière ont inspiré écrivains et artistes pendant des siècles — dont le poète français qui y séjourna en exil.",
    de: "Unterhalb der großen Burg im Our-Tal liegt diese malerische Stadt mit 1.500 Einwohnern — eine der meistbesuchten Luxemburgs. Ihre mittelalterlichen Straßen, die gotische Kirche und die Lage am Flussufer inspirierten Jahrhunderte lang Schriftsteller und Künstler — darunter den französischen Dichter, der hier im Exil lebte.",
    lb: "Ënner der grousser Buerg am Our-Daal läit dës pittoresk Stad mat 1.500 Awunner — eng vun de meist besichte vu Lëtzebuerg. Hir mëttelalterleche Stroossen, gottesch Kierch a Rivière-Silhouette hunn Honnert Joer laang Schrëfteller a Kënschtler inspiréiert — dorënner de franséische Dichter, dee hei am Exil gelieft huet."
  },
    fact: {
    en: "Vianden's old town preserves its medieval street pattern almost intact. Victor Hugo spent several summers here during his Belgian exile, sketching the town and castle and writing about Luxembourg's natural beauty.",
    fr: "La vieille ville de Vianden conserve presque intact son tracé médiéval. Victor Hugo y passa plusieurs étés lors de son exil belge, croquant la ville et le château et écrivant sur la beauté naturelle du Luxembourg.",
    de: "Die Altstadt Vianden bewahrt ihr mittelalterliches Straßenmuster fast unverändert. Victor Hugo verbrachte hier mehrere Sommer im belgischen Exil, zeichnete Stadt und Burg und schrieb über die Naturschönheit Luxemburgs.",
    lb: "D'Aal Stad Veianen huet hir mëttelalterleche Stroossestruktur bal onverännert erhalen. Victor Hugo huet hei méi Summer wärend sengem belgeschen Exil verbruecht, d'Stad an d'Buerg gezeechent a iwwer Lëtzebuerg seng Naturschéinheet geschriwwen."
  },
    region: "Diekirch",
    link: "https://www.visitluxembourg.com/en/city/vianden"
  },
  {
    id: "hesperange",
    level: "wanderer",
    subLevel: 4,
    name: {
    en: "Hesperange",
    fr: "Hesperange",
    de: "Hesperingen",
    lb: "Hesper"
  },
    coords: [49.5771, 6.1571],
    emoji: "🌳",
    clue: {
    en: "Just south of Luxembourg City, along the Alzette river, this municipality contains both residential suburbs and the ruins of a 13th-century castle amid a nature reserve. The Alzette valley here is a green corridor protected as a natural park.",
    fr: "Juste au sud de Luxembourg-Ville, le long de l'Alzette, cette commune abrite à la fois des banlieues résidentielles et les ruines d'un château du XIIIe siècle au milieu d'une réserve naturelle. La vallée de l'Alzette ici est un couloir vert protégé comme parc naturel.",
    de: "Direkt südlich von Luxemburg-Stadt, am Ufer der Alzette, umfasst diese Gemeinde sowohl Wohnviertel als auch die Ruinen einer Burg aus dem 13. Jahrhundert inmitten eines Naturschutzgebiets. Das Alzettetal ist hier ein grüner Korridor, der als Naturpark geschützt ist.",
    lb: "Direkt südlech vu Lëtzebuerg-Stad, laanscht d'Alzette, ëmfaasst dës Gemeng souwuel Wunnsiedlungen als och d'Ruinen vun enger Buerg aus dem 13. Joerhonnert mëtten an engem Naturschutzgebitt. Dat Alzette-Daal hei ass e grénge Korridor, dee als Naturpark geschützt ass."
  },
    fact: {
    en: "Hesperange Castle ruins date to the 13th century and once served as a Luxembourg stronghold. Today the site is a peaceful park overlooking the Alzette valley, popular with local walkers.",
    fr: "Les ruines du château d'Hesperange datent du XIIIe siècle et servaient autrefois de bastion luxembourgeois. Le site est aujourd'hui un parc paisible surplombant la vallée de l'Alzette, apprécié des promeneurs locaux.",
    de: "Die Ruinen von Burg Hesperingen stammen aus dem 13. Jahrhundert und dienten einst als luxemburgische Festung. Heute ist es ein ruhiger Park mit Blick auf das Alzettetal, beliebt bei Spaziergängern aus der Region.",
    lb: "D'Ruinen vun der Hesper-Buerg stammen aus dem 13. Joerhonnert a goudde fréier als lëtzebuerger Festung. Haut ass et e friddleche Parc mat Bléck op dat Alzette-Daal, bei Spaziergänger aus der Regioun populär."
  },
    region: "Luxembourg City",
    link: "https://www.visitluxembourg.com/en/place/site/hesperange-castle"
  },
  {
    id: "consdorf",
    level: "wanderer",
    subLevel: 4,
    name: {
    en: "Consdorf",
    fr: "Consdorf",
    de: "Consdorf",
    lb: "Consdref"
  },
    coords: [49.7729, 6.3448],
    emoji: "🪨",
    clue: {
    en: "Perched on a hill in the Mullerthal region of eastern Luxembourg, this village is a gateway to the most dramatic rock formations of \"Little Switzerland.\" A popular hiking trail from here leads through narrow gorges and past towering sandstone cliffs to neighbouring villages.",
    fr: "Perché sur une colline dans la région du Mullerthal dans l'est du Luxembourg, ce village est une porte d'entrée vers les formations rocheuses les plus spectaculaires de la \"Petite Suisse\". Un sentier de randonnée populaire y conduit à travers des gorges étroites et d'imposantes falaises de grès.",
    de: "Auf einem Hügel in der Mullerthal-Region im Osten Luxemburgs gelegen, ist dieses Dorf ein Tor zu den dramatischsten Felsformationen der „Kleinen Schweiz\". Ein beliebter Wanderweg führt von hier durch enge Schluchten und an mächtigen Sandsteinfelsen vorbei.",
    lb: "Op engem Hiwwel an der Mullerthal-Regioun am Oste vu Lëtzebuerg gelegen, ass dëst Duerf e Porta zu de dramatesche Felsformatiounen vun der „Klengschwäiz\". E populäre Wanderweeg vun hei féiert duerch eng Schluucht a laangs imposante Sandsteenfelsen."
  },
    fact: {
    en: "Consdorf is one of the main starting points for the Mullerthal Trail. The village sits at 400m altitude above the Ernz Noire river, and the surrounding sandstone landscape is unlike anywhere else in Luxembourg.",
    fr: "Consdorf est l'un des principaux points de départ du sentier du Mullerthal. Le village est situé à 400 m d'altitude au-dessus de la rivière Ernz Noire, et le paysage en grès environnant est unique au Luxembourg.",
    de: "Consdorf ist einer der wichtigsten Ausgangspunkte des Mullerthal-Trails. Das Dorf liegt 400 m über dem Fluss Ernz Noire, und die umgebende Sandsteinlandschaft ist einzigartig in Luxemburg.",
    lb: "Consdref ass ee vun de wichtegste Startpunkten fir de Mullerthal-Trail. D'Duerf läit op 400 m Héicht iwwer dem Floss Ernz Noire, an d'ëmleegend Sandsteenlandschaft ass eenzegaarteg a Lëtzebuerg."
  },
    region: "Grevenmacher",
    link: "https://www.visitluxembourg.com/en/place/site/mullerthal-trail"
  },
  {
    id: "castle-des-monts",
    level: "wanderer",
    subLevel: 4,
    name: {
    en: "Meysembourg Castle",
    fr: "Château de Meysembourg",
    de: "Schloss Meysembourg",
    lb: "Schlass Meysembuer"
  },
    coords: [49.8080, 6.2502],
    emoji: "🏰",
    clue: {
    en: "A perfectly preserved 17th-century château-fort stands in a small village in the northern Mullerthal area. Unlike Luxembourg's many ruins, this castle is largely intact and has been carefully restored. Its formal gardens and towers offer one of the best preserved examples of baroque castle architecture in the region.",
    fr: "Un château-fort du XVIIe siècle parfaitement conservé se dresse dans un petit village du nord du Mullerthal. Contrairement aux nombreuses ruines du Luxembourg, ce château est en grande partie intact et a été soigneusement restauré. Il offre l'un des meilleurs exemples d'architecture castrale baroque de la région.",
    de: "Ein vollständig erhaltenes Schloss-Fort aus dem 17. Jahrhundert steht in einem kleinen Dorf im nördlichen Mullerthal. Anders als Luxemburgs viele Ruinen ist dieses Schloss weitgehend intakt und sorgfältig restauriert worden. Es bietet eines der besten erhaltenen Beispiele barocker Schlossarchitektur der Region.",
    lb: "E perfekt erhaltent Schlass-Fort aus dem 17. Joerhonnert steet an engem klenge Duerf am nërdleche Mullerthal. Onlëschent Lëtzebuerg senge ville Ruinen, ass dëst Schlass grousstentdeels intakt a suergfälteg restauréiert. Et bitt ee vun de beschte Beispiller barocker Schlossarchitektur an der Regioun."
  },
    fact: {
    en: "Meysembourg Castle was rebuilt in 1603 and is one of Luxembourg's best-preserved Renaissance castles. It remains a private residence and is visible from the village road, a photogenic jewel in the Mullerthal countryside.",
    fr: "Le château de Meysembourg fut reconstruit en 1603 et est l'un des châteaux Renaissance les mieux conservés du Luxembourg. Il demeure une résidence privée et est visible depuis la route du village.",
    de: "Das Schloss Meysembourg wurde 1603 umgebaut und ist eines der besterhaltenen Renaissanceschlösser Luxemburgs. Es ist nach wie vor eine Privatresidenz und von der Dorfstraße aus sichtbar.",
    lb: "D'Schlass Meysembuer gouf 1603 nei gebaut a gehéiert zu de beschterhaltenste Renaissanceschlässer vu Lëtzebuerg. Et bleibt eng Privatresidenz a kann vun der Duerfsstroos aus gesinn ginn."
  },
    region: "Grevenmacher",
    link: "https://www.visitluxembourg.com/en/place/site/mullerthal-trail"
  },
  {
    id: "our-valley",
    level: "wanderer",
    subLevel: 4,
    name: {
    en: "Our Valley (Vallée de l'Our)",
    fr: "Vallée de l'Our",
    de: "Ourtal",
    lb: "Our-Daal"
  },
    coords: [49.8802, 6.1956],
    emoji: "🏞️",
    clue: {
    en: "Forming the natural border between Luxembourg and Germany in the north, this rugged river valley is one of the wildest and most scenic landscapes in the country. The river flows through deep gorges and wooded slopes, forming part of the Germano-Luxembourg Natural Park.",
    fr: "Formant la frontière naturelle entre le Luxembourg et l'Allemagne dans le nord, cette vallée sauvage est l'un des paysages les plus spectaculaires du pays. La rivière traverse de profondes gorges et des versants boisés, formant une partie du Parc naturel germano-luxembourgeois.",
    de: "Als natürliche Grenze zwischen Luxemburg und Deutschland im Norden ist dieses wilde Flusstal eine der wildesten und malerischsten Landschaften des Landes. Der Fluss fließt durch tiefe Schluchten und bewaldete Hänge als Teil des Deutsch-Luxemburgischen Naturparks.",
    lb: "Als natierleche Grenz tëschent Lëtzebuerg an Däitschland am Norden ass dëst wëllt Floss-Daal eng vun de wëllste a malereschste Landschaften vum Land. De Floss fléisst duerch déif Schluuchten a bewaldete Hängen als Deel vum Däitsch-Lëtzebuerger Naturpark."
  },
    fact: {
    en: "The Our river forms 73km of Luxembourg's border with Germany. The Our Valley is part of the Germano-Luxembourg Natural Park (Naturpark Our), a cross-border protected area noted for its biodiversity and unspoilt scenery.",
    fr: "La rivière Our forme 73 km de la frontière luxembourgeoise avec l'Allemagne. La vallée de l'Our fait partie du Parc naturel germano-luxembourgeois (Naturpark Our), une zone protégée transfrontalière réputée pour sa biodiversité.",
    de: "Die Our bildet 73 km der luxemburgischen Grenze zu Deutschland. Das Ourtal ist Teil des Deutsch-Luxemburgischen Naturparks (Naturpark Our), eines grenzüberschreitenden Schutzgebiets mit hoher Biodiversität.",
    lb: "D'Our bildt 73 km vun der lëtzebuerger Grenz mat Däitschland. Dat Our-Daal ass Deel vum Naturpark Our, engem grenziwwerschreidende Schutzgebitt mat héijer Artenvielfalt."
  },
    region: "Diekirch",
    link: "https://www.visitluxembourg.com/en/region/our-valley"
  },
  {
    id: "steinfort",
    level: "wanderer",
    subLevel: 5,
    name: {
    en: "Steinfort",
    fr: "Steinfort",
    de: "Steinfort",
    lb: "Steefort"
  },
    coords: [49.6629, 5.9237],
    emoji: "🌲",
    clue: {
    en: "Near the Belgian border in western Luxembourg, this small town was home to one of the country's oldest and most famous breweries, which produced beer for over 150 years. Today the former brewery buildings are being repurposed for cultural and commercial use.",
    fr: "Près de la frontière belge dans l'ouest du Luxembourg, cette petite ville abritait l'une des brasseries les plus anciennes et les plus célèbres du pays, qui produisit de la bière pendant plus de 150 ans. Les anciens bâtiments de la brasserie sont aujourd'hui réaffectés à des usages culturels et commerciaux.",
    de: "Nahe der belgischen Grenze im Westen Luxemburgs war diese Kleinstadt Heimat einer der ältesten und bekanntesten Brauereien des Landes, die über 150 Jahre lang Bier produzierte. Die ehemaligen Brauereigebäude werden heute für kulturelle und gewerbliche Zwecke umgenutzt.",
    lb: "No bei der belgescher Grenz am Weste vu Lëtzebuerg war dës kleng Stad Heem vun enger vun de eelste a berüümtste Brassereien vum Land, déi iwwer 150 Joer laang Béier produzéiert huet. D'Brässerei-Gebaier ginn haut fir kulturell a kommerziell Zwecker ëmgenotzt."
  },
    fact: {
    en: "Brasserie Nationale (Bofferding brand) traces its brewing origins to 1764. Now based in Bascharage, it is one of Luxembourg's oldest brewing traditions. Bofferding remains Luxembourg's most popular local beer brand.",
    fr: "La Brasserie Nationale (marque Bofferding) fait remonter ses origines brassicoles à 1764. Aujourd'hui basée à Bascharage, c'est l'une des plus anciennes traditions brassicoles du Luxembourg. Bofferding reste la marque de bière locale la plus populaire du pays.",
    de: "Die Brasserie Nationale (Marke Bofferding) führt ihre Brautradition auf 1764 zurück. Heute in Bascharage ansässig, gehört sie zu den ältesten Brautraditionen Luxemburgs. Bofferding ist nach wie vor die beliebteste lokale Biermarke des Landes.",
    lb: "D'Brasserie Nationale (Marke Bofferding) féiert hir Brautradition op 1764 zeréck. Haut zu Nidderkäerjeng baséiert, gehéiert se zu den eelste Brautraditiounen vu Lëtzebuerg. Bofferding bleift d'populärste lokal Béiermark vum Land."
  },
    region: "Capellen",
    link: "https://www.visitluxembourg.com/en/region/capellen"
  },
  {
    id: "stadtbredimus",
    level: "wanderer",
    subLevel: 5,
    name: {
    en: "Stadtbredimus",
    fr: "Stadtbredimus",
    de: "Stadtbredimus",
    lb: "Stadtbredimus"
  },
    coords: [49.5667, 6.3886],
    emoji: "🍾",
    clue: {
    en: "In a curve of the Moselle river in southeastern Luxembourg, this wine village is the home of a famous sparkling wine producer. The caves carved into the hillside where Crémant de Luxembourg ages are open to visitors, and the riverside terrace offers spectacular views across to Germany.",
    fr: "Dans un méandre de la Moselle dans le sud-est du Luxembourg, ce village viticole est le siège d'un célèbre producteur de vin pétillant. Les caves creusées dans la colline où vieillit le Crémant de Luxembourg sont ouvertes aux visiteurs, et la terrasse en bord de rivière offre une vue splendide sur l'Allemagne.",
    de: "In einer Biegung der Mosel im Südosten Luxemburgs ist dieses Weindorf Sitz eines berühmten Schaumweinproduzenten. Die in den Hang gegrabenen Keller, in denen Crémant de Luxembourg reift, sind für Besucher geöffnet, und die Flussterrasse bietet herrliche Aussichten nach Deutschland.",
    lb: "An enger Kurv vun der Musel am Südoste vu Lëtzebuerg ass dëst Wäinduerf d'Heem vun engem berüümte Schaumwäinproduzent. D'Keller, déi an de Hiwwel gegrawen sinn, wou Crémant de Luxembourg reit, sinn fir Besucher opgaangen, an d'Floss-Terrasse bitt herrleche Aussichten op Däitschland."
  },
    fact: {
    en: "Stadtbredimus is home to Bernard-Massard, one of Luxembourg's premier sparkling wine producers, whose cellars have been producing Crémant de Luxembourg since 1921. The Moselle here forms the border with Germany.",
    fr: "Stadtbredimus est le siège de Bernard-Massard, l'un des premiers producteurs de vins pétillants du Luxembourg, dont les caves produisent du Crémant de Luxembourg depuis 1921. La Moselle y forme la frontière avec l'Allemagne.",
    de: "Stadtbredimus ist Heimat von Bernard-Massard, einem der bedeutendsten Schaumweinproduzenten Luxemburgs, dessen Keller seit 1921 Crémant de Luxembourg herstellen. Die Mosel bildet hier die Grenze zu Deutschland.",
    lb: "Stadtbredimus ass Heem vum Bernard-Massard, engem vun de féierenden Schaumwäinproduzenten vu Lëtzebuerg, deem seng Keller zënter 1921 Crémant de Luxembourg hirstellen. D'Musel bildt hei d'Grenz mat Däitschland."
  },
    region: "Remich",
    link: "https://www.visitluxembourg.com/en/country/moselle"
  },
  {
    id: "merveilles-hachiville",
    level: "wanderer",
    subLevel: 5,
    name: {
    en: "Hachiville",
    fr: "Hachiville",
    de: "Hachiville",
    lb: "Haschpelt"
  },
    coords: [50.0705, 5.9469],
    emoji: "🌟",
    clue: {
    en: "In the extreme north of Luxembourg, close to Belgium, this tiny village has one of the darkest skies in the Benelux countries. An astronomical observatory and Dark Sky Park have been established here, and on clear nights the Milky Way is clearly visible with the naked eye.",
    fr: "Dans l'extrême nord du Luxembourg, près de la Belgique, ce minuscule village bénéficie de l'un des ciels nocturnes les plus sombres du Benelux. Un observatoire astronomique et un Parc du ciel étoilé y ont été établis, et par nuit claire la Voie lactée est visible à l'œil nu.",
    de: "Im äußersten Norden Luxemburgs, nahe Belgien, hat dieses winzige Dorf einen der dunkelsten Nachthimmel der Benelux-Länder. Ein astronomisches Observatorium und ein Sternenpark wurden hier eingerichtet, und bei klarer Nacht ist die Milchstraße mit bloßem Auge zu sehen.",
    lb: "Am äischtlechste Norden vu Lëtzebuerg, no bei Belgien, huet dëst winzegt Duerf ee vun den däischtersten Nächthimmelen an de Benelux-Länner. En astronomeschen Observatoire an e Stäre-Park sinn hei ageriicht ginn, a bei klarem Wetter ass d'Mëllechstroos mat bloussem A sichtbar."
  },
    fact: {
    en: "Hachiville hosts the only IAU Dark Sky Park in Luxembourg, certified for its exceptional nocturnal darkness. The local observatory organises stargazing events, and the surrounding area is among the least light-polluted in the Benelux.",
    fr: "Hachiville accueille le seul Parc du ciel étoilé IAU du Luxembourg, certifié pour son obscurité nocturne exceptionnelle. L'observatoire local organise des soirées d'observation des étoiles, et la région est parmi les moins polluées lumineusement du Benelux.",
    de: "Hachiville beherbergt den einzigen IAU-Sternenpark Luxemburgs, zertifiziert für seine außergewöhnliche Nachtdunkelheit. Das örtliche Observatorium veranstaltet Sternbeobachtungsabende, und die Umgebung gehört zu den lichtverschmutzungsärmsten im Benelux.",
    lb: "Haschpelt beherbergt dee eenzegen IAU-Stäre-Park vu Lëtzebuerg, zertifizéiert fir seng aussergewéinlech Nacht-Däischtert. Den lokalen Observatoire organiséiert Stäregucker-Ofenden, an d'Ëmgéigend gehéiert zu de wéinegst liichtverdrecksten am Benelux."
  },
    region: "Clervaux",
    link: "https://www.visitluxembourg.com/en/place/site/hachiville-dark-sky-park"
  },
  {
    id: "fond-de-gras",
    level: "wanderer",
    subLevel: 5,
    name: {
    en: "Fond-de-Gras",
    fr: "Fond-de-Gras",
    de: "Fond-de-Gras",
    lb: "Fond-de-Gras"
  },
    coords: [49.5355, 5.8763],
    emoji: "🚂",
    clue: {
    en: "In a hidden valley in southwestern Luxembourg, this open-air industrial heritage site preserves an authentic early 20th-century iron-mining village. A vintage narrow-gauge railway runs through the site, and on event weekends steam locomotives pull passenger cars through the former mining landscape.",
    fr: "Dans une vallée cachée du sud-ouest du Luxembourg, ce site patrimonial industriel en plein air préserve un authentique village minier du début du XXe siècle. Un chemin de fer à voie étroite traverse le site, et lors des week-ends événementiels des locomotives à vapeur tirent des wagons de passagers dans l'ancien paysage minier.",
    de: "In einem versteckten Tal im Südwesten Luxemburgs bewahrt dieses Industriefreilichtmuseum ein authentisches Eisenbergbaudorf aus dem frühen 20. Jahrhundert. Eine Schmalspurbahn fährt durch das Gelände, und an Veranstaltungswochenenden ziehen Dampflokomotiven Personenwagen durch die ehemalige Bergbaulandschaft.",
    lb: "An engem verstoppte Daal am Südweste vu Lëtzebuerg erhält dëse Fräiloft-Industriearchivsäit en authentesche Biergbauweiler aus dem fréie 20. Joerhonnert. Eng Schmaalspur-Eisebann fiert duerch de Site, a bei Veranstaltungswochenden zéien Dampflokomotiven Personenwunn duerch d'eemoleg Biergbaulandschaft."
  },
    fact: {
    en: "Fond-de-Gras was an active iron-ore mining site until the 1980s. Today it is preserved as an industrial museum with restored buildings, mining equipment, and heritage railways. The site transports visitors back to Luxembourg's industrial era.",
    fr: "Fond-de-Gras fut un site d'extraction de minerai de fer jusqu'aux années 1980. Aujourd'hui préservé comme musée industriel, il accueille des bâtiments restaurés, des équipements miniers et des chemins de fer patrimoniaux qui transportent les visiteurs dans l'ère industrielle du Luxembourg.",
    de: "Fond-de-Gras war bis in die 1980er Jahre ein aktives Eisenerzbergbaugebiet. Heute als Industriemuseum erhalten, bietet es restaurierte Gebäude, Bergbaugeräte und historische Eisenbahnen, die Besucher in Luxemburgs Industriezeitalter zurückversetzen.",
    lb: "Fond-de-Gras war bis an d'1980er Joren en aktive Äerztbiergbausite. Haut als Industriemusée erhalen, bitt en restauréiert Gebaier, Biergbaugeräter an historesch Eisebunnen, déi d'Besucher an Lëtzebuerg seng Industriezäit zeréckversetzen."
  },
    region: "Esch",
    link: "https://www.visitluxembourg.com/en/place/site/fond-de-gras"
  },
  {
    id: "castle-clervaux-town",
    level: "navigator",
    subLevel: 1,
    name: {
    en: "Clervaux Town",
    fr: "Ville de Clervaux",
    de: "Stadt Clervaux",
    lb: "Stad Clervaux"
  },
    coords: [50.0550, 6.0350],
    emoji: "🏔️",
    clue: {
    en: "Nestled in a deep valley of the northern Ardennes, completely encircled by forested hills, this town is a natural gateway to Luxembourg's \"Little Eifel\" region. The surrounding countryside offers mountain biking, cross-country skiing in winter, and some of the country's most dramatic Nordic landscapes.",
    fr: "Nichée dans une profonde vallée des Ardennes du nord, entièrement encerclée de collines boisées, cette ville est un point d'entrée naturel vers la région de la \"Petite Eifel\" luxembourgeoise. Les environs offrent du vélo de montagne, du ski de fond en hiver et certains des paysages nordiques les plus spectaculaires du pays.",
    de: "In einem tiefen Ardennental, vollständig von bewaldeten Hügeln umgeben, ist diese Stadt ein natürliches Eingangstor zur luxemburgischen „Kleinen Eifel\". Die Umgebung bietet Mountainbiking, Skilanglauf im Winter und einige der dramatischsten nordischen Landschaften des Landes.",
    lb: "An engem déife Ardennendaal, deen vun bewaldete Hiwwele ëmrënnt ass, ass dës Stad e natierleche Gateway an d'lëtzebuerger „Kleng Eifel\". D'Ëmgéigend bitt Mountainbiking, Langlafski am Wanter a senger dramatesche nordleche Landschaft."
  },
    fact: {
    en: "Clervaux sits 275m above sea level in a valley of the Clerve river. The northern Luxembourg Ardennes around it receive more snow than anywhere else in the country and are known for spectacular autumn foliage.",
    fr: "Clervaux est perchée à 275 m d'altitude dans une vallée de la rivière Clerve. Les Ardennes luxembourgeoises du nord reçoivent plus de neige que partout ailleurs dans le pays et sont connues pour leur superbe feuillage automnal.",
    de: "Clervaux liegt auf 275 m Höhe in einem Tal der Clerve. Die nördlichen luxemburgischen Ardennen ringsum erhalten mehr Schnee als irgendwo sonst im Land und sind für ihr spektakuläres Herbstlaub bekannt.",
    lb: "Clervaux läit op 275 m Héicht an engem Daal vum Clerve-Floss. D'nordlech lëtzebuerger Ardennen ronderëm kréien méi Schnéi wéi iwwerall anescht am Land a si bekannt fir hire spektakuläre Hierbstlaabraichtum."
  },
    region: "Clervaux",
    link: "https://www.visitluxembourg.com/en/city/clervaux"
  },
  {
    id: "sanem",
    level: "wanderer",
    subLevel: 5,
    name: {
    en: "Sanem Cultural Centre",
    fr: "Centre culturel de Sanem",
    de: "Kulturzentrum Sanem",
    lb: "Kulturzentrum Sanen"
  },
    coords: [49.5398, 5.9388],
    emoji: "🎪",
    clue: {
    en: "In the southwestern industrial belt of Luxembourg, this former mining commune has invested heavily in culture. Its cultural centre hosts international concerts, theatre, and exhibitions, and the surrounding area has been revitalised with public art, parks, and creative spaces.",
    fr: "Dans la ceinture industrielle du sud-ouest du Luxembourg, cette ancienne commune minière a investi massivement dans la culture. Son centre culturel accueille des concerts internationaux, du théâtre et des expositions, et la région a été revitalisée avec de l'art public, des parcs et des espaces créatifs.",
    de: "Im südwestlichen Industriegürtel Luxemburgs hat diese ehemalige Bergbaugemeinde stark in Kultur investiert. Ihr Kulturzentrum veranstaltet internationale Konzerte, Theater und Ausstellungen, und die Umgebung wurde mit öffentlicher Kunst, Parks und kreativen Räumen belebt.",
    lb: "Am südwëstleche Industriegürtel vu Lëtzebuerg huet dës eemoleg Biergbaugemengen staark an d'Kultur investéiert. Säin Kulturzentrum accueilléiert international Konzerten, Theater an Ausstellungen, an d'Regioun gouf mat ëffentlecher Konscht, Pärk a kreativen Raimlechkeeten beleeft."
  },
    fact: {
    en: "Sanem has transformed itself from an industrial municipality into a cultural hub. The Opderschmelz cultural complex and the active arts scene make it one of the most dynamic communities in southern Luxembourg.",
    fr: "Sanem s'est transformée d'une commune industrielle en pôle culturel. Le complexe culturel Opderschmelz et la scène artistique active en font l'une des communes les plus dynamiques du sud du Luxembourg.",
    de: "Sanem hat sich von einer Industriegemeinde zu einem Kulturzentrum gewandelt. Der Kulturkomplex Opderschmelz und die aktive Kunstszene machen ihn zu einer der dynamischsten Gemeinden im Süden Luxemburgs.",
    lb: "Sanen huet sech vun enger Industriegemengen an e Kulturzentrum ëmgewandelt. De Kulturkomplex Opderschmelz an d'aktiv Konschtszene maachen en zu enger vun de dynameschste Gemenge vum Süden vu Lëtzebuerg."
  },
    region: "Esch",
    link: "https://www.visitluxembourg.com/en/city/sanem"
  },
  {
    id: "moselle-bridge",
    level: "navigator",
    subLevel: 1,
    name: {
    en: "Rosport",
    fr: "Rosport",
    de: "Rosport",
    lb: "Rosport"
  },
    coords: [49.7434, 6.4928],
    emoji: "🚣",
    clue: {
    en: "Near Luxembourg's eastern border with Germany, this small village on the Sauer river is known as the heart of Luxembourg's white-water kayaking and canoeing. A famous rapids section here draws paddle sports enthusiasts from across the region.",
    fr: "Près de la frontière orientale du Luxembourg avec l'Allemagne, ce petit village sur la Sûre est le cœur du kayak et du canoë-kayak au Luxembourg. Un célèbre passage de rapides y attire des passionnés de sports en eaux vives de toute la région.",
    de: "Nahe der östlichen Grenze Luxemburgs zu Deutschland ist dieses kleine Dorf an der Sauer das Herz des Wildwasserkajak- und Kanusports in Luxemburg. Ein berühmter Stromschnellenabschnitt hier zieht Paddelsportbegeisterte aus der ganzen Region an.",
    lb: "No bei der éischtlecher Grenz vu Lëtzebuerg mat Däitschland ass dëst kleng Duerf un der Sauer d'Häerz vum lëtzebuerger Wildwaasserpaddle- a Kanusport. Eng berüümte Rappiden-Secteur hei zitt Paddelsport-Begeeschtert aus der ganzer Regioun un."
  },
    fact: {
    en: "Rosport on the Sauer river hosts international canoe and kayak competitions, including European Cup events. The Sauer rapids here are among the most challenging in the Benelux region for white-water sports.",
    fr: "Rosport, sur la Sûre, accueille des compétitions internationales de canoë-kayak, dont des épreuves de la Coupe d'Europe. Les rapides de la Sûre y sont parmi les plus exigeants du Benelux pour les sports en eaux vives.",
    de: "Rosport an der Sauer beherbergt internationale Kanu- und Kajakwettbewerbe, darunter Europacup-Veranstaltungen. Die Sauer-Stromschnellen hier gehören zu den anspruchsvollsten im Benelux für Wildwassersport.",
    lb: "Rosport un der Sauer beherbergt international Kanu- a Kajakcompetitioune, dorënner Europacup-Eventer. D'Sauer-Rappiden hei gehéieren zu de fuerderlichste vum Benelux fir Wildwaassersport."
  },
    region: "Grevenmacher",
    link: "https://www.visitluxembourg.com/en/place/site/our-valley"
  },
  {
    id: "pfaffenthal",
    level: "tourist",
    subLevel: 5,
    name: {
    en: "Pfaffenthal & Funicular",
    fr: "Pfaffenthal et funiculaire",
    de: "Pfaffenthal & Standseilbahn",
    lb: "Pfaffenthal a Funniculaire"
  },
    coords: [49.6141, 6.1362],
    emoji: "🚡",
    clue: {
    en: "Below the cliffs of Luxembourg City's plateau, this lower valley district is connected to the upper city by a striking glass funicular built inside the cliff face. The lift transports commuters and visitors from the train station to the Kirchberg plateau, offering dramatic views.",
    fr: "Sous les falaises du plateau de Luxembourg-Ville, ce quartier de vallée est relié à la ville haute par un funiculaire en verre spectaculaire construit à l'intérieur de la falaise. L'ascenseur transporte navetteurs et visiteurs de la gare au plateau de Kirchberg, offrant des vues spectaculaires.",
    de: "Unterhalb der Klippen des Luxemburger Plateaus ist dieser untere Talstadtteil durch eine auffällige Standseilbahn aus Glas, die im Fels eingebaut ist, mit der Oberstadt verbunden. Der Aufzug befördert Pendler und Besucher vom Bahnhof auf das Kirchberg-Plateau mit dramatischer Aussicht.",
    lb: "Ënner de Kliffe vum Lëtzebuerger Plateau verbënnt dëse Daalstadtteil e spektakuläre Glaskabinenfunniculaire, deen am Fiels gebaut ass, mat der Uewerstad. Den Lëft transportéiert Pendler a Besucher vum Bunnhaf op de Kirchbierg-Plateau mat dramatesche Sichten."
  },
    fact: {
    en: "The Pfaffenthal-Kirchberg funicular opened in 2017, running through the cliff inside a glass shaft. It connects the rail station in the valley to the EU quarter 45 metres above, in under 2 minutes.",
    fr: "Le funiculaire Pfaffenthal-Kirchberg a ouvert en 2017, traversant la falaise dans un puits en verre. Il relie la gare dans la vallée au quartier européen 45 mètres plus haut en moins de 2 minutes.",
    de: "Die Standseilbahn Pfaffenthal-Kirchberg wurde 2017 eröffnet und verläuft durch den Fels in einem Glasschacht. Sie verbindet den Bahnhof im Tal in unter 2 Minuten mit dem EU-Viertel 45 Meter darüber.",
    lb: "De Pfaffenthal-Kirchbierg Funniculaire huet 2017 opgemaach a laaft duerch de Fiels an engem Glasschacht. Hien verbënnt de Bunnhaf am Daal mat dem EU-Quartier 45 Meter iwweruecht a manner wéi 2 Minutten."
  },
    region: "Luxembourg City",
    link: "https://www.visitluxembourg.com/en/place/site/pfaffenthal-lift"
  },
  {
    id: "minett-trail",
    level: "navigator",
    subLevel: 1,
    name: {
    en: "Minett (UNESCO Biosphere Reserve)",
    fr: "Minett (Réserve de biosphère UNESCO)",
    de: "Minett (UNESCO-Biosphärenreservat)",
    lb: "Minett (UNESCO-Biosphäre)"
  },
    coords: [49.5100, 5.9500],
    emoji: "🌱",
    clue: {
    en: "The southern belt of Luxembourg, once dominated by iron ore extraction and steel mills, has been designated a UNESCO Biosphere Reserve. Slag heaps draped in rare wildflowers, restored industrial sites, and emerging eco-tourism make this one of Europe's most fascinating post-industrial landscapes.",
    fr: "La ceinture méridionale du Luxembourg, autrefois dominée par l'extraction du minerai de fer et les aciéries, a été classée Réserve de biosphère par l'UNESCO. Des terrils couverts de fleurs sauvages rares, des sites industriels restaurés et un écotourisme émergent en font l'un des paysages post-industriels les plus fascinants d'Europe.",
    de: "Das südliche Luxemburg, einst dominiert von Eisenerzabbau und Stahlwerken, wurde zum UNESCO-Biosphärenreservat erklärt. Mit seltenen Wildblumen bedeckte Schlackehalden, restaurierte Industriestätten und aufkommender Ökotourismus machen es zu einer der faszinierendsten Nachkriegslandschaften Europas.",
    lb: "Den südleche Gürtel vu Lëtzebuerg, eemol dominéiert vun Äerztofbau a Stoliwierker, gouf zu enger UNESCO-Biosphär erkläert. Schlackhäifer, mat rare Wëldbluemen bedeckt, restauréiert Industriesiten an opkommenden Ökotourismus maache se zu enger vun de fascinéierendste Post-Industrielandschaften vun Europa."
  },
    fact: {
    en: "The Minett was designated a UNESCO Biosphere Reserve in 2021 — the only urban-industrial biosphere reserve in the EU. Former slag heaps now host rare orchids and butterflies found nowhere else in Luxembourg.",
    fr: "Le Minett a été désigné Réserve de biosphère de l'UNESCO en 2021 — la seule réserve de biosphère urbaine-industrielle de l'UE. D'anciens terrils accueillent désormais de rares orchidées et papillons introuvables ailleurs au Luxembourg.",
    de: "Das Minett wurde 2021 zum UNESCO-Biosphärenreservat ernannt — das einzige urban-industrielle Biosphärenreservat in der EU. Ehemalige Schlackehalden beherbergen heute seltene Orchideen und Schmetterlinge, die nirgendwo sonst in Luxemburg vorkommen.",
    lb: "De Minett gouf 2021 zur UNESCO-Biosphär erkläert — déi eenzeg urban-industriell Biosphär an der EU. Eemoleg Schlackhäifer beherbergen haut rare Orchideien a Päipert, déi soss néirgends a Lëtzebuerg ze fanne sinn."
  },
    region: "Esch",
    link: "https://www.visitluxembourg.com/en/region/minett"
  },
  {
    id: "esch-belval",
    level: "tourist",
    subLevel: 5,
    name: {
    en: "Belval (Esch)",
    fr: "Belval (Esch)",
    de: "Belval (Esch)",
    lb: "Belval (Esch)"
  },
    coords: [49.5021, 5.9473],
    emoji: "🏗️",
    clue: {
    en: "On the site of a former steelworks in southern Luxembourg, two giant blast furnaces have been preserved as industrial monuments, now floodlit at night. Around them, the University of Luxembourg's main campus has been built, transforming the former heavy-industry zone into a knowledge and cultural district.",
    fr: "Sur le site d'une ancienne aciérie dans le sud du Luxembourg, deux gigantesques hauts fourneaux ont été conservés comme monuments industriels, illuminés la nuit. Autour d'eux, le campus principal de l'Université du Luxembourg a été construit, transformant l'ancienne zone de l'industrie lourde en quartier du savoir et de la culture.",
    de: "Auf dem Gelände eines ehemaligen Stahlwerks im Süden Luxemburgs wurden zwei riesige Hochöfen als Industriedenkmäler erhalten, nachts angestrahlt. Um sie herum wurde der Hauptcampus der Universität Luxemburg gebaut und die ehemalige Schwerindustriezone in ein Wissens- und Kulturviertel verwandelt.",
    lb: "Op dem Gelände vun engem eemoleg Stolwierk am Süden vu Lëtzebuerg goufe zwee gëgant Héichiewen als Industriedenkmäler erhalen, nuets beliicht. Ronderëm hinnen gouf de Haaptcampus vun der Universitéit Lëtzebuerg gebaut, wat d'eemoleg Schwéirindustriezon an e Wëssens- a Kulturquartier ëmgeformmt huet."
  },
    fact: {
    en: "Belval was the flagship project of Luxembourg's post-industrial regeneration. The two preserved blast furnaces (\"hauts fourneaux\") are 60m tall and can be climbed by visitors. The University of Luxembourg campus opened here in 2015.",
    fr: "Belval était le projet phare de la reconversion post-industrielle du Luxembourg. Les deux hauts fourneaux préservés font 60 m de hauteur et peuvent être escaladés par les visiteurs. Le campus de l'Université du Luxembourg y a ouvert en 2015.",
    de: "Belval war das Flaggschiffprojekt der post-industriellen Umgestaltung Luxemburgs. Die zwei erhaltenen Hochöfen (Hauts Fourneaux) sind 60 m hoch und können von Besuchern bestiegen werden. Der Universitätscampus Luxemburg öffnete hier 2015.",
    lb: "Belval war dat Leuchtturm-Projet vun der lëtzebuerger Post-Industrieëmgestaltung. Déi zwou erhaltene Héichiewen (hauts fourneaux) si 60 m héich a kënnen vun de Besuchern erklammen ginn. De Lëtzebuerg-Universitéitscampus huet hei 2015 opgemaach."
  },
    region: "Esch",
    link: "https://www.visitluxembourg.com/en/place/site/rockhal-and-belval"
  },
  {
    id: "esch-sur-sure",
    level: "navigator",
    subLevel: 1,
    name: { en: "Esch-sur-Sûre", fr: "Esch-sur-Sûre", de: "Esch-an-der-Sauer", lb: "Esch-Sauer" },
    coords: [49.9072, 5.9311],
    emoji: "🏚️",
    clue: {
      en: "Wrapped almost entirely by a bend in a river, this tiny hilltop village in western Luxembourg is dominated by the ruins of a medieval castle. Below it sits a large reservoir—the biggest lake in Luxembourg—making it a hub for water sports.",
      fr: "Presque entièrement encerclé par une boucle d'une rivière, ce minuscule village perché dans l'ouest du Luxembourg est dominé par les ruines d'un château médiéval. En contrebas se trouve un grand lac—le plus grand du Luxembourg—en faisant un hub pour les sports nautiques.",
      de: "Fast vollständig von einer Flussbiegung umgeben, wird dieses winzige Bergdorf im Westen Luxemburgs von den Ruinen einer mittelalterlichen Burg dominiert. Darunter liegt ein großes Stausee—der größte See Luxemburgs—was es zu einem Zentrum für Wassersport macht.",
      lb: "Bal ganz vun enger Flossschleif ëmginn, gëtt dëst kleng Biergduerf am Weste vu Lëtzebuerg vun de Ruine vun enger mëttelalterlecher Buerg dominéiert. Drënner läit e grousse Stauséi—dee gréisste See vu Lëtzebuerg—dee et zu engem Zentrum fir Wassersport mécht."
    },
    fact: {
      en: "Esch-sur-Sûre's castle ruins date to the 10th century. The Lac de la Haute-Sûre reservoir, created in 1960, supplies drinking water to over half of Luxembourg's population.",
      fr: "Les ruines du château d'Esch-sur-Sûre remontent au Xe siècle. Le lac de la Haute-Sûre, créé en 1960, fournit de l'eau potable à plus de la moitié de la population luxembourgeoise.",
      de: "Die Burgruine von Esch-an-der-Sauer stammt aus dem 10. Jahrhundert. Der Stausee Lac de la Haute-Sûre, 1960 angelegt, versorgt mehr als die Hälfte der luxemburgischen Bevölkerung mit Trinkwasser.",
      lb: "D'Buergriine vun Esch-Sauer datéieren aus dem 10. Joerhonnert. De Stauséi Lac de la Haute-Sûre, 1960 ugeluecht, versuerg méi wéi d'Hallschent vun der lëtzebuerger Bevëlkerung mat Drénkwaasser."
    },
    region: "Wiltz",
    link: "https://www.visitluxembourg.com/en/place/site/esch-sur-sure"
  },
  {
    id: "bourglinster",
    level: "navigator",
    subLevel: 2,
    name: { en: "Bourglinster Castle", fr: "Château de Bourglinster", de: "Burg Bourglinster", lb: "Buerg Buerglinster" },
    coords: [49.7300, 6.3333],
    emoji: "🏯",
    clue: {
      en: "Rising above vineyards and forests in central Luxembourg, this 12th-century castle has been beautifully restored and now hosts an acclaimed restaurant and cultural events. Its towers offer panoramic views over the Mullerthal region.",
      fr: "Se dressant au-dessus des vignes et des forêts du centre du Luxembourg, ce château du XIIe siècle a été magnifiquement restauré et abrite aujourd'hui un restaurant renommé et des événements culturels. Ses tours offrent des vues panoramiques sur la région du Mullerthal.",
      de: "Diese Burg aus dem 12. Jahrhundert in Zentralluxemburg wurde wunderschön restauriert und beherbergt heute ein renommiertes Restaurant sowie Kulturveranstaltungen. Ihre Türme bieten Panoramablick über die Mullerthal-Region.",
      lb: "Dës Buerg aus dem 12. Joerhonnert a Zentral-Lëtzebuerg gouf wunderschéin restauréiert an huet haut e renomméiert Restaurant souwéi Kulturveranstaltungen. Hir Tierm bidden Panoramablick iwwer d'Mullerthal-Regioun."
    },
    fact: {
      en: "Bourglinster Castle dates to the 12th century and was rebuilt in the 17th century. Today it houses one of Luxembourg's finest restaurants, run by chef René Mathieu, known for his nature-inspired cuisine.",
      fr: "Le château de Bourglinster date du XIIe siècle et a été reconstruit au XVIIe siècle. Il abrite aujourd'hui l'un des meilleurs restaurants du Luxembourg, dirigé par le chef René Mathieu, connu pour sa cuisine inspirée par la nature.",
      de: "Burg Bourglinster stammt aus dem 12. Jahrhundert und wurde im 17. Jahrhundert umgebaut. Heute beherbergt sie eines der feinsten Restaurants Luxemburgs, geführt von Chefkoch René Mathieu, bekannt für seine naturinspirierte Küche.",
      lb: "D'Buerg Buerglinster stammt aus dem 12. Joerhonnert a gouf am 17. Joerhonnert ëmgebaut. Haut huet si ee vun de beschte Restauranten vu Lëtzebuerg, gefouert vum Chefkach René Mathieu, bekannt fir seng naturinspiriert Kichen."
    },
    region: "Grevenmacher",
    link: "https://www.visitluxembourg.com/en/place/site/bourglinster-castle"
  },
  {
    id: "berdorf",
    level: "navigator",
    subLevel: 2,
    name: { en: "Berdorf", fr: "Berdorf", de: "Berdorf", lb: "Bäerdref" },
    coords: [49.8155, 6.3606],
    emoji: "🧗",
    clue: {
      en: "Perched on a sandstone plateau in the Mullerthal region, this village is the base for some of Luxembourg's most dramatic hiking routes. Climbers tackle its famous rock faces, and visitors explore deep gorges and natural caves carved by millennia of erosion.",
      fr: "Perché sur un plateau de grès dans la région du Mullerthal, ce village est le point de départ de certains des itinéraires de randonnée les plus spectaculaires du Luxembourg. Les grimpeurs s'attaquent à ses célèbres parois rocheuses, et les visiteurs explorent des gorges profondes et des grottes naturelles façonnées par des millénaires d'érosion.",
      de: "Auf einem Sandsteinplateau in der Mullerthal-Region gelegen, ist dieses Dorf Ausgangspunkt für einige der dramatischsten Wanderrouten Luxemburgs. Kletterer bezwingen seine berühmten Felsen, und Besucher erkunden tiefe Schluchten und natürliche Höhlen, die durch Jahrtausende der Erosion geformt wurden.",
      lb: "Op engem Sandsteinplateau an der Mullerthal-Regioun läit dëst Duerf als Ausgangspunkt fir e puer vun de spektakulärste Wanderweeër vu Lëtzebuerg. Klettererer bezwéngen seng berüümte Felsen, a Bescher entdecken déif Schluuchten a natierleche Grotten, déi duerch Joerdausende vun Erosioun geformt goufen."
    },
    fact: {
      en: "Berdorf sits atop a sandstone massif at 360m altitude. The village is a gateway to the Mullerthal Trail's most technical sections, including the Teufelsschlucht (Devil's Gorge) and the Predigtstuhl rock pillar.",
      fr: "Berdorf est perché au sommet d'un massif gréseux à 360 m d'altitude. Le village est la porte d'entrée des sections les plus techniques du sentier du Mullerthal, notamment la Teufelsschlucht (gorge du Diable) et le pilier rocheux du Predigtstuhl.",
      de: "Berdorf liegt auf einem Sandsteinmassiv auf 360 m Höhe. Das Dorf ist das Tor zu den technisch anspruchsvollsten Abschnitten des Mullerthal-Trails, einschließlich der Teufelsschlucht und des Felsenpfeilers Predigtstuhl.",
      lb: "Bäerdref läit op engem Sandsteinmassiv op 360 m Héicht. D'Duerf ass d'Agankstor zu den techneschste Sektioune vum Mullerthal-Trail, dorënner d'Teufelsschlucht an de Felsepilier Predigtstuhl."
    },
    region: "Grevenmacher",
    link: "https://www.visitluxembourg.com/en/place/site/berdorf"
  },
  {
    id: "nommern",
    level: "navigator",
    subLevel: 2,
    name: { en: "Nommern Rock Formations", fr: "Rochers de Nommern", de: "Felsen von Nommern", lb: "Felse vu Nommern" },
    coords: [49.7750, 6.2833],
    emoji: "🪨",
    clue: {
      en: "Hidden in a wooded valley in central Luxembourg, these dramatic sandstone rock formations are a favourite destination for hikers and nature lovers. Some rocks bear ancient carvings, and legends of druids and ancient rituals surround the site.",
      fr: "Cachées dans une vallée boisée au centre du Luxembourg, ces spectaculaires formations rocheuses en grès sont une destination prisée des randonneurs et amoureux de la nature. Certains rochers portent d'anciennes gravures, et des légendes de druides et de rituels anciens entourent le site.",
      de: "Versteckt in einem bewaldeten Tal in Zentralluxemburg sind diese dramatischen Sandsteinfelsen ein Lieblingsausflugsziel für Wanderer und Naturliebhaber. Einige Felsen tragen alte Gravuren, und Legenden von Druiden und alten Ritualen umgeben den Ort.",
      lb: "Verstoppt an engem bewaldete Daal a Zentral-Lëtzebuerg sinn dës dramatesch Sandsteinfelse e Liiblingsziel fir Wanderer a Naturfrënn. E puer Felse droen al Aschriften, a Legenden vu Druiden an aale Ritualer ëmginn den Ort."
    },
    fact: {
      en: "The Nommern rock formations are part of the Gutland sandstone belt. Some boulders here, known as \"rochers à cupules,\" feature prehistoric cup-marks carved by Bronze Age peoples over 3,000 years ago.",
      fr: "Les formations rocheuses de Nommern font partie de la ceinture de grès du Gutland. Certains rochers, appelés \"rochers à cupules\", présentent des cupules préhistoriques taillées par des peuples de l'âge du Bronze il y a plus de 3 000 ans.",
      de: "Die Nommerner Felsen sind Teil des Gutländer Sandsteingürtels. Einige Findlinge, bekannt als „Rochers à cupules\", zeigen vorgeschichtliche Napfchen, die vor über 3.000 Jahren von bronzezeitlichen Völkern eingehauen wurden.",
      lb: "D'Felse vu Nommern sinn Deel vum Gutland-Sandsteingürtel. E puer Blocken, bekannt als \"Rochers à cupules\", weisen prehistoresch Näppercher op, déi viru méi wéi 3.000 Joer vu Bronzezäitvolkéier agemeisselt goufen."
    },
    region: "Mersch",
    link: "https://www.visitluxembourg.com/en/place/nature/nommern"
  },
  {
    id: "echternach-lake",
    level: "navigator",
    subLevel: 2,
    name: { en: "Echternach Lake", fr: "Lac d'Echternach", de: "Echternacher See", lb: "Iechternacher Séi" },
    coords: [49.8283, 6.4156],
    emoji: "🏊",
    clue: {
      en: "Just north of Luxembourg's oldest town, this artificial lake is a beloved summer destination for locals and tourists alike. Its sandy beach, watersports facilities, and scenic surroundings make it one of the country's most popular outdoor recreation spots.",
      fr: "Juste au nord de la plus ancienne ville du Luxembourg, ce lac artificiel est une destination estivale appréciée des locaux et des touristes. Sa plage de sable, ses installations de sports nautiques et son cadre pittoresque en font l'un des endroits de loisirs de plein air les plus populaires du pays.",
      de: "Nördlich der ältesten Stadt Luxemburgs ist dieser künstliche See ein beliebtes Sommerziel für Einheimische und Touristen gleichermaßen. Sein Sandstrand, Wassersportanlagen und malerische Umgebung machen ihn zu einem der beliebtesten Erholungsgebiete des Landes.",
      lb: "Nërdlech vun der eelster Stad vu Lëtzebuerg ass dëse kënschtleche Séi e geliichte Summerziel fir Awunner a Touristen. Seng Sandstrand, Wassersportanlagen a malerisch Ëmgéigend maache si zu engem vun de populärste Fräizäitgebitter vum Land."
    },
    fact: {
      en: "The Echternach Lake was created in 1968 for flood control on the Sûre River. It covers 15 hectares and has a Blue Flag beach, making it one of Luxembourg's few designated swimming lakes.",
      fr: "Le lac d'Echternach a été créé en 1968 pour la régulation des crues de la Sûre. Il couvre 15 hectares et possède une plage Pavillon Bleu, ce qui en fait l'un des rares lacs de baignade officiels du Luxembourg.",
      de: "Der Echternacher See wurde 1968 zur Hochwasserregulierung der Sauer angelegt. Er umfasst 15 Hektar und hat einen Blaue-Flagge-Strand, was ihn zu einem der wenigen ausgewiesenen Badegewässer Luxemburgs macht.",
      lb: "Den Iechternacher Séi gouf 1968 fir Héichwaasserregulatioun vun der Sauer ugeluecht. Hien ëmfaasst 15 Hektar a huet e Blo-Fändel-Strand, wat hie zu engem vun de wéinegen offiziell Badeseen vu Lëtzebuerg mécht."
    },
    region: "Grevenmacher",
    link: "https://www.visitluxembourg.com/en/place/nature/echternach-lake"
  },
  {
    id: "rosport",
    level: "navigator",
    subLevel: 2,
    name: { en: "Rosport", fr: "Rosport", de: "Rosport", lb: "Rouspert" },
    coords: [49.7944, 6.5011],
    emoji: "🚣",
    clue: {
      en: "Situated where a river widens along Luxembourg's eastern border, this village is Luxembourg's kayaking and canoeing capital. Its calm and rapid waters attract paddlers year-round, and the surrounding hills are beloved by cyclists on the Moselle cycling route.",
      fr: "Situé là où une rivière s'élargit le long de la frontière orientale du Luxembourg, ce village est la capitale luxembourgeoise du kayak et du canoë. Ses eaux calmes et rapides attirent les pagayeurs tout au long de l'année, et les collines environnantes sont prisées des cyclistes sur la route cycliste de la Moselle.",
      de: "Wo sich ein Fluss entlang der Ostgrenze Luxemburgs verbreitert, liegt dieses Dorf, die Kayak- und Kanuhauptstadt Luxemburgs. Seine ruhigen und reißenden Gewässer ziehen ganzjährig Paddler an, und die umliegenden Hügel sind bei Radfahrern auf dem Mosel-Radweg beliebt.",
      lb: "Wou e Floss sech laanscht d'Ostgrenz vu Lëtzebuerg verbréedert, läit dëst Duerf, d'Kayak- a Kanuhaaptstad vu Lëtzebuerg. Seng roueg a reissend Waasser zéien d'ganzt Joer Paddler un, an d'ëmleende Bierger sinn bei Radfahrer op dem Muselradwee geliicht."
    },
    fact: {
      en: "Rosport sits on the Our River near its confluence with the Sûre. The village hosts the annual Sûre kayak race and is the start of the famous \"Sûre en Kayak\" descent—a popular 35km paddle through Luxembourg's northern valleys.",
      fr: "Rosport est situé sur la rivière Our, près de sa confluence avec la Sûre. Le village accueille la course annuelle de kayak sur la Sûre et est le point de départ de la célèbre descente \"Sûre en Kayak\"—une randonnée populaire de 35 km à travers les vallées du nord du Luxembourg.",
      de: "Rosport liegt an der Our nahe ihrer Mündung in die Sauer. Das Dorf veranstaltet das jährliche Sauer-Kajakrennen und ist Startpunkt der berühmten „Sûre en Kayak\"-Fahrt—eine beliebte 35-km-Paddeltour durch Nordluxemburgs Täler.",
      lb: "Rouspert läit un der Our no bei hirer Mündung an d'Sauer. D'Duerf organiséiert d'jährlecht Sauer-Kajakrennen a ass de Startpunkt vun der berüümter \"Sûre en Kayak\"-Faart—eng populär 35-km-Paddeltour duerch d'Nordlëtzebuerger Däler."
    },
    region: "Grevenmacher",
    link: "https://www.visitluxembourg.com/en/plan/activities/kayak-sur-sure"
  },
  {
    id: "septfontaines",
    level: "navigator",
    subLevel: 3,
    name: { en: "Septfontaines Castle", fr: "Château de Septfontaines", de: "Burg Septfontaines", lb: "Buerg Sëmper" },
    coords: [49.7050, 5.9917],
    emoji: "🗼",
    clue: {
      en: "Deep in the Eisch Valley of western Luxembourg, the dramatic ruins of this medieval castle cling to a rocky outcrop above a sleepy village. Seven springs (as its name suggests) once fed a thriving community here. The surrounding forests are part of a nature park.",
      fr: "Au fond de la vallée de l'Eisch dans l'ouest du Luxembourg, les ruines spectaculaires de ce château médiéval s'accrochent à un éperon rocheux au-dessus d'un village tranquille. Sept sources (comme son nom l'indique) alimentaient autrefois une communauté prospère ici. Les forêts environnantes font partie d'un parc naturel.",
      de: "Tief im Eischtal im Westen Luxemburgs klammern sich die dramatischen Ruinen dieser mittelalterlichen Burg an einen Felssporn über einem verschlafenen Dorf. Sieben Quellen (wie der Name verrät) versorgten einst eine blühende Gemeinschaft. Die umliegenden Wälder sind Teil eines Naturparks.",
      lb: "Déif am Eischtal am Weste vu Lëtzebuerg klammeren sech d'dramatesch Ruinen vun dëser mëttelalterlecher Buerg un e Fielsvorsprong iwwer engem rouege Duerf. Siwe Quellen (wéi den Numm proposéiert) hunn eemol eng blüende Gemeinschaft hei ernäert. D'ëmleend Bëscher sinn Deel vun engem Naturpark."
    },
    fact: {
      en: "Septfontaines (meaning \"seven springs\" in French) castle was built in the 12th century by the Counts of Septfontaines. It was abandoned in the 18th century and its romantic ruins are now a listed heritage monument.",
      fr: "Le château de Septfontaines (signifiant \"sept sources\" en français) a été construit au XIIe siècle par les Comtes de Septfontaines. Il fut abandonné au XVIIIe siècle et ses ruines romantiques sont désormais un monument classé.",
      de: "Die Burg Septfontaines (französisch für „sieben Quellen\") wurde im 12. Jahrhundert von den Grafen von Septfontaines erbaut. Im 18. Jahrhundert aufgegeben, sind ihre romantischen Ruinen heute ein geschütztes Kulturdenkmal.",
      lb: "D'Buerg Sëmper (franséisch fir \"siwe Quellen\") gouf am 12. Joerhonnert vun de Grafe vu Sëmper gebaut. Am 18. Joerhonnert opginn, sinn hir romanesch Ruinen haut e geschützten Härtogdenkmal."
    },
    region: "Capellen",
    link: "https://www.visitluxembourg.com/en/place/site/septfontaines-castle"
  },
  {
    id: "koerich",
    level: "navigator",
    subLevel: 3,
    name: { en: "Koerich Castle", fr: "Château de Koerich", de: "Burg Koerich", lb: "Buerg Koerich" },
    coords: [49.6661, 5.9939],
    emoji: "🏰",
    clue: {
      en: "Standing in a small village in the Eisch Valley nature park of western Luxembourg, the ivy-covered tower of this ruined castle is a romantic landmark. A small Romanesque church from the 11th century sits nearby, and the village hosts an annual medieval market.",
      fr: "Dressé dans un petit village du Parc naturel de la vallée de l'Eisch dans l'ouest du Luxembourg, la tour couverte de lierre de ce château en ruine est un point de repère romantique. Une petite église romane du XIe siècle se trouve à proximité, et le village accueille un marché médiéval annuel.",
      de: "Im Naturpark Eischtal im Westen Luxemburgs steht der efeubewachsene Turm dieser Burgruine als romantisches Wahrzeichen. Eine kleine romanische Kirche aus dem 11. Jahrhundert befindet sich in der Nähe, und das Dorf veranstaltet einen jährlichen Mittelaltermarkt.",
      lb: "Am Naturpark Eischtal am Weste vu Lëtzebuerg steet den efeubedeckten Tuerm vun dëser Buergriine als romanesch Landmaark. Eng kleng Romanesch Kierch aus dem 11. Joerhonnert läit an der Noperschaft, an d'Duerf huet e jährlecht Mëttelaltermaart."
    },
    fact: {
      en: "Koerich Castle was built in the 12th century and passed through many noble families before falling into ruin in the 17th century. The adjacent church of St. Remaclus dates to the 11th century and contains remarkable Romanesque stonework.",
      fr: "Le château de Koerich a été construit au XIIe siècle et a appartenu à de nombreuses familles nobles avant de tomber en ruine au XVIIe siècle. L'église adjacente Saint-Remacle date du XIe siècle et contient de remarquables sculptures romanes.",
      de: "Burg Koerich wurde im 12. Jahrhundert erbaut und ging durch viele Adelsfamilien, bevor sie im 17. Jahrhundert verfiel. Die angrenzende Kirche St. Remaklos aus dem 11. Jahrhundert enthält bemerkenswerte romanische Steinmetzarbeiten.",
      lb: "D'Buerg Koerich gouf am 12. Joerhonnert gebaut a goung duerch vill adeleg Famillje ier si am 17. Joerhonnert verfall ass. D'ugrenzend Kierch vum Hellegen Remaklos aus dem 11. Joerhonnert enthält bemierkenswäert Romanesch Steenarbechten."
    },
    region: "Capellen",
    link: "https://www.visitluxembourg.com/en/place/site/koerich-castle"
  },
  {
    id: "marienthal",
    level: "navigator",
    subLevel: 3,
    name: { en: "Marienthal Abbey Ruins", fr: "Ruines de l'abbaye de Marienthal", de: "Klosterruine Marienthal", lb: "Klosterruine Marienthal" },
    coords: [49.7544, 6.3900],
    emoji: "🕍",
    clue: {
      en: "Hidden in a forested valley near Luxembourg's Little Switzerland, the atmospheric ruins of this medieval convent sit beside a peaceful stream. Pilgrims have visited this Marian sanctuary for centuries, and a small chapel within the ruins remains a place of quiet devotion.",
      fr: "Cachées dans une vallée boisée près de la Petite Suisse luxembourgeoise, les ruines atmosphériques de ce couvent médiéval se trouvent au bord d'un paisible ruisseau. Des pèlerins visitent ce sanctuaire marial depuis des siècles, et une petite chapelle dans les ruines reste un lieu de dévotion tranquille.",
      de: "Versteckt in einem bewaldeten Tal nahe Luxemburgs Kleiner Schweiz, liegen die stimmungsvollen Ruinen dieses mittelalterlichen Klosters an einem ruhigen Bach. Pilger besuchen dieses Marienheiligtum seit Jahrhunderten, und eine kleine Kapelle inmitten der Ruinen bleibt ein Ort stiller Andacht.",
      lb: "Verstoppt an engem bewaldete Daal no bei Lëtzebuerg senger Klenger Schwäiz, leien d'stimmungsvolle Ruine vun dësem mëttelalterleche Kloster nieft engem rouege Bach. Pilger besichen dëst Marienheeiligtum zanter Joerhonnerten, an eng kleng Kapell an de Ruinen bleift e Plaz stille Fromme."
    },
    fact: {
      en: "Marienthal Abbey was founded by Dominican nuns in 1232. It was dissolved during the French Revolution and fell into ruin, but remains an important pilgrimage site. The Black Madonna of Marienthal has been venerated here for over 700 years.",
      fr: "L'abbaye de Marienthal a été fondée par des sœurs dominicaines en 1232. Elle a été dissoute pendant la Révolution française et est tombée en ruine, mais reste un important lieu de pèlerinage. La Vierge Noire de Marienthal est vénérée ici depuis plus de 700 ans.",
      de: "Kloster Marienthal wurde 1232 von Dominikanerinnen gegründet. Es wurde während der Französischen Revolution aufgelöst und verfiel, bleibt aber ein wichtiger Wallfahrtsort. Die Schwarze Madonna von Marienthal wird seit über 700 Jahren hier verehrt.",
      lb: "D'Kloster Marienthal gouf 1232 vun Dominikaanerinnen gegrënnt. Et gouf wärend der Franséischer Revolutioun opgeléist a verfill, bleift awer e wichtegen Pilgerzil. D'Schwaarz Madonna vu Marienthal gëtt hei zanter iwwer 700 Joer veréiert."
    },
    region: "Grevenmacher",
    link: "https://www.visitluxembourg.com/en/place/site/marienthal-abbey"
  },
  {
    id: "capellen",
    level: "navigator",
    subLevel: 3,
    name: { en: "Capellen", fr: "Capellen", de: "Capellen", lb: "Kapellen" },
    coords: [49.6458, 5.9889],
    emoji: "🏘️",
    clue: {
      en: "A quiet administrative town in western Luxembourg, this community gives its name to an entire canton and serves as the gateway to the Eisch Valley nature park. Despite its modest appearance, it sits at a crossroads of several scenic cycling and hiking routes.",
      fr: "Ville administrative tranquille dans l'ouest du Luxembourg, cette commune donne son nom à tout un canton et constitue la porte d'entrée du Parc naturel de la vallée de l'Eisch. Malgré son aspect modeste, elle est au carrefour de plusieurs routes cyclables et pédestres pittoresques.",
      de: "Diese ruhige Verwaltungsstadt im Westen Luxemburgs gibt einem ganzen Kanton ihren Namen und dient als Tor zum Naturpark Eischtal. Trotz ihres bescheidenen Aussehens liegt sie am Kreuzpunkt mehrerer landschaftlich reizvoller Rad- und Wanderwege.",
      lb: "Dës roueg Verwaltungsstad am Weste vu Lëtzebuerg gëtt engem ganzen Kanton hire Numm a sëtzt als Agankstor vum Naturpark Eischtal. Trotz hirem bescheide Erscheinungsbild läit si um Kräizpunkt vu verschiddene malerischen Rad- a Wanderweeër."
    },
    fact: {
      en: "Capellen Canton is Luxembourg's westernmost canton, bordering Belgium. It encompasses the Eisch Valley Nature Park (Naturpark Mëllerdall), protecting 233 km² of wooded hills, river valleys, and historic villages.",
      fr: "Le canton de Capellen est le canton le plus occidental du Luxembourg, à la frontière de la Belgique. Il englobe le Parc naturel de la vallée de l'Eisch (Naturpark Mëllerdall), protégeant 233 km² de collines boisées, de vallées fluviales et de villages historiques.",
      de: "Der Kanton Capellen ist Luxemburgs westlichster Kanton an der belgischen Grenze. Er umfasst den Naturpark Eischtal (Naturpark Mëllerdall), der 233 km² bewaldete Hügel, Flusstäler und historische Dörfer schützt.",
      lb: "De Kanton Kapellen ass Lëtzebuerg säin westlechste Kanton un der belgescher Grenz. Hien ëmfaasst den Naturpark Eischtal (Naturpark Mëllerdall), dee 233 km² bewaldet Bierger, Flossdeeler a historesch Dierfer schützt."
    },
    region: "Capellen",
    link: "https://www.visitluxembourg.com/en/region/ardennes"
  },
  {
    id: "mamer",
    level: "navigator",
    subLevel: 3,
    name: { en: "Mamer", fr: "Mamer", de: "Mamer", lb: "Mamer" },
    coords: [49.6258, 6.0225],
    emoji: "🏡",
    clue: {
      en: "One of Luxembourg's fastest-growing municipalities, this town just west of the capital has transformed from a rural village into an affluent suburb. It is home to several multinational company headquarters and a large residential population of cross-border workers.",
      fr: "L'une des communes à la croissance la plus rapide du Luxembourg, cette ville à l'ouest de la capitale s'est transformée d'un village rural en banlieue aisée. Elle abrite plusieurs sièges sociaux de multinationales et une grande population résidentielle de travailleurs frontaliers.",
      de: "Diese am schnellsten wachsende Gemeinde Luxemburgs, westlich der Hauptstadt, hat sich von einem ländlichen Dorf in einen wohlhabenden Vorort verwandelt. Hier befinden sich mehrere Unternehmenszentralen multinationaler Konzerne und eine große Wohnbevölkerung von Grenzgängern.",
      lb: "Eng vun de séierst wuessender Gemengen vu Lëtzebuerg, westlech vun der Haaptstad, huet sech vun engem ländleche Duerf an e wouelhabenden Uertsrand verwandelt. Hei si verschidde Firmenzentralen vun multinationalen Ënnernehmen an eng grouss Wunnevëlkerung vu Grenzgänger."
    },
    fact: {
      en: "Mamer is home to the European headquarters of several major companies including Amazon and other tech firms. The town's population has doubled in 20 years, reflecting Luxembourg's economic boom and housing pressure around the capital.",
      fr: "Mamer abrite le siège européen de plusieurs grandes entreprises dont Amazon et d'autres sociétés technologiques. La population de la ville a doublé en 20 ans, reflétant le boom économique du Luxembourg et la pression immobilière autour de la capitale.",
      de: "In Mamer befinden sich die europäischen Niederlassungen mehrerer großer Unternehmen, darunter Amazon und andere Technologiefirmen. Die Einwohnerzahl der Stadt hat sich in 20 Jahren verdoppelt und spiegelt Luxemburgs Wirtschaftsboom und den Immobiliendruck rund um die Hauptstadt wider.",
      lb: "Zu Mamer befanne sech d'europäesch Sëtzer vu verschiddene grousse Firmen dorënner Amazon an aner Techfirmen. D'Bevëlkerung vun der Stad huet sech an 20 Joer verdoppelt, wat Lëtzebuerg säin Wirtschaftsboom an den Immobiliendrock ronderëm d'Haaptstad reflektéiert."
    },
    region: "Capellen",
    link: "https://www.mamer.lu"
  },
  {
    id: "goebelsmuhle",
    level: "navigator",
    subLevel: 4,
    name: { en: "Goebelsmühle Valley", fr: "Vallée de Goebelsmühle", de: "Goebelsmühle-Tal", lb: "Goebelsmühlendaal" },
    coords: [49.9083, 6.1167],
    emoji: "🌊",
    clue: {
      en: "Hidden in the far north of Luxembourg near the Belgian border, this secluded valley follows the course of a fast-flowing river through dense forests. An old mill gives the valley its name, and it is considered one of the most beautiful and unspoilt natural spots in the whole country.",
      fr: "Caché dans l'extrême nord du Luxembourg près de la frontière belge, cette vallée isolée suit le cours d'une rivière aux eaux vives à travers de denses forêts. Un ancien moulin donne son nom à la vallée, et elle est considérée comme l'un des endroits naturels les plus beaux et les plus préservés de tout le pays.",
      de: "Versteckt im äußersten Norden Luxemburgs nahe der belgischen Grenze, folgt dieses abgelegene Tal dem Lauf eines reißenden Flusses durch dichte Wälder. Eine alte Mühle gibt dem Tal seinen Namen, und es gilt als einer der schönsten und unberührtesten Naturflecken des ganzen Landes.",
      lb: "Verstoppt am wäidsten Norden vu Lëtzebuerg no bei der belgescher Grenz, follegt dëst ofgeleetenen Daal dem Laaf vun engem séier fliessendem Floss duerch dicht Bëscher. Eng al Mille gëtt dem Daal säin Numm, an et gëtt als ee vun de schéinsten a onberührtste Naturplazen am ganzen Land ugesinn."
    },
    fact: {
      en: "Goebelsmühle is a tiny hamlet on the Our River in the commune of Parc Hôsingen. The valley is part of the Upper Our Nature Park shared with Germany and Belgium, one of the few truly wild landscapes remaining in the Benelux region.",
      fr: "Goebelsmühle est un minuscule hameau sur la rivière Our dans la commune de Parc Hôsingen. La vallée fait partie du Parc naturel de l'Our supérieur partagé avec l'Allemagne et la Belgique, l'un des rares paysages vraiment sauvages restants dans la région Benelux.",
      de: "Goebelsmühle ist ein winziger Weiler an der Our in der Gemeinde Parc Hôsingen. Das Tal ist Teil des Naturparks Our, der mit Deutschland und Belgien geteilt wird, einer der wenigen wirklich wilden Landschaften in der Benelux-Region.",
      lb: "Goebelsmühlchen ass en Haamelt un der Our an der Gemeng Parc Hôsingen. D'Daal ass Deel vum Naturpark Our, deen mat Däitschland a Belgien gedeelt gëtt, ee vun de wéinegen wierklech wilde Landschaften an der Benelux-Regioun."
    },
    region: "Clervaux",
    link: "https://www.naturpark-our.eu"
  },
  {
    id: "wintrange",
    level: "navigator",
    subLevel: 4,
    name: { en: "Wintrange", fr: "Wintrange", de: "Wintringen", lb: "Wäntger" },
    coords: [49.5072, 6.3550],
    emoji: "🍇",
    clue: {
      en: "Perched on steep terraced slopes above the Moselle valley in southern Luxembourg, this tiny wine village is one of the most dramatically situated in the country. Its vineyards produce some of Luxembourg's finest Riesling, and its panoramic views over the river and Germany opposite are breathtaking.",
      fr: "Perché sur des pentes en terrasses escarpées au-dessus de la vallée de la Moselle dans le sud du Luxembourg, ce minuscule village viticole est l'un des mieux situés du pays. Ses vignobles produisent certains des meilleurs Riesling du Luxembourg, et ses vues panoramiques sur la rivière et l'Allemagne en face sont à couper le souffle.",
      de: "Auf steilen Terrassenhängen über dem Moseltal im Süden Luxemburgs gelegen, ist dieses winzige Weindorf eines der dramatischsten im Land situierten. Seine Weinberge produzieren einige von Luxemburgs feinsten Rieslings, und der Panoramablick auf den Fluss und das gegenüberliegende Deutschland ist atemberaubend.",
      lb: "Op steile Terrassenhäng iwwer dem Museltal am Süde vu Lëtzebuerg geleeën, ass dëst klenge Wäinduerf ee vun de dramatescht situéierte vum Land. Seng Wéngert produzéiere verschidde vun de beschte Riesling vu Lëtzebuerg, an de Panoramablick iwwer de Floss an Däitschland vis-à-vis ass beatembenemend."
    },
    fact: {
      en: "Wintrange is one of Luxembourg's highest-altitude wine villages, with vineyards at up to 320m. The village is part of the Moselle appellation and is particularly known for its Riesling and Auxerrois grapes cultivated on the steep slate-clay slopes.",
      fr: "Wintrange est l'un des villages viticoles les plus hauts du Luxembourg, avec des vignobles allant jusqu'à 320 m. Le village fait partie de l'appellation Moselle et est particulièrement connu pour ses raisins Riesling et Auxerrois cultivés sur les pentes argilo-ardoisières escarpées.",
      de: "Wintringen ist eines von Luxemburgs höchstgelegenen Weindörfern mit Weinbergen bis 320 m Höhe. Das Dorf ist Teil der Mosel-Appellation und ist besonders bekannt für seine auf den steilen Schiefer-Lehm-Hängen angebauten Riesling- und Auxerrois-Trauben.",
      lb: "Wäntger ass ee vun de héichstgelegene Wäindierfer vu Lëtzebuerg, mat Wéngerten bis op 320 m. D'Duerf ass Deel vun der Musel-Appellation a bekannt besonnesch fir seng Riesling- a Auxerrois-Drauwen, déi op de steilen Schifer-Lehm-Häng ugebaut ginn."
    },
    region: "Remich",
    link: "https://www.vins-moselle-luxembourg.lu"
  },
  {
    id: "bech-kleinmacher",
    level: "navigator",
    subLevel: 4,
    name: { en: "Bech-Kleinmacher", fr: "Bech-Kleinmacher", de: "Bech-Kleinmacher", lb: "Klengmaacher" },
    coords: [49.4981, 6.3589],
    emoji: "🏺",
    clue: {
      en: "A charming Moselle wine village in southern Luxembourg, this community is home to an open-air museum dedicated to traditional rural and winemaking life. Stroll between restored 18th-century wine-growers' houses and discover ancient wine presses, cellars, and everyday objects.",
      fr: "Charmant village viticole de la Moselle dans le sud du Luxembourg, cette commune abrite un musée en plein air dédié à la vie rurale traditionnelle et à la viticulture. Promenez-vous entre des maisons de vignerons du XVIIIe siècle restaurées et découvrez d'anciens pressoirs, caves et objets du quotidien.",
      de: "Dieses charmante Moselweindorf im Süden Luxemburgs beherbergt ein Freilichtmuseum, das dem traditionellen Landleben und Weinbau gewidmet ist. Schlendern Sie zwischen restaurierten Winzerhäusern aus dem 18. Jahrhundert und entdecken Sie alte Weinpressen, Keller und Alltagsgegenstände.",
      lb: "Dëst charmantt Muselwäinduerf am Süde vu Lëtzebuerg huet e Freilichtmuseum dat dem traditionellen Landliewen a Wäibau gewidmet ass. Schlëndert tëschent restauréierte Wäibauernhäiser aus dem 18. Joerhonnert a entdeckt al Wäipressen, Keller an Alltagsgeegestänn."
    },
    fact: {
      en: "Bech-Kleinmacher is home to \"A Possen,\" an open-air museum of Moselle wine culture that recreates a traditional winemaker's village. The museum contains 12 restored buildings and holds events celebrating local wine and harvest traditions.",
      fr: "Bech-Kleinmacher abrite \"A Possen\", un musée en plein air de la culture viticole mosellane qui recrée un village de vignerons traditionnel. Le musée comprend 12 bâtiments restaurés et organise des événements célébrant le vin local et les traditions de la vendange.",
      de: "In Bech-Kleinmacher befindet sich „A Possen\", ein Freilichtmuseum der Mosel-Weinkultur, das ein traditionelles Winzerdorf nachbildet. Das Museum enthält 12 restaurierte Gebäude und veranstaltet Ereignisse zu lokalen Wein- und Erntetraditionen.",
      lb: "Zu Klengmaacher huet \"A Possen,\" e Freilichtmuseum vun der Muselwäikultur, dat en traditionellt Wäibauerduerf nacheréiert. D'Museum enthält 12 restauréiert Gebaier a hält Veranstaltungen of, déi den lokalen Wäi an Ärntetraditioune feieren."
    },
    region: "Remich",
    link: "https://www.visitluxembourg.com/en/place/site/a-possen"
  },
  {
    id: "canach",
    level: "navigator",
    subLevel: 4,
    name: { en: "Canach", fr: "Canach", de: "Kanech", lb: "Kanech" },
    coords: [49.5711, 6.3778],
    emoji: "⛳",
    clue: {
      en: "Tucked between the Moselle valley and the Grevenmacher hills, this village has become synonymous with leisure in Luxembourg. It is home to the country's most prestigious golf course and a large holiday resort, making it a popular destination for both sport and relaxation.",
      fr: "Niché entre la vallée de la Moselle et les collines de Grevenmacher, ce village est devenu synonyme de loisirs au Luxembourg. Il abrite le terrain de golf le plus prestigieux du pays et un grand complexe de vacances, en faisant une destination populaire pour le sport et la détente.",
      de: "Eingebettet zwischen dem Moseltal und den Grevenmacherer Hügeln ist dieses Dorf in Luxemburg zum Inbegriff von Freizeitvergnügen geworden. Es beherbergt Luxemburgs renommiertesten Golfplatz und ein großes Ferienresort, was es zu einem beliebten Ziel für Sport und Erholung macht.",
      lb: "Tëschent dem Museltal an de Grevenmacherer Bierger agekënnt, ass dëst Duerf a Lëtzebuerg zum Inbegriff vu Fräizäitgenoss ginn. Hei ass Lëtzebuerg säi renomméiertste Golfsplaz a e grousst Ferienzentrum, wat et zu engem populäre Ziel fir Sport a Entspanung mécht."
    },
    fact: {
      en: "Canach is home to Golf Club Grand-Ducal de Luxembourg, one of the oldest golf clubs in the Benelux region, founded in 1935. The village also hosts Parc Merveilleux, Luxembourg's oldest and most visited theme park with exotic animals.",
      fr: "Canach abrite le Golf-Club Grand-Ducal de Luxembourg, l'un des plus anciens clubs de golf du Benelux, fondé en 1935. Le village accueille également le Parc Merveilleux, le parc à thème le plus ancien et le plus visité du Luxembourg, avec des animaux exotiques.",
      de: "In Kanech befindet sich der Golf-Club Grand-Ducal de Luxembourg, einer der ältesten Golfclubs der Benelux-Region, gegründet 1935. Im Dorf liegt auch der Parc Merveilleux, Luxemburgs ältester und meistbesuchter Freizeitpark mit exotischen Tieren.",
      lb: "Zu Kanech ass de Golf-Club Grand-Ducal de Luxembourg, ee vun de eelste Golfcluben an der Benelux-Regioun, gegrënnt 1935. D'Duerf huet och de Parc Merveilleux, Lëtzebuerg säin eelsten a meeschte besuchten Themepark mat exotesche Tieren."
    },
    region: "Grevenmacher",
    link: "https://www.visitluxembourg.com/en/place/site/parc-merveilleux"
  },
  {
    id: "haute-sure-lake",
    level: "navigator",
    subLevel: 4,
    name: { en: "Lac de la Haute-Sûre", fr: "Lac de la Haute-Sûre", de: "Obersauer-Stausee", lb: "Stauséi Obersauer" },
    coords: [49.8972, 5.9361],
    emoji: "🚤",
    clue: {
      en: "The largest lake in Luxembourg, this reservoir in the west of the country winds for kilometres through forested hills. Created by damming a river, it provides drinking water to over half the country's population and is a popular destination for sailing, windsurfing, and lakeside hiking.",
      fr: "Le plus grand lac du Luxembourg, ce réservoir dans l'ouest du pays serpente sur des kilomètres à travers des collines boisées. Créé en barrant une rivière, il fournit de l'eau potable à plus de la moitié de la population du pays et est une destination populaire pour la voile, la planche à voile et la randonnée au bord du lac.",
      de: "Der größte See Luxemburgs, dieser Stausee im Westen des Landes, schlängelt sich kilometerweit durch bewaldete Hügel. Durch Aufstau eines Flusses entstanden, versorgt er über die Hälfte der Landesbevölkerung mit Trinkwasser und ist ein beliebtes Ziel für Segeln, Windsurfen und Seewandern.",
      lb: "De gréisste See vu Lëtzebuerg, dëse Stauséi am Weste vum Land, schlängelt sech kilometerwäit duerch bewaldet Bierger. Duerch Staauen vun engem Floss entstanen, versuerg hien iwwer d'Hallschent vun der Landesbevëlkerung mat Drénkwaasser a ass e populäert Ziel fir Segeln, Windsurfe a Seenwanderen."
    },
    fact: {
      en: "The Lac de la Haute-Sûre was created in 1961 by damming the Sûre River near Insenborn. Covering approximately 380 hectares, it is Luxembourg's principal water reservoir and a protected natural zone where motorised boats are prohibited.",
      fr: "Le lac de la Haute-Sûre a été créé en 1961 en barrant la Sûre près d'Insenborn. Couvrant environ 380 hectares, c'est le principal réservoir d'eau du Luxembourg et une zone naturelle protégée où les bateaux à moteur sont interdits.",
      de: "Der Obersauer-Stausee entstand 1961 durch Aufstau der Sauer bei Insenborn. Mit rund 380 Hektar Fläche ist er Luxemburgs wichtigster Trinkwasserspeicher und ein Schutzgebiet, in dem Motorboote verboten sind.",
      lb: "De Stauséi Obersauer gouf 1961 duerch Staauen vun der Sauer no bei Insenborn gebaut. Mat ongeféier 380 Hektar ass hien Lëtzebuerg säin Haaptwasserreservoir an e Schutzgebitt, wou Motorbooter verbueden sinn."
    },
    region: "Wiltz",
    link: "https://www.visitluxembourg.com/en/place/nature/lac-de-la-haute-sure"
  },
  {
    id: "reisdorf",
    level: "navigator",
    subLevel: 5,
    name: { en: "Reisdorf", fr: "Reisdorf", de: "Reisdorf", lb: "Reisduerf" },
    coords: [49.8667, 6.2722],
    emoji: "🌉",
    clue: {
      en: "Where two rivers meet in the northern part of Luxembourg, this peaceful village sits at a scenic confluence. An old bridge and a popular campsite make it a well-loved base for hikers and cyclists exploring the surrounding valleys. The village's terraced gardens overlook the river junction.",
      fr: "À la confluence de deux rivières dans la partie nord du Luxembourg, ce paisible village se trouve à un carrefour pittoresque. Un vieux pont et un camping populaire en font une base appréciée des randonneurs et des cyclistes explorant les vallées environnantes. Les jardins en terrasses du village surplombent la jonction des rivières.",
      de: "Wo zwei Flüsse im Norden Luxemburgs zusammenfließen, liegt dieses friedliche Dorf an einer malerischen Konfluenz. Eine alte Brücke und ein beliebter Campingplatz machen es zu einer beliebten Basis für Wanderer und Radfahrer, die die umliegenden Täler erkunden. Die Terrassengärten des Dorfes überblicken die Flussmündung.",
      lb: "Wou zwee Flëss am Norden vu Lëtzebuerg zesummelafe, läit dëst rouegt Duerf un enger malerischer Konfluenz. Eng al Bréck a en populäre Campingplaz maache vun him eng geliichte Basis fir Wanderer a Radfahrer, déi d'ëmleende Dääler erkunden. D'Terrassegäert vum Duerf kucke op d'Flossmündung erof."
    },
    fact: {
      en: "Reisdorf sits at the confluence of the Sûre and Ernz Blanche rivers. The village is located on the Sûre cycling route and serves as a gateway to both the Mullerthal region to the south and the Ardennes to the north.",
      fr: "Reisdorf est situé au confluent de la Sûre et de l'Ernz Blanche. Le village est situé sur la route cyclable de la Sûre et sert de porte d'entrée vers la région du Mullerthal au sud et les Ardennes au nord.",
      de: "Reisdorf liegt an der Mündung der Ernz Blanche in die Sauer. Das Dorf liegt am Sauer-Radweg und dient als Tor zur Mullerthal-Region im Süden und den Ardennen im Norden.",
      lb: "Reisduerf läit um Zesummefale vun der Sauer an der Ernz Blanche. D'Duerf läit um Sauerradwee a sëtzt als Agankstor vum Mullerthal-Regioun am Süden an den Ardennen am Norden."
    },
    region: "Diekirch",
    link: "https://www.visitluxembourg.com/en/region/our-sure-valley"
  },
  {
    id: "hosingen",
    level: "navigator",
    subLevel: 5,
    name: { en: "Hosingen", fr: "Hosingen", de: "Hosingen", lb: "Housen" },
    coords: [50.0100, 6.0850],
    emoji: "🌲",
    clue: {
      en: "Sitting on high ground in the far north of Luxembourg close to the Belgian border, this village commands sweeping views over the Ardennes landscape. It was at the centre of intense fighting during the Battle of the Bulge in December 1944 and has a small memorial to this chapter of history.",
      fr: "Perché sur les hauteurs de l'extrême nord du Luxembourg, près de la frontière belge, ce village offre de larges vues sur le paysage ardennais. Il a été au cœur de violents combats lors de la Bataille des Ardennes en décembre 1944 et possède un petit mémorial dédié à ce chapitre de l'histoire.",
      de: "Auf erhöhtem Gelände im äußersten Norden Luxemburgs nahe der belgischen Grenze liegt dieses Dorf mit weitem Blick über die Ardennenlandschaft. Es stand im Mittelpunkt heftiger Kämpfe während der Ardennenoffensive im Dezember 1944 und besitzt ein kleines Mahnmal zu diesem Kapitel der Geschichte.",
      lb: "Op héigem Terrain am wäidsten Norden vu Lëtzebuerg no bei der belgescher Grenz läit dëst Duerf mat wäitem Blick iwwer d'Ardennenlandschaft. Et war am Zentrum vun heftege Kämpfer wärend der Ardenneoffensiv am Dezember 1944 an huet e klenge Memorial zu dësem Kapitel vun der Geschicht."
    },
    fact: {
      en: "Hosingen was heavily fought over during the Battle of the Bulge. The US Army's 110th Infantry Regiment made a determined stand here in December 1944, delaying German advances and buying crucial time for Allied forces. A monument commemorates the American soldiers who fell here.",
      fr: "Hosingen a été âprement disputé lors de la Bataille des Ardennes. Le 110e régiment d'infanterie de l'armée américaine a résisté héroïquement ici en décembre 1944, retardant l'avance allemande et gagnant un temps crucial pour les forces alliées. Un monument commémore les soldats américains tombés ici.",
      de: "Hosingen war hart umkämpft während der Ardennenoffensive. Das US-amerikanische 110. Infanterieregiment leistete hier im Dezember 1944 standhaften Widerstand, verzögerte den deutschen Vormarsch und gewann entscheidende Zeit für die Alliierten. Ein Denkmal ehrt die hier gefallenen amerikanischen Soldaten.",
      lb: "Housen war haart ëmkämpft wärend der Ardenneoffensiv. Den US-amerikaneschen 110. Infanterieregiment huet hei am Dezember 1944 standhaftege Widderstand geleischt, den däitsche Virmarsch verzögert a kritesch Zäit fir d'Alliéiert gewonnen. En Denkmal éiert d'hei gefall amerikanesch Zaldoten."
    },
    region: "Clervaux",
    link: "https://www.visitluxembourg.com/en/region/ardennes"
  },
  {
    id: "troisvierges",
    level: "navigator",
    subLevel: 5,
    name: { en: "Troisvierges", fr: "Troisvierges", de: "Ulflingen", lb: "Ëlwen" },
    coords: [50.1183, 6.0011],
    emoji: "🗺️",
    clue: {
      en: "Near the northernmost tip of Luxembourg where the country borders both Belgium and Germany, this town is known for its railway junction. Three crosses on its coat of arms reference the Three Virgins' pilgrimage tradition. It is the most northerly town in Luxembourg.",
      fr: "Près de la pointe la plus septentrionale du Luxembourg où le pays borde à la fois la Belgique et l'Allemagne, cette ville est connue pour sa jonction ferroviaire. Trois croix sur ses armoiries font référence à la tradition de pèlerinage des Trois Vierges. C'est la ville la plus septentrionale du Luxembourg.",
      de: "Nahe der nördlichsten Spitze Luxemburgs, wo das Land an Belgien und Deutschland grenzt, ist diese Stadt für ihren Eisenbahnknotenpunkt bekannt. Drei Kreuze im Wappen verweisen auf die Wallfahrtstradition der Drei Jungfrauen. Es ist die nördlichste Stadt Luxemburgs.",
      lb: "No bei der nërdlechster Spëtzt vu Lëtzebuerg, wou d'Land un Belgien a Däitschland grenzt, ass dës Stad fir hiren Eisebunnsknotenpunkt bekannt. Dräi Kräizer an hirem Wapen weisen op d'Wallfahrtstradition vun den Dräi Jongfraen hin. Et ass déi nërdlechste Stad vu Lëtzebuerg."
    },
    fact: {
      en: "Troisvierges (Ulflingen/Ëlwen) is Luxembourg's northernmost town, sitting just 1 km from the Belgian and German borders. Its railway station is a junction on the Liège–Luxembourg and Gouvy–Troisvierges lines, making it a key transit point in the region.",
      fr: "Troisvierges (Ulflingen/Ëlwen) est la ville la plus septentrionale du Luxembourg, à seulement 1 km des frontières belge et allemande. Sa gare est un nœud ferroviaire sur les lignes Liège–Luxembourg et Gouvy–Troisvierges, en faisant un point de transit clé dans la région.",
      de: "Troisvierges (Ulflingen/Ëlwen) ist Luxemburgs nördlichste Stadt, nur 1 km von der belgischen und deutschen Grenze entfernt. Sein Bahnhof ist ein Knotenpunkt auf den Strecken Lüttich–Luxemburg und Gouvy–Ulflingen, was ihn zu einem wichtigen Transitpunkt in der Region macht.",
      lb: "Troisvierges (Ulflingen/Ëlwen) ass Lëtzebuerg séng nërdlechste Stad, nëmmen 1 km vun der belgescher a däitscher Grenz. Säin Bunnhaf ass e Knotenpunkt op de Linnen Lüttich–Lëtzebuerg a Gouvy–Ulflingen, wat hien zu engem wichtegen Transitpunkt an der Regioun mécht."
    },
    region: "Clervaux",
    link: "https://www.visitluxembourg.com/en/region/ardennes"
  },
  {
    id: "grosbous",
    level: "navigator",
    subLevel: 5,
    name: { en: "Grosbous", fr: "Grosbous", de: "Grosbous", lb: "Groussbus" },
    coords: [49.8431, 6.0136],
    emoji: "🌾",
    clue: {
      en: "A quiet village in the Ardennes region of northwest Luxembourg, known among locals for its scenic river valley and a remarkable old mill. Part of the Attert valley, it sits in a landscape of rolling farmland and dense woodland typical of Luxembourg's rural heartland.",
      fr: "Village tranquille dans la région ardennaise du nord-ouest du Luxembourg, connu des locaux pour sa vallée fluviale pittoresque et un remarquable ancien moulin. Situé dans la vallée de l'Attert, il s'inscrit dans un paysage de terres agricoles vallonnées et de forêts denses typiques du cœur rural du Luxembourg.",
      de: "Ein stilles Dorf in der Ardennenregion im Nordwesten Luxemburgs, bekannt bei Einheimischen für sein malerisches Flusstal und eine bemerkenswerte alte Mühle. Im Attert-Tal gelegen, fügt es sich in eine Landschaft aus welligem Ackerland und dichten Wäldern ein, typisch für Luxemburgs ländliches Herzstück.",
      lb: "Eng roueg Uertschaft an der Ardennenregioun am Nordweste vu Lëtzebuerg, bekannt bei Awunner fir säi malerischen Flossdaal an eng bemierkenswäert al Mille. Am Attertdaal geleeën, steet et an enger Landschaft aus rollendem Ackerland a dichte Bëscher, typesch fir Lëtzebuerg säin ländlecht Häerz."
    },
    fact: {
      en: "Grosbous is part of the commune of Wahl in the Redange canton. The Attert River, which flows through the village, eventually joins the Alzette south of Arlon (Belgium). The area is noted for its ancient mill buildings and traditional farming landscape.",
      fr: "Grosbous fait partie de la commune de Wahl dans le canton de Redange. La rivière Attert, qui traverse le village, rejoint finalement l'Alzette au sud d'Arlon (Belgique). La zone est connue pour ses anciens bâtiments de moulin et son paysage agricole traditionnel.",
      de: "Grosbous gehört zur Gemeinde Wahl im Kanton Redange. Die Attert, die durch das Dorf fließt, mündet schließlich südlich von Arlon (Belgien) in die Alzette. Die Gegend ist für ihre alten Mühlengebäude und die traditionelle Landwirtschaftslandschaft bekannt.",
      lb: "Groussbus ass Deel vun der Gemeng Wahl am Kanton Redange. D'Attert, déi duerch d'Duerf fléisst, fléisst schliisslech südlech vun Arlon (Belgien) an d'Alzette. D'Géigend ass fir hir al Millegebaier an hir traditionell Landwirtschaftslandschaft bekannt."
    },
    region: "Redange",
    link: "https://www.visitluxembourg.com/en/region/ardennes"
  },
  {
    id: "goesdorf",
    level: "navigator",
    subLevel: 5,
    name: { en: "Goesdorf", fr: "Goesdorf", de: "Goesdorf", lb: "Géisdref" },
    coords: [49.9019, 5.9947],
    emoji: "🛤️",
    clue: {
      en: "Nestled in the hills of western Luxembourg between Wiltz and the Belgian border, this small municipality is traversed by one of the country's most scenic railway lines. Hikers flock here for the dense Ardennes forests and the tranquil Our River valley below.",
      fr: "Niché dans les collines de l'ouest du Luxembourg entre Wiltz et la frontière belge, cette petite commune est traversée par l'une des lignes ferroviaires les plus pittoresques du pays. Les randonneurs affluent ici pour les denses forêts ardennaises et la tranquille vallée de la rivière Our en contrebas.",
      de: "In den Hügeln Westluxemburgs zwischen Wiltz und der belgischen Grenze liegt diese kleine Gemeinde, durch die eine der malerischsten Bahnstrecken des Landes führt. Wanderer strömen hierher für die dichten Ardennenwälder und das ruhige Our-Tal darunter.",
      lb: "An den Bierger vum Weste vu Lëtzebuerg tëschent Wolz a der belgescher Grenz läit dës kleng Gemeng, duerch déi eng vun de malereschste Bunn linnen vum Land fiert. Wanderer kommen hei fir d'dicht Ardennebëscher an dat rouegt Our-Daal drënner."
    },
    fact: {
      en: "Goesdorf lies along the Wiltz–Liège railway line, one of Luxembourg's most scenic rail routes. The commune sits within the Oesling, Luxembourg's northern plateau region, characterised by deep river valleys, dense forests, and some of the country's highest elevations.",
      fr: "Goesdorf est situé le long de la ligne ferroviaire Wiltz–Liège, l'une des routes ferroviaires les plus pittoresques du Luxembourg. La commune se trouve dans l'Oesling, la région du plateau nord du Luxembourg, caractérisée par de profondes vallées fluviales, de denses forêts et certaines des plus hautes altitudes du pays.",
      de: "Goesdorf liegt an der Eisenbahnlinie Wiltz–Lüttich, einer der malerischsten Bahnstrecken Luxemburgs. Die Gemeinde liegt im Ösling, Luxemburgs nördlichem Plateau, gekennzeichnet durch tiefe Flusstäler, dichte Wälder und einige der höchsten Erhebungen des Landes.",
      lb: "Géisdref läit laanscht d'Eisebunnslinn Wolz–Lüttich, eng vun de malereschste Bunn linnen vu Lëtzebuerg. D'Gemeng läit am Ënsling, Lëtzebuerg säin nërdlecht Plateau, charakteriséiert duerch déif Flossdeeler, dicht Bëscher an e puer vun de héchste Héichte vum Land."
    },
    region: "Wiltz",
    link: "https://www.visitluxembourg.com/en/region/ardennes"
  },
  {
    id: "hamm-cemetery",
    level: "explorer",
    subLevel: 1,
    name: { en: "Luxembourg American Cemetery", fr: "Cimetière américain du Luxembourg", de: "Amerikanischer Soldatenfriedhof Luxemburg", lb: "Amerikaneschen Zaldotenfriedhof Lëtzebuerg" },
    coords: [49.6136, 6.1617],
    emoji: "🪖",
    clue: { en: "On a hillside east of Luxembourg City, row upon row of white crosses and Stars of David mark the resting place of over 5,000 American soldiers killed in World War II. Among those buried here is a legendary US general whose brilliance turned the tide of the Battle of the Bulge.", fr: "Sur une colline à l'est de Luxembourg-Ville, des rangées de croix blanches et d'étoiles de David marquent le lieu de repos de plus de 5 000 soldats américains tués pendant la Seconde Guerre mondiale. Parmi les personnes enterrées ici se trouve un légendaire général américain dont le génie a changé le cours de la Bataille des Ardennes.", de: "An einem Hang östlich von Luxemburg-Stadt markieren Reihe um Reihe weißer Kreuze und Davidssterne die letzte Ruhestätte von über 5.000 amerikanischen Soldaten, die im Zweiten Weltkrieg gefallen sind. Unter den hier Begrabenen ist ein legendärer US-General, dessen Brillanz die Ardennenoffensive wendete.", lb: "Op engem Hang östlech vu Lëtzebuerg-Stad markéieren Rei op Rei vu wäisse Kräizer a Davidsterne d'lescht Ruhestätt vun iwwer 5.000 amerikanesche Zaldoten, déi am Zweete Weltkrich gefall sinn. Ënner den hei Begrienwene befënnt sech e legendären US-General, deem säi Genie d'Ardenneoffensiv gedraiht huet." },
    fact: { en: "The Luxembourg American Cemetery at Hamm contains 5,076 graves. General George S. Patton, commander of the US Third Army, is buried here at his own request alongside his men. The cemetery is maintained by the American Battle Monuments Commission.", fr: "Le cimetière américain du Luxembourg à Hamm contient 5 076 tombes. Le général George S. Patton, commandant de la 3e armée américaine, y est enterré à sa propre demande aux côtés de ses hommes. Le cimetière est entretenu par la Commission américaine des monuments de guerre.", de: "Der Amerikanische Soldatenfriedhof Luxemburg in Hamm enthält 5.076 Gräber. General George S. Patton, Befehlshaber der US Third Army, liegt hier auf eigenen Wunsch neben seinen Männern begraben. Der Friedhof wird von der American Battle Monuments Commission gepflegt.", lb: "Den Amerikaneschen Zaldotenfriedhof Lëtzebuerg zu Hamm enthält 5.076 Griewer. General George S. Patton, Kommandant vun der US Third Army, läit hei op säin eegene Wonsch nieft senge Männer begruewen. De Friedhof gëtt vun der American Battle Monuments Commission gepfleegt." },
    region: "Luxembourg City",
    link: "https://www.visitluxembourg.com/en/place/site/luxembourg-american-cemetery"
  },
  {
    id: "saeul",
    level: "explorer",
    subLevel: 1,
    name: { en: "Saeul", fr: "Saeul", de: "Saeul", lb: "Säel" },
    coords: [49.7708, 6.0056],
    emoji: "🏰",
    clue: { en: "Perched on a ridge in the Gutland of central Luxembourg, this small village is dominated by the imposing remnants of a medieval castle. The ruined tower is a listed monument, and the surrounding countryside of gentle hills and orchards epitomises the quiet heart of Luxembourg.", fr: "Perché sur un promontoire dans le Gutland du centre du Luxembourg, ce petit village est dominé par les vestiges imposants d'un château médiéval. La tour en ruine est un monument classé, et la campagne environnante de douces collines et de vergers incarne le cœur tranquille du Luxembourg.", de: "Auf einem Bergrücken im Gutland Zentralluxemburgs thront dieses kleine Dorf unter dem imposanten Überresten einer mittelalterlichen Burg. Der Ruinenturm ist ein Baudenkmal, und die umliegende Landschaft aus sanften Hügeln und Obstgärten verkörpert das ruhige Herzstück Luxemburgs.", lb: "Op enger Kapp am Gutland vu Zentral-Lëtzebuerg dominéiert dëst kleng Duerf d'imposant Iwwerreschter vun enger mëttelalterlecher Buerg. Den Ruinetuerm ass e geschützte Monument, an d'ëmleend Landschaft aus rouege Bierger an Uebstgäert verkierpert d'rouegt Häerz vu Lëtzebuerg." },
    fact: { en: "Saeul Castle, also known as the Tower of Saeul, is a 14th-century keep that once served as a watchtower controlling the route between Arlon and Mersch. The commune of Saeul covers the Attert River valley and is known for its agricultural landscape.", fr: "Le château de Saeul, également connu sous le nom de Tour de Saeul, est un donjon du XIVe siècle qui servait autrefois de tour de guet contrôlant la route entre Arlon et Mersch. La commune de Saeul couvre la vallée de l'Attert et est connue pour son paysage agricole.", de: "Burg Saeul, auch als Turm von Saeul bekannt, ist ein Bergfried aus dem 14. Jahrhundert, der einst als Wachturm die Route zwischen Arlon und Mersch kontrollierte. Die Gemeinde Saeul umfasst das Attert-Tal und ist für ihre landwirtschaftliche Landschaft bekannt.", lb: "D'Buerg Säel, och als Tuerm vu Säel bekannt, ass e Bergfried aus dem 14. Joerhonnert, dee fréier als Wächtturm d'Stréck tëschent Arlon a Mersch kontrolléiert huet. D'Gemeng Säel ëmfaasst dat Attertdaal a ass fir hir landwirtschaftlech Landschaft bekannt." },
    region: "Redange",
    link: "https://www.visitluxembourg.com/en/region/ardennes"
  },
  {
    id: "leudelange",
    level: "explorer",
    subLevel: 1,
    name: { en: "Leudelange", fr: "Leudelange", de: "Leudelingen", lb: "Liddel" },
    coords: [49.5628, 6.0711],
    emoji: "📡",
    clue: { en: "Just south of Luxembourg City on a ridge above the Alzette valley, this fast-growing commune is famous for a massive communications tower that dominates the skyline for miles around. The tower transmits radio and television signals across much of the country.", fr: "Juste au sud de Luxembourg-Ville sur un promontoire au-dessus de la vallée de l'Alzette, cette commune en pleine expansion est célèbre pour une imposante tour de communications qui domine l'horizon sur des kilomètres à la ronde. La tour transmet des signaux radio et télévisés à une grande partie du pays.", de: "Südlich von Luxemburg-Stadt auf einem Kamm über dem Alzettetal hat sich diese schnell wachsende Gemeinde durch einen riesigen Kommunikationsturm bekannt gemacht, der meilenweit die Skyline dominiert. Der Turm überträgt Radio- und Fernsehsignale in weite Teile des Landes.", lb: "Südlech vu Lëtzebuerg-Stad op enger Kapp iwwer dem Alzettedaal ass dës séier wuessend Gemeng bekannt duerch en enormen Kommunikatiounstuerm, deen kilometerwäit de Skyscraper dominéiert. Den Tuerm iwwerdréit Radio- a Fernsehsignaler an e groussen Deel vum Land." },
    fact: { en: "The Leudelange television tower stands 150m tall and is a major broadcasting infrastructure for RTL Luxembourg, the country's main commercial broadcaster. Leudelange is also home to various logistics and business parks serving the Luxembourg City metropolitan area.", fr: "La tour de télévision de Leudelingen fait 150 m de haut et constitue une infrastructure de diffusion majeure pour RTL Luxembourg, le principal radiodiffuseur commercial du pays. Leudelingen abrite également divers parcs logistiques et commerciaux desservant l'agglomération de Luxembourg-Ville.", de: "Der Fernsehturm Leudelingen ist 150 m hoch und ein wichtiger Rundfunkturm für RTL Luxemburg, den wichtigsten kommerziellen Sender des Landes. Leudelingen beherbergt auch verschiedene Logistik- und Gewerbegebiete, die den Großraum Luxemburg-Stadt bedienen.", lb: "Den Fernsehtuerm Liddel ass 150 m héich an eng wichteg Sendeanlag fir RTL Lëtzebuerg, de Haaptkommerzielle Sender vum Land. Liddel huet och verschidde Logistik- a Gewierbegebidder, déi d'Groussraum Lëtzebuerg-Stad bedéngen." },
    region: "Luxembourg City",
    link: "https://www.rtl.lu"
  },
  {
    id: "bertrange",
    level: "explorer",
    subLevel: 1,
    name: { en: "Bertrange", fr: "Bertrange", de: "Bertringen", lb: "Bartreng" },
    coords: [49.6200, 6.0650],
    emoji: "🛒",
    clue: { en: "Bordering Luxembourg City to the west, this affluent suburban municipality is home to the country's largest shopping centre and several major retail parks. It sits along the main motorway axis connecting the capital with Belgium, making it one of the most commercially active zones in Luxembourg.", fr: "Limitrophe de Luxembourg-Ville à l'ouest, cette prospère commune suburbaine abrite le plus grand centre commercial du pays et plusieurs grands parcs commerciaux. Elle est située le long du principal axe autoroutier reliant la capitale à la Belgique, ce qui en fait l'une des zones commerciales les plus actives du Luxembourg.", de: "Westlich an Luxemburg-Stadt grenzend, beherbergt diese wohlhabende Vorortgemeinde das größte Einkaufszentrum des Landes und mehrere große Einzelhandelsparks. Sie liegt an der Hauptautobahn, die die Hauptstadt mit Belgien verbindet, was sie zu einer der kommerziell aktivsten Zonen Luxemburgs macht.", lb: "Westlech un Lëtzebuerg-Stad grenzend, huet dës wouelhaabend Vierortgemeng dat gréisste Shopping Center vum Land a verschidde grouss Handelsparken. Si läit laanscht d'Haaptautobun, déi d'Haaptstad mat Belgien verbënnt, wat si zu enger vun de kommerziell aktivsten Zonen vu Lëtzebuerg mécht." },
    fact: { en: "Bertrange is home to the Cloche d'Or and Auchan shopping centres, making it one of Luxembourg's key retail hubs. The commune has grown rapidly due to its proximity to Luxembourg City and excellent motorway connections, attracting many international residents and businesses.", fr: "Bertrange abrite les centres commerciaux Cloche d'Or et Auchan, ce qui en fait l'un des principaux pôles commerciaux du Luxembourg. La commune a connu une croissance rapide grâce à sa proximité avec Luxembourg-Ville et ses excellentes liaisons autoroutières, attirant de nombreux résidents et entreprises internationaux.", de: "In Bertringen befinden sich die Einkaufszentren Cloche d'Or und Auchan, was es zu einem der wichtigsten Einzelhandelsstandorte Luxemburgs macht. Die Gemeinde ist dank ihrer Nähe zu Luxemburg-Stadt und hervorragender Autobahnanbindungen stark gewachsen und zieht viele internationale Bewohner und Unternehmen an.", lb: "Zu Bartreng sinn d'Cloche d'Or an Auchan Shopping Centers, wat et zu engem vun de Haapthandelsplaze vu Lëtzebuerg mécht. D'Gemeng ass séier gewuess duerch hir Noperschaft zu Lëtzebuerg-Stad a exzellent Autobunn Connectiounen, vill international Awunner a Betrieber unzezéien." },
    region: "Luxembourg City",
    link: "https://www.visitluxembourg.com/en"
  },
  {
    id: "lorentzweiler",
    level: "explorer",
    subLevel: 2,
    name: { en: "Lorentzweiler", fr: "Lorentzweiler", de: "Lorentzweiler", lb: "Luerenzweiler" },
    coords: [49.7025, 6.1631],
    emoji: "🚂",
    clue: { en: "Straddling the Alzette River in central Luxembourg, this village sits on the main railway line north from the capital. Its valley setting makes it a popular base for cyclists following the Alzette riverside trail, and the community is known for its tranquil, village-feel despite being just minutes from the city.", fr: "Chevauchant la rivière Alzette au centre du Luxembourg, ce village se trouve sur la principale ligne ferroviaire au nord de la capitale. Son cadre vallonné en fait une base populaire pour les cyclistes qui suivent la piste longeant l'Alzette, et la commune est connue pour son ambiance tranquille de village malgré sa proximité à quelques minutes de la ville.", de: "Dieses Dorf an der Alzette in Zentralluxemburg liegt an der Hauptbahnlinie nördlich der Hauptstadt. Seine Tallage macht es zu einem beliebten Ausgangspunkt für Radfahrer auf dem Alzette-Uferweg, und die Gemeinde ist trotz ihrer Nähe zur Stadt für ihr ruhiges Dorfgefühl bekannt.", lb: "Dëst Duerf un der Alzette a Zentral-Lëtzebuerg läit un der Haaptbunn linn nërdlech vun der Haaptstad. Säin Daallage mécht et zu enger populärer Basis fir Radfahrer op dem Alzett-Uferpad, an d'Gemeng ass trotz hirer Noperschaft zu der Stad fir hiert rouegt Duerffill bekannt." },
    fact: { en: "Lorentzweiler is on the CFL railway line connecting Luxembourg City to Ettelbruck and Troisvierges. The village lies along the Alzette cycling route (Vëlosummer), a 74 km leisure trail following the river northward from Luxembourg City through scenic valleys.", fr: "Lorentzweiler se trouve sur la ligne ferroviaire CFL reliant Luxembourg-Ville à Ettelbruck et Troisvierges. Le village est situé sur la piste cyclable de l'Alzette (Vëlosummer), un sentier de loisirs de 74 km suivant la rivière vers le nord depuis Luxembourg-Ville à travers des vallées pittoresques.", de: "Lorentzweiler liegt an der CFL-Bahnstrecke, die Luxemburg-Stadt mit Ettelbrück und Ulflingen verbindet. Das Dorf liegt am Alzette-Radweg (Vëlosummer), einem 74 km langen Freizeitweg, der dem Fluss von Luxemburg-Stadt durch malerische Täler nach Norden folgt.", lb: "Luerenzweiler läit un der CFL-Bunn linn, déi Lëtzebuerg-Stad mat Ettelbréck a Ulflingen verbënnt. D'Duerf läit um Alzett-Radwee (Vëlosummer), engem 74 km laangen Fräizäitpad, deen dem Floss vu Lëtzebuerg-Stad duerch malerisch Daaler nordwärts follegt." },
    region: "Mersch",
    link: "https://www.visitluxembourg.com/en/plan/activities/cycling"
  },
  {
    id: "fischbach",
    level: "explorer",
    subLevel: 2,
    name: { en: "Fischbach Castle", fr: "Château de Fischbach", de: "Schloss Fischbach", lb: "Schlass Fëschbech" },
    coords: [49.7711, 6.2325],
    emoji: "👑",
    clue: { en: "Hidden in the forests of central Luxembourg, this stately castle is not open to the public—it serves as the private residence of the Grand Ducal family. Driving through the wooded hills, visitors glimpse its towers through the trees; the village beside it is tiny and quiet, belying the importance of its occupants.", fr: "Caché dans les forêts du centre du Luxembourg, ce beau château n'est pas ouvert au public—il sert de résidence privée à la famille grand-ducale. En conduisant à travers les collines boisées, les visiteurs aperçoivent ses tours à travers les arbres; le village à côté est minuscule et tranquille, contrastant avec l'importance de ses occupants.", de: "Versteckt in den Wäldern Zentralluxemburgs dient dieses stattliche Schloss nicht als Touristenattraktion—es ist der Privatwohnsitz der Großherzoglichen Familie. Wer durch die bewaldeten Hügel fährt, erblickt seine Türme durch die Bäume; das Dorf daneben ist winzig und ruhig, trotz der Bedeutung seiner Bewohner.", lb: "Am Bësch vu Zentral-Lëtzebuerg verstoppt, sëtzt dëst stattlecht Schlass als Privatwunnsëtz vun der Groussherzoglecherfamill. Wann een duerch d'bewaldet Bierger fiert, gesäit een seng Tierm duerch d'Beem; d'Duerf niewendrënner ass kleng a roueg, trotzdeem d'Wichtegkeet vu sengen Awunner." },
    fact: { en: "Fischbach Castle has been the private residence of the Grand Ducal Family of Luxembourg since 1948. The Grand Duke and Grand Duchess use it as their primary country home. The castle, rebuilt in the 19th century, is set in an extensive forest estate and is not accessible to the public.", fr: "Le château de Fischbach est la résidence privée de la famille grand-ducale du Luxembourg depuis 1948. Le Grand-Duc et la Grande-Duchesse l'utilisent comme leur principale résidence de campagne. Le château, reconstruit au XIXe siècle, est situé dans un vaste domaine forestier et n'est pas accessible au public.", de: "Schloss Fischbach ist seit 1948 der Privatwohnsitz der Großherzoglichen Familie Luxemburgs. Der Großherzog und die Großherzogin nutzen es als ihr hauptsächliches Landhaus. Das im 19. Jahrhundert umgebaute Schloss liegt in einem ausgedehnten Forstgut und ist nicht öffentlich zugänglich.", lb: "Schlass Fëschbech ass säit 1948 de Privatwunnsëtz vun der Groussherzoglecherfamille vu Lëtzebuerg. De Groussherzog an d'Grossherzogin benotzen et als hiren Haaptlanndsëtz. D'Schlass, am 19. Joerhonnert ëmgebaut, läit an engem ausgedeenten Forstgutt a ass net ffentlech zugänglech." },
    region: "Mersch",
    link: "https://www.monarchie.lu"
  },
  {
    id: "ermsdorf",
    level: "explorer",
    subLevel: 2,
    name: { en: "Ermsdorf", fr: "Ermsdorf", de: "Ermsdorf", lb: "Iermsduerf" },
    coords: [49.8367, 6.3067],
    emoji: "⛪",
    clue: { en: "Tucked in a fold of the northern Mullerthal, this quiet village has a remarkable 12th-century church with an octagonal tower that stands out in the Luxembourg countryside. The surrounding hills and streams attract hikers seeking the peaceful heart of Luxembourg's interior.", fr: "Niché dans un repli du Mullerthal nord, ce village tranquille possède une remarquable église du XIIe siècle avec une tour octogonale qui se distingue dans la campagne luxembourgeoise. Les collines et ruisseaux environnants attirent les randonneurs en quête du cœur paisible du Luxembourg.", de: "In einer Falte des nördlichen Mullertha ls versteckt, hat dieses ruhige Dorf eine bemerkenswerte Kirche aus dem 12. Jahrhundert mit einem achteckigen Turm, der sich in der luxemburgischen Landschaft abhebt. Die umliegenden Hügel und Bäche ziehen Wanderer an, die das friedliche Herzstück Luxemburgs suchen.", lb: "An enger Fold vum nërdleche Mullerthal verstoppt, huet dëst rouegt Duerf eng bemierkenswäert Kierch aus dem 12. Joerhonnert mat engem achteckigen Tuerm, dee sech an der lëtzebuerger Landschaft ofhiebt. D'ëmleende Bierger a Baachen zéien Wanderer un, déi d'rouegt Häerz vu Lëtzebuerg sichen." },
    fact: { en: "Ermsdorf's St. Lambert church is one of Luxembourg's rare surviving examples of Romanesque architecture, dating from around 1150. The octagonal tower is unusual in the region and reflects the influence of German-Rhineland church building traditions.", fr: "L'église Saint-Lambert d'Ermsdorf est l'un des rares exemples survivants d'architecture romane au Luxembourg, datant d'environ 1150. La tour octogonale est inhabituelle dans la région et reflète l'influence des traditions de construction d'églises rhénanes allemandes.", de: "Die St.-Lambert-Kirche in Ermsdorf ist eines der seltenen erhaltenen Beispiele romanischer Architektur in Luxemburg aus der Zeit um 1150. Der achteckige Turm ist in der Region ungewöhnlich und spiegelt den Einfluss der deutschen-rheinländischen Kirchenbautradition wider.", lb: "D'Kierch vum Hellegen Lambert zu Iermsduerf ass ee vun de wéinege erhalenen Beispiller romanescher Architektur zu Lëtzebuerg, dat aus ronderëm 1150 stammt. Den achteckigen Tuerm ass an der Regioun ongewéinlech a reflektéiert den Afloss vun de däitschen-rhéinländeschen Kierchbautraditioune." },
    region: "Diekirch",
    link: "https://www.visitluxembourg.com/en"
  },
  {
    id: "fouhren",
    level: "explorer",
    subLevel: 2,
    name: { en: "Fouhren", fr: "Fouhren", de: "Fouhren", lb: "Fouren" },
    coords: [49.8869, 6.2386],
    emoji: "🌄",
    clue: { en: "Perched high on the rocky plateaus above the Our Valley in northern Luxembourg, this village offers one of the most dramatic viewpoints in the country. On a clear day, visitors can see across to Germany, with the Our River glinting far below in its deep valley.", fr: "Perché haut sur les plateaux rocheux au-dessus de la vallée de l'Our dans le nord du Luxembourg, ce village offre l'un des points de vue les plus spectaculaires du pays. Par temps clair, les visiteurs peuvent voir jusqu'en Allemagne, avec la rivière Our qui scintille loin en contrebas dans sa profonde vallée.", de: "Hoch auf den Felsplateaus über dem Our-Tal im Norden Luxemburgs gelegen, bietet dieses Dorf einen der dramatischsten Aussichtspunkte des Landes. An klaren Tagen blickt man bis nach Deutschland, mit der Our, die tief unten im Tal glitzert.", lb: "Héich op de Felzplateauen iwwer dem Ourdaal am Norden vu Lëtzebuerg geleeën, bitt dëst Duerf ee vun de dramatescht Aussichtspunkten vum Land. Op kloere Deeg kuckt een bis Däitschland, mam Our, deen déif drënner am Daal glänzt." },
    fact: { en: "Fouhren sits at around 400m elevation overlooking the Our River valley on the German border. The Our Valley here is designated as part of the Our Nature Park, shared between Luxembourg and Germany, protecting the wild river corridor and its diverse habitats.", fr: "Fouhren est situé à environ 400 m d'altitude surplombant la vallée de l'Our à la frontière allemande. La vallée de l'Our ici est désignée dans le cadre du Parc naturel de l'Our, partagé entre le Luxembourg et l'Allemagne, protégeant le corridor fluvial sauvage et ses divers habitats.", de: "Fouhren liegt auf etwa 400 m Höhe mit Blick auf das Our-Tal an der deutschen Grenze. Das Our-Tal ist hier als Teil des Naturparks Our ausgewiesen, der zwischen Luxemburg und Deutschland geteilt wird und den wilden Flusskorridor mit seinen vielfältigen Lebensräumen schützt.", lb: "Fouren läit op ronderëm 400 m Héicht mat Blick op d'Ourdaal un der däitscher Grenz. D'Ourdaal hei ass als Deel vum Naturpark Our ausgewisen, deen tëschent Lëtzebuerg a Däitschland gedeelt gëtt an de wilde Flusskorridor mat senge ville Liewensraiemer schützt." },
    region: "Vianden",
    link: "https://www.naturpark-our.eu"
  },
  {
    id: "ingeldorf",
    level: "explorer",
    subLevel: 2,
    name: { en: "Ingeldorf", fr: "Ingeldorf", de: "Ingeldorf", lb: "Ingelduerf" },
    coords: [49.8469, 6.2236],
    emoji: "🌉",
    clue: { en: "Sitting on the banks of the Sûre River near Diekirch in northern Luxembourg, this village is connected to the town opposite by a centuries-old bridge. The surrounding area is rich in prehistoric and Roman remains, and the valley here is particularly wide and fertile.", fr: "Situé sur les rives de la Sûre près de Diekirch dans le nord du Luxembourg, ce village est relié à la ville en face par un pont vieux de plusieurs siècles. La région environnante est riche en vestiges préhistoriques et romains, et la vallée ici est particulièrement large et fertile.", de: "An den Ufern der Sauer nahe Diekirch im Norden Luxemburgs gelegen, ist dieses Dorf durch eine jahrhundertealte Brücke mit der gegenüberliegenden Stadt verbunden. Die Umgebung ist reich an vorgeschichtlichen und römischen Überresten, und das Tal ist hier besonders breit und fruchtbar.", lb: "Un den Ufier vun der Sauer no bei Dikrich am Norden vu Lëtzebuerg geleeën, ass dëst Duerf duerch eng joerhonnerten-al Bréck mat der géigeniwwer Stad verbonnen. D'ëmleend Géigend ass räich un prehistoric an Réimeschen Iwwerreschter, an d'Daal hei ass besonnesch breed a fruchtbar." },
    fact: { en: "Ingeldorf's old bridge over the Sûre dates to the 13th century and is one of Luxembourg's oldest surviving stone bridges. Nearby, an important Gallo-Roman villa was excavated in the 19th century, revealing mosaics and artefacts now preserved in the National Museum of History and Art.", fr: "Le vieux pont d'Ingeldorf sur la Sûre date du XIIIe siècle et est l'un des plus anciens ponts en pierre du Luxembourg. À proximité, une importante villa gallo-romaine a été fouillée au XIXe siècle, révélant des mosaïques et des artefacts désormais conservés au Musée national d'histoire et d'art.", de: "Die alte Sauer-Brücke in Ingeldorf stammt aus dem 13. Jahrhundert und ist eine der ältesten erhaltenen Steinbrücken Luxemburgs. In der Nähe wurde im 19. Jahrhundert eine wichtige gallo-römische Villa ausgegraben, deren Mosaiken und Artefakte heute im Nationalmuseum für Geschichte und Kunst aufbewahrt werden.", lb: "D'Al Bréck vu Ingeldorf iwwer d'Sauer stammt aus dem 13. Joerhonnert an ass eng vun de eelste erhalen Steenbrécker vu Lëtzebuerg. An der Noperschaft gouf am 19. Joerhonnert eng wichteg gallo-réimesch Villa ausgegruewen, deene Mosaiken a Artefakten haut am Nationalmusée fir Geschicht a Konscht opgewaart ginn." },
    region: "Diekirch",
    link: "https://www.visitluxembourg.com/en"
  },
  {
    id: "medernach",
    level: "explorer",
    subLevel: 3,
    name: { en: "Medernach", fr: "Medernach", de: "Medernach", lb: "Méidernach" },
    coords: [49.8083, 6.2994],
    emoji: "🏕️",
    clue: { en: "Nestled where the Black Ernz River cuts through wooded hills in the central Mullerthal, this peaceful village is a hiker's paradise. Its campsite is one of the most popular in Luxembourg, and the riverside trails that wind between mossy boulders and ancient oak trees attract nature lovers from across Europe.", fr: "Niché là où la Noire-Ernz traverse des collines boisées dans le Mullerthal central, ce village paisible est un paradis pour les randonneurs. Son camping est l'un des plus populaires du Luxembourg, et les sentiers le long de la rivière qui serpentent entre des rochers couverts de mousse et de vieux chênes attirent les amoureux de la nature de toute l'Europe.", de: "Wo die Schwarze Ernz durch bewaldete Hügel im zentralen Mullerthal fließt, liegt dieses friedliche Dorf als Wanderparadies. Sein Campingplatz ist einer der beliebtesten in Luxemburg, und die Uferpfade, die zwischen bemoosten Felsen und alten Eichen mäandrieren, ziehen Naturliebhaber aus ganz Europa an.", lb: "Wou d'Schwaarzt Ernz duerch bewaldet Bierger am zentrale Mullerthal fléisst, läit dëst rouegt Duerf als Wandererparadis. Säi Campingplaz ass ee vun de populärste vu Lëtzebuerg, an d'Uferpfade, déi tëschent moosbedeckte Felsen a ale Eechen schlänkelen, zéien Naturfrënn aus ganz Europa un." },
    fact: { en: "Medernach lies on the Mullerthal Trail's central loop. The valley of the Black Ernz River through this area features some of the most dramatic rock formations in the Mullerthal region, including the famous Gorge du Loup (Wolf's Gorge) just east of the village.", fr: "Medernach est situé sur la boucle centrale du sentier du Mullerthal. La vallée de l'Ernz Noire à travers cette zone présente certaines des formations rocheuses les plus spectaculaires de la région du Mullerthal, notamment la célèbre Gorge du Loup juste à l'est du village.", de: "Medernach liegt auf der Zentralschleife des Mullerthal-Trails. Das Tal der Schwarzen Ernz durch diese Gegend zeigt einige der dramatischsten Felsformationen der Mullerthal-Region, darunter die berühmte Gorge du Loup (Wolfsschlucht) östlich des Dorfes.", lb: "Méidernach läit um zentralen Loop vum Mullerthal-Trail. D'Daal vun der Schwaarzer Ernz duerch dës Géigend weist e puer vun de dramatesche Felsformatiounen an der Mullerthal-Regioun, dorënner d'berüümte Gorge du Loup (Wollfsschlucht) östlech vum Duerf." },
    region: "Mersch",
    link: "https://www.visitluxembourg.com/en/place/site/mullerthal-trail"
  },
  {
    id: "junglinster",
    level: "explorer",
    subLevel: 3,
    name: { en: "Junglinster", fr: "Junglinster", de: "Junglinster", lb: "Jonglënster" },
    coords: [49.7183, 6.2467],
    emoji: "📻",
    clue: { en: "On a plateau in central Luxembourg between Luxembourg City and the Mullerthal, this bustling small town is most famous for its giant radio mast—one of the tallest structures in the country. The mast once broadcast Radio Luxembourg (RTL) to millions across Europe.", fr: "Sur un plateau au centre du Luxembourg entre Luxembourg-Ville et le Mullerthal, ce bourg animé est surtout célèbre pour son gigantesque pylône radio—l'une des structures les plus hautes du pays. Le pylône diffusait autrefois Radio Luxembourg (RTL) à des millions de personnes à travers l'Europe.", de: "Auf einem Plateau in Zentralluxemburg zwischen Luxemburg-Stadt und dem Mullerthal ist diese lebhafte Kleinstadt vor allem für ihren riesigen Funkmast bekannt—eines der höchsten Bauwerke des Landes. Der Mast sendete einst Radio Luxemburg (RTL) an Millionen in ganz Europa.", lb: "Op engem Plateau a Zentral-Lëtzebuerg tëschent Lëtzebuerg-Stad an dem Mullerthal ass dës geschäfteg Klengstad virun allem bekannt fir hire riesen Radiomast—ee vun de héchste Bauwierk vum Land. De Mast huet eemol Radio Lëtzebuerg (RTL) un Millioune ganz Europa ausgestraalt." },
    fact: { en: "Junglinster is home to the RTL transmitter station, which broadcast Radio Luxembourg on 208 metres medium wave—one of the most powerful commercial radio stations in Europe from the 1950s to 1980s. The 260-metre mast remains a local landmark, though broadcasting has now moved to digital.", fr: "Junglinster abrite la station émettrice RTL, qui diffusait Radio Luxembourg sur 208 mètres en ondes moyennes—l'une des stations de radio commerciales les plus puissantes d'Europe des années 1950 aux années 1980. Le pylône de 260 mètres reste un repère local, bien que la diffusion soit maintenant passée au numérique.", de: "In Junglinster befindet sich die RTL-Sendestation, die Radio Luxemburg auf 208 Metern Mittelwelle ausstrahlte—einer der stärksten kommerziellen Radiosender Europas von den 1950er bis 1980er Jahren. Der 260-Meter-Mast ist nach wie vor ein lokales Wahrzeichen, obwohl die Ausstrahlung inzwischen auf digital umgestellt wurde.", lb: "Zu Jonglënster ass d'RTL Sendestatioun, déi Radio Lëtzebuerg op 208 Meter Mittelwelle ausgestraalt huet—ee vun de stäerkste kommerzielle Radiostatiounen a Europa vun den 1950er bis 1980er Joeren. Den 260-Meter-Mast bleift en lokale Landmaark, obwuel d'Sendung elo op digital ëmgestallt gouf." },
    region: "Grevenmacher",
    link: "https://www.visitluxembourg.com/en"
  },
  {
    id: "christnach",
    level: "explorer",
    subLevel: 3,
    name: { en: "Christnach", fr: "Christnach", de: "Christnach", lb: "Crëschtnach" },
    coords: [49.7633, 6.3206],
    emoji: "🌿",
    clue: { en: "A tiny village on the edge of the Mullerthal nature reserve in central Luxembourg, this hamlet is surrounded by ancient oak and beech forests. Its setting on the lip of a deep valley provides breathtaking views, and several marked hiking trails begin here.", fr: "Un minuscule village en bordure de la réserve naturelle du Mullerthal au centre du Luxembourg, ce hameau est entouré d'anciennes forêts de chênes et de hêtres. Sa situation au bord d'une profonde vallée offre des vues époustouflantes, et plusieurs sentiers de randonnée balisés partent d'ici.", de: "Ein winziges Dorf am Rande des Mullerthal-Naturschutzgebiets in Zentralluxemburg, umgeben von alten Eichen- und Buchenwäldern. Seine Lage am Rand eines tiefen Tales bietet atemberaubende Aussichten, und mehrere markierte Wanderwege beginnen hier.", lb: "E klenge Duerf um Rand vum Mullerthal-Naturschutzgebitt a Zentral-Lëtzebuerg, ëmginn vun alen Eechen a Buchebëscher. Seng Lag um Rand vun engem déife Daal bitt atembenemend Viste, a verschidde markéiert Wanderweeër fangen hei un." },
    fact: { en: "Christnach lies along the Route du Vin (Wine Route) and the Mullerthal Trail. The village is at the geological boundary between the sandstone Mullerthal and the limestone Gutland, making it a point of interest for geology enthusiasts as well as hikers.", fr: "Christnach est situé le long de la Route du Vin et du sentier du Mullerthal. Le village se trouve à la limite géologique entre le grès du Mullerthal et le calcaire du Gutland, ce qui en fait un point d'intérêt pour les géologues amateurs ainsi que pour les randonneurs.", de: "Christnach liegt am Weinroute und Mullerthal-Trail. Das Dorf liegt an der geologischen Grenze zwischen dem Sandstein-Mullerthal und dem Kalkstein-Gutland, was es zu einem Anziehungspunkt für Geologiebegeisterte und Wanderer gleichermaßen macht.", lb: "Crëschtnach läit laanscht d'Wäinstroos an den Mullerthal-Trail. D'Duerf läit un der geologescher Grenz tëschent dem Sandstein-Mullerthal an dem Kalkstein-Gutland, wat et zu engem Punkt vun Interesse fir Geologiebegeeschterte souwéi Wanderer mécht." },
    region: "Mersch",
    link: "https://www.visitluxembourg.com/en/place/site/mullerthal-trail"
  },
  {
    id: "waldbillig",
    level: "explorer",
    subLevel: 3,
    name: { en: "Waldbillig", fr: "Waldbillig", de: "Waldbillig", lb: "Waldbëlleg" },
    coords: [49.7911, 6.3339],
    emoji: "🦅",
    clue: { en: "Clinging to a steep hillside at the edge of the Black Ernz River valley in the Mullerthal, this village is a favourite of rock climbers. Its position on a high ridge makes it a superb viewpoint over the wooded valleys below and a gateway to some of Luxembourg's most technical hiking terrain.", fr: "Accroché à un versant escarpé au bord de la vallée de l'Ernz Noire dans le Mullerthal, ce village est un favori des grimpeurs. Sa position sur une haute crête en fait un superbe point de vue sur les vallées boisées en contrebas et une porte d'entrée vers certains des terrains de randonnée les plus techniques du Luxembourg.", de: "An einem steilen Hang am Rand des Schwarzen-Ernz-Tals im Mullerthal gelegen, ist dieses Dorf ein Liebling der Kletterer. Seine Lage auf einem hohen Kamm macht es zu einem hervorragenden Aussichtspunkt über die bewaldeten Täler darunter und zu einem Ausgangspunkt für Luxemburgs technisch anspruchsvollstes Wandergelände.", lb: "Un engem steile Hang um Rand vum Schwaarzer-Ernz-Daal am Mullerthal geleeën, ass dëst Duerf e Liiblingsziel vu Kletterer. Seng Lag op enger héijer Kapp mécht et zu engem exzellenten Aussichtspunkt iwwer d'bewaldet Daaler drënner an engem Agankstor zu Lëtzebuerg säin techneschst Wandergelände." },
    fact: { en: "Waldbillig overlooks the convergence of the Black Ernz and White Ernz rivers. The village sits at the heart of the Mullerthal Trail route B, considered the most challenging of the three Mullerthal loops, featuring sheer cliff faces and narrow gorges carved into ancient sandstone.", fr: "Waldbillig surplombe la confluence de l'Ernz Noire et de l'Ernz Blanche. Le village se trouve au cœur du tracé B du sentier du Mullerthal, considéré comme le plus difficile des trois boucles du Mullerthal, avec des falaises abruptes et des gorges étroites taillées dans le grès ancien.", de: "Waldbillig überblickt den Zusammenfluss der Schwarzen und Weißen Ernz. Das Dorf liegt im Herzen des Mullerthal-Trail Route B, der als anspruchsvollster der drei Mullerthal-Schleifen gilt und senkrechte Felswände sowie enge Schluchten im alten Sandstein bietet.", lb: "Waldbëlleg kuckt op d'Zesummelafe vun der Schwaarzer an der Wäisser Ernz erof. D'Duerf läit am Häerz vum Mullerthal-Trail Route B, dee als dee méi haaréiendste vun de dräi Mullerthal-Schleifen ugesinn gëtt, mat senkrechte Felswänn a schmale Schluuchten am ale Sandstein." },
    region: "Grevenmacher",
    link: "https://www.visitluxembourg.com/en/place/site/mullerthal-trail"
  },
  {
    id: "manternach",
    level: "explorer",
    subLevel: 3,
    name: { en: "Manternach", fr: "Manternach", de: "Manternach", lb: "Manternach" },
    coords: [49.6883, 6.4533],
    emoji: "🍇",
    clue: { en: "Tucked between the Moselle River and the wooded Gutland hills along Luxembourg's eastern border, this village is surrounded by vineyards. A popular walking trail links it to Grevenmacher along the Moselle riverside, offering views over the river to Germany on the opposite bank.", fr: "Niché entre la Moselle et les collines boisées du Gutland le long de la frontière orientale du Luxembourg, ce village est entouré de vignobles. Un sentier de randonnée populaire le relie à Grevenmacher le long de la Moselle, offrant des vues sur la rivière vers l'Allemagne sur la rive opposée.", de: "Zwischen dem Moselfluss und den bewaldeten Gutland-Hügeln entlang der östlichen Grenze Luxemburgs eingebettet, ist dieses Dorf von Weinbergen umgeben. Ein beliebter Wanderweg verbindet es mit Grevenmacher entlang des Mosel-Ufers, mit Ausblicken auf den Fluss nach Deutschland am gegenüberliegenden Ufer.", lb: "Tëschent der Musel an de bewaldete Gutland-Bierger laanscht Lëtzebuerg seng éischtlech Grenz agesiedelt, ass dëst Duerf vun Wéngerte ëmginn. En populäre Wanderwee verbënnt et mat Grevenmacher laanscht d'Muselufer, mat Viste iwwer de Floss op Däitschland op der géigeniwwer Säit." },
    fact: { en: "Manternach is part of the Moselle wine appellation. The village gives its name to the Manternach-Grevenmacher wine route section, a scenic stretch of the European Wine Route running along the Luxembourg Moselle. The area produces notable Elbling and Rivaner wines.", fr: "Manternach fait partie de l'appellation viticole Moselle. Le village donne son nom à la section viticole Manternach-Grevenmacher, un tronçon pittoresque de la Route européenne des vins qui longe la Moselle luxembourgeoise. La région produit notamment des vins Elbling et Rivaner.", de: "Manternach gehört zur Mosel-Weinappellation. Das Dorf gibt dem Weinroutenabschnitt Manternach-Grevenmacher seinen Namen, einem malerischen Stück der Europäischen Weinstraße entlang der Luxemburger Mosel. Die Region produziert bemerkenswerte Elbling- und Rivaner-Weine.", lb: "Manternach ass Deel vun der Musel-Weinappellation. D'Duerf gëtt dem Wäinstroosseabschnitt Manternach-Grevenmacher säin Numm, e malerische Stéck vun der europäesche Wäinstroos laanscht d'Lëtzebuerg Musel. D'Regioun produzéiert bemierkenswäert Elbling- a Rivaner-Wäiner." },
    region: "Grevenmacher",
    link: "https://www.vins-moselle-luxembourg.lu"
  },
  {
    id: "meysembourg",
    level: "explorer",
    subLevel: 4,
    name: { en: "Meysembourg Castle", fr: "Château de Meysembourg", de: "Schloss Meysembourg", lb: "Schlass Meysembourg" },
    coords: [49.7783, 6.2706],
    emoji: "🏯",
    clue: { en: "In the rolling hills between Mersch and Mullerthal in central Luxembourg, this intact Renaissance castle still belongs to private owners and is not open to visitors. Its elegant towers and moat are visible from the road, a rare survivor of Luxembourg's many medieval fortifications in near-original condition.", fr: "Dans les collines vallonnées entre Mersch et Mullerthal au centre du Luxembourg, ce château Renaissance intact appartient encore à des propriétaires privés et n'est pas ouvert aux visiteurs. Ses élégantes tours et ses douves sont visibles depuis la route, un rare survivant des nombreuses fortifications médiévales du Luxembourg dans un état quasi original.", de: "In den hügeligen Landschaften zwischen Mersch und Mullerthal in Zentralluxemburg gehört dieses intakte Renaissance-Schloss noch privaten Eigentümern und ist nicht für Besucher zugänglich. Seine eleganten Türme und Gräben sind von der Straße aus sichtbar, ein seltener Überlebender von Luxemburgs vielen mittelalterlichen Befestigungen in nahezu originalem Zustand.", lb: "An de rolligen Bierger tëschent Mersch a Mullerthal a Zentral-Lëtzebuerg gehéiert dëst intakt Renaissance-Schlass nach privaten Eegentümer a ass net fir Bescher zougänglech. Seng elegant Tierm a Gruewe sinn vun der Stroos aus siichtbar, e seltene Iwwerliewer vu Lëtzebuerg senge ville mëttelalterleche Befestigungen an nohzu originalem Zoustand." },
    fact: { en: "Meysembourg Castle was built in its current Renaissance form in the 16th century on older medieval foundations. It has remained in private hands since and has never been open to the public, making it one of Luxembourg's most enigmatic historic buildings.", fr: "Le château de Meysembourg a été construit dans sa forme Renaissance actuelle au XVIe siècle sur des fondations médiévales plus anciennes. Il est resté en mains privées depuis et n'a jamais été ouvert au public, ce qui en fait l'un des bâtiments historiques les plus énigmatiques du Luxembourg.", de: "Schloss Meysembourg wurde in seiner heutigen Renaissanceform im 16. Jahrhundert auf älteren mittelalterlichen Fundamenten erbaut. Es ist seitdem in Privatbesitz geblieben und war nie für die Öffentlichkeit zugänglich, was es zu einem der rätselhaftesten historischen Gebäude Luxemburgs macht.", lb: "Schlass Meysembourg gouf an senger haiteger Renaissance-Form am 16. Joerhonnert op eelere mëttelalterleche Fundamenter gebaut. Et ass säitdem a Privatbesëtz bliwwen an war ni fir d'Ëffentlechkeet zougänglech, wat et zu engem vun de mysteriéisesten historeschen Gebaier vu Lëtzebuerg mécht." },
    region: "Mersch",
    link: "https://www.visitluxembourg.com/en"
  },
  {
    id: "bourscheid-mill",
    level: "explorer",
    subLevel: 4,
    name: { en: "Bourscheid Mill", fr: "Moulin de Bourscheid", de: "Bourscheider Mühle", lb: "Buerscheeder Mühl" },
    coords: [49.9022, 6.0797],
    emoji: "⚙️",
    clue: { en: "Deep in the Sûre valley below Bourscheid Castle, an old watermill sits at the river's edge. This historic mill has been converted into a hotel and restaurant, making it a perfect stopover for hikers and cyclists on the Our-Sûre valley trail. Its setting between cliffs and river is one of Luxembourg's most picturesque.", fr: "Au fond de la vallée de la Sûre en dessous du château de Bourscheid, un ancien moulin à eau se dresse au bord de la rivière. Ce moulin historique a été transformé en hôtel-restaurant, ce qui en fait une escale parfaite pour les randonneurs et les cyclistes sur le sentier de la vallée de l'Our-Sûre. Son cadre entre falaises et rivière est l'un des plus pittoresques du Luxembourg.", de: "Tief im Sauer-Tal unterhalb von Burg Bourscheid steht eine alte Wassermühle am Flussufer. Diese historische Mühle wurde zu einem Hotel-Restaurant umgebaut und ist ein perfekter Zwischenstopp für Wanderer und Radfahrer auf dem Our-Sauer-Talweg. Ihre Lage zwischen Klippen und Fluss ist eine der malerischsten in Luxemburg.", lb: "Déif am Sauerdaal ënner der Buerg Bourscheid steet eng al Waassermille um Flossrand. Dës historesch Mille gouf zu engem Hotel-Restaurant ëmgebaut a mécht et zu engem perfekte Zwëschenhalt fir Wanderer a Radfahrer um Our-Sauer Daalpfad. Seng Lag tëschent Klëppfelsen a Floss ass eng vun de malereschste vu Lëtzebuerg." },
    fact: { en: "Bourscheid Mill (Moulin de Bourscheid) is an 18th-century water mill that harnessed the power of the Sûre River. The building is now a classified heritage site and operates as a charming hotel and restaurant, sitting directly beneath the spectacular Bourscheid Castle ruins.", fr: "Le moulin de Bourscheid est un moulin à eau du XVIIIe siècle qui utilisait la force de la Sûre. Le bâtiment est désormais un site du patrimoine classé et fonctionne comme un charmant hôtel-restaurant, situé directement sous les spectaculaires ruines du château de Bourscheid.", de: "Die Bourscheider Mühle ist eine Wassermühle aus dem 18. Jahrhundert, die die Kraft der Sauer nutzte. Das Gebäude ist heute ein klassifiziertes Kulturdenkmal und betreibt ein charmantes Hotel-Restaurant direkt unter den spektakulären Ruinen von Burg Bourscheid.", lb: "D'Buerscheeder Mille ass eng Waassermille aus dem 18. Joerhonnert, déi d'Kraaft vun der Sauer genotzt huet. D'Gebaier ass haut en inventarisée Erbesite a betreibt e charmantt Hotel-Restaurant direkt ënner de spektakuläre Ruinen vun der Buerg Bourscheid." },
    region: "Diekirch",
    link: "https://www.visitluxembourg.com/en/place/site/bourscheid-castle"
  },
  {
    id: "rindschleiden",
    level: "explorer",
    subLevel: 4,
    name: { en: "Rindschleiden Chapel", fr: "Chapelle de Rindschleiden", de: "Kapelle Rindschleiden", lb: "Kapell Rindschleiden" },
    coords: [49.8681, 5.9403],
    emoji: "⛪",
    clue: { en: "High on a hill deep in the Ardennes near the Belgian border, this tiny Romanesque chapel stands alone in a field. Despite its remote location, it draws pilgrims and visitors who make the trek through the forest for its extraordinary medieval frescoes, which have survived nearly intact for over 700 years.", fr: "Haut sur une colline au cœur des Ardennes près de la frontière belge, cette petite chapelle romane se dresse seule dans un champ. Malgré son emplacement reculé, elle attire pèlerins et visiteurs qui font le trek à travers la forêt pour ses extraordinaires fresques médiévales, qui ont survécu presque intactes depuis plus de 700 ans.", de: "Hoch auf einem Hügel tief in den Ardennen nahe der belgischen Grenze steht diese kleine romanische Kapelle allein auf einem Feld. Trotz ihrer abgelegenen Lage zieht sie Pilger und Besucher an, die durch den Wald pilgern für ihre außerordentlichen mittelalterlichen Fresken, die fast unversehrt seit über 700 Jahren erhalten blieben.", lb: "Héich op engem Bierg déif an den Ardennen no bei der belgescher Grenz steet dës kleng romanisch Kapell eleng op engem Feld. Trotz hirer ofgelegener Lag zitt si Pilger a Bescher un, déi duerch de Bësch wanderen fir hir aussergewéinlech mëttelalterleche Freskoen, déi bal onverschiert zanter iwwer 700 Joer erhal blouf sinn." },
    fact: { en: "The chapel of Rindschleiden dates to the 13th century and contains some of the best-preserved medieval frescoes in Luxembourg. Painted around 1350, they depict scenes from the lives of saints and are remarkably vivid. The chapel is a listed national monument and can be visited with a key borrowed from the nearby farmhouse.", fr: "La chapelle de Rindschleiden date du XIIIe siècle et contient certaines des fresques médiévales les mieux conservées du Luxembourg. Peintes vers 1350, elles représentent des scènes de la vie des saints et sont remarquablement vivantes. La chapelle est un monument national classé et peut être visitée avec une clé empruntée à la ferme voisine.", de: "Die Kapelle Rindschleiden stammt aus dem 13. Jahrhundert und enthält einige der am besten erhaltenen mittelalterlichen Fresken Luxemburgs. Um 1350 gemalt, zeigen sie Szenen aus dem Leben der Heiligen und sind bemerkenswert lebendig. Die Kapelle ist ein nationales Baudenkmal und kann mit einem Schlüssel, der vom nahe gelegenen Bauernhof ausgeliehen wird, besichtigt werden.", lb: "D'Kapell vu Rindschleiden stammt aus dem 13. Joerhonnert an enthält e puer vun de beschterhalenen mëttelalterleche Freskoen vu Lëtzebuerg. Géint 1350 gemolt, weisen si Szenen aus dem Liewen vun Hellegen a sinn bemierkenswäert liewlech. D'Kapell ass en nationalent Baudenkmal a kann mat engem Schlëssel, deen vum nahe Baurenhaus geléint gëtt, besicht ginn." },
    region: "Wiltz",
    link: "https://www.visitluxembourg.com/en/place/site/rindschleiden"
  },
  {
    id: "biwer",
    level: "explorer",
    subLevel: 4,
    name: { en: "Biwer", fr: "Biwer", de: "Biwer", lb: "Biwer" },
    coords: [49.6811, 6.4189],
    emoji: "🍷",
    clue: { en: "A quiet wine village nestled in the hills behind the Moselle valley in eastern Luxembourg, this community is known for a restored historic mill and a network of vineyard walking trails. The view from its hill down into the Moselle valley is considered one of the most beautiful panoramas of the wine region.", fr: "Village viticole tranquille niché dans les collines derrière la vallée de la Moselle dans l'est du Luxembourg, cette commune est connue pour un moulin historique restauré et un réseau de sentiers pédestres à travers les vignobles. La vue depuis sa colline vers la vallée de la Moselle est considérée comme l'un des plus beaux panoramas de la région viticole.", de: "Dieses stille Weindorf in den Hügeln hinter dem Moseltal in Ostluxemburg ist bekannt für eine restaurierte historische Mühle und ein Netz von Weinberg-Wanderwegen. Der Blick von seinem Hügel ins Moseltal gilt als eines der schönsten Panoramen der Weinregion.", lb: "Dëst rouegt Wäinduerf an de Bierger hannert dem Museltal am Oste vu Lëtzebuerg ass bekannt fir eng restauréiert historesch Mille an e Netz vu Wéngertwanderweeër. D'Aussicht vu sengem Bierg an d'Museltal gëtt als ee vun de schéinste Panoramen vun der Wäinregioun ugesinn." },
    fact: { en: "Biwer is part of the Moselle-Est wine sub-region. The restored Biwer mill dates to the 18th century and sits on the Biwerbaach stream, a small tributary of the Moselle. The village is part of the Route du Vin, Luxembourg's scenic wine tourism route along the Moselle.", fr: "Biwer fait partie de la sous-région viticole Moselle-Est. Le moulin de Biwer restauré date du XVIIIe siècle et est situé sur le Biwerbaach, un petit affluent de la Moselle. Le village fait partie de la Route du Vin, la pittoresque route du tourisme viticole du Luxembourg le long de la Moselle.", de: "Biwer ist Teil der Weinregion Mosel-Ost. Die restaurierte Biwerer Mühle stammt aus dem 18. Jahrhundert und liegt am Biwerbaach, einem kleinen Nebenfluss der Mosel. Das Dorf ist Teil der Route du Vin, Luxemburgs malerischer Weintourismusroute entlang der Mosel.", lb: "Biwer ass Deel vun der Wäinregioun Musel-Ost. D'restauréiert Biwermille stammt aus dem 18. Joerhonnert a läit um Biwerbaach, engem klengen Niewebuch vun der Musel. D'Duerf ass Deel vun der Route du Vin, Lëtzebuerg seng malerisch Wäintourismus-Stroos laanscht d'Musel." },
    region: "Grevenmacher",
    link: "https://www.vins-moselle-luxembourg.lu"
  },
  {
    id: "mertzig",
    level: "explorer",
    subLevel: 4,
    name: { en: "Mertzig", fr: "Mertzig", de: "Mertzig", lb: "Märtzig" },
    coords: [49.8239, 6.1011],
    emoji: "🐄",
    clue: { en: "A tidy farming village on the Alzette River in central Luxembourg, this community is known for a beautiful Romanesque church tower and its pastoral agricultural landscape. Its location along the Alzette cycling route makes it a regular stop for cyclists exploring the river valleys north of the capital.", fr: "Village agricole soigné sur la rivière Alzette au centre du Luxembourg, cette commune est connue pour un beau clocher roman et son paysage agricole pastoral. Sa situation le long de la piste cyclable de l'Alzette en fait une halte régulière pour les cyclistes explorant les vallées fluviales au nord de la capitale.", de: "Ein gepflegtes Bauerndorf an der Alzette in Zentralluxemburg ist bekannt für einen schönen romanischen Kirchturm und seine ländliche Agrarlandschaft. Seine Lage am Alzette-Radweg macht es zu einer regelmäßigen Station für Radfahrer, die die Flusstäler nördlich der Hauptstadt erkunden.", lb: "E gepfleegt Bauerenduerf un der Alzette a Zentral-Lëtzebuerg ass bekannt fir e schéine romanesche Kierchetuerm an seng pastoral Landwirtschaftslandschaft. Seng Lag um Alzettradwee mécht et zu enger regelméisseger Stopp fir Radfahrer, déi d'Flossdeeler nërdlech vun der Haaptstad erkunden." },
    fact: { en: "Mertzig's St. Martin church features a well-preserved 12th-century Romanesque tower, one of the finest examples of this architectural style in the Alzette Valley. The village sits in the fertile middle Alzette plain, an agricultural zone known for cattle farming and crop production.", fr: "L'église Saint-Martin de Mertzig possède un clocher roman du XIIe siècle bien conservé, l'un des meilleurs exemples de ce style architectural dans la vallée de l'Alzette. Le village est situé dans la fertile plaine de l'Alzette moyenne, une zone agricole connue pour l'élevage bovin et la production de cultures.", de: "Die Kirche St. Martin in Mertzig hat einen gut erhaltenen romanischen Turm aus dem 12. Jahrhundert, eines der besten Beispiele dieses Architekturstils im Alzette-Tal. Das Dorf liegt in der fruchtbaren mittleren Alzette-Ebene, einer landwirtschaftlichen Zone, bekannt für Rinderzucht und Feldfrüchteanbau.", lb: "D'Kierch vum Hellegen Martin zu Märtzig huet een gutt erhaltene romanesche Tuerm aus dem 12. Joerhonnert, ee vun de beschten Beispiller vun dësem Architekturstil am Alzettdaal. D'Duerf läit an der fruchtbarer mëttlerer Alzettebeen, enger landwirtschaftlecher Zon bekannt fir Véihzucht a Feldfrüchteproduzioun." },
    region: "Diekirch",
    link: "https://www.visitluxembourg.com/en"
  },
  {
    id: "elvange",
    level: "explorer",
    subLevel: 5,
    name: { en: "Elvange Castle", fr: "Château d'Elvange", de: "Burg Elvingen", lb: "Buerg Elwingen" },
    coords: [49.4844, 6.2333],
    emoji: "🏰",
    clue: { en: "Standing in the rolling farmland of southern Luxembourg near the French border, the ruined tower of this medieval castle watches over a quiet valley. Now privately owned, its silhouette can be seen from the surrounding countryside and it is one of the lesser-visited castle ruins in the country.", fr: "Dressé dans les terres agricoles vallonnées du sud du Luxembourg près de la frontière française, la tour en ruine de ce château médiéval veille sur une vallée tranquille. Propriété privée, sa silhouette peut être aperçue depuis la campagne environnante, et c'est l'une des ruines de châteaux les moins visitées du pays.", de: "Im hügeligen Agrarland Südluxemburgs nahe der französischen Grenze bewacht der Ruinenturm dieser mittelalterlichen Burg ein stilles Tal. Jetzt in Privatbesitz, ist seine Silhouette von der umliegenden Landschaft aus zu sehen, und es ist eine der am wenigsten besuchten Burgruinen des Landes.", lb: "Am rollige Ackerland vum Süde vu Lëtzebuerg no bei der franséischer Grenz bewacht den Ruinetuerm vun dëser mëttelalterlecher Buerg eng roueg Daal. Haut a Privatbesëtz, kann seng Silhouette vun der ëmleender Landschaft aus gesinn ginn, an ass et eng vun de wéinegste besuchten Buergriinen vum Land." },
    fact: { en: "Elvange Castle (Château d'Elvange) dates to the 13th century and was once a residence of the lords of Elvange, a minor noble family linked to the Counts of Luxembourg. The tower keep is all that remains and the site is closed to the public as private property.", fr: "Le château d'Elvange date du XIIIe siècle et fut autrefois la résidence des seigneurs d'Elvange, une famille noble mineure liée aux Comtes de Luxembourg. Seul subsiste le donjon, et le site est fermé au public en tant que propriété privée.", de: "Burg Elvingen stammt aus dem 13. Jahrhundert und war einst der Wohnsitz der Herren von Elvingen, einer kleinen Adelsfamilie, die mit den Grafen von Luxemburg verbunden war. Der Bergfried ist das Einzige, was übrig geblieben ist, und das Gelände ist als Privatbesitz für die Öffentlichkeit gesperrt.", lb: "D'Buerg Elwingen stammt aus dem 13. Joerhonnert an war eemol d'Wunnsëtz vun de Häre vun Elwingen, enger klenger Adelsfamill, déi mat de Grafe vu Lëtzebuerg verbonnen war. Den Tuerm ass alles wat iwwreg bliwwen ass, an d'Site ass als Privatbesëtz fir d'Ëffentlechkeet gespärrt." },
    region: "Remich",
    link: "https://www.visitluxembourg.com/en"
  },
  {
    id: "hobscheid",
    level: "explorer",
    subLevel: 5,
    name: { en: "Hobscheid", fr: "Hobscheid", de: "Hobscheid", lb: "Hubscht" },
    coords: [49.6964, 5.9617],
    emoji: "🌳",
    clue: { en: "A serene village on the plateau of western Luxembourg near the Belgian border, this community sits amidst extensive forests. The surrounding woodland of the Eisch Valley nature park makes it a tranquil escape from the city, and local trails lead through ancient oak and hornbeam forests little visited by tourists.", fr: "Village serein sur le plateau de l'ouest du Luxembourg près de la frontière belge, cette commune est entourée de vastes forêts. Le bois environnant du parc naturel de la vallée de l'Eisch en fait une échappatoire tranquille de la ville, et les sentiers locaux mènent à travers d'anciennes forêts de chênes et de charmes peu visitées par les touristes.", de: "Ein beschauliches Dorf auf dem Plateau Westluxemburgs nahe der belgischen Grenze, umgeben von ausgedehnten Wäldern. Die umliegenden Wälder des Naturparks Eischtal bieten eine ruhige Auszeit von der Stadt, und lokale Wanderwege führen durch alte Eichen- und Hainbuchenwälder, die von Touristen wenig besucht werden.", lb: "E rouegt Duerf op dem Plateau vum Weste vu Lëtzebuerg no bei der belgescher Grenz, ëmginn vun ausgedehnten Bëscher. D'ëmleend Bësch vum Naturpark Eischtal bidden eng roueg Flucht aus der Stad, an lokale Wanderweeër féieren duerch al Eechen- a Hainbuchebëscher, déi vu Touristen wéineg besicht ginn." },
    fact: { en: "Hobscheid is part of the commune of Steinfort in western Luxembourg. The village sits at the edge of the Eisch Valley Nature Park, one of Luxembourg's largest nature reserves, covering 233 km² of forested hills, rivers, and traditional villages. The area is notable for its ancient boundary stones marking the old borders between Luxembourg and Belgium.", fr: "Hobscheid fait partie de la commune de Steinfort dans l'ouest du Luxembourg. Le village est situé à la lisière du Parc naturel de la vallée de l'Eisch, l'une des plus grandes réserves naturelles du Luxembourg, couvrant 233 km² de collines boisées, rivières et villages traditionnels. La zone est notable pour ses anciennes bornes frontières marquant les anciennes frontières entre le Luxembourg et la Belgique.", de: "Hobscheid gehört zur Gemeinde Steinfort im Westen Luxemburgs. Das Dorf liegt am Rand des Naturparks Eischtal, eines der größten Naturschutzgebiete Luxemburgs mit 233 km² bewaldeten Hügeln, Flüssen und traditionellen Dörfern. Die Gegend ist bekannt für ihre alten Grenzsteine, die die ehemaligen Grenzen zwischen Luxemburg und Belgien markieren.", lb: "Hubscht ass Deel vun der Gemeng Steinfort am Weste vu Lëtzebuerg. D'Duerf läit um Rand vum Naturpark Eischtal, ee vun Lëtzebuerg senge gréisste Naturschutzgebitter, dat 233 km² bewaldet Bierger, Flëss a traditionell Dierfer deckt. D'Géigend ass bemierkenswäert fir hir al Grenzsteng, déi d'al Grenzen tëschent Lëtzebuerg a Belgien markéieren." },
    region: "Capellen",
    link: "https://www.visitluxembourg.com/en/region/ardennes"
  },
  {
    id: "bascharage",
    level: "explorer",
    subLevel: 5,
    name: { en: "Bascharage", fr: "Bascharage", de: "Bascharage", lb: "Nidderkuer" },
    coords: [49.5658, 5.9089],
    emoji: "🏭",
    clue: { en: "In the southwest of Luxembourg near the French and Belgian borders, this industrial town sits in the valley of the Chiers River. Its name in Luxembourgish means \"lower settlement,\" reflecting its position in the valley below the plateau. A brewery and several manufacturing facilities make it an important economic centre of the region.", fr: "Dans le sud-ouest du Luxembourg près des frontières française et belge, cette ville industrielle est située dans la vallée de la Chiers. Son nom en luxembourgeois signifie \"établissement inférieur\", reflétant sa position dans la vallée sous le plateau. Une brasserie et plusieurs installations industrielles en font un centre économique important de la région.", de: "Im Südwesten Luxemburgs nahe der französischen und belgischen Grenze liegt diese Industriestadt im Tal der Chiers. Ihr luxemburgischer Name bedeutet „untere Siedlung\" und spiegelt ihre Lage im Tal unterhalb des Plateaus wider. Eine Brauerei und mehrere Fertigungsstätten machen sie zu einem wichtigen Wirtschaftszentrum der Region.", lb: "Am Südweste vu Lëtzebuerg no bei der franséischer a belgescher Grenz läit dës Industriestad am Daal vun der Chiers. Hire Numm op Lëtzebuergesch heescht \"niddert Siidlung\", wat hir Positioun am Daal ënner dem Plateau reflektéiert. Eng Brauerei a verschidde Fertigungsanlagen maachen et zu engem wichtegen wirtschaftlechen Zentrum vun der Regioun." },
    fact: { en: "Bascharage is home to Brasserie Nationale, which produces Bofferding and Funck-Bricher beers—among the most popular Luxembourgish beers. The brewery was founded in 1764 and is one of the oldest continuously operating breweries in Luxembourg.", fr: "Bascharage abrite la Brasserie Nationale, qui produit les bières Bofferding et Funck-Bricher—parmi les bières luxembourgeoises les plus populaires. La brasserie a été fondée en 1764 et est l'une des plus anciennes brasseries en activité continue au Luxembourg.", de: "In Bascharage befindet sich die Brasserie Nationale, die Bofferding- und Funck-Bricher-Biere herstellt—zu den beliebtesten luxemburgischen Bieren. Die Brauerei wurde 1764 gegründet und ist eine der ältesten durchgehend betriebenen Brauereien Luxemburgs.", lb: "Zu Nidderkuer ass d'Brasserie Nationale, déi Bofferding a Funck-Bricher Béier produzéiert—zu de populärste lëtzebuergeschen Béieren. D'Brauerei gouf 1764 gegrënnt an ass eng vun de eelste kontinuéierlech betriebene Brauereien vu Lëtzebuerg." },
    region: "Capellen",
    link: "https://www.bofferding.lu"
  },
  {
    id: "hautcharage",
    level: "explorer",
    subLevel: 5,
    name: { en: "Hautcharage", fr: "Hautcharage", de: "Hautcharage", lb: "Iewerkuer" },
    coords: [49.5758, 5.9025],
    emoji: "🌾",
    clue: { en: "Sitting on a plateau above its neighbour in the southwest of Luxembourg, this quiet agricultural village has views over towards France and Belgium. A charming old church and traditional farmhouses give it the feel of a timeless rural Luxembourg that few tourists ever discover.", fr: "Perché sur un plateau au-dessus de son voisin dans le sud-ouest du Luxembourg, ce village agricole tranquille offre des vues vers la France et la Belgique. Une charmante vieille église et des fermes traditionnelles lui donnent l'atmosphère d'un Luxembourg rural intemporel que peu de touristes découvrent.", de: "Auf einem Plateau über seinem Nachbarort im Südwesten Luxemburgs gelegen, genießt dieses stille Bauerndorf Ausblicke nach Frankreich und Belgien. Eine reizende alte Kirche und traditionelle Bauernhöfe verleihen ihm das Flair eines zeitlosen ländlichen Luxemburgs, das wenige Touristen je entdecken.", lb: "Op engem Plateau iwwer sengem Noper am Südweste vu Lëtzebuerg geleeën, huet dëst rouegt Bauerenduerf Viste Richtung Frankräich a Belgien. Eng charmantt al Kierch a traditionell Bauerenhaiser ginn him d'Feeling vun engem zeitlose ländlechen Lëtzebuerg, dat wéineg Touristen je entdecken." },
    fact: { en: "Hautcharage (\"upper Charage\") sits atop the Chiers plateau at about 370m altitude. The village forms a pair with neighbouring Bascharage (Nidderkuer) below. The area was important for iron ore mining in the 19th and early 20th centuries, forming part of the Minett industrial belt.", fr: "Hautcharage (haut Charage) est perché sur le plateau de la Chiers à environ 370 m d'altitude. Le village forme une paire avec son voisin Bascharage (Nidderkuer) en dessous. La région était importante pour l'extraction du minerai de fer aux XIXe et début du XXe siècles, faisant partie de la ceinture industrielle du Minett.", de: "Hautcharage (oberes Charage) sitzt auf dem Chiers-Plateau auf etwa 370 m Höhe. Das Dorf bildet ein Paar mit dem benachbarten Bascharage (Nidderkuer) darunter. Das Gebiet war im 19. und frühen 20. Jahrhundert wichtig für den Eisenerzabbau und bildete Teil des Minett-Industriegürtels.", lb: "Iewerkuer (iewert Charage) läit op dem Chiers-Plateau op ronderëm 370 m Héicht. D'Duerf bildet e Paar mat sengem Noper Nidderkuer drënner. D'Géigend war am 19. an fréien 20. Joerhonnert wichteg fir Ierzofbau a war Deel vum Minett-Industriegürtel." },
    region: "Capellen",
    link: "https://www.visitluxembourg.com/en/region/minett"
  },
  {
    id: "sandweiler",
    level: "explorer",
    subLevel: 1,
    name: { en: "Sandweiler", fr: "Sandweiler", de: "Sandweiler", lb: "Sandweiler" },
    coords: [49.5936, 6.2022],
    emoji: "🪖",
    clue: { en: "East of Luxembourg City on the plateau above the Alzette valley, this quiet village holds a solemn German military cemetery from World War II. Rows of dark basalt crosses mark the graves of over 10,000 German soldiers, making it the largest German war cemetery in Luxembourg.", fr: "À l'est de Luxembourg-Ville sur le plateau au-dessus de la vallée de l'Alzette, ce village paisible abrite un cimetière militaire allemand solennel de la Seconde Guerre mondiale. Des rangées de croix en basalte sombre marquent les tombes de plus de 10 000 soldats allemands, ce qui en fait le plus grand cimetière de guerre allemand au Luxembourg.", de: "Östlich von Luxemburg-Stadt auf dem Plateau über dem Alzettetal liegt dieses stille Dorf mit einem ernsten deutschen Militärfriedhof aus dem Zweiten Weltkrieg. Reihen dunkler Basaltkreuze markieren die Gräber von über 10.000 deutschen Soldaten und machen ihn zum größten deutschen Kriegsfriedhof in Luxemburg.", lb: "Östlech vu Lëtzebuerg-Stad op dem Plateau iwwer dem Alzettedaal läit dëst rouegt Duerf mat engem ernsten däitschen Militärfriedhof aus dem Zweete Weltkrich. Reie vu donkele Basaltkräizer markéieren d'Griewer vu méi wéi 10.000 däitsche Zaldoten, wat et zum gréisste däitschen Krichsfriedhof vu Lëtzebuerg mécht." },
    fact: { en: "The German Military Cemetery at Sandweiler contains 10,913 graves of German soldiers from both World Wars. The cemetery is maintained by the German War Graves Commission (Volksbund Deutsche Kriegsgräberfürsorge) and is open to visitors year-round.", fr: "Le cimetière militaire allemand de Sandweiler contient 10 913 tombes de soldats allemands des deux guerres mondiales. Le cimetière est entretenu par la Commission allemande des sépultures militaires et est ouvert aux visiteurs toute l'année.", de: "Der Deutsche Militärfriedhof Sandweiler enthält 10.913 Gräber deutscher Soldaten aus beiden Weltkriegen. Der Friedhof wird vom Volksbund Deutsche Kriegsgräberfürsorge gepflegt und ist ganzjährig für Besucher geöffnet.", lb: "Den Däitschen Militärfriedhof Sandweiler enthält 10.913 Griewer vu däitsche Zaldoten aus béide Weltkricher. De Friedhof gëtt vum Volksbund Deutsche Kriegsgräberfürsorge gepfleegt an ass d'ganzt Joer fir Bescher op." },
    region: "Luxembourg City",
    link: "https://www.volksbund.de/en/war-graves/find-a-cemetery/luxembourg-sandweiler"
  },
  {
    id: "rumelange-mine",
    level: "explorer",
    subLevel: 5,
    name: { en: "Rumelange Mine Museum", fr: "Musée des mines de Rumelange", de: "Bergbaumuseum Rümelingen", lb: "Biergbaumusée Rëmeleng" },
    coords: [49.4608, 6.0264],
    emoji: "⛏️",
    clue: { en: "In the red-earth industrial south of Luxembourg near the French border, this unique museum lets visitors descend into a real iron ore mine that operated until the 1970s. Riding a miners' train through the underground galleries, you discover firsthand how Luxembourg built its steel industry.", fr: "Dans le sud industriel aux terres rouges du Luxembourg près de la frontière française, ce musée unique permet aux visiteurs de descendre dans une vraie mine de minerai de fer qui fonctionnait jusqu'aux années 1970. En montant dans un train de mineurs à travers les galeries souterraines, vous découvrez de première main comment le Luxembourg a construit son industrie sidérurgique.", de: "Im rotlehmigen Industrie-Süden Luxemburgs nahe der französischen Grenze lässt dieses einzigartige Museum Besucher in eine echte Eisenerzmine hinabsteigen, die bis in die 1970er Jahre in Betrieb war. Mit dem Grubenzug durch die unterirdischen Galerien erleben Sie hautnah, wie Luxemburg seine Stahlindustrie aufgebaut hat.", lb: "Am roudem Industrie-Süden vu Lëtzebuerg no bei der franséischer Grenz léisst dëst eenzegaarteg Museum Bescher an eng richteg Äerztimin ofsteigen, déi bis an d'1970er Jore bedriwwe gouf. Mat dem Gruewenzug duerch d'ënnerierdesch Galerie entdeckt der direkt, wéi Lëtzebuerg seng Stolindustrie gebaut huet." },
    fact: { en: "The Rumelange National Mining Museum (Musée National des Mines) sits inside a real iron ore mine that operated from 1900 to 1970. Guided tours take visitors 800m into the mountain on a miners' train, showing original extraction equipment and the working conditions of Luxembourg's iron miners.", fr: "Le Musée national des Mines de Rumelange est situé dans une vraie mine de minerai de fer qui a fonctionné de 1900 à 1970. Des visites guidées emmènent les visiteurs à 800 m dans la montagne en train de mineurs, montrant l'équipement d'extraction original et les conditions de travail des mineurs de fer luxembourgeois.", de: "Das Nationale Bergbaumuseum Rümelingen befindet sich in einer echten Eisenerzmine, die von 1900 bis 1970 betrieben wurde. Führungen bringen Besucher 800m im Grubenzug in den Berg, zeigen originale Abbaugeräte und die Arbeitsbedingungen luxemburgischer Eisenbergleute.", lb: "D'Nationalbiergbaumusée Rëmeleng läit an enger echter Äerztimin, déi vun 1900 bis 1970 bedriwwe gouf. Gefouert Rondgäng bréngen Bescher 800m mat dem Gruewenzug an de Bierg, weisen originell Ofbauequipement an d'Aarbechtskonditiounen vu lëtzebuergeschen Äerztminnerën." },
    region: "Esch",
    link: "https://www.visitluxembourg.com/en/place/site/rumelange-mine-museum"
  },
  {
    id: "buurgplaatz",
    level: "geographer",
    subLevel: 1,
    name: { en: "Buurgplaatz (Highest Point)", fr: "Buurgplaatz (Point culminant)", de: "Buurgplaatz (Höchster Punkt)", lb: "Buurgplaatz (Héchste Punkt)" },
    coords: [50.1625, 6.0169],
    emoji: "⛰️",
    clue: { en: "On the northern plateau of Luxembourg where the land stretches flat and windswept near the Belgian border, an unassuming forested hill rises to mark the country's absolute high point. There is no dramatic peak—just a quiet clearing in the Ardennes forest where a stone marker and a small monument indicate you are standing at the roof of Luxembourg.", fr: "Sur le plateau nord du Luxembourg où les terres s'étendent plates et balayées par le vent près de la frontière belge, une colline boisée sans prétention s'élève pour marquer le point culminant absolu du pays. Il n'y a pas de pic spectaculaire—juste une clairière tranquille dans la forêt ardennaise où une borne et un petit monument indiquent que vous vous trouvez au toit du Luxembourg.", de: "Auf dem Nordplateau Luxemburgs, wo das Land flach und windig nahe der belgischen Grenze liegt, erhebt sich ein unscheinbarer bewaldeter Hügel zum absoluten Hochpunkt des Landes. Es gibt keinen dramatischen Gipfel—nur eine ruhige Lichtung im Ardennenwald, wo ein Steinmarker und ein kleines Monument anzeigen, dass man auf dem Dach Luxemburgs steht.", lb: "Op dem Nordplateau vu Lëtzebuerg, wou d'Land flach a wänteg no bei der belgescher Grenz läit, erhieft sech en onscheinbare bewaldate Bierg zum absolute Héichpunkt vum Land. Et gëtt kee dramateschen Gipfel—nëmmen eng roueg Liichtung am Ardennebësch, wou e Steenmerkur an en klenge Monument weisen, datt een op dem Daach vu Lëtzebuerg steet." },
    fact: { en: "Buurgplaatz is Luxembourg's highest point at 560 metres above sea level. It lies in the commune of Troisvierges in the far north. Despite being the country's summit, it is a gentle forested plateau rather than a dramatic mountain, typical of the Ardennes landscape.", fr: "Le Buurgplaatz est le point culminant du Luxembourg à 560 mètres d'altitude. Il se trouve dans la commune de Troisvierges, à l'extrême nord. Malgré le fait d'être le sommet du pays, c'est un doux plateau boisé plutôt qu'une montagne spectaculaire, typique du paysage ardennais.", de: "Der Buurgplaatz ist Luxemburgs höchster Punkt mit 560 Metern über dem Meeresspiegel. Er liegt in der Gemeinde Ulflingen im äußersten Norden. Obwohl er der Gipfel des Landes ist, ist er ein sanftes bewaldetes Plateau und kein dramatischer Berg, typisch für die Ardennenlandschaft.", lb: "De Buurgplaatz ass Lëtzebuerg säi héchste Punkt mat 560 Meter iwwer dem Mieresniveau. Hien läit an der Gemeng Ulflingen am wäidsten Norden. Obwuel hien d'Gipfel vum Land ass, ass hien e sanften bewaldete Plateau an keen dramatischen Bierg, typesch fir d'Ardennenlandschaft." },
    region: "Clervaux",
    link: "https://www.visitluxembourg.com/en/region/ardennes"
  },
  {
    id: "our-sure-confluence",
    level: "geographer",
    subLevel: 1,
    name: { en: "Our-Sûre Confluence", fr: "Confluence Our-Sûre", de: "Our-Sauer Zusammenfluss", lb: "Our-Sauer Zesummefale" },
    coords: [49.8261, 6.2303],
    emoji: "🌊",
    clue: { en: "Deep in the wooded valleys of northern Luxembourg, two important rivers of the country meet at a dramatic bend. This remote spot, accessible only by forest trails, marks the point where one river flowing from the north joins another coming from the west, creating a moment of geographic significance that few visitors ever reach.", fr: "Au fond des vallées boisées du nord du Luxembourg, deux rivières importantes du pays se rejoignent en un virage spectaculaire. Ce site reculé, accessible uniquement par des sentiers forestiers, marque le point où une rivière venant du nord rejoint une autre venant de l'ouest, créant un moment de signification géographique que peu de visiteurs atteignent jamais.", de: "Tief in den bewaldeten Tälern Nordluxemburgs treffen sich zwei wichtige Flüsse des Landes an einer dramatischen Biegung. Dieser abgelegene Ort, nur über Waldwege erreichbar, markiert den Punkt, wo ein Fluss aus dem Norden auf einen anderen aus dem Westen trifft und so einen geographisch bedeutsamen Moment schafft, den nur wenige Besucher je erreichen.", lb: "Déif an de bewaldete Daaler vum Norde vu Lëtzebuerg treffen sech zwee wichteg Flëss vum Land un enger dramatescher Biegung. Dësen ofgeleeene Plaz, nëmmen iwwer Bëschpfade zougänglech, markéiert de Punkt wou e Floss aus dem Norde op en aneren aus dem Weste trëfft a sou e geographesch bedeitende Moment schafft, deen nëmme wéineg Bescher je erreechen." },
    fact: { en: "The Our River flows southward from Belgium and merges with the Sûre River near Reisdorf in northern Luxembourg. This confluence is a key geographical feature: the combined river continues east as the Sûre toward the Moselle. The valley is part of the Our Nature Park, protecting one of the last wild river systems in the Benelux region.", fr: "La rivière Our coule vers le sud depuis la Belgique et se joint à la Sûre près de Reisdorf dans le nord du Luxembourg. Cette confluence est un élément géographique clé : la rivière combinée continue vers l'est sous le nom de Sûre jusqu'à la Moselle. La vallée fait partie du Parc naturel de l'Our, protégeant l'un des derniers systèmes fluviaux sauvages de la région Benelux.", de: "Die Our fließt von Belgien südwärts und mündet bei Reisdorf im Norden Luxemburgs in die Sauer. Dieser Zusammenfluss ist ein wichtiges geographisches Merkmal: der kombinierte Fluss fließt weiter östlich als Sauer zur Mosel. Das Tal ist Teil des Naturparks Our, der eines der letzten wilden Flusssysteme in der Benelux-Region schützt.", lb: "D'Our fléisst vu Belgien südwärts a mënnt bei Reisduerf am Norde vu Lëtzebuerg an d'Sauer. Dëst Zesummefale ass e wichteges geographescht Merkmal: de kombinéierte Floss fléisst weider östlech als Sauer zur Musel. D'Daal ass Deel vum Naturpark Our, deen ee vun de leschte wilde Flossystemen an der Benelux-Regioun schützt." },
    region: "Diekirch",
    link: "https://www.naturpark-our.eu"
  },
  {
    id: "ehnen",
    level: "geographer",
    subLevel: 1,
    name: { en: "Ehnen Wine Museum", fr: "Musée du vin d'Ehnen", de: "Weinmuseum Ehnen", lb: "Wäimusee Iënen" },
    coords: [49.5372, 6.3628],
    emoji: "🍾",
    clue: { en: "In a beautiful wine village on the Moselle, this small museum occupies a historic winery and tells the story of Luxembourg's wine culture through antique wine presses, barrels, and tools. The village itself has just a few hundred inhabitants but its riverside setting and vine-covered slopes make it one of the most photographed spots on the Moselle.", fr: "Dans un beau village viticole sur la Moselle, ce petit musée occupe une cave historique et raconte l'histoire de la culture viticole luxembourgeoise à travers des pressoirs anciens, des tonneaux et des outils. Le village lui-même ne compte que quelques centaines d'habitants, mais son cadre au bord de la rivière et ses pentes couvertes de vignes en font l'un des endroits les plus photographiés de la Moselle.", de: "In einem schönen Weindorf an der Mosel erzählt dieses kleine Museum in einem historischen Weinkeller die Geschichte der luxemburgischen Weinkultur durch antike Weinpressen, Fässer und Werkzeuge. Das Dorf selbst hat nur ein paar Hundert Einwohner, aber seine Lage am Fluss und die weinbedeckten Hänge machen es zu einem der meistfotografierten Orte an der Mosel.", lb: "An engem schéine Wäinduerf un der Musel erzielt dëst klenge Museum an enger historescher Kellerei d'Geschicht vu Lëtzebuerg senger Wäikultur duerch antik Wäipressen, Fässer a Werkzich. D'Duerf selwer huet nëmme e puer Honnert Awunner awer seng Lag um Flossuefer an d'wéngertbedeckte Häng maache vun ihm ee vun de meeschte fotograféierte Plazen un der Musel." },
    fact: { en: "The Wine Museum in Ehnen (Musée du Vin) is Luxembourg's national wine museum, housed in a restored 18th-century winegrower's house. It documents the history of viticulture in Luxembourg from Roman times to the present, with a collection of over 2,000 historic winemaking objects.", fr: "Le Musée du Vin à Ehnen est le musée national du vin du Luxembourg, installé dans une maison de vigneron du XVIIIe siècle restaurée. Il documente l'histoire de la viticulture au Luxembourg depuis l'époque romaine jusqu'à nos jours, avec une collection de plus de 2 000 objets historiques liés à la viticulture.", de: "Das Weinmuseum Ehnen ist Luxemburgs nationales Weinmuseum, untergebracht in einem restaurierten Winzerhaus aus dem 18. Jahrhundert. Es dokumentiert die Geschichte des Weinbaus in Luxemburg von der Römerzeit bis heute, mit einer Sammlung von über 2.000 historischen Weinbauobjekten.", lb: "De Wäimusee Iënen ass Lëtzebuerg säi Nationalwäimusee, ënnerengebracht an engem restauréierte Wäibauernhaus aus dem 18. Joerhonnert. Hien dokumentéiert d'Geschicht vum Wäibau a Lëtzebuerg vun der Réimerzäit bis haut, mat enger Sammlung vu méi wéi 2.000 historesche Wäibauobjekter." },
    region: "Remich",
    link: "https://www.visitluxembourg.com/en/place/site/wine-museum-ehnen"
  },
  {
    id: "tuntange",
    level: "geographer",
    subLevel: 1,
    name: { en: "Tuntange Reservoir", fr: "Réservoir de Tuntange", de: "Stausee Tuntange", lb: "Stauséi Tunteng" },
    coords: [49.6878, 6.0606],
    emoji: "💧",
    clue: { en: "Hidden in the forested hills west of Luxembourg City, this modest reservoir supplies drinking water to tens of thousands of people. Its wooded shores are a nature reserve where fishing is allowed and where birdwatchers come to spot waterfowl, kingfishers, and grey herons in a protected environment.", fr: "Caché dans les collines boisées à l'ouest de Luxembourg-Ville, ce modeste réservoir fournit de l'eau potable à des dizaines de milliers de personnes. Ses rives boisées sont une réserve naturelle où la pêche est autorisée et où les ornithologues viennent observer canards, martins-pêcheurs et hérons cendrés dans un environnement protégé.", de: "Versteckt in den bewaldeten Hügeln westlich von Luxemburg-Stadt versorgt dieser bescheidene Stausee Zehntausende von Menschen mit Trinkwasser. Seine bewaldeten Ufer sind ein Naturschutzgebiet, wo Angeln erlaubt ist und Vogelbeobachter kommen, um Wasservögel, Eisvögel und Graureiher in einer geschützten Umgebung zu beobachten.", lb: "Verstoppt an de bewaldete Bierger westlech vu Lëtzebuerg-Stad versuerg dëse bescheede Stauséi Zéngdausende vu Mënsche mat Drénkwaasser. Seng bewaldet Ufier sinn e Naturschutzgebitt, wou Fëschen erlaabt ass a Vuelebeobachter kommen, fir Waasservigel, Äiskinneken a groe Reider an enger geschützter Ëmgebung ze observéieren." },
    fact: { en: "The Tuntange reservoir was built in 1965 to supplement Luxembourg City's water supply. It collects water from the Mamer and Eisch river basins. The protected zone around the reservoir is managed as a nature reserve and is closed to motorised vehicles to protect water quality.", fr: "Le réservoir de Tuntange a été construit en 1965 pour compléter l'alimentation en eau de Luxembourg-Ville. Il collecte l'eau des bassins des rivières Mamer et Eisch. La zone protégée autour du réservoir est gérée comme réserve naturelle et est fermée aux véhicules motorisés pour protéger la qualité de l'eau.", de: "Der Stausee Tuntange wurde 1965 zum Ergänzen der Wasserversorgung von Luxemburg-Stadt gebaut. Er sammelt Wasser aus den Einzugsgebieten der Mamer und Eisch. Die Schutzzone rund um den Stausee wird als Naturschutzgebiet verwaltet und ist für Kraftfahrzeuge gesperrt, um die Wasserqualität zu schützen.", lb: "De Stauséi Tunteng gouf 1965 gebaut fir d'Wasserversuergung vu Lëtzebuerg-Stad ze ergänzen. Hien sammelt Waasser aus de Musel- a Eischflossbasen. D'Schutzzon ronderëm de Stauséi gëtt als Naturschutzgebitt verwalt a ass fir Motorfuerdmëttel gespärrt, fir d'Waasserqualitéit ze schützen." },
    region: "Mersch",
    link: "https://www.visitluxembourg.com/en"
  },
  {
    id: "bivels",
    level: "geographer",
    subLevel: 2,
    name: { en: "Bivels", fr: "Bivels", de: "Bivels", lb: "Bivels" },
    coords: [49.9553, 6.1900],
    emoji: "🌊",
    clue: { en: "Clinging to a rocky hillside above the Our River in the far north of Luxembourg, this tiny hamlet is accessible by a single narrow road winding down from the plateau. The dramatic views up and down the river gorge are among the wildest in the country, and the village sees almost no tourist traffic.", fr: "Accroché à un versant rocheux au-dessus de la rivière Our dans l'extrême nord du Luxembourg, ce minuscule hameau est accessible par une seule route étroite qui serpente depuis le plateau. Les vues spectaculaires en amont et en aval des gorges de la rivière sont parmi les plus sauvages du pays, et le village voit presque aucun touriste.", de: "An einem Felshang über der Our im äußersten Norden Luxemburgs gelegen, ist dieses winzige Weiler nur über eine einzige schmale Straße erreichbar, die vom Plateau hinunterführt. Die dramatischen Ausblicke flussauf und flussab durch die Ourschlucht gehören zu den wildesten im Land, und das Dorf erhält kaum Touristenbesuch.", lb: "Un engem Felshang iwwer der Our am wäidsten Norde vu Lëtzebuerg geleeën, ass dësen dënn Haamelt nëmmen iwwer eng eenzeg schmuel Stroos zougänglech, déi vum Plateau erof wënnelt. D'dramatesch Viste flossop an flossof duerch d'Ourschlucht gehéieren zu de wildsten am Land, an d'Duerf gesäit bal kee Touriste." },
    fact: { en: "Bivels is a hamlet of the commune of Putscheid in the Our Valley. The area around Bivels is part of the Upper Our Nature Park and features some of the steepest river terraces in Luxembourg, carved by the Our over millennia. The village has fewer than 100 inhabitants.", fr: "Bivels est un hameau de la commune de Putscheid dans la vallée de l'Our. La région autour de Bivels fait partie du Parc naturel de l'Our supérieur et présente certaines des terrasses fluviales les plus escarpées du Luxembourg, façonnées par l'Our au fil des millénaires. Le village a moins de 100 habitants.", de: "Bivels ist ein Weiler der Gemeinde Putscheid im Our-Tal. Die Umgebung von Bivels ist Teil des Naturparks Obere Our und weist einige der steilsten Flussterrassen Luxemburgs auf, die die Our über Jahrtausende geformt hat. Das Dorf hat weniger als 100 Einwohner.", lb: "Bivels ass en Haamelt vun der Gemeng Putscheid am Ourdaal. D'Géigend ronderëm Bivels ass Deel vum Naturpark Ieweren Our a weist e puer vun de steelsten FlossTerrassen vu Lëtzebuerg, déi d'Our iwwer Joerdausende geformt huet. D'Duerf huet manner wéi 100 Awunner." },
    region: "Diekirch",
    link: "https://www.naturpark-our.eu"
  },
  {
    id: "kalborn",
    level: "geographer",
    subLevel: 2,
    name: { en: "Kalborn", fr: "Kalborn", de: "Kalborn", lb: "Kalborn" },
    coords: [50.0508, 6.0481],
    emoji: "🌲",
    clue: { en: "A handful of farmhouses deep in the Ardennes near the Belgian border in the northernmost reaches of Luxembourg, this tiny settlement is one of the most isolated communities in the country. No tourist facilities exist here—just the forest, the wind, and panoramic views over Belgium and Luxembourg from its high plateau position.", fr: "Une poignée de fermes au fond des Ardennes près de la frontière belge dans les confins les plus septentrionaux du Luxembourg, ce minuscule hameau est l'une des communautés les plus isolées du pays. Aucune infrastructure touristique n'existe ici—juste la forêt, le vent et des vues panoramiques sur la Belgique et le Luxembourg depuis sa position en plateau élevé.", de: "Eine Handvoll Bauernhöfe tief in den Ardennen nahe der belgischen Grenze in den nördlichsten Ausläufern Luxemburgs—diese winzige Siedlung ist eine der abgelegensten Gemeinschaften des Landes. Keine touristischen Einrichtungen gibt es hier—nur der Wald, der Wind und Panoramablick über Belgien und Luxemburg von seiner Hochplateaulage.", lb: "Eng Hantvoll Bauerenhaiser déif an den Ardennen no bei der belgescher Grenz am nërdlechste Rand vu Lëtzebuerg—dës kleng Siidlung ass eng vun den ofgeleeënsten Gemeinschafte vum Land. Keng touristesch Infrastruktur gëtt et hei—nëmmen de Bësch, de Wand a Panoramablick iwwer Belgien a Lëtzebuerg vu senger Héichplateaulag." },
    fact: { en: "Kalborn is part of the commune of Parc Hösingen, one of Luxembourg's largest rural communes by area. At nearly 550m elevation, it sits on the highest plateau of the Oesling, with views extending into Belgium on clear days. The area has some of the darkest skies in the Benelux for stargazing.", fr: "Kalborn fait partie de la commune de Parc Hösingen, l'une des plus grandes communes rurales du Luxembourg par superficie. À près de 550 m d'altitude, elle est située sur le plateau le plus haut de l'Oesling, avec des vues s'étendant jusqu'en Belgique par temps clair. La région possède certains des ciels les plus sombres du Benelux pour l'observation des étoiles.", de: "Kalborn ist Teil der Gemeinde Parc Hösingen, einer der flächenmäßig größten ländlichen Gemeinden Luxemburgs. Auf fast 550 m Höhe liegt es auf dem höchsten Plateau des Ösling mit Ausblick bis nach Belgien an klaren Tagen. Das Gebiet hat einige der dunkelsten Himmel im Benelux für die Sternenbeobachtung.", lb: "Kalborn ass Deel vun der Gemeng Parc Hösingen, eng vun de flächeméisseg gréisste ländleche Gemengen vu Lëtzebuerg. Op bal 550 m Héicht läit et op dem héchste Plateau vum Ënsling mat Blick bis Belgien op kloere Deeg. D'Géigend huet e puer vun de schwaarzsten Himmel am Benelux fir d'Sternekucken." },
    region: "Clervaux",
    link: "https://www.visitluxembourg.com/en/region/ardennes"
  },
  {
    id: "hachiville",
    level: "geographer",
    subLevel: 2,
    name: { en: "Hachiville", fr: "Hachiville", de: "Hachiville", lb: "Hachiville" },
    coords: [50.0681, 5.9897],
    emoji: "🛰️",
    clue: { en: "In a remote corner of northern Luxembourg near the Belgian and German triple-point, this tiny village gained unexpected international fame as the home of one of Europe's most important telecommunications installations. A giant satellite dish farm quietly revolutionised transatlantic communications from this Ardennes plateau.", fr: "Dans un coin reculé du nord du Luxembourg près du tripoint belge-allemand, ce minuscule village a acquis une renommée internationale inattendue comme siège d'une des installations de télécommunications les plus importantes d'Europe. Un parc d'antennes paraboliques géantes a discrètement révolutionné les communications transatlantiques depuis ce plateau ardennais.", de: "In einem abgelegenen Winkel Nordluxemburgs nahe dem belgisch-deutschen Dreiländereck erlangte dieses winzige Dorf unerwarteten internationalen Ruhm als Standort einer der wichtigsten Telekommunikationsanlagen Europas. Eine riesige Satellitenschüsselanlage revolutionierte stillschweigend den transatlantischen Kommunikationsverkehr von diesem Ardennenplateau aus.", lb: "An engem ofgeleeene Wénkel vum Norde vu Lëtzebuerg no bei dem belgeschen-däitsche Dräiländerpunkt gewann dëst kleng Duerf onerwaarteten internationale Ruhm als Sëtz vun enger vun de wichtegste Telekommunikatiounsanlagen a Europa. Eng riesen Satelliteschësselanlage huet roueg den transatlantesche Kommunikatiounsverkéier vun dësem Ardenneplàteau aus revolutionéiert." },
    fact: { en: "Hachiville was home to a major SES (formerly Société Européenne des Satellites) earth station for satellite communications. The remote location offered a clear view of the geostationary orbit, free from radio interference. SES, headquartered in Luxembourg, operates one of the world's largest commercial satellite fleets.", fr: "Hachiville abritait une importante station terrestre de SES (anciennement Société Européenne des Satellites) pour les communications par satellite. L'emplacement isolé offrait une vue dégagée sur l'orbite géostationnaire, sans interférences radio. SES, dont le siège est au Luxembourg, exploite l'une des plus grandes flottes de satellites commerciaux au monde.", de: "Hachiville beherbergte eine wichtige SES-Bodenstation (früher Société Européenne des Satellites) für Satellitenkommunikation. Der abgelegene Standort bot einen freien Blick auf die geostationäre Umlaufbahn, frei von Funkstörungen. SES mit Sitz in Luxemburg betreibt eine der weltweit größten kommerziellen Satellitenflotten.", lb: "Hachiville huet eng wichteg SES (fréier Société Européenne des Satellites) Erdstatioun fir Satellittekommunikatioun gehabt. D'ofgeleeenen Lag huet eng kloer Siicht op d'geostationär Ëmlafbunn ugeboten, fräi vu Funkstoerungen. SES, mam Sëtz zu Lëtzebuerg, betreibt eng vun de weltwäit gréissten kommerziellen Satellittflotten." },
    region: "Clervaux",
    link: "https://www.ses.com"
  },
  {
    id: "huldange",
    level: "geographer",
    subLevel: 2,
    name: { en: "Huldange", fr: "Huldange", de: "Huldingen", lb: "Huldeng" },
    coords: [50.1211, 6.0311],
    emoji: "❄️",
    clue: { en: "Near the Belgian border in the northernmost highlands of Luxembourg, this tiny village sits at one of the country's highest elevations and is reliably one of the coldest and snowiest places in Luxembourg. Its exposed plateau location makes it a rare winter sports destination for cross-country skiing in a country not normally associated with snow.", fr: "Près de la frontière belge dans les hautes terres les plus septentrionales du Luxembourg, ce minuscule village est situé à l'une des altitudes les plus élevées du pays et est régulièrement l'un des endroits les plus froids et les plus enneigés du Luxembourg. Sa position exposée sur le plateau en fait une rare destination de sports d'hiver pour le ski de fond dans un pays habituellement pas associé à la neige.", de: "Nahe der belgischen Grenze im nördlichsten Hochland Luxemburgs liegt dieses winzige Dorf auf einer der höchsten Erhebungen des Landes und ist zuverlässig einer der kältesten und schneereichsten Orte in Luxemburg. Seine exponierte Plateaulage macht es zu einem seltenen Wintersportziel für Langlauf in einem Land, das normalerweise nicht mit Schnee in Verbindung gebracht wird.", lb: "No bei der belgescher Grenz am nërdlechste Hochland vu Lëtzebuerg läit dëst kleng Duerf op enger vun de héchste Elevatiounen vum Land a ass zouverlässeg ee vun de kältsten a schnéiregsten Plazen vu Lëtzebuerg. Seng exponéiert Plateaulag mécht et zu engem selten Wantersportsziel fir Laanglafen an engem Land, dat normalerweis net mat Schnéi verbonnen gëtt." },
    fact: { en: "Huldange sits at around 520m altitude in the Oesling plateau. With average temperatures of 2-3°C in winter, it regularly receives 40-50 days of snow cover per year—far more than Luxembourg City, which averages only 10-15 snowy days. The village is part of one of Luxembourg's few cross-country ski trail networks.", fr: "Huldange est situé à environ 520 m d'altitude sur le plateau de l'Oesling. Avec des températures moyennes de 2 à 3°C en hiver, il reçoit régulièrement 40 à 50 jours de neige par an—bien plus que Luxembourg-Ville, qui ne connaît en moyenne que 10 à 15 jours de neige. Le village fait partie de l'un des rares réseaux de pistes de ski de fond du Luxembourg.", de: "Huldingen liegt auf etwa 520 m Höhe auf dem Ösling-Plateau. Mit durchschnittlichen Wintertemperaturen von 2-3°C erhält es regelmäßig 40-50 Schneetage pro Jahr—weit mehr als Luxemburg-Stadt mit durchschnittlich nur 10-15 Schneetagen. Das Dorf ist Teil eines der wenigen Langlaufloipen-Netze in Luxemburg.", lb: "Huldeng läit op ronderëm 520 m Héicht op dem Ënslingplateau. Mat Duerchschnëttstemperaturen vu 2-3°C am Wanter kritt et regelméisseg 40-50 Schnéideeg pro Joer—vill méi wéi Lëtzebuerg-Stad, dat nëmmen 10-15 Schnéideeg duerchschnëttlech huet. D'Duerf ass Deel vun engem vun de wéinege Laanglaafloipennetze vu Lëtzebuerg." },
    region: "Clervaux",
    link: "https://www.visitluxembourg.com/en/region/ardennes"
  },
  {
    id: "tandel",
    level: "geographer",
    subLevel: 3,
    name: { en: "Tandel", fr: "Tandel", de: "Tandel", lb: "Tandel" },
    coords: [49.9244, 6.1983],
    emoji: "🏡",
    clue: { en: "A rural commune in northern Luxembourg encompassing several small villages, this area is known for a dramatic viewpoint over the Our River valley. The villages here see almost no tourists, yet the scenery—deep forested gorges, ancient farmhouses, and distant hilltop silhouettes—is among the most unspoilt in the country.", fr: "Commune rurale du nord du Luxembourg regroupant plusieurs petits villages, cette zone est connue pour un point de vue spectaculaire sur la vallée de l'Our. Les villages ici voient presque pas de touristes, pourtant le paysage—profondes gorges boisées, vieilles fermes et silhouettes de collines lointaines—est parmi les plus préservés du pays.", de: "Eine ländliche Gemeinde in Nordluxemburg, die mehrere kleine Dörfer umfasst, ist bekannt für einen spektakulären Aussichtspunkt über das Our-Tal. Die Dörfer hier sehen fast keine Touristen, doch die Landschaft—tiefe bewaldete Schluchten, alte Bauernhöfe und ferne Hügelsilhouetten—gehört zu den unberührtesten des Landes.", lb: "Eng ländlech Gemeng am Norde vu Lëtzebuerg, déi verschidde kleng Dierfer ëmfaasst, ass bekannt fir een dramateschen Aussichtspunkt iwwer d'Ourdaal. D'Dierfer hei gesinn bal kee Touristen, awer d'Scenerie—déif bewaldet Schluuchten, al Bauerenhaiser a ferne Biergsilhouetten—ass zu den onberührtesten vum Land." },
    fact: { en: "Tandel is a commune of the Vianden canton encompassing villages like Fouhren, Putscheid, and Bivels. The commune covers the steep western slopes of the Our Valley, one of the deepest river valleys in Luxembourg, dropping nearly 200 metres from the plateau edge to the river below.", fr: "Tandel est une commune du canton de Vianden comprenant des villages comme Fouhren, Putscheid et Bivels. La commune couvre les pentes occidentales escarpées de la vallée de l'Our, l'une des vallées fluviales les plus profondes du Luxembourg, descendant de près de 200 mètres du bord du plateau à la rivière en dessous.", de: "Tandel ist eine Gemeinde im Kanton Vianden, die Dörfer wie Fouhren, Putscheid und Bivels umfasst. Die Gemeinde umfasst die steilen Westhänge des Our-Tals, eines der tiefsten Flusstäler Luxemburgs, das vom Plateaurand fast 200 Meter zur Fluss hinunterführt.", lb: "Tandel ass eng Gemeng vum Kanton Vianden, déi Dierfer wéi Fouhren, Putscheid a Bivels ëmfaasst. D'Gemeng deckt d'steile Westhäng vum Ourdaal, ee vun de déifste Flossdeeler vu Lëtzebuerg, dat vum Plateaurand bal 200 Meter bis zum Floss erof geet." },
    region: "Vianden",
    link: "https://www.naturpark-our.eu"
  },
  {
    id: "bettendorf-bridge",
    level: "geographer",
    subLevel: 3,
    name: { en: "Bettendorf Napoleon Bridge", fr: "Pont Napoléon de Bettendorf", de: "Napoleonbrücke Bettendorf", lb: "Napoleonbréck Bettendorf" },
    coords: [49.8703, 6.2597],
    emoji: "🌉",
    clue: { en: "Spanning the Sûre River in northern Luxembourg, this elegant stone bridge was built on the orders of Napoleon Bonaparte during the French occupation of Luxembourg. Still standing and still in use after more than two centuries, it is one of the finest examples of Napoleonic infrastructure in the country.", fr: "Enjambant la Sûre dans le nord du Luxembourg, ce pont en pierre élégant a été construit sur ordre de Napoléon Bonaparte lors de l'occupation française du Luxembourg. Toujours debout et toujours utilisé après plus de deux siècles, c'est l'un des meilleurs exemples d'infrastructure napoléonienne du pays.", de: "Die über die Sauer im Norden Luxemburgs gespannte elegante Steinbrücke wurde auf Befehl von Napoleon Bonaparte während der französischen Besatzung Luxemburgs gebaut. Nach über zwei Jahrhunderten steht sie noch und ist noch immer in Benutzung—eines der feinsten Beispiele napoleonischer Infrastruktur im Land.", lb: "Dës elegant Steenbréck iwwer d'Sauer am Norde vu Lëtzebuerg gouf op Befehl vu Napoleon Bonaparte wärend der franséischer Besatzung vu Lëtzebuerg gebaut. No méi wéi zwee Joerhonnerten steet si nach a gëtt nach ëmmer benotzt—ee vun de beschte Beispiller vun napoleonescher Infrastruktur am Land." },
    fact: { en: "The Napoleon Bridge at Bettendorf was built between 1804 and 1810 during the First French Empire's control of Luxembourg. It remains structurally intact and is listed as a protected heritage monument. The bridge was a key crossing point on the road from Luxembourg City northward to the Ardennes.", fr: "Le pont Napoléon à Bettendorf a été construit entre 1804 et 1810 sous le contrôle du Premier Empire français sur le Luxembourg. Il reste structurellement intact et est classé monument du patrimoine protégé. Le pont était un point de passage clé sur la route de Luxembourg-Ville vers le nord, en direction des Ardennes.", de: "Die Napoleonbrücke in Bettendorf wurde zwischen 1804 und 1810 während der Herrschaft des Ersten Französischen Kaiserreichs über Luxemburg gebaut. Sie ist strukturell intakt und als geschütztes Kulturdenkmal eingestuft. Die Brücke war ein wichtiger Übergangspunkt auf der Straße von Luxemburg-Stadt nordwärts in die Ardennen.", lb: "D'Napoleonbréck zu Bettendorf gouf tëschent 1804 a 1810 wärend der Herrschaft vum Éischten Franséischen Keeserräich iwwer Lëtzebuerg gebaut. Si ass strukturell intakt a als geschützten Ierweschatz-Monument gelistet. D'Bréck war e wichtege Passéierpunkt op der Stroos vu Lëtzebuerg-Stad nordwärts an d'Ardennen." },
    region: "Diekirch",
    link: "https://www.visitluxembourg.com/en"
  },
  {
    id: "gilsdorf",
    level: "geographer",
    subLevel: 3,
    name: { en: "Gilsdorf", fr: "Gilsdorf", de: "Gilsdorf", lb: "Gilsdref" },
    coords: [49.8667, 6.2406],
    emoji: "🏊",
    clue: { en: "Across the river from Diekirch on the banks of the Sûre in northern Luxembourg, this village is known for its riverside leisure park and outdoor swimming area. It is connected to Diekirch by a bridge and forms an integral part of the twin-community along this stretch of the northern Sûre valley.", fr: "En face de Diekirch sur les rives de la Sûre dans le nord du Luxembourg, ce village est connu pour son parc de loisirs en bord de rivière et sa zone de baignade en plein air. Il est relié à Diekirch par un pont et fait partie intégrante de la communauté jumelle le long de cette portion de la vallée de la Sûre nord.", de: "Gegenüber von Diekirch an den Ufern der Sauer im Norden Luxemburgs liegt dieses Dorf, bekannt für seinen Uferfrei zeitpark und ein Freibad. Es ist durch eine Brücke mit Diekirch verbunden und bildet einen integralen Bestandteil der Zwillingsgemeinde entlang dieses Abschnitts des nördlichen Sauer-Tals.", lb: "Vis-à-vis vu Dikrich um Ufer vun der Sauer am Norde vu Lëtzebuerg läit dëst Duerf, bekannt fir säi Riverside-Fräizäitpark a Fräiloftschwiembad. Et ass duerch eng Bréck mat Dikrich verbonnen a bildet ee wichtegen Deel vun der Zwillingsgemenschaft laanscht dësen Abschnitt vum nërdlechen Sauerdaal." },
    fact: { en: "Gilsdorf lies on the left bank of the Sûre, directly opposite Diekirch. The village has an outdoor swimming area on the Sûre that is one of the most popular river bathing spots in Luxembourg. The Sûre cycling route passes through the village on its way northward.", fr: "Gilsdorf est situé sur la rive gauche de la Sûre, directement en face de Diekirch. Le village possède une zone de baignade en plein air sur la Sûre qui est l'un des endroits de baignade en rivière les plus populaires du Luxembourg. La route cyclable de la Sûre traverse le village en direction du nord.", de: "Gilsdorf liegt am linken Sauer-Ufer direkt gegenüber von Diekirch. Das Dorf hat ein Freibadgelände an der Sauer, das eine der beliebtesten Flussbademöglichkeiten in Luxemburg ist. Der Sauer-Radweg führt durch das Dorf nordwärts.", lb: "Gilsdref läit um lénksen Ufier vun der Sauer, direkt vis-à-vis vu Dikrich. D'Duerf huet eng Fräiloftschwéimgeleenheet un der Sauer, déi ee vun de populärste Flossbademöglechkeeten vu Lëtzebuerg ass. De Sauerradwee féiert duerch d'Duerf nordwärts." },
    region: "Diekirch",
    link: "https://www.visitluxembourg.com/en"
  },
  {
    id: "dirbach",
    level: "geographer",
    subLevel: 4,
    name: { en: "Dirbach", fr: "Dirbach", de: "Dirbach", lb: "Diirbbech" },
    coords: [49.9394, 6.1789],
    emoji: "🌄",
    clue: { en: "Perched on a high ridge between the Our and Clerf river valleys in northern Luxembourg, this isolated cluster of farmhouses has one of the most extraordinary viewpoints in the country. On a clear day you can see across into Germany and Belgium. Almost no tourist infrastructure exists here—this is Luxembourg at its most remote.", fr: "Perché sur une haute crête entre les vallées de l'Our et de la Clerf dans le nord du Luxembourg, ce groupe isolé de fermes offre l'un des points de vue les plus extraordinaires du pays. Par temps clair, on peut voir en Allemagne et en Belgique. Presque aucune infrastructure touristique n'existe ici—c'est le Luxembourg dans ce qu'il a de plus reculé.", de: "Auf einem hohen Kamm zwischen den Tälern der Our und der Clerf in Nordluxemburg gelegen, bietet diese isolierte Gruppe von Bauernhöfen einen der außerordentlichsten Aussichtspunkte des Landes. An klaren Tagen sieht man bis nach Deutschland und Belgien. Kaum touristische Infrastruktur existiert hier—das ist Luxemburg in seiner abgelegensten Form.", lb: "Op enger héijer Kapp tëschent den Daaler vun der Our an der Clerf am Norde vu Lëtzebuerg geleeën, huet dëse isoléierte Cluster vu Bauerenhaiser ee vun de aussergewéinlechste Viewpoints vum Land. Op kloere Deeg gesäit een bis Däitschland a Belgien. Bal keng touristesch Infrastruktur existéiert hei—dat ass Lëtzebuerg a senger ofgeleeënster Form." },
    fact: { en: "Dirbach is a hamlet within the commune of Parc Hösingen at an elevation of around 480m. It sits on the Ardennes watershed, where streams flow either west to the Clerf or east to the Our. The area is part of the Naturpark Our and is known for its extensive beech forests and open moorland plateaus.", fr: "Dirbach est un hameau de la commune de Parc Hösingen à une altitude d'environ 480 m. Il se trouve sur la ligne de partage des eaux ardennaise, où les ruisseaux coulent soit vers l'ouest jusqu'à la Clerf soit vers l'est jusqu'à l'Our. La zone fait partie du Naturpark Our et est connue pour ses vastes forêts de hêtres et ses plateaux de landes ouvertes.", de: "Dirbach ist ein Weiler der Gemeinde Parc Hösingen auf etwa 480 m Höhe. Er liegt auf der Ardennen-Wasserscheide, wo Bäche entweder westlich zur Clerf oder östlich zur Our fließen. Das Gebiet ist Teil des Naturparks Our und bekannt für seine ausgedehnten Buchenwälder und offenen Heideplateaus.", lb: "Diirbbech ass en Haamelt vun der Gemeng Parc Hösingen op ronderëm 480 m Héicht. Et läit um Ardennewaassertrennend, wou Baachen entweder westlech zur Clerf oder östlech zur Our fléissen. D'Gebitt ass Deel vum Naturpark Our a bekannt fir seng ausgedehnten Buchebëscher a offene Heideplateauen." },
    region: "Clervaux",
    link: "https://www.naturpark-our.eu"
  },
  {
    id: "kehmen",
    level: "geographer",
    subLevel: 4,
    name: { en: "Kehmen", fr: "Kehmen", de: "Kehmen", lb: "Kehmen" },
    coords: [49.9889, 6.0531],
    emoji: "🌿",
    clue: { en: "A remote hamlet on the high plateau of the Ardennes in northern Luxembourg, this tiny settlement feels like the edge of the world. Surrounded by open farmland and ancient forests with almost no neighbours for kilometres, it is one of the least-populated corners of a country that is itself one of the smallest in Europe.", fr: "Hameau isolé sur le haut plateau ardennais dans le nord du Luxembourg, ce minuscule établissement donne l'impression d'être au bout du monde. Entouré de terres agricoles ouvertes et de forêts anciennes sans presque aucun voisin pendant des kilomètres, c'est l'un des coins les moins peuplés d'un pays qui est lui-même l'un des plus petits d'Europe.", de: "Ein abgelegener Weiler auf dem Hochplateau der Ardennen in Nordluxemburg—diese winzige Siedlung fühlt sich an wie das Ende der Welt. Umgeben von offenen Ackerflächen und alten Wäldern mit kaum Nachbarn über Kilometer hinweg, ist es einer der am wenigsten bevölkerten Winkel eines Landes, das selbst eines der kleinsten Europas ist.", lb: "En ofgeleeene Haamelt op dem héijen Plateau vun den Ardennen am Norde vu Lëtzebuerg—dës kleng Siidlung fillt sich un wéi den Enn vun der Welt. Ëmginn vun offene Ackerland a alen Bëscher mat bal kenge Noperen fir Kilometer, ass et ee vun de wéinegste bevëlkerte Wéngele vun engem Land, dat selwer ee vun de klengsten an Europa ass." },
    fact: { en: "Kehmen is a hamlet of the commune of Wincrange in the Clervaux canton. At around 530m altitude, it sits near the foot of Buurgplaatz, Luxembourg's highest point. The area experiences some of the harshest winters in Luxembourg, with late snowfalls and occasional frost even in May.", fr: "Kehmen est un hameau de la commune de Wincrange dans le canton de Clervaux. À environ 530 m d'altitude, il se trouve près du pied du Buurgplaatz, le point culminant du Luxembourg. La région connaît certains des hivers les plus rudes du Luxembourg, avec des chutes de neige tardives et des gelées occasionnelles même en mai.", de: "Kehmen ist ein Weiler der Gemeinde Wincrange im Kanton Clerf. Auf etwa 530 m Höhe liegt er nahe dem Fuß des Buurgplaatz, Luxemburgs höchstem Punkt. Die Gegend erlebt einige der härtesten Winter in Luxemburg mit Spätschneefällen und gelegentlichem Frost sogar im Mai.", lb: "Kehmen ass en Haamelt vun der Gemeng Wincrange am Kanton Klierf. Op ronderëm 530 m Héicht läit et no beim Fouss vum Buurgplaatz, Lëtzebuerg säim héchste Punkt. D'Géigend erlieft e puer vun de strengste Wantere vu Lëtzebuerg, mat spéide Schnéifäll an occasional Frost souguer am Mee." },
    region: "Clervaux",
    link: "https://www.visitluxembourg.com/en/region/ardennes"
  },
  {
    id: "ahn-vineyard",
    level: "geographer",
    subLevel: 4,
    name: { en: "Ahn Vineyard Village", fr: "Ahn, village viticole", de: "Ahn, Weindorf", lb: "Ahn, Wäinduerf" },
    coords: [49.5706, 6.3817],
    emoji: "🍷",
    clue: { en: "A small riverside village on the Luxembourg Moselle where the vineyards descend almost to the water's edge, this community has been making wine since Roman times. The steep south-facing slopes here produce some of Luxembourg's most prized whites, and the village hosts an annual wine festival that draws visitors from across the region.", fr: "Petit village au bord de la rivière sur la Moselle luxembourgeoise où les vignobles descendent presque jusqu'au bord de l'eau, cette communauté produit du vin depuis l'époque romaine. Les pentes raides orientées vers le sud produisent certains des blancs les plus prisés du Luxembourg, et le village organise chaque année un festival du vin qui attire des visiteurs de toute la région.", de: "Ein kleines Flussdorf an der Luxemburger Mosel, wo die Weinberge fast bis ans Wasser reichen—diese Gemeinde macht seit der Römerzeit Wein. Die steilen Südhänge produzieren einige von Luxemburgs wertvollsten Weißweinen, und das Dorf veranstaltet ein jährliches Weinfest, das Besucher aus der ganzen Region anzieht.", lb: "Ee klenge Flossduerf un der Lëtzebuerg Musel, wou d'Wéngert bal bis un den Daaschknull goen—dës Gemeng mécht zanter der Réimerzäit Wäi. D'steile Südhäng produzéieren e puer vu Lëtzebuerg senge wertvollste Wäisswäiner, an d'Duerf organiséiert e jährlecht Wäifest, dat Bescher aus der ganzer Regioun unzitt." },
    fact: { en: "Ahn is one of the oldest wine-producing villages on the Luxembourg Moselle. Roman amphoras and wine-making equipment have been found in the area, confirming viticulture here for over 2,000 years. The village is part of the \"Route du Vin\" and is known especially for its Riesling and Pinot Gris produced on the Palmberg slopes.", fr: "Ahn est l'un des plus anciens villages viticoles de la Moselle luxembourgeoise. Des amphores romaines et du matériel de vinification ont été trouvés dans la région, confirmant la viticulture ici depuis plus de 2 000 ans. Le village fait partie de la \"Route du Vin\" et est connu notamment pour son Riesling et son Pinot Gris produits sur les pentes du Palmberg.", de: "Ahn ist eines der ältesten weinproduzierenden Dörfer an der Luxemburger Mosel. Römische Amphoren und Weinbaugeräte wurden in der Gegend gefunden, die die Weinkultur hier seit über 2.000 Jahren belegen. Das Dorf ist Teil der „Route du Vin\" und besonders bekannt für seinen Riesling und Pinot Gris von den Palmberg-Hängen.", lb: "Ahn ass ee vun de eelste Wäiproduktiounsdierfer un der Lëtzebuerg Musel. Réimesch Amphore a Wäibauequipement goufen an der Géigend fonnt, wat d'Wäibau hei zanter iwwer 2.000 Joer bestätegt. D'Duerf ass Deel vun der \"Route du Vin\" a besonnesch bekannt fir säi Riesling a Pinot Gris vun de Palmberg-Häng." },
    region: "Grevenmacher",
    link: "https://www.vins-moselle-luxembourg.lu"
  },
  {
    id: "machtum",
    level: "geographer",
    subLevel: 4,
    name: { en: "Machtum", fr: "Machtum", de: "Machtum", lb: "Muechtum" },
    coords: [49.5556, 6.3939],
    emoji: "🍾",
    clue: { en: "One of the smallest wine villages on the Luxembourg Moselle, this hamlet clings to steep terraced slopes above the river. Its wine cellar is built directly into the hillside, and the view from the vines across to Germany is spectacular. The village is so small it has no church of its own, yet its wines have won international recognition.", fr: "L'un des plus petits villages viticoles de la Moselle luxembourgeoise, ce hameau s'accroche à des pentes en terrasses escarpées au-dessus de la rivière. Sa cave est construite directement dans la colline, et la vue depuis les vignes vers l'Allemagne est spectaculaire. Le village est si petit qu'il n'a pas d'église, pourtant ses vins ont remporté une reconnaissance internationale.", de: "Eines der kleinsten Weindörfer an der Luxemburger Mosel klammert sich dieses Weiler an steile Terrassenhänge über dem Fluss. Sein Weinkeller ist direkt in den Hang gebaut, und der Blick von den Weinbergen nach Deutschland ist spektakulär. Das Dorf ist so klein, dass es keine eigene Kirche hat, und dennoch haben seine Weine internationale Anerkennung gefunden.", lb: "Ee vun de klengste Wäindierfer un der Lëtzebuerg Musel, dësen Haamelt klammert sech u steile Terrassenhäng iwwer dem Floss. Seng Weinkellerei ass direkt an den Hang gebaut, an d'Aussicht vun de Wéngerte riwwer op Däitschland ass spektakulär. D'Duerf ass sou kleng, datt et keng eegen Kierch huet, awer seng Wäiner hu internationale Unerkennong gewonnen." },
    fact: { en: "Machtum is a locality of the commune of Wormeldange on the Moselle. Despite its tiny size, it is home to a renowned family winery whose wines regularly win awards at international competitions. The village's Ielterberg slope is considered one of the finest terroirs for Riesling on the entire Luxembourg Moselle.", fr: "Machtum est une localité de la commune de Wormeldange sur la Moselle. Malgré sa petite taille, elle abrite un domaine viticole familial réputé dont les vins remportent régulièrement des prix dans des concours internationaux. La pente Ielterberg du village est considérée comme l'un des meilleurs terroirs pour le Riesling sur l'ensemble de la Moselle luxembourgeoise.", de: "Machtum ist eine Ortschaft der Gemeinde Wormeldange an der Mosel. Trotz seiner geringen Größe beherbergt es ein renommiertes Familienweingut, dessen Weine regelmäßig bei internationalen Wettbewerben ausgezeichnet werden. Die Ielterberg-Lage des Dorfes gilt als eines der feinsten Terroirs für Riesling an der gesamten Luxemburger Mosel.", lb: "Muechtum ass eng Uertschaft vun der Gemeng Wuermeldeng un der Musel. Trotz senger klenger Gréisst huet et e renomméiert Familljenwäibetrieb, deem seng Wäiner regelméisseg bei internationale Wettbewierber ausgezeechent ginn. D'Ielterberg-Lag vum Duerf gëtt als ee vun de beschten Terroirs fir Riesling un der ganzer Lëtzebuerg Musel ugesinn." },
    region: "Grevenmacher",
    link: "https://www.vins-moselle-luxembourg.lu"
  },
  {
    id: "ansembourg-lower",
    level: "geographer",
    subLevel: 5,
    name: { en: "Lower Ansembourg Castle", fr: "Bas-château d'Ansembourg", de: "Unteres Schloss Ansembourg", lb: "Enneschten Schlass Ansembourg" },
    coords: [49.7133, 6.0311],
    emoji: "🌸",
    clue: { en: "In the Eisch Valley of western Luxembourg, below its more famous ruined counterpart on the hill, this inhabited Renaissance castle is surrounded by formal French gardens open to the public. The contrast between the wild castle ruins above and the manicured gardens below makes this one of the most picturesque spots in the country.", fr: "Dans la vallée de l'Eisch, dans l'ouest du Luxembourg, en dessous de son homologue en ruine plus célèbre sur la colline, ce château Renaissance habité est entouré de jardins formels à la française ouverts au public. Le contraste entre les ruines sauvages du château en hauteur et les jardins soignés en bas fait de cet endroit l'un des plus pittoresques du pays.", de: "Im Eischtal Westluxemburgs, unterhalb seines berühmteren Ruinen-Pendants auf dem Hügel, ist dieses bewohnte Renaissanceschloss von formalen französischen Gärten umgeben, die der Öffentlichkeit zugänglich sind. Der Kontrast zwischen den wilden Burgruinen oben und den gepflegten Gärten unten macht dies zu einem der malerischsten Orte des Landes.", lb: "Am Eischtal vum Weste vu Lëtzebuerg, ënner sengem bekannteren Ruinen-Pendant op dem Bierg, ass dëst bewunnte Renaissance-Schlass vun formalen franséische Gäert ëmginn, déi der Ëffentlechkeet zougänglech sinn. De Kontrast tëschent de wilde Buergriinen hiewt an de gepfleegten Gäert drënner mécht dëst zu engem vun de malereschste Plazen vum Land." },
    fact: { en: "Ansembourg has two castles: the upper medieval castle (ruin) on the ridge and the lower Renaissance castle in the valley, still inhabited today. The formal gardens of the lower castle, designed in the 17th century, are the finest surviving example of French formal garden design in Luxembourg and are open to visitors on summer weekends.", fr: "Ansembourg possède deux châteaux : le château médiéval supérieur (en ruine) sur la crête et le château Renaissance inférieur dans la vallée, encore habité aujourd'hui. Les jardins formels du château inférieur, conçus au XVIIe siècle, sont le meilleur exemple survivant de jardin formel français au Luxembourg et sont ouverts aux visiteurs les week-ends d'été.", de: "Ansembourg hat zwei Burgen: die obere mittelalterliche Burg (Ruine) auf dem Kamm und das untere Renaissanceschloss im Tal, das noch heute bewohnt ist. Die formalen Gärten des Unterschlosses, aus dem 17. Jahrhundert, sind das feinste erhaltene Beispiel französischer formaler Gartengestaltung in Luxemburg und sind an Sommerwochenenden für Besucher geöffnet.", lb: "Ansembourg huet zwou Buerg: d'ieweschte mëttelalterlechs Buerg (Riine) op der Kapp an d'enneschten Renaissance-Schlass am Daal, nach haut bewunnt. D'formale Gäert vum ënneschten Schlass, aus dem 17. Joerhonnert konzipéiert, sinn dat beschten erhalent Beispill vu franséischer formaler Gaardgestaltung vu Lëtzebuerg a sinn un Summerwochenenden fir Bescher op." },
    region: "Mersch",
    link: "https://www.visitluxembourg.com/en/place/site/ansembourg-castle"
  },
  {
    id: "roder",
    level: "geographer",
    subLevel: 5,
    name: { en: "Roder", fr: "Roder", de: "Roder", lb: "Roder" },
    coords: [49.9675, 6.2378],
    emoji: "🌲",
    clue: { en: "A hamlet of just a few houses on the forested plateau north of Vianden, reached by a steep forest road from the Our Valley below. The surrounding oak and beech forests are part of a protected nature zone, and the tranquillity here is absolute—this is one of the most isolated inhabited spots in Luxembourg.", fr: "Hameau de quelques maisons seulement sur le plateau boisé au nord de Vianden, accessible par une route forestière escarpée depuis la vallée de l'Our en contrebas. Les forêts de chênes et de hêtres environnantes font partie d'une zone naturelle protégée, et la tranquillité ici est absolue—c'est l'un des endroits habités les plus isolés du Luxembourg.", de: "Ein Weiler mit nur wenigen Häusern auf dem bewaldeten Plateau nördlich von Vianden, erreichbar über eine steile Forststraße aus dem Our-Tal darunter. Die umliegenden Eichen- und Buchenwälder sind Teil einer Schutzzone, und die Ruhe hier ist absolut—dies ist einer der abgelegensten bewohnten Orte Luxemburgs.", lb: "En Haamelt vu just e puer Haiser op dem bewaldete Plateau nërdlech vu Veianen, erreechtbar iwwer eng steile Bëschstroos vum Ourdaal drënner. D'ëmleend Eechen- a Buchebëscher sinn Deel vun enger geschützter Naturzon, an d'Roueg hei ass absolut—dat ass ee vun den ofgeleeënsten bewunnten Plazen vu Lëtzebuerg." },
    fact: { en: "Roder is a locality of the commune of Putscheid in the Our Valley canton. The hamlet sits atop a 400m forested ridge between the Our Valley and the Clerf Valley. It can only be reached by a narrow forest track, making it one of the least accessible communities in Luxembourg.", fr: "Roder est une localité de la commune de Putscheid dans le canton de la vallée de l'Our. Le hameau est situé au sommet d'un promontoire boisé de 400 m entre la vallée de l'Our et la vallée de la Clerf. On ne peut l'atteindre que par un étroit chemin forestier, ce qui en fait l'une des communautés les moins accessibles du Luxembourg.", de: "Roder ist eine Ortschaft der Gemeinde Putscheid im Kanton Our-Tal. Das Weiler sitzt auf einem 400 m hohen bewaldeten Rücken zwischen dem Our-Tal und dem Clerf-Tal. Es ist nur über einen schmalen Forstweg zu erreichen, was es zu einer der am schwierigsten zugänglichen Gemeinden Luxemburgs macht.", lb: "Roder ass eng Uertschaft vun der Gemeng Putscheid am Kanton Ourdaal. Den Haamelt läit op enger 400 m héijere bewaldeter Kapp tëschent dem Ourdaal an dem Clerferdaal. Et kann nëmmen iwwer e schmale Bëschpad erreeche ginn, wat et zu enger vun de wéinegst zugänglechste Gemeinschafte vu Lëtzebuerg mécht." },
    region: "Diekirch",
    link: "https://www.naturpark-our.eu"
  },
  {
    id: "esch-brill",
    level: "geographer",
    subLevel: 5,
    name: { en: "Esch-sur-Alzette Brill District", fr: "Quartier du Brill, Esch-sur-Alzette", de: "Brill-Viertel, Esch-an-der-Alzette", lb: "Brill-Quartier, Esch-Uelzecht" },
    coords: [49.4936, 5.9881],
    emoji: "🏘️",
    clue: { en: "In the heart of Luxembourg's second largest city, this historic workers' neighbourhood dates from the iron and steel era. Its rows of typical red-brick miners' houses, built in the early 20th century, form one of the best-preserved examples of industrial workers' housing in the entire Benelux region.", fr: "Au cœur de la deuxième plus grande ville du Luxembourg, ce quartier ouvrier historique date de l'ère de la sidérurgie. Ses rangées de maisons typiques de mineurs en briques rouges, construites au début du XXe siècle, forment l'un des exemples les mieux conservés de logements ouvriers industriels de toute la région Benelux.", de: "Im Herzen von Luxemburgs zweitgrößter Stadt stammt dieses historische Arbeiterviertel aus der Eisen- und Stahlindustrie-Ära. Seine Reihen typischer Bergarbeiterhäuser aus roten Ziegeln, zu Beginn des 20. Jahrhunderts gebaut, bilden eines der am besten erhaltenen Beispiele industrieller Arbeiterwohnungen in der gesamten Benelux-Region.", lb: "Am Häerz vun Lëtzebuerg senger zweet gréisster Stad, ass dëst historescht Aarbechtervéiertel aus der Eise- a Stolindustrie-Ära. Seng Reie vu typesche roudbaksteng Biergarbechterhaiser, ugangs vum 20. Joerhonnert gebaut, bilden ee vun de beschterhalenen Beispiller vu industriellen Arbechterhaiser an der ganzer Benelux-Regioun." },
    fact: { en: "The Brill quarter in Esch-sur-Alzette was built between 1906 and 1914 by the ARBED steel company to house its workers. The uniform red-brick terraced houses were revolutionary in their time for providing workers with gardens and indoor plumbing. The district is now listed as a protected urban heritage area.", fr: "Le quartier du Brill à Esch-sur-Alzette a été construit entre 1906 et 1914 par la société sidérurgique ARBED pour loger ses ouvriers. Les maisons en terrasses en briques rouges uniformes étaient révolutionnaires à l'époque pour offrir aux ouvriers des jardins et la plomberie intérieure. Le quartier est maintenant classé zone de patrimoine urbain protégé.", de: "Das Brill-Viertel in Esch-an-der-Alzette wurde zwischen 1906 und 1914 vom Stahlunternehmen ARBED gebaut, um seine Arbeiter zu beherbergen. Die einheitlichen rotgeziegelten Reihenhäuser waren zu ihrer Zeit revolutionär, weil sie Arbeitern Gärten und Inneninstallationen boten. Das Viertel ist jetzt als geschütztes Stadterbgebiet eingestuft.", lb: "De Brill-Quartier zu Esch-Uelzecht gouf tëschent 1906 a 1914 vum Stolentreppement ARBED gebaut fir seng Aarbechter ënnerzebréngen. D'eenheetlech roudbaksteng Reienhaiser waren zu hirer Zäit revolutionär, well si d'Aarbechter mat Gäert an Innenanlagen ugeboten hunn. De Quartier gëtt elo als geschützten urbanen Erbschaftsgebitt klassifizéiert." },
    region: "Esch",
    link: "https://www.visitluxembourg.com/en/place/site/esch-sur-alzette"
  },
  {
    id: "stadtbredimus-chapel",
    level: "geographer",
    subLevel: 5,
    name: { en: "Stadtbredimus Chapel", fr: "Chapelle de Stadtbredimus", de: "Kapelle Stadtbredimus", lb: "Kapell Stadbriedemes" },
    coords: [49.5283, 6.3489],
    emoji: "⛪",
    clue: { en: "In a Moselle wine village in southern Luxembourg, a tiny baroque chapel overlooks the vineyards and the river from a small promontory. This modest building, barely noticed by passing cyclists on the Moselle route, holds one of Luxembourg's most venerated Black Madonna statues, drawing pilgrims from across the wine region.", fr: "Dans un village viticole de la Moselle dans le sud du Luxembourg, une petite chapelle baroque surplombe les vignobles et la rivière depuis un petit promontoire. Ce bâtiment modeste, à peine remarqué par les cyclistes qui passent sur la route de la Moselle, abrite l'une des statues de Vierge Noire les plus vénérées du Luxembourg, attirant des pèlerins de toute la région viticole.", de: "In einem Mosel-Weindorf im Süden Luxemburgs überblickt eine winzige barocke Kapelle von einem kleinen Vorsprung die Weinberge und den Fluss. Dieses bescheidene Gebäude, kaum beachtet von vorbeifahrenden Radfahrern auf der Moselroute, beherbergt eine der verehrtesten Schwarzen Madonnen Luxemburgs und zieht Pilger aus der ganzen Weinregion an.", lb: "An engem Muselwäinduerf im Süden vu Lëtzebuerg kuckt eng kleng barockk Kapell vu engem klenge Vorsprong iwwer d'Wéngert an de Floss. Dëse bescheede Gebaier, kaum opfälleg fir Radfahrer, déi op der Muselstroos virbeifuere, huet eng vun de meeschte veréierten Schwaarte Madonnae vu Lëtzebuerg a zitt Pilger aus der ganzer Wäinregioun un." },
    fact: { en: "The pilgrimage chapel of Stadtbredimus contains a medieval Black Madonna statue that has been venerated since at least the 14th century. The baroque chapel building dates to the 17th century and is listed as a national monument. Pilgrims visit particularly on the Feast of the Assumption in August.", fr: "La chapelle de pèlerinage de Stadtbredimus contient une statue médiévale de Vierge Noire vénérée depuis au moins le XIVe siècle. La chapelle baroque date du XVIIe siècle et est classée monument national. Les pèlerins viennent surtout le jour de la fête de l'Assomption en août.", de: "Die Wallfahrtskapelle Stadtbredimus enthält eine mittelalterliche Schwarze Madonna, die seit mindestens dem 14. Jahrhundert verehrt wird. Das Barockkapellengebäude stammt aus dem 17. Jahrhundert und ist als nationales Denkmal eingestuft. Pilger kommen besonders am Hochfest der Aufnahme Mariens im August.", lb: "D'Pilgerskapell vu Stadbriedemes enthält eng mëttelalterlesch Schwaart Madonna, déi zanter mindestens dem 14. Joerhonnert veréiert gëtt. D'Barockkapellgebaier stammt aus dem 17. Joerhonnert a gëtt als nationalent Monument gelistet. Pilger kommen besonnesch um Fest vun der Mariehimmelfaart am August." },
    region: "Remich",
    link: "https://www.visitluxembourg.com/en"
  },
  {
    id: "insenborn",
    level: "geographer",
    subLevel: 1,
    name: { en: "Insenborn Dam", fr: "Barrage d'Insenborn", de: "Talsperre Insenborn", lb: "Staudamm Insenborn" },
    coords: [49.8839, 5.9150],
    emoji: "🚧",
    clue: { en: "In a deep valley in western Luxembourg, a concrete dam wall holds back the country's largest lake. Built in 1960, this engineering feat provides drinking water to over half of Luxembourg's population. The dam structure itself can be viewed from above on a footpath along the reservoir's edge.", fr: "Dans une vallée profonde dans l'ouest du Luxembourg, un mur de barrage en béton retient le plus grand lac du pays. Construit en 1960, cet exploit technique fournit de l'eau potable à plus de la moitié de la population luxembourgeoise. La structure du barrage peut être vue de dessus depuis un sentier pédestre le long du bord du réservoir.", de: "In einem tiefen Tal im Westen Luxemburgs hält eine Betontalsperre den größten See des Landes zurück. 1960 gebaut, versorgt dieses Ingenieurmeisterwerk mehr als die Hälfte der luxemburgischen Bevölkerung mit Trinkwasser. Das Dammgebäude selbst kann von oben auf einem Fußweg entlang des Reservoirrandes besichtigt werden.", lb: "An engem déife Daal am Weste vu Lëtzebuerg hält eng Betonstaaimauer de gréisste See vum Land zréck. 1960 gebaut, versuerg dësen Ingenieurmeesterstéck méi wéi d'Hallschent vun der lëtzebuerger Bevëlkerung mat Drénkwaasser. D'Staamaierstruktur selwer kann vu uewen op engem Fousspad laanscht de Stauséirand besichtegt ginn." },
    fact: { en: "The Insenborn dam on the Sûre River is 43m high and 245m long, creating the Lac de la Haute-Sûre reservoir. It was built between 1958 and 1961 and supplies drinking water to the capital and much of southern Luxembourg via a complex network of treatment plants and pipelines.", fr: "Le barrage d'Insenborn sur la Sûre fait 43 m de haut et 245 m de long, créant le réservoir du lac de la Haute-Sûre. Il a été construit entre 1958 et 1961 et fournit de l'eau potable à la capitale et à une grande partie du sud du Luxembourg via un réseau complexe de stations de traitement et de canalisations.", de: "Die Talsperre Insenborn an der Sauer ist 43 m hoch und 245 m lang und schafft den Obersauer-Stausee. Sie wurde zwischen 1958 und 1961 gebaut und versorgt die Hauptstadt und weite Teile Südluxemburgs über ein komplexes Netz von Aufbereitungsanlagen und Leitungen mit Trinkwasser.", lb: "De Staudamm Insenborn un der Sauer ass 43 m héich a 245 m laang a schafft de Lac de la Haute-Sûre Stauséi. Hien gouf tëschent 1958 a 1961 gebaut a versuerg d'Haaptstad a vill vum Süde vu Lëtzebuerg iwwer e komplexe Netz vu Kläranlagen a Leitungen mat Drénkwaasser." },
    region: "Wiltz",
    link: "https://www.visitluxembourg.com/en/place/nature/lac-de-la-haute-sure"
  },
  {
    id: "putscheid",
    level: "geographer",
    subLevel: 2,
    name: { en: "Putscheid", fr: "Putscheid", de: "Putscheid", lb: "Putscheid" },
    coords: [49.9444, 6.2083],
    emoji: "🦅",
    clue: { en: "A remote village perched on a plateau high above the Our River valley in northern Luxembourg, this community overlooks one of the wildest and most dramatic river landscapes in the country. The forested gorges and steep slopes far below are part of a protected nature park along the German border.", fr: "Village isolé perché sur un plateau haut au-dessus de la vallée de l'Our dans le nord du Luxembourg, cette communauté surplombe l'un des paysages fluviaux les plus sauvages et les plus spectaculaires du pays. Les gorges boisées et les pentes escarpées en contrebas font partie d'un parc naturel protégé le long de la frontière allemande.", de: "Ein abgelegenes Dorf auf einem Plateau hoch über dem Our-Tal in Nordluxemburg, mit Blick auf eine der wildesten und dramatischsten Flusslandschaften des Landes. Die bewaldeten Schluchten und steilen Hänge weit unten sind Teil eines Naturschutzgebiets an der deutschen Grenze.", lb: "En ofgeleeent Duerf op engem Plateau héich iwwer dem Ourdaal am Norde vu Lëtzebuerg, mat Blick op eng vun de wildsten a dramatescht Flosslandschaften vum Land. D'bewaldet Schluuchten a steile Häng wäit drënner sinn Deel vun engem Naturschutzgebitt laanscht d'däitsch Grenz." },
    fact: { en: "Putscheid is a commune of the canton of Vianden comprising several tiny hamlets including Bivels, Roder, and Fouhren, all perched above the Our River gorge. The commune is part of the Our Nature Park and is known for some of the most dramatic valley viewpoints in Luxembourg at elevations up to 430m.", fr: "Putscheid est une commune du canton de Vianden comprenant plusieurs hameaux minuscules comme Bivels, Roder et Fouhren, tous perchés au-dessus des gorges de l'Our. La commune fait partie du Parc naturel de l'Our et est connue pour certains des points de vue les plus spectaculaires du Luxembourg à des altitudes allant jusqu'à 430 m.", de: "Putscheid ist eine Gemeinde im Kanton Vianden, die mehrere winzige Weiler umfasst, darunter Bivels, Roder und Fouhren, alle hoch über der Our-Schlucht gelegen. Die Gemeinde ist Teil des Naturparks Our und bekannt für einige der dramatischsten Talaussichtspunkte in Luxemburg auf Höhen bis zu 430 m.", lb: "Putscheid ass eng Gemeng vum Kanton Vianden, déi verschidde kleng Haamelten ëmfaasst, dorënner Bivels, Roder a Fouhren, all héich iwwer der Ourschlucht geleeën. D'Gemeng ass Deel vum Naturpark Our a bekannt fir e puer vun de dramateschen Daalaaussichtspunkten vu Lëtzebuerg op Héichten bis zu 430 m." },
    region: "Vianden",
    link: "https://www.naturpark-our.eu"
  },
  {
    id: "gosseldange",
    level: "geographer",
    subLevel: 3,
    name: { en: "Gosseldange", fr: "Gosseldange", de: "Gosseldingen", lb: "Gosseldeng" },
    coords: [49.7172, 6.1114],
    emoji: "🚣",
    clue: { en: "In the Alzette valley in central Luxembourg, this small village is home to a popular kayaking and canoeing centre on the river. The surrounding area features gentle hills typical of the Luxembourg Gutland, and the village itself is a quiet gem rarely visited by tourists despite its proximity to the capital.", fr: "Dans la vallée de l'Alzette au centre du Luxembourg, ce petit village abrite un centre de kayak et de canoë populaire sur la rivière. La région environnante présente les douces collines typiques du Gutland luxembourgeois, et le village lui-même est un joyau tranquille rarement visité par les touristes malgré sa proximité de la capitale.", de: "Im Alzettetal in Zentralluxemburg beherbergt dieses kleine Dorf ein beliebtes Kayak- und Kanuangebot am Fluss. Die umliegende Gegend zeigt die sanften Hügel des typischen Luxemburger Gutlands, und das Dorf selbst ist ein ruhiges Juwel, das trotz seiner Nähe zur Hauptstadt kaum von Touristen besucht wird.", lb: "Am Alzettedaal a Zentral-Lëtzebuerg huet dëst kleng Duerf e populärt Kayak- a Kanuangebot um Floss. D'ëmleend Géigend weist d'sanfte Bierger vum typesche lëtzebuerger Gutland, an d'Duerf selwer ass en rouegt Juwel, dat trotz senger Noperschaft zur Haaptstad kaum vu Touristen besicht gëtt." },
    fact: { en: "Gosseldange lies on the Alzette River in the commune of Lintgen. The area is part of the Alzette Valley nature corridor, an important ecological link running the length of central Luxembourg. The village is known locally for its canoeing activities and peaceful river setting.", fr: "Gosseldange est situé sur la rivière Alzette dans la commune de Lintgen. La zone fait partie du couloir naturel de la vallée de l'Alzette, un lien écologique important qui traverse le centre du Luxembourg. Le village est localement connu pour ses activités de canoë et son cadre fluvial paisible.", de: "Gosseldingen liegt an der Alzette in der Gemeinde Lintgen. Das Gebiet ist Teil des Alzettetal-Naturkorridors, einer wichtigen ökologischen Verbindung quer durch Zentralluxemburg. Das Dorf ist lokal bekannt für seine Kanuaktivitäten und die ruhige Flussumgebung.", lb: "Gosseldeng läit un der Alzette an der Gemeng Lëntgen. D'Géigend ass Deel vum Alzettedaal-Naturkorridor, engem wichtegen ökologesche Link duerch d'Zentrum vu Lëtzebuerg. D'Duerf ass lokal bekannt fir seng Kanuaktivitéiten an déi roueg Flossëmgebung." },
    region: "Mersch",
    link: "https://www.visitluxembourg.com/en"
  },
  {
    id: "clervaux-abbey",
    level: "geographer",
    subLevel: 4,
    name: { en: "Clervaux Abbey", fr: "Abbaye de Clervaux", de: "Abtei Clervaux", lb: "Abtei Klierf" },
    coords: [50.0556, 6.0317],
    emoji: "🕍",
    clue: { en: "Dominating the northern Luxembourg valley town from its hillside perch, this imposing Benedictine monastery was founded in the early 20th century and has an unusual history: occupied by German forces in WWII, rebuilt by the monks who returned after liberation, and today producing its own beer and ceramics sold worldwide.", fr: "Dominant la ville de la vallée du nord du Luxembourg depuis sa position en hauteur, cet imposant monastère bénédictin fondé au début du XXe siècle a une histoire inhabituelle : occupé par les forces allemandes pendant la Seconde Guerre mondiale, il a été reconstruit par les moines revenus après la libération, et produit aujourd'hui sa propre bière et des céramiques vendues dans le monde entier.", de: "Die imposante Benediktinerabtei, die von ihrem Hügel aus die norddeutsche Talstadt dominiert, wurde zu Beginn des 20. Jahrhunderts gegründet und hat eine ungewöhnliche Geschichte: Im Zweiten Weltkrieg von deutschen Truppen besetzt, nach der Befreiung von den zurückgekehrten Mönchen wiederaufgebaut, und heute produziert sie eigenes Bier und Keramik, die weltweit verkauft werden.", lb: "Den imposanten Benediktinerklouschter, deen d'Nordlëtzebuerg Daalsstad vu sengem Bierg aus dominéiert, gouf ugangs vum 20. Joerhonnert gegrënnt an huet eng ongewéinlech Geschicht: Am Zweete Weltkrich vu däitschen Truppen besat, no der Befreiung vun de zréckgekonnte Mönche wéideropgebaut, a produzéiert haut säi eegent Béier a Keramik, déi weltwäit verkaf ginn." },
    fact: { en: "The Abbey of St. Maurice and St. Maur in Clervaux was founded in 1910 by Benedictine monks. During WWII, German forces expelled the monks and used it as barracks. The monks returned in 1945 and rebuilt. The abbey is famous for its beer (Abbaye de Clervaux), its Gregorian chant recordings, and the Family of Man photography exhibition nearby.", fr: "L'abbaye de Saint-Maurice-et-Saint-Maur à Clervaux a été fondée en 1910 par des moines bénédictins. Pendant la Seconde Guerre mondiale, les forces allemandes ont expulsé les moines et l'ont utilisée comme caserne. Les moines sont revenus en 1945 et ont reconstruit. L'abbaye est célèbre pour sa bière (Abbaye de Clervaux), ses enregistrements de chant grégorien et l'exposition photographique La Famille des hommes à proximité.", de: "Die Abtei St. Mauritius und St. Maurus in Clerf wurde 1910 von Benediktinermönchen gegründet. Im Zweiten Weltkrieg vertrieben die deutschen Streitkräfte die Mönche und nutzten sie als Kaserne. Die Mönche kehrten 1945 zurück und bauten sie wieder auf. Die Abtei ist bekannt für ihr Bier (Abbaye de Clervaux), gregorianische Gesangsaufnahmen und die nahegelegene Family of Man-Fotoausstellung.", lb: "D'Abtei vum Hellegen Moritz a Maurus zu Klierf gouf 1910 vun Benediktinermönche gegrënnt. Am Zweete Weltkrich hunn däitsch Streitkräften d'Mönche verdrängt a si als Kasär benotzt. D'Mönche si 1945 zréckkomm a hunn hatt wéideropgebaut. D'Abtei ass bekannt fir säi Béier (Abbaye de Clervaux), gregorianeschen Gesangopnamen an d'nohegenden Family of Man-Fotosausstellung." },
    region: "Clervaux",
    link: "https://www.visitluxembourg.com/en/place/site/clervaux-abbey"
  },
  {
    id: "lultzhausen",
    level: "geographer",
    subLevel: 3,
    name: { en: "Lultzhausen", fr: "Lultzhausen", de: "Lultzhausen", lb: "Lultzhausen" },
    coords: [49.9064, 5.9642],
    emoji: "⛵",
    clue: { en: "A tiny village directly on the shore of Luxembourg's largest lake in the western Ardennes, this small hamlet has become the main water sports hub for sailing, windsurfing, and kayaking on the reservoir. Its harbour and slipway are the busiest non-motorised boating facility in the entire country.", fr: "Minuscule village directement sur la rive du plus grand lac du Luxembourg dans les Ardennes occidentales, ce petit hameau est devenu le principal centre de sports nautiques pour la voile, la planche à voile et le kayak sur le réservoir. Son port et sa cale de mise à l'eau sont les installations de navigation non motorisée les plus fréquentées du pays.", de: "Ein winziges Dorf direkt am Ufer von Luxemburgs größtem See in den westlichen Ardennen. Dieser Weiler ist zum Hauptwassersportzentrum für Segeln, Windsurfen und Kajak auf dem Stausee geworden. Sein Hafen und die Slipanlage sind die meistgenutzten nicht motorisierten Bootsanlagen des gesamten Landes.", lb: "En dënn Duerf direkt um Ufier vum gréisste See vu Lëtzebuerg an den westlechen Ardennen, dëse klenge Haamelt ass zum Haaptwassersportszentrum fir Segelen, Windsurfen a Kajak um Stauséi ginn. Seng Häfen a Slipanlage sinn déi meeschte benotzt net-motorisiert Bootsanlagen vum ganzen Land." },
    fact: { en: "Lultzhausen is a hamlet on the Lac de la Haute-Sûre, Luxembourg's largest lake, in the commune of Esch-sur-Sûre. It is home to the Maison du Lac, a water sports and nature education centre. The lake is a protected drinking water reservoir, so only non-motorised water sports are permitted on its waters.", fr: "Lultzhausen est un hameau sur le lac de la Haute-Sûre, le plus grand lac du Luxembourg, dans la commune d'Esch-sur-Sûre. Il abrite la Maison du Lac, un centre de sports nautiques et d'éducation à la nature. Le lac est un réservoir d'eau potable protégé, donc seuls les sports nautiques non motorisés sont autorisés sur ses eaux.", de: "Lultzhausen ist ein Weiler am Lac de la Haute-Sûre, Luxemburgs größtem See, in der Gemeinde Esch-an-der-Sauer. Es beherbergt die Maison du Lac, ein Wassersport- und Naturbildungszentrum. Der See ist ein geschützter Trinkwasserspeicher, daher sind nur nicht motorisierte Wassersportarten auf seinen Gewässern gestattet.", lb: "Lultzhausen ass en Haamelt um Lac de la Haute-Sûre, Lëtzebuerg säim gréisste See, an der Gemeng Esch-Sauer. Et huet d'Maison du Lac, e Wassersport- a Naturbildungszentrum. De See ass e geschützten Drénkwaasserreservoir, sou datt nëmmen net-motorisiert Wassersportaarte op senge Waasser erlaabt sinn." },
    region: "Wiltz",
    link: "https://www.visitluxembourg.com/en/place/nature/lac-de-la-haute-sure"
  },
  {
    id: "schubergeweier",
    level: "geographer",
    subLevel: 5,
    name: { en: "Schubergeweier", fr: "Schubergeweier", de: "Schubergeweier", lb: "Schubergeweier" },
    coords: [49.6325, 6.1422],
    emoji: "🎭",
    clue: { en: "Hidden in the forests south of Luxembourg City, this small artificial lake is best known for a unique annual tradition: for one week every September, a vast travelling funfair and sheep market sets up on its shores, drawing hundreds of thousands of visitors from across Luxembourg and the border regions. It is one of the most celebrated local festivals in the country.", fr: "Caché dans les forêts au sud de Luxembourg-Ville, ce petit lac artificiel est surtout connu pour une tradition annuelle unique : pendant une semaine chaque septembre, une immense fête foraine itinérante et un marché aux moutons s'installent sur ses rives, attirant des centaines de milliers de visiteurs du Luxembourg et des régions frontalières. C'est l'une des fêtes locales les plus célébrées du pays.", de: "Versteckt in den Wäldern südlich von Luxemburg-Stadt ist dieser kleine Stausee vor allem bekannt für eine einzigartige jährliche Tradition: Eine Woche lang im September richtet sich ein riesiger Wanderjahrmarkt und Schafmarkt an seinen Ufern ein und zieht Hunderttausende von Besuchern aus ganz Luxemburg und den Grenzregionen an. Es ist eines der bekanntesten lokalen Feste des Landes.", lb: "Verstoppt an de Bëscher südlech vu Lëtzebuerg-Stad ass dëse klenge Stauséi virun allem bekannt fir eng eenzegaarteg jährlecht Traditioun: Eng Woch all September setzt sech e risegen Wanderjahrmaart a Schofmaart um senge Ufiere fest an zitt Honnertdausende vu Bescher aus ganz Lëtzebuerg an de Grenzregiounen un. Et ass ee vun de bekannsten lokalen Fester vum Land." },
    fact: { en: "The Schubergeweier is a small reservoir near Hesperange south of Luxembourg City. It gives its name to the famous Schueberfouer, Luxembourg's largest annual funfair held each August-September. The fair originated in 1340 when John the Blind, Count of Luxembourg, granted a charter for a sheep market here. It now attracts over 2 million visitors annually.", fr: "Le Schubergeweier est un petit réservoir près d'Hesperange au sud de Luxembourg-Ville. Il donne son nom à la célèbre Schueberfouer, la plus grande foire annuelle du Luxembourg organisée chaque août-septembre. La foire trouve son origine en 1340 lorsque Jean l'Aveugle, Comte de Luxembourg, a accordé une charte pour un marché aux moutons ici. Elle attire maintenant plus de 2 millions de visiteurs par an.", de: "Der Schubergeweier ist ein kleiner Stausee bei Hesperingen südlich von Luxemburg-Stadt. Er gibt der berühmten Schueberfouer, Luxemburgs größtem jährlichem Jahrmarkt im August-September, seinen Namen. Der Markt geht auf das Jahr 1340 zurück, als Johann der Blinde, Graf von Luxemburg, hier eine Charta für einen Schafmarkt erteilte. Er zieht heute über 2 Millionen Besucher pro Jahr an.", lb: "De Schubergeweier ass e klenge Stauséi bei Hesperange südlech vu Lëtzebuerg-Stad. Hie gëtt der berüümter Schueberfouer, Lëtzebuerg säim gréisste jährlecht Jahrmaart am August-September, säin Numm. De Maart geet op d'Joer 1340 zréck, wéi Johann de Blannen, Grof vu Lëtzebuerg, hei eng Charta fir e Schofmaart erlaascht huet. Hie zitt haut iwwer 2 Millioune Bescher pro Joer un." },
    region: "Luxembourg City",
    link: "https://www.schueberfouer.lu"
  }
]

/**
 * Returns the 5 locations for a specific major level + sub-level.
 */
export function getSubLevelLocations(levelName, subLevel, locationsPool = null) {
  const pool = locationsPool || LOCATIONS
  return pool.filter(loc => loc.level === levelName && loc.subLevel === subLevel)
}

export const LEVEL_ORDER = ["tourist", "wanderer", "navigator", "explorer", "geographer"]

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
