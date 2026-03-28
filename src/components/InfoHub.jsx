import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { getField, getArrayField } from '../utils/contentLang'

export const DEFAULT_BP_CARDS = [
  { id: 'bp1', icon: '🗓️', title: 'Regular events', text: 'The Biergerpakt organises workshops, guided tours, sports events, and cultural activities throughout the year — all free or low cost.',
    translations: {
      fr: { title: 'Événements réguliers', text: 'Le Biergerpakt organise des ateliers, visites guidées, événements sportifs et activités culturelles tout au long de l\'année — gratuits ou à faible coût.' },
      de: { title: 'Regelmäßige Veranstaltungen', text: 'Der Biergerpakt organisiert das ganze Jahr über Workshops, Führungen, Sportveranstaltungen und kulturelle Aktivitäten — kostenlos oder günstig.' },
      lb: { title: 'Regelméisseg Veranstaltungen', text: 'De Biergerpakt organiséiert Atelieren, Führungen, Sportevenementer a kulturell Aktivitéiten duerch d\'ganzt Joer — gratis oder gënschteg.' },
    }
  },
  { id: 'bp2', icon: '👥', title: 'For everyone', text: 'Whether you arrived last month or were born here, the Biergerpakt is designed for all residents regardless of nationality or background.',
    translations: {
      fr: { title: 'Pour tout le monde', text: 'Que vous soyez arrivé le mois dernier ou né ici, le Biergerpakt est conçu pour tous les résidents, quelle que soit leur nationalité ou leur origine.' },
      de: { title: 'Für alle', text: 'Ob Sie letzten Monat angekommen sind oder hier geboren wurden — der Biergerpakt richtet sich an alle Einwohner, unabhängig von Nationalität oder Herkunft.' },
      lb: { title: 'Fir jiddereen', text: 'Ob Dir läschte Mount ukomm sidd oder hei gebuer sidd — de Biergerpakt ass fir all Awunner, egal wou s\'Herkunft.' },
    }
  },
  { id: 'bp3', icon: '🌱', title: 'Building bridges', text: 'Activities are specifically designed to bring people from different backgrounds together, creating friendships and a sense of shared community.',
    translations: {
      fr: { title: 'Tisser des liens', text: 'Les activités sont spécialement conçues pour rapprocher des personnes d\'horizons différents, créant des amitiés et un sentiment de communauté partagée.' },
      de: { title: 'Brücken bauen', text: 'Die Aktivitäten sind gezielt darauf ausgelegt, Menschen unterschiedlicher Herkunft zusammenzubringen und Freundschaften sowie ein Gemeinschaftsgefühl zu fördern.' },
      lb: { title: 'Brécke bauen', text: 'D\'Aktivitéite sinn speziell entworf fir Leit aus verschiddene Kulturen zesummenzebrengen, Frëndschaften ze schafen a e gemeinsamt Gemeinschaftsgefill ze förderen.' },
    }
  },
  { id: 'bp4', icon: '📱', title: 'How to participate', text: 'Check the programme on the official website, sign up for activities near you, and take part in building an open and welcoming Luxembourg.',
    translations: {
      fr: { title: 'Comment participer', text: 'Consultez le programme sur le site officiel, inscrivez-vous aux activités près de chez vous et contribuez à construire un Luxembourg ouvert et accueillant.' },
      de: { title: 'Wie kann ich mitmachen', text: 'Schauen Sie das Programm auf der offiziellen Website an, melden Sie sich für Aktivitäten in Ihrer Nähe an und helfen Sie mit, ein offenes und einladendes Luxemburg zu gestalten.' },
      lb: { title: 'Wéi kann ech matmaachen', text: 'Kuckt d\'Programm op der offizieller Websäit, mellt iech un fir Aktivitéite bei Iech an der Géigend a maacht mat beim Opbau vun engem oppene Lëtzebuerg.' },
    }
  },
]

