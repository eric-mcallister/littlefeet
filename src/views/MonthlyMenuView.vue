<script setup>
import { computed, ref } from 'vue'
import SiteNav from '@/components/SiteNav.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import { AGE_GROUPS, MENU_WEEK_PDF } from '@/data/menuWeek1.js'
import {
  buildMonthCalendarCells,
  buildWeekDayCards,
  formatMealLine,
  getSchoolWeekRange,
} from '@/utils/menuCalendar.js'

const today = new Date()
const selectedAge = ref('3-5')

const weekInfo = computed(() => getSchoolWeekRange(today))
const weekDays = computed(() => buildWeekDayCards(today))
const monthCalendarCells = computed(() => buildMonthCalendarCells(today))

const monthOverviewTitle = computed(
  () => `${weekInfo.value.monthName} at a Glance`,
)

function ageButtonClass(ageId) {
  const active = selectedAge.value === ageId
  return [
    'rounded-full px-6 py-2 text-sm font-bold transition-colors',
    active
      ? 'bg-primary text-on-primary shadow-md'
      : 'border border-outline-variant/20 bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest',
  ]
}
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
              Our menus follow CACFP guidelines with age-appropriate serving sizes for every child.
            </p>
          </div>
          <div class="flex flex-col gap-4">
            <a
              :href="MENU_WEEK_PDF"
              download
              class="flex items-center justify-center gap-3 rounded-full bg-secondary-container px-8 py-4 font-bold text-on-secondary-container transition-transform hover:scale-105"
            >
              <span class="material-symbols-outlined">download</span>
              Download Menu Week 1 PDF
            </a>
          </div>
        </div>
      </header>

      <section class="mb-20">
        <div
          class="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-on-surface">
              Current Week: {{ weekInfo.label }}
            </h2>
            <p class="mt-1 text-sm text-on-surface-variant">
              Week {{ weekInfo.weekOfMonth }} Menu (Mon–Fri) · {{ weekInfo.monthName }}
              {{ weekInfo.year }}
            </p>
          </div>
          <span
            class="w-fit rounded-full bg-surface-container-high px-3 py-1 text-xs font-semibold uppercase tracking-wider text-outline"
          >
            Week {{ weekInfo.weekOfMonth }} of {{ weekInfo.weeksInMonth }}
          </span>
        </div>

        <div class="mb-8 flex flex-wrap gap-3">
          <button
            v-for="age in AGE_GROUPS"
            :key="age.id"
            type="button"
            :class="ageButtonClass(age.id)"
            @click="selectedAge = age.id"
          >
            {{ age.label }}
          </button>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <template v-for="d in weekDays" :key="d.key">
            <div
              v-if="!d.isToday"
              class="rounded-xl border-t-4 bg-surface-container-lowest p-6 shadow-[0_12px_32px_rgba(45,52,53,0.04)] transition-shadow hover:shadow-lg md:p-8"
              :class="d.border"
            >
              <h3 class="mb-1 text-xl font-bold text-on-surface-variant">{{ d.label }}</h3>
              <p class="mb-6 text-sm font-medium text-outline">{{ d.date }}</p>
              <div class="space-y-5">
                <div>
                  <span
                    class="mb-2 block text-[10px] font-extrabold uppercase tracking-tighter text-primary"
                    >Breakfast</span
                  >
                  <ul class="space-y-1.5">
                    <li
                      v-for="(item, i) in d.breakfast"
                      :key="'b' + i"
                      class="text-sm font-semibold leading-snug text-on-surface"
                    >
                      {{ formatMealLine(item, selectedAge) }}
                    </li>
                  </ul>
                </div>
                <div>
                  <span
                    class="mb-2 block text-[10px] font-extrabold uppercase tracking-tighter text-tertiary"
                    >Lunch</span
                  >
                  <ul class="space-y-1.5">
                    <li
                      v-for="(item, i) in d.lunch"
                      :key="'l' + i"
                      class="text-sm font-semibold leading-snug text-on-surface"
                    >
                      {{ formatMealLine(item, selectedAge) }}
                    </li>
                  </ul>
                </div>
                <div>
                  <span
                    class="mb-2 block text-[10px] font-extrabold uppercase tracking-tighter text-secondary"
                    >Snack</span
                  >
                  <ul class="space-y-1.5">
                    <li
                      v-for="(item, i) in d.snack"
                      :key="'s' + i"
                      class="text-sm font-semibold leading-snug text-on-surface"
                    >
                      {{ formatMealLine(item, selectedAge) }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              v-else
              class="relative rounded-xl border-t-4 border-on-primary-container bg-primary-container p-6 shadow-[0_12px_32px_rgba(45,52,53,0.08)] md:scale-105 md:p-8"
            >
              <div
                class="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-on-primary-container px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-primary"
              >
                Today
              </div>
              <h3 class="mb-1 text-xl font-bold text-on-primary-container">{{ d.label }}</h3>
              <p class="mb-6 text-sm font-medium text-on-primary-fixed-variant">{{ d.date }}</p>
              <div class="space-y-5">
                <div>
                  <span
                    class="mb-2 block text-[10px] font-extrabold uppercase tracking-tighter text-on-primary-fixed-variant"
                    >Breakfast</span
                  >
                  <ul class="space-y-1.5">
                    <li
                      v-for="(item, i) in d.breakfast"
                      :key="'b' + i"
                      class="text-sm font-bold leading-snug text-on-primary-container"
                    >
                      {{ formatMealLine(item, selectedAge) }}
                    </li>
                  </ul>
                </div>
                <div>
                  <span
                    class="mb-2 block text-[10px] font-extrabold uppercase tracking-tighter text-on-primary-fixed-variant"
                    >Lunch</span
                  >
                  <ul class="space-y-1.5">
                    <li
                      v-for="(item, i) in d.lunch"
                      :key="'l' + i"
                      class="text-sm font-bold leading-snug text-on-primary-container"
                    >
                      {{ formatMealLine(item, selectedAge) }}
                    </li>
                  </ul>
                </div>
                <div>
                  <span
                    class="mb-2 block text-[10px] font-extrabold uppercase tracking-tighter text-on-primary-fixed-variant"
                    >Snack</span
                  >
                  <ul class="space-y-1.5">
                    <li
                      v-for="(item, i) in d.snack"
                      :key="'s' + i"
                      class="text-sm font-bold leading-snug text-on-primary-container"
                    >
                      {{ formatMealLine(item, selectedAge) }}
                    </li>
                  </ul>
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
        <div class="mb-10">
          <h2 class="text-3xl font-bold text-on-surface">{{ monthOverviewTitle }}</h2>
          <p class="mt-2 text-sm text-on-surface-variant">
            The same weekly menu repeats every month. Which week you are on (1–{{
              weekInfo.weeksInMonth
            }}) sets breakfast, lunch, and snack for Mon–Fri.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-7">
          <template v-for="(cell, i) in monthCalendarCells" :key="i">
            <div
              v-if="cell.empty"
              class="hidden min-h-[8rem] rounded-lg bg-surface-container/30 lg:block"
            />
            <div
              v-else-if="cell.highlight"
              class="min-h-[8rem] rounded-lg border-2 border-primary/20 bg-primary/5 p-4"
            >
              <span class="text-xs font-bold text-primary">{{ cell.label }}</span>
              <p class="mt-2 text-[10px] font-bold leading-snug text-primary">{{ cell.lunch }}</p>
            </div>
            <div
              v-else
              class="min-h-[8rem] rounded-lg border border-outline-variant/10 bg-surface-container-lowest p-4"
            >
              <span class="text-xs font-bold text-outline">{{ cell.label }}</span>
              <p class="mt-2 text-[10px] font-medium leading-snug">{{ cell.lunch }}</p>
            </div>
          </template>
        </div>

        <div class="mt-8 rounded-xl bg-surface-container-high p-8 text-center">
          <p class="mb-4 font-medium italic text-on-surface-variant">
            Printable PDFs are organized by week (1–{{ weekInfo.weeksInMonth }}), not by month.
          </p>
          <a
            :href="MENU_WEEK_PDF"
            download
            class="mx-auto inline-flex items-center gap-2 rounded-full bg-primary-container px-10 py-3 text-sm font-extrabold text-on-primary-container transition-transform hover:scale-105"
          >
            <span class="material-symbols-outlined">picture_as_pdf</span>
            DOWNLOAD MENU PDF
          </a>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
