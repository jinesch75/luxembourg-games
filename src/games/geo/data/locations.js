/**
 * Luxembourg Geo Game — Location data
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
  }
]

/**
 * Returns 5 locations for a play session (semi-random, seeded by day).
 * @param {number} seed
 * @param {Array}  [locationsPool]  optional override (from admin/server)
 */
export function getSessionLocations(seed = 0, locationsPool = null) {
  const pool = locationsPool || LOCATIONS
  const shuffled = [...pool].sort((a, b) => {
    const h = (str) => str.split('').reduce((acc, c) => acc * 31 + c.charCodeAt(0), seed) % 1000
    return h(a.id + seed) - h(b.id + seed)
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