export const DEFAULT_ACTIVITIES = [
  { id: 'act_lang', icon: '🗣️', title: 'Language', color: '#7C3AED', bg: '#F3E8FF', tips: [
    'Say "Moien" (hello) to three different people today.',
    'Learn 5 basic Luxembourgish phrases: Moien, Äddi, Merci, Wéi geet et?, Ech verstinn net.',
    'Order something in French at a café or bakery.',
    'Ask for directions using Luxembourgish: "Wou ass...?" (Where is...?)',
    'Read a headline or news article in a language you\'re learning: RTL.lu (LB), Tageblatt.lu (FR), Wort.lu (DE).',
    'Learn to greet a neighbour in their own language.',
  ], translations: {
    fr: { title: 'Langues', tips: [
      'Dites « Moien » (bonjour) à trois personnes différentes aujourd\'hui.',
      'Apprenez 5 phrases de base en luxembourgeois : Moien, Äddi, Merci, Wéi geet et?, Ech verstinn net.',
      'Commandez quelque chose en français dans un café ou une boulangerie.',
      'Demandez votre chemin en luxembourgeois : « Wou ass...? » (Où est...?)',
      'Lisez un titre ou un article dans une langue que vous apprenez : RTL.lu (LB), Tageblatt.lu (FR), Wort.lu (DE).',
      'Apprenez à saluer un voisin dans sa propre langue.',
    ]},
    de: { title: 'Sprachen', tips: [
      'Sagen Sie heute zu drei verschiedenen Menschen „Moien" (Hallo).',
      'Lernen Sie 5 Grundsätze auf Luxemburgisch: Moien, Äddi, Merci, Wéi geet et?, Ech verstinn net.',
      'Bestellen Sie etwas auf Französisch in einem Café oder einer Bäckerei.',
      'Fragen Sie auf Luxemburgisch nach dem Weg: „Wou ass...?" (Wo ist...?)',
      'Lesen Sie eine Schlagzeile oder einen Artikel in einer Sprache, die Sie lernen: RTL.lu (LB), Tageblatt.lu (FR), Wort.lu (DE).',
      'Lernen Sie, einen Nachbarn in seiner eigenen Sprache zu grüßen.',
    ]},
    lb: { title: 'Sprochen', tips: [
      'Sot haut dräi verschiddene Leit „Moien".',
      'Léiert 5 Grondphrasen op Lëtzebuergesch: Moien, Äddi, Merci, Wéi geet et?, Ech verstinn net.',
      'Bestellt eppes op Franséisch an engem Café oder enger Bäckerei.',
      'Freet op Lëtzebuergesch no dem Wee: „Wou ass...?"',
      'Liest eng Iwwerschrëft oder en Artikel an enger Sprooch déi Dir léiert: RTL.lu (LB), Tageblatt.lu (FR), Wort.lu (DE).',
      'Léiert engem Noper a senger eegener Sprooch Bonjour ze soen.',
    ]},
  }},
  { id: 'act_explore', icon: '📍', title: 'Explore', color: '#065F46', bg: '#D1FAE5', tips: [
    'Visit a local weekly market and chat briefly with a vendor.',
    'Walk through a neighbourhood you\'ve never explored before.',
    'Take the free public transport to a town or village you\'ve never visited.',
    'Spend an hour in a Luxembourg park and observe the diversity around you.',
    'Visit a museum or cultural heritage site (many have free entry days).',
    'Explore a natural site: Mullerthal, Moselle valley, Ardennes, or Minett.',
  ], translations: {
    fr: { title: 'Explorer', tips: [
      'Visitez un marché hebdomadaire local et discutez brièvement avec un vendeur.',
      'Promenez-vous dans un quartier que vous n\'avez jamais exploré auparavant.',
      'Prenez les transports en commun gratuits pour rejoindre une ville ou un village que vous n\'avez jamais visité.',
      'Passez une heure dans un parc luxembourgeois et observez la diversité autour de vous.',
      'Visitez un musée ou un site du patrimoine culturel (beaucoup ont des jours d\'entrée gratuite).',
      'Explorez un site naturel : Mullerthal, la vallée de la Moselle, les Ardennes ou le Minett.',
    ]},
    de: { title: 'Erkunden', tips: [
      'Besuchen Sie einen lokalen Wochenmarkt und sprechen Sie kurz mit einem Händler.',
      'Gehen Sie durch ein Viertel, das Sie noch nie erkundet haben.',
      'Nehmen Sie den kostenlosen öffentlichen Nahverkehr zu einer Stadt oder einem Dorf, das Sie noch nie besucht haben.',
      'Verbringen Sie eine Stunde in einem Luxemburger Park und beobachten Sie die Vielfalt um Sie herum.',
      'Besuchen Sie ein Museum oder eine Kulturerbestätte (viele haben kostenlose Eintrittage).',
      'Erkunden Sie ein Naturgebiet: Müllerthal, Moseltal, Ardennen oder Minett.',
    ]},
    lb: { title: 'Entdecken', tips: [
      'Besicht e lokale Wochenmaart a schwätzt kuerz mat engem Händler.',
      'Gitt duerch e Quartier deen Dir nach ni exploréiert hutt.',
      'Huelt den ëffentlechen Transport (gratis) an eng Stad oder e Duerf dat Dir nach ni besicht hutt.',
      'Passt eng Stonn an engem Lëtzebuerger Park a kuckt op d\'Diversitéit ronderëm Iech.',
      'Besicht e Museum oder eng Kulturerbestätt (vill hunn gratis Eintrittdag).',
      'Exploréiert eng Naturstätt: Mullerthal, Museltal, Ardennen oder Minett.',
    ]},
  }},
  { id: 'act_connect', icon: '🤝', title: 'Connect', color: '#1D4ED8', bg: '#DBEAFE', tips: [
    'Introduce yourself to a neighbour you\'ve never spoken to. Ask where they\'re from.',
    'Invite a colleague from a different cultural background for a coffee.',
    'Share a dish from your own culture with someone you know.',
    'Join a local sports club, running group, or fitness class.',
    'Participate in a language exchange — teach your language, learn theirs.',
    'Volunteer for a local association, clean-up, or food bank.',
  ], translations: {
    fr: { title: 'Créer des liens', tips: [
      'Présentez-vous à un voisin à qui vous n\'avez jamais parlé. Demandez-lui d\'où il vient.',
      'Invitez un collègue d\'un autre milieu culturel à prendre un café.',
      'Partagez un plat de votre propre culture avec quelqu\'un que vous connaissez.',
      'Rejoignez un club sportif local, un groupe de course ou un cours de fitness.',
      'Participez à un échange linguistique — enseignez votre langue, apprenez la leur.',
      'Faites du bénévolat pour une association locale, un nettoyage ou une banque alimentaire.',
    ]},
    de: { title: 'Verbinden', tips: [
      'Stellen Sie sich einem Nachbarn vor, mit dem Sie noch nie gesprochen haben. Fragen Sie, woher er kommt.',
      'Laden Sie einen Kollegen aus einem anderen kulturellen Umfeld auf einen Kaffee ein.',
      'Teilen Sie ein Gericht aus Ihrer eigenen Kultur mit jemandem, den Sie kennen.',
      'Treten Sie einem lokalen Sportverein, einer Laufgruppe oder einem Fitnesskurs bei.',
      'Nehmen Sie an einem Sprachaustausch teil — bringen Sie Ihre Sprache bei, lernen Sie ihre.',
      'Engagieren Sie sich freiwillig für einen lokalen Verein, eine Säuberungsaktion oder eine Lebensmittelbank.',
    ]},
    lb: { title: 'Verbindungen', tips: [
      'Stellt Iech engem Noper vir deen Dir nach ni geschwat hutt. Freet wou hien hierkënnt.',
      'Invitéiert e Kolleg aus engem anere kulturellen Hannergrond op e Kaffi.',
      'Deelt e Plat aus Ärer eegener Kultur mat jemandem deen Dir kennt.',
      'Trëtt engem lokale Sportveräin, enger Lofgrupp oder engem Fitnesskurs bäi.',
      'Maacht bei engem Sproocheaustausch mat — léiert Är Sprooch, léiert hir.',
      'Engagéiert Iech fräiwëlleg fir en lokale Veräin, eng Opraummaktioun oder eng Liewensmëttelbank.',
    ]},
  }},
  { id: 'act_culture', icon: '🎭', title: 'Culture', color: '#B45309', bg: '#FEF3C7', tips: [
    'Listen to a Luxembourgish song (try Serge Tonnar or search "musique lëtzebuergesch").',
    'Try a traditional Luxembourgish dish: Judd mat Gaardebounen, Bouneschlupp, or Gromperekichelcher.',
    'Read about a Luxembourg tradition: Schueberfouer, Émaischen, Bretzelsonndeg, or the Dancing Procession.',
    'Attend a free cultural event: concert, art exhibition, or public lecture (check agenda.lu).',
    'Watch a film from a culture different from your own and discuss it with someone.',
    'Visit the industrial heritage of the south: Belval blast furnaces, Rumelange mining museum.',
  ], translations: {
    fr: { title: 'Culture', tips: [
      'Écoutez une chanson luxembourgeoise (essayez Serge Tonnar ou cherchez « musique lëtzebuergesch »).',
      'Goûtez un plat traditionnel luxembourgeois : Judd mat Gaardebounen, Bouneschlupp ou Gromperekichelcher.',
      'Renseignez-vous sur une tradition luxembourgeoise : la Schueberfouer, l\'Émaischen, le Bretzelsonndeg ou la Procession dansante.',
      'Assistez à un événement culturel gratuit : concert, exposition d\'art ou conférence publique (consultez agenda.lu).',
      'Regardez un film d\'une culture différente de la vôtre et discutez-en avec quelqu\'un.',
      'Visitez le patrimoine industriel du sud : les hauts fourneaux de Belval, le musée des mines de Rumelange.',
    ]},
    de: { title: 'Kultur', tips: [
      'Hören Sie ein luxemburgisches Lied (probieren Sie Serge Tonnar oder suchen Sie „musique lëtzebuergesch").',
      'Probieren Sie ein traditionelles luxemburgisches Gericht: Judd mat Gaardebounen, Bouneschlupp oder Gromperekichelcher.',
      'Lesen Sie über eine Luxemburger Tradition: Schueberfouer, Émaischen, Bretzelsonndeg oder die Tanzprozession.',
      'Besuchen Sie eine kostenlose Kulturveranstaltung: Konzert, Kunstausstellung oder öffentlichen Vortrag (agenda.lu).',
      'Schauen Sie sich einen Film aus einer Ihnen fremden Kultur an und besprechen Sie ihn mit jemandem.',
      'Besuchen Sie das Industrieerbe des Südens: Belval-Hochöfen, Bergbaumuseum Rumelange.',
    ]},
    lb: { title: 'Kultur', tips: [
      'Héiert e lëtzebuergescht Lidd (probéiert Serge Tonnar oder sicht „musique lëtzebuergesch").',
      'Probéiert e traditionellt lëtzebuergescht Plat: Judd mat Gaardebounen, Bouneschlupp oder Gromperekichelcher.',
      'Liest iwwer eng lëtzebuerger Traditioun: Schueberfouer, Émaischen, Bretzelsonndeg oder d\'Springprozessioun.',
      'Gitt op eng gratis Kulturveranstaltung: Concert, Konschtausstellung oder ëffentleche Virdrag (agenda.lu).',
      'Kuckt e Film aus enger Kultur déi anescht ass wéi Är eegen a schwätzt doriwwer mat jemandem.',
      'Besicht dat industriellt Ierwen aus dem Süden: Belval-Hochiewen, Biergbaumusée Réimech.',
    ]},
  }},
  { id: 'act_bp', icon: '🤝', title: 'Biergerpakt', color: '#0369A1', bg: '#E0F2FE', tips: [
    'Register on biergerpakt.zesummeliewen.lu — free, in multiple languages.',
    'Browse upcoming events in your commune and sign up for one.',
    'Invite a friend, colleague, or neighbour to join a Biergerpakt activity with you.',
    'Complete an online module about Luxembourg\'s culture or institutions.',
    'Organise a small gathering — picnic, game night, or barbecue — for people from different backgrounds.',
  ], translations: {
    fr: { title: 'Biergerpakt', tips: [
      'Inscrivez-vous sur biergerpakt.zesummeliewen.lu — gratuit, en plusieurs langues.',
      'Parcourez les événements à venir dans votre commune et inscrivez-vous à l\'un d\'eux.',
      'Invitez un ami, un collègue ou un voisin à participer à une activité Biergerpakt avec vous.',
      'Suivez un module en ligne sur la culture ou les institutions du Luxembourg.',
      'Organisez un petit rassemblement — pique-nique, soirée jeux ou barbecue — pour des personnes d\'horizons différents.',
    ]},
    de: { title: 'Biergerpakt', tips: [
      'Registrieren Sie sich auf biergerpakt.zesummeliewen.lu — kostenlos, in mehreren Sprachen.',
      'Schauen Sie sich die bevorstehenden Veranstaltungen in Ihrer Gemeinde an und melden Sie sich für eine an.',
      'Laden Sie einen Freund, Kollegen oder Nachbarn ein, eine Biergerpakt-Aktivität mit Ihnen zu besuchen.',
      'Absolvieren Sie ein Online-Modul über Luxemburgs Kultur oder Institutionen.',
      'Organisieren Sie ein kleines Treffen — Picknick, Spieleabend oder Grillabend — für Menschen verschiedener Herkunft.',
    ]},
    lb: { title: 'Biergerpakt', tips: [
      'Mellt Iech un op biergerpakt.zesummeliewen.lu — gratis, a verschiddene Sproochen.',
      'Kuckt no ophommende Veranstaltungen an Ärer Gemeng a mellt Iech fir eng un.',
      'Invitéiert e Frënd, e Kolleg oder e Noper fir mat Iech un enger Biergerpakt-Aktivitéit deelzehuelen.',
      'Maacht en Online-Modul iwwer d\'Kultur oder d\'Institutiounen vu Lëtzebuerg.',
      'Organiséiert eng kleng Zesummekonft — Picknick, Spillowend oder Grill — fir Leit aus verschiddene Kulturen.',
    ]},
  }},
]

