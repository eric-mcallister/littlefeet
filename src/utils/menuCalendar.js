import { WEEK1_DAY_KEYS, WEEK1_DAYS } from '@/data/menuWeek1.js'

const MONTH_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

/** Number of calendar weeks that touch this month (1–5). */
export function getWeeksInMonth(year, monthIndex) {
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  return Math.ceil(daysInMonth / 7)
}

/** Which week of the month (1-based) a date falls in. */
export function getWeekOfMonth(date) {
  return Math.ceil(date.getDate() / 7)
}

/**
 * Mon–Fri range for the school week bucket containing `date`.
 * Week 1 = days 1–7 → Mon–Fri 1–5; week 2 → 8–12, etc.
 */
export function getSchoolWeekRange(date) {
  const year = date.getFullYear()
  const monthIndex = date.getMonth()
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  const weekOfMonth = getWeekOfMonth(date)
  const mondayDay = (weekOfMonth - 1) * 7 + 1
  const fridayDay = Math.min(mondayDay + 4, daysInMonth)
  const monthShort = MONTH_SHORT[monthIndex]
  return {
    weekOfMonth,
    weeksInMonth: getWeeksInMonth(year, monthIndex),
    mondayDay,
    fridayDay,
    label: `${monthShort} ${mondayDay}–${fridayDay}`,
    monthName: new Date(year, monthIndex, 1).toLocaleString('en-US', { month: 'long' }),
    year,
    monthIndex,
    daysInMonth,
  }
}

function formatDayLabel(year, monthIndex, day) {
  const monthShort = MONTH_SHORT[monthIndex]
  return `${monthShort} ${day}`
}

/** Build Mon–Fri cards for the current menu week with today highlight. */
export function buildWeekDayCards(referenceDate = new Date()) {
  const { mondayDay, year, monthIndex } = getSchoolWeekRange(referenceDate)
  const today = referenceDate.getDate()
  const todayMonth = referenceDate.getMonth()
  const todayYear = referenceDate.getFullYear()

  return WEEK1_DAY_KEYS.map((key, index) => {
    const dayNum = mondayDay + index
    const data = WEEK1_DAYS[key]
    const borders = [
      'border-primary',
      'border-secondary',
      'border-primary',
      'border-tertiary',
      'border-primary',
    ]
    const isToday =
      year === todayYear && monthIndex === todayMonth && dayNum === today

    return {
      key,
      label: data.label,
      date: formatDayLabel(year, monthIndex, dayNum),
      dayNum,
      border: borders[index],
      isToday,
      breakfast: data.breakfast,
      lunch: data.lunch,
      snack: data.snack,
    }
  })
}

/** Month grid cells with lunch summary from week 1 (cycles by weekday). */
export function buildMonthCalendarCells(referenceDate = new Date()) {
  const year = referenceDate.getFullYear()
  const monthIndex = referenceDate.getMonth()
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate()
  const firstDow = new Date(year, monthIndex, 1).getDay()
  const today = referenceDate.getDate()
  const cells = []

  for (let i = 0; i < firstDow; i++) {
    cells.push({ empty: true })
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, monthIndex, d)
    const dow = date.getDay()
    const isWeekday = dow >= 1 && dow <= 5
    const dayKey = isWeekday ? WEEK1_DAY_KEYS[dow - 1] : null
    const lunch = dayKey ? WEEK1_DAYS[dayKey].lunchSummary : 'No school lunch service'

    cells.push({
      empty: false,
      day: d,
      label: `${MONTH_SHORT[monthIndex]} ${String(d).padStart(2, '0')}`,
      lunch,
      highlight: d === today,
    })
  }

  const remainder = cells.length % 7
  if (remainder !== 0) {
    for (let i = 0; i < 7 - remainder; i++) {
      cells.push({ empty: true })
    }
  }

  return cells
}

export function formatMealLine(item, ageId) {
  const amount = item.amounts[ageId]
  return `${amount} ${item.food}`
}
