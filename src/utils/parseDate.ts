export const parseDate = (date: string): number => {
  // "Present" or ranges with "Present" → use current date
  if (date.toLowerCase().includes('present')) {
    return Date.now()
  }

  // "2018 - 2019" or "2018-2019" → use the end year (2019)
  const rangeMatch = date.match(/(\d{4})\s*[-–]\s*(\d{4})/)
  if (rangeMatch) {
    return new Date(rangeMatch[2]).getTime()
  }

  // "Jun 6, 2025" or any other parseable date → parse directly
  const parsed = new Date(date).getTime()
  if (!isNaN(parsed)) return parsed

  // fallback — try extracting any 4-digit year
  const yearMatch = date.match(/\d{4}/)
  if (yearMatch) return new Date(yearMatch[0]).getTime()

  return 0
}