export const DEFAULT_STATS = [
  { icon: '👥', label: 'Total population', value: '~680,000', source: 'STATEC 2024',
    translations: { fr: { label: 'Population totale' }, de: { label: 'Gesamtbevölkerung' }, lb: { label: 'Gesamtbevëlkerung' } } },
  { icon: '🌍', label: 'Foreign nationals', value: '47%', source: 'STATEC 2024',
    translations: { fr: { label: 'Ressortissants étrangers' }, de: { label: 'Ausländische Staatsangehörige' }, lb: { label: 'Auslännesch Nationalitéiten' } } },
  { icon: '🇵🇹', label: 'Largest non-LU community', value: 'Portuguese (~100,000)', source: 'STATEC 2023',
    translations: { fr: { label: 'Plus grande communauté non-LU' }, de: { label: 'Größte Nicht-LU-Gemeinschaft' }, lb: { label: 'Gréisste Lëtzebuerg-Auslänner Communautéit' } } },
  { icon: '🚗', label: 'Cross-border workers', value: '~220,000', source: 'STATEC 2024',
    translations: { fr: { label: 'Travailleurs frontaliers' }, de: { label: 'Grenzgänger' }, lb: { label: 'Grenzpendler' } } },
  { icon: '🌐', label: 'Nationalities represented', value: '170+', source: 'STATEC 2024',
    translations: { fr: { label: 'Nationalités représentées' }, de: { label: 'Vertretene Nationalitäten' }, lb: { label: 'Vertruede Nationalitéiten' } } },
  { icon: '💶', label: 'GDP per capita (EU rank)', value: '#1 in EU', source: 'Eurostat 2023',
    translations: { fr: { label: 'PIB par habitant (rang UE)' }, de: { label: 'BIP pro Kopf (EU-Rang)' }, lb: { label: 'BIP pro Awunner (EU-Rang)' } } },
  { icon: '🏢', label: 'Investment funds (global rank)', value: '2nd (after USA)', source: 'ALFI 2024',
    translations: { fr: { label: 'Fonds d\'investissement (rang mondial)' }, de: { label: 'Investmentfonds (globaler Rang)' }, lb: { label: 'Investitiounsfong (weltwäit Rang)' } } },
  { icon: '🗣️', label: 'Official languages', value: '3 (LB, FR, DE)', source: 'Law of 1984',
    translations: { fr: { label: 'Langues officielles' }, de: { label: 'Amtssprachen' }, lb: { label: 'Offiziell Sproochen' } } },
  { icon: '📐', label: 'Area', value: '2,586 km²', source: 'STATEC',
    translations: { fr: { label: 'Superficie' }, de: { label: 'Fläche' }, lb: { label: 'Fläch' } } },
  { icon: '🏙️', label: 'Largest city', value: 'Luxembourg City (~130,000)', source: 'STATEC 2024',
    translations: { fr: { label: 'Plus grande ville' }, de: { label: 'Größte Stadt' }, lb: { label: 'Gréisste Stad' } } },
  { icon: '👶', label: 'Average age', value: '39.4 years', source: 'STATEC 2023',
    translations: { fr: { label: 'Âge moyen' }, de: { label: 'Durchschnittsalter' }, lb: { label: 'Duerchschnëttsalter' } } },
  { icon: '🎓', label: 'University of Luxembourg founded', value: '2003', source: 'Uni.lu',
    translations: { fr: { label: 'Fondation de l\'Université du Luxembourg' }, de: { label: 'Universität Luxemburg gegründet' }, lb: { label: 'Universitéit Lëtzebuerg gegrënnt' } } },
  { icon: '🚌', label: 'Public transport cost', value: 'Free since 2020', source: 'Gouvernement.lu',
    translations: { fr: { label: 'Coût des transports en commun' }, de: { label: 'Kosten des öffentlichen Nahverkehrs' }, lb: { label: 'Käschte vum ëffentlechen Transport' } } },
  { icon: '🏥', label: 'Life expectancy', value: '82.7 years', source: 'STATEC 2023',
    translations: { fr: { label: 'Espérance de vie' }, de: { label: 'Lebenserwartung' }, lb: { label: 'Liewenserwarding' } } },
  { icon: '🌱', label: 'UNESCO Biosphere Reserve', value: 'Minett (2021)', source: 'UNESCO',
    translations: { fr: { label: 'Réserve de biosphère UNESCO' }, de: { label: 'UNESCO-Biosphärenreservat' }, lb: { label: 'UNESCO Biosphärenreservat' } } },
]

