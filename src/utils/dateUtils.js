/**
 * Returns today's date string: "YYYY-MM-DD"
 */
export function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

/**
 * Returns a numeric day-of-year index (0-based) for seeding daily content.
 */
export function dayIndex() {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now - start
  return Math.floor(diff / 86400000)
}

/**
 * Returns a 0-based week number for weekly content.
 */
export function weekIndex() {
  return Math.floor(dayIndex() / 7)
}

/**
 * Checks whether a stored date string matches today.
 */
export function isToday(dateStr) {
  return dateStr === todayStr()
}
