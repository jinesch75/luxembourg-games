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
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html',
    translations: {
      fr: {
        question: 'Que signifie « Moien » en luxembourgeois ?',
        options: ['Bonsoir', 'Bonjour / Salut', 'Merci', 'Au revoir'],
        explanation: '« Moien » est la salutation la plus courante en luxembourgeois, utilisée à toute heure de la journée. Elle vient de l\'allemand « Morgen » (matin).',
      },
      de: {
        question: 'Was bedeutet „Moien" auf Luxemburgisch?',
        options: ['Guten Abend', 'Hallo / Guten Morgen', 'Danke', 'Auf Wiedersehen'],
        explanation: '„Moien" ist die häufigste Begrüßung auf Luxemburgisch und wird zu jeder Tageszeit verwendet. Es leitet sich vom deutschen Wort „Morgen" ab.',
      },
      lb: {
        question: 'Wat bedeit „Moien" op Lëtzebuergesch?',
        options: ['Gudden Owend', 'Hallo / Gudde Moien', 'Merci', 'Äddi'],
        explanation: '„Moien" ass déi heefegst Begrëssung op Lëtzebuergesch, déi zu all Auer vum Dag benotzt gëtt. Si kënnt vum däitsche Wuert „Morgen".',
      },
    },
  },
  {
    id: 'hist-1', level: 'newcomer', category: 'history',
    question: 'In which year did Luxembourg gain full independence?',
    options: ['1815', '1839', '1867', '1890'],
    answer: 1,
    explanation: 'The Treaty of London of 19 April 1839 recognised Luxembourg as a fully independent state, separating it from the Netherlands.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'En quelle année le Luxembourg a-t-il obtenu sa pleine indépendance ?',
        options: ['1815', '1839', '1867', '1890'],
        explanation: 'Le Traité de Londres du 19 avril 1839 a reconnu le Luxembourg comme État pleinement indépendant, le séparant des Pays-Bas.',
      },
      de: {
        question: 'In welchem Jahr erlangte Luxemburg seine volle Unabhängigkeit?',
        options: ['1815', '1839', '1867', '1890'],
        explanation: 'Der Londoner Vertrag vom 19. April 1839 erkannte Luxemburg als vollständig unabhängigen Staat an und trennte es von den Niederlanden.',
      },
      lb: {
        question: 'A wéi engem Joer huet Lëtzebuerg seng voll Onofhängegkeet kritt?',
        options: ['1815', '1839', '1867', '1890'],
        explanation: 'Den Traité de Londres vum 19. Abrëll 1839 huet Lëtzebuerg als voll onofhängege Staat unerkannt, a vun den Nidderlanden getrennt.',
      },
    },
  },
  {
    id: 'cult-1', level: 'newcomer', category: 'culture',
    question: 'What is Luxembourg\'s National Day and when is it celebrated?',
    options: ['24 October — Independence Day', '23 June — National Day (Nationalfeierdag)', '14 July — Bastille Day', '15 November — Day of the Dynasty'],
    answer: 1,
    explanation: 'Luxembourg\'s National Day (Nationalfeierdag) is celebrated on 23 June, officially the birthday of the Grand Duke. It features concerts, fireworks, and the "Torch Procession" the night before.',
    link: 'https://luxembourg.public.lu/en/culture/traditions.html',
    translations: {
      fr: {
        question: 'Quel est le Jour national du Luxembourg et quand est-il célébré ?',
        options: ['24 octobre — Fête de l\'indépendance', '23 juin — Fête nationale (Nationalfeierdag)', '14 juillet — Fête nationale française', '15 novembre — Fête de la Dynastie'],
        explanation: 'La Fête nationale (Nationalfeierdag) est célébrée le 23 juin, officiellement l\'anniversaire du Grand-Duc. Elle comprend concerts, feux d\'artifice et la Procession aux flambeaux la veille.',
      },
      de: {
        question: 'Was ist der Nationalfeiertag Luxemburgs und wann wird er gefeiert?',
        options: ['24. Oktober — Unabhängigkeitstag', '23. Juni — Nationalfeiertag (Nationalfeierdag)', '14. Juli — Bastille-Tag', '15. November — Tag der Dynastie'],
        explanation: 'Der Nationalfeiertag (Nationalfeierdag) wird am 23. Juni gefeiert, offiziell dem Geburtstag des Großherzogs. Er umfasst Konzerte, Feuerwerk und den Fackelzug am Abend zuvor.',
      },
      lb: {
        question: 'Wat ass de Lëtzebuerger Nationalfeierdag a wéini gëtt en gefeiert?',
        options: ['24. Oktober — Onofhängegkeetsdag', '23. Juni — Nationalfeierdag', '14. Juli — Bastilledag', '15. November — Dag vun der Dynasti'],
        explanation: 'De Nationalfeierdag gëtt de 23. Juni gefeiert, offiziell de Gebuertsdag vum Groussherzog. Hien ass mat Concerten, Feierwierk an dem Fuekelzuch den Owend virdrun.',
      },
    },
  },
  {
    id: 'peop-1', level: 'newcomer', category: 'people',
    question: 'Edward Steichen, born in Bivange, Luxembourg, became world-famous as what?',
    options: ['A jazz musician', 'A photographer and curator at MoMA New York', 'A Formula 1 racing driver', 'A Nobel Prize-winning economist'],
    answer: 1,
    explanation: 'Edward Steichen (1879–1973) was a pioneering photographer and director of the photography department at MoMA (New York). He created the iconic "Family of Man" exhibition (1955).',
    link: 'https://luxembourg.public.lu/en/culture/patrimoine-culturel.html',
    translations: {
      fr: {
        question: 'Edward Steichen, né à Bivange au Luxembourg, est devenu mondialement célèbre en tant que quoi ?',
        options: ['Musicien de jazz', 'Photographe et conservateur au MoMA de New York', 'Pilote de Formule 1', 'Économiste lauréat du Prix Nobel'],
        explanation: 'Edward Steichen (1879–1973) était un photographe pionnier et directeur du département de photographie du MoMA (New York). Il a créé l\'emblématique exposition « The Family of Man » (1955).',
      },
      de: {
        question: 'Edward Steichen, geboren in Bivange/Luxemburg, wurde weltberühmt als was?',
        options: ['Jazzmusiker', 'Fotograf und Kurator am MoMA in New York', 'Formel-1-Rennfahrer', 'Nobelpreisträger für Wirtschaft'],
        explanation: 'Edward Steichen (1879–1973) war ein Pionier der Fotografie und Direktor der Fotoabteilung des MoMA (New York). Er schuf die ikonische Ausstellung „The Family of Man" (1955).',
      },
      lb: {
        question: 'Edward Steichen, zu Bivange a Lëtzebuerg gebuer, gouf weltberühmt als wat?',
        options: ['Jazzmusiker', 'Fotograf a Conservateur um MoMA New York', 'Formel-1-Fuerer', 'Nobelpräisträger an der Wirtschaft'],
        explanation: 'Edward Steichen (1879–1973) war e Pionierfotograf a Direkter vun der Fotoabteelung vum MoMA (New York). Hie huet déi ikonescht Ausstellung « The Family of Man » (1955) geschaaf.',
      },
    },
  },
  {
    id: 'inst-1', level: 'newcomer', category: 'institutions',
    question: 'How many members does the Luxembourg parliament (Chambre des Députés) have?',
    options: ['40', '60', '72', '100'],
    answer: 1,
    explanation: 'The Chambre des Députés has 60 members elected for five-year terms. Luxembourg is divided into 4 constituencies: South, Centre, North, and East.',
    link: 'https://luxembourg.public.lu/en/gouvernement/chambre-des-deputes.html',
    translations: {
      fr: {
        question: 'Combien de membres compte le parlement luxembourgeois (Chambre des Députés) ?',
        options: ['40', '60', '72', '100'],
        explanation: 'La Chambre des Députés compte 60 membres élus pour cinq ans. Le Luxembourg est divisé en 4 circonscriptions : Sud, Centre, Nord et Est.',
      },
      de: {
        question: 'Wie viele Mitglieder hat das luxemburgische Parlament (Chambre des Députés)?',
        options: ['40', '60', '72', '100'],
        explanation: 'Die Chambre des Députés hat 60 Mitglieder, die für fünf Jahre gewählt werden. Luxemburg ist in 4 Wahlbezirke unterteilt: Süd, Mitte, Nord und Ost.',
      },
      lb: {
        question: 'Wéi vill Membere huet de Lëtzebuerger Parlament (Chambre des Députés)?',
        options: ['40', '60', '72', '100'],
        explanation: 'D\'Chambre des Députés huet 60 Memberen, déi fir fënnef Joer gewielt ginn. Lëtzebuerg ass an 4 Wahlkreeser opgedeelt: Süden, Zentrum, Norden an Osten.',
      },
    },
  },
  // sub-level 2
  {
    id: 'econ-1', level: 'newcomer', category: 'economy',
    question: 'Luxembourg is the world\'s second-largest investment fund centre after which country?',
    options: ['Switzerland', 'The United States', 'United Kingdom', 'Hong Kong'],
    answer: 1,
    explanation: 'Luxembourg is the world\'s second-largest investment fund domicile after the USA, hosting over 3,500 funds. The financial sector accounts for roughly a quarter of GDP.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html',
    translations: {
      fr: {
        question: 'Le Luxembourg est le 2e plus grand centre de fonds d\'investissement au monde après quel pays ?',
        options: ['La Suisse', 'Les États-Unis', 'Le Royaume-Uni', 'Hong Kong'],
        explanation: 'Le Luxembourg est le deuxième domicile mondial de fonds d\'investissement après les États-Unis, hébergeant plus de 3 500 fonds. Le secteur financier représente environ un quart du PIB.',
      },
      de: {
        question: 'Luxemburg ist nach welchem Land das weltweit zweitgrößte Investmentfondsdomizil?',
        options: ['Die Schweiz', 'Die USA', 'Das Vereinigte Königreich', 'Hongkong'],
        explanation: 'Luxemburg ist nach den USA der weltweit zweitgrößte Standort für Investmentfonds mit über 3.500 Fonds. Der Finanzsektor macht rund ein Viertel des BIP aus.',
      },
      lb: {
        question: 'Lëtzebuerg ass den zweegréisste Fonds-Investitiounszentrum op der Welt no wéi engem Land?',
        options: ['d\'Schwäiz', 'd\'USA', 'de Royaume-Uni', 'Hong Kong'],
        explanation: 'Lëtzebuerg ass no den USA den zweegréisste Fonds-Investitiounsdomizil mat iwwer 3.500 Fonds. De Finanzsecteur mécht ongeféier e Véierel vum BIP aus.',
      },
    },
  },
  {
    id: 'lang-2', level: 'newcomer', category: 'language',
    question: 'In which year was Luxembourgish officially recognised as the national language?',
    options: ['1945', '1964', '1984', '2000'],
    answer: 2,
    explanation: 'The Law of 24 February 1984 established Luxembourgish as the national language, alongside French and German as administrative languages.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html',
    translations: {
      fr: {
        question: 'En quelle année le luxembourgeois a-t-il été officiellement reconnu comme langue nationale ?',
        options: ['1945', '1964', '1984', '2000'],
        explanation: 'La loi du 24 février 1984 a établi le luxembourgeois comme langue nationale, aux côtés du français et de l\'allemand comme langues administratives.',
      },
      de: {
        question: 'In welchem Jahr wurde Luxemburgisch offiziell als Nationalsprache anerkannt?',
        options: ['1945', '1964', '1984', '2000'],
        explanation: 'Das Gesetz vom 24. Februar 1984 legte Luxemburgisch als Nationalsprache fest, neben Französisch und Deutsch als Verwaltungssprachen.',
      },
      lb: {
        question: 'A wéi engem Joer gouf Lëtzebuergesch offiziell als Nationalsproch unerkannt?',
        options: ['1945', '1964', '1984', '2000'],
        explanation: 'D\'Gesetz vum 24. Februar 1984 huet Lëtzebuergesch als Nationalsproch festgeluecht, nieft Franséisch a Däitsch als Verwaltungssprochen.',
      },
    },
  },
  {
    id: 'hist-2', level: 'newcomer', category: 'history',
    question: 'What was the significance of the Treaty of London (1867) for Luxembourg?',
    options: ['Luxembourg joined the European Community', 'Luxembourg was declared permanently neutral and its great fortress demolished', 'Luxembourg gained its current borders', 'Luxembourg became a Grand Duchy'],
    answer: 1,
    explanation: 'The 1867 Treaty of London declared Luxembourg perpetually neutral and required the demolition of its famous fortress. The Allies called the city "Gibraltar of the North".',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'Quelle fut l\'importance du Traité de Londres (1867) pour le Luxembourg ?',
        options: ['Le Luxembourg a rejoint la Communauté européenne', 'Le Luxembourg a été déclaré perpétuellement neutre et sa forteresse démolie', 'Le Luxembourg a obtenu ses frontières actuelles', 'Le Luxembourg est devenu un Grand-Duché'],
        explanation: 'Le Traité de Londres de 1867 a déclaré le Luxembourg perpétuellement neutre et exigé la démolition de sa célèbre forteresse. Les Alliés surnommaient la ville le « Gibraltar du Nord ».',
      },
      de: {
        question: 'Was bedeutete der Londoner Vertrag (1867) für Luxemburg?',
        options: ['Luxemburg trat der Europäischen Gemeinschaft bei', 'Luxemburg wurde für dauerhaft neutral erklärt und seine Festung abgerissen', 'Luxemburg erhielt seine heutigen Grenzen', 'Luxemburg wurde ein Großherzogtum'],
        explanation: 'Der Londoner Vertrag von 1867 erklärte Luxemburg für dauerhaft neutral und verlangte den Abriss seiner berühmten Festung. Die Alliierten nannten die Stadt „Gibraltar des Nordens".',
      },
      lb: {
        question: 'Wat war d\'Bedeitung vum Traité de Londres (1867) fir Lëtzebuerg?',
        options: ['Lëtzebuerg ass der Europäescher Gemeinschaft bäigetrueden', 'Lëtzebuerg gouf fir ëmmer neutral erkläert a seng Festung ofgerappt', 'Lëtzebuerg huet seng aktuell Grenzen kritt', 'Lëtzebuerg ass e Groussherzogtum ginn'],
        explanation: 'Den Traité de Londres vu 1867 huet Lëtzebuerg fir ëmmer neutral erkläert an den Ofrap vu senger Festung verlaangt. D\'Alliéierten hunn d\'Stad « Gibraltar vum Norden » genannt.',
      },
    },
  },
  {
    id: 'n-cult-1', level: 'newcomer', category: 'culture',
    question: 'What is the national motto of Luxembourg?',
    options: ['"Lëtzebuerg fir ëmmer"', '"Mir wëlle bleiwe wat mir sinn"', '"Eent fir all, all fir eent"', '"Fräiheet an Demokratie"'],
    answer: 1,
    explanation: '"Mir wëlle bleiwe wat mir sinn" means "We want to remain what we are" — Luxembourg\'s national motto, expressing the country\'s determination to preserve its identity and independence.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg.html',
    translations: {
      fr: {
        question: 'Quelle est la devise nationale du Luxembourg ?',
        options: ['"Lëtzebuerg fir ëmmer"', '"Mir wëlle bleiwe wat mir sinn"', '"Eent fir all, all fir eent"', '"Fräiheet an Demokratie"'],
        explanation: '« Mir wëlle bleiwe wat mir sinn » signifie « Nous voulons rester ce que nous sommes » — la devise nationale du Luxembourg, exprimant la détermination du pays à préserver son identité et son indépendance.',
      },
      de: {
        question: 'Was ist das Nationalmotto Luxemburgs?',
        options: ['"Lëtzebuerg fir ëmmer"', '"Mir wëlle bleiwe wat mir sinn"', '"Eent fir all, all fir eent"', '"Fräiheet an Demokratie"'],
        explanation: '„Mir wëlle bleiwe wat mir sinn" bedeutet „Wir wollen bleiben, was wir sind" — Luxemburgs Nationalmotto, das den Willen des Landes ausdrückt, seine Identität und Unabhängigkeit zu bewahren.',
      },
      lb: {
        question: 'Wat ass de Lëtzebuerger Nationalsproch?',
        options: ['"Lëtzebuerg fir ëmmer"', '"Mir wëlle bleiwe wat mir sinn"', '"Eent fir all, all fir eent"', '"Fräiheet an Demokratie"'],
        explanation: '„Mir wëlle bleiwe wat mir sinn" ass de Lëtzebuerger Nationalsproch, deen de Wëlle vum Land ausdréckt, seng Identitéit an Onofhängegkeet ze erhalen.',
      },
    },
  },
  {
    id: 'n-peop-1', level: 'newcomer', category: 'people',
    question: 'Who is the Head of State of Luxembourg?',
    options: ['Grand Duke Jean', 'Grand Duke Henri', 'Grand Duke Guillaume', 'Grand Duke Adolphe'],
    answer: 1,
    explanation: 'Grand Duke Henri has been the constitutional monarch of Luxembourg since October 2000, when his father Grand Duke Jean abdicated. He is married to Grand Duchess Maria Teresa.',
    link: 'https://luxembourg.public.lu/en/gouvernement/maison-grand-ducale.html',
    translations: {
      fr: {
        question: 'Qui est le chef d\'État du Luxembourg ?',
        options: ['Grand-Duc Jean', 'Grand-Duc Henri', 'Grand-Duc Guillaume', 'Grand-Duc Adolphe'],
        explanation: 'Le Grand-Duc Henri est le monarque constitutionnel du Luxembourg depuis octobre 2000, lorsque son père le Grand-Duc Jean a abdiqué. Il est marié à la Grande-Duchesse Maria Teresa.',
      },
      de: {
        question: 'Wer ist das Staatsoberhaupt Luxemburgs?',
        options: ['Großherzog Jean', 'Großherzog Henri', 'Großherzog Guillaume', 'Großherzog Adolphe'],
        explanation: 'Großherzog Henri ist seit Oktober 2000 der konstitutionelle Monarch Luxemburgs, als sein Vater Großherzog Jean abdankte. Er ist mit Großherzogin Maria Teresa verheiratet.',
      },
      lb: {
        question: 'Wien ass de Staatschef vu Lëtzebuerg?',
        options: ['Groussherzog Jean', 'Groussherzog Henri', 'Groussherzog Guillaume', 'Groussherzog Adolphe'],
        explanation: 'Groussherzog Henri ass zënter Oktober 2000 de konstitutionelle Monarch vu Lëtzebuerg, wou säi Papp Groussherzog Jean ofgedankt huet. Hien ass mat Groussherzogin Maria Teresa bestuet.',
      },
    },
  },
  // sub-level 3
  {
    id: 'n-inst-1', level: 'newcomer', category: 'institutions',
    question: 'What currency does Luxembourg use?',
    options: ['Luxembourg Franc', 'Euro', 'Belgian Franc', 'Swiss Franc'],
    answer: 1,
    explanation: 'Luxembourg uses the Euro (€) as its currency. Luxembourg was one of the founding members of the Eurozone and adopted euro notes and coins on 1 January 2002.',
    link: 'https://luxembourg.public.lu/en/vivre.html',
    translations: {
      fr: {
        question: 'Quelle monnaie le Luxembourg utilise-t-il ?',
        options: ['Franc luxembourgeois', 'Euro', 'Franc belge', 'Franc suisse'],
        explanation: 'Le Luxembourg utilise l\'Euro (€). Il était l\'un des membres fondateurs de la zone euro et a adopté les euros le 1er janvier 2002.',
      },
      de: {
        question: 'Welche Währung verwendet Luxemburg?',
        options: ['Luxemburgischer Franc', 'Euro', 'Belgischer Franc', 'Schweizer Franken'],
        explanation: 'Luxemburg verwendet den Euro (€). Es war eines der Gründungsmitglieder der Eurozone und führte Euro-Banknoten und -Münzen am 1. Januar 2002 ein.',
      },
      lb: {
        question: 'Wéi eng Währung benotzt Lëtzebuerg?',
        options: ['Lëtzebuerger Frang', 'Euro', 'Belsche Frang', 'Schwäizer Frang'],
        explanation: 'Lëtzebuerg benotzt den Euro (€). Et war ee vun de Grënnungsmembere vun der Eurozon a huet den 1. Januar 2002 Euro-Noten a Mënzen aagefouert.',
      },
    },
  },
  {
    id: 'n-econ-1', level: 'newcomer', category: 'economy',
    question: 'What is the approximate area of Luxembourg in km²?',
    options: ['1,286 km²', '2,586 km²', '3,986 km²', '5,200 km²'],
    answer: 1,
    explanation: 'Luxembourg covers 2,586 km², making it one of the smallest countries in Europe and the world. Despite its small size, it is one of the wealthiest nations per capita.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg.html',
    translations: {
      fr: {
        question: 'Quelle est la superficie approximative du Luxembourg en km² ?',
        options: ['1 286 km²', '2 586 km²', '3 986 km²', '5 200 km²'],
        explanation: 'Le Luxembourg couvre 2 586 km², l\'un des plus petits pays d\'Europe. Malgré sa petite taille, c\'est l\'une des nations les plus riches par habitant.',
      },
      de: {
        question: 'Wie groß ist die Fläche Luxemburgs in km² ungefähr?',
        options: ['1.286 km²', '2.586 km²', '3.986 km²', '5.200 km²'],
        explanation: 'Luxemburg umfasst 2.586 km² und ist damit eines der kleinsten Länder Europas. Trotz seiner geringen Größe ist es eine der wohlhabendsten Nationen pro Kopf.',
      },
      lb: {
        question: 'Wéi grouss ass Lëtzebuerg ongeféier a km²?',
        options: ['1.286 km²', '2.586 km²', '3.986 km²', '5.200 km²'],
        explanation: 'Lëtzebuerg ass 2.586 km² grouss, ee vun de klengste Länner an Europa. Trotz senger klenger Gréisst ass et ee vun de räichste Länner pro Awunner.',
      },
    },
  },
  {
    id: 'n-lang-1', level: 'newcomer', category: 'language',
    question: 'What does "Äddi" mean in Luxembourgish?',
    options: ['Hello', 'Please', 'Goodbye', 'Thank you'],
    answer: 2,
    explanation: '"Äddi" is the standard way to say goodbye in Luxembourgish. It is derived from "adieu" via French influence — a good example of how Luxembourgish blends Germanic and Romance elements.',
    link: null,
    translations: {
      fr: {
        question: 'Que signifie « Äddi » en luxembourgeois ?',
        options: ['Bonjour', 'S\'il vous plaît', 'Au revoir', 'Merci'],
        explanation: '« Äddi » est la façon courante de dire au revoir en luxembourgeois. Il dérive de « adieu » via l\'influence française — exemple typique du mélange germanique et roman du luxembourgeois.',
      },
      de: {
        question: 'Was bedeutet „Äddi" auf Luxemburgisch?',
        options: ['Hallo', 'Bitte', 'Auf Wiedersehen', 'Danke'],
        explanation: '„Äddi" ist die übliche Art, auf Luxemburgisch Auf Wiedersehen zu sagen. Es leitet sich über den französischen Einfluss von „adieu" ab — ein gutes Beispiel der germanisch-romanischen Mischung.',
      },
      lb: {
        question: 'Wat bedeit „Äddi" op Lëtzebuergesch?',
        options: ['Hallo', 'Wann ech gelift', 'Äddi / Uf Wiedersinn', 'Merci'],
        explanation: '„Äddi" ass d\'üblech Aart op Lëtzebuergesch Äddi ze soen. Et kënnt vum franséischen „adieu" — e gudde Beispill wéi Lëtzebuergesch germanesch a romanesch Elementer vermëscht.',
      },
    },
  },
  {
    id: 'n-hist-1', level: 'newcomer', category: 'history',
    question: 'What is the name of the rock promontory at the heart of Luxembourg City\'s fortifications?',
    options: ['The Pétrusse Rock', 'The Bock', 'The Alzette Cliff', 'The Vauban Ridge'],
    answer: 1,
    explanation: 'The Bock promontory is where Count Sigefroid built his castle in 963 AD, founding Luxembourg. It towers above the Alzette river valley and is the historic heart of the city.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'Quel est le nom du promontoire rocheux au cœur des fortifications de Luxembourg-Ville ?',
        options: ['Le Rocher de la Pétrusse', 'Le Bock', 'La Falaise de l\'Alzette', 'La Crête de Vauban'],
        explanation: 'Le promontoire du Bock est l\'endroit où le comte Sigefroid a construit son château en 963, fondant Luxembourg. Il domine la vallée de l\'Alzette.',
      },
      de: {
        question: 'Wie heißt der Felsvorsprung im Herzen der Festungsanlagen von Luxemburg-Stadt?',
        options: ['Der Pétrusse-Felsen', 'Der Bock', 'Der Alzette-Kliff', 'Der Vauban-Kamm'],
        explanation: 'Der Bock-Vorsprung ist der Ort, wo Graf Sigefroid im Jahr 963 seine Burg baute und damit Luxemburg gründete. Er überragt das Alzette-Tal.',
      },
      lb: {
        question: 'Wéi heescht de Fielsvirsprong am Häerz vun de Lëtzebuerger Festungsanlagen?',
        options: ['De Pétrusse-Fiels', 'De Bock', 'Den Alzette-Kliff', 'De Vauban-Kamm'],
        explanation: 'De Bock-Virsprong ass wou de Graf Sigefroid am Joer 963 seng Burg gebaut huet, fir Lëtzebuerg ze grënnen. Hien dominéiert d\'Alzette-Dallänner.',
      },
    },
  },
  {
    id: 'n-econ-2', level: 'newcomer', category: 'economy',
    question: 'Which is the second-largest city in Luxembourg?',
    options: ['Differdange', 'Dudelange', 'Esch-sur-Alzette', 'Ettelbruck'],
    answer: 2,
    explanation: 'Esch-sur-Alzette, in the south of the country, is Luxembourg\'s second-largest city. It was the historical centre of Luxembourg\'s steel industry and is known today for its cultural scene.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg.html',
    translations: {
      fr: {
        question: 'Quelle est la deuxième plus grande ville du Luxembourg ?',
        options: ['Differdange', 'Dudelange', 'Esch-sur-Alzette', 'Ettelbruck'],
        explanation: 'Esch-sur-Alzette, dans le sud du pays, est la deuxième plus grande ville du Luxembourg. Elle était le centre historique de l\'industrie sidérurgique luxembourgeoise.',
      },
      de: {
        question: 'Welches ist die zweitgrößte Stadt Luxemburgs?',
        options: ['Differdingen', 'Düdelingen', 'Esch an der Alzette', 'Ettelbrück'],
        explanation: 'Esch an der Alzette im Süden des Landes ist Luxemburgs zweitgrößte Stadt. Sie war das historische Zentrum der luxemburgischen Stahlindustrie.',
      },
      lb: {
        question: 'Wéi eng ass déi zweet gréisst Stad a Lëtzebuerg?',
        options: ['Déifferdeng', 'Diddeleng', 'Esch-Uelzecht', 'Ettelbréck'],
        explanation: 'Esch-Uelzecht, am Süden vum Land, ass déi zweet gréisst Stad vu Lëtzebuerg. Si war de geschichtleche Mëttelpunkt vun der Lëtzebuerger Steelindustrie.',
      },
    },
  },
  // sub-level 4
  {
    id: 'cult-2', level: 'newcomer', category: 'culture',
    question: 'What is "Bretzelsonndeg" (Pretzel Sunday) in Luxembourg?',
    options: ['A harvest festival where farmers share pretzels', 'A Valentine\'s Day tradition where boys give pretzels to girls they like', 'An Easter tradition of eating sweet pretzels', 'A Carnival custom involving pretzel-shaped costumes'],
    answer: 1,
    explanation: 'Bretzelsonndeg (the 4th Sunday of Lent) is a Luxembourg Valentine\'s Day: boys give a decorated pretzel to the girl they like. If she reciprocates, she gives him a decorated egg at Easter.',
    link: 'https://luxembourg.public.lu/en/culture/traditions.html',
    translations: {
      fr: {
        question: 'Qu\'est-ce que le « Bretzelsonndeg » (dimanche du bretzel) au Luxembourg ?',
        options: ['Un festival des moissons', 'Une Saint-Valentin : les garçons offrent des bretzels aux filles qu\'ils aiment', 'Une tradition de Pâques avec des bretzels sucrés', 'Un carnaval avec costumes en forme de bretzel'],
        explanation: 'Le Bretzelsonndeg (4e dimanche du Carême) est la Saint-Valentin luxembourgeoise : les garçons offrent un bretzel décoré à la fille qu\'ils aiment. En retour, elle lui offre un œuf décoré à Pâques.',
      },
      de: {
        question: 'Was ist der „Bretzelsonndeg" (Brezelsonntag) in Luxemburg?',
        options: ['Ein Erntefest mit Brezeln', 'Eine Valentinstradition: Jungen schenken Mädchen, die sie mögen, Brezeln', 'Eine Ostertradition mit süßen Brezeln', 'Ein Karnevalsbrauch mit Brezelkostümen'],
        explanation: 'Der Bretzelsonndeg (4. Fastensonntag) ist Luxemburgs Valentinstag: Jungen schenken einem Mädchen eine Brezel. Wenn sie erwidert, schenkt sie ihm zu Ostern ein verziertes Ei.',
      },
      lb: {
        question: 'Wat ass den « Bretzelsonndeg » zu Lëtzebuerg?',
        options: ['En Äerntfest mat Bretzelen', 'En Valentinsdag: Jongen offréieren de Meedercher déi si gäre hunn Bretzelen', 'Eng Ouschtertraditioun mat séissen Bretzelen', 'E Karnefalsbrauch mat Bretzel-Kostümer'],
        explanation: 'Den Bretzelsonndeg (4. Sonndeg vun der Faschtenzäit) ass den Lëtzebuerger Valentinsdag: Jongen offréieren engem Meederche eng Bretzel. Wann si entsprécht, schenkt si him zu Ouschter en Ee.',
      },
    },
  },
  {
    id: 'peop-2', level: 'newcomer', category: 'people',
    question: 'Which Luxembourger won Olympic gold in the 1500m at the 1952 Helsinki Olympics?',
    options: ['Michel Théato', 'Nicolas Frantz', 'Josy Barthel', 'Charly Gaul'],
    answer: 2,
    explanation: 'Josy Barthel (1927–1992) won gold in the 1500m at the 1952 Helsinki Olympics — Luxembourg\'s only Olympic gold medal to date. The national athletics stadium is named after him.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'Quel Luxembourgeois a remporté la médaille d\'or olympique du 1 500 m aux JO de Helsinki 1952 ?',
        options: ['Michel Théato', 'Nicolas Frantz', 'Josy Barthel', 'Charly Gaul'],
        explanation: 'Josy Barthel (1927–1992) a remporté l\'or du 1 500 m aux JO de Helsinki 1952 — la seule médaille d\'or olympique du Luxembourg à ce jour. Le stade national d\'athlétisme porte son nom.',
      },
      de: {
        question: 'Welcher Luxemburger gewann bei den Olympischen Spielen 1952 in Helsinki Gold über 1500 m?',
        options: ['Michel Théato', 'Nicolas Frantz', 'Josy Barthel', 'Charly Gaul'],
        explanation: 'Josy Barthel (1927–1992) gewann Gold über 1500 m bei den Olympischen Spielen 1952 in Helsinki — Luxemburgs bisher einzige olympische Goldmedaille. Das Leichtathletikstadion trägt seinen Namen.',
      },
      lb: {
        question: 'Wéi ee Lëtzebuerger huet 1952 zu Helsinki Gold iwwer 1500 m gewonnen?',
        options: ['Michel Théato', 'Nicolas Frantz', 'Josy Barthel', 'Charly Gaul'],
        explanation: 'Josy Barthel (1927–1992) huet Gold iwwer 1500 m bei den Olympesche Spillere 1952 zu Helsinki gewonnen — Lëtzebuerg seng eenzeg olympesch Goldmedail bis elo. D\'national Stadion dréit säin Numm.',
      },
    },
  },
  {
    id: 'inst-2', level: 'newcomer', category: 'institutions',
    question: 'Which major EU institutions have their headquarters in Luxembourg City?',
    options: ['European Parliament and European Commission', 'Court of Justice of the EU, Court of Auditors, and Eurostat', 'European Central Bank and European Council', 'European Defence Agency and Europol'],
    answer: 1,
    explanation: 'Luxembourg hosts the Court of Justice of the EU, the Court of Auditors, Eurostat, the European Investment Bank (EIB), and part of the European Parliament\'s Secretariat.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/institutions-europeennes.html',
    translations: {
      fr: {
        question: 'Quelles grandes institutions de l\'UE ont leur siège à Luxembourg-Ville ?',
        options: ['Parlement européen et Commission européenne', 'Cour de justice de l\'UE, Cour des comptes et Eurostat', 'Banque centrale européenne et Conseil européen', 'Agence européenne de défense et Europol'],
        explanation: 'Luxembourg accueille la Cour de justice de l\'UE, la Cour des comptes, Eurostat, la Banque européenne d\'investissement (BEI) et une partie du Secrétariat du Parlement européen.',
      },
      de: {
        question: 'Welche wichtigen EU-Institutionen haben ihren Sitz in Luxemburg-Stadt?',
        options: ['Europäisches Parlament und Europäische Kommission', 'Gerichtshof der EU, Rechnungshof und Eurostat', 'Europäische Zentralbank und Europäischer Rat', 'Europäische Verteidigungsagentur und Europol'],
        explanation: 'Luxemburg beherbergt den Gerichtshof der EU, den Rechnungshof, Eurostat, die Europäische Investitionsbank (EIB) und einen Teil des Sekretariats des Europäischen Parlaments.',
      },
      lb: {
        question: 'Wéi eng grouss EU-Institutiounen hunn hire Sëtz zu Lëtzebuerg-Stad?',
        options: ['Europäesche Parlament a Europäesch Kommissioun', 'Europäesche Geriichtshaff, Rekechunshaff a Eurostat', 'Europäesch Zentralbank an Europäesche Rot', 'Europäesch Verdeedegungsagentur an Europol'],
        explanation: 'Lëtzebuerg huscht den Europäesche Geriichtshaff, den Rekechunshaff, Eurostat, d\'Europäesch Investitiounsbank (EIB) an Deel vum Sekretariat vum Europäesche Parlament.',
      },
    },
  },
  {
    id: 'econ-2', level: 'newcomer', category: 'economy',
    question: 'Approximately what percentage of Luxembourg\'s workforce are cross-border commuters?',
    options: ['15%', '25%', '45%', '60%'],
    answer: 2,
    explanation: 'About 45% of workers in Luxembourg commute daily from neighbouring France, Belgium, and Germany — making Luxembourg unique in Europe.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html',
    translations: {
      fr: {
        question: 'Quel est le pourcentage approximatif de travailleurs frontaliers dans la main-d\'œuvre luxembourgeoise ?',
        options: ['15 %', '25 %', '45 %', '60 %'],
        explanation: 'Environ 45 % des travailleurs au Luxembourg font la navette depuis la France, la Belgique et l\'Allemagne voisines — une singularité unique en Europe.',
      },
      de: {
        question: 'Wie viel Prozent der luxemburgischen Erwerbsbevölkerung sind Grenzpendler?',
        options: ['15 %', '25 %', '45 %', '60 %'],
        explanation: 'Etwa 45 % der Arbeitnehmer in Luxemburg pendeln täglich aus dem benachbarten Frankreich, Belgien und Deutschland — was Luxemburg in Europa einzigartig macht.',
      },
      lb: {
        question: 'Wéivill Prozent vun der Lëtzebuerger Aarbechtskraaft sinn Grenzgänger?',
        options: ['15 %', '25 %', '45 %', '60 %'],
        explanation: 'Ongeféier 45 % vun den Aarbechter a Lëtzebuerg fuere all Dag aus Frankräich, Belgien a Däitschland — dat mécht Lëtzebuerg eenzegaarteg an Europa.',
      },
    },
  },
  {
    id: 'n-lang-2', level: 'newcomer', category: 'language',
    question: 'What are the three official administrative languages of Luxembourg?',
    options: ['English, French, German', 'Luxembourgish, French, German', 'French, German, Portuguese', 'Luxembourgish, English, French'],
    answer: 1,
    explanation: 'Luxembourg uses three official languages: Luxembourgish (national language), French (legislation and courts), and German (media and press).',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html',
    translations: {
      fr: {
        question: 'Quelles sont les trois langues administratives officielles du Luxembourg ?',
        options: ['Anglais, français, allemand', 'Luxembourgeois, français, allemand', 'Français, allemand, portugais', 'Luxembourgeois, anglais, français'],
        explanation: 'Le Luxembourg utilise trois langues officielles : le luxembourgeois (langue nationale), le français (législation et tribunaux) et l\'allemand (médias et presse).',
      },
      de: {
        question: 'Was sind die drei offiziellen Verwaltungssprachen Luxemburgs?',
        options: ['Englisch, Französisch, Deutsch', 'Luxemburgisch, Französisch, Deutsch', 'Französisch, Deutsch, Portugiesisch', 'Luxemburgisch, Englisch, Französisch'],
        explanation: 'Luxemburg verwendet drei Amtssprachen: Luxemburgisch (Nationalsprache), Französisch (Gesetzgebung und Gerichte) und Deutsch (Medien und Presse).',
      },
      lb: {
        question: 'Wat sinn déi dräi offiziell Verwaltungssprochen vu Lëtzebuerg?',
        options: ['Englesch, Franséisch, Däitsch', 'Lëtzebuergesch, Franséisch, Däitsch', 'Franséisch, Däitsch, Portugisesch', 'Lëtzebuergesch, Englesch, Franséisch'],
        explanation: 'Lëtzebuerg benotzt dräi offiziell Sprochen: Lëtzebuergesch (Nationalsproch), Franséisch (Gesetzgebung a Geriichter) a Däitsch (Medie a Presse).',
      },
    },
  },
  // sub-level 5
  {
    id: 'n-hist-2', level: 'newcomer', category: 'history',
    question: 'In which year was Luxembourg occupied by Nazi Germany during World War II?',
    options: ['1938', '1939', '1940', '1941'],
    answer: 2,
    explanation: 'Germany invaded and occupied Luxembourg on 10 May 1940. Luxembourg was later annexed into the Third Reich in 1942. It was liberated by Allied forces in September 1944.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'En quelle année le Luxembourg a-t-il été occupé par l\'Allemagne nazie pendant la Seconde Guerre mondiale ?',
        options: ['1938', '1939', '1940', '1941'],
        explanation: 'L\'Allemagne a envahi et occupé le Luxembourg le 10 mai 1940. Le Luxembourg a ensuite été annexé au Troisième Reich en 1942. Il a été libéré par les Alliés en septembre 1944.',
      },
      de: {
        question: 'In welchem Jahr wurde Luxemburg während des Zweiten Weltkriegs von Nazideutschland besetzt?',
        options: ['1938', '1939', '1940', '1941'],
        explanation: 'Deutschland marschierte am 10. Mai 1940 in Luxemburg ein. Luxemburg wurde 1942 dem Dritten Reich angegliedert und im September 1944 von den Alliierten befreit.',
      },
      lb: {
        question: 'A wéi engem Joer gouf Lëtzebuerg vum Nazidäitschland besat?',
        options: ['1938', '1939', '1940', '1941'],
        explanation: 'Däitschland huet den 10. Mee 1940 Lëtzebuerg besat. Lëtzebuerg gouf 1942 annexéiert a gouf am September 1944 vun de Alliéierten befreit.',
      },
    },
  },
  {
    id: 'n-cult-2', level: 'newcomer', category: 'culture',
    question: 'What animal appears on Luxembourg\'s coat of arms?',
    options: ['A golden eagle', 'A red lion', 'A white horse', 'A silver bear'],
    answer: 1,
    explanation: 'A red lion on a white and blue striped background is the central element of Luxembourg\'s coat of arms. The lion has appeared on Luxembourg\'s heraldry since the 13th century.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg.html',
    translations: {
      fr: {
        question: 'Quel animal figure sur les armoiries du Luxembourg ?',
        options: ['Un aigle doré', 'Un lion rouge', 'Un cheval blanc', 'Un ours argenté'],
        explanation: 'Un lion rouge sur fond rayé blanc et bleu est l\'élément central des armoiries du Luxembourg. Le lion figure dans l\'héraldique luxembourgeoise depuis le XIIIe siècle.',
      },
      de: {
        question: 'Welches Tier erscheint im Wappen Luxemburgs?',
        options: ['Ein goldener Adler', 'Ein roter Löwe', 'Ein weißes Pferd', 'Ein silberner Bär'],
        explanation: 'Ein roter Löwe auf weiß und blau gestreiftem Hintergrund ist das zentrale Element des luxemburgischen Wappens. Der Löwe erscheint seit dem 13. Jahrhundert in der luxemburgischen Heraldik.',
      },
      lb: {
        question: 'Wéi en Déier erschéngt op dem Lëtzebuerger Wopen?',
        options: ['En goldene Adler', 'E roude Léiw', 'E wäisst Päerd', 'E sëlwere Bier'],
        explanation: 'E roude Léiw op engem wäiss a blo gestreiften Hannergrond ass d\'Hauptelement vum Lëtzebuerger Wopen. De Léiw erschéngt zënter dem 13. Joerhonnert an der Lëtzebuerger Heraldik.',
      },
    },
  },
  {
    id: 'n-peop-2', level: 'newcomer', category: 'people',
    question: 'Cyclist Andy Schleck won the Tour de France in which year?',
    options: ['2008', '2009', '2010', '2011'],
    answer: 2,
    explanation: 'Andy Schleck was awarded the 2010 Tour de France victory after Alberto Contador was disqualified for doping. Schleck is one of Luxembourg\'s most celebrated modern athletes.',
    link: null,
    translations: {
      fr: {
        question: 'En quelle année le cycliste Andy Schleck a-t-il remporté le Tour de France ?',
        options: ['2008', '2009', '2010', '2011'],
        explanation: 'Andy Schleck s\'est vu attribuer la victoire du Tour de France 2010 après la disqualification d\'Alberto Contador pour dopage. Il est l\'un des athlètes modernes les plus célébrés du Luxembourg.',
      },
      de: {
        question: 'In welchem Jahr gewann der Radfahrer Andy Schleck die Tour de France?',
        options: ['2008', '2009', '2010', '2011'],
        explanation: 'Andy Schleck wurde der Sieg der Tour de France 2010 zugesprochen, nachdem Alberto Contador wegen Dopings disqualifiziert wurde. Er gilt als einer der gefeiertsten modernen Sportler Luxemburgs.',
      },
      lb: {
        question: 'A wéi engem Joer huet de Radfahrer Andy Schleck d\'Tour de France gewonnen?',
        options: ['2008', '2009', '2010', '2011'],
        explanation: 'Andy Schleck gouf als Gewënner vun der Tour de France 2010 zougesprach nodeems Alberto Contador wéinst Doping diskwalifizéiert gouf. Hien ass ee vun de gefeiertste modernen Athleeten vu Lëtzebuerg.',
      },
    },
  },
  {
    id: 'n-inst-2', level: 'newcomer', category: 'institutions',
    question: 'Into how many electoral constituencies is Luxembourg divided?',
    options: ['2', '3', '4', '6'],
    answer: 2,
    explanation: 'Luxembourg is divided into 4 electoral constituencies for parliamentary elections: South (the most populous), Centre, North, and East. The 60 seats are distributed proportionally among them.',
    link: 'https://luxembourg.public.lu/en/gouvernement/chambre-des-deputes.html',
    translations: {
      fr: {
        question: 'En combien de circonscriptions électorales le Luxembourg est-il divisé ?',
        options: ['2', '3', '4', '6'],
        explanation: 'Le Luxembourg est divisé en 4 circonscriptions pour les élections parlementaires : Sud (la plus peuplée), Centre, Nord et Est. Les 60 sièges sont répartis proportionnellement.',
      },
      de: {
        question: 'In wie viele Wahlbezirke ist Luxemburg aufgeteilt?',
        options: ['2', '3', '4', '6'],
        explanation: 'Luxemburg ist für Parlamentswahlen in 4 Wahlbezirke unterteilt: Süd (der bevölkerungsreichste), Mitte, Nord und Ost. Die 60 Sitze werden proportional verteilt.',
      },
      lb: {
        question: 'A wéi vill Wahlkreeser ass Lëtzebuerg opgedeelt?',
        options: ['2', '3', '4', '6'],
        explanation: 'Lëtzebuerg ass fir Parlamentswalen an 4 Wahlkreeser opgedeelt: Süden, Zentrum, Norden an Osten. Déi 60 Sëtzer ginn propertional opgedeelt.',
      },
    },
  },
  {
    id: 'n-econ-3', level: 'newcomer', category: 'economy',
    question: 'Luxembourg regularly ranks first in the EU for which economic indicator?',
    options: ['Unemployment rate', 'GDP per capita', 'Agricultural output', 'Manufacturing exports'],
    answer: 1,
    explanation: 'Luxembourg consistently has the highest GDP per capita in the EU and among the highest in the world, driven by its financial sector, European institutions, and skilled workforce.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html',
    translations: {
      fr: {
        question: 'Le Luxembourg se classe régulièrement premier dans l\'UE pour quel indicateur économique ?',
        options: ['Taux de chômage', 'PIB par habitant', 'Production agricole', 'Exportations industrielles'],
        explanation: 'Le Luxembourg affiche systématiquement le PIB par habitant le plus élevé de l\'UE, grâce à son secteur financier, ses institutions européennes et sa main-d\'œuvre qualifiée.',
      },
      de: {
        question: 'Luxemburg belegt regelmäßig den ersten Platz in der EU bei welchem Wirtschaftsindikator?',
        options: ['Arbeitslosenquote', 'BIP pro Kopf', 'Landwirtschaftliche Produktion', 'Industrieexporte'],
        explanation: 'Luxemburg hat durchgehend das höchste BIP pro Kopf in der EU, angetrieben durch seinen Finanzsektor, die europäischen Institutionen und qualifizierte Arbeitskräfte.',
      },
      lb: {
        question: 'Lëtzebuerg rangéiert regelméisseg als Eeschten an der EU fir wéi en ekonomesche Indikateur?',
        options: ['Chômagsquote', 'BIP pro Awunner', 'Landwirtschaftlech Produktioun', 'Industrieexporter'],
        explanation: 'Lëtzebuerg huet konsequent dat héchste BIP pro Awunner an der EU, ugedriwwen duerch säi Finanzsecteur, d\'europäesch Institutiounen a qualifizéiert Aarbechtskräften.',
      },
    },
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
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html',
    translations: {
      fr: {
        question: 'À quelle famille de langues appartient le luxembourgeois (Lëtzebuergesch) ?',
        options: ['Langues romanes', 'Langues slaves', 'Germanique occidental (francique mosellan)', 'Germanique septentrional'],
        explanation: 'Le luxembourgeois est une langue germanique occidentale du groupe dialectal francique mosellan, étroitement liée à l\'allemand mais avec une forte influence française.',
      },
      de: {
        question: 'Zu welcher Sprachfamilie gehört Luxemburgisch (Lëtzebuergesch)?',
        options: ['Romanische Sprachen', 'Slawische Sprachen', 'Westgermanisch (Moselfränkisch)', 'Nordgermanisch'],
        explanation: 'Luxemburgisch ist eine westgermanische Sprache der moselfränkischen Dialektgruppe, eng verwandt mit dem Deutschen, aber mit starkem französischen Einfluss.',
      },
      lb: {
        question: 'Zu wéi enger Sproochfamill gehéiert Lëtzebuergesch?',
        options: ['Romanesch Sprooche', 'Slawisch Sprooche', 'Westgermanesch (Moselfränkesch)', 'Nordgermanesch'],
        explanation: 'Lëtzebuergesch ass eng westgermanesch Sprooch vun der moselfränkescher Dialektgrupp, enk mat dem Däitschen verwandt mä mat starkem franséischen Afloss.',
      },
    },
  },
  {
    id: 'hist-3', level: 'explorer', category: 'history',
    question: 'Who founded the County of Luxembourg in 963 AD by acquiring a small Frankish castle?',
    options: ['Count Baldwin I', 'Sigefroid', 'Ermesinde', 'Henry VII'],
    answer: 1,
    explanation: 'Count Sigefroid acquired the Lucilinburhuc (Little Fortress) in 963 AD, traditionally seen as the founding of Luxembourg.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'Qui a fondé le comté de Luxembourg en 963 apr. J.-C. en acquérant un petit château franc ?',
        options: ['Le comte Baudouin Ier', 'Sigefroid', 'Ermesinde', 'Henri VII'],
        explanation: 'Le comte Sigefroid a acquis le Lucilinburhuc (Petite Forteresse) en 963, ce qui est traditionnellement considéré comme la fondation du Luxembourg.',
      },
      de: {
        question: 'Wer gründete 963 n. Chr. die Grafschaft Luxemburg durch den Erwerb einer kleinen fränkischen Burg?',
        options: ['Graf Balduin I.', 'Sigefroid', 'Ermesinde', 'Heinrich VII.'],
        explanation: 'Graf Sigefroid erwarb 963 n. Chr. das Lucilinburhuc (Kleine Festung), was traditionell als Gründung Luxemburgs gilt.',
      },
      lb: {
        question: 'Wien huet d\'Grafschaft Lëtzebuerg am Joer 963 gegründ andeems en e klenge fränkeschen Turm kaaft huet?',
        options: ['Graf Balduin I.', 'Sigefroid', 'Ermesinde', 'Heinrich VII.'],
        explanation: 'De Graf Sigefroid huet am Joer 963 d\'Lucilinburhuc (Kleng Festung) kaaft, wat traditionell als Grënnung vu Lëtzebuerg gëllt.',
      },
    },
  },
  {
    id: 'cult-3', level: 'explorer', category: 'culture',
    question: 'What is the "Émaischen"?',
    options: ['A traditional harvest festival in the Moselle valley', 'An Easter Monday crafts fair featuring the "Péckvillercher" bird whistles', 'A carnival parade in Esch-sur-Alzette', 'A summer music festival in Vianden'],
    answer: 1,
    explanation: 'The Émaischen is a traditional Easter Monday fair at the Marché-aux-Poissons in Luxembourg City, famous for hand-crafted "Péckvillercher" — terracotta bird-shaped water whistles.',
    link: 'https://luxembourg.public.lu/en/culture/traditions.html',
    translations: {
      fr: {
        question: 'Qu\'est-ce que l\'« Émaischen » ?',
        options: ['Un festival des moissons dans la vallée de la Moselle', 'Une foire de l\'lundi de Pâques avec les sifflets en terre cuite « Péckvillercher »', 'Un défilé de carnaval à Esch-sur-Alzette', 'Un festival de musique d\'été à Vianden'],
        explanation: 'L\'Émaischen est une foire traditionnelle du lundi de Pâques au Marché-aux-Poissons à Luxembourg-Ville, célèbre pour les « Péckvillercher » — sifflets à eau en terre cuite en forme d\'oiseau.',
      },
      de: {
        question: 'Was ist die „Émaischen"?',
        options: ['Ein Ernte-festival im Moseltal', 'Ein Ostermontags-Jahrmarkt mit handgefertigten „Péckvillercher"-Pfeifvögeln', 'Ein Karnevalsumzug in Esch an der Alzette', 'Ein Sommerfestival in Vianden'],
        explanation: 'Die Émaischen ist ein traditioneller Ostermontags-Jahrmarkt am Fischmarkt in Luxemburg-Stadt. Bekannt für die handgefertigten „Péckvillercher" — Tonvogelpfeifen mit Wasser.',
      },
      lb: {
        question: 'Wat ass den « Émaischen »?',
        options: ['En Äerntfest am Moselldall', 'En Ouschterméindegs-Fouer mat handgefertigte « Péckvillercher »', 'En Karnefalsparade zu Esch-Uelzecht', 'En Summerfestival zu Vianden'],
        explanation: 'Den Émaischen ass eng traditionell Ouschterméindegsfouer um Fëschmaart zu Lëtzebuerg-Stad, bekannt fir déi handgefertigte « Péckvillercher » — Tounvillercherpäifen mat Waasser.',
      },
    },
  },
  {
    id: 'peop-3', level: 'explorer', category: 'people',
    question: 'Charly Gaul, a legendary cyclist from Luxembourg, was nicknamed what?',
    options: ['The Gardener', 'The Angel of the Mountains', 'The Iron Lion', 'The Silent Racer'],
    answer: 1,
    explanation: 'Charly Gaul (1932–2005) was nicknamed "L\'Ange de la Montagne" (The Angel of the Mountains). He won the Tour de France (1958) and Giro d\'Italia twice (1956, 1959).',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'Charly Gaul, un cycliste légendaire luxembourgeois, était surnommé comment ?',
        options: ['Le Jardinier', 'L\'Ange de la Montagne', 'Le Lion de Fer', 'Le Coureur Silencieux'],
        explanation: 'Charly Gaul (1932–2005) était surnommé « L\'Ange de la Montagne ». Il a remporté le Tour de France (1958) et le Tour d\'Italie à deux reprises (1956, 1959).',
      },
      de: {
        question: 'Wie war der Spitzname des legendären luxemburgischen Rennradfahrers Charly Gaul?',
        options: ['Der Gärtner', 'Der Engel der Berge', 'Der Eiserne Löwe', 'Der schweigsame Fahrer'],
        explanation: 'Charly Gaul (1932–2005) war als „L\'Ange de la Montagne" (Engel der Berge) bekannt. Er gewann die Tour de France (1958) und den Giro d\'Italia zweimal (1956, 1959).',
      },
      lb: {
        question: 'Wéi war de Spëtznumm vum legendäre Lëtzebuerger Radfahrer Charly Gaul?',
        options: ['De Gäertner', 'Den Engel vun de Bierger', 'De Steierene Léiw', 'De schweigsame Fuerer'],
        explanation: 'Charly Gaul (1932–2005) gouf « L\'Ange de la Montagne » (Engel vun de Bierger) genannt. Hien huet d\'Tour de France (1958) an den Giro d\'Italia zweemol (1956, 1959) gewonnen.',
      },
    },
  },
  {
    id: 'inst-3', level: 'explorer', category: 'institutions',
    question: 'What is STATEC?',
    options: ['The state television broadcaster', 'The National Institute of Statistics and Economic Studies of Luxembourg', 'The state technology agency', 'The national employment agency'],
    answer: 1,
    explanation: 'STATEC (Institut national de la statistique et des études économiques du Grand-Duché de Luxembourg) collects and publishes all official statistics about Luxembourg.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html',
    translations: {
      fr: {
        question: 'Qu\'est-ce que le STATEC ?',
        options: ['La télévision publique nationale', 'L\'Institut national de la statistique et des études économiques du Luxembourg', 'L\'agence nationale de technologie', 'L\'agence nationale pour l\'emploi'],
        explanation: 'STATEC (Institut national de la statistique et des études économiques du Grand-Duché de Luxembourg) collecte et publie toutes les statistiques officielles sur le Luxembourg.',
      },
      de: {
        question: 'Was ist STATEC?',
        options: ['Der staatliche Fernsehsender', 'Das Nationale Institut für Statistik und Wirtschaftsstudien Luxemburgs', 'Die staatliche Technologiebehörde', 'Die nationale Arbeitsvermittlung'],
        explanation: 'STATEC (Institut national de la statistique et des études économiques du Grand-Duché de Luxembourg) sammelt und veröffentlicht alle offiziellen Statistiken über Luxemburg.',
      },
      lb: {
        question: 'Wat ass STATEC?',
        options: ['Den nationale Fernsehsender', 'Den nationale Statistekinstitut a wirtschaftleche Studien vu Lëtzebuerg', 'Déi national Technologieagentur', 'Déi national Aarbechtsagentur'],
        explanation: 'STATEC sammelt a verëffentlecht all offiziell Statistike iwwer Lëtzebuerg.',
      },
    },
  },
  // sub-level 2
  {
    id: 'econ-3', level: 'explorer', category: 'economy',
    question: 'What was the traditional industrial backbone of Luxembourg\'s economy until the 1970s?',
    options: ['Coal mining', 'Textile industry', 'Steel industry', 'Agriculture'],
    answer: 2,
    explanation: 'Steel was the foundation of Luxembourg\'s economy from the 1870s to the 1970s. Today ArcelorMittal (headquartered in Luxembourg) is the world\'s largest steel producer.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'Quel était l\'épine dorsale industrielle traditionnelle de l\'économie luxembourgeoise jusqu\'aux années 1970 ?',
        options: ['Extraction du charbon', 'Industrie textile', 'Industrie sidérurgique', 'Agriculture'],
        explanation: 'L\'acier a été le fondement de l\'économie luxembourgeoise des années 1870 aux années 1970. Aujourd\'hui, ArcelorMittal (dont le siège est au Luxembourg) est le plus grand producteur d\'acier du monde.',
      },
      de: {
        question: 'Was war das traditionelle industrielle Rückgrat der luxemburgischen Wirtschaft bis in die 1970er Jahre?',
        options: ['Kohleabbau', 'Textilindustrie', 'Stahlindustrie', 'Landwirtschaft'],
        explanation: 'Stahl war von den 1870er bis in die 1970er Jahre das Fundament der luxemburgischen Wirtschaft. Heute ist ArcelorMittal (mit Sitz in Luxemburg) der weltgrößte Stahlproduzent.',
      },
      lb: {
        question: 'Wat war d\'traditionell industriell Wirbelsail vun der Lëtzebuerger Wirtschaft bis an d\'1970er Joer?',
        options: ['Kuelabbau', 'Textilindustrie', 'Steelindustrie', 'Landwirtschaft'],
        explanation: 'Stell war vun den 1870er bis an d\'1970er Joer d\'Fundament vun der Lëtzebuerger Wirtschaft. Haut ass ArcelorMittal (mat Sëtz zu Lëtzebuerg) de weltgréisste Steelproduzent.',
      },
    },
  },
  {
    id: 'lang-4', level: 'explorer', category: 'language',
    question: 'How do you say "I love you" in Luxembourgish?',
    options: ['Ech hunn dech gär', 'Je t\'aime', 'Ich liebe dich', 'Mir gefällt dir'],
    answer: 0,
    explanation: '"Ech hunn dech gär" literally means "I have you dear" — the standard Luxembourgish expression of affection.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html',
    translations: {
      fr: {
        question: 'Comment dit-on « je t\'aime » en luxembourgeois ?',
        options: ['Ech hunn dech gär', 'Je t\'aime', 'Ich liebe dich', 'Mir gefällt dir'],
        explanation: '« Ech hunn dech gär » signifie littéralement « je t\'ai cher » — l\'expression d\'affection standard en luxembourgeois.',
      },
      de: {
        question: 'Wie sagt man „Ich liebe dich" auf Luxemburgisch?',
        options: ['Ech hunn dech gär', 'Je t\'aime', 'Ich liebe dich', 'Mir gefällt dir'],
        explanation: '„Ech hunn dech gär" bedeutet wörtlich „Ich habe dich gern" — der übliche luxemburgische Ausdruck für Zuneigung.',
      },
      lb: {
        question: 'Wéi seet een « Ech hunn dech gär » op Lëtzebuergesch?',
        options: ['Ech hunn dech gär', 'Je t\'aime', 'Ich liebe dich', 'Mir gefällt dir'],
        explanation: '« Ech hunn dech gär » heescht buchstäblich « Ech hunn dech gär » — de Standardausdrock vun Zouneignung op Lëtzebuergesch.',
      },
    },
  },
  {
    id: 'hist-4', level: 'explorer', category: 'history',
    question: 'Luxembourg was a founding member of which three major international organisations?',
    options: ['UN, NATO, and the Council of Europe', 'NATO, EEC (EU), and Benelux', 'EEC, Schengen Area, and WTO', 'Benelux, EFTA, and NATO'],
    answer: 1,
    explanation: 'Luxembourg was a founding member of NATO (1949), the European Economic Community (1957, now EU), and the Benelux Union (1944).',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'Le Luxembourg était membre fondateur de quelles trois grandes organisations internationales ?',
        options: ['ONU, OTAN et Conseil de l\'Europe', 'OTAN, CEE (UE) et Benelux', 'CEE, espace Schengen et OMC', 'Benelux, AELE et OTAN'],
        explanation: 'Le Luxembourg était membre fondateur de l\'OTAN (1949), de la Communauté économique européenne (1957, aujourd\'hui UE) et de l\'Union Benelux (1944).',
      },
      de: {
        question: 'Luxemburg war Gründungsmitglied welcher drei großen internationalen Organisationen?',
        options: ['UNO, NATO und Europarat', 'NATO, EWG (EU) und Benelux', 'EWG, Schengen-Raum und WTO', 'Benelux, EFTA und NATO'],
        explanation: 'Luxemburg war Gründungsmitglied der NATO (1949), der Europäischen Wirtschaftsgemeinschaft (1957, heute EU) und der Benelux-Union (1944).',
      },
      lb: {
        question: 'Lëtzebuerg war Grënnungsmember vun wéi dräi grousse internationale Organisatiounen?',
        options: ['UNO, NATO a Conseil de l\'Europe', 'NATO, EWG (EU) a Benelux', 'EWG, Schengen-Raum an OMC', 'Benelux, EFTA a NATO'],
        explanation: 'Lëtzebuerg war Grënnungsmember vun der NATO (1949), der Europäescher Wirtschaftsgemeinschaft (1957, haut EU) an der Benelux-Unioun (1944).',
      },
    },
  },
  {
    id: 'e-cult-1', level: 'explorer', category: 'culture',
    question: 'What is "Judd mat Gaardebounen"?',
    options: ['A Luxembourgish folk dance', 'The national dish: smoked collar of pork with broad beans', 'A type of local craft beer', 'A traditional Christmas cake'],
    answer: 1,
    explanation: '"Judd mat Gaardebounen" (smoked collar of pork with broad beans) is considered Luxembourg\'s national dish. It is a hearty, traditional meal with roots in the country\'s agricultural past.',
    link: 'https://www.visitluxembourg.com/en/food-and-drinks',
    translations: {
      fr: {
        question: 'Qu\'est-ce que le « Judd mat Gaardebounen » ?',
        options: ['Une danse folklorique luxembourgeoise', 'Le plat national : cou de porc fumé aux fèves des marais', 'Une bière artisanale locale', 'Un gâteau traditionnel de Noël'],
        explanation: '« Judd mat Gaardebounen » (cou de porc fumé aux fèves des marais) est considéré comme le plat national du Luxembourg, un repas copieux aux racines agricoles.',
      },
      de: {
        question: 'Was ist „Judd mat Gaardebounen"?',
        options: ['Ein luxemburgischer Volkstanz', 'Das Nationalgericht: geräucherte Schweinskamm mit dicken Bohnen', 'Ein lokales Craft-Bier', 'Ein traditioneller Weihnachtskuchen'],
        explanation: '„Judd mat Gaardebounen" (geräucherter Schweinskamm mit dicken Bohnen) gilt als Luxemburgs Nationalgericht, eine herzhafte Mahlzeit mit Wurzeln in der Landwirtschaft.',
      },
      lb: {
        question: 'Wat ass « Judd mat Gaardebounen »?',
        options: ['E Lëtzebuerger Volksdanz', 'Den Nationalgercht: gerächert Schwéngshals mat Gaardebounen', 'E lokale Craft-Béier', 'E traditionelle Weihnachtskuch'],
        explanation: '« Judd mat Gaardebounen » (gerächert Schwéngshals mat Gaardebounen) gëllt als Lëtzebuerg säi Nationalgeriicht, eng häerzhafte Moolzecht mat landwirtschaftlechen Wuerzelen.',
      },
    },
  },
  {
    id: 'e-peop-1', level: 'explorer', category: 'people',
    question: 'Hugo Gernsback, born in Luxembourg in 1884, is known as the "Father of Science Fiction". Which magazine did he found?',
    options: ['Popular Science', 'Amazing Stories', 'Science Wonder Stories', 'Modern Mechanics'],
    answer: 1,
    explanation: 'Hugo Gernsback (1884–1967) founded "Amazing Stories" in 1926, the first magazine dedicated entirely to science fiction. The Hugo Awards are named in his honour.',
    link: 'https://luxembourg.public.lu/en/culture/patrimoine-culturel.html',
    translations: {
      fr: {
        question: 'Hugo Gernsback, né au Luxembourg en 1884, est connu comme le « Père de la science-fiction ». Quelle revue a-t-il fondée ?',
        options: ['Popular Science', 'Amazing Stories', 'Science Wonder Stories', 'Modern Mechanics'],
        explanation: 'Hugo Gernsback (1884–1967) a fondé « Amazing Stories » en 1926, le premier magazine entièrement consacré à la science-fiction. Les prix Hugo portent son nom.',
      },
      de: {
        question: 'Hugo Gernsback, 1884 in Luxemburg geboren, gilt als „Vater der Science-Fiction". Welches Magazin gründete er?',
        options: ['Popular Science', 'Amazing Stories', 'Science Wonder Stories', 'Modern Mechanics'],
        explanation: 'Hugo Gernsback (1884–1967) gründete 1926 „Amazing Stories", das erste vollständig der Science-Fiction gewidmete Magazin. Die Hugo Awards sind nach ihm benannt.',
      },
      lb: {
        question: 'Hugo Gernsback, 1884 zu Lëtzebuerg gebuer, ass bekannt als « Papp vun der Science-Fiction ». Wéi eng Revue huet hien gegrënnt?',
        options: ['Popular Science', 'Amazing Stories', 'Science Wonder Stories', 'Modern Mechanics'],
        explanation: 'Hugo Gernsback (1884–1967) huet 1926 « Amazing Stories » gegrënnt, dat éischt Magazin dat komplett der Science-Fiction gewidmet war. D\'Hugo Awards droen säin Numm.',
      },
    },
  },
  // sub-level 3
  {
    id: 'inst-4', level: 'explorer', category: 'institutions',
    question: 'What is the role of the "Médiateur" (Ombudsman) in Luxembourg?',
    options: ['To mediate in divorce proceedings', 'To handle citizens\' complaints against public administrations', 'To supervise media and press', 'To manage EU relations'],
    answer: 1,
    explanation: 'The Médiateur de la République acts as an independent intermediary between citizens and public administrations, investigating complaints and seeking solutions without going to court.',
    link: 'https://luxembourg.public.lu/en/gouvernement/institutions.html',
    translations: {
      fr: {
        question: 'Quel est le rôle du « Médiateur » (Ombudsman) au Luxembourg ?',
        options: ['Médiation dans les procédures de divorce', 'Traiter les plaintes des citoyens contre les administrations publiques', 'Superviser les médias et la presse', 'Gérer les relations avec l\'UE'],
        explanation: 'Le Médiateur de la République est un intermédiaire indépendant entre les citoyens et les administrations publiques, qui examine les plaintes et cherche des solutions sans passer par les tribunaux.',
      },
      de: {
        question: 'Was ist die Rolle des „Médiateur" (Ombudsmann) in Luxemburg?',
        options: ['Vermittlung in Scheidungsverfahren', 'Bearbeitung von Bürgerbeschwerden gegen öffentliche Verwaltungen', 'Aufsicht über Medien und Presse', 'Verwaltung der EU-Beziehungen'],
        explanation: 'Der Médiateur de la République ist ein unabhängiger Vermittler zwischen Bürgern und öffentlichen Verwaltungen, der Beschwerden prüft und Lösungen ohne Gerichtsweg sucht.',
      },
      lb: {
        question: 'Wat ass d\'Roll vum « Médiateur » (Ombudsmann) zu Lëtzebuerg?',
        options: ['Mediation bei Scheedungsverfahren', 'Beschwerden vun de Bierger géint ëffentlech Verwaltungen behandelen', 'Medie a Press iwwerwaachen', 'EU-Bezéiunge verwalten'],
        explanation: 'De Médiateur de la République ass een onofhängegen Zwëschenmënsch tëschent Bierger an ëffentleche Verwaltungen, deen Beschwerden ënnersicht a Léisunge sicht ouni duerch Geriichter ze goen.',
      },
    },
  },
  {
    id: 'econ-4', level: 'explorer', category: 'economy',
    question: 'What is Luxembourg\'s approximate population?',
    options: ['350,000', '520,000', '680,000', '1.2 million'],
    answer: 2,
    explanation: 'Luxembourg had approximately 680,000 residents in 2024 — one of the smallest countries in the EU by population, but also one of the wealthiest per capita.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html',
    translations: {
      fr: {
        question: 'Quelle est la population approximative du Luxembourg ?',
        options: ['350 000', '520 000', '680 000', '1,2 million'],
        explanation: 'Le Luxembourg comptait environ 680 000 résidents en 2024 — l\'un des plus petits pays de l\'UE par population, mais aussi l\'un des plus riches par habitant.',
      },
      de: {
        question: 'Wie groß ist die ungefähre Einwohnerzahl Luxemburgs?',
        options: ['350.000', '520.000', '680.000', '1,2 Millionen'],
        explanation: 'Luxemburg hatte 2024 etwa 680.000 Einwohner — eines der kleinsten Länder der EU, aber auch eines der wohlhabendsten pro Kopf.',
      },
      lb: {
        question: 'Wéi vill Awunner huet Lëtzebuerg ongeféier?',
        options: ['350.000', '520.000', '680.000', '1,2 Milliounen'],
        explanation: 'Lëtzebuerg hat ongeféier 680.000 Awunner am Joer 2024 — ee vun de klengste Länner an der EU, mä och ee vun de räichsten pro Awunner.',
      },
    },
  },
  {
    id: 'e-lang-1', level: 'explorer', category: 'language',
    question: 'What does "Wéi geet et?" mean in Luxembourgish?',
    options: ['Where are you going?', 'How are you?', 'What time is it?', 'Where is the station?'],
    answer: 1,
    explanation: '"Wéi geet et?" means "How are you?" or "How is it going?" — a very common everyday greeting in Luxembourg.',
    link: null,
    translations: {
      fr: {
        question: 'Que signifie « Wéi geet et ? » en luxembourgeois ?',
        options: ['Où allez-vous ?', 'Comment allez-vous ?', 'Quelle heure est-il ?', 'Où est la gare ?'],
        explanation: '« Wéi geet et ? » signifie « Comment allez-vous ? » ou « Comment ça va ? » — une salutation quotidienne très courante au Luxembourg.',
      },
      de: {
        question: 'Was bedeutet „Wéi geet et?" auf Luxemburgisch?',
        options: ['Wohin gehst du?', 'Wie geht es Ihnen?', 'Wie spät ist es?', 'Wo ist der Bahnhof?'],
        explanation: '„Wéi geet et?" bedeutet „Wie geht es Ihnen?" oder „Wie läuft\'s?" — eine sehr gebräuchliche alltägliche Begrüßung in Luxemburg.',
      },
      lb: {
        question: 'Wat bedeit « Wéi geet et ? » op Lëtzebuergesch?',
        options: ['Wou gees du hin?', 'Wéi geet et dir?', 'Wéi vill Auer ass et?', 'Wou ass den Zuchbunnen?'],
        explanation: '« Wéi geet et? » heescht « Wéi geet et dir? » oder « Wéi leeft et? » — eng ganz heefeg alldeeglech Begrëssung zu Lëtzebuerg.',
      },
    },
  },
  {
    id: 'e-hist-1', level: 'explorer', category: 'history',
    question: 'The Schengen Agreement was signed in 1985. Where exactly?',
    options: ['Luxembourg City', 'The village of Schengen, on a boat on the Moselle River', 'Brussels, Belgium', 'Strasbourg, France'],
    answer: 1,
    explanation: 'The Schengen Agreement was signed on 14 June 1985 on the MS Princesse Marie-Astrid, moored at Schengen — a small Luxembourg village where France, Germany, and Luxembourg meet.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/institutions-europeennes.html',
    translations: {
      fr: {
        question: 'L\'accord de Schengen a été signé en 1985. Où exactement ?',
        options: ['Luxembourg-Ville', 'Dans le village de Schengen, sur un bateau sur la Moselle', 'Bruxelles, Belgique', 'Strasbourg, France'],
        explanation: 'L\'accord de Schengen a été signé le 14 juin 1985 à bord du MS Princesse Marie-Astrid, amarré à Schengen — un petit village luxembourgeois à la confluence de la France, de l\'Allemagne et du Luxembourg.',
      },
      de: {
        question: 'Das Schengener Abkommen wurde 1985 unterzeichnet. Wo genau?',
        options: ['Luxemburg-Stadt', 'Im Dorf Schengen, auf einem Schiff auf der Mosel', 'Brüssel, Belgien', 'Straßburg, Frankreich'],
        explanation: 'Das Schengener Abkommen wurde am 14. Juni 1985 auf der MS Princesse Marie-Astrid unterzeichnet, die im luxemburgischen Schengen vertäut war — dort, wo Frankreich, Deutschland und Luxemburg zusammentreffen.',
      },
      lb: {
        question: 'Den Accord de Schengen gouf 1985 ënnerschriwwen. Wou genau?',
        options: ['Lëtzebuerg-Stad', 'Am Duerf Schengen, op engem Boot op der Musel', 'Brüssel, Belgien', 'Stroossbuerg, Frankräich'],
        explanation: 'Den Accord de Schengen gouf den 14. Juni 1985 op der MS Princesse Marie-Astrid ënnerschriwwen, déi zu Schengen amarréiert war — e klenge Lëtzebuerger Duerf wou Frankräich, Däitschland a Lëtzebuerg zesummentreffen.',
      },
    },
  },
  {
    id: 'cult-4', level: 'explorer', category: 'culture',
    question: 'Luxembourg\'s historic Old Town and its fortifications have been a UNESCO World Heritage Site since which year?',
    options: ['1985', '1994', '2001', '2008'],
    answer: 1,
    explanation: 'Luxembourg City\'s Old Quarters and Fortifications were inscribed on the UNESCO World Heritage List in 1994, recognised for their outstanding universal value.',
    link: 'https://www.visitluxembourg.com/en/place/site/old-quarters-and-fortifications-of-the-city-of-luxembourg',
    translations: {
      fr: {
        question: 'Depuis quelle année la vieille ville de Luxembourg et ses fortifications sont-elles inscrites au patrimoine mondial de l\'UNESCO ?',
        options: ['1985', '1994', '2001', '2008'],
        explanation: 'La vieille ville de Luxembourg et ses fortifications ont été inscrites au patrimoine mondial de l\'UNESCO en 1994, reconnues pour leur valeur universelle exceptionnelle.',
      },
      de: {
        question: 'Seit welchem Jahr sind die historische Altstadt von Luxemburg und ihre Befestigungsanlagen UNESCO-Weltkulturerbe?',
        options: ['1985', '1994', '2001', '2008'],
        explanation: 'Die Luxemburger Altstadt und ihre Festungsanlagen wurden 1994 in die UNESCO-Welterbeliste aufgenommen.',
      },
      lb: {
        question: 'Zënter wéi engem Joer ass d\'Lëtzebuerger Alstad an hir Festungsanlagen UNESCO-Welterbe?',
        options: ['1985', '1994', '2001', '2008'],
        explanation: 'D\'Lëtzebuerger Alstad an hir Festungsanlagen goufen 1994 an d\'UNESCO-Welterblëscht opgeholl.',
      },
    },
  },
  // sub-level 4
  {
    id: 'peop-4', level: 'explorer', category: 'people',
    question: 'Jean-Claude Juncker, former Prime Minister of Luxembourg (1995–2013), later served as what?',
    options: ['Secretary General of NATO', 'President of the European Commission (2014–2019)', 'President of the European Council', 'President of the European Parliament'],
    answer: 1,
    explanation: 'Jean-Claude Juncker served as Luxembourg\'s Prime Minister for 18 years, then as President of the European Commission from 2014 to 2019.',
    link: 'https://luxembourg.public.lu/en/gouvernement.html',
    translations: {
      fr: {
        question: 'Jean-Claude Juncker, ancien Premier ministre du Luxembourg (1995–2013), a ensuite occupé quel poste ?',
        options: ['Secrétaire général de l\'OTAN', 'Président de la Commission européenne (2014–2019)', 'Président du Conseil européen', 'Président du Parlement européen'],
        explanation: 'Jean-Claude Juncker a été Premier ministre du Luxembourg pendant 18 ans, puis président de la Commission européenne de 2014 à 2019.',
      },
      de: {
        question: 'Jean-Claude Juncker, ehemaliger Premierminister Luxemburgs (1995–2013), diente später als was?',
        options: ['Generalsekretär der NATO', 'Präsident der Europäischen Kommission (2014–2019)', 'Präsident des Europäischen Rates', 'Präsident des Europäischen Parlaments'],
        explanation: 'Jean-Claude Juncker war 18 Jahre lang Premierminister Luxemburgs und anschließend von 2014 bis 2019 Präsident der Europäischen Kommission.',
      },
      lb: {
        question: 'Jean-Claude Juncker, fréieren Premierminister vu Lëtzebuerg (1995–2013), huet duerno wéi en Amt bekleet?',
        options: ['Generalsekretär vun der NATO', 'President vun der Europäescher Kommissioun (2014–2019)', 'President vum Europäesche Rot', 'President vum Europäesche Parlament'],
        explanation: 'Jean-Claude Juncker war 18 Joer Premierminister vu Lëtzebuerg an duerno vu 2014 bis 2019 President vun der Europäescher Kommissioun.',
      },
    },
  },
  {
    id: 'inst-5', level: 'explorer', category: 'institutions',
    question: 'What does "LCGB" stand for in Luxembourg?',
    options: ['Luxembourg Catholic Governing Body', 'Lëtzebuerger Chrëschtleche Gewerkschafts-Bond (Christian trade union)', 'Luxembourg Commercial and Government Bureau', 'Luxembourg Cultural and Geographical Board'],
    answer: 1,
    explanation: 'LCGB is one of Luxembourg\'s major trade unions, alongside OGBL. Trade unions play an important role in Luxembourg\'s social dialogue model.',
    link: 'https://luxembourg.public.lu/en/vivre/emploi.html',
    translations: {
      fr: {
        question: 'Que signifie « LCGB » au Luxembourg ?',
        options: ['Luxembourg Catholic Governing Body', 'Lëtzebuerger Chrëschtleche Gewerkschafts-Bond (syndicat chrétien)', 'Luxembourg Commercial and Government Bureau', 'Luxembourg Cultural and Geographical Board'],
        explanation: 'Le LCGB est l\'un des principaux syndicats luxembourgeois, aux côtés de l\'OGBL. Les syndicats jouent un rôle important dans le modèle de dialogue social luxembourgeois.',
      },
      de: {
        question: 'Wofür steht „LCGB" in Luxemburg?',
        options: ['Luxembourg Catholic Governing Body', 'Lëtzebuerger Chrëschtleche Gewerkschafts-Bond (christliche Gewerkschaft)', 'Luxembourg Commercial and Government Bureau', 'Luxembourg Cultural and Geographical Board'],
        explanation: 'Der LCGB ist eine der wichtigsten luxemburgischen Gewerkschaften neben dem OGBL. Gewerkschaften spielen im luxemburgischen Sozialdialogmodell eine wichtige Rolle.',
      },
      lb: {
        question: 'Wat steet « LCGB » zu Lëtzebuerg?',
        options: ['Luxembourg Catholic Governing Body', 'Lëtzebuerger Chrëschtleche Gewerkschafts-Bond (chrëstlech Gewerkschaft)', 'Luxembourg Commercial and Government Bureau', 'Luxembourg Cultural and Geographical Board'],
        explanation: 'Den LCGB ass eng vun de wichtegsten Lëtzebuerger Gewerkschaften nieft dem OGBL. Gewerkschaften spillen eng wichteg Roll am Lëtzebuerger Sozialdialogmodell.',
      },
    },
  },
  {
    id: 'econ-5', level: 'explorer', category: 'economy',
    question: 'Which tech companies have their European headquarters in Luxembourg?',
    options: ['Apple, Google, and Twitter/X', 'Amazon, PayPal, Skype, and many others', 'Microsoft, Samsung, and Sony', 'Facebook, Netflix, and Uber'],
    answer: 1,
    explanation: 'Luxembourg hosts European HQs for Amazon, PayPal, Skype, Rakuten, Ferrero, and many others, attracted by stability, location, and EU market access.',
    link: 'https://luxembourg.public.lu/en/entreprises/faire-affaire.html',
    translations: {
      fr: {
        question: 'Quelles entreprises technologiques ont leur siège européen au Luxembourg ?',
        options: ['Apple, Google et Twitter/X', 'Amazon, PayPal, Skype et bien d\'autres', 'Microsoft, Samsung et Sony', 'Facebook, Netflix et Uber'],
        explanation: 'Le Luxembourg accueille les sièges européens d\'Amazon, PayPal, Skype, Rakuten, Ferrero et bien d\'autres, attirés par la stabilité, l\'emplacement et l\'accès au marché européen.',
      },
      de: {
        question: 'Welche Technologieunternehmen haben ihren europäischen Hauptsitz in Luxemburg?',
        options: ['Apple, Google und Twitter/X', 'Amazon, PayPal, Skype und viele andere', 'Microsoft, Samsung und Sony', 'Facebook, Netflix und Uber'],
        explanation: 'Luxemburg beherbergt die europäischen Hauptsitze von Amazon, PayPal, Skype, Rakuten, Ferrero und vielen anderen, angezogen von Stabilität, Lage und EU-Marktzugang.',
      },
      lb: {
        question: 'Wéi eng Technologiefirmen hunn hire europäesche Sëtz zu Lëtzebuerg?',
        options: ['Apple, Google a Twitter/X', 'Amazon, PayPal, Skype a vill aner', 'Microsoft, Samsung a Sony', 'Facebook, Netflix an Uber'],
        explanation: 'Lëtzebuerg huscht d\'europäesch Haaptsëtzer vun Amazon, PayPal, Skype, Rakuten, Ferrero a ville aneren, ugezunn duerch Stabilitéit, Lage a Zougang zum EU-Marché.',
      },
    },
  },
  {
    id: 'e-lang-2', level: 'explorer', category: 'language',
    question: 'What does "Merci villmools" mean in Luxembourgish?',
    options: ['You\'re welcome', 'Thank you very much', 'Excuse me', 'Please'],
    answer: 1,
    explanation: '"Merci villmools" combines the French "merci" with the Luxembourgish "villmools" (many times) to mean "thank you very much". This blend is typical of Luxembourgish.',
    link: null,
    translations: {
      fr: {
        question: 'Que signifie « Merci villmools » en luxembourgeois ?',
        options: ['De rien', 'Merci beaucoup', 'Excusez-moi', 'S\'il vous plaît'],
        explanation: '« Merci villmools » combine le français « merci » avec le luxembourgeois « villmools » (plusieurs fois) pour signifier « merci beaucoup ». Ce mélange est typique du luxembourgeois.',
      },
      de: {
        question: 'Was bedeutet „Merci villmools" auf Luxemburgisch?',
        options: ['Bitte sehr', 'Vielen Dank', 'Entschuldigung', 'Bitte'],
        explanation: '„Merci villmools" kombiniert das französische „merci" mit dem luxemburgischen „villmools" (viele Male) und bedeutet „vielen Dank". Diese Mischung ist typisch für Luxemburgisch.',
      },
      lb: {
        question: 'Wat bedeit « Merci villmools » op Lëtzebuergesch?',
        options: ['Gär geschitt', 'Villmools Merci', 'Entschëlleg', 'Wann ech gelift'],
        explanation: '« Merci villmools » kombinéiert dat franséischt « merci » mat dem Lëtzebuerger « villmools » (vill Mol) fir « villmools Merci » ze bedeiten. Dës Mëschung ass typesch fir Lëtzebuergesch.',
      },
    },
  },
  {
    id: 'e-hist-2', level: 'explorer', category: 'history',
    question: 'Which Grand Duchess led Luxembourg through exile during World War II?',
    options: ['Marie-Adélaïde', 'Charlotte', 'Joséphine-Charlotte', 'Maria Teresa'],
    answer: 1,
    explanation: 'Grand Duchess Charlotte (1896–1985) led the Luxembourg government in exile during WWII, broadcasting from London to keep national spirit alive. She is one of Luxembourg\'s most beloved figures.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'Quelle grande-duchesse a dirigé le Luxembourg depuis l\'exil pendant la Seconde Guerre mondiale ?',
        options: ['Marie-Adélaïde', 'Charlotte', 'Joséphine-Charlotte', 'Maria Teresa'],
        explanation: 'La grande-duchesse Charlotte (1896–1985) a dirigé le gouvernement luxembourgeois en exil pendant la Seconde Guerre mondiale, diffusant depuis Londres pour maintenir le moral national. Elle est l\'une des figures les plus aimées du Luxembourg.',
      },
      de: {
        question: 'Welche Großherzogin führte Luxemburg im Zweiten Weltkrieg aus dem Exil?',
        options: ['Marie-Adélaïde', 'Charlotte', 'Joséphine-Charlotte', 'Maria Teresa'],
        explanation: 'Großherzogin Charlotte (1896–1985) führte die Exilregierung Luxemburgs während des Zweiten Weltkriegs und sendete aus London, um den Nationalgeist zu stärken. Sie ist eine der beliebtesten Figuren Luxemburgs.',
      },
      lb: {
        question: 'Wéi eng Groussherzogin huet Lëtzebuerg am Zweete Weltkrich vum Exil aus geféiert?',
        options: ['Marie-Adélaïde', 'Charlotte', 'Joséphine-Charlotte', 'Maria Teresa'],
        explanation: 'Groussherzogin Charlotte (1896–1985) huet d\'Lëtzebuerger Exilregierung am Zweete Weltkrich geféiert, vun London aus gesendet fir de Nationalgëscht ze stäerken. Si ass eng vun de beliebtsten Figuren vu Lëtzebuerg.',
      },
    },
  },
  // sub-level 5
  {
    id: 'e-cult-2', level: 'explorer', category: 'culture',
    question: 'What is "Kachkéis"?',
    options: ['A Luxembourgish folk song', 'A traditional cooked cheese spread eaten on bread', 'A type of local sausage', 'A pastry served at National Day'],
    answer: 1,
    explanation: '"Kachkéis" (cooked cheese) is a traditional Luxembourgish processed cheese spread, made by melting fresh white cheese with butter and eggs. It\'s served on rye bread and is a beloved local comfort food.',
    link: 'https://www.visitluxembourg.com/en/food-and-drinks',
    translations: {
      fr: {
        question: 'Qu\'est-ce que le « Kachkéis » ?',
        options: ['Une chanson folklorique luxembourgeoise', 'Une tartinade de fromage fondu traditionnelle mangée sur du pain', 'Un type de saucisse locale', 'Une pâtisserie servie lors de la fête nationale'],
        explanation: 'Le « Kachkéis » (fromage cuit) est une tartinade de fromage fondu traditionnelle luxembourgeoise, faite en faisant fondre du fromage blanc frais avec du beurre et des œufs. Il est servi sur du pain de seigle.',
      },
      de: {
        question: 'Was ist „Kachkéis"?',
        options: ['Ein luxemburgisches Volkslied', 'Ein traditioneller Schmelzkäseaufstrich auf Brot', 'Ein lokales Wurstsorten', 'Ein Gebäck zum Nationalfeiertag'],
        explanation: '„Kachkéis" (Kochkäse) ist ein traditioneller luxemburgischer Schmelzkäseaufstrich aus frischem Weißkäse, Butter und Eiern. Er wird auf Roggenbrot serviert.',
      },
      lb: {
        question: 'Wat ass « Kachkéis »?',
        options: ['E Lëtzebuerger Vollekslid', 'Eng traditionell geschmoltene Kéisbrout-Aufstréich', 'Eng lokal Wurschtaart', 'E Gebäck zum Nationalfeierdag'],
        explanation: '« Kachkéis » ass eng traditionell Lëtzebuerger geschmoltene Kéisaufstréich aus frëschem Wäisskéis, Botter an Eeër. En gëtt op Roggebrot servéiert.',
      },
    },
  },
  {
    id: 'e-peop-2', level: 'explorer', category: 'people',
    question: 'Michel Théato won the marathon at which Olympic Games?',
    options: ['1896 Athens', '1900 Paris', '1904 St. Louis', '1908 London'],
    answer: 1,
    explanation: 'Michel Théato won the marathon at the 1900 Paris Olympics. Research later confirmed he was born in Luxembourg in 1878, making him Luxembourg\'s first Olympic gold medallist.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'Michel Théato a remporté le marathon lors de quels Jeux olympiques ?',
        options: ['Athènes 1896', 'Paris 1900', 'Saint-Louis 1904', 'Londres 1908'],
        explanation: 'Michel Théato a remporté le marathon aux JO de Paris 1900. Des recherches ultérieures ont confirmé qu\'il était né au Luxembourg en 1878, ce qui en fait le premier médaillé d\'or olympique luxembourgeois.',
      },
      de: {
        question: 'Bei welchen Olympischen Spielen gewann Michel Théato den Marathon?',
        options: ['Athen 1896', 'Paris 1900', 'St. Louis 1904', 'London 1908'],
        explanation: 'Michel Théato gewann den Marathon bei den Olympischen Spielen 1900 in Paris. Spätere Forschungen bestätigten, dass er 1878 in Luxemburg geboren wurde — damit Luxemburgs erster olympischer Goldmedaillengewinner.',
      },
      lb: {
        question: 'Bei wéi engem Olympesche Spillere huet Michel Théato de Marathon gewonnen?',
        options: ['Athen 1896', 'Paräis 1900', 'St. Louis 1904', 'London 1908'],
        explanation: 'Michel Théato huet de Marathon bei den Olympesche Spillere 1900 zu Paräis gewonnen. Spéider Fuerschungen hunn bestätegt, datt hien 1878 zu Lëtzebuerg gebuer gouf — Lëtzebuerg seng éischt olympesch Goldmedail.',
      },
    },
  },
  {
    id: 'e-inst-1', level: 'explorer', category: 'institutions',
    question: 'What is the "Conseil d\'État" (Council of State) in Luxembourg?',
    options: ['The government cabinet', 'A consultative body that reviews legislation before parliament votes', 'The supreme court', 'The senate (upper chamber)'],
    answer: 1,
    explanation: 'The Conseil d\'État is a consultative body of 21 members that reviews all bills before parliament votes on them. It acts as a brake on hasty legislation but does not have veto power.',
    link: 'https://luxembourg.public.lu/en/gouvernement/institutions/conseil-etat.html',
    translations: {
      fr: {
        question: 'Quel est le rôle du « Conseil d\'État » au Luxembourg ?',
        options: ['Le cabinet gouvernemental', 'Un organe consultatif qui examine la législation avant le vote du parlement', 'La cour suprême', 'Le sénat (chambre haute)'],
        explanation: 'Le Conseil d\'État est un organe consultatif de 21 membres qui examine tous les projets de loi avant le vote du parlement. Il agit comme frein aux législations hâtives, mais n\'a pas de droit de veto.',
      },
      de: {
        question: 'Was ist die Rolle des „Conseil d\'État" (Staatsrat) in Luxemburg?',
        options: ['Das Regierungskabinett', 'Ein beratendes Gremium, das Gesetze vor der Parlamentsabstimmung prüft', 'Der Oberste Gerichtshof', 'Der Senat (Oberhaus)'],
        explanation: 'Der Conseil d\'État ist ein beratendes Gremium aus 21 Mitgliedern, das alle Gesetzentwürfe vor der Parlamentsabstimmung prüft. Er bremst überhastete Gesetzgebung, hat aber kein Vetorecht.',
      },
      lb: {
        question: 'Wat ass d\'Roll vum « Conseil d\'État » zu Lëtzebuerg?',
        options: ['De Regierungskabinett', 'En beratendes Orgaan dat Gesetzer virum Parlamentsvott iwwerpréift', 'Den héchste Geriichtshaff', 'Den Senat (Uewerkammer)'],
        explanation: 'De Conseil d\'État ass en beratendes Orgaan vun 21 Membere dat all Gesetzentwérf virum Parlamentsvott iwwerpréift. Hien bremst iwwerhaaschte Gesetzgebung, huet awer kee Vetorecht.',
      },
    },
  },
  {
    id: 'econ-6', level: 'explorer', category: 'economy',
    question: 'How many nationalities are represented among Luxembourg\'s residents?',
    options: ['About 50', 'About 100', 'About 170', 'About 250'],
    answer: 2,
    explanation: 'Over 170 nationalities call Luxembourg home. About 47% of residents are foreign nationals — one of the highest proportions in the world. Portuguese nationals form the largest non-Luxembourg community.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html',
    translations: {
      fr: {
        question: 'Combien de nationalités sont représentées parmi les résidents du Luxembourg ?',
        options: ['Environ 50', 'Environ 100', 'Environ 170', 'Environ 250'],
        explanation: 'Plus de 170 nationalités vivent au Luxembourg. Environ 47 % des résidents sont des étrangers — l\'une des proportions les plus élevées au monde. Les Portugais forment la plus grande communauté non luxembourgeoise.',
      },
      de: {
        question: 'Wie viele Nationalitäten sind unter den Einwohnern Luxemburgs vertreten?',
        options: ['Etwa 50', 'Etwa 100', 'Etwa 170', 'Etwa 250'],
        explanation: 'Über 170 Nationalitäten leben in Luxemburg. Etwa 47 % der Einwohner sind Ausländer — eine der höchsten Quoten weltweit. Portugiesen bilden die größte nicht-luxemburgische Gemeinschaft.',
      },
      lb: {
        question: 'Wéi vill Nationalitéiten sinn ënner de Lëtzebuerger Awunnere vertrueden?',
        options: ['Ongeféier 50', 'Ongeféier 100', 'Ongeféier 170', 'Ongeféier 250'],
        explanation: 'Iwwer 170 Nationalitéiten liewen zu Lëtzebuerg. Ongeféier 47 % vun den Awunnere sinn Auslänner — eng vun den héchsten Undeeler weltwäit. Portugise bilden déi gréisst net-lëtzebuergesch Gemeinschaft.',
      },
    },
  },
  {
    id: 'e-lang-3', level: 'explorer', category: 'language',
    question: 'The University of Luxembourg was founded in which year?',
    options: ['1969', '1985', '2003', '2010'],
    answer: 2,
    explanation: 'The University of Luxembourg was established in 2003. It is the only public university in the country and has a strong multilingual and international focus, with campuses in Belval, Limpertsberg, and Kirchberg.',
    link: 'https://www.uni.lu/en/',
    translations: {
      fr: {
        question: 'L\'Université du Luxembourg a été fondée en quelle année ?',
        options: ['1969', '1985', '2003', '2010'],
        explanation: 'L\'Université du Luxembourg a été créée en 2003. C\'est la seule université publique du pays, avec une forte orientation multilingue et internationale.',
      },
      de: {
        question: 'In welchem Jahr wurde die Universität Luxemburg gegründet?',
        options: ['1969', '1985', '2003', '2010'],
        explanation: 'Die Universität Luxemburg wurde 2003 gegründet. Sie ist die einzige öffentliche Universität des Landes mit einem starken mehrsprachigen und internationalen Fokus.',
      },
      lb: {
        question: 'A wéi engem Joer gouf d\'Universitéit Lëtzebuerg gegrënnt?',
        options: ['1969', '1985', '2003', '2010'],
        explanation: 'D\'Universitéit Lëtzebuerg gouf 2003 gegrënnt. Si ass déi eenzeg ëffentlech Universitéit vum Land mat engem staarken méisprochegen an internationale Fokus.',
      },
    },
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
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html',
    translations: {
      fr: {
        question: 'Quelles sont les trois langues administratives officielles du Luxembourg ?',
        options: ['Anglais, français, allemand', 'Luxembourgeois, français, allemand', 'Français, allemand, portugais', 'Luxembourgeois, anglais, français'],
        explanation: 'Le Luxembourg utilise trois langues officielles : le luxembourgeois (langue nationale), le français (législation et tribunaux) et l\'allemand (médias et presse).',
      },
      de: {
        question: 'Was sind die drei offiziellen Verwaltungssprachen Luxemburgs?',
        options: ['Englisch, Französisch, Deutsch', 'Luxemburgisch, Französisch, Deutsch', 'Französisch, Deutsch, Portugiesisch', 'Luxemburgisch, Englisch, Französisch'],
        explanation: 'Luxemburg hat drei Amtssprachen: Luxemburgisch (Nationalsprache), Französisch (Gesetzgebung und Gerichte) und Deutsch (Medien und Presse).',
      },
      lb: {
        question: 'Wat sinn déi dräi offiziell Verwaltungssprochen vu Lëtzebuerg?',
        options: ['Englesch, Franséisch, Däitsch', 'Lëtzebuergesch, Franséisch, Däitsch', 'Franséisch, Däitsch, Portugisesch', 'Lëtzebuergesch, Englesch, Franséisch'],
        explanation: 'Lëtzebuerg huet dräi offiziell Sprochen: Lëtzebuergesch (Nationalsproch), Franséisch (Gesetzgebung a Geriichter) a Däitsch (Medie a Presse).',
      },
    },
  },
  {
    id: 'hist-5', level: 'resident', category: 'history',
    question: 'The Battle of the Bulge (December 1944–January 1945) was partly fought in Luxembourg. Which town is famous for this?',
    options: ['Esch-sur-Alzette', 'Clervaux', 'Bastogne (nearby Belgium)', 'Echternach'],
    answer: 1,
    explanation: 'Clervaux, in northern Luxembourg, saw heavy fighting during the Battle of the Bulge (Ardennes Offensive). The town\'s castle was heavily damaged before being retaken by Allied forces.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'La bataille des Ardennes (déc. 1944–janv. 1945) s\'est partiellement déroulée au Luxembourg. Quelle ville en est célèbre ?',
        options: ['Esch-sur-Alzette', 'Clervaux', 'Bastogne (Belgique voisine)', 'Echternach'],
        explanation: 'Clervaux, dans le nord du Luxembourg, a connu de violents combats pendant la bataille des Ardennes. Le château de la ville a été gravement endommagé avant d\'être repris par les Alliés.',
      },
      de: {
        question: 'Die Ardennenoffensive (Dez. 1944–Jan. 1945) wurde teilweise in Luxemburg gekämpft. Welche Stadt ist dafür bekannt?',
        options: ['Esch an der Alzette', 'Clerf', 'Bastogne (nahes Belgien)', 'Echternach'],
        explanation: 'Clerf im Norden Luxemburgs erlebte schwere Kämpfe während der Ardennenoffensive. Das Schloss der Stadt wurde schwer beschädigt, bevor es von alliierten Truppen zurückerobert wurde.',
      },
      lb: {
        question: 'D\'Ardenneschlacht (Dez. 1944–Jan. 1945) gouf deelweis zu Lëtzebuerg gekämpft. Wéi eng Stad ass dofir bekannt?',
        options: ['Esch-Uelzecht', 'Clierf', 'Bastnech (Belgien)', 'Iechternach'],
        explanation: 'Clierf am Norde vu Lëtzebuerg huet schwéier Kämpfe während der Ardenneschlacht gesinn. D\'Schlass vun der Stad gouf schwéier beschiedegt ier et vun de Alliéierten zeréckgeholl gouf.',
      },
    },
  },
  {
    id: 'cult-5', level: 'resident', category: 'culture',
    question: 'What is the "Schueberfouer"?',
    options: ['A sheep fair that grew into a large funfair held annually in Luxembourg City', 'A medieval jousting tournament held in Vianden', 'A wine festival in Remich on the Moselle', 'A Christmas market on the Place d\'Armes'],
    answer: 0,
    explanation: 'The Schueberfouer started as a sheep fair (Schafsmarkt) in 1340, granted by John the Blind. Today it\'s one of Europe\'s oldest and largest funfairs, held every August/September in Luxembourg City.',
    link: 'https://www.visitluxembourg.com/en/event/schueberfouer-fair',
    translations: {
      fr: {
        question: 'Qu\'est-ce que la « Schueberfouer » ?',
        options: ['Une foire aux moutons transformée en grande foire annuelle à Luxembourg-Ville', 'Un tournoi de joutes médiéval à Vianden', 'Un festival du vin à Remich sur la Moselle', 'Un marché de Noël sur la Place d\'Armes'],
        explanation: 'La Schueberfouer a débuté comme foire aux moutons (Schafsmarkt) en 1340. Aujourd\'hui c\'est l\'une des plus anciennes et grandes fêtes foraines d\'Europe, organisée chaque août/septembre à Luxembourg-Ville.',
      },
      de: {
        question: 'Was ist die „Schueberfouer"?',
        options: ['Ein Schafsmarkt, der zu einem großen Jahrmarkt in Luxemburg-Stadt wurde', 'Ein mittelalterliches Ritterturnier in Vianden', 'Ein Weinfest in Remich an der Mosel', 'Ein Weihnachtsmarkt auf dem Place d\'Armes'],
        explanation: 'Die Schueberfouer begann 1340 als Schafsmarkt. Heute ist sie einer der ältesten und größten Jahrmärkte Europas, der jeden August/September in Luxemburg-Stadt stattfindet.',
      },
      lb: {
        question: 'Wat ass d\'Schueberfouer?',
        options: ['E Schofmaart deen zu enger grousser Fouer zu Lëtzebuerg-Stad gouf', 'E mëttelalterlecht Ritterturnier zu Vianden', 'E Weinfestival zu Remich un der Musel', 'E Chrëschtmaart um Place d\'Armes'],
        explanation: 'D\'Schueberfouer huet 1340 als Schofmaart ugefaangen. Haut ass si eng vun den ältste a gréisste Fouren an Europa, déi all August/September zu Lëtzebuerg-Stad stattfënnt.',
      },
    },
  },
  {
    id: 'peop-5', level: 'resident', category: 'people',
    question: 'Nicolas Frantz, a cyclist from Mamer, Luxembourg, won the Tour de France in which years?',
    options: ['1921 and 1922', '1927 and 1928', '1933 and 1934', '1938 and 1939'],
    answer: 1,
    explanation: 'Nicolas Frantz won the Tour de France in 1927 and 1928. He is one of Luxembourg\'s greatest sporting legends, alongside Charly Gaul, Josy Barthel, and Andy Schleck.',
    link: null,
    translations: {
      fr: {
        question: 'Nicolas Frantz, cycliste de Mamer, Luxembourg, a remporté le Tour de France en quelles années ?',
        options: ['1921 et 1922', '1927 et 1928', '1933 et 1934', '1938 et 1939'],
        explanation: 'Nicolas Frantz a remporté le Tour de France en 1927 et 1928. Il est l\'une des plus grandes légendes sportives luxembourgeoises.',
      },
      de: {
        question: 'In welchen Jahren gewann der Radfahrer Nicolas Frantz aus Mamer die Tour de France?',
        options: ['1921 und 1922', '1927 und 1928', '1933 und 1934', '1938 und 1939'],
        explanation: 'Nicolas Frantz gewann die Tour de France 1927 und 1928. Er gilt als eine der größten Sportlegenden Luxemburgs.',
      },
      lb: {
        question: 'A wéi engen Joeren huet de Radfahrer Nicolas Frantz vu Mamer d\'Tour de France gewonnen?',
        options: ['1921 a 1922', '1927 a 1928', '1933 a 1934', '1938 a 1939'],
        explanation: 'Nicolas Frantz huet d\'Tour de France 1927 a 1928 gewonnen. Hien ass eng vun de gréisste Sportlegenden vu Lëtzebuerg.',
      },
    },
  },
  {
    id: 'inst-6', level: 'resident', category: 'institutions',
    question: 'What does ADEM do?',
    options: ['It manages the national health insurance', 'It is the national employment agency, helping jobseekers and employers', 'It handles immigration and residence permits', 'It manages social housing'],
    answer: 1,
    explanation: 'ADEM (Agence pour le développement de l\'emploi) is Luxembourg\'s national employment agency. It helps jobseekers find work, manages unemployment benefits, and supports employers.',
    link: 'https://adem.public.lu/en.html',
    translations: {
      fr: {
        question: 'Que fait l\'ADEM ?',
        options: ['Elle gère l\'assurance maladie nationale', 'C\'est l\'agence nationale pour l\'emploi, aidant chercheurs d\'emploi et employeurs', 'Elle s\'occupe de l\'immigration et des permis de séjour', 'Elle gère le logement social'],
        explanation: 'L\'ADEM (Agence pour le développement de l\'emploi) est l\'agence nationale pour l\'emploi du Luxembourg. Elle aide les demandeurs d\'emploi, gère les allocations de chômage et soutient les employeurs.',
      },
      de: {
        question: 'Was macht die ADEM?',
        options: ['Sie verwaltet die nationale Krankenversicherung', 'Sie ist die nationale Arbeitsvermittlung, die Jobsuchende und Arbeitgeber unterstützt', 'Sie bearbeitet Einwanderung und Aufenthaltserlaubnisse', 'Sie verwaltet den sozialen Wohnungsbau'],
        explanation: 'Die ADEM (Agence pour le développement de l\'emploi) ist Luxemburgs nationale Arbeitsvermittlung. Sie hilft Jobsuchenden, verwaltet Arbeitslosengeld und unterstützt Arbeitgeber.',
      },
      lb: {
        question: 'Wat mécht d\'ADEM?',
        options: ['Si verwaltet d\'national Krankeversécheroung', 'Si ass d\'national Aarbechtsagentur, déi Schaffe-Sichenden an Aarbechtsgiewer hëlleft', 'Si behandelt Immigratioun a Residenzbewilligungen', 'Si verwaltet de sozialen Wunnengsbau'],
        explanation: 'D\'ADEM (Agence pour le développement de l\'emploi) ass Lëtzebuerg seng national Aarbechtsagentur. Si hëlleft Schaffe-Sichenden, verwaltet Chômagsallokatiounen a ënnerstëtzt Aarbechtsgiewer.',
      },
    },
  },
  // sub-level 2
  {
    id: 'econ-7', level: 'resident', category: 'economy',
    question: 'The Moselle region of Luxembourg is known for producing what?',
    options: ['Craft beer', 'White wines (Riesling, Rivaner, Auxerrois)', 'Cheese', 'Chocolate'],
    answer: 1,
    explanation: 'The Luxembourg Moselle valley produces excellent white wines, especially Riesling, Rivaner, Auxerrois, and sparkling Crémant de Luxembourg.',
    link: 'https://www.visitluxembourg.com/en/country/moselle',
    translations: {
      fr: {
        question: 'La région de la Moselle luxembourgeoise est connue pour produire quoi ?',
        options: ['Bières artisanales', 'Vins blancs (Riesling, Rivaner, Auxerrois)', 'Fromages', 'Chocolats'],
        explanation: 'La vallée de la Moselle luxembourgeoise produit d\'excellents vins blancs, notamment le Riesling, le Rivaner, l\'Auxerrois et le Crémant de Luxembourg pétillant.',
      },
      de: {
        question: 'Wofür ist die luxemburgische Moselregion bekannt?',
        options: ['Craft-Bier', 'Weißweine (Riesling, Rivaner, Auxerrois)', 'Käse', 'Schokolade'],
        explanation: 'Das luxemburgische Moseltal produziert hervorragende Weißweine, insbesondere Riesling, Rivaner, Auxerrois und den prickelnden Crémant de Luxembourg.',
      },
      lb: {
        question: 'Wofir ass d\'Lëtzebuerger Moselregioun bekannt?',
        options: ['Craft-Béier', 'Wäisswäiner (Riesling, Rivaner, Auxerrois)', 'Kéis', 'Schokolade'],
        explanation: 'D\'Lëtzebuerger Moseldall produzéiert exzellent Wäisswäiner, besonnesch Riesling, Rivaner, Auxerrois an de moussante Crémant de Luxembourg.',
      },
    },
  },
  {
    id: 'lang-6', level: 'resident', category: 'language',
    question: 'Which famous literary work in Luxembourgish is Michel Rodange known for?',
    options: ['De Renert', 'Dil Ueueglen', 'Lëtzebuerger', 'D\'Weltgeschicht'],
    answer: 0,
    explanation: 'Michel Rodange wrote "De Renert" (The Fox) in 1872, an epic poem retelling the medieval Reynard the Fox story in Luxembourgish — a cornerstone of Luxembourg\'s literary heritage.',
    link: 'https://luxembourg.public.lu/en/culture/patrimoine-culturel.html',
    translations: {
      fr: {
        question: 'Pour quelle œuvre littéraire célèbre en luxembourgeois Michel Rodange est-il connu ?',
        options: ['De Renert', 'Dil Ueueglen', 'Lëtzebuerger', 'D\'Weltgeschicht'],
        explanation: 'Michel Rodange a écrit « De Renert » (Le Renard) en 1872, un poème épique racontant l\'histoire médiévale de Renart le Goupil en luxembourgeois — un pilier du patrimoine littéraire luxembourgeois.',
      },
      de: {
        question: 'Für welches berühmte luxemburgische Literaturwerk ist Michel Rodange bekannt?',
        options: ['De Renert', 'Dil Ueueglen', 'Lëtzebuerger', 'D\'Weltgeschicht'],
        explanation: 'Michel Rodange schrieb 1872 „De Renert" (Der Fuchs), ein Epos über den mittelalterlichen Reineke Fuchs auf Luxemburgisch — ein Eckpfeiler des luxemburgischen Literaturerbes.',
      },
      lb: {
        question: 'Fir wéi eng berühmt lëtzebuergesch Literaturwierker ass Michel Rodange bekannt?',
        options: ['De Renert', 'Dil Ueueglen', 'Lëtzebuerger', 'D\'Weltgeschicht'],
        explanation: 'Michel Rodange huet 1872 « De Renert » (De Fuuss) geschriwwen, e Epos iwwer de mëttelalterlecht Reineke Fuuss op Lëtzebuergesch — e Grondpfeiler vum Lëtzebuerger Literaturierwen.',
      },
    },
  },
  {
    id: 'hist-6', level: 'resident', category: 'history',
    question: 'The Schuman Declaration of 1950 proposed European integration. Where was Robert Schuman born?',
    options: ['Metz, France', 'Clausen, Luxembourg City', 'Trier, Germany', 'Brussels, Belgium'],
    answer: 1,
    explanation: 'Robert Schuman (1886–1963) was born in Clausen, Luxembourg City. He became French Foreign Minister and proposed the European Coal and Steel Community, leading to today\'s EU.',
    link: 'https://luxembourg.public.lu/en/culture/patrimoine-culturel.html',
    translations: {
      fr: {
        question: 'La déclaration Schuman de 1950 proposait l\'intégration européenne. Où Robert Schuman est-il né ?',
        options: ['Metz, France', 'Clausen, Luxembourg-Ville', 'Trèves, Allemagne', 'Bruxelles, Belgique'],
        explanation: 'Robert Schuman (1886–1963) est né à Clausen, Luxembourg-Ville. Il est devenu ministre français des Affaires étrangères et a proposé la Communauté européenne du charbon et de l\'acier, à l\'origine de l\'UE actuelle.',
      },
      de: {
        question: 'Die Schumansche Erklärung von 1950 schlug die europäische Integration vor. Wo wurde Robert Schuman geboren?',
        options: ['Metz, Frankreich', 'Clausen, Luxemburg-Stadt', 'Trier, Deutschland', 'Brüssel, Belgien'],
        explanation: 'Robert Schuman (1886–1963) wurde in Clausen, Luxemburg-Stadt, geboren. Er wurde französischer Außenminister und schlug die Europäische Gemeinschaft für Kohle und Stahl vor, die Vorläuferin der heutigen EU.',
      },
      lb: {
        question: 'D\'Schuman-Deklaratioun vu 1950 huet d\'europäesch Integratioun proposéiert. Wou gouf Robert Schuman gebuer?',
        options: ['Metz, Frankräich', 'Clausen, Lëtzebuerg-Stad', 'Tréier, Däitschland', 'Brüssel, Belgien'],
        explanation: 'Robert Schuman (1886–1963) gouf zu Clausen, Lëtzebuerg-Stad, gebuer. Hien gouf franséischen Ausseminister a proposéiert d\'Europäesch Gemeinschaft fir Kuel a Stell, dem Virläufer vun der haiteger EU.',
      },
    },
  },
  {
    id: 'r-cult-1', level: 'resident', category: 'culture',
    question: 'What is the "Octave of Our Lady of Luxembourg"?',
    options: ['Eight days of singing and dancing at the Cathedral', 'A 15-day Marian pilgrimage every May at Notre-Dame Cathedral', 'A procession through the Pétrusse valley on Easter Sunday', 'A Marian festival held in Echternach'],
    answer: 1,
    explanation: 'The Octave of Our Lady of Luxembourg (Oktav) is a 15-day Marian pilgrimage every May at Notre-Dame Cathedral. Thousands gather to venerate the Consolatrix Afflictorum, patroness of Luxembourg.',
    link: 'https://luxembourg.public.lu/en/culture/traditions.html',
    translations: {
      fr: {
        question: 'Qu\'est-ce que l\'« Octave de Notre-Dame de Luxembourg » ?',
        options: ['Huit jours de chants et danses à la cathédrale', 'Un pèlerinage marial de 15 jours chaque mai à la cathédrale Notre-Dame', 'Une procession dans la vallée de la Pétrusse le dimanche de Pâques', 'Un festival marial à Echternach'],
        explanation: 'L\'Octave de Notre-Dame de Luxembourg (Oktav) est un pèlerinage marial de 15 jours chaque mai à la cathédrale Notre-Dame. Des milliers de personnes viennent vénérer la Consolatrix Afflictorum, patronne du Luxembourg.',
      },
      de: {
        question: 'Was ist die „Oktav Unserer Lieben Frau von Luxemburg"?',
        options: ['Acht Tage Singen und Tanzen im Dom', 'Eine 15-tägige Marienwallfahrt jeden Mai im Liebfrauendom', 'Eine Prozession durch das Pétrusse-Tal am Ostersonntag', 'Ein Marienfest in Echternach'],
        explanation: 'Die Oktav (Oktav Unserer Lieben Frau von Luxemburg) ist eine 15-tägige Marienwallfahrt jeden Mai im Luxemburger Dom. Tausende kommen, um die Consolatrix Afflictorum, Patronin Luxemburgs, zu verehren.',
      },
      lb: {
        question: 'Wat ass d\'« Oktav vun Eiser Léiwen Fra vu Lëtzebuerg »?',
        options: ['Aacht Deeg Sangen a Dansen an der Kathedral', 'Eng 15-Deeg Mariepilgerfahrt all Mee an der Notre-Dame-Kathedral', 'Eng Prozessioun duerch d\'Pétrusse-Dallänner um Ouschtersonndeg', 'E Mariefest zu Iechternach'],
        explanation: 'D\'Oktav ass eng 15-Deeg Mariepilgerfahrt all Mee an der Notre-Dame-Kathedral. Dausenden kommen fir d\'Consolatrix Afflictorum, d\'Schutzhellegen vu Lëtzebuerg, ze veréieren.',
      },
    },
  },
  {
    id: 'r-peop-1', level: 'resident', category: 'people',
    question: 'Who was Luxembourg\'s Prime Minister as of 2024?',
    options: ['Xavier Bettel', 'Jean-Claude Juncker', 'Luc Frieden', 'Étienne Schneider'],
    answer: 2,
    explanation: 'Luc Frieden became Luxembourg\'s Prime Minister in November 2023, leading a coalition of the CSV (Christian Social People\'s Party) and DP (Democratic Party).',
    link: 'https://luxembourg.public.lu/en/gouvernement.html',
    translations: {
      fr: {
        question: 'Qui était le Premier ministre du Luxembourg en 2024 ?',
        options: ['Xavier Bettel', 'Jean-Claude Juncker', 'Luc Frieden', 'Étienne Schneider'],
        explanation: 'Luc Frieden est devenu Premier ministre du Luxembourg en novembre 2023, à la tête d\'une coalition CSV (Parti populaire chrétien-social) et DP (Parti démocratique).',
      },
      de: {
        question: 'Wer war 2024 Luxemburgs Premierminister?',
        options: ['Xavier Bettel', 'Jean-Claude Juncker', 'Luc Frieden', 'Étienne Schneider'],
        explanation: 'Luc Frieden wurde im November 2023 Luxemburgs Premierminister und führt eine Koalition aus CSV (Christlich Sozialer Volkspartei) und DP (Demokratischer Partei).',
      },
      lb: {
        question: 'Wien war Lëtzebuerg säi Premierminister am Joer 2024?',
        options: ['Xavier Bettel', 'Jean-Claude Juncker', 'Luc Frieden', 'Étienne Schneider'],
        explanation: 'Luc Frieden gouf am November 2023 Premierminister vu Lëtzebuerg, mat enger Koalitioun vu CSV (Chrëschtlech Sozial Vollekspartei) a DP (Demokratesch Partei).',
      },
    },
  },
  // sub-level 3
  {
    id: 'r-inst-1', level: 'resident', category: 'institutions',
    question: 'The European Investment Bank (EIB) is headquartered in Luxembourg. What does it primarily do?',
    options: ['Manages EU member state budgets', 'Finances long-term investment projects supporting EU policy objectives', 'Sets eurozone interest rates', 'Manages the EU\'s foreign exchange reserves'],
    answer: 1,
    explanation: 'The EIB is the EU\'s lending arm, financing infrastructure, climate action, innovation, and development projects. It is the world\'s largest multilateral public bank.',
    link: 'https://www.eib.org/en/index.htm',
    translations: {
      fr: {
        question: 'La Banque européenne d\'investissement (BEI) a son siège au Luxembourg. Que fait-elle principalement ?',
        options: ['Gère les budgets des États membres de l\'UE', 'Finance des projets d\'investissement à long terme soutenant les objectifs de l\'UE', 'Fixe les taux d\'intérêt de la zone euro', 'Gère les réserves en devises de l\'UE'],
        explanation: 'La BEI est le bras financier de l\'UE, finançant des projets d\'infrastructure, d\'action climatique, d\'innovation et de développement. C\'est la plus grande banque publique multilatérale du monde.',
      },
      de: {
        question: 'Die Europäische Investitionsbank (EIB) hat ihren Sitz in Luxemburg. Was macht sie hauptsächlich?',
        options: ['Verwaltet die Haushalte der EU-Mitgliedstaaten', 'Finanziert langfristige Investitionsprojekte zur Unterstützung der EU-Politikziele', 'Legt die Zinssätze der Eurozone fest', 'Verwaltet die Devisenreserven der EU'],
        explanation: 'Die EIB ist der Kreditarm der EU und finanziert Infrastruktur-, Klimaschutz-, Innovations- und Entwicklungsprojekte. Sie ist die weltgrößte multilaterale öffentliche Bank.',
      },
      lb: {
        question: 'D\'Europäesch Investitiounsbank (EIB) huet hire Sëtz zu Lëtzebuerg. Wat mécht si haaptsächlech?',
        options: ['Verwaltet d\'Budgeten vun den EU-Memberstaaten', 'Finanzéiert laangfristeg Investitiounsprojeten, déi EU-Ziler ënnerstëtzen', 'Setzt d\'Zënssätz vun der Eurozon fest', 'Verwaltet d\'EU Devisereserven'],
        explanation: 'D\'EIB ass d\'EU seng Kredittarm, finanzéiert Infrastruktur-, Klimaaktioun-, Innovatiounen- a Entwécklungsprojeten. Si ass déi weltgréisst multilateral ëffentlech Bank.',
      },
    },
  },
  {
    id: 'r-econ-1', level: 'resident', category: 'economy',
    question: 'Which Portuguese-origin community is the largest non-Luxembourgish group in the country?',
    options: ['About 10,000', 'About 40,000', 'About 100,000', 'About 200,000'],
    answer: 2,
    explanation: 'The Portuguese community numbers around 100,000, making it the largest non-Luxembourgish nationality. Many came as workers from the 1960s onward, especially to work in construction and the steel industry.',
    link: 'https://statistiques.public.lu/en/statistique-publique/statec.html',
    translations: {
      fr: {
        question: 'Quelle est la taille de la communauté portugaise, le plus grand groupe non-luxembourgeois du pays ?',
        options: ['Environ 10 000', 'Environ 40 000', 'Environ 100 000', 'Environ 200 000'],
        explanation: 'La communauté portugaise compte environ 100 000 personnes, ce qui en fait la plus grande nationalité non luxembourgeoise. Beaucoup sont arrivés comme travailleurs à partir des années 1960.',
      },
      de: {
        question: 'Wie groß ist die portugiesische Gemeinschaft, die größte nicht-luxemburgische Gruppe im Land?',
        options: ['Etwa 10.000', 'Etwa 40.000', 'Etwa 100.000', 'Etwa 200.000'],
        explanation: 'Die portugiesische Gemeinschaft zählt rund 100.000 Personen — die größte nicht-luxemburgische Nationalität. Viele kamen ab den 1960er Jahren als Arbeitskräfte ins Land.',
      },
      lb: {
        question: 'Wéi grouss ass d\'portugisesch Gemeinschaft, déi gréisst net-lëtzebuergesch Grupp am Land?',
        options: ['Ongeféier 10.000', 'Ongeféier 40.000', 'Ongeféier 100.000', 'Ongeféier 200.000'],
        explanation: 'D\'portugisesch Gemeinschaft zielt ongeféier 100.000 Persoune — déi gréisst net-lëtzebuergesch Nationalitéit. Vill komme als Aarbechter ab den 1960er Joer an d\'Land.',
      },
    },
  },
  {
    id: 'r-lang-1', level: 'resident', category: 'language',
    question: 'In Luxembourgish, what is the word for "yes"?',
    options: ['Oui', 'Jo', 'Yo', 'Ya'],
    answer: 1,
    explanation: '"Jo" is the Luxembourgish word for "yes". It closely resembles the German "ja" and the Dutch "ja", reflecting Luxembourgish\'s West Germanic roots.',
    link: null,
    translations: {
      fr: {
        question: 'En luxembourgeois, quel est le mot pour « oui » ?',
        options: ['Oui', 'Jo', 'Yo', 'Ya'],
        explanation: '« Jo » est le mot luxembourgeois pour « oui ». Il ressemble étroitement à l\'allemand « ja » et au néerlandais « ja », reflétant les racines germaniques occidentales du luxembourgeois.',
      },
      de: {
        question: 'Wie lautet das luxemburgische Wort für „Ja"?',
        options: ['Oui', 'Jo', 'Yo', 'Ya'],
        explanation: '„Jo" ist das luxemburgische Wort für „Ja". Es ähnelt dem deutschen „ja" und dem niederländischen „ja" und spiegelt die westgermanischen Wurzeln des Luxemburgischen wider.',
      },
      lb: {
        question: 'Wat ass dat Lëtzebuerger Wuert fir « jo »?',
        options: ['Oui', 'Jo', 'Yo', 'Ya'],
        explanation: '« Jo » ass dat Lëtzebuerger Wuert fir « jo ». Et ähnelt dem däitschen « ja » an dem hollänneschen « ja », a reflektéiert d\'westgermanesch Wuerzele vum Lëtzebuergeschen.',
      },
    },
  },
  {
    id: 'r-hist-1', level: 'resident', category: 'history',
    question: 'Countess Ermesinde (1186–1247) is considered one of Luxembourg\'s greatest medieval rulers. What did she grant?',
    options: ['The right to collect taxes from merchants', 'Freedoms and charters to Luxembourg City and other towns, expanding the territory', 'Permission to build the Cathedral of Notre-Dame', 'The first Moselle wine appellation'],
    answer: 1,
    explanation: 'Ermesinde significantly expanded Luxembourg\'s territory and granted freedoms (charters) to towns including Luxembourg City (1244), Echternach, and Thionville, laying the foundation for a more structured society.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'La comtesse Ermesinde (1186–1247) est considérée comme l\'une des plus grandes souveraines médiévales du Luxembourg. Qu\'a-t-elle accordé ?',
        options: ['Le droit de percevoir des taxes sur les marchands', 'Des libertés et des chartes à Luxembourg-Ville et d\'autres villes, élargissant le territoire', 'La permission de construire la cathédrale Notre-Dame', 'La première appellation viticole de la Moselle'],
        explanation: 'Ermesinde a considérablement étendu le territoire luxembourgeois et accordé des libertés (chartes) à des villes dont Luxembourg-Ville (1244), Echternach et Thionville.',
      },
      de: {
        question: 'Gräfin Ermesinde (1186–1247) gilt als eine der größten mittelalterlichen Herrscherinnen Luxemburgs. Was gewährte sie?',
        options: ['Das Recht, Steuern von Kaufleuten zu erheben', 'Freiheiten und Stadtrechte an Luxemburg-Stadt und andere Städte, wodurch das Territorium erweitert wurde', 'Erlaubnis zum Bau der Liebfrauenkathedrale', 'Die erste Moseler Weinappellation'],
        explanation: 'Ermesinde erweiterte das luxemburgische Territorium erheblich und gewährte Städten Freiheiten (Stadtrechte), darunter Luxemburg-Stadt (1244), Echternach und Diedenhofen.',
      },
      lb: {
        question: 'Gräfin Ermesinde (1186–1247) gëllt als eng vun de gréisste mëttelalterlech Herrscherinne vu Lëtzebuerg. Wat huet si ugebueden?',
        options: ['D\'Recht Steieren vu Kaafleuten ze kréien', 'Fräiheeten a Charteren u Lëtzebuerg-Stad an aner Stied, wat d\'Territoire erweidert huet', 'Erlaabnis d\'Notre-Dame-Kathedral ze bauen', 'Déi éischt Musel-Weinappellatioun'],
        explanation: 'Ermesinde huet d\'Lëtzebuerger Territoire wesentlech erweiderert a Stied Fräiheeten (Charteren) ugebueden, dorënner Lëtzebuerg-Stad (1244), Iechternach a Thionville.',
      },
    },
  },
  {
    id: 'cult-6', level: 'resident', category: 'culture',
    question: 'What does "Gëlle Fra" (Golden Lady) refer to?',
    options: ['A famous Luxembourg pastry', 'A monument on Place de la Constitution depicting a winged woman on a tall column', 'A traditional dance from the Ardennes region', 'The nickname for Grand Duchess Charlotte'],
    answer: 1,
    explanation: 'The Gëlle Fra (Golden Lady) is a war memorial on Place de la Constitution. The golden statue atop a 21-metre column commemorates WWI volunteers. It was melted down by Nazi occupiers in 1940 and rebuilt after the war.',
    link: 'https://www.visitluxembourg.com/en/place/site/golden-lady-monument-constitution-square',
    translations: {
      fr: {
        question: 'À quoi fait référence la « Gëlle Fra » (Dame d\'Or) ?',
        options: ['Une pâtisserie luxembourgeoise célèbre', 'Un monument sur la Place de la Constitution représentant une femme ailée sur une haute colonne', 'Une danse traditionnelle de la région ardennaise', 'Le surnom de la grande-duchesse Charlotte'],
        explanation: 'La Gëlle Fra (Dame d\'Or) est un mémorial de guerre sur la Place de la Constitution. La statue dorée au sommet d\'une colonne de 21 mètres commémore les volontaires de la Première Guerre mondiale. Elle a été fondue par les occupants nazis en 1940 et reconstruite après la guerre.',
      },
      de: {
        question: 'Worauf bezieht sich die „Gëlle Fra" (Goldene Frau)?',
        options: ['Ein berühmtes luxemburgisches Gebäck', 'Ein Denkmal auf dem Place de la Constitution, das eine geflügelte Frau auf einer hohen Säule zeigt', 'Ein traditioneller Tanz aus der Ardennenregion', 'Der Spitzname von Großherzogin Charlotte'],
        explanation: 'Die Gëlle Fra (Goldene Frau) ist ein Kriegsdenkmal auf dem Place de la Constitution. Die goldene Statue auf einer 21 Meter hohen Säule erinnert an die Freiwilligen des Ersten Weltkriegs. Sie wurde 1940 von den Nazi-Besatzern eingeschmolzen und nach dem Krieg wiederaufgebaut.',
      },
      lb: {
        question: 'Worops bezitt sech d\'« Gëlle Fra »?',
        options: ['E berühmt Lëtzebuerger Gebäck', 'En Denkmal um Place de la Constitution dat eng gefliëlt Fra op enger héijer Kolonn weist', 'En traditionelle Danz vun der Ardennesregioun', 'De Spëtznumm vun der Groussherzogin Charlotte'],
        explanation: 'D\'Gëlle Fra ass e Krichsdenkmal um Place de la Constitution. D\'goldene Statue uewen op enger 21-Meter-Kolonn erënnert un d\'Fräiwëlleger vum Éischte Weltkrich. Si gouf 1940 vun de Nazi-Besatzer geschmolt a no dem Krich nei gebaut.',
      },
    },
  },
  // sub-level 4
  {
    id: 'peop-6', level: 'resident', category: 'people',
    question: 'The "Dancing Procession of Echternach" is a UNESCO Intangible Cultural Heritage. What makes it special?',
    options: ['Participants dance backwards through the streets', 'It is performed entirely in silence', 'Participants hop in a three-step dance while moving in procession on Whit Tuesday', 'It involves costumes of over 100 different countries'],
    answer: 2,
    explanation: 'The Echternach Dancing Procession (Sprangprozessioun) takes place every Whit Tuesday since the 7th century, in honour of St. Willibrord.',
    link: 'https://www.visitluxembourg.com/en/event/echternach-dancing-procession',
    translations: {
      fr: {
        question: 'La « Procession dansante d\'Echternach » est un patrimoine culturel immatériel de l\'UNESCO. Qu\'est-ce qui la rend spéciale ?',
        options: ['Les participants dansent à reculons dans les rues', 'Elle se déroule dans un silence total', 'Les participants sautillent en procession le mardi de la Pentecôte', 'Elle implique des costumes de plus de 100 pays différents'],
        explanation: 'La Procession dansante d\'Echternach (Sprangprozessioun) a lieu chaque mardi de la Pentecôte depuis le VIIe siècle, en l\'honneur de saint Willibrord.',
      },
      de: {
        question: 'Die „Springprozession von Echternach" ist Immaterielles Kulturerbe der UNESCO. Was macht sie besonders?',
        options: ['Die Teilnehmer tanzen rückwärts durch die Straßen', 'Sie findet in völliger Stille statt', 'Teilnehmer hüpfen in einer Prozession am Pfingstdienstag', 'Sie beinhaltet Kostüme aus über 100 verschiedenen Ländern'],
        explanation: 'Die Springprozession von Echternach (Sprangprozessioun) findet seit dem 7. Jahrhundert jeden Pfingstdienstag zu Ehren des heiligen Willibrord statt.',
      },
      lb: {
        question: 'D\'« Sprangprozessioun vun Iechternach » ass UNESCO-Immateriellt Kulturierwe. Wat mécht si besonnesch?',
        options: ['D\'Participanten danzen réckwärts duerch d\'Stroossen', 'Si gëtt a völleger Stëllheet duerchgefouert', 'Participanten sprängen a Prozessioun um Péngschtdënschdeg', 'Si beinhalt Kostümer aus iwwer 100 verschiddenen Länner'],
        explanation: 'D\'Sprangprozessioun vun Iechternach fënnt zënter dem 7. Joerhonnert all Péngschtdënschdeg zu Éiree vum hellege Willibrord statt.',
      },
    },
  },
  {
    id: 'inst-7', level: 'resident', category: 'institutions',
    question: 'The ADEM is a key institution for people living in Luxembourg. What does ADEM stand for?',
    options: ['Agence pour le Développement de l\'Emploi du Monde', 'Agence pour le développement de l\'emploi', 'Administration des Entreprises et des Marchés', 'Association pour le Développement Économique et Managérial'],
    answer: 1,
    explanation: 'ADEM stands for "Agence pour le développement de l\'emploi" — Luxembourg\'s national employment agency that assists both jobseekers and employers.',
    link: 'https://adem.public.lu/en.html',
    translations: {
      fr: {
        question: 'L\'ADEM est une institution clé pour les personnes vivant au Luxembourg. Que signifie ADEM ?',
        options: ['Agence pour le Développement de l\'Emploi du Monde', 'Agence pour le développement de l\'emploi', 'Administration des Entreprises et des Marchés', 'Association pour le Développement Économique et Managérial'],
        explanation: 'ADEM signifie « Agence pour le développement de l\'emploi » — l\'agence nationale pour l\'emploi du Luxembourg qui assiste les demandeurs d\'emploi et les employeurs.',
      },
      de: {
        question: 'Die ADEM ist eine Schlüsselinstitution für Menschen in Luxemburg. Wofür steht ADEM?',
        options: ['Agence pour le Développement de l\'Emploi du Monde', 'Agence pour le développement de l\'emploi', 'Administration des Entreprises et des Marchés', 'Association pour le Développement Économique et Managérial'],
        explanation: 'ADEM steht für „Agence pour le développement de l\'emploi" — Luxemburgs nationale Arbeitsvermittlung, die Jobsuchende und Arbeitgeber unterstützt.',
      },
      lb: {
        question: 'D\'ADEM ass eng Schlëssselinstititutioun fir Leit zu Lëtzebuerg. Wofir steet ADEM?',
        options: ['Agence pour le Développement de l\'Emploi du Monde', 'Agence pour le développement de l\'emploi', 'Administration des Entreprises et des Marchés', 'Association pour le Développement Économique et Managérial'],
        explanation: 'ADEM steet fir « Agence pour le développement de l\'emploi » — Lëtzebuerg seng national Aarbechtsagentur déi Schaffe-Sichenden an Aarbechtsgiewer ënnerstëtzt.',
      },
    },
  },
  {
    id: 'econ-8', level: 'resident', category: 'economy',
    question: 'Luxembourg\'s financial centre is home to how many banks approximately?',
    options: ['Around 30', 'Around 130', 'Around 300', 'Around 1,000'],
    answer: 1,
    explanation: 'Luxembourg hosts around 130 banks from over 25 countries, making it one of Europe\'s leading banking centres, particularly for private banking, custody, and cross-border investment funds.',
    link: 'https://luxembourg.public.lu/en/entreprises/faire-affaire.html',
    translations: {
      fr: {
        question: 'Le centre financier du Luxembourg compte combien de banques environ ?',
        options: ['Environ 30', 'Environ 130', 'Environ 300', 'Environ 1 000'],
        explanation: 'Le Luxembourg accueille environ 130 banques de plus de 25 pays, ce qui en fait l\'un des principaux centres bancaires européens, notamment pour la banque privée, la conservation et les fonds d\'investissement transfrontaliers.',
      },
      de: {
        question: 'Wie viele Banken beherbergt das luxemburgische Finanzzentrum ungefähr?',
        options: ['Etwa 30', 'Etwa 130', 'Etwa 300', 'Etwa 1.000'],
        explanation: 'Luxemburg beherbergt rund 130 Banken aus über 25 Ländern und ist damit eines der führenden europäischen Bankzentren, insbesondere für Privatbanking, Verwahrung und grenzüberschreitende Investmentfonds.',
      },
      lb: {
        question: 'Wéi vill Banken huscht den Lëtzebuerger Finanzzentrum ongeféier?',
        options: ['Ongeféier 30', 'Ongeféier 130', 'Ongeféier 300', 'Ongeféier 1.000'],
        explanation: 'Lëtzebuerg huscht ongeféier 130 Banken aus iwwer 25 Länner, wat et zu engem vun de féierenden europäesche Bankzentren mécht, besonnesch fir Privatbanking, Kustodie a grenziwwerschreidend Investitiounsfonds.',
      },
    },
  },
  {
    id: 'r-lang-2', level: 'resident', category: 'language',
    question: 'What does "Lëtzebuerg" (the Luxembourgish name for Luxembourg) roughly translate to?',
    options: ['The Little Fortress', 'The Land of Lions', 'The Green Valley', 'The Iron Bridge'],
    answer: 0,
    explanation: '"Lëtzebuerg" derives from "Lucilinburhuc" meaning "Little Fortress" in Old High German — a reference to the castle built by Sigefroid in 963 on the Bock rock.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'Que signifie approximativement « Lëtzebuerg » (le nom luxembourgeois du Luxembourg) ?',
        options: ['La petite forteresse', 'Le pays des lions', 'La verte vallée', 'Le pont de fer'],
        explanation: '« Lëtzebuerg » dérive de « Lucilinburhuc » signifiant « Petite Forteresse » en vieux haut-allemand — une référence au château construit par Sigefroid en 963 sur le Bock.',
      },
      de: {
        question: 'Was bedeutet „Lëtzebuerg" (der luxemburgische Name für Luxemburg) ungefähr?',
        options: ['Die kleine Festung', 'Das Land der Löwen', 'Das grüne Tal', 'Die eiserne Brücke'],
        explanation: '„Lëtzebuerg" leitet sich von „Lucilinburhuc" ab, was „Kleine Festung" im Althochdeutschen bedeutet — eine Anspielung auf die Burg, die Sigefroid 963 auf dem Bock errichtete.',
      },
      lb: {
        question: 'Wat bedeit ongeféier « Lëtzebuerg » (den Lëtzebuerger Numm fir Lëtzebuerg)?',
        options: ['Déi kleng Festung', 'D\'Land vun de Léiwen', 'D\'greng Dallänner', 'Déi eisen Bréck'],
        explanation: '« Lëtzebuerg » kënnt vum « Lucilinburhuc » wat « Kleng Festung » op Aalt-Héichdäitsch bedeit — eng Referenz un d\'Burg déi Sigefroid 963 um Bock gebaut huet.',
      },
    },
  },
  {
    id: 'r-hist-2', level: 'resident', category: 'history',
    question: 'John the Blind (Jean l\'Aveugle), Count of Luxembourg, died in which famous battle?',
    options: ['Battle of Waterloo (1815)', 'Battle of Crécy (1346)', 'Battle of Agincourt (1415)', 'Battle of the Bulge (1944)'],
    answer: 1,
    explanation: 'John the Blind (1296–1346), King of Bohemia and Count of Luxembourg, died heroically at the Battle of Crécy fighting for France despite being blind. His motto "Ich dien" (I serve) was adopted by the Prince of Wales.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'Jean l\'Aveugle, comte de Luxembourg, est mort lors de quelle célèbre bataille ?',
        options: ['Bataille de Waterloo (1815)', 'Bataille de Crécy (1346)', 'Bataille d\'Azincourt (1415)', 'Bataille des Ardennes (1944)'],
        explanation: 'Jean l\'Aveugle (1296–1346), roi de Bohême et comte de Luxembourg, mourut héroïquement à la bataille de Crécy en combattant pour la France malgré sa cécité. Sa devise « Ich dien » (Je sers) fut adoptée par le prince de Galles.',
      },
      de: {
        question: 'Johann der Blinde, Graf von Luxemburg, starb in welcher berühmten Schlacht?',
        options: ['Schlacht bei Waterloo (1815)', 'Schlacht bei Crécy (1346)', 'Schlacht bei Azincourt (1415)', 'Ardennenoffensive (1944)'],
        explanation: 'Johann der Blinde (1296–1346), König von Böhmen und Graf von Luxemburg, fiel heroisch in der Schlacht bei Crécy für Frankreich, obwohl er blind war. Sein Motto „Ich dien" (Ich diene) wurde vom Prinzen von Wales übernommen.',
      },
      lb: {
        question: 'Jean den Blënnen, Grof vu Lëtzebuerg, ass a wéi enger berühmter Schluecht gestuerwen?',
        options: ['Schluecht vu Waterloo (1815)', 'Schluecht vu Crécy (1346)', 'Schluecht vun Azincourt (1415)', 'Ardenneschlacht (1944)'],
        explanation: 'Jean den Blënnen (1296–1346), Kinnek vu Böhmen a Grof vu Lëtzebuerg, ass heroësch an der Schluecht vu Crécy fir Frankräich gefall, och wann hie blënn war. Seng Devise « Ich dien » (Ech déngen) gouf vum Prënz vu Wales iwwerholl.',
      },
    },
  },
  // sub-level 5
  {
    id: 'r-cult-2', level: 'resident', category: 'culture',
    question: 'What is the Philharmonie Luxembourg known for?',
    options: ['It is Luxembourg\'s national art museum', 'It is a major concert hall on Kirchberg, home of the OPL', 'It is the national theatre of Luxembourg', 'It is an outdoor music festival venue in Esch'],
    answer: 1,
    explanation: 'The Philharmonie Luxembourg, opened in 2005 and designed by Christian de Portzamparc, is one of Europe\'s finest concert halls. It is the home of the Orchestre Philharmonique du Luxembourg (OPL).',
    link: 'https://www.philharmonie.lu/en/',
    translations: {
      fr: {
        question: 'Pour quoi la Philharmonie Luxembourg est-elle connue ?',
        options: ['C\'est le musée national d\'art du Luxembourg', 'C\'est une grande salle de concert sur le Kirchberg, siège de l\'OPL', 'C\'est le théâtre national du Luxembourg', 'C\'est un lieu de festival de musique en plein air à Esch'],
        explanation: 'La Philharmonie Luxembourg, inaugurée en 2005 et conçue par Christian de Portzamparc, est l\'une des plus belles salles de concert d\'Europe. C\'est le siège de l\'Orchestre Philharmonique du Luxembourg (OPL).',
      },
      de: {
        question: 'Wofür ist die Philharmonie Luxemburg bekannt?',
        options: ['Sie ist Luxemburgs nationales Kunstmuseum', 'Sie ist eine große Konzerthalle auf dem Kirchberg, Heimat des OPL', 'Sie ist das Nationaltheater Luxemburgs', 'Sie ist ein Open-Air-Musikfestivalgelände in Esch'],
        explanation: 'Die 2005 eröffnete und von Christian de Portzamparc entworfene Philharmonie Luxembourg ist eine der feinsten Konzerthallen Europas. Sie ist die Heimat des Orchestre Philharmonique du Luxembourg (OPL).',
      },
      lb: {
        question: 'Wofir ass d\'Philharmonie Lëtzebuerg bekannt?',
        options: ['Si ass Lëtzebuerg säi nationales Konschtmusée', 'Si ass eng grouss Konzertsaal um Kirchberg, Heem vum OPL', 'Si ass den nationale Theater vu Lëtzebuerg', 'Si ass en Open-Air-Musekfestival zu Esch'],
        explanation: 'D\'Philharmonie Lëtzebuerg, 2005 opgemaach a vum Christian de Portzamparc entworfen, ass eng vun de schéinste Konzertsäll an Europa. Si ass d\'Heem vum Orchestre Philharmonique du Luxembourg (OPL).',
      },
    },
  },
  {
    id: 'r-peop-2', level: 'resident', category: 'people',
    question: 'Henri Funck was a prominent 19th-century Luxembourg artist. What was he known for?',
    options: ['Landscape paintings of the Alzette valley and Luxembourg City', 'Portraits of the Grand Ducal family', 'Impressionist scenes of the Moselle', 'Abstract sculptures in the national park'],
    answer: 0,
    explanation: 'Henri Funck (1842–1911) is celebrated for his detailed landscape paintings and watercolours of Luxembourg City and the Alzette valley, providing an invaluable visual record of 19th-century Luxembourg.',
    link: 'https://luxembourg.public.lu/en/culture/patrimoine-culturel.html',
    translations: {
      fr: {
        question: 'Henri Funck était un important artiste luxembourgeois du XIXe siècle. Pour quoi était-il connu ?',
        options: ['Peintures de paysages de la vallée de l\'Alzette et de Luxembourg-Ville', 'Portraits de la famille grand-ducale', 'Scènes impressionnistes de la Moselle', 'Sculptures abstraites dans le parc national'],
        explanation: 'Henri Funck (1842–1911) est célébré pour ses peintures détaillées et aquarelles de Luxembourg-Ville et de la vallée de l\'Alzette, offrant un précieux témoignage visuel du Luxembourg du XIXe siècle.',
      },
      de: {
        question: 'Henri Funck war ein bedeutender luxemburgischer Künstler des 19. Jahrhunderts. Wofür war er bekannt?',
        options: ['Landschaftsgemälde des Alzette-Tals und Luxemburg-Stadts', 'Porträts der Großherzoglichen Familie', 'Impressionistische Moselszenen', 'Abstrakte Skulpturen im Nationalpark'],
        explanation: 'Henri Funck (1842–1911) ist für seine detaillierten Landschaftsgemälde und Aquarelle von Luxemburg-Stadt und dem Alzette-Tal bekannt — ein unschätzbares Bilddokument des Luxemburgs im 19. Jahrhundert.',
      },
      lb: {
        question: 'Henri Funck war e wichtegen Lëtzebuerger Kënschtler vum 19. Joerhonnert. Wofir war hien bekannt?',
        options: ['Landschaftsmolereen vum Alzette-Dall a Lëtzebuerg-Stad', 'Portraiten vun der Groussherzoglecher Famill', 'Impressionistesch Moselszenen', 'Abstrakt Skulpturen am Nationalpark'],
        explanation: 'Henri Funck (1842–1911) ass fir seng detailléiert Landschaftsmolereen an Aquarellen vu Lëtzebuerg-Stad an dem Alzette-Dall bekannt — en onschätzbare visuellen Zeugnis vum Lëtzebuerg vum 19. Joerhonnert.',
      },
    },
  },
  {
    id: 'r-inst-2', level: 'resident', category: 'institutions',
    question: 'What is the role of the "Chambre des Salariés" (CSL) in Luxembourg?',
    options: ['It is the parliament', 'It is a mandatory consultative body representing employees\' interests', 'It manages social security contributions', 'It is the employers\' federation'],
    answer: 1,
    explanation: 'The Chambre des Salariés (CSL) is a mandatory body representing the interests of employees in Luxembourg. All salaried workers are automatically members. It advises parliament on social and economic legislation.',
    link: 'https://luxembourg.public.lu/en/vivre/emploi.html',
    translations: {
      fr: {
        question: 'Quel est le rôle de la « Chambre des Salariés » (CSL) au Luxembourg ?',
        options: ['C\'est le parlement', 'C\'est un organe consultatif obligatoire représentant les intérêts des salariés', 'Elle gère les cotisations de sécurité sociale', 'C\'est la fédération des employeurs'],
        explanation: 'La Chambre des Salariés (CSL) est un organe obligatoire représentant les intérêts des salariés au Luxembourg. Tous les travailleurs salariés en sont membres automatiquement. Elle conseille le parlement sur la législation sociale et économique.',
      },
      de: {
        question: 'Was ist die Rolle der „Chambre des Salariés" (CSL) in Luxemburg?',
        options: ['Sie ist das Parlament', 'Sie ist ein obligatorisches Beratungsgremium zur Vertretung der Arbeitnehmerinteressen', 'Sie verwaltet die Sozialversicherungsbeiträge', 'Sie ist der Arbeitgeberverband'],
        explanation: 'Die Chambre des Salariés (CSL) ist ein obligatorisches Gremium, das die Interessen der Arbeitnehmer in Luxemburg vertritt. Alle Lohnempfänger sind automatisch Mitglieder. Sie berät das Parlament zu Sozial- und Wirtschaftsgesetzen.',
      },
      lb: {
        question: 'Wat ass d\'Roll vun der « Chambre des Salariés » (CSL) zu Lëtzebuerg?',
        options: ['Si ass de Parlament', 'Si ass en obligatorescht beratendes Orgaan dat d\'Interessen vun den Aarbechter représentéiert', 'Si verwaltet d\'Sozialversécheroungsbäiträg', 'Si ass d\'Patronatsverband'],
        explanation: 'D\'Chambre des Salariés (CSL) ass en obligatorescht Orgaan dat d\'Interessen vun den Aarbechter zu Lëtzebuerg représentéiert. All Lounempfänger sinn automatesch Memberen. Si berät de Parlament zu sozialer a wirtschaftlecher Gesetzgebung.',
      },
    },
  },
  {
    id: 'r-econ-2', level: 'resident', category: 'economy',
    question: 'What is the "Minette" region in southern Luxembourg?',
    options: ['A wine-producing area along the Moselle', 'The historical iron ore and steel belt', 'A nature reserve in the Ardennes', 'A suburb of Luxembourg City'],
    answer: 1,
    explanation: 'The Minette (or "terres rouges") is Luxembourg\'s southern iron ore and steel belt. Its red iron-rich soils fuelled the steel industry from the 1870s. Today the region is being reinvented as a cultural and tech hub (notably Belval).',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'Qu\'est-ce que la région « Minette » dans le sud du Luxembourg ?',
        options: ['Une zone viticole le long de la Moselle', 'La ceinture historique de minerai de fer et d\'acier', 'Une réserve naturelle dans les Ardennes', 'Une banlieue de Luxembourg-Ville'],
        explanation: 'La Minette (ou « terres rouges ») est la ceinture sud luxembourgeoise de minerai de fer et d\'acier. Ses sols rouges riches en fer ont alimenté l\'industrie sidérurgique à partir des années 1870. Aujourd\'hui la région se réinvente comme pôle culturel et technologique (notamment Belval).',
      },
      de: {
        question: 'Was ist die „Minette"-Region im Süden Luxemburgs?',
        options: ['Ein Weinanbaugebiet entlang der Mosel', 'Der historische Eisenerz- und Stahlgürtel', 'Ein Naturschutzgebiet in den Ardennen', 'Ein Vorort von Luxemburg-Stadt'],
        explanation: 'Die Minette (oder „terres rouges") ist Luxemburgs südlicher Eisenerz- und Stahlgürtel. Seine eisenreichen roten Böden trieben die Stahlindustrie ab den 1870er Jahren an. Heute wird die Region als Kultur- und Technologiezentrum (insbesondere Belval) neu erfunden.',
      },
      lb: {
        question: 'Wat ass d\'« Minette »-Regioun am Süden vu Lëtzebuerg?',
        options: ['En Wäinbaugebitt laanscht d\'Musel', 'Den historesche Eisenouerz- a Steelgürtel', 'En Naturschutzgebitt an den Ardenen', 'Eng Randstad vu Lëtzebuerg-Stad'],
        explanation: 'D\'Minette (oder « terres rouges ») ass Lëtzebuerg säi südlechen Eisenouerz- a Steelgürtel. Seng eeseräich rout Bieden hunn d\'Steelindustrie ab den 1870er Joer ugedriwwen. Haut gëtt d\'Regioun als Kultur- a Technologiehub (besonnesch Belval) nei erfonnt.',
      },
    },
  },
  {
    id: 'r-lang-3', level: 'resident', category: 'language',
    question: 'Which Luxembourgish TV and radio broadcaster was founded in 1929?',
    options: ['RTL (Radio Télévision Luxembourg)', 'LuxMedia', 'TNT Luxembourg', 'Canal Luxembourg'],
    answer: 0,
    explanation: 'RTL (Radio Télévision Luxembourg) traces its origins to 1929 and became one of Europe\'s most influential commercial broadcasters. The RTL Group, now headquartered in Luxembourg, is a major European media company.',
    link: 'https://luxembourg.public.lu/en/culture.html',
    translations: {
      fr: {
        question: 'Quel radiodiffuseur luxembourgeois de télévision et de radio a été fondé en 1929 ?',
        options: ['RTL (Radio Télévision Luxembourg)', 'LuxMedia', 'TNT Luxembourg', 'Canal Luxembourg'],
        explanation: 'RTL (Radio Télévision Luxembourg) remonte à 1929 et est devenu l\'un des radiodiffuseurs commerciaux les plus influents d\'Europe. RTL Group, dont le siège est désormais au Luxembourg, est un important groupe de médias européen.',
      },
      de: {
        question: 'Welcher luxemburgische Fernseh- und Radiosender wurde 1929 gegründet?',
        options: ['RTL (Radio Télévision Luxembourg)', 'LuxMedia', 'TNT Luxemburg', 'Canal Luxemburg'],
        explanation: 'RTL (Radio Télévision Luxembourg) geht auf das Jahr 1929 zurück und wurde einer der einflussreichsten kommerziellen Sender Europas. Die RTL Group mit Sitz in Luxemburg ist ein bedeutendes europäisches Medienunternehmen.',
      },
      lb: {
        question: 'Wéi ee Lëtzebuerger Fernseh- a Radiosender gouf 1929 gegrënnt?',
        options: ['RTL (Radio Télévision Luxembourg)', 'LuxMedia', 'TNT Lëtzebuerg', 'Canal Lëtzebuerg'],
        explanation: 'RTL (Radio Télévision Luxembourg) geet op 1929 zeréck a gouf een vun de meescht aflossräiche kommerzielle Sender vun Europa. D\'RTL Group, mat Sëtz zu Lëtzebuerg, ass e wichtegt europäescht Medienunternehmen.',
      },
    },
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
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html',
    translations: {
      fr: {
        question: 'À quoi fait référence « D\'Lëtzebuerger Sprooch » ?',
        options: ['Le dialecte luxembourgeois du français', 'La langue luxembourgeoise elle-même', 'La langue juridique officielle du Luxembourg', 'Un programme scolaire de langue luxembourgeoise'],
        explanation: '« D\'Lëtzebuerger Sprooch » signifie simplement « la langue luxembourgeoise ». La langue possède un alphabet unique incluant le ë (e-tréma), absent de l\'allemand standard.',
      },
      de: {
        question: 'Worauf bezieht sich „D\'Lëtzebuerger Sprooch"?',
        options: ['Der luxemburgische Dialekt des Französischen', 'Die luxemburgische Sprache selbst', 'Die offizielle Rechtssprache Luxemburgs', 'Ein luxemburgisches Schulsprachprogramm'],
        explanation: '„D\'Lëtzebuerger Sprooch" bedeutet einfach „die luxemburgische Sprache". Die Sprache hat ein einzigartiges Alphabet mit dem ë (e-Umlaut), das im Standarddeutschen nicht vorkommt.',
      },
      lb: {
        question: 'Worops bezitt sech « D\'Lëtzebuerger Sprooch »?',
        options: ['Den Lëtzebuerger Dialekt vum Franséischen', 'D\'Lëtzebuerger Sprooch selwer', 'Déi offiziell juristesch Sprooch vu Lëtzebuerg', 'E Lëtzebuerger Schoulspriechprogramm'],
        explanation: '« D\'Lëtzebuerger Sprooch » bedeit einfach « d\'Lëtzebuerger Sprooch ». D\'Sprooch huet en eenzegaartegen Alphabet mat dem ë (e-Umlaut), deen am Standard-Däitschen net ze fanne ass.',
      },
    },
  },
  {
    id: 'hist-7', level: 'citizen', category: 'history',
    question: 'Luxembourg became a Grand Duchy under which royal house at the Congress of Vienna (1815)?',
    options: ['Habsburg', 'Nassau-Weilburg', 'Bourbon', 'Hohenzollern'],
    answer: 1,
    explanation: 'At the Congress of Vienna in 1815, Luxembourg became a Grand Duchy under the House of Nassau-Weilburg (later Nassau-Weilburg-Orange), which remains the ruling dynasty today.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'Le Luxembourg est devenu un Grand-Duché sous quelle maison royale lors du Congrès de Vienne (1815) ?',
        options: ['Habsbourg', 'Nassau-Weilburg', 'Bourbon', 'Hohenzollern'],
        explanation: 'Au Congrès de Vienne en 1815, le Luxembourg est devenu un Grand-Duché sous la maison de Nassau-Weilburg (plus tard Nassau-Weilburg-Orange), qui reste la dynastie régnante aujourd\'hui.',
      },
      de: {
        question: 'Unter welchem Königshaus wurde Luxemburg beim Wiener Kongress (1815) ein Großherzogtum?',
        options: ['Habsburg', 'Nassau-Weilburg', 'Bourbon', 'Hohenzollern'],
        explanation: 'Beim Wiener Kongress 1815 wurde Luxemburg unter dem Haus Nassau-Weilburg (später Nassau-Weilburg-Orange) ein Großherzogtum, das bis heute die regierende Dynastie ist.',
      },
      lb: {
        question: 'Ënner wéi engem Kinnigshaus gouf Lëtzebuerg beim Wiener Kongress (1815) e Groussherzogtum?',
        options: ['Habsburg', 'Nassau-Weilburg', 'Bourbon', 'Hohenzollern'],
        explanation: 'Beim Wiener Kongress 1815 gouf Lëtzebuerg ënner dem Haus Nassau-Weilburg (méi spéit Nassau-Weilburg-Orange) e Groussherzogtum, dat bis haut d\'herrschend Dynasti ass.',
      },
    },
  },
  {
    id: 'cult-7', level: 'citizen', category: 'culture',
    question: 'Luxembourg City was a European Capital of Culture in which year?',
    options: ['1988', '1995', '2007', '2012'],
    answer: 2,
    explanation: 'Luxembourg (together with the Greater Region) was European Capital of Culture in 2007. The event spurred major cultural investment, including the Philharmonie and Mudam (Museum of Modern Art).',
    link: 'https://luxembourg.public.lu/en/culture.html',
    translations: {
      fr: {
        question: 'Luxembourg-Ville a été Capitale européenne de la Culture en quelle année ?',
        options: ['1988', '1995', '2007', '2012'],
        explanation: 'Luxembourg (avec la Grande Région) était Capitale européenne de la Culture en 2007. L\'événement a suscité d\'importants investissements culturels, dont la Philharmonie et le Mudam.',
      },
      de: {
        question: 'In welchem Jahr war Luxemburg-Stadt Europäische Kulturhauptstadt?',
        options: ['1988', '1995', '2007', '2012'],
        explanation: 'Luxemburg (zusammen mit der Großregion) war 2007 Europäische Kulturhauptstadt. Das Ereignis löste erhebliche Kulturinvestitionen aus, darunter die Philharmonie und das Mudam.',
      },
      lb: {
        question: 'A wéi engem Joer war Lëtzebuerg-Stad Europäesch Kulturhaaptstad?',
        options: ['1988', '1995', '2007', '2012'],
        explanation: 'Lëtzebuerg (zesumme mat der Groussregioun) war 2007 Europäesch Kulturhaaptstad. D\'Evenement huet bedeitend kulturell Investissementer ausgeléist, dorënner d\'Philharmonie an de Mudam.',
      },
    },
  },
  {
    id: 'peop-7', level: 'citizen', category: 'people',
    question: 'Grand Duchess Charlotte reigned from 1919 to 1964. Who succeeded her?',
    options: ['Grand Duke Henri', 'Grand Duke Jean', 'Grand Duke Adolphe', 'Grand Duke Guillaume IV'],
    answer: 1,
    explanation: 'Grand Duke Jean succeeded his mother Charlotte in 1964 and reigned until 2000, when he abdicated in favour of his son Henri. Jean\'s reign of 36 years was a period of major economic growth.',
    link: 'https://luxembourg.public.lu/en/gouvernement/maison-grand-ducale.html',
    translations: {
      fr: {
        question: 'La grande-duchesse Charlotte a régné de 1919 à 1964. Qui lui a succédé ?',
        options: ['Grand-Duc Henri', 'Grand-Duc Jean', 'Grand-Duc Adolphe', 'Grand-Duc Guillaume IV'],
        explanation: 'Le grand-duc Jean a succédé à sa mère Charlotte en 1964 et a régné jusqu\'en 2000, date à laquelle il a abdiqué en faveur de son fils Henri. Le règne de 36 ans de Jean a été une période de forte croissance économique.',
      },
      de: {
        question: 'Großherzogin Charlotte regierte von 1919 bis 1964. Wer folgte ihr nach?',
        options: ['Großherzog Henri', 'Großherzog Jean', 'Großherzog Adolphe', 'Großherzog Guillaume IV'],
        explanation: 'Großherzog Jean folgte seiner Mutter Charlotte 1964 und regierte bis 2000, als er zugunsten seines Sohnes Henri abdankte. Jeans 36-jährige Regentschaft war eine Zeit starken Wirtschaftswachstums.',
      },
      lb: {
        question: 'Groussherzogin Charlotte huet vu 1919 bis 1964 regéiert. Wien huet si ofgeléist?',
        options: ['Groussherzog Henri', 'Groussherzog Jean', 'Groussherzog Adolphe', 'Groussherzog Guillaume IV'],
        explanation: 'Groussherzog Jean huet seng Mamm Charlotte 1964 ofgeléist a bis 2000 regéiert, wou hien zugunsten vu sengem Jong Henri ofgedankt huet. Jeans 36-jährige Regentschaft war eng Period vu staarkem wirtschaftleche Wuesstem.',
      },
    },
  },
  {
    id: 'inst-8', level: 'citizen', category: 'institutions',
    question: 'The Court of Justice of the EU (CJEU) has its seat in Luxembourg. What is its main role?',
    options: ['To prosecute criminals across the EU', 'To ensure EU law is interpreted and applied uniformly in all member states', 'To manage the EU\'s budget disputes', 'To arbitrate trade disputes with non-EU countries'],
    answer: 1,
    explanation: 'The CJEU ensures EU law is interpreted and applied uniformly across all member states. It rules on cases involving EU institutions, member states, businesses, and individuals.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/institutions-europeennes.html',
    translations: {
      fr: {
        question: 'La Cour de justice de l\'UE (CJUE) siège au Luxembourg. Quel est son principal rôle ?',
        options: ['Poursuivre les criminels dans l\'UE', 'Assurer une interprétation et une application uniformes du droit de l\'UE dans tous les États membres', 'Gérer les litiges budgétaires de l\'UE', 'Arbitrer les litiges commerciaux avec les pays non membres de l\'UE'],
        explanation: 'La CJUE veille à ce que le droit de l\'UE soit interprété et appliqué uniformément dans tous les États membres. Elle statue sur les affaires impliquant les institutions de l\'UE, les États membres, les entreprises et les particuliers.',
      },
      de: {
        question: 'Der Gerichtshof der EU (EuGH) hat seinen Sitz in Luxemburg. Was ist seine Hauptaufgabe?',
        options: ['Kriminelle in der EU zu verfolgen', 'Die einheitliche Auslegung und Anwendung des EU-Rechts in allen Mitgliedstaaten zu gewährleisten', 'EU-Haushaltsstreitigkeiten zu verwalten', 'Handelsstreitigkeiten mit Nicht-EU-Ländern zu schlichten'],
        explanation: 'Der EuGH gewährleistet, dass das EU-Recht in allen Mitgliedstaaten einheitlich ausgelegt und angewendet wird. Er entscheidet über Fälle mit EU-Institutionen, Mitgliedstaaten, Unternehmen und Einzelpersonen.',
      },
      lb: {
        question: 'Den Europäesche Geriichtshaff (CJEU) huet säi Sëtz zu Lëtzebuerg. Wat ass seng Haaptroll?',
        options: ['Krimineller an der EU ze verfolgen', 'Eng eenheitlech Auslegung an Uwendung vum EU-Recht an alle Memberstaaten ze garantéieren', 'EU-Budgetstriddeghkeeten ze verwalten', 'Handelsstriddeghkeeten mat net-EU-Länner ze schlichten'],
        explanation: 'Den CJEU garantéiert datt d\'EU-Recht an all Memberstaate eenheitlech ausgeluecht a ugewannt gëtt. Hien entscheet iwwer Fäll mat EU-Institutiounen, Memberstaaten, Betriber a Privatleit.',
      },
    },
  },
  // sub-level 2
  {
    id: 'c-econ-1', level: 'citizen', category: 'economy',
    question: 'What is the "tripartite" social dialogue model in Luxembourg?',
    options: ['A three-language requirement for all civil servants', 'A consultation framework between government, employers, and trade unions', 'A three-tier tax system for residents, non-residents, and corporations', 'A three-party coalition government system'],
    answer: 1,
    explanation: 'Luxembourg\'s "tripartite" model brings together the government, employer organisations (like UEL), and trade unions (OGBL, LCGB) to negotiate economic and social policy — a cornerstone of Luxembourg\'s social harmony.',
    link: 'https://luxembourg.public.lu/en/vivre/emploi.html',
    translations: {
      fr: {
        question: 'Qu\'est-ce que le modèle de dialogue social « tripartite » au Luxembourg ?',
        options: ['Une exigence trilingue pour tous les fonctionnaires', 'Un cadre de concertation entre gouvernement, employeurs et syndicats', 'Un système fiscal à trois niveaux pour résidents, non-résidents et entreprises', 'Un système gouvernemental de coalition à trois partis'],
        explanation: 'Le modèle « tripartite » luxembourgeois réunit le gouvernement, les organisations patronales (comme l\'UEL) et les syndicats (OGBL, LCGB) pour négocier la politique économique et sociale — pierre angulaire de l\'harmonie sociale luxembourgeoise.',
      },
      de: {
        question: 'Was ist das „tripartite" Sozialdialogmodell in Luxemburg?',
        options: ['Eine Dreisprachigkeitspflicht für alle Beamten', 'Ein Konsultationsrahmen zwischen Regierung, Arbeitgebern und Gewerkschaften', 'Ein dreistufiges Steuersystem für Einwohner, Nicht-Einwohner und Unternehmen', 'Ein Dreiparteienkoalitionsregierungssystem'],
        explanation: 'Luxemburgs „tripartites" Modell bringt Regierung, Arbeitgeberverbände (wie UEL) und Gewerkschaften (OGBL, LCGB) zur Aushandlung von Wirtschafts- und Sozialpolitik zusammen — ein Grundpfeiler von Luxemburgs sozialer Harmonie.',
      },
      lb: {
        question: 'Wat ass d\'« tripartite »-Sozialdialogmodell zu Lëtzebuerg?',
        options: ['Eng Dräisprochenflicht fir all Beamten', 'En Konsultatiounsrahmen tëschent Regierung, Aarbechtsgiewer a Gewerkschaften', 'En dräistufegt Steiersystem fir Awunner, Net-Awunner a Betriber', 'E Koalitiounsregierungssystem mat dräi Parteien'],
        explanation: 'Lëtzebuerg säin « tripartite »-Modell bréngt d\'Regierung, Patronatsorganisatiounen (wéi UEL) a Gewerkschaften (OGBL, LCGB) zesummen fir Wirtschafts- a Sozialpolitik ze verhandelen — e Grondpfeiler vu Lëtzebuerg senger sozialer Harmonie.',
      },
    },
  },
  {
    id: 'lang-8', level: 'citizen', category: 'language',
    question: 'What does "Merci villmools" mean in Luxembourgish?',
    options: ['You\'re welcome', 'Thank you very much', 'Excuse me', 'Please'],
    answer: 1,
    explanation: '"Merci villmools" combines the French "merci" with the Luxembourgish "villmools" (many times). This blend of French and Germanic is typical of Luxembourgish.',
    link: null,
    translations: {
      fr: {
        question: 'Que signifie « Merci villmools » en luxembourgeois ?',
        options: ['De rien', 'Merci beaucoup', 'Excusez-moi', 'S\'il vous plaît'],
        explanation: '« Merci villmools » combine le français « merci » avec le luxembourgeois « villmools » (plusieurs fois). Ce mélange franco-germanique est typique du luxembourgeois.',
      },
      de: {
        question: 'Was bedeutet „Merci villmools" auf Luxemburgisch?',
        options: ['Bitte sehr', 'Vielen Dank', 'Entschuldigung', 'Bitte'],
        explanation: '„Merci villmools" kombiniert das französische „merci" mit dem luxemburgischen „villmools" (viele Male). Diese Mischung ist typisch für Luxemburgisch.',
      },
      lb: {
        question: 'Wat bedeit « Merci villmools » op Lëtzebuergesch?',
        options: ['Gär geschitt', 'Villmools Merci', 'Entschëlleg', 'Wann ech gelift'],
        explanation: '« Merci villmools » kombinéiert dat franséischt « merci » mat dem Lëtzebuerger « villmools » (vill Mol). Dës Mëschung ass typesch fir Lëtzebuergesch.',
      },
    },
  },
  {
    id: 'hist-8', level: 'citizen', category: 'history',
    question: 'In which century did the House of Luxembourg produce four Holy Roman Emperors?',
    options: ['11th century', '12th century', '14th–15th centuries', '16th century'],
    answer: 2,
    explanation: 'The House of Luxembourg produced four Holy Roman Emperors in the 14th and early 15th centuries: Henry VII, Charles IV, Wenceslaus, and Sigismund — a remarkable period of European political dominance.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'Au cours de quel siècle la maison de Luxembourg a-t-elle produit quatre empereurs du Saint-Empire romain germanique ?',
        options: ['XIe siècle', 'XIIe siècle', 'XIVe–XVe siècles', 'XVIe siècle'],
        explanation: 'La maison de Luxembourg a produit quatre empereurs du Saint-Empire romain germanique aux XIVe et début XVe siècles : Henri VII, Charles IV, Venceslas et Sigismond — une remarquable période de domination politique européenne.',
      },
      de: {
        question: 'In welchem Jahrhundert brachte das Haus Luxemburg vier Heilige Römische Kaiser hervor?',
        options: ['11. Jahrhundert', '12. Jahrhundert', '14.–15. Jahrhundert', '16. Jahrhundert'],
        explanation: 'Das Haus Luxemburg brachte im 14. und frühen 15. Jahrhundert vier Heilige Römische Kaiser hervor: Heinrich VII., Karl IV., Wenzel und Sigismund — eine bemerkenswerte Periode europäischer politischer Dominanz.',
      },
      lb: {
        question: 'An wéi engem Joerhonnert huet dat Haus Lëtzebuerg véier Hellege Réimesch Kaiser ervirbréngt?',
        options: ['11. Joerhonnert', '12. Joerhonnert', '14.–15. Joerhonnert', '16. Joerhonnert'],
        explanation: 'D\'Haus Lëtzebuerg huet am 14. a fréien 15. Joerhonnert véier Hellege Réimesch Kaiser ervirbréngt: Heinrich VII., Karl IV., Wenceslaus a Sigismund — eng bemierkenswäert Period vun europäescher politescher Dominanz.',
      },
    },
  },
  {
    id: 'c-cult-1', level: 'citizen', category: 'culture',
    question: 'What is the Mudam (Musée d\'Art Moderne Grand-Duc Jean)?',
    options: ['A natural history museum in Vianden', 'Luxembourg\'s national modern and contemporary art museum on Kirchberg', 'A medieval castle museum in the Alzette valley', 'A science and technology museum in Belval'],
    answer: 1,
    explanation: 'The Mudam, designed by I.M. Pei (architect of the Louvre Pyramid), opened in 2006 on Kirchberg. It is Luxembourg\'s national museum of modern and contemporary art and hosts international exhibitions.',
    link: 'https://www.mudam.com/en/',
    translations: {
      fr: {
        question: 'Qu\'est-ce que le Mudam (Musée d\'Art Moderne Grand-Duc Jean) ?',
        options: ['Un musée d\'histoire naturelle à Vianden', 'Le musée national d\'art moderne et contemporain du Luxembourg sur le Kirchberg', 'Un musée de château médiéval dans la vallée de l\'Alzette', 'Un musée des sciences et technologies à Belval'],
        explanation: 'Le Mudam, conçu par I.M. Pei (architecte de la Pyramide du Louvre), a ouvert en 2006 sur le Kirchberg. C\'est le musée national d\'art moderne et contemporain du Luxembourg.',
      },
      de: {
        question: 'Was ist das Mudam (Musée d\'Art Moderne Grand-Duc Jean)?',
        options: ['Ein Naturkundemuseum in Vianden', 'Luxemburgs nationales Museum für moderne und zeitgenössische Kunst auf dem Kirchberg', 'Ein mittelalterliches Schlossmuseum im Alzette-Tal', 'Ein Wissenschafts- und Technologiemuseum in Belval'],
        explanation: 'Das Mudam, entworfen von I.M. Pei (Architekt der Louvre-Pyramide), öffnete 2006 auf dem Kirchberg. Es ist Luxemburgs nationales Museum für moderne und zeitgenössische Kunst.',
      },
      lb: {
        question: 'Wat ass de Mudam (Musée d\'Art Moderne Grand-Duc Jean)?',
        options: ['En Naturgeschichtsmusée zu Vianden', 'Lëtzebuerg säi nationales Museum fir modern a zäitgenëssesch Konscht um Kirchberg', 'En mëttelalterlecht Schleessmusée am Alzette-Dall', 'En Wëssenschaft- a Technologiemusée zu Belval'],
        explanation: 'De Mudam, entworfen vum I.M. Pei (Architekt vun der Louvre-Pyramide), huet 2006 um Kirchberg opgemaach. Et ass Lëtzebuerg säi nationales Museum fir modern a zäitgenëssesch Konscht.',
      },
    },
  },
  {
    id: 'c-peop-1', level: 'citizen', category: 'people',
    question: 'Josy Barthel\'s 1952 Olympic gold is still Luxembourg\'s only Olympic gold. What event did he win?',
    options: ['800m', '1500m', '5000m', 'Marathon'],
    answer: 1,
    explanation: 'Josy Barthel won the 1500m at the Helsinki 1952 Olympics in a world-record-equalling 3:45.2. The national athletics stadium in Luxembourg City is named after him.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'La médaille d\'or olympique de Josy Barthel en 1952 reste la seule du Luxembourg. Quelle épreuve a-t-il remportée ?',
        options: ['800 m', '1 500 m', '5 000 m', 'Marathon'],
        explanation: 'Josy Barthel a remporté le 1 500 m aux Jeux olympiques d\'Helsinki 1952 avec un temps de 3:45,2 égalisant le record du monde. Le stade national d\'athlétisme de Luxembourg-Ville porte son nom.',
      },
      de: {
        question: 'Josy Barthels Olympia-Gold 1952 ist noch immer Luxemburgs einziges. Welchen Wettkampf gewann er?',
        options: ['800 m', '1500 m', '5000 m', 'Marathon'],
        explanation: 'Josy Barthel gewann die 1500 m bei den Olympischen Spielen 1952 in Helsinki mit der weltrekordgleichen Zeit 3:45,2. Das nationale Leichtathletikstadion in Luxemburg-Stadt trägt seinen Namen.',
      },
      lb: {
        question: 'Josy Barthel seng olympesch Goldmedail 1952 ass bis elo Lëtzebuerg seng eenzeg. Wéi eng Disciplin huet hien gewonnen?',
        options: ['800 m', '1500 m', '5000 m', 'Marathon'],
        explanation: 'Josy Barthel huet d\'1500 m bei den Olympesche Spillere 1952 zu Helsinki mat enger weltkordgläicher Zäit vu 3:45,2 gewonnen. D\'national Loftschport-Stadion zu Lëtzebuerg-Stad dréit säin Numm.',
      },
    },
  },
  // sub-level 3
  {
    id: 'c-inst-1', level: 'citizen', category: 'institutions',
    question: 'What is "Guichet.lu"?',
    options: ['Luxembourg\'s national railway booking system', 'The official Luxembourg government online portal for administrative procedures', 'A Luxembourg City neighbourhood', 'A digital payment system unique to Luxembourg'],
    answer: 1,
    explanation: 'Guichet.lu is the official Luxembourg government digital portal where residents and businesses can handle administrative procedures online, from registering a business to renewing a driving licence.',
    link: 'https://guichet.public.lu/en.html',
    translations: {
      fr: {
        question: 'Qu\'est-ce que « Guichet.lu » ?',
        options: ['Le système de réservation de billets ferroviaires du Luxembourg', 'Le portail officiel du gouvernement luxembourgeois pour les démarches administratives en ligne', 'Un quartier de Luxembourg-Ville', 'Un système de paiement numérique propre au Luxembourg'],
        explanation: 'Guichet.lu est le portail numérique officiel du gouvernement luxembourgeois où résidents et entreprises peuvent effectuer des démarches administratives en ligne, de l\'inscription d\'une entreprise au renouvellement d\'un permis de conduire.',
      },
      de: {
        question: 'Was ist „Guichet.lu"?',
        options: ['Luxemburgs nationales Bahnbuchungssystem', 'Das offizielle luxemburgische Regierungsportal für Verwaltungsverfahren online', 'Ein Stadtviertel in Luxemburg-Stadt', 'Ein digitales Zahlungssystem, das nur in Luxemburg vorkommt'],
        explanation: 'Guichet.lu ist das offizielle luxemburgische Regierungsportal, über das Einwohner und Unternehmen Verwaltungsverfahren online erledigen können, von der Unternehmensregistrierung bis zur Erneuerung des Führerscheins.',
      },
      lb: {
        question: 'Wat ass « Guichet.lu »?',
        options: ['Lëtzebuerg säi nationales Bunn-Buchungssystem', 'Dat offiziellt Lëtzebuerger Regierungsportal fir Verwaltungsverfahren online', 'E Quartier zu Lëtzebuerg-Stad', 'E digitalt Bezuelsystem eenzegaarteg zu Lëtzebuerg'],
        explanation: 'Guichet.lu ass dat offiziellt Lëtzebuerger Regierungsportal wou Awunner a Betriber Verwaltungsverfahren online kënnen duerchféieren, vun der Betriebsregistratioun bis zur Erneierung vum Führerschäin.',
      },
    },
  },
  {
    id: 'c-econ-2', level: 'citizen', category: 'economy',
    question: 'What percentage of Luxembourg\'s electricity came from renewable sources by 2022?',
    options: ['About 10%', 'About 25%', 'About 50%', 'About 80%'],
    answer: 2,
    explanation: 'Luxembourg has been rapidly expanding renewable energy. By 2022, about 25–30% of electricity came from renewables (mainly wind and solar), with ambitious targets to reach much higher levels by 2030.',
    link: 'https://luxembourg.public.lu/en/entreprises/faire-affaire.html',
    translations: {
      fr: {
        question: 'Quel pourcentage de l\'électricité luxembourgeoise provenait de sources renouvelables en 2022 ?',
        options: ['Environ 10 %', 'Environ 25 %', 'Environ 50 %', 'Environ 80 %'],
        explanation: 'Le Luxembourg a rapidement développé les énergies renouvelables. En 2022, environ 25 à 30 % de l\'électricité provenait des renouvelables (principalement éolien et solaire), avec des objectifs ambitieux pour 2030.',
      },
      de: {
        question: 'Wie viel Prozent des luxemburgischen Stroms kam 2022 aus erneuerbaren Quellen?',
        options: ['Etwa 10 %', 'Etwa 25 %', 'Etwa 50 %', 'Etwa 80 %'],
        explanation: 'Luxemburg hat erneuerbare Energien rasch ausgebaut. Bis 2022 stammten etwa 25–30 % des Stroms aus Erneuerbaren (hauptsächlich Wind und Solar), mit ehrgeizigen Zielen bis 2030.',
      },
      lb: {
        question: 'Wéivill Prozent vum Lëtzebuerger Stroum kënnt 2022 aus erneierbaren Energie?',
        options: ['Ongeféier 10 %', 'Ongeféier 25 %', 'Ongeféier 50 %', 'Ongeféier 80 %'],
        explanation: 'Lëtzebuerg huet erneierbar Energie séier ausgebaut. Bis 2022 komm ongeféier 25–30 % vum Stroum aus Erneierbaren (haaptsächlech Wand a Sonnenergie), mat ehrgeizegen Ziler fir 2030.',
      },
    },
  },
  {
    id: 'c-lang-1', level: 'citizen', category: 'language',
    question: 'What is the Luxembourgish word for "Luxembourg City" (the capital)?',
    options: ['Lëtzebuerg-Stad', 'Letzibuerg', 'Lëtzebuerg', 'D\'Haaptstad'],
    answer: 2,
    explanation: 'In Luxembourgish, the capital city is simply called "Lëtzebuerg" — the same word as the country name. Context makes the difference clear. The term "D\'Haaptstad" (the capital) is also used.',
    link: null,
    translations: {
      fr: {
        question: 'Quel est le mot luxembourgeois pour désigner « Luxembourg-Ville » (la capitale) ?',
        options: ['Lëtzebuerg-Stad', 'Letzibuerg', 'Lëtzebuerg', 'D\'Haaptstad'],
        explanation: 'En luxembourgeois, la ville capitale s\'appelle simplement « Lëtzebuerg » — le même mot que le nom du pays. Le contexte permet de distinguer les deux. Le terme « D\'Haaptstad » (la capitale) est également utilisé.',
      },
      de: {
        question: 'Wie lautet das luxemburgische Wort für „Luxemburg-Stadt" (die Hauptstadt)?',
        options: ['Lëtzebuerg-Stad', 'Letzibuerg', 'Lëtzebuerg', 'D\'Haaptstad'],
        explanation: 'Auf Luxemburgisch heißt die Hauptstadt schlicht „Lëtzebuerg" — dasselbe Wort wie der Landesname. Der Kontext klärt den Unterschied. Auch „D\'Haaptstad" (die Hauptstadt) wird verwendet.',
      },
      lb: {
        question: 'Wat ass dat Lëtzebuerger Wuert fir « Lëtzebuerg-Stad » (d\'Haaptstad)?',
        options: ['Lëtzebuerg-Stad', 'Letzibuerg', 'Lëtzebuerg', 'D\'Haaptstad'],
        explanation: 'Op Lëtzebuergesch heescht d\'Haaptstad einfach « Lëtzebuerg » — dat selwecht Wuert wéi den Numm vum Land. De Kontext mécht den Ënnerscheed kloer. « D\'Haaptstad » gëtt och benotzt.',
      },
    },
  },
  {
    id: 'c-hist-1', level: 'citizen', category: 'history',
    question: 'The "Révolution du Luxembourg" of 1848 led to which constitutional development?',
    options: ['Luxembourg declared itself a republic', 'The first constitutional parliament (Chambre des Députés) was established', 'Women gained the right to vote', 'Luxembourg joined the German Confederation permanently'],
    answer: 1,
    explanation: 'Following the 1848 revolutionary wave across Europe, Luxembourg established its first constitutional parliament, the Chambre des Députés, with a liberal constitution — a landmark in democratic development.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'La « Révolution du Luxembourg » de 1848 a conduit à quel développement constitutionnel ?',
        options: ['Le Luxembourg s\'est déclaré république', 'Le premier parlement constitutionnel (Chambre des Députés) a été établi', 'Les femmes ont obtenu le droit de vote', 'Le Luxembourg a définitivement rejoint la Confédération germanique'],
        explanation: 'Suite à la vague révolutionnaire de 1848, le Luxembourg a établi son premier parlement constitutionnel, la Chambre des Députés, avec une constitution libérale — une étape importante dans le développement démocratique.',
      },
      de: {
        question: 'Die „Luxemburger Revolution" von 1848 führte zu welcher verfassungsmäßigen Entwicklung?',
        options: ['Luxemburg erklärte sich zur Republik', 'Das erste verfassungsmäßige Parlament (Chambre des Députés) wurde gegründet', 'Frauen erhielten das Wahlrecht', 'Luxemburg trat dauerhaft dem Deutschen Bund bei'],
        explanation: 'Im Zuge der Revolutionswelle von 1848 gründete Luxemburg sein erstes Verfassungsparlament, die Chambre des Députés, mit einer liberalen Verfassung — ein Meilenstein in der demokratischen Entwicklung.',
      },
      lb: {
        question: 'D\'« Lëtzebuerger Revolutioun » vu 1848 huet zu wéi enger verfassungsméisseger Entwécklung gefouert?',
        options: ['Lëtzebuerg huet sech zur Republik erkläert', 'Dat éischt verfassungsméissegt Parlament (Chambre des Députés) gouf gegrënnt', 'Fraen hunn d\'Wahlrecht kritt', 'Lëtzebuerg ass permanent dem Däitsche Bund bäigetrueden'],
        explanation: 'No der Revolutiounswelle vu 1848 huet Lëtzebuerg säi éischt verfassungsméissegt Parlament, d\'Chambre des Députés, mat enger liberaler Verfassung gegrënnt — e Meilesteen an der demokratescher Entwécklung.',
      },
    },
  },
  {
    id: 'c-cult-2', level: 'citizen', category: 'culture',
    question: 'What is Vianden Castle famous for, and which famous writer visited it?',
    options: ['A Renaissance palace; visited by Mozart', 'One of Europe\'s finest medieval castles; Victor Hugo stayed nearby and painted it', 'A Baroque fortress; frequented by Goethe', 'A Roman fort; described by Julius Caesar'],
    answer: 1,
    explanation: 'Vianden Castle is one of the most impressive medieval fortresses in Western Europe. Victor Hugo lived in Vianden in exile (1871) and made numerous sketches and paintings of the town and castle.',
    link: 'https://www.castle-vianden.lu/en/',
    translations: {
      fr: {
        question: 'Pour quoi le château de Vianden est-il célèbre, et quel écrivain célèbre l\'a visité ?',
        options: ['Un palais Renaissance ; visité par Mozart', 'L\'un des plus beaux châteaux médiévaux d\'Europe ; Victor Hugo y a séjourné et le peint', 'Une forteresse baroque ; fréquentée par Goethe', 'Un fort romain ; décrit par Jules César'],
        explanation: 'Le château de Vianden est l\'une des forteresses médiévales les plus impressionnantes d\'Europe occidentale. Victor Hugo a vécu à Vianden en exil (1871) et a réalisé de nombreux croquis et peintures de la ville et du château.',
      },
      de: {
        question: 'Wofür ist Schloss Vianden bekannt, und welcher berühmte Schriftsteller besuchte es?',
        options: ['Ein Renaissancepalast; von Mozart besucht', 'Eine der schönsten mittelalterlichen Burgen Europas; Victor Hugo lebte dort und malte sie', 'Eine Barockfestung; von Goethe besucht', 'Ein römisches Fort; von Julius Cäsar beschrieben'],
        explanation: 'Schloss Vianden ist eine der eindrucksvollsten mittelalterlichen Burgen Westeuropas. Victor Hugo lebte 1871 im Exil in Vianden und fertigte zahlreiche Skizzen und Gemälde der Stadt und Burg an.',
      },
      lb: {
        question: 'Wofir ass de Schlass Vianden bekannt, a wéi ee berühmten Auteur huet et besicht?',
        options: ['E Renaissancepalais; vu Mozart besicht', 'Ee vun de schéinste mëttelalterlech Festungen an Europa; Victor Hugo huet do gewunnt a se gemolt', 'Eng Barockfestung; vu Goethe besicht', 'E réimescht Fort; vum Julius Caesar beschriwwen'],
        explanation: 'De Schlass Vianden ass eng vun den adrocksvollsten mëttelalterlech Festungen am Westeuropa. Victor Hugo huet 1871 am Exil zu Vianden gewunnt a vill Skizzen a Molereien vun der Stad an dem Schlass gemaach.',
      },
    },
  },
  // sub-level 4
  {
    id: 'c-peop-2', level: 'citizen', category: 'people',
    question: 'Which Luxembourger co-founded the global steel company ArcelorMittal?',
    options: ['Gaston Thorn', 'Lakshmi Mittal (Indian, based in Luxembourg)', 'Paul Wurth', 'Henri Funck'],
    answer: 1,
    explanation: 'Lakshmi Mittal, an Indian businessman who relocated to Luxembourg, built Mittal Steel and merged it with Arcelor (based in Luxembourg) in 2006, creating ArcelorMittal — the world\'s largest steel producer, headquartered in Luxembourg City.',
    link: 'https://luxembourg.public.lu/en/entreprises/faire-affaire.html',
    translations: {
      fr: {
        question: 'Quel Luxembourgeois a cofondé la société sidérurgique mondiale ArcelorMittal ?',
        options: ['Gaston Thorn', 'Lakshmi Mittal (Indien, installé au Luxembourg)', 'Paul Wurth', 'Henri Funck'],
        explanation: 'Lakshmi Mittal, un homme d\'affaires indien installé au Luxembourg, a développé Mittal Steel et fusionné avec Arcelor (basé au Luxembourg) en 2006, créant ArcelorMittal — le plus grand producteur d\'acier du monde, dont le siège est à Luxembourg-Ville.',
      },
      de: {
        question: 'Welche in Luxemburg ansässige Person war Mitgründer des globalen Stahlkonzerns ArcelorMittal?',
        options: ['Gaston Thorn', 'Lakshmi Mittal (Inder, in Luxemburg ansässig)', 'Paul Wurth', 'Henri Funck'],
        explanation: 'Lakshmi Mittal, ein indischer Unternehmer mit Wohnsitz in Luxemburg, baute Mittal Steel auf und fusionierte es 2006 mit dem in Luxemburg ansässigen Arcelor zu ArcelorMittal — dem weltgrößten Stahlproduzenten mit Sitz in Luxemburg-Stadt.',
      },
      lb: {
        question: 'Wéi ee Lëtzebuerger (oder zu Lëtzebuerg niddergeloossene Mënsch) war Mëtgründer vum globale Steelkonzern ArcelorMittal?',
        options: ['Gaston Thorn', 'Lakshmi Mittal (Indesch, zu Lëtzebuerg niddergelooss)', 'Paul Wurth', 'Henri Funck'],
        explanation: 'Lakshmi Mittal, en indeschen Geschäftsmann mat Wunnsëtz zu Lëtzebuerg, huet Mittal Steel opgeboiert a mat dem zu Lëtzebuerg niddergeloossenen Arcelor 2006 zu ArcelorMittal fusionéiert — de weltgréisste Steelproduzent mat Sëtz zu Lëtzebuerg-Stad.',
      },
    },
  },
  {
    id: 'c-inst-2', level: 'citizen', category: 'institutions',
    question: 'What is the "Chèque-Service Accueil" (CSA) in Luxembourg?',
    options: ['A voucher for public transport', 'A childcare subsidy system that co-finances childcare costs for families', 'A housing benefit for new residents', 'A tax credit for cross-border workers'],
    answer: 1,
    explanation: 'The Chèque-Service Accueil (CSA) is Luxembourg\'s childcare voucher system. The state subsidises childcare costs for all children residing in Luxembourg, making childcare free for lower-income families.',
    link: 'https://guichet.public.lu/en/citoyens/famille/aide-financiere-jeunesse/cheque-service-accueil.html',
    translations: {
      fr: {
        question: 'Qu\'est-ce que le « Chèque-Service Accueil » (CSA) au Luxembourg ?',
        options: ['Un bon pour les transports en commun', 'Un système de subvention à la garde d\'enfants cofinançant les frais de garde pour les familles', 'Une aide au logement pour les nouveaux résidents', 'Un crédit d\'impôt pour les travailleurs frontaliers'],
        explanation: 'Le Chèque-Service Accueil (CSA) est le système de chèque de garde d\'enfants du Luxembourg. L\'État subventionne les frais de garde pour tous les enfants résidant au Luxembourg, rendant la garde gratuite pour les familles à faibles revenus.',
      },
      de: {
        question: 'Was ist der „Chèque-Service Accueil" (CSA) in Luxemburg?',
        options: ['Ein Gutschein für öffentliche Verkehrsmittel', 'Ein Kinderbetreuungssubventionssystem, das Kinderbetreuungskosten für Familien kofinanziert', 'Ein Wohnzuschuss für neue Einwohner', 'Eine Steuergutschrift für Grenzpendler'],
        explanation: 'Der Chèque-Service Accueil (CSA) ist Luxemburgs Kinderbetreuungsgutscheinsystem. Der Staat subventioniert Betreuungskosten für alle in Luxemburg wohnenden Kinder, was Betreuung für einkommensschwache Familien kostenlos macht.',
      },
      lb: {
        question: 'Wat ass de « Chèque-Service Accueil » (CSA) zu Lëtzebuerg?',
        options: ['E Bon fir ëffentlech Transportmëttel', 'E Kannerbetriebskostensubventiounssystem dat Betreiungskäschten fir Famillje kofinanzéiert', 'Eng Wunnengshëllef fir nei Awunner', 'E Steierkredit fir Grenzgänger'],
        explanation: 'De Chèque-Service Accueil (CSA) ass Lëtzebuerg säi Kannerbetriebsbonsystem. Den Staat subventiounéiert Betreiungskäschten fir all Kanner déi zu Lëtzebuerg wunnen, wat Betreiung fir akommeschwach Famillje gratis mécht.',
      },
    },
  },
  {
    id: 'c-econ-3', level: 'citizen', category: 'economy',
    question: 'What is the "Belval" development in southern Luxembourg?',
    options: ['A luxury residential district in Luxembourg City', 'A redevelopment of former steelworks into a science, culture, and university campus', 'A new motorway junction near the French border', 'An eco-tourism park in the Ardennes'],
    answer: 1,
    explanation: 'Belval (Esch-Belval) is a major urban redevelopment project transforming former steel blast furnaces into a modern campus hosting the University of Luxembourg, research centres, and cultural facilities.',
    link: 'https://luxembourg.public.lu/en/entreprises/faire-affaire.html',
    translations: {
      fr: {
        question: 'Qu\'est-ce que le développement « Belval » dans le sud du Luxembourg ?',
        options: ['Un quartier résidentiel de luxe à Luxembourg-Ville', 'Une reconversion d\'anciennes aciéries en campus scientifique, culturel et universitaire', 'Un nouveau nœud autoroutier près de la frontière française', 'Un parc écotouristique dans les Ardennes'],
        explanation: 'Belval (Esch-Belval) est un grand projet de réaménagement urbain transformant d\'anciens hauts-fourneaux en un campus moderne accueillant l\'Université du Luxembourg, des centres de recherche et des équipements culturels.',
      },
      de: {
        question: 'Was ist das „Belval"-Projekt im Süden Luxemburgs?',
        options: ['Ein Luxuswohnviertel in Luxemburg-Stadt', 'Eine Umgestaltung ehemaliger Stahlwerke zu einem Wissenschafts-, Kultur- und Universitätscampus', 'Ein neues Autobahnkreuz nahe der französischen Grenze', 'Ein Ökotourismuspark in den Ardennen'],
        explanation: 'Belval (Esch-Belval) ist ein großes Stadtentwicklungsprojekt, das ehemalige Hochöfen in einen modernen Campus mit der Universität Luxemburg, Forschungszentren und Kultureinrichtungen verwandelt.',
      },
      lb: {
        question: 'Wat ass de « Belval »-Projet am Süden vu Lëtzebuerg?',
        options: ['E Luxuswunnquartier zu Lëtzebuerg-Stad', 'Eng Ëmgestaltung vun alen Steelwierker zu engem Wëssenschafft-, Kultur- a Universitéitscampus', 'E neie Autobunn-Kräizung no der franséischer Grenz', 'En Ökotourismuspak an den Ardenen'],
        explanation: 'Belval (Esch-Belval) ass e grousst Staddéngungsprojet dat al Héichhefe a en modernen Campus mat der Universitéit Lëtzebuerg, Fuerschungszentren a Kulturanlagen ëmgestallt.',
      },
    },
  },
  {
    id: 'c-lang-2', level: 'citizen', category: 'language',
    question: 'What is the "Klasse!" programme in Luxembourg?',
    options: ['A free language school for adult learners of Luxembourgish', 'The national music conservatory', 'A sports programme for school children', 'A government literacy campaign for seniors'],
    answer: 0,
    explanation: '"Klasse!" is a programme by the Ministry of Education offering free Luxembourgish language courses to adults who wish to integrate linguistically. It complements the "Sproochentest" (language test) for Luxembourgish citizenship.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html',
    translations: {
      fr: {
        question: 'Qu\'est-ce que le programme « Klasse! » au Luxembourg ?',
        options: ['Une école de langues gratuite pour adultes apprenant le luxembourgeois', 'Le conservatoire national de musique', 'Un programme sportif pour les écoliers', 'Une campagne gouvernementale d\'alphabétisation pour les seniors'],
        explanation: '« Klasse! » est un programme du ministère de l\'Éducation proposant des cours gratuits de luxembourgeois aux adultes souhaitant s\'intégrer linguistiquement. Il complète le « Sproochentest » (test de langue) pour la citoyenneté luxembourgeoise.',
      },
      de: {
        question: 'Was ist das „Klasse!"-Programm in Luxemburg?',
        options: ['Eine kostenlose Sprachschule für Erwachsene, die Luxemburgisch lernen', 'Das nationale Musikkonservatorium', 'Ein Sportprogramm für Schulkinder', 'Eine staatliche Alphabetisierungskampagne für Senioren'],
        explanation: '„Klasse!" ist ein Programm des Bildungsministeriums, das kostenlosen Luxemburgischunterricht für Erwachsene anbietet, die sich sprachlich integrieren möchten. Es ergänzt den „Sproochentest" (Sprachtest) für die luxemburgische Staatsbürgerschaft.',
      },
      lb: {
        question: 'Wat ass de « Klasse! »-Programm zu Lëtzebuerg?',
        options: ['Eng gratis Sproochschoul fir Erwuessener déi Lëtzebuergesch léieren', 'D\'national Musekkonservatorium', 'E Sportprogramm fir Schoulkanner', 'Eng Regierungsliterazitéitskampagne fir Senior'],
        explanation: '« Klasse! » ass e Programm vum Bildungsministère dat gratis Lëtzebuergesch-Coursen fir Erwuessener ubitt déi sech sproochlech integréiere wëllen. Hien ergänzt den « Sproochentest » (Sproochtest) fir d\'Lëtzebuerger Nationalitéit.',
      },
    },
  },
  {
    id: 'c-hist-2', level: 'citizen', category: 'history',
    question: 'In 1890, why did Luxembourg separate from the Netherlands, resulting in a new Grand Duke?',
    options: ['A revolution ousted the Dutch king', 'The Dutch king William III died with no male heir; Nassau law prevented female succession in Luxembourg', 'Luxembourg won a war of independence', 'The Treaty of Paris forced the separation'],
    answer: 1,
    explanation: 'When William III of the Netherlands died in 1890 without male heirs, the Dutch throne passed to his daughter Wilhelmina — but the Nassau law governing Luxembourg required a male heir, so Luxembourg passed to Adolphe of Nassau.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'En 1890, pourquoi le Luxembourg s\'est-il séparé des Pays-Bas, donnant lieu à un nouveau grand-duc ?',
        options: ['Une révolution a renversé le roi néerlandais', 'Le roi néerlandais Guillaume III est mort sans héritier mâle ; la loi de Nassau interdisait la succession féminine au Luxembourg', 'Le Luxembourg a remporté une guerre d\'indépendance', 'Le traité de Paris a forcé la séparation'],
        explanation: 'Lorsque Guillaume III des Pays-Bas mourut en 1890 sans héritiers mâles, le trône néerlandais passa à sa fille Wilhelmine — mais la loi de Nassau régissant le Luxembourg exigeait un héritier mâle, qui fut l\'adolphe de Nassau.',
      },
      de: {
        question: 'Warum trennte sich Luxemburg 1890 von den Niederlanden und bekam einen neuen Großherzog?',
        options: ['Eine Revolution stürzte den niederländischen König', 'König Wilhelm III. der Niederlande starb ohne männliche Erben; das Nassauische Gesetz verhinderte die Erbfolge durch Frauen in Luxemburg', 'Luxemburg gewann einen Unabhängigkeitskrieg', 'Der Pariser Vertrag erzwang die Trennung'],
        explanation: 'Als Wilhelm III. der Niederlande 1890 ohne männliche Erben starb, ging der niederländische Thron an seine Tochter Wilhelmina — aber das nassauische Recht für Luxemburg erforderte einen männlichen Erben, so dass Luxemburg an Adolphe von Nassau überging.',
      },
      lb: {
        question: 'Firwat huet Lëtzebuerg sech 1890 vun den Nidderlanden getrennt an en neien Groussherzog kritt?',
        options: ['Eng Revolutioun huet de hollännesche Kinnek ofgesat', 'De hollänneschen Kinnek Wilhelm III. ass ouni männlech Ierffolger gestuerwen; d\'Nassauesch Gesetz huet weiblech Nofollger zu Lëtzebuerg verboden', 'Lëtzebuerg huet e Onofhängegkeetskrich gewonnen', 'Den Traité de Paris huet d\'Trennung gezwongen'],
        explanation: 'Wéi Wilhelm III. vun den Nidderlanden 1890 ouni männlech Ierffolger gestuerwen ass, ass den hollännesche Troun un seng Duechter Wilhelmina gaangen — mä d\'Nassauesch Gesetz fir Lëtzebuerg huet en männlechen Ierffolger gefuerdert, esou datt Lëtzebuerg un Adolphe vu Nassau gaangen ass.',
      },
    },
  },
  // sub-level 5
  {
    id: 'c-cult-3', level: 'citizen', category: 'culture',
    question: 'The "Nuit de la Culture" (Long Night of Culture) in Luxembourg City is held annually. What is it?',
    options: ['A midnight fireworks display on National Day', 'An evening when museums, galleries, and cultural venues open late with free admission', 'A festival of Luxembourgish folk music and dance', 'A candlelit procession through the old town'],
    answer: 1,
    explanation: 'The Nuit de la Culture (Kulturnuecht) is an annual event when cultural venues across Luxembourg City open for free until late at night, offering concerts, theatre, exhibitions, and guided tours.',
    link: 'https://luxembourg.public.lu/en/culture.html',
    translations: {
      fr: {
        question: 'La « Nuit de la Culture » (longue nuit de la culture) à Luxembourg-Ville est organisée chaque année. De quoi s\'agit-il ?',
        options: ['Un feu d\'artifice de minuit lors de la fête nationale', 'Une soirée où musées, galeries et lieux culturels ouvrent tard avec entrée gratuite', 'Un festival de musique et danse folkloriques luxembourgeois', 'Une procession aux chandelles dans la vieille ville'],
        explanation: 'La Nuit de la Culture (Kulturnuecht) est un événement annuel où les lieux culturels de Luxembourg-Ville ouvrent gratuitement jusqu\'à tard dans la nuit, proposant concerts, théâtre, expositions et visites guidées.',
      },
      de: {
        question: 'Die „Nuit de la Culture" (Kulturnacht) in Luxemburg-Stadt wird jährlich veranstaltet. Was ist das?',
        options: ['Ein Mitternachtsfeuerwerk am Nationalfeiertag', 'Ein Abend, an dem Museen, Galerien und Kulturstätten bis spät nachts mit freiem Eintritt öffnen', 'Ein Festival luxemburgischer Volksmusik und -tänze', 'Ein Kerzenlichtumzug durch die Altstadt'],
        explanation: 'Die Nuit de la Culture (Kulturnuecht) ist ein jährliches Ereignis, bei dem Kulturstätten in Luxemburg-Stadt bis spät in die Nacht kostenlos öffnen und Konzerte, Theater, Ausstellungen und Führungen anbieten.',
      },
      lb: {
        question: 'D\'« Nuit de la Culture » (Kulturnuecht) zu Lëtzebuerg-Stad gëtt all Joer organiséiert. Wat ass dat?',
        options: ['E Mëtternuecht-Feierwierk um Nationalfeierdag', 'En Owend wou Museen, Galerien a Kulturplazen bis spéit openhalden mat gratis Entree', 'E Festival vu Lëtzebuerger Volleksmusek a -tanzen', 'Eng Kerzenzuch duerch d\'Alstad'],
        explanation: 'D\'Nuit de la Culture (Kulturnuecht) ass en jährlechen Evenement wou Kulturplazen zu Lëtzebuerg-Stad bis spéit an der Nuecht gratis openhalden an Concerten, Theater, Ausstellungen a gefouert Toure ubidden.',
      },
    },
  },
  {
    id: 'c-peop-3', level: 'citizen', category: 'people',
    question: 'Gaston Thorn served as Prime Minister of Luxembourg and later as what?',
    options: ['Secretary General of the UN', 'President of the European Commission (1981–1985)', 'President of the European Parliament', 'President of the European Council'],
    answer: 1,
    explanation: 'Gaston Thorn was Prime Minister of Luxembourg (1974–1979) and later served as President of the European Commission from 1981 to 1985, making him the second Luxembourger to hold that role.',
    link: 'https://luxembourg.public.lu/en/gouvernement.html',
    translations: {
      fr: {
        question: 'Gaston Thorn a été Premier ministre du Luxembourg, puis occupé quel poste ?',
        options: ['Secrétaire général de l\'ONU', 'Président de la Commission européenne (1981–1985)', 'Président du Parlement européen', 'Président du Conseil européen'],
        explanation: 'Gaston Thorn a été Premier ministre du Luxembourg (1974–1979) et a ensuite servi comme président de la Commission européenne de 1981 à 1985, devenant le deuxième Luxembourgeois à occuper ce poste.',
      },
      de: {
        question: 'Gaston Thorn war Premierminister Luxemburgs und diente später als was?',
        options: ['Generalsekretär der UN', 'Präsident der Europäischen Kommission (1981–1985)', 'Präsident des Europäischen Parlaments', 'Präsident des Europäischen Rates'],
        explanation: 'Gaston Thorn war Premierminister Luxemburgs (1974–1979) und diente anschließend als Präsident der Europäischen Kommission von 1981 bis 1985 — der zweite Luxemburger in diesem Amt.',
      },
      lb: {
        question: 'Gaston Thorn war Premierminister vu Lëtzebuerg a huet duerno wéi en Amt bekleet?',
        options: ['Generalsekretär vun der UNO', 'President vun der Europäescher Kommissioun (1981–1985)', 'President vum Europäesche Parlament', 'President vum Europäesche Rot'],
        explanation: 'Gaston Thorn war Premierminister vu Lëtzebuerg (1974–1979) a huet duerno vu 1981 bis 1985 als President vun der Europäescher Kommissioun gedéngt — den zweeten Lëtzebuerger an deem Amt.',
      },
    },
  },
  {
    id: 'c-inst-3', level: 'citizen', category: 'institutions',
    question: 'What is the "Inspection du Travail et des Mines" (ITM) in Luxembourg?',
    options: ['The mining authority for iron ore extraction', 'The labour inspectorate that monitors compliance with employment and safety law', 'The transport ministry\'s vehicle inspection service', 'The environmental protection agency'],
    answer: 1,
    explanation: 'The ITM (Inspection du Travail et des Mines) is Luxembourg\'s labour inspectorate. It monitors compliance with labour law, workplace safety, and employment contracts, and can investigate and sanction violations.',
    link: 'https://luxembourg.public.lu/en/vivre/emploi.html',
    translations: {
      fr: {
        question: 'Qu\'est-ce que l\'« Inspection du Travail et des Mines » (ITM) au Luxembourg ?',
        options: ['L\'autorité minière pour l\'extraction de minerai de fer', 'L\'inspection du travail qui contrôle le respect du droit du travail et de la sécurité', 'Le service d\'inspection des véhicules du ministère des transports', 'L\'agence de protection de l\'environnement'],
        explanation: 'L\'ITM est l\'inspection du travail luxembourgeoise. Elle contrôle le respect du droit du travail, de la sécurité au travail et des contrats de travail, et peut enquêter et sanctionner les infractions.',
      },
      de: {
        question: 'Was ist die „Inspection du Travail et des Mines" (ITM) in Luxemburg?',
        options: ['Die Bergbaubehörde für den Eisenerzabbau', 'Die Arbeitsinspektion, die die Einhaltung des Arbeits- und Sicherheitsrechts überwacht', 'Der Fahrzeugprüfdienst des Verkehrsministeriums', 'Die Umweltschutzbehörde'],
        explanation: 'Die ITM ist Luxemburgs Arbeitsinspektion. Sie überwacht die Einhaltung des Arbeitsrechts, der Arbeitssicherheit und Arbeitsverträge und kann Verstöße untersuchen und sanktionieren.',
      },
      lb: {
        question: 'Wat ass d\'« Inspection du Travail et des Mines » (ITM) zu Lëtzebuerg?',
        options: ['D\'Bergbauautoritéit fir Eisenouerz-Extraktioun', 'D\'Aarbechtsiwwerwaachung déi d\'Ainhale vum Aarbechts- a Sécherheetsrecht iwwerwacht', 'De Gefiertsiwwerpréifungsdéngscht vum Transportministère', 'D\'Ëmweltschutzagentur'],
        explanation: 'D\'ITM ass Lëtzebuerg seng Aarbechtsiwwerwaachung. Si iwwerwacht d\'Ainhale vum Aarbechtgesetz, Aarbechtssécherheetssécherheet a Aarbechtskontrakten, a kann Verstéiss ënnersichen a sanktiounéieren.',
      },
    },
  },
  {
    id: 'c-econ-4', level: 'citizen', category: 'economy',
    question: 'What is the legal basis for free public transport in Luxembourg, introduced in 2020?',
    options: ['A EU directive requiring free transport in small member states', 'A national law making all public transport (bus, tram, train) free for everyone', 'An agreement with neighbouring countries to fund cross-border commuter transport', 'A temporary COVID-19 measure that became permanent'],
    answer: 1,
    explanation: 'In March 2020, Luxembourg became the first country in the world to make all public transport (buses, trams, trains) free for all passengers — residents, non-residents, and tourists alike.',
    link: 'https://luxembourg.public.lu/en/vivre/transports.html',
    translations: {
      fr: {
        question: 'Quelle est la base juridique des transports en commun gratuits au Luxembourg, introduits en 2020 ?',
        options: ['Une directive de l\'UE imposant les transports gratuits dans les petits États membres', 'Une loi nationale rendant tous les transports en commun (bus, tram, train) gratuits pour tous', 'Un accord avec les pays voisins pour financer le transport des frontaliers', 'Une mesure temporaire COVID-19 devenue permanente'],
        explanation: 'En mars 2020, le Luxembourg est devenu le premier pays du monde à rendre tous les transports en commun (bus, tramways, trains) gratuits pour tous les passagers — résidents, non-résidents et touristes.',
      },
      de: {
        question: 'Was ist die Rechtsgrundlage für den kostenlosen öffentlichen Verkehr in Luxemburg, eingeführt 2020?',
        options: ['Eine EU-Richtlinie für kostenlosen ÖPNV in kleinen Mitgliedstaaten', 'Ein nationales Gesetz, das alle öffentlichen Verkehrsmittel (Bus, Tram, Zug) für alle kostenlos macht', 'Eine Vereinbarung mit Nachbarländern zur Finanzierung von Grenzpendlertransporten', 'Eine temporäre COVID-19-Maßnahme, die permanent wurde'],
        explanation: 'Im März 2020 wurde Luxemburg das erste Land der Welt, das alle öffentlichen Verkehrsmittel (Busse, Straßenbahnen, Züge) für alle Passagiere kostenlos machte — Einwohner, Nicht-Einwohner und Touristen.',
      },
      lb: {
        question: 'Wat ass d\'Rechtsgrondlag fir de gratis ëffentleche Transport zu Lëtzebuerg, agebracht 2020?',
        options: ['Eng EU-Direktiv déi gratis ëffentleche Transport a klenge Memberstaaten erfuerdert', 'E nationales Gesetz dat all ëffentlecht Transport (Bus, Tram, Zuch) fir jiddereng gratis mécht', 'Eng Accord mat Nopeschlänner fir Grenzgänger-Transport ze finanzéieren', 'Eng temporär COVID-19-Moossnam déi permanent gouf'],
        explanation: 'Am Mäerz 2020 gouf Lëtzebuerg dat éischt Land op der Welt dat all ëffentlecht Transport (Busse, Trame, Zich) fir all Passagéier gratis mécht — Awunner, Net-Awunner a Touristen.',
      },
    },
  },
  {
    id: 'c-lang-3', level: 'citizen', category: 'language',
    question: 'What is a "Sproochentest" in Luxembourg?',
    options: ['A school language exam for children', 'An oral Luxembourgish language test required for naturalisation', 'A qualification exam for civil service jobs', 'An entrance test for the University of Luxembourg'],
    answer: 1,
    explanation: 'The Sproochentest (language test) is an oral Luxembourgish test that applicants for Luxembourg citizenship must pass. It assesses the ability to understand and speak Luxembourgish at a basic functional level.',
    link: 'https://guichet.public.lu/en/citoyens/nationalite/acquisition-nationalite-luxembourgeoise.html',
    translations: {
      fr: {
        question: 'Qu\'est-ce qu\'un « Sproochentest » au Luxembourg ?',
        options: ['Un examen de langue scolaire pour les enfants', 'Un test oral de luxembourgeois requis pour la naturalisation', 'Un examen de qualification pour les emplois dans la fonction publique', 'Un test d\'entrée pour l\'Université du Luxembourg'],
        explanation: 'Le Sproochentest (test de langue) est un test oral de luxembourgeois que les candidats à la nationalité luxembourgeoise doivent réussir. Il évalue la capacité à comprendre et à parler le luxembourgeois à un niveau fonctionnel de base.',
      },
      de: {
        question: 'Was ist ein „Sproochentest" in Luxemburg?',
        options: ['Eine schulische Sprachprüfung für Kinder', 'Ein mündlicher Luxemburgisch-Test, der für die Einbürgerung erforderlich ist', 'Eine Qualifikationsprüfung für Stellen im öffentlichen Dienst', 'Ein Aufnahmetest für die Universität Luxemburg'],
        explanation: 'Der Sproochentest (Sprachtest) ist ein mündlicher Luxemburgisch-Test, den Bewerber für die luxemburgische Staatsbürgerschaft bestehen müssen. Er bewertet die Fähigkeit, Luxemburgisch auf einem grundlegenden funktionalen Niveau zu verstehen und zu sprechen.',
      },
      lb: {
        question: 'Wat ass e « Sproochentest » zu Lëtzebuerg?',
        options: ['Eng Schoulsprocheexamen fir Kanner', 'En mëndleche Lëtzebuergesch-Test deen fir d\'Naturalisatioun erfuerderlech ass', 'Eng Qualifikatiounsexamen fir Stellen am ëffentleche Secteur', 'En Opnahmetest fir d\'Universitéit Lëtzebuerg'],
        explanation: 'De Sproochentest ass e mëndleche Lëtzebuergesch-Test deen Candidaten fir d\'Lëtzebuerger Nationalitéit mussen bestoen. Hien evaluéiert d\'Fäegkeet Lëtzebuergesch op engem grondsätzlechen funktionellen Niveau ze verstoen a ze schwätzen.',
      },
    },
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
    link: null,
    translations: {
      fr: {
        question: 'Quel est le mot luxembourgeois pour la « Fête Nationale » (Jour national) ?',
        options: ['Nationalfest', 'Nationalfeierdag', 'Fräiheetsdag', 'Groussherzogsdag'],
        explanation: '« Nationalfeierdag » est le terme luxembourgeois pour la Fête nationale (23 juin). « Feierdag » signifie « jour de fête » — un mélange direct du germanique « Feier » (célébration) et « Dag » (jour).',
      },
      de: {
        question: 'Wie lautet das luxemburgische Wort für den „Nationalfeiertag" (Fête Nationale)?',
        options: ['Nationalfest', 'Nationalfeierdag', 'Fräiheetsdag', 'Groussherzogsdag'],
        explanation: '„Nationalfeierdag" ist der luxemburgische Begriff für den Nationalfeiertag (23. Juni). „Feierdag" bedeutet „Feiertag" — eine direkte Mischung aus dem germanischen „Feier" (Feier) und „Dag" (Tag).',
      },
      lb: {
        question: 'Wat ass dat Lëtzebuerger Wuert fir d\'« Fête Nationale » (Nationalfeierdag)?',
        options: ['Nationalfest', 'Nationalfeierdag', 'Fräiheetsdag', 'Groussherzogsdag'],
        explanation: '« Nationalfeierdag » ass den Lëtzebuerger Begrëff fir den Nationalfeierdag (23. Juni). « Feierdag » bedeit « Feierdag » — eng direkt Mëschung aus dem germanesche « Feier » (Feier) a « Dag » (Dag).',
      },
    },
  },
  {
    id: 'a-hist-1', level: 'ambassador', category: 'history',
    question: 'The Romans built a major road through Luxembourg. Which Roman settlement is now beneath Luxembourg City?',
    options: ['Trevorum', 'Vicus Munditiacum', 'Andethanna', 'Mamer Villa'],
    answer: 1,
    explanation: 'The Romans built a settlement at Vicus Munditiacum (near today\'s Luxembourg City) and a major road through the territory. Traces of Roman baths and villas have been found across Luxembourg.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'Les Romains ont construit une route majeure à travers le Luxembourg. Quel établissement romain se trouve sous Luxembourg-Ville ?',
        options: ['Trevorum', 'Vicus Munditiacum', 'Andethanna', 'Mamer Villa'],
        explanation: 'Les Romains ont construit un établissement à Vicus Munditiacum (près de l\'actuelle Luxembourg-Ville) et une route majeure à travers le territoire. Des traces de thermes et de villas romaines ont été trouvées dans tout le Luxembourg.',
      },
      de: {
        question: 'Die Römer bauten eine Hauptstraße durch Luxemburg. Welche römische Siedlung liegt unter Luxemburg-Stadt?',
        options: ['Trevorum', 'Vicus Munditiacum', 'Andethanna', 'Mamer Villa'],
        explanation: 'Die Römer bauten eine Siedlung bei Vicus Munditiacum (nahe dem heutigen Luxemburg-Stadt) und eine Hauptstraße durch das Gebiet. Reste von römischen Bädern und Villen wurden im ganzen Land gefunden.',
      },
      lb: {
        question: 'D\'Réimer hunn eng grouss Strooss duerch Lëtzebuerg gebaut. Wéi eng réimesch Siedlung läit ënner Lëtzebuerg-Stad?',
        options: ['Trevorum', 'Vicus Munditiacum', 'Andethanna', 'Mamer Villa'],
        explanation: 'D\'Réimer hunn eng Siedlung zu Vicus Munditiacum (no dem haitegen Lëtzebuerg-Stad) a eng grouss Strooss duerch d\'Territoire gebaut. Reste vu réimeschen Bäder a Villen goufen duerch ganz Lëtzebuerg fonnt.',
      },
    },
  },
  {
    id: 'a-cult-1', level: 'ambassador', category: 'culture',
    question: 'The "Weekender" festival in Esch-sur-Alzette celebrates what?',
    options: ['Traditional crafts and folk music', 'Electronic and contemporary music in the industrial heritage setting', 'Wine and gastronomy of the Moselle', 'Street art and graffiti culture'],
    answer: 1,
    explanation: 'The Weekender festival transforms the former industrial sites of Esch-Belval into a music and arts venue, symbolising the cultural rebirth of Luxembourg\'s former steel belt.',
    link: 'https://luxembourg.public.lu/en/culture.html',
    translations: {
      fr: {
        question: 'Le festival « Weekender » à Esch-sur-Alzette célèbre quoi ?',
        options: ['Artisanat traditionnel et musique folklorique', 'Musique électronique et contemporaine dans un cadre de patrimoine industriel', 'Vin et gastronomie de la Moselle', 'Art de rue et culture graffiti'],
        explanation: 'Le festival Weekender transforme les anciens sites industriels d\'Esch-Belval en lieu de musique et d\'arts, symbolisant la renaissance culturelle de l\'ancienne ceinture sidérurgique luxembourgeoise.',
      },
      de: {
        question: 'Das „Weekender"-Festival in Esch an der Alzette feiert was?',
        options: ['Traditionelles Kunsthandwerk und Volksmusik', 'Elektronische und zeitgenössische Musik in industriellem Erbeambiente', 'Wein und Gastronomie der Mosel', 'Straßenkunst und Graffiti-Kultur'],
        explanation: 'Das Weekender-Festival verwandelt die ehemaligen Industriestandorte in Esch-Belval in einen Musik- und Kunstveranstaltungsort und symbolisiert die kulturelle Wiedergeburt des ehemaligen luxemburgischen Stahlgürtels.',
      },
      lb: {
        question: 'Wat feiert de « Weekender »-Festival zu Esch-Uelzecht?',
        options: ['Traditionell Handwierk a Volleksmusek', 'Elektresch a zäitgenëssesch Musek an engem industriellen Ierwerahmen', 'Wäin a Gastronomie vun der Musel', 'Stroosskonst a Graffiti-Kultur'],
        explanation: 'De Weekender-Festival verwandelt d\'al Industrieplazen zu Esch-Belval an e Musek- a Konschtveranstaltungsplaz, a symboliséiert d\'kulturell Widderbelebung vum ale Lëtzebuerger Steelgürtel.',
      },
    },
  },
  {
    id: 'a-peop-1', level: 'ambassador', category: 'people',
    question: 'Norbert Braun was one of Luxembourg\'s famous 19th-century painters. His contemporary Joseph Kutter (1894–1941) is known for what style?',
    options: ['Photorealistic portraits of the Grand Ducal family', 'Expressionist paintings, Luxembourg\'s most significant modern artist', 'Impressionist river landscapes of the Moselle', 'Abstract sculptures inspired by Celtic art'],
    answer: 1,
    explanation: 'Joseph Kutter (1894–1941) is Luxembourg\'s most celebrated visual artist. His expressionist style, influenced by the German expressionists, produced haunting portraits and landscapes. His painting "Der Clown" is iconic.',
    link: 'https://luxembourg.public.lu/en/culture/patrimoine-culturel.html',
    translations: {
      fr: {
        question: 'Joseph Kutter (1894–1941) est connu pour quel style artistique ?',
        options: ['Portraits photoréalistes de la famille grand-ducale', 'Peintures expressionnistes — le plus important artiste moderne luxembourgeois', 'Paysages impressionnistes de la Moselle', 'Sculptures abstraites inspirées de l\'art celtique'],
        explanation: 'Joseph Kutter (1894–1941) est l\'artiste visuel le plus célébré du Luxembourg. Son style expressionniste, influencé par les expressionnistes allemands, a produit des portraits et des paysages saisissants. Son tableau « Der Clown » est emblématique.',
      },
      de: {
        question: 'Joseph Kutter (1894–1941) ist für welchen Kunststil bekannt?',
        options: ['Fotorealistische Porträts der Großherzoglichen Familie', 'Expressionistische Malerei — Luxemburgs bedeutendster moderner Künstler', 'Impressionistische Flusslandschaften der Mosel', 'Abstrakte Skulpturen inspiriert von keltischer Kunst'],
        explanation: 'Joseph Kutter (1894–1941) ist Luxemburgs gefeierter bildender Künstler. Sein expressionistischer Stil, beeinflusst von den deutschen Expressionisten, schuf eindringliche Porträts und Landschaften. Sein Gemälde „Der Clown" ist ikonisch.',
      },
      lb: {
        question: 'Joseph Kutter (1894–1941) ass fir wéi ee Konschtstil bekannt?',
        options: ['Fotorealistesch Portraiten vun der Groussherzoglecher Famill', 'Expressionistesch Molereien — Lëtzebuerg säi wichtegste moderne Kënschtler', 'Impressionistesch Flosslandschaften vun der Musel', 'Abstrakt Skulpturen inspiréiert vun keltesch Konscht'],
        explanation: 'Joseph Kutter (1894–1941) ass Lëtzebuerg säi gefeierte Bildkënschtler. Säi expressionistesche Stil, beaflosst vun de däitschen Expressionisten, huet erschütternde Portraiten a Landschaften erzuegt. Säi Gemälde « Der Clown » ass ikonescht.',
      },
    },
  },
  {
    id: 'a-inst-1', level: 'ambassador', category: 'institutions',
    question: 'The "Chambre de Commerce" of Luxembourg plays what role?',
    options: ['It collects VAT on behalf of the government', 'It represents the interests of businesses and advises on economic legislation', 'It manages Luxembourg\'s stock exchange', 'It provides legal aid to small businesses'],
    answer: 1,
    explanation: 'The Chambre de Commerce is the mandatory representative body for companies in Luxembourg (excluding crafts and agriculture). It advises on legislation, provides business support services, and promotes Luxembourg as a business location.',
    link: 'https://www.cc.lu/en/',
    translations: {
      fr: {
        question: 'Quel rôle joue la « Chambre de Commerce » du Luxembourg ?',
        options: ['Elle collecte la TVA pour le gouvernement', 'Elle représente les intérêts des entreprises et conseille sur la législation économique', 'Elle gère la bourse du Luxembourg', 'Elle fournit une aide juridique aux petites entreprises'],
        explanation: 'La Chambre de Commerce est l\'organe représentatif obligatoire des entreprises au Luxembourg (à l\'exclusion de l\'artisanat et de l\'agriculture). Elle conseille sur la législation, fournit des services d\'appui aux entreprises et promeut le Luxembourg comme lieu d\'affaires.',
      },
      de: {
        question: 'Welche Rolle spielt die „Chambre de Commerce" in Luxemburg?',
        options: ['Sie erhebt Mehrwertsteuer für die Regierung', 'Sie vertritt Unternehmensinteressen und berät zu Wirtschaftsgesetzen', 'Sie verwaltet die luxemburgische Börse', 'Sie bietet Rechtsberatung für Kleinunternehmen'],
        explanation: 'Die Chambre de Commerce ist das obligatorische Vertretungsorgan für Unternehmen in Luxemburg (außer Handwerk und Landwirtschaft). Sie berät zu Gesetzen, bietet Unternehmensunterstützungsleistungen an und fördert Luxemburg als Wirtschaftsstandort.',
      },
      lb: {
        question: 'Wéi eng Roll spillt d\'« Chambre de Commerce » zu Lëtzebuerg?',
        options: ['Si heit TVA fir d\'Regierung', 'Si représentéiert d\'Interessien vu Betriber a berät zu wirtschaftlecher Gesetzgebung', 'Si verwaltet d\'Lëtzebuerger Bourse', 'Si bitt juristesch Hëllef fir kleng Betriber'],
        explanation: 'D\'Chambre de Commerce ass dat obligatorescht Représentatiounsorgan fir Betriber zu Lëtzebuerg (ausser Handwierk a Landwirtschaft). Si berät zu Gesetzer, bitt Ënnerstëtzungsdéngschter fir Betriber a fördert Lëtzebuerg als Wirtschaftsstandort.',
      },
    },
  },
  // sub-level 2
  {
    id: 'a-econ-1', level: 'ambassador', category: 'economy',
    question: 'What is the "Luxembourg for Finance" initiative?',
    options: ['A public-private agency promoting Luxembourg as an international financial centre', 'A bank exclusively for Luxembourg residents', 'An EU body managing cross-border financial regulations', 'A tax office for multinational companies'],
    answer: 0,
    explanation: 'Luxembourg for Finance is a public-private partnership between the government and the financial industry association (PROFIL) that promotes Luxembourg internationally as a financial centre for fund domiciliation, green finance, and fintech.',
    link: 'https://www.luxembourgforfinance.com/en/',
    translations: {
      fr: {
        question: 'Qu\'est-ce que l\'initiative « Luxembourg for Finance » ?',
        options: ['Une agence public-privé promouvant le Luxembourg comme centre financier international', 'Une banque exclusivement pour les résidents luxembourgeois', 'Un organisme de l\'UE gérant les réglementations financières transfrontalières', 'Un bureau fiscal pour les multinationales'],
        explanation: 'Luxembourg for Finance est un partenariat public-privé entre le gouvernement et l\'association du secteur financier (PROFIL) qui promeut le Luxembourg à l\'international comme centre financier pour la domiciliation de fonds, la finance verte et la fintech.',
      },
      de: {
        question: 'Was ist die „Luxembourg for Finance"-Initiative?',
        options: ['Eine öffentlich-private Agentur, die Luxemburg als internationales Finanzzentrum bewirbt', 'Eine Bank ausschließlich für luxemburgische Einwohner', 'Eine EU-Stelle, die grenzüberschreitende Finanzregelungen verwaltet', 'Ein Steueramt für multinationale Unternehmen'],
        explanation: 'Luxembourg for Finance ist eine öffentlich-private Partnerschaft zwischen Regierung und dem Finanzbranchenverband (PROFIL), die Luxemburg international als Finanzzentrum für Fondsdomizilierung, grüne Finanzen und Fintech fördert.',
      },
      lb: {
        question: 'Wat ass d\'Initiative « Luxembourg for Finance »?',
        options: ['Eng ëffentlech-privat Agentur déi Lëtzebuerg als internationale Finanzzentrum promotéiert', 'Eng Bank exklusiv fir Lëtzebuerger Awunner', 'Eng EU-Stelle déi grenziwwerschreidend Finanzregulatiounen verwaltet', 'En Steieramt fir multinational Betriber'],
        explanation: 'Luxembourg for Finance ass eng ëffentlech-privat Partnerschaft tëschent d\'Regierung an dem Finanzbranchenverband (PROFIL) déi Lëtzebuerg international als Finanzzentrum fir Fondsdomizilierung, greng Finanzen a Fintech promotéiert.',
      },
    },
  },
  {
    id: 'a-lang-2', level: 'ambassador', category: 'language',
    question: 'What is the "Acte de Mariage" written in, in Luxembourg?',
    options: ['Always in Luxembourgish', 'Always in French', 'In the language chosen by the couple (French, German, or Luxembourgish)', 'In Latin, as per historical tradition'],
    answer: 1,
    explanation: 'Official legal documents including civil acts like marriage certificates (acte de mariage) are written in French in Luxembourg, as French is the administrative language for legal and judicial matters.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html',
    translations: {
      fr: {
        question: 'En quelle langue est rédigé l\'« Acte de Mariage » au Luxembourg ?',
        options: ['Toujours en luxembourgeois', 'Toujours en français', 'Dans la langue choisie par le couple (français, allemand ou luxembourgeois)', 'En latin, selon la tradition historique'],
        explanation: 'Les documents juridiques officiels, dont les actes civils comme les actes de mariage, sont rédigés en français au Luxembourg, le français étant la langue administrative pour les affaires légales et judiciaires.',
      },
      de: {
        question: 'In welcher Sprache wird die „Heiratsurkunde" (Acte de Mariage) in Luxemburg ausgestellt?',
        options: ['Immer auf Luxemburgisch', 'Immer auf Französisch', 'In der vom Paar gewählten Sprache (Französisch, Deutsch oder Luxemburgisch)', 'Auf Latein, gemäß historischer Tradition'],
        explanation: 'Offizielle Rechtsdokumente einschließlich Zivilakten wie Heiratsurkunden werden in Luxemburg auf Französisch ausgestellt, da Französisch die Verwaltungssprache für Rechts- und Justizangelegenheiten ist.',
      },
      lb: {
        question: 'A wéi enger Sprooch gëtt den « Acte de Mariage » zu Lëtzebuerg ausgestallt?',
        options: ['Ëmmer op Lëtzebuergesch', 'Ëmmer op Franséisch', 'An der Sprooch déi d\'Koppel wielt (Franséisch, Däitsch oder Lëtzebuergesch)', 'Op Latäin, laut historescher Traditioun'],
        explanation: 'Offiziell juristesch Dokumenter dorënner Zivilakten wéi Heiratsurkonnen ginn zu Lëtzebuerg op Franséisch ausgestallt, well Franséisch d\'Verwaltungssprooch fir juristesch a gerichtlech Saachen ass.',
      },
    },
  },
  {
    id: 'a-hist-2', level: 'ambassador', category: 'history',
    question: 'The "Nassau-Weilburg" dynasty that rules Luxembourg is closely related to the Dutch royal family. Through which marriage did the connection to the current Grand Duke Henri arise?',
    options: ['Grand Duke Adolphe married a Princess of the Netherlands', 'Grand Duchess Charlotte married Prince Félix of Bourbon-Parma; their son Jean became Grand Duke', 'Grand Duke Jean married a Princess of the Orange-Nassau line', 'Grand Duke Henri married Princess Maria Teresa, uniting Luxembourg and Cuba'],
    answer: 1,
    explanation: 'Grand Duchess Charlotte married Prince Félix of Bourbon-Parma in 1919. Their son Jean became Grand Duke in 1964. Jean married Joséphine-Charlotte of Belgium; their son Henri became Grand Duke in 2000.',
    link: 'https://luxembourg.public.lu/en/gouvernement/maison-grand-ducale.html',
    translations: {
      fr: {
        question: 'Par quel mariage le lien avec l\'actuel grand-duc Henri est-il né ?',
        options: ['Le grand-duc Adolphe a épousé une princesse des Pays-Bas', 'La grande-duchesse Charlotte a épousé le prince Félix de Bourbon-Parme ; leur fils Jean est devenu grand-duc', 'Le grand-duc Jean a épousé une princesse de la ligne Orange-Nassau', 'Le grand-duc Henri a épousé la princesse Maria Teresa, unissant Luxembourg et Cuba'],
        explanation: 'La grande-duchesse Charlotte a épousé le prince Félix de Bourbon-Parme en 1919. Leur fils Jean est devenu grand-duc en 1964. Jean a épousé Joséphine-Charlotte de Belgique ; leur fils Henri est devenu grand-duc en 2000.',
      },
      de: {
        question: 'Durch welche Heirat entstand die Verbindung zum heutigen Großherzog Henri?',
        options: ['Großherzog Adolphe heiratete eine Prinzessin der Niederlande', 'Großherzogin Charlotte heiratete Prinz Félix von Bourbon-Parma; ihr Sohn Jean wurde Großherzog', 'Großherzog Jean heiratete eine Prinzessin aus dem Hause Oranien-Nassau', 'Großherzog Henri heiratete Prinzessin Maria Teresa und verband Luxemburg und Kuba'],
        explanation: 'Großherzogin Charlotte heiratete 1919 Prinz Félix von Bourbon-Parma. Ihr Sohn Jean wurde 1964 Großherzog. Jean heiratete Joséphine-Charlotte von Belgien; ihr Sohn Henri wurde 2000 Großherzog.',
      },
      lb: {
        question: 'Duerch wéi eng Hochzäit ass d\'Verbindung zum haitege Groussherzog Henri entstanen?',
        options: ['Groussherzog Adolphe huet eng Prinzessin vun den Nidderlanden bestuet', 'Groussherzogin Charlotte huet de Prënz Félix vu Bourbon-Parma bestuet; hire Jong Jean gouf Groussherzog', 'Groussherzog Jean huet eng Prinzessin vun der Orange-Nassau-Linn bestuet', 'Groussherzog Henri huet d\'Prinzessin Maria Teresa bestuet, Lëtzebuerg a Kuba verbënnt'],
        explanation: 'Groussherzogin Charlotte huet 1919 de Prënz Félix vu Bourbon-Parma bestuet. Hire Jong Jean gouf 1964 Groussherzog. Jean huet Joséphine-Charlotte vu Belgien bestuet; hire Jong Henri gouf 2000 Groussherzog.',
      },
    },
  },
  {
    id: 'a-cult-2', level: 'ambassador', category: 'culture',
    question: 'The "Roude Léiw" (Red Lion) is a symbol of Luxembourg. On which historic flag does it traditionally appear?',
    options: ['The Tricolour flag of 1830', 'The banner of the counts and later dukes of Luxembourg since the 13th century', 'The flag of the Benelux Union', 'The flag used during the Nazi occupation'],
    answer: 1,
    explanation: 'The Roude Léiw (Red Lion) on a white and blue striped background has been the banner of the rulers of Luxembourg since the 13th century. It appears on the coat of arms and is deeply embedded in national identity.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg.html',
    translations: {
      fr: {
        question: 'Le « Roude Léiw » (Lion Rouge) est un symbole du Luxembourg. Sur quel drapeau historique apparaît-il traditionnellement ?',
        options: ['Le drapeau tricolore de 1830', 'La bannière des comtes et ducs de Luxembourg depuis le XIIIe siècle', 'Le drapeau de l\'Union Benelux', 'Le drapeau utilisé lors de l\'occupation nazie'],
        explanation: 'Le Roude Léiw (Lion Rouge) sur fond rayé blanc et bleu est la bannière des souverains du Luxembourg depuis le XIIIe siècle. Il apparaît sur les armoiries et est profondément ancré dans l\'identité nationale.',
      },
      de: {
        question: 'Der „Roude Léiw" (Roter Löwe) ist ein Symbol Luxemburgs. Auf welcher historischen Flagge erscheint er traditionell?',
        options: ['Die Trikolore von 1830', 'Das Banner der Grafen und Herzöge Luxemburgs seit dem 13. Jahrhundert', 'Die Fahne der Benelux-Union', 'Die Flagge während der Nazi-Besatzung'],
        explanation: 'Der Roude Léiw (Rote Löwe) auf weiß-blau gestreiftem Hintergrund ist seit dem 13. Jahrhundert das Banner der Luxemburger Herrscher. Er erscheint im Wappen und ist tief in der nationalen Identität verwurzelt.',
      },
      lb: {
        question: 'De « Roude Léiw » ass e Symbol vu Lëtzebuerg. Op wéi engem historeschen Drapeau erschéngt hien traditionell?',
        options: ['D\'Trikolore vu 1830', 'D\'Baner vun de Grafen a Herzogen vu Lëtzebuerg zënter dem 13. Joerhonnert', 'D\'Fändel vun der Benelux-Unioun', 'D\'Fändel wärend der Naziokkupatioun'],
        explanation: 'De Roude Léiw op engem wäiss-blo gestreiften Hannergrond ass zënter dem 13. Joerhonnert d\'Baner vun de Lëtzebuerger Herrscher. Hien erschéngt um Wopen a ass déif an der Nationalidentitéit verwuerzelt.',
      },
    },
  },
  {
    id: 'a-peop-2', level: 'ambassador', category: 'people',
    question: 'Pierre Werner, Luxembourg\'s Prime Minister in the 1970s, is famous for what European contribution?',
    options: ['Proposing the Schengen free movement zone', 'Authoring the Werner Report (1970), the blueprint for European monetary union', 'Founding the European Investment Bank', 'Drafting the Treaty of Maastricht'],
    answer: 1,
    explanation: 'Pierre Werner (1913–2002) authored the Werner Report in 1970, which laid out the roadmap for a European Economic and Monetary Union. It was the precursor to the euro, making Werner a founding father of the single currency.',
    link: 'https://luxembourg.public.lu/en/gouvernement.html',
    translations: {
      fr: {
        question: 'Pierre Werner, Premier ministre luxembourgeois dans les années 1970, est célèbre pour quelle contribution européenne ?',
        options: ['Avoir proposé l\'espace Schengen de libre circulation', 'Avoir rédigé le rapport Werner (1970), le plan directeur de l\'union monétaire européenne', 'Avoir fondé la Banque européenne d\'investissement', 'Avoir rédigé le Traité de Maastricht'],
        explanation: 'Pierre Werner (1913–2002) a rédigé le rapport Werner en 1970, qui a tracé la feuille de route vers l\'Union économique et monétaire européenne. Il était le précurseur de l\'euro, faisant de Werner un père fondateur de la monnaie unique.',
      },
      de: {
        question: 'Pierre Werner, Luxemburgs Premierminister in den 1970er Jahren, ist für welchen europäischen Beitrag berühmt?',
        options: ['Den Schengen-Freizügigkeitsraum vorzuschlagen', 'Den Werner-Bericht (1970) zu verfassen, den Bauplan für die europäische Währungsunion', 'Die Europäische Investitionsbank zu gründen', 'Den Maastrichter Vertrag zu entwerfen'],
        explanation: 'Pierre Werner (1913–2002) verfasste 1970 den Werner-Bericht, der den Weg zur Europäischen Wirtschafts- und Währungsunion aufzeigte. Er war der Vorläufer des Euro, was Werner zu einem Gründungsvater der gemeinsamen Währung macht.',
      },
      lb: {
        question: 'Pierre Werner, Lëtzebuerg säi Premierminister an den 1970er Joer, ass fir wéi ee europäesche Bäitrag berühmt?',
        options: ['Den Schengen-Fräie Bewegungsraum ze proposéieren', 'Den Werner-Rapport (1970) ze schreiwen, de Blueprënt fir d\'europäesch Wärungsunion', 'D\'Europäesch Investitiounsbank ze grënnen', 'Den Traité de Maastricht ze entwierfen'],
        explanation: 'Pierre Werner (1913–2002) huet 1970 de Werner-Rapport geschriwwen, deen de Wee zur Europäescher Wirtschafts- a Wärungsunion gewisen huet. Hien war den Virläufer vum Euro, wat Werner zu engem Grënnungspapp vun der gemeinsamer Wärung mécht.',
      },
    },
  },
  // sub-level 3
  {
    id: 'a-inst-2', level: 'ambassador', category: 'institutions',
    question: 'What is the "Commissariat aux Assurances" (CAA) in Luxembourg?',
    options: ['A consumer protection body for insurance claims', 'The supervisory authority for the Luxembourg insurance and reinsurance sector', 'A government reinsurance pool for natural disasters', 'An EU-wide insurance regulatory body based in Luxembourg'],
    answer: 1,
    explanation: 'The CAA (Commissariat aux Assurances) is the Luxembourg supervisory authority for the insurance and reinsurance sector. Luxembourg is one of Europe\'s leading insurance and reinsurance domiciles.',
    link: 'https://luxembourg.public.lu/en/entreprises/faire-affaire.html',
    translations: {
      fr: {
        question: 'Qu\'est-ce que le « Commissariat aux Assurances » (CAA) au Luxembourg ?',
        options: ['Un organisme de protection des consommateurs pour les réclamations d\'assurance', 'L\'autorité de surveillance du secteur luxembourgeois des assurances et réassurances', 'Un pool de réassurance gouvernemental pour les catastrophes naturelles', 'Un organisme de réglementation des assurances à l\'échelle de l\'UE basé au Luxembourg'],
        explanation: 'Le CAA est l\'autorité de surveillance luxembourgeoise du secteur des assurances et réassurances. Le Luxembourg est l\'un des principaux domiciles européens pour les assurances et réassurances.',
      },
      de: {
        question: 'Was ist das „Commissariat aux Assurances" (CAA) in Luxemburg?',
        options: ['Eine Verbraucherschutzbehörde für Versicherungsansprüche', 'Die Aufsichtsbehörde für den luxemburgischen Versicherungs- und Rückversicherungssektor', 'Ein staatlicher Rückversicherungspool für Naturkatastrophen', 'Eine EU-weite Versicherungsregulierungsbehörde in Luxemburg'],
        explanation: 'Das CAA ist die luxemburgische Aufsichtsbehörde für den Versicherungs- und Rückversicherungssektor. Luxemburg ist einer der führenden europäischen Standorte für Versicherungen und Rückversicherungen.',
      },
      lb: {
        question: 'Wat ass d\'« Commissariat aux Assurances » (CAA) zu Lëtzebuerg?',
        options: ['Eng Konsumenteschutzstell fir Versécherungsariichten', 'D\'Iwwerwaachungsautoritéit fir de Lëtzebuerger Versécherungs- a Réassurancesecteur', 'En staatleche Réassurancepoul fir Naturkatastrophen', 'Eng EU-weite Versécherungsregulierungsautoritéit zu Lëtzebuerg'],
        explanation: 'D\'CAA ass d\'Lëtzebuerger Iwwerwaachungsautoritéit fir de Versécherungs- a Réassurancesecteur. Lëtzebuerg ass ee vun de féierenden europäesche Plazze fir Versécherungen a Réassurancen.',
      },
    },
  },
  {
    id: 'a-econ-2', level: 'ambassador', category: 'economy',
    question: 'What is Luxembourg\'s "space industry" specialisation?',
    options: ['Manufacturing of satellite components', 'A legal framework (the 2017 SpaceFMI law) allowing companies to own resources extracted in space', 'Operating a national space launch facility', 'Training EU astronauts at a dedicated centre'],
    answer: 1,
    explanation: 'Luxembourg\'s 2017 SpaceFMI law was groundbreaking: it was one of the first national laws to allow private companies to own resources they extract from asteroids and other celestial bodies, attracting space mining companies.',
    link: 'https://luxembourg.public.lu/en/entreprises/faire-affaire.html',
    translations: {
      fr: {
        question: 'Quelle est la spécialisation de l\'industrie spatiale luxembourgeoise ?',
        options: ['Fabrication de composants de satellites', 'Un cadre juridique (la loi SpaceFMI de 2017) permettant aux entreprises de posséder des ressources extraites dans l\'espace', 'Exploitation d\'une installation nationale de lancement spatial', 'Formation d\'astronautes de l\'UE dans un centre dédié'],
        explanation: 'La loi SpaceFMI luxembourgeoise de 2017 était révolutionnaire : c\'était l\'une des premières lois nationales à permettre aux entreprises privées de posséder les ressources qu\'elles extraient d\'astéroïdes et d\'autres corps célestes.',
      },
      de: {
        question: 'Was ist Luxemburgs Spezialisierung in der Raumfahrtindustrie?',
        options: ['Herstellung von Satellitenkomponenten', 'Ein Rechtsrahmen (das SpaceFMI-Gesetz von 2017), der Unternehmen erlaubt, im Weltraum gewonnene Ressourcen zu besitzen', 'Betrieb einer nationalen Raketenabschussanlage', 'Ausbildung von EU-Astronauten in einem eigenen Zentrum'],
        explanation: 'Luxemburgs SpaceFMI-Gesetz von 2017 war bahnbrechend: Es war eines der ersten nationalen Gesetze, das privaten Unternehmen erlaubte, Ressourcen zu besitzen, die sie von Asteroiden und anderen Himmelskörpern gewinnen.',
      },
      lb: {
        question: 'Wat ass Lëtzebuerg seng Spezialisatioun an der Raumfahrtindustrie?',
        options: ['Fabrikatioun vu Satellittekomponenten', 'E juristesche Rahmen (d\'SpaceFMI-Gesetz vu 2017) deen Betriber erlaabt Ressourcen déi am Weltraum gewonnen goufen ze besëtzen', 'Betrieb vun enger nationale Raumstartanlag', 'Ausbildung vun EU-Astronauten an engem speziellen Zentrum'],
        explanation: 'Lëtzebuerg säi SpaceFMI-Gesetz vu 2017 war bahnbriechers: Et war ee vun den éischte nationale Gesetzer dat privat Betriber erlaabt huet Ressourcen ze besëtzen déi si vun Asteroiden an anere Himmelskierper gewannen.',
      },
    },
  },
  {
    id: 'a-lang-3', level: 'ambassador', category: 'language',
    question: 'The Luxembourgish alphabet has how many letters, and what is distinctive about it?',
    options: ['24 letters, identical to German', '26 letters plus ë, é, â, and ô accented characters unique to Luxembourgish', '29 letters including unique digraphs ch, sch, and ng', '30 letters including the eszett (ß) and umlaut characters'],
    answer: 1,
    explanation: 'Luxembourgish uses a 26-letter Latin alphabet plus accented characters. Most notably, the ë (e-umlaut) is used for a sound that is specifically Luxembourgish — as in "Lëtzebuerg". French-derived accents (é, â) also appear.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html',
    translations: {
      fr: {
        question: 'L\'alphabet luxembourgeois compte combien de lettres, et qu\'est-ce qui le distingue ?',
        options: ['24 lettres, identique à l\'allemand', '26 lettres plus les caractères accentués ë, é, â, et ô propres au luxembourgeois', '29 lettres dont les digrammes ch, sch et ng', '30 lettres dont l\'eszett (ß) et les trémas'],
        explanation: 'Le luxembourgeois utilise un alphabet latin de 26 lettres plus des caractères accentués. Le ë (e-tréma) est particulièrement distinctif — on le trouve dans « Lëtzebuerg ». Les accents d\'origine française (é, â) apparaissent également.',
      },
      de: {
        question: 'Wie viele Buchstaben hat das luxemburgische Alphabet, und was ist besonders daran?',
        options: ['24 Buchstaben, identisch mit Deutsch', '26 Buchstaben plus die für Luxemburgisch typischen Akzentzeichen ë, é, â und ô', '29 Buchstaben einschließlich der Digraphen ch, sch und ng', '30 Buchstaben einschließlich Eszett (ß) und Umlautzeichen'],
        explanation: 'Luxemburgisch verwendet das 26-buchstabige lateinische Alphabet plus Akzentzeichen. Das ë (e-Umlaut) ist besonders markant — es kommt in „Lëtzebuerg" vor. Französischstämmige Akzente (é, â) erscheinen ebenfalls.',
      },
      lb: {
        question: 'Wéi vill Buschtawen huet den Lëtzebuerger Alphabet, a wat ass besonnesch dodrun?',
        options: ['24 Buschtawen, identesch mam Däitschen', '26 Buschtawen plus d\'Akzentzeichen ë, é, â a ô typesch fir Lëtzebuergesch', '29 Buschtawen dorënner d\'Digraphe ch, sch an ng', '30 Buschtawen dorënner d\'Eszett (ß) an Umlautzeichen'],
        explanation: 'Lëtzebuergesch benotzt en 26-Buschtawen latäinesch Alphabet plus Akzentzeichen. Dat ë (e-Umlaut) ass besonnesch markant — et kënnt a « Lëtzebuerg » vir. Franséisch-stämmeg Akzenter (é, â) erschéngen och.',
      },
    },
  },
  {
    id: 'a-hist-3', level: 'ambassador', category: 'history',
    question: 'Which medieval emperor built extensive parts of Luxembourg\'s famous fortifications in the 14th century?',
    options: ['Charlemagne', 'Charles IV (King of Bohemia and Holy Roman Emperor)', 'Frederick Barbarossa', 'Henry V'],
    answer: 1,
    explanation: 'Charles IV, Count of Luxembourg and Holy Roman Emperor, significantly expanded and strengthened Luxembourg\'s fortifications in the 14th century, turning it into one of Europe\'s great fortresses.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'Quel empereur médiéval a construit d\'importantes parties des célèbres fortifications du Luxembourg au XIVe siècle ?',
        options: ['Charlemagne', 'Charles IV (roi de Bohême et saint empereur romain)', 'Frédéric Barberousse', 'Henri V'],
        explanation: 'Charles IV, comte de Luxembourg et saint empereur romain, a considérablement agrandi et renforcé les fortifications de Luxembourg au XIVe siècle, en faisant l\'une des grandes forteresses d\'Europe.',
      },
      de: {
        question: 'Welcher mittelalterliche Kaiser ließ im 14. Jahrhundert wesentliche Teile von Luxemburgs berühmten Befestigungsanlagen bauen?',
        options: ['Karl der Große', 'Karl IV. (König von Böhmen und Heiliger Römischer Kaiser)', 'Friedrich Barbarossa', 'Heinrich V.'],
        explanation: 'Karl IV., Graf von Luxemburg und Heiliger Römischer Kaiser, erweiterte und stärkte im 14. Jahrhundert Luxemburgs Befestigungsanlagen erheblich und machte es zu einer der großen Festungen Europas.',
      },
      lb: {
        question: 'Wéi ee mëttelalterlecht Kaiser huet am 14. Joerhonnert wesentlech Deeler vu Lëtzebuerg senge berühmte Festungsanlagen gebaut?',
        options: ['Karl de Groussen', 'Karl IV. (Kinnek vu Böhmen a Hellege Réimeschen Kaiser)', 'Friedrich Barbarossa', 'Heinrich V.'],
        explanation: 'Karl IV., Grof vu Lëtzebuerg a Hellege Réimescher Kaiser, huet am 14. Joerhonnert Lëtzebuerg seng Festungsanlagen wesentlech erweiderert a verstäerkt, an et zu enger vun de grousse Festungen an Europa gemaach.',
      },
    },
  },
  {
    id: 'a-cult-3', level: 'ambassador', category: 'culture',
    question: 'The Abbaye de Neumünster in Luxembourg City serves what function today?',
    options: ['An active Benedictine monastery', 'A cultural centre and meeting space hosting exhibitions and events', 'The national archive and library', 'A hotel and spa in the Grund district'],
    answer: 1,
    explanation: 'The Abbaye de Neumünster (neimenster) in the Grund quarter has been transformed into a vibrant cultural centre hosting concerts, theatre, exhibitions, and conferences — a symbol of Luxembourg\'s cultural life.',
    link: 'https://www.neimenster.lu/en',
    translations: {
      fr: {
        question: 'L\'Abbaye de Neumünster à Luxembourg-Ville remplit quelle fonction aujourd\'hui ?',
        options: ['Un monastère bénédictin actif', 'Un centre culturel et espace de rencontre accueillant expositions et événements', 'Les archives et bibliothèque nationales', 'Un hôtel et spa dans le quartier du Grund'],
        explanation: 'L\'Abbaye de Neumünster (neimenster) dans le quartier du Grund a été transformée en un centre culturel dynamique accueillant concerts, théâtre, expositions et conférences — un symbole de la vie culturelle luxembourgeoise.',
      },
      de: {
        question: 'Welche Funktion hat die Abtei Neumünster in Luxemburg-Stadt heute?',
        options: ['Ein aktives Benediktinerkloster', 'Ein Kulturzentrum und Begegnungsstätte für Ausstellungen und Veranstaltungen', 'Das Nationalarchiv und die Nationalbibliothek', 'Ein Hotel und Spa im Grundviertel'],
        explanation: 'Die Abtei Neumünster (neimenster) im Grundviertel wurde zu einem lebendigen Kulturzentrum für Konzerte, Theater, Ausstellungen und Konferenzen umgestaltet — ein Symbol des luxemburgischen Kulturlebens.',
      },
      lb: {
        question: 'Wéi eng Funktioun huet d\'Abbaye de Neumünster zu Lëtzebuerg-Stad haut?',
        options: ['E raktiven Benediktiner Klouschter', 'En Kulturzentrum a Begéinungsplaz fir Ausstellungen an Evenementer', 'D\'national Archiv a Bibliothéik', 'En Hotell a Spa am Grond-Quartier'],
        explanation: 'D\'Abbaye de Neumünster (neimenster) am Grond-Quartier gouf zu engem liewegen Kulturzentrum fir Concerten, Theater, Ausstellungen a Konferenzen ëmgestallt — e Symbol vum Lëtzebuerger Kulturliewen.',
      },
    },
  },
  // sub-level 4
  {
    id: 'a-peop-3', level: 'ambassador', category: 'people',
    question: 'Fernand Thill (1903–1959) was Luxembourg\'s first world champion in which sport?',
    options: ['Cycling road race', 'Boxing (world lightweight champion)', 'Football', 'Athletics (triple jump)'],
    answer: 1,
    explanation: 'Fernand Thill became the first Luxembourger to win a world championship when he won the world lightweight boxing title in 1931. He remains one of Luxembourg\'s greatest sporting heroes.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'Fernand Thill (1903–1959) a été le premier champion du monde luxembourgeois dans quel sport ?',
        options: ['Course cycliste sur route', 'Boxe (champion du monde des poids légers)', 'Football', 'Athlétisme (triple saut)'],
        explanation: 'Fernand Thill est devenu le premier Luxembourgeois à remporter un titre de champion du monde lorsqu\'il a gagné le titre de champion du monde des poids légers en boxe en 1931. Il reste l\'un des plus grands héros sportifs du Luxembourg.',
      },
      de: {
        question: 'Fernand Thill (1903–1959) war Luxemburgs erster Weltmeister in welchem Sport?',
        options: ['Radrennen auf der Straße', 'Boxen (Weltmeister im Leichtgewicht)', 'Fußball', 'Leichtathletik (Dreisprung)'],
        explanation: 'Fernand Thill wurde zum ersten Luxemburger, der einen Weltmeistertitel gewann, als er 1931 den Weltmeistertitel im Boxen im Leichtgewicht holte. Er gilt als einer der größten Sporthelden Luxemburgs.',
      },
      lb: {
        question: 'Fernand Thill (1903–1959) war Lëtzebuerg säi éischte Weltmeeschter an wéi engem Sport?',
        options: ['Radrennen op der Strooss', 'Boxen (Weltmeeschter am Liichtgewiicht)', 'Fussball', 'Loftschport (Dräisprong)'],
        explanation: 'Fernand Thill gouf zum éischte Lëtzebuerger dee e Weltmeechtertitel gewonnen huet, wéi hien 1931 den Weltmeechtertitel am Boxen am Liichtgewiicht geholl huet. Hien bleift ee vun de gréisste Sportshelden vu Lëtzebuerg.',
      },
    },
  },
  {
    id: 'a-inst-3', level: 'ambassador', category: 'institutions',
    question: 'What is the "CSSF" in Luxembourg?',
    options: ['The state social security fund', 'The financial sector supervisory authority (Commission de Surveillance du Secteur Financier)', 'The civil service salary framework', 'The customs and excise service'],
    answer: 1,
    explanation: 'The CSSF (Commission de Surveillance du Secteur Financier) is Luxembourg\'s financial regulatory authority, supervising banks, investment firms, funds, and payment institutions. It is one of Europe\'s most important financial regulators.',
    link: 'https://www.cssf.lu/en/',
    translations: {
      fr: {
        question: 'Qu\'est-ce que la « CSSF » au Luxembourg ?',
        options: ['Le fonds national de sécurité sociale', 'L\'autorité de surveillance du secteur financier (Commission de Surveillance du Secteur Financier)', 'Le cadre salarial de la fonction publique', 'Le service des douanes et accises'],
        explanation: 'La CSSF (Commission de Surveillance du Secteur Financier) est l\'autorité de réglementation financière luxembourgeoise, supervisant banques, sociétés d\'investissement, fonds et établissements de paiement. C\'est l\'un des régulateurs financiers les plus importants d\'Europe.',
      },
      de: {
        question: 'Was ist die „CSSF" in Luxemburg?',
        options: ['Der staatliche Sozialversicherungsfonds', 'Die Finanzmarktaufsichtsbehörde (Commission de Surveillance du Secteur Financier)', 'Der Besoldungsrahmen für den öffentlichen Dienst', 'Der Zoll- und Verbrauchsteuerdienst'],
        explanation: 'Die CSSF (Commission de Surveillance du Secteur Financier) ist Luxemburgs Finanzaufsichtsbehörde, die Banken, Investmentgesellschaften, Fonds und Zahlungsinstitute beaufsichtigt. Sie ist eine der wichtigsten Finanzaufsichtsbehörden Europas.',
      },
      lb: {
        question: 'Wat ass d\'« CSSF » zu Lëtzebuerg?',
        options: ['Den nationale Sozialversécheroungsfonds', 'D\'Finanzmarktiwwerwaachungsautoritéit (Commission de Surveillance du Secteur Financier)', 'De Besoldungsrahmen fir den ëffentleche Secteur', 'Den Zolls- a Verbrauchsteuerdéngscht'],
        explanation: 'D\'CSSF ass Lëtzebuerg seng Finanziwwerwaachungsautoritéit, déi Banken, Investitiounsfirmen, Fonds a Bezuelungsinstituter iwwerwacht. Si ass eng vun den wichtegsten Finanzregulierungsautoritéiten an Europa.',
      },
    },
  },
  {
    id: 'a-econ-3', level: 'ambassador', category: 'economy',
    question: 'What is "LuxLeaks" (2014) in the context of Luxembourg?',
    options: ['A water infrastructure scandal in northern Luxembourg', 'The revelation of secret tax rulings that allowed multinationals to pay very low taxes via Luxembourg', 'A data breach at a Luxembourg bank exposing client details', 'A whistleblower case about environmental dumping near the Moselle'],
    answer: 1,
    explanation: 'LuxLeaks (2014) revealed hundreds of secret tax rulings (tax deals) between Luxembourg and major multinationals, allowing them to minimise taxes globally. It triggered EU-wide debate on tax avoidance and led to significant tax reforms.',
    link: 'https://luxembourg.public.lu/en/entreprises/faire-affaire.html',
    translations: {
      fr: {
        question: 'Qu\'est-ce que « LuxLeaks » (2014) dans le contexte luxembourgeois ?',
        options: ['Un scandale d\'infrastructure hydraulique dans le nord du Luxembourg', 'La révélation de rulings fiscaux secrets permettant aux multinationales de payer très peu d\'impôts via le Luxembourg', 'Une violation de données dans une banque luxembourgeoise exposant des données clients', 'Une affaire de lanceur d\'alerte sur des déversements environnementaux près de la Moselle'],
        explanation: 'LuxLeaks (2014) a révélé des centaines de rulings fiscaux secrets entre le Luxembourg et de grandes multinationales, leur permettant de minimiser leurs impôts à l\'échelle mondiale. Cela a déclenché un débat à l\'échelle de l\'UE sur l\'évitement fiscal.',
      },
      de: {
        question: 'Was ist „LuxLeaks" (2014) im luxemburgischen Kontext?',
        options: ['Ein Wasserinfrastrukturskandal in Nordluxemburg', 'Die Enthüllung geheimer Steuervorbescheide, die Konzernen ermöglichten, über Luxemburg sehr wenig Steuern zu zahlen', 'Ein Datenleck bei einer luxemburgischen Bank mit Kundendaten', 'Ein Whistleblower-Fall über Umweltverschmutzung an der Mosel'],
        explanation: 'LuxLeaks (2014) enthüllte Hunderte geheimer Steuervorbescheide zwischen Luxemburg und großen Konzernen, die es ihnen ermöglichten, weltweit Steuern zu minimieren. Es löste eine EU-weite Debatte über Steuervermeidung aus.',
      },
      lb: {
        question: 'Wat ass « LuxLeaks » (2014) am Lëtzebuerger Kontext?',
        options: ['E Waasserinfrastrukturskandal am Norde vu Lëtzebuerg', 'D\'Onthüllung vu geheime Steieruerteller déi Multis erlaabt hunn iwwer Lëtzebuerg ganz wéineg Steieren ze bezuelen', 'Een Datenleck bei enger Lëtzebuerger Bank mat Kundendaten', 'E Whistleblower-Fall iwwer Ëmweltverschmotzung no der Musel'],
        explanation: 'LuxLeaks (2014) huet Honnerte vu geheime Steieruerteller tëschent Lëtzebuerg a groussen Multis onthüllt, déi et hinnen erlaabt hunn weltwäit Steieren ze minimiséieren. Dat huet eng EU-weite Debatt iwwer Steiervermeidung ausgeléist.',
      },
    },
  },
  {
    id: 'a-lang-4', level: 'ambassador', category: 'language',
    question: 'What is the "ONL" (Office National de la Langue Luxembourgeoise) responsible for?',
    options: ['Teaching Luxembourgish to immigrants', 'Standardising, promoting, and developing the Luxembourgish language', 'Publishing the official government gazette in Luxembourgish', 'Running language tests for naturalisation'],
    answer: 1,
    explanation: 'The ONL is the official body responsible for standardising Luxembourgish orthography and grammar, developing the language (including neologisms), and promoting its use. It maintains the official Luxembourgish dictionary.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html',
    translations: {
      fr: {
        question: 'De quoi est responsable l\'« ONL » (Office National de la Langue Luxembourgeoise) ?',
        options: ['Enseigner le luxembourgeois aux immigrants', 'Standardiser, promouvoir et développer la langue luxembourgeoise', 'Publier le Journal officiel du gouvernement en luxembourgeois', 'Organiser les tests linguistiques pour la naturalisation'],
        explanation: 'L\'ONL est l\'organe officiel responsable de la standardisation de l\'orthographe et de la grammaire luxembourgeoises, du développement de la langue (y compris les néologismes) et de la promotion de son usage. Il maintient le dictionnaire officiel luxembourgeois.',
      },
      de: {
        question: 'Wofür ist das „ONL" (Office National de la Langue Luxembourgeoise) zuständig?',
        options: ['Luxemburgisch an Einwanderer zu unterrichten', 'Die luxemburgische Sprache zu standardisieren, zu fördern und zu entwickeln', 'Das offizielle Regierungsblatt auf Luxemburgisch zu veröffentlichen', 'Sprachtests für die Einbürgerung durchzuführen'],
        explanation: 'Das ONL ist die offizielle Stelle, die für die Standardisierung der luxemburgischen Rechtschreibung und Grammatik, die Sprachentwicklung (einschließlich Neologismen) und die Förderung ihrer Verwendung zuständig ist. Es führt das offizielle luxemburgische Wörterbuch.',
      },
      lb: {
        question: 'Wofir ass d\'« ONL » (Office National de la Langue Luxembourgeoise) verantwortlech?',
        options: ['Lëtzebuergesch un Immigranten ze léieren', 'D\'Lëtzebuerger Sprooch ze standardiséieren, ze promotéieren an ze entwéckelen', 'D\'offiziell Regierungsbericht op Lëtzebuergesch ze publizéieren', 'Sproochetester fir Naturalisatioun ze organiséieren'],
        explanation: 'D\'ONL ass dat offiziellt Orgaan dat fir d\'Standardiséierung vun der Lëtzebuerger Orthographie a Grammatik, d\'Sproochentwécklung (dorënner Neologismes) an d\'Fërderung vun hirem Gebrauch verantwortlech ass. Et féiert dat offiziellt Lëtzebuerger Wierderbuch.',
      },
    },
  },
  {
    id: 'a-hist-4', level: 'ambassador', category: 'history',
    question: 'The fortress of Luxembourg was dubbed "The Gibraltar of the North" by Napoleon. It was finally demolished (neutered) after which treaty?',
    options: ['The Treaty of Paris (1815)', 'The Treaty of London (1867)', 'The Treaty of Versailles (1919)', 'The Treaty of Maastricht (1992)'],
    answer: 1,
    explanation: 'The Treaty of London (1867) declared Luxembourg permanently neutral and required the demolition of its formidable fortress — the "Gibraltar of the North". The tunnels and casemates beneath remain and are now a UNESCO World Heritage site.',
    link: 'https://luxembourg.public.lu/en/decouvrir-luxembourg/histoire.html',
    translations: {
      fr: {
        question: 'La forteresse du Luxembourg était surnommée « Le Gibraltar du Nord » par Napoléon. Elle a finalement été démantelée (neutralisée) après quel traité ?',
        options: ['Le Traité de Paris (1815)', 'Le Traité de Londres (1867)', 'Le Traité de Versailles (1919)', 'Le Traité de Maastricht (1992)'],
        explanation: 'Le Traité de Londres (1867) a déclaré le Luxembourg perpétuellement neutre et exigé le démantèlement de son formidable fort — le « Gibraltar du Nord ». Les tunnels et casemates souterrains subsistent et font désormais partie du patrimoine mondial de l\'UNESCO.',
      },
      de: {
        question: 'Die Festung von Luxemburg wurde von Napoleon als „Gibraltar des Nordens" bezeichnet. Sie wurde schließlich nach welchem Vertrag abgerissen (neutralisiert)?',
        options: ['Pariser Vertrag (1815)', 'Londoner Vertrag (1867)', 'Versailler Vertrag (1919)', 'Maastrichter Vertrag (1992)'],
        explanation: 'Der Londoner Vertrag (1867) erklärte Luxemburg für dauerhaft neutral und verlangte den Abriss seiner gewaltigen Festung — des „Gibraltars des Nordens". Die unterirdischen Tunnel und Kasematten sind erhalten und heute UNESCO-Welterbe.',
      },
      lb: {
        question: 'D\'Festung vu Lëtzebuerg gouf vum Napoleon « Gibraltar vum Norden » genannt. Si gouf schlussendlech no wéi engem Traité ofgerappt (neutraliséiert)?',
        options: ['Traité de Paris (1815)', 'Traité de Londres (1867)', 'Traité de Versailles (1919)', 'Traité de Maastricht (1992)'],
        explanation: 'Den Traité de Londres (1867) huet Lëtzebuerg fir ëmmer neutral erkläert an den Ofrap vu senger enormer Festung — dem « Gibraltar vum Norden » — verlaangt. D\'ënnerierdesch Tunnelen a Kasematten bleiwen a sinn elo UNESCO-Welterbe.',
      },
    },
  },
  // sub-level 5
  {
    id: 'a-cult-4', level: 'ambassador', category: 'culture',
    question: 'The "Casino Luxembourg — Forum d\'Art Contemporain" is located where?',
    options: ['On the plateau du Kirchberg', 'In a converted 19th-century casino building on Boulevard Royal', 'In the Grund quarter next to the Alzette', 'In the Belval Blast Furnaces complex'],
    answer: 1,
    explanation: 'Casino Luxembourg — Forum d\'Art Contemporain is located in a restored 19th-century casino building on Boulevard Royal in the heart of Luxembourg City. It is a leading contemporary art space.',
    link: 'https://www.casino-luxembourg.lu/en/',
    translations: {
      fr: {
        question: 'Le « Casino Luxembourg — Forum d\'Art Contemporain » est situé où ?',
        options: ['Sur le plateau du Kirchberg', 'Dans un immeuble de casino du XIXe siècle converti sur le Boulevard Royal', 'Dans le quartier du Grund près de l\'Alzette', 'Dans le complexe des hauts-fourneaux de Belval'],
        explanation: 'Casino Luxembourg — Forum d\'Art Contemporain est situé dans un immeuble de casino du XIXe siècle restauré sur le Boulevard Royal au cœur de Luxembourg-Ville. C\'est un espace d\'art contemporain majeur.',
      },
      de: {
        question: 'Wo befindet sich das „Casino Luxembourg — Forum d\'Art Contemporain"?',
        options: ['Auf dem Kirchberg-Plateau', 'In einem umgebauten Kasino-Gebäude des 19. Jahrhunderts am Boulevard Royal', 'Im Grundviertel neben der Alzette', 'Im Hochofenkomplex Belval'],
        explanation: 'Das Casino Luxembourg — Forum d\'Art Contemporain befindet sich in einem restaurierten Kasino-Gebäude aus dem 19. Jahrhundert am Boulevard Royal im Herzen von Luxemburg-Stadt. Es ist ein führender Raum für zeitgenössische Kunst.',
      },
      lb: {
        question: 'Wou ass de « Casino Luxembourg — Forum d\'Art Contemporain » gelegen?',
        options: ['Um Kirchberg-Plateau', 'An engem ëmgebaut Kasino-Gebai vum 19. Joerhonnert um Boulevard Royal', 'Am Grond-Quartier nieft der Alzette', 'Am Héichhefe-Komplex zu Belval'],
        explanation: 'De Casino Luxembourg — Forum d\'Art Contemporain ass an engem restauréierte Kasino-Gebai vum 19. Joerhonnert um Boulevard Royal am Häerz vu Lëtzebuerg-Stad gelegen. Et ass e féierenden Raum fir zäitgenëssesch Konscht.',
      },
    },
  },
  {
    id: 'a-peop-4', level: 'ambassador', category: 'people',
    question: 'Marc Angel is a Luxembourgish politician who became what in 2022?',
    options: ['Prime Minister of Luxembourg', 'Vice-President of the European Parliament', 'EU Commissioner for the Internal Market', 'President of the Eurogroup'],
    answer: 1,
    explanation: 'Marc Angel (LSAP) was elected Vice-President of the European Parliament in January 2022, becoming one of Luxembourg\'s most prominent figures in the EU\'s legislative institution.',
    link: 'https://luxembourg.public.lu/en/gouvernement.html',
    translations: {
      fr: {
        question: 'Marc Angel est un homme politique luxembourgeois qui est devenu quoi en 2022 ?',
        options: ['Premier ministre du Luxembourg', 'Vice-président du Parlement européen', 'Commissaire européen au marché intérieur', 'Président de l\'Eurogroupe'],
        explanation: 'Marc Angel (LSAP) a été élu vice-président du Parlement européen en janvier 2022, devenant l\'une des figures luxembourgeoises les plus en vue au sein de l\'institution législative de l\'UE.',
      },
      de: {
        question: 'Marc Angel ist ein luxemburgischer Politiker, der 2022 was wurde?',
        options: ['Premierminister Luxemburgs', 'Vizepräsident des Europäischen Parlaments', 'EU-Kommissar für den Binnenmarkt', 'Präsident der Eurogruppe'],
        explanation: 'Marc Angel (LSAP) wurde im Januar 2022 zum Vizepräsidenten des Europäischen Parlaments gewählt und ist damit eine der prominentesten luxemburgischen Figuren in der Gesetzgebungsinstanz der EU.',
      },
      lb: {
        question: 'Marc Angel ass e Lëtzebuerger Politiker deen 2022 wat gouf?',
        options: ['Premierminister vu Lëtzebuerg', 'Vizepräsident vum Europäesche Parlament', 'EU-Kommissär fir de Binnemaart', 'President vun der Eurogrupp'],
        explanation: 'Marc Angel (LSAP) gouf am Januar 2022 als Vizepräsident vum Europäesche Parlament gewielt, an ass domat eng vun de prominentsten Lëtzebuerger Figuren an der Gesetzgebungsinstitutioun vun der EU.',
      },
    },
  },
  {
    id: 'a-inst-4', level: 'ambassador', category: 'institutions',
    question: 'What is "Lëtzebuergesch als Integratiounssprooch" (LI)?',
    options: ['A mandatory school subject for all children', 'A state-funded Luxembourgish language programme specifically for adult migrants and residents', 'A university degree in Luxembourgish linguistics', 'A radio programme teaching Luxembourgish phrases'],
    answer: 1,
    explanation: '"Lëtzebuergesch als Integratiounssprooch" (LI) is a free language programme for adult migrants and residents in Luxembourg to learn Luxembourgish as part of their integration journey, funded by the Ministry of Education.',
    link: 'https://luxembourg.public.lu/en/vivre/luxembourgeois.html',
    translations: {
      fr: {
        question: 'Qu\'est-ce que « Lëtzebuergesch als Integratiounssprooch » (LI) ?',
        options: ['Un cours obligatoire pour tous les enfants', 'Un programme de langue luxembourgeoise financé par l\'État pour les migrants et résidents adultes', 'Un diplôme universitaire en linguistique luxembourgeoise', 'Une émission de radio enseignant le luxembourgeois'],
        explanation: '« Lëtzebuergesch als Integratiounssprooch » (LI) est un programme gratuit pour les migrants et résidents adultes au Luxembourg souhaitant apprendre le luxembourgeois dans le cadre de leur parcours d\'intégration, financé par le ministère de l\'Éducation.',
      },
      de: {
        question: 'Was ist „Lëtzebuergesch als Integratiounssprooch" (LI)?',
        options: ['Ein Pflichtschulfach für alle Kinder', 'Ein staatlich finanziertes Luxemburgisch-Programm speziell für erwachsene Migranten und Einwohner', 'Ein Universitätsabschluss in Luxemburgistik', 'Eine Radiosendung zum Luxemburgischlernen'],
        explanation: '„Lëtzebuergesch als Integratiounssprooch" (LI) ist ein kostenloses Sprachprogramm für erwachsene Migranten und Einwohner in Luxemburg, die im Rahmen ihrer Integration Luxemburgisch lernen möchten, finanziert vom Bildungsministerium.',
      },
      lb: {
        question: 'Wat ass « Lëtzebuergesch als Integratiounssprooch » (LI)?',
        options: ['E Pflichtscholfach fir all Kanner', 'E staatleche finanzéierte Lëtzebuergesch-Programm speziell fir erwuessen Migranten an Awunner', 'En Universitéitsdiplom a Lëtzebuerger Linguistik', 'Eng Radiosendung fir Lëtzebuergesch ze léieren'],
        explanation: '« Lëtzebuergesch als Integratiounssprooch » (LI) ass e gratis Sproochprogramm fir erwuessen Migranten an Awunner zu Lëtzebuerg déi am Kader vun hirer Integratioun Lëtzebuergesch léiere wëllen, finanzéiert vum Bildungsministère.',
      },
    },
  },
  {
    id: 'a-econ-4', level: 'ambassador', category: 'economy',
    question: 'What is Luxembourg\'s "green bond" contribution to global finance?',
    options: ['Luxembourg invented the concept of a green bond in 2003', 'The Luxembourg Green Exchange (LGX), launched in 2016, was the world\'s first platform dedicated to green, social, and sustainable securities', 'Luxembourg banned all non-ESG investment funds in 2018', 'Luxembourg issues sovereign green bonds worth €50 billion annually'],
    answer: 1,
    explanation: 'The Luxembourg Green Exchange (LGX), launched by the Luxembourg Stock Exchange in 2016, was the world\'s first dedicated platform for green, social, and sustainable bonds — cementing Luxembourg\'s position in sustainable finance.',
    link: 'https://www.bourse.lu/green-exchange',
    translations: {
      fr: {
        question: 'Quelle est la contribution du Luxembourg à la finance verte mondiale ?',
        options: ['Le Luxembourg a inventé le concept d\'obligation verte en 2003', 'La Luxembourg Green Exchange (LGX), lancée en 2016, était la première plateforme mondiale dédiée aux obligations vertes, sociales et durables', 'Le Luxembourg a interdit tous les fonds non-ESG en 2018', 'Le Luxembourg émet des obligations vertes souveraines de 50 milliards d\'euros par an'],
        explanation: 'La Luxembourg Green Exchange (LGX), lancée par la Bourse de Luxembourg en 2016, était la première plateforme dédiée aux obligations vertes, sociales et durables au monde — confirmant la position du Luxembourg dans la finance durable.',
      },
      de: {
        question: 'Was ist Luxemburgs Beitrag zur globalen grünen Finanzwirtschaft?',
        options: ['Luxemburg erfand 2003 das Konzept der Grünen Anleihe', 'Die 2016 gestartete Luxembourg Green Exchange (LGX) war die erste Plattform weltweit für grüne, soziale und nachhaltige Wertpapiere', 'Luxemburg verbot 2018 alle Nicht-ESG-Investmentfonds', 'Luxemburg gibt jährlich grüne Staatsanleihen im Wert von 50 Milliarden Euro aus'],
        explanation: 'Die Luxembourg Green Exchange (LGX), 2016 von der Luxemburger Börse gestartet, war die weltweit erste dedizierte Plattform für grüne, soziale und nachhaltige Anleihen — und festigte Luxemburgs Position in der nachhaltigen Finanzwirtschaft.',
      },
      lb: {
        question: 'Wat ass Lëtzebuerg säi Bäitrag zur globaler grénger Finanzwirtschaft?',
        options: ['Lëtzebuerg huet 2003 d\'Konzept vun enger grénger Obligatioun erfonnt', 'Déi 2016 gestartete Luxembourg Green Exchange (LGX) war déi éischt Plattform weltwäit fir gréng, sozial a nohalteg Wäertpapieren', 'Lëtzebuerg huet 2018 all net-ESG-Investitiounsfonds verbannt', 'Lëtzebuerg gëtt all Joer gréng souveräng Obligatiounen am Wäert vu 50 Milliarden Euro eraus'],
        explanation: 'Déi 2016 vun der Lëtzebuerger Bourse gestartete Luxembourg Green Exchange (LGX) war déi éischt dedicéiert Plattform weltwäit fir gréng, sozial a nohalteg Obligatiounen — a festegt Lëtzebuerg seng Positioun an der nohalteger Finanzwirtschaft.',
      },
    },
  },
  {
    id: 'a-lang-5', level: 'ambassador', category: 'language',
    question: 'In Luxembourgish, what is the correct plural of "Kand" (child)?',
    options: ['Kands', 'Kanner', 'Kinde', 'Kanden'],
    answer: 1,
    explanation: '"Kanner" is the plural of "Kand" (child) in Luxembourgish. This irregular plural is a distinctive feature of Luxembourgish and differs from both German (Kinder) and other related languages.',
    link: null,
    translations: {
      fr: {
        question: 'En luxembourgeois, quel est le pluriel correct de « Kand » (enfant) ?',
        options: ['Kands', 'Kanner', 'Kinde', 'Kanden'],
        explanation: '« Kanner » est le pluriel de « Kand » (enfant) en luxembourgeois. Ce pluriel irrégulier est une caractéristique distinctive du luxembourgeois et diffère de l\'allemand (Kinder) et d\'autres langues apparentées.',
      },
      de: {
        question: 'Wie lautet auf Luxemburgisch der korrekte Plural von „Kand" (Kind)?',
        options: ['Kands', 'Kanner', 'Kinde', 'Kanden'],
        explanation: '„Kanner" ist der Plural von „Kand" (Kind) auf Luxemburgisch. Dieser unregelmäßige Plural ist ein markantes Merkmal des Luxemburgischen und unterscheidet sich vom Deutschen (Kinder) und anderen verwandten Sprachen.',
      },
      lb: {
        question: 'Op Lëtzebuergesch, wat ass de richtege Plural vum « Kand » (Kand)?',
        options: ['Kands', 'Kanner', 'Kinde', 'Kanden'],
        explanation: '« Kanner » ass de Plural vum « Kand » (Kand) op Lëtzebuergesch. Dëse irregulären Plural ass eng markant Besonderheet vum Lëtzebuergeschen a ënnerscheet sech vum Däitschen (Kinder) an anere verwandten Sprochen.',
      },
    },
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