export const DEFAULT_LANGUAGE_PHRASES = [
  { lb: 'Moien', fr: 'Bonjour', de: 'Guten Morgen', meaning: 'Hello / Good morning' },
  { lb: 'Äddi', fr: 'Au revoir', de: 'Auf Wiedersehen', meaning: 'Goodbye' },
  { lb: 'Merci villmools', fr: 'Merci beaucoup', de: 'Vielen Dank', meaning: 'Thank you very much' },
  { lb: 'Wéi geet et?', fr: 'Comment ça va?', de: 'Wie geht es Ihnen?', meaning: 'How are you?' },
  { lb: 'Ech hunn dech gär', fr: 'Je t\'aime', de: 'Ich liebe dich', meaning: 'I love you' },
  { lb: 'Wou ass...?', fr: 'Où est...?', de: 'Wo ist...?', meaning: 'Where is...?' },
  { lb: 'Wéi vill kascht dat?', fr: 'Combien ça coûte?', de: 'Wie viel kostet das?', meaning: 'How much does it cost?' },
  { lb: 'Ech verstinn net', fr: 'Je ne comprends pas', de: 'Ich verstehe nicht', meaning: 'I don\'t understand' },
]

const BIERGERPAKT_URLS = {
  en: 'https://biergerpakt.zesummeliewen.lu/en/',
  fr: 'https://biergerpakt.zesummeliewen.lu',
  de: 'https://biergerpakt.zesummeliewen.lu/de/',
  lb: 'https://biergerpakt.zesummeliewen.lu/lu/'
}

const LUXEMBOURGISH_URLS = {
  en: 'https://luxembourg.public.lu/en/society-and-culture/languages/luxembourgish-language-history.html',
  fr: 'https://luxembourg.public.lu/fr/societe-et-culture/langues/luxembourgeois-langue-histoire.html',
  de: 'https://luxembourg.public.lu/de/gesellschaft-und-kultur/sprachen/luxemburgisch-sprache-geschichte.html',
  lb: 'https://luxembourg.public.lu/fr/societe-et-culture/langues/luxembourgeois-langue-histoire.html'
}

