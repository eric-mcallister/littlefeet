/** CACFP Week 1 menu from public/menus/Menu Week 1.pdf */

export const AGE_GROUPS = [
  { id: '1-2', label: 'Ages 1–2' },
  { id: '3-5', label: 'Ages 3–5' },
  { id: '6-18', label: 'Ages 6–18' },
]

const milkBreakfast = {
  food: 'Whole milk, 1% milk & almond',
  amounts: {
    '1-2': '½ cup',
    '3-5': '¾ cup',
    '6-18': '1 cup',
  },
}

const milkLunch = { ...milkBreakfast }

const milkSnack = {
  food: 'Whole milk, 1% milk & almond',
  amounts: {
    '1-2': '½ cup',
    '3-5': '½ cup',
    '6-18': '1 cup',
  },
}

/** @type {Record<string, { label: string, breakfast: object[], lunch: object[], snack: object[] }>} */
export const WEEK1_DAYS = {
  monday: {
    label: 'Monday',
    breakfast: [
      milkBreakfast,
      {
        food: 'Oranges',
        amounts: { '1-2': '¼ cup', '3-5': '½ cup', '6-18': '½ cup' },
      },
      {
        food: 'Whole wheat waffles',
        amounts: { '1-2': '½ slice', '3-5': '1 slice', '6-18': '1 slice' },
      },
    ],
    lunch: [
      milkLunch,
      {
        food: 'Baked beans',
        amounts: { '1-2': '⅛ cup', '3-5': '¼ cup', '6-18': '½ cup' },
      },
      {
        food: 'Oranges',
        amounts: { '1-2': '⅛ cup', '3-5': '¼ cup', '6-18': '¼ cup' },
      },
      {
        food: 'Chicken nuggets',
        amounts: { '1-2': '1 serving', '3-5': '1½ serving', '6-18': '2 serving' },
      },
      {
        food: 'Whole grain tortilla wrap',
        amounts: { '1-2': '½ serving', '3-5': '1 serving', '6-18': '1 serving' },
      },
    ],
    snack: [
      milkSnack,
      {
        food: '100% apple juice',
        amounts: { '1-2': '½ cup', '3-5': '½ cup', '6-18': '¾ cup' },
      },
      {
        food: 'Cheese',
        amounts: { '1-2': '⅛ cup', '3-5': '⅛ cup', '6-18': '¼ cup' },
      },
      {
        food: 'Whole grain Chex mix',
        amounts: { '1-2': '½ serving', '3-5': '1 serving', '6-18': '1 serving' },
      },
    ],
    lunchSummary: 'Chicken nuggets, baked beans & tortilla wrap',
  },
  tuesday: {
    label: 'Tuesday',
    breakfast: [
      milkBreakfast,
      {
        food: 'Apple sauce',
        amounts: { '1-2': '¼ cup', '3-5': '½ cup', '6-18': '½ cup' },
      },
      {
        food: 'Blueberry muffins',
        amounts: { '1-2': '¼ cup dry', '3-5': '¾ cup dry', '6-18': '¾ cup dry' },
      },
    ],
    lunch: [
      milkLunch,
      {
        food: 'String beans',
        amounts: { '1-2': '⅛ cup', '3-5': '¼ cup', '6-18': '½ cup' },
      },
      {
        food: 'Peaches',
        amounts: { '1-2': '⅛ cup', '3-5': '¼ cup', '6-18': '¼ cup' },
      },
      {
        food: 'Chicken',
        amounts: { '1-2': '1 serving', '3-5': '1½ serving', '6-18': '2 serving' },
      },
      {
        food: 'Noodles',
        amounts: { '1-2': '½ serving', '3-5': '1 serving', '6-18': '1 serving' },
      },
    ],
    snack: [
      milkSnack,
      {
        food: '100% apple juice',
        amounts: { '1-2': '½ cup', '3-5': '½ cup', '6-18': '¾ cup' },
      },
      {
        food: 'Cheese',
        amounts: { '1-2': '⅛ cup', '3-5': '⅛ cup', '6-18': '¼ cup' },
      },
      {
        food: 'Goldfish crackers',
        amounts: { '1-2': '½ serving', '3-5': '1 serving', '6-18': '1 serving' },
      },
    ],
    lunchSummary: 'Chicken, string beans & noodles',
  },
  wednesday: {
    label: 'Wednesday',
    breakfast: [
      milkBreakfast,
      {
        food: 'Peaches',
        amounts: { '1-2': '¼ cup', '3-5': '½ cup', '6-18': '½ cup' },
      },
      {
        food: 'Grits',
        amounts: { '1-2': '¼ cup cooked', '3-5': '¼ cup cooked', '6-18': '½ cup cooked' },
      },
    ],
    lunch: [
      milkLunch,
      {
        food: 'Corn',
        amounts: { '1-2': '⅛ cup', '3-5': '¼ cup', '6-18': '½ cup' },
      },
      {
        food: 'Pineapples',
        amounts: { '1-2': '⅛ cup', '3-5': '¼ cup', '6-18': '¼ cup' },
      },
      {
        food: 'Hamburger slice',
        amounts: { '1-2': '1 serving', '3-5': '1½ serving', '6-18': '2 serving' },
      },
      {
        food: '100% wheat bread',
        amounts: { '1-2': '½ slice', '3-5': '1 slice', '6-18': '1 slice' },
      },
    ],
    snack: [
      milkSnack,
      {
        food: '100% apple juice',
        amounts: { '1-2': '½ cup', '3-5': '½ cup', '6-18': '¾ cup' },
      },
      {
        food: 'Cheese',
        amounts: { '1-2': '⅛ cup', '3-5': '⅛ cup', '6-18': '¼ cup' },
      },
      {
        food: 'Animal cookies',
        amounts: { '1-2': '½ serving', '3-5': '1 serving', '6-18': '1 serving' },
      },
    ],
    lunchSummary: 'Hamburger slice, corn & wheat bread',
  },
  thursday: {
    label: 'Thursday',
    breakfast: [
      milkBreakfast,
      {
        food: 'Pineapples',
        amounts: { '1-2': '¼ cup', '3-5': '½ cup', '6-18': '½ cup' },
      },
      {
        food: 'Whole wheat pancakes',
        amounts: { '1-2': '½ slice', '3-5': '1 slice', '6-18': '1 slice' },
      },
    ],
    lunch: [
      milkLunch,
      {
        food: 'Mashed potatoes',
        amounts: { '1-2': '⅛ cup', '3-5': '¼ cup', '6-18': '½ cup' },
      },
      {
        food: 'Oranges',
        amounts: { '1-2': '⅛ cup', '3-5': '¼ cup', '6-18': '¼ cup' },
      },
      {
        food: 'Turkey / ham',
        amounts: { '1-2': '1 serving', '3-5': '1½ serving', '6-18': '2 serving' },
      },
      {
        food: '100% wheat bread',
        amounts: { '1-2': '½ slice', '3-5': '1 slice', '6-18': '1 slice' },
      },
    ],
    snack: [
      milkSnack,
      {
        food: '100% apple juice',
        amounts: { '1-2': '½ cup', '3-5': '½ cup', '6-18': '¾ cup' },
      },
      {
        food: 'Cheese',
        amounts: { '1-2': '⅛ cup', '3-5': '⅛ cup', '6-18': '¼ cup' },
      },
      {
        food: 'Crackers',
        amounts: { '1-2': '½ serving', '3-5': '1 serving', '6-18': '1 serving' },
      },
    ],
    lunchSummary: 'Turkey/ham, mashed potatoes & wheat bread',
  },
  friday: {
    label: 'Friday',
    breakfast: [
      milkBreakfast,
      {
        food: 'Banana',
        amounts: { '1-2': '¼ cup', '3-5': '½ cup', '6-18': '½ cup' },
      },
      {
        food: 'Whole grain Cheerios',
        amounts: { '1-2': '¼ cup dry', '3-5': '¾ cup dry', '6-18': '¾ cup dry' },
      },
    ],
    lunch: [
      milkLunch,
      {
        food: 'Baked beans',
        amounts: { '1-2': '⅛ cup', '3-5': '¼ cup', '6-18': '½ cup' },
      },
      {
        food: 'Pineapples',
        amounts: { '1-2': '⅛ cup', '3-5': '¼ cup', '6-18': '¼ cup' },
      },
      {
        food: 'Grilled cheese',
        amounts: { '1-2': '1 serving', '3-5': '1½ serving', '6-18': '2 serving' },
      },
      {
        food: '100% wheat bread',
        amounts: { '1-2': '½ slice', '3-5': '1 slice', '6-18': '1 slice' },
      },
    ],
    snack: [
      milkSnack,
      {
        food: '100% apple juice',
        amounts: { '1-2': '½ cup', '3-5': '½ cup', '6-18': '¾ cup' },
      },
      {
        food: 'Cheese',
        amounts: { '1-2': '⅛ cup', '3-5': '⅛ cup', '6-18': '¼ cup' },
      },
      {
        food: 'Whole grain Chex mix, wheat crackers & cheese',
        amounts: { '1-2': '½ serving', '3-5': '1 serving', '6-18': '1 serving' },
      },
    ],
    lunchSummary: 'Grilled cheese, baked beans & wheat bread',
  },
}

export const WEEK1_DAY_KEYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']

export const MENU_WEEK_PDF = '/menus/Menu Week 1.pdf'
