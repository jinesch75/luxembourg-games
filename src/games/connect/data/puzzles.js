/**
 * Lëtz Connect — Weekly puzzle data
 * Each puzzle has 4 groups of 4 items.
 * Colors: yellow (easy) → green → blue → purple (expert)
 */

export const PUZZLES = [
  {
    id: 'week-1',
    title: 'Luxembourg & Europe',
    groups: [
      {
        color: 'yellow',
        title: 'EU institutions based in Luxembourg',
        items: ['Court of Justice', 'Court of Auditors', 'Eurostat', 'European Investment Bank']
      },
      {
        color: 'green',
        title: 'Luxembourg Prime Ministers',
        items: ['Jean-Claude Juncker', 'Xavier Bettel', 'Pierre Werner', 'Luc Frieden']
      },
      {
        color: 'blue',
        title: 'Luxembourg UNESCO Heritage',
        items: ['Bock Casemates', 'Family of Man', 'Echternach Dancing Procession', 'Old Quarters Fortifications']
      },
      {
        color: 'purple',
        title: 'Luxembourgish words for greetings',
        items: ['Moien', 'Äddi', 'Wéi geet\'s', 'Salut']
      }
    ]
  },
  {
    id: 'week-2',
    title: 'People & Culture',
    groups: [
      {
        color: 'yellow',
        title: 'Famous cyclists from Luxembourg',
        items: ['Charly Gaul', 'Nicolas Frantz', 'Andy Schleck', 'François Faber']
      },
      {
        color: 'green',
        title: 'Traditional Luxembourg festivals',
        items: ['Schueberfouer', 'Émaischen', 'Bretzelsonndeg', 'Oktav']
      },
      {
        color: 'blue',
        title: 'Regions (cantons) of Luxembourg',
        items: ['Diekirch', 'Grevenmacher', 'Clervaux', 'Remich']
      },
      {
        color: 'purple',
        title: 'Famous Luxembourgers in the arts & science',
        items: ['Edward Steichen', 'Hugo Gernsback', 'Michel Rodange', 'Joseph Kutter']
      }
    ]
  },
  {
    id: 'week-3',
    title: 'History & Society',
    groups: [
      {
        color: 'yellow',
        title: 'Neighbouring countries of Luxembourg',
        items: ['France', 'Germany', 'Belgium', 'All three border Luxembourg']
      },
      {
        color: 'green',
        title: 'Languages spoken in Luxembourg',
        items: ['Lëtzebuergesch', 'Français', 'Deutsch', 'Português']
      },
      {
        color: 'blue',
        title: 'Luxembourg history milestones',
        items: ['Treaty of London 1867', 'Schengen Agreement 1985', 'Independence 1839', 'ECSC founding 1951']
      },
      {
        color: 'purple',
        title: 'Luxembourgish words for numbers',
        items: ['Eent', 'Zwee', 'Dräi', 'Véier']
      }
    ]
  },
  {
    id: 'week-4',
    title: 'Places & Economy',
    groups: [
      {
        color: 'yellow',
        title: 'Castles in Luxembourg',
        items: ['Vianden', 'Bourscheid', 'Beaufort', 'Larochette']
      },
      {
        color: 'green',
        title: 'Things the Moselle region is known for',
        items: ['Riesling wine', 'Crémant sparkling wine', 'Schengen village', 'Remich waterfront']
      },
      {
        color: 'blue',
        title: 'Key economic sectors in Luxembourg',
        items: ['Investment funds', 'Steel industry', 'European institutions', 'Space technology']
      },
      {
        color: 'purple',
        title: 'Biergerpakt programme themes',
        items: ['Intercultural meeting', 'Community activities', 'Civic participation', 'Multicultural events']
      }
    ]
  },
  {
    id: 'week-5',
    title: 'Everyday Life',
    groups: [
      {
        color: 'yellow',
        title: 'Luxembourg City neighbourhoods',
        items: ['Kirchberg', 'Clausen', 'Bonnevoie', 'Limpertsberg']
      },
      {
        color: 'green',
        title: 'Public institutions helping residents',
        items: ['ADEM', 'STATEC', 'Médiateur', 'Chambre des Députés']
      },
      {
        color: 'blue',
        title: 'Cross-border commuter countries',
        items: ['France', 'Germany', 'Belgium', 'All three send workers to Luxembourg']
      },
      {
        color: 'purple',
        title: 'Words for Luxembourg landmarks in Lëtzebuergesch',
        items: ['Gëlle Fra', 'Bock', 'Péckvillercher', 'Sprangprozessioun']
      }
    ]
  }
]

/**
 * Get the current week's puzzle (rotates through available puzzles).
 */
export function getCurrentPuzzle(weekIdx) {
  return PUZZLES[weekIdx % PUZZLES.length]
}

export const COLOR_META = {
  yellow: { bg: '#FDE68A', text: '#92400E', border: '#F59E0B', label: 'Straightforward' },
  green:  { bg: '#A7F3D0', text: '#065F46', border: '#10B981', label: 'Medium' },
  blue:   { bg: '#BFDBFE', text: '#1E40AF', border: '#3B82F6', label: 'Tricky' },
  purple: { bg: '#DDD6FE', text: '#5B21B6', border: '#8B5CF6', label: 'Expert' }
}