export const DEFAULT_RELIABLE_SOURCES = [
  {
    category: 'Official Government',
    icon: '🏛️',
    translations: { fr: { category: 'Gouvernement officiel' }, de: { category: 'Offizielle Regierung' }, lb: { category: 'Offiziell Regierung' } },
    sources: [
      { label: 'Gouvernement.lu — Official Luxembourg Government Portal', href: 'https://luxembourg.public.lu/en.html', desc: 'Laws, public services, residency, employment, and life in Luxembourg.',
        translations: { fr: { desc: 'Lois, services publics, résidence, emploi et vie au Luxembourg.' }, de: { desc: 'Gesetze, öffentliche Dienste, Aufenthalt, Beschäftigung und Leben in Luxemburg.' }, lb: { desc: 'Gesetzer, ëffentlech Servicer, Wunnsëtz, Beschäftegung a Liewen zu Lëtzebuerg.' } } },
      { label: 'Legilux — Official Journal & Legislation', href: 'https://legilux.public.lu', desc: 'Full text of Luxembourg laws and official regulations.',
        translations: { fr: { desc: 'Texte intégral des lois luxembourgeoises et des règlements officiels.' }, de: { desc: 'Vollständiger Text der luxemburgischen Gesetze und offiziellen Vorschriften.' }, lb: { desc: 'Vollstännegen Text vun de lëtzebuergeschen Gesetzer an offiziellen Regulatiounen.' } } },
      { label: 'Guichet.lu — Single Administrative Portal', href: 'https://guichet.public.lu/en.html', desc: 'All administrative procedures for residents and businesses, step by step.',
        translations: { fr: { desc: 'Toutes les démarches administratives pour les résidents et les entreprises, étape par étape.' }, de: { desc: 'Alle Verwaltungsverfahren für Einwohner und Unternehmen, Schritt für Schritt.' }, lb: { desc: 'All Verwaltungsvefahren fir Awunner a Betriber, Schratt fir Schratt.' } } },
    ]
  },
  {
    category: 'Statistics & Data',
    icon: '📊',
    translations: { fr: { category: 'Statistiques et données' }, de: { category: 'Statistiken & Daten' }, lb: { category: 'Statistiken & Daten' } },
    sources: [
      { label: 'STATEC — National Statistics Institute', href: 'https://statistiques.public.lu/en/statistique-publique/statec.html', desc: 'Official data on population, economy, housing, employment and more.',
        translations: { fr: { desc: 'Données officielles sur la population, l\'économie, le logement, l\'emploi et plus encore.' }, de: { desc: 'Offizielle Daten zu Bevölkerung, Wirtschaft, Wohnen, Beschäftigung und mehr.' }, lb: { desc: 'Offiziell Daten zu Bevëlkerung, Wirtschaft, Wunnen, Beschäftegung a méi.' } } },
      { label: 'Eurostat — EU Statistics', href: 'https://ec.europa.eu/eurostat', desc: 'Comparable statistics for all EU member states including Luxembourg.',
        translations: { fr: { desc: 'Statistiques comparables pour tous les États membres de l\'UE, y compris le Luxembourg.' }, de: { desc: 'Vergleichbare Statistiken für alle EU-Mitgliedstaaten einschließlich Luxemburg.' }, lb: { desc: 'Vergläichbar Statistiken fir all EU-Memberstaten inklusiv Lëtzebuerg.' } } },
    ]
  },
  {
    category: 'Culture & Tourism',
    icon: '🗺️',
    translations: { fr: { category: 'Culture et tourisme' }, de: { category: 'Kultur & Tourismus' }, lb: { category: 'Kultur & Tourismus' } },
    sources: [
      { label: 'Visit Luxembourg', href: 'https://www.visitluxembourg.com/', desc: 'Official tourism guide with places, trails, events, and travel information.',
        translations: { fr: { desc: 'Guide touristique officiel avec lieux, sentiers, événements et informations de voyage.' }, de: { desc: 'Offizieller Tourismusführer mit Orten, Wanderwegen, Veranstaltungen und Reiseinformationen.' }, lb: { desc: 'Offizielle Tourismusguide mat Plazen, Weeër, Evenementer a Reesinfoen.' } } },
      { label: 'Agenda Culturel — Luxembourg Events', href: 'https://www.agenda.lu', desc: 'The comprehensive calendar of cultural events across Luxembourg.',
        translations: { fr: { desc: 'Le calendrier complet des événements culturels à travers le Luxembourg.' }, de: { desc: 'Der umfassende Kalender kultureller Veranstaltungen in ganz Luxemburg.' }, lb: { desc: 'De vollständege Kalenner vu kulturellen Evenementer a Lëtzebuerg.' } } },
      { label: 'Luxembourg City Tourist Office', href: 'https://www.lcto.lu/en', desc: 'Guided tours, museums, and what to see in the capital.',
        translations: { fr: { desc: 'Visites guidées, musées et ce qu\'il faut voir dans la capitale.' }, de: { desc: 'Geführte Touren, Museen und Sehenswürdigkeiten in der Hauptstadt.' }, lb: { desc: 'Gefäert Touren, Muséeën a wat et an der Haaptstad ze gesinn gëtt.' } } },
    ]
  },
  {
    category: 'Integration & Community',
    icon: '🤝',
    translations: { fr: { category: 'Intégration et communauté' }, de: { category: 'Integration & Gemeinschaft' }, lb: { category: 'Integratioun & Gemeinschaft' } },
    sources: [
      { label: 'Biergerpakt — Intercultural Activities', href: 'https://biergerpakt.zesummeliewen.lu/en/', desc: 'Government programme for intercultural connection and community activities.',
        translations: { fr: { desc: 'Programme gouvernemental pour les liens interculturels et les activités communautaires.' }, de: { desc: 'Regierungsprogramm für interkulturellen Austausch und Gemeinschaftsaktivitäten.' }, lb: { desc: 'Regierungsprogramm fir interkulturell Kontakter a Gemeinschaftsaktivitéiten.' } } },
      { label: 'OLAI — Reception & Integration Office', href: 'https://olai.public.lu/en.html', desc: 'Support for newcomers: integration contracts, language courses, rights.',
        translations: { fr: { desc: 'Soutien aux nouveaux arrivants : contrats d\'intégration, cours de langue, droits.' }, de: { desc: 'Unterstützung für Neuankömmlinge: Integrationsverträge, Sprachkurse, Rechte.' }, lb: { desc: 'Ënnerstëtzung fir Neiankommend: Integratiouns­kontrakter, Sproochcoursser, Rechter.' } } },
      { label: 'Luxassoc — Associations & Volunteering', href: 'https://www.luxassoc.lu', desc: 'Directory of associations and volunteering opportunities in Luxembourg.',
        translations: { fr: { desc: 'Répertoire des associations et des opportunités de bénévolat au Luxembourg.' }, de: { desc: 'Verzeichnis von Vereinen und Freiwilligenmöglichkeiten in Luxemburg.' }, lb: { desc: 'Verzeechnes vun Associatiounen a fräiwëlleg Méiglechkeeten zu Lëtzebuerg.' } } },
    ]
  },
  {
    category: 'Language Learning',
    icon: '🗣️',
    translations: { fr: { category: 'Apprentissage des langues' }, de: { category: 'Sprachlernen' }, lb: { category: 'Sproochlieren' } },
    sources: [
      { label: 'Luxembourgish Language Portal', href: 'https://www.lod.lu/en/', desc: 'Official Luxembourgish dictionary, grammar guide, and learning resources.',
        translations: { fr: { desc: 'Dictionnaire officiel du luxembourgeois, guide grammatical et ressources d\'apprentissage.' }, de: { desc: 'Offizielles Luxemburgisch-Wörterbuch, Grammatikleitfaden und Lernressourcen.' }, lb: { desc: 'Offiziellt Lëtzebuergescht Wierderbuch, Grammatikguide a Léiermaterialien.' } } },
      { label: 'Institut National des Langues (INL)', href: 'https://www.inll.lu/en', desc: 'State language school offering courses in Luxembourgish, French, German and more.',
        translations: { fr: { desc: 'École de langues nationale proposant des cours de luxembourgeois, français, allemand et plus.' }, de: { desc: 'Staatliche Sprachschule mit Kursen in Luxemburgisch, Französisch, Deutsch und mehr.' }, lb: { desc: 'Staatléch Sproochschoul mat Coursse op Lëtzebuergesch, Franséisch, Däitsch a méi.' } } },
      { label: 'RTL Lëtzebuerg', href: 'https://www.rtl.lu', desc: 'Luxembourg\'s main broadcaster — news, radio and podcasts in Luxembourgish.',
        translations: { fr: { desc: 'Principal diffuseur luxembourgeois — actualités, radio et podcasts en luxembourgeois.' }, de: { desc: 'Luxemburgs Hauptsender — Nachrichten, Radio und Podcasts auf Luxemburgisch.' }, lb: { desc: 'Lëtzebuergs Haaptsender — Noriichten, Radio a Podcaste op Lëtzebuergesch.' } } },
    ]
  },
  {
    category: 'Employment & Business',
    icon: '💼',
    translations: { fr: { category: 'Emploi et entreprises' }, de: { category: 'Beschäftigung & Unternehmen' }, lb: { category: 'Beschäftegung & Betriber' } },
    sources: [
      { label: 'ADEM — National Employment Agency', href: 'https://adem.public.lu/en.html', desc: 'Job search, unemployment benefits, and employer support services.',
        translations: { fr: { desc: 'Recherche d\'emploi, allocations chômage et services aux employeurs.' }, de: { desc: 'Jobsuche, Arbeitslosengeld und Arbeitgeberunterstützung.' }, lb: { desc: 'Jobsich, Aarbechtslousegeld a Servicer fir Aarbeitgeber.' } } },
      { label: 'Luxembourg for Business', href: 'https://www.luxembourgforbusiness.lu/en', desc: 'Setting up a company, investment, and business resources in Luxembourg.',
        translations: { fr: { desc: 'Création d\'entreprise, investissement et ressources commerciales au Luxembourg.' }, de: { desc: 'Unternehmensgründung, Investitionen und Unternehmensressourcen in Luxemburg.' }, lb: { desc: 'Betribsgründung, Investitiounen a Geschäftsressourcen zu Lëtzebuerg.' } } },
    ]
  },
]

