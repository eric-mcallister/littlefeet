<script setup>
import { computed } from 'vue'
import SiteNav from '@/components/SiteNav.vue'
import SiteFooter from '@/components/SiteFooter.vue'

/** March 2026: 31 lunch lines (index 0 = Mar 1) */
const marchLunches = [
  'Pasta Primavera & Peaches',
  'Lentil Tacos & Mango',
  'Fish Cakes & Broccolini',
  'Chicken Congee & Peas',
  'Community Garden Harvest Lunch',
  'Egg Muffins & Berries',
  'Hummus Wraps & Melon',
  'Turkey Meatballs & Orzo',
  'Sweet Potato Soup & Roll',
  'Grilled Cheese & Tomato Soup',
  'Quinoa Bowl & Roasted Veg',
  'Baked Salmon & Rice',
  'Veggie Stir-Fry & Noodles',
  'Chicken Tenders & Applesauce',
  'Beef & Bean Burrito Bowl',
  'Steel-Cut Oats Lunch Bowl & Fruit',
  'Spinach Ravioli & Salad',
  'BBQ Chicken & Corn',
  'Tuna Salad Sandwich & Cucumber',
  'Homemade Pizza & Carrots',
  'Banana Pancakes & Yogurt',
  'Sloppy Joes & Green Beans',
  'Chicken Noodle Soup & Crackers',
  'Mac & Cheese & Broccoli',
  'Turkey & Avocado Wraps',
  'Sweet Potato Quesadillas',
  'Lentil Soup & Whole Grain Roll',
  'Salmon & Quinoa Plate',
  'Mini Pizzas & Celery',
  'Shepherd’s Pie & Peas',
  'Chef’s Choice & Seasonal Fruit',
]

const weekDays = [
  {
    label: 'Sunday',
    date: 'Mar 15',
    border: 'border-primary',
    isToday: false,
    breakfast: 'Fresh Fruit & Yogurt Bar',
    lunch: 'Whole Wheat Grilled Cheese & Tomato Soup',
    lunchTags: [{ text: 'Nut-Free', class: 'bg-tertiary-fixed text-on-tertiary-fixed' }],
    snack: 'Banana Chips & Water',
  },
  {
    label: 'Monday',
    date: 'Mar 16',
    border: 'border-primary',
    isToday: false,
    breakfast: 'Steel-cut Oats with Fresh Blueberries',
    lunch: 'Turkey & Avocado Whole Wheat Wraps',
    lunchTags: [{ text: 'Nut-Free', class: 'bg-tertiary-fixed text-on-tertiary-fixed' }],
    snack: 'Apple Slices with SunButter',
  },
  {
    label: 'Tuesday',
    date: 'Mar 17',
    border: 'border-secondary',
    isToday: false,
    breakfast: 'Greek Yogurt Parfait with Granola',
    lunch: 'Sweet Potato & Black Bean Quesadillas',
    lunchTags: [{ text: 'Vegetarian', class: 'bg-secondary-fixed text-on-secondary-fixed' }],
    snack: 'Cheddar Cheese Cubes & Grapes',
  },
  {
    label: 'Wednesday',
    date: 'Mar 18',
    border: 'border-primary',
    isToday: false,
    breakfast: 'Whole Grain Waffles with Berries',
    lunch: 'Slow-Cooked Lentil Soup with Spinach',
    lunchTags: [
      { text: 'Gluten-Free', class: 'bg-tertiary-fixed text-on-tertiary-fixed' },
      { text: 'Vegan', class: 'bg-secondary-fixed text-on-secondary-fixed' },
    ],
    snack: 'Hummus & Bell Pepper Strips',
  },
  {
    label: 'Thursday',
    date: 'Mar 19',
    border: 'border-tertiary',
    isToday: false,
    breakfast: 'Soft Scrambled Eggs with Toast',
    lunch: 'Wild-Caught Salmon with Quinoa',
    lunchTags: [{ text: 'Omega-3 Rich', class: 'bg-tertiary-fixed text-on-tertiary-fixed' }],
    snack: 'Pear Slices & Rice Cakes',
  },
  {
    label: 'Friday',
    date: 'Mar 20',
    border: 'border-primary',
    isToday: false,
    breakfast: 'Banana Bran Muffins (Mini)',
    lunch: 'Homemade Pizza with Veggie Toppings',
    lunchTags: [],
    snack: 'Trail Mix (Seeds & Dried Fruit)',
  },
  {
    label: 'Saturday',
    date: 'Mar 21',
    border: 'border-on-primary-container',
    isToday: true,
    breakfast: 'Whole Grain Waffles with Berries',
    lunch: 'Slow-Cooked Lentil Soup with Spinach',
    lunchTags: [
      { text: 'Gluten-Free', class: 'bg-tertiary-fixed text-on-tertiary-fixed' },
      { text: 'Vegan', class: 'bg-secondary-fixed text-on-secondary-fixed' },
    ],
    snack: 'Hummus & Bell Pepper Strips',
  },
]

