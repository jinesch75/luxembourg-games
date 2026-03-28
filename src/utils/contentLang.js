/**
 * contentLang — helpers for resolving multilingual content fields.
 *
 * Content items may carry a `translations` object, e.g.:
 *   { question: '...', translations: { fr: { question: '...' }, de: { ... }, lb: { ... } } }
 *
 * Usage:
 *   getField(item, 'question', 'fr')       → fr translation or English fallback
 *   getArrayField(item, 'options', 'de')   → de options array or English fallback
 *   ensureTranslations(item)               → item with at least empty translation stubs
 */

const LANGS = ['fr', 'de', 'lb']

/**
 * Resolve a single string field from an item, using the given language.
 * Falls back to the English (root) value if no translation is set.
 */
export function getField(item, fieldName, lang) {
  if (!item) return ''
  const l = (lang || 'en').split('-')[0]
  if (l !== 'en') {
    const v = item.translations?.[l]?.[fieldName]
    if (v) return v
  }
  return item[fieldName] ?? ''
}

/**
 * Resolve an array field (e.g. options) from an item, using the given language.
 * Falls back to the English (root) array if no translation is set.
 */
export function getArrayField(item, fieldName, lang) {
  if (!item) return []
  const l = (lang || 'en').split('-')[0]
  if (l !== 'en') {
    const arr = item.translations?.[l]?.[fieldName]
    if (Array.isArray(arr) && arr.length > 0) return arr
  }
  return item[fieldName] ?? []
}

/**
 * Return an item guaranteed to have a `translations` object with stubs for fr/de/lb.
 * Does not mutate the original item.
 */
export function ensureTranslations(item, fields = []) {
  const t = { ...(item.translations || {}) }
  for (const l of LANGS) {
    t[l] = { ...t[l] }
    for (const f of fields) {
      if (!(f in t[l])) t[l][f] = Array.isArray(item[f]) ? [] : ''
    }
  }
  return { ...item, translations: t }
}

export { LANGS }