export default function InfoHub() {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const [bpCards, setBpCards]               = useState(DEFAULT_BP_CARDS)
  const [activities, setActivities]         = useState(DEFAULT_ACTIVITIES)
  const [stats, setStats]                   = useState(DEFAULT_STATS)
  const [languagePhrases, setLanguagePhrases] = useState(DEFAULT_LANGUAGE_PHRASES)
  const [reliableSources, setReliableSources] = useState(DEFAULT_RELIABLE_SOURCES)
  const [bpIntro, setBpIntro]               = useState(null)   // { title, text, cta }
  const [bpInterculturalCard, setBpInterculturalCard] = useState(null) // { title, text }

  useEffect(() => {
    fetch('/api/content')
      .then(r => r.ok ? r.json() : {})
      .then(data => {
        // Enrich API items with translations from defaults when translations are absent.
        // This handles content saved before multilingual support was added to the admin panel.
        if (data.bpCards?.length) {
          setBpCards(data.bpCards.map(item => {
            if (item.translations) return item
            const def = DEFAULT_BP_CARDS.find(d => d.id === item.id)
            return def ? { ...item, translations: def.translations } : item
          }))
        }
        if (data.activities?.length) {
          setActivities(data.activities.map(item => {
            if (item.translations) return item
            const def = DEFAULT_ACTIVITIES.find(d => d.id === item.id)
            return def ? { ...item, translations: def.translations } : item
          }))
        }
        if (data.stats?.length)           setStats(data.stats)
        if (data.languagePhrases?.length) setLanguagePhrases(data.languagePhrases)
        if (data.reliableSources?.length) {
          setReliableSources(data.reliableSources.map(group => {
            const defGroup = DEFAULT_RELIABLE_SOURCES.find(d => d.category === group.category)
            const sources = (group.sources || []).map(src => {
              if (src.translations) return src
              const defSrc = defGroup?.sources.find(d => d.href === src.href)
              return defSrc ? { ...src, translations: defSrc.translations } : src
            })
            return { ...group, translations: group.translations || defGroup?.translations, sources }
          }))
        }
        if (data.bpIntro)                 setBpIntro(data.bpIntro)
        if (data.bpInterculturalCard)     setBpInterculturalCard(data.bpInterculturalCard)
      })
      .catch(() => {})
  }, [])

  // Read initial tab from URL query param
  const getTabFromUrl = () => {
    const params = new URLSearchParams(location.search)
    const tab = params.get('tab')
    return ['biergerpakt', 'stats', 'language', 'intercultural', 'sources'].includes(tab) ? tab : 'biergerpakt'
  }

  const [activeTab, setActiveTab] = useState(getTabFromUrl)

  // Update URL when tab changes
  const switchTab = (tab) => {
    setActiveTab(tab)
    navigate(`/info?tab=${tab}`, { replace: true })
  }

  // Sync tab if URL changes externally (e.g. back button)
  useEffect(() => {
    setActiveTab(getTabFromUrl())
  }, [location.search])

  const lang = (i18n.language || 'en').split('-')[0]
  // Helper: get translated field from dynamic content items
  const tf = (item, field) => getField(item, field, lang) || item?.[field] || ''

  // Like tf() but falls back to an i18n key when the item has no translation for the current language.
  // Used for bpIntro / bpInterculturalCard which may have been saved without translations.
  const trf = (item, field, tKey) => {
    if (!item) return t(tKey)
    if (lang !== 'en') {
      const v = item.translations?.[lang]?.[field]
      if (v) return v
      return t(tKey)
    }
    return item[field] || t(tKey)
  }

  const biergerpaktUrl = BIERGERPAKT_URLS[lang] || BIERGERPAKT_URLS.en
  const luxembourgishUrl = LUXEMBOURGISH_URLS[lang] || LUXEMBOURGISH_URLS.en

  const tabs = [
    { id: 'biergerpakt', label: 'Biergerpakt',              icon: '🤝' },
    { id: 'stats',       label: t('info.tabs.stats'),       icon: '📊' },
    { id: 'language',    label: t('info.tabs.language'),    icon: '🗣️' },
    { id: 'intercultural', label: t('info.tabs.activities'), icon: '🌍' },
    { id: 'sources',     label: t('info.tabs.sources'),     icon: '🔗' },
  ]

  return (
    <div className="container" style={{ paddingTop: 20 }}>
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: 4 }}>{t('info.title')}</h1>
        <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.9rem' }}>{t('info.subtitle')}</p>
      </div>

      {/* Tabs */}
      <div style={{
        display: 'flex', gap: 6, marginBottom: 20,
        flexWrap: 'wrap',
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => switchTab(tab.id)}
            style={{
              padding: '8px 14px', borderRadius: 999, border: 'none', cursor: 'pointer',
              fontFamily: 'var(--font)', fontSize: '0.85rem', fontWeight: 600,
              background: activeTab === tab.id ? 'var(--red)' : 'var(--gray-100)',
              color: activeTab === tab.id ? 'white' : 'var(--gray-600)'
            }}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* ── Biergerpakt Tab ─────────────────────────────────────────────────── */}
      {activeTab === 'biergerpakt' && (
        <div className="animate-fade-in">
          <div style={{
            background: 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 100%)',
            borderRadius: 'var(--radius-xl)', padding: '24px',
            color: 'white', marginBottom: 20
          }}>
            <div style={{ fontSize: '3rem', marginBottom: 12 }}>🤝</div>
            <h2 style={{ color: 'white', marginBottom: 12 }}>{trf(bpIntro, 'title', 'info.biergerpakt.title')}</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, lineHeight: 1.6 }}>
              {trf(bpIntro, 'text', 'info.biergerpakt.text')}
            </p>
            <a href={biergerpaktUrl}
              target="_blank" rel="noreferrer"
              style={{
                display: 'block', marginTop: 20,
                background: 'rgba(255,255,255,0.2)',
                border: '1px solid rgba(255,255,255,0.3)',
                color: 'white', borderRadius: 10, padding: '12px 16px',
                textAlign: 'center', fontWeight: 700, textDecoration: 'none', fontSize: '0.9rem'
              }}>
              {trf(bpIntro, 'cta', 'info.biergerpakt.cta')} →
            </a>
          </div>

          <div className="card" style={{ marginBottom: 16 }}>
            <h3 style={{ marginBottom: 12 }}>{trf(bpInterculturalCard, 'title', 'info.intercultural.title')}</h3>
            <p style={{ color: 'var(--gray-700)', margin: 0, lineHeight: 1.6 }}>
              {trf(bpInterculturalCard, 'text', 'info.intercultural.text')}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {bpCards.map(item => (
              <div key={item.id || item.title} className="card" style={{ display: 'flex', gap: 14 }}>
                <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, marginBottom: 4 }}>{tf(item, 'title') || item.title}</div>
                  <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--gray-700)', lineHeight: 1.5 }}>{tf(item, 'text') || item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Stats Tab ───────────────────────────────────────────────────────── */}
      {activeTab === 'stats' && (
        <div className="animate-fade-in">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16
          }}>
            <h2 style={{ margin: 0 }}>{t('info.stats.title')}</h2>
            <a href="https://statistiques.public.lu/en/statistique-publique/statec.html"
              target="_blank" rel="noreferrer"
              style={{ fontSize: '0.75rem', color: 'var(--accent)' }}>
              {t('info.stats.source')} →
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {stats.map(stat => (
              <div key={stat.label} style={{
                background: 'white', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '14px 16px',
                display: 'flex', alignItems: 'center', gap: 14
              }}>
                <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{stat.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, color: 'var(--gray-800)' }}>{stat.value}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{tf(stat, 'label') || stat.label}</div>
                </div>
                <div style={{ fontSize: '0.7rem', color: 'var(--gray-400)', textAlign: 'right', flexShrink: 0 }}>
                  {stat.source}
                </div>
              </div>
            ))}
          </div>

          {/* Visual mini-chart */}
          <div className="card" style={{ marginTop: 16 }}>
            <div style={{ fontWeight: 700, marginBottom: 12 }}>{t('info.stats.populationTitle')}</div>
            {[
              { label: t('info.stats.luxembourgers'), pct: 53, color: 'var(--red)' },
              { label: t('info.stats.portuguese'),    pct: 15, color: '#009C3B' },
              { label: t('info.stats.french'),        pct: 7,  color: '#0055A4' },
              { label: t('info.stats.italian'),       pct: 4,  color: '#009246' },
              { label: t('info.stats.belgian'),       pct: 3,  color: '#FAE042' },
              { label: t('info.stats.other'),         pct: 18, color: 'var(--gray-400)' }
            ].map(bar => (
              <div key={bar.label} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 500 }}>{bar.label}</span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>{bar.pct}%</span>
                </div>
                <div style={{ height: 6, background: 'var(--gray-100)', borderRadius: 999 }}>
                  <div style={{ height: '100%', width: `${bar.pct}%`, background: bar.color, borderRadius: 999 }} />
                </div>
              </div>
            ))}
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 8 }}>
              {t('info.stats.approximateNote')}
            </div>
          </div>
        </div>
      )}

      {/* ── Language Tab ────────────────────────────────────────────────────── */}
      {activeTab === 'language' && (
        <div className="animate-fade-in">
          <div className="card" style={{ marginBottom: 20 }}>
            <h3 style={{ marginBottom: 8 }}>{t('info.languages.title')}</h3>
            <p style={{ color: 'var(--gray-700)', margin: 0, lineHeight: 1.6 }}>
              {t('info.languages.text')}
            </p>
          </div>

          <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
            {[
              { flag: '🇱🇺', name: 'Lëtzebuergesch', role: t('info.languages.nationalLanguage') },
              { flag: '🇫🇷', name: 'Français',        role: t('info.languages.administrative') },
              { flag: '🇩🇪', name: 'Deutsch',          role: t('info.languages.administrative') },
              { flag: '🇵🇹', name: 'Português',        role: t('info.languages.community') },
              { flag: '🇬🇧', name: 'English',          role: t('info.languages.business') }
            ].map(lang => (
              <div key={lang.name} style={{
                flex: '1 1 calc(50% - 5px)', minWidth: 130,
                background: 'white', border: '1px solid var(--border)',
                borderRadius: 'var(--radius)', padding: '12px', textAlign: 'center'
              }}>
                <div style={{ fontSize: '2rem', marginBottom: 4 }}>{lang.flag}</div>
                <div style={{ fontWeight: 600, fontSize: '0.85rem' }}>{lang.name}</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: 2 }}>{lang.role}</div>
              </div>
            ))}
          </div>

          <div style={{ marginBottom: 12 }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: 12 }}>
              {t('info.languages.usefulPhrases')}
            </div>
            {languagePhrases.map((phrase) => (
              <div key={phrase.lb} className="card" style={{ marginBottom: 8, padding: 14 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span style={{ fontSize: '1.2rem', lineHeight: 1 }}>🇱🇺</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gray-900)' }}>{phrase.lb}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {[
                    { flag: '🇬🇧', text: phrase.meaning },
                    { flag: '🇫🇷', text: phrase.fr },
                    { flag: '🇩🇪', text: phrase.de }
                  ].map(({ flag, text }) => (
                    <div key={flag} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: '0.95rem', flexShrink: 0 }}>{flag}</span>
                      <span style={{ fontSize: '0.82rem', color: 'var(--gray-600)', lineHeight: 1.3 }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <a href={luxembourgishUrl}
            target="_blank" rel="noreferrer"
            className="btn btn-outline btn-full"
            style={{ borderColor: '#16a34a', color: '#16a34a' }}>
            {t('info.languages.learnMore')}
          </a>
        </div>
      )}

      {/* ── Intercultural Activities Tab ─────────────────────────────────────── */}
      {activeTab === 'intercultural' && (
        <div className="animate-fade-in">
          <div style={{
            background: 'linear-gradient(135deg, #059669 0%, #065F46 100%)',
            borderRadius: 'var(--radius-xl)', padding: '24px',
            color: 'white', marginBottom: 20
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>🌍</div>
            <h2 style={{ color: 'white', marginBottom: 8 }}>{t('info.intercultural.heading')}</h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', margin: 0, fontSize: '0.9rem', lineHeight: 1.5 }}>
              {t('info.intercultural.subheading')}
            </p>
          </div>

          {activities.map(cat => (
            <div key={cat.id || cat.title} style={{ marginBottom: 20 }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12
              }}>
                <span style={{
                  background: cat.bg, color: cat.color,
                  borderRadius: 999, padding: '5px 14px',
                  fontSize: '0.85rem', fontWeight: 700,
                  display: 'inline-flex', alignItems: 'center', gap: 6
                }}>
                  {cat.icon} {tf(cat, 'title') || cat.title}
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {(getArrayField(cat, 'tips', lang) || cat.tips).map((tip, i) => (
                  <div key={i} style={{
                    background: 'white', border: '1px solid var(--border)',
                    borderRadius: 'var(--radius)', padding: '12px 16px',
                    display: 'flex', gap: 12, alignItems: 'flex-start'
                  }}>
                    <span style={{
                      width: 24, height: 24, borderRadius: '50%', flexShrink: 0,
                      background: cat.bg, color: cat.color,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.75rem', fontWeight: 700
                    }}>{i + 1}</span>
                    <span style={{ fontSize: '0.88rem', color: 'var(--gray-700)', lineHeight: 1.5 }}>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <a href={biergerpaktUrl}
            target="_blank" rel="noreferrer"
            style={{
              display: 'block',
              background: 'linear-gradient(135deg, #1E3A5F 0%, #2563EB 100%)',
              color: 'white', borderRadius: 'var(--radius-lg)', padding: '16px 20px',
              textDecoration: 'none', textAlign: 'center', fontWeight: 700,
              fontSize: '0.95rem', marginBottom: 24,
            }}>
            {t('info.intercultural.discoverBtn')}
          </a>
        </div>
      )}

      {/* ── Sources Tab ─────────────────────────────────────────────────────── */}
      {activeTab === 'sources' && (
        <div className="animate-fade-in">
          <div className="card" style={{ marginBottom: 20 }}>
            <h3 style={{ marginBottom: 8 }}>{t('info.sources.heading')}</h3>
            <p style={{ color: 'var(--gray-700)', margin: 0, fontSize: '0.88rem', lineHeight: 1.6 }}>
              {t('info.sources.description')}
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {reliableSources.map(group => (
              <div key={group.category}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  marginBottom: 10
                }}>
                  <span style={{ fontSize: '1.2rem' }}>{group.icon}</span>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--gray-700)' }}>
                    {tf(group, 'category') || group.category}
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {group.sources.map(src => (
                    <a
                      key={src.href}
                      href={src.href}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex', flexDirection: 'column', gap: 4,
                        background: 'white', border: '1px solid var(--border)',
                        borderRadius: 'var(--radius)', padding: '14px 16px',
                        textDecoration: 'none', color: 'var(--text)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                        <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent)' }}>{src.label}</span>
                        <span style={{ color: 'var(--gray-400)', flexShrink: 0 }}>→</span>
                      </div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{tf(src, 'desc') || src.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 24, padding: '14px 16px',
            background: 'var(--gray-50)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius)', fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5
          }}>
            {t('info.sources.disclaimer')}
          </div>
        </div>
      )}
    </div>
  )
}