const marchCalendarCells = computed(() => {
  const cells = []
  const year = 2026
  const monthIndex = 2
  const firstDow = new Date(year, monthIndex, 1).getDay()
  for (let i = 0; i < firstDow; i++) {
    cells.push({ empty: true })
  }
  for (let d = 1; d <= 31; d++) {
    cells.push({
      empty: false,
      day: d,
      label: `Mar ${String(d).padStart(2, '0')}`,
      lunch: marchLunches[d - 1],
      highlight: d === 21,
    })
  }
  const remainder = cells.length % 7
  if (remainder !== 0) {
    for (let i = 0; i < 7 - remainder; i++) {
      cells.push({ empty: true })
    }
  }
  return cells
})
</script>

<template>
  <div class="min-h-screen bg-surface font-body text-on-surface antialiased">
    <SiteNav />

    <main class="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pt-28">
      <header class="mb-16 text-center md:text-left">
        <div class="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div class="max-w-2xl">
            <span
              class="mb-4 inline-flex items-center gap-2 rounded-full bg-tertiary-container px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-on-tertiary-container"
            >
              <span class="material-symbols-outlined text-sm">restaurant_menu</span>
              Wholesome Nutrition
            </span>
            <h1 class="mb-6 text-5xl font-bold tracking-tight text-primary md:text-6xl">
              Monthly Menu
            </h1>
            <p class="text-lg leading-relaxed text-on-surface-variant">
              At Little Feet Learning Academy, we believe every meal is an opportunity for growth.
              Our chef-curated menus prioritize seasonal organic ingredients, diverse flavors, and
              essential nutrients for developing minds.
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <button
              type="button"
              class="flex items-center justify-center gap-3 rounded-full bg-secondary-container px-8 py-4 font-bold text-on-secondary-container transition-transform hover:scale-105"
            >
              <span class="material-symbols-outlined">download</span>
              Download Full Mar PDF
            </button>
          </div>
        </div>
      </header>

      <section class="mb-20">
        <div class="mb-8 flex items-center justify-between">
          <h2 class="text-3xl font-bold tracking-tight text-on-surface">
            Current Week: Mar 15–21
          </h2>
          <span
            class="rounded-full bg-surface-container-high px-3 py-1 text-xs font-semibold uppercase tracking-wider text-outline"
            >Week 3 of 5</span
          >
        </div>

        <div
          class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-7"
        >
          <template v-for="d in weekDays" :key="d.date">
            <div
              v-if="!d.isToday"
              class="rounded-xl border-t-4 bg-surface-container-lowest p-8 shadow-[0_12px_32px_rgba(45,52,53,0.04)] transition-shadow hover:shadow-lg"
              :class="d.border"
            >
              <h3 class="mb-1 text-xl font-bold text-on-surface-variant">{{ d.label }}</h3>
              <p class="mb-6 text-sm font-medium text-outline">{{ d.date }}</p>
              <div class="space-y-6">
                <div>
                  <span
                    class="mb-1 block text-[10px] font-extrabold uppercase tracking-tighter text-primary"
                    >Breakfast</span
                  >
                  <p class="text-sm font-semibold">{{ d.breakfast }}</p>
                </div>
                <div>
                  <span
                    class="mb-1 block text-[10px] font-extrabold uppercase tracking-tighter text-tertiary"
                    >Lunch</span
                  >
                  <p class="text-sm font-semibold">{{ d.lunch }}</p>
                  <div v-if="d.lunchTags.length" class="mt-2 flex flex-wrap gap-1">
                    <span
                      v-for="(tag, t) in d.lunchTags"
                      :key="t"
                      class="rounded-md px-2 py-0.5 text-[10px]"
                      :class="tag.class"
                      >{{ tag.text }}</span
                    >
                  </div>
                </div>
                <div>
                  <span
                    class="mb-1 block text-[10px] font-extrabold uppercase tracking-tighter text-secondary"
                    >Snack</span
                  >
                  <p class="text-sm font-semibold">{{ d.snack }}</p>
                </div>
              </div>
            </div>
            <div
              v-else
              class="relative scale-105 rounded-xl border-t-4 border-on-primary-container bg-primary-container p-8 shadow-[0_12px_32px_rgba(45,52,53,0.08)] 2xl:scale-105"
            >
              <div
                class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-on-primary-container px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-primary"
              >
                Today
              </div>
              <h3 class="mb-1 text-xl font-bold text-on-primary-container">{{ d.label }}</h3>
              <p class="mb-6 text-sm font-medium text-on-primary-fixed-variant">{{ d.date }}</p>
              <div class="space-y-6">
                <div>
                  <span
                    class="mb-1 block text-[10px] font-extrabold uppercase tracking-tighter text-on-primary-fixed-variant"
                    >Breakfast</span
                  >
                  <p class="text-sm font-bold text-on-primary-container">{{ d.breakfast }}</p>
                </div>
                <div>
                  <span
                    class="mb-1 block text-[10px] font-extrabold uppercase tracking-tighter text-on-primary-fixed-variant"
                    >Lunch</span
                  >
                  <p class="text-sm font-bold text-on-primary-container">{{ d.lunch }}</p>
                  <div v-if="d.lunchTags.length" class="mt-2 flex flex-wrap gap-1">
                    <span
                      v-for="(tag, t) in d.lunchTags"
                      :key="t"
                      class="rounded-md px-2 py-0.5 text-[10px]"
                      :class="tag.class"
                      >{{ tag.text }}</span
                    >
                  </div>
                </div>
                <div>
                  <span
                    class="mb-1 block text-[10px] font-extrabold uppercase tracking-tighter text-on-primary-fixed-variant"
                    >Snack</span
                  >
                  <p class="text-sm font-bold text-on-primary-container">{{ d.snack }}</p>
                </div>
              </div>
            </div>
          </template>
        </div>
      </section>

      <section
        class="mb-20 grid grid-cols-1 items-center gap-12 rounded-xl bg-surface-container-low p-12 md:grid-cols-2"
      >
        <div>
          <h2 class="mb-6 text-3xl font-bold text-primary">Our Food Philosophy</h2>
          <p class="mb-8 leading-relaxed text-on-surface-variant">
            We follow a strict farm-to-table approach for all our Little Feet families. Our kitchen is
            completely nut-free and we work closely with parents to accommodate all medically
            documented allergies.
          </p>
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <div class="rounded-lg bg-tertiary-container p-2">
                <span class="material-symbols-outlined text-on-tertiary-container"
                  >energy_savings_leaf</span
                >
              </div>
              <div>
                <h4 class="font-bold text-on-surface">Organic & Local</h4>
                <p class="text-sm text-on-surface-variant">
                  80% of our produce is sourced from local family farms.
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="rounded-lg bg-secondary-container p-2">
                <span class="material-symbols-outlined text-on-secondary-container">no_accounts</span>
              </div>
              <div>
                <h4 class="font-bold text-on-surface">No Processed Sugars</h4>
                <p class="text-sm text-on-surface-variant">
                  Sweetness comes naturally from honey, dates, and fresh fruit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative h-96 overflow-hidden rounded-lg">
          <img
            alt="Colorful healthy toddler snacks"
            class="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPuoGReR_iUKpvKvA42YRYGGAGUWM3NzQWh-1jSOxfkYYcFRL0VygC94GHVB6qM9louhdh6BuVf55VNaEE6YbUHQ16UeFZna7w3lc2osdd8QG5LnuZABe1Jdc8dG9H_23qj0qQudxNSM3Q3XxOy8UNpKhk8Gtbkyxkctn43Z7ia8XJK4JIO7i25nQcVTO4kjCBlbiKcFEgV8HrbcjJpOuDg8kqmRNGSlEiS4WtDQdX-FApAiVIBLgAgS5v7unywm0RaQvpCqT8yLg"
          />
          <div class="absolute bottom-6 left-6 right-6 rounded-xl bg-white/80 p-6 backdrop-blur-md">
            <p class="text-sm font-semibold text-primary">
              "A diverse palate leads to a diverse mind. We introduce children to new flavors every
              Friday."
            </p>
            <p class="mt-2 text-xs font-bold text-on-surface">— Chef Julianne, Academy Nutritionist</p>
          </div>
        </div>
      </section>

      <section>
        <div class="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <h2 class="text-3xl font-bold text-on-surface">March Overview</h2>
          <div class="flex gap-4">
            <button
              type="button"
              class="rounded-full border border-outline-variant/20 bg-surface-container-high px-6 py-2 text-sm font-bold text-on-surface-variant transition-colors hover:bg-surface-container-highest"
            >
              Previous Month
            </button>
            <button
              type="button"
              class="rounded-full bg-primary px-6 py-2 text-sm font-bold text-on-primary shadow-md transition-opacity hover:opacity-90"
            >
              Next Month
            </button>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          <template v-for="(cell, i) in marchCalendarCells" :key="i">
            <div v-if="cell.empty" class="hidden min-h-[8rem] rounded-lg bg-surface-container/30 lg:block" />
            <div
              v-else-if="cell.highlight"
              class="min-h-[8rem] rounded-lg border-2 border-primary/20 bg-primary/5 p-4"
            >
              <span class="text-xs font-bold text-primary">{{ cell.label }}</span>
              <p class="mt-2 text-[10px] font-bold text-primary">{{ cell.lunch }}</p>
            </div>
            <div
              v-else
              class="min-h-[8rem] rounded-lg border border-outline-variant/10 bg-surface-container-lowest p-4"
            >
              <span class="text-xs font-bold text-outline">{{ cell.label }}</span>
              <p class="mt-2 text-[10px] font-medium">{{ cell.lunch }}</p>
            </div>
          </template>
        </div>

        <div class="col-span-full mt-8 rounded-xl bg-surface-container-high p-8 text-center">
          <p class="mb-4 font-medium italic text-on-surface-variant">
            The full monthly breakdown including all 5 weeks is available in the printable PDF
            version.
          </p>
          <button
            type="button"
            class="mx-auto flex items-center gap-2 rounded-full bg-primary-container px-10 py-3 text-sm font-extrabold text-on-primary-container transition-transform hover:scale-105"
          >
            <span class="material-symbols-outlined">picture_as_pdf</span>
            GET FULL MARCH MENU
          </button>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
