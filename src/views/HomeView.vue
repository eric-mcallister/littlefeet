<script setup>
import { ref } from 'vue'

const testimonialStrip = ref(null)

function scrollTestimonials(direction) {
  const el = testimonialStrip.value
  if (!el) return
  const amount = direction === 'next' ? 420 : -420
  el.scrollBy({ left: amount, behavior: 'smooth' })
}
</script>

<template>
  <div
    class="min-h-screen bg-surface font-body text-on-surface selection:bg-primary-container selection:text-on-primary-container"
  >
    <nav
      class="fixed top-0 z-50 w-full bg-white/80 shadow-[0_12px_32px_rgba(45,52,53,0.06)] backdrop-blur-md dark:bg-slate-900/80"
    >
      <div class="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <a class="font-headline text-2xl font-bold tracking-tighter text-sky-800 dark:text-sky-300" href="#"
          >Little Feet Learning Academy</a
        >
        <div class="hidden items-center gap-8 md:flex">
          <a
            class="font-plus-jakarta-sans border-b-2 border-sky-600 pb-1 text-sm font-semibold tracking-tight text-sky-700 dark:text-sky-300"
            href="#"
            >Home</a
          >
          <a
            class="font-plus-jakarta-sans text-sm font-semibold tracking-tight text-slate-500 transition-colors hover:text-sky-600 dark:text-slate-400"
            href="#"
            >Volunteer & Give</a
          >
          <a
            class="font-plus-jakarta-sans text-sm font-semibold tracking-tight text-slate-500 transition-colors hover:text-sky-600 dark:text-slate-400"
            href="#"
            >Monthly Menu</a
          >
          <a
            class="font-plus-jakarta-sans text-sm font-semibold tracking-tight text-slate-500 transition-colors hover:text-sky-600 dark:text-slate-400"
            href="#"
            >Contact</a
          >
        </div>
        <button
          type="button"
          class="scale-95 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-on-primary shadow-lg shadow-primary/20 transition-opacity duration-200 hover:bg-gradient-to-br hover:from-primary hover:to-primary-container active:transition-transform"
        >
          Book a Tour
        </button>
      </div>
    </nav>

    <main class="pt-24">
      <section class="mx-auto max-w-7xl px-6 py-12 md:py-24">
        <div class="grid items-center gap-12 md:grid-cols-2">
          <div class="order-2 md:order-1">
            <span
              class="mb-6 inline-block rounded-full bg-tertiary-container px-4 py-1.5 text-sm font-bold tracking-wide text-on-tertiary-container"
              >Finally Get Some Rest</span
            >
            <h1
              class="mb-8 font-headline text-5xl font-extrabold leading-[1.1] tracking-tight text-on-background md:text-7xl"
            >
              Where Every <span class="text-primary">Child</span> Can Grow Their
              <span class="text-primary">Roots.</span>
            </h1>
            <p class="mb-10 max-w-lg text-lg leading-relaxed text-on-surface-variant md:text-xl">
              Our research-backed, play-based curriculum nurtures curiosity and builds a lifelong
              foundation for emotional and academic success.
            </p>
            <div class="flex flex-wrap gap-4">
              <button
                type="button"
                class="flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-on-primary shadow-xl shadow-primary/25 transition-transform hover:scale-[1.02] hover:bg-gradient-to-br hover:from-primary hover:to-primary-container"
              >
                Book a Tour
                <span class="material-symbols-outlined">arrow_forward</span>
              </button>
              <button
                type="button"
                class="rounded-full bg-secondary-container px-8 py-4 text-lg font-bold text-on-secondary-container transition-colors hover:bg-secondary-fixed"
              >
                View Programs
              </button>
            </div>
          </div>
          <div class="relative order-1 md:order-2">
            <div
              class="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-secondary-fixed-dim opacity-70 mix-blend-multiply blur-xl filter"
            />
            <div
              class="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-tertiary-fixed-dim opacity-70 mix-blend-multiply blur-xl filter"
            />
            <div class="relative rotate-2 overflow-hidden rounded-xl shadow-2xl">
              <img
                class="aspect-[4/5] w-full object-cover"
                alt="Happy children playing with wooden blocks with teacher"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxh1llpyFdxo11jexxHfZmqa5hKYy7DRT9KfvQl8i8PJ8yrswEKKRUQBGjCU_-Y46n2mouI4j2gIT-3vnooKIxXx-KcN5Wcr8Qzu5MMBmHlB4L3Y0HhKFiI0wxBwAj2yZHSn2tzeczeNND4AmreubiE9NYQ3ZtE34RD-myQQTHcuEHlWogQ3XITzQ5GQ3dZafOEJ4wEzT1-3i1ZpfPry12K1wL1UAW992nVw4cKevrgBzmTzYt3EV_h90EcmfeNUHE8SSNUtzD4_k"
              />
              <div
                class="absolute bottom-6 left-6 right-6 rounded-lg bg-white/80 p-6 shadow-lg backdrop-blur-md"
              >
                <div class="flex items-center gap-4">
                  <div class="flex -space-x-3">
                    <div
                      class="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-slate-200"
                    >
                      <img
                        class="h-full w-full object-cover"
                        alt="Teacher portrait"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvbE_kT7Zix2EZGE4yZyGsQlBR-UgKGYMJNxi1osACxjShIisXULI0yeE2TeFv3QYkueEDFpkF5miCvEGC6FDgOkAgB-FT8v5fLxlhEgamdYOJHvcupHr5ZvV472i47AJx1O_p0azh3hgIfvxa9qz2aDrgCveT_nykCLIVJE8v1zgbOIqVQfXyvKBOnv7nOF5722IRXqbMk4d-m0hqZregSEuvM_HN49CWLXhYy7TIjQUQLSK_Jf9xst88p9VrlxtPikbyyIOMqYY"
                      />
                    </div>
                    <div
                      class="h-10 w-10 overflow-hidden rounded-full border-2 border-white bg-slate-200"
                    >
                      <img
                        class="h-full w-full object-cover"
                        alt="Staff portrait"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5GAO7sxkkPbM394bLyORhJrOaAj2n6wNaupBH-SK_EIweXJIf89PKyZ_cwYttddQ9DyFWL0ZpgsASj94Fpn7XIG3UwanwGB3IaSsxz_JTs7LXhd1GK7GlRSfsqlkMobidzHL3YSrG5pBHkHCQ7D5uUqSMGmsbHR73O1ctip3UZnSIfLLmCVF73rJz9BNesUfudRyPIt4oVqEsLQniOUXjb5X2sJOZ1MG_cvNC2O_wnZBMn0ewIMd2fO8Od-2wvpwHzc1HWZWnyFE"
                      />
                    </div>
                  </div>
                  <div>
                    <p class="text-sm font-bold text-on-surface">Join 30+ local families in the Robeson County Area</p>
                    <div class="flex items-center text-xs text-secondary">
                      <span
                        class="material-symbols-outlined text-sm"
                        style="font-variation-settings: 'FILL' 1"
                        >star</span
                      >
                      <span
                        class="material-symbols-outlined text-sm"
                        style="font-variation-settings: 'FILL' 1"
                        >star</span
                      >
                      <span
                        class="material-symbols-outlined text-sm"
                        style="font-variation-settings: 'FILL' 1"
                        >star</span
                      >
                      <span
                        class="material-symbols-outlined text-sm"
                        style="font-variation-settings: 'FILL' 1"
                        >star</span
                      >
                      <!-- <span
                        class="material-symbols-outlined text-sm"
                        style="font-variation-settings: 'FILL' 1"
                        >star</span
                      > -->
                      <span class="ml-1 font-semibold">4.0 Star State Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mt-12 rounded-t-[3rem] bg-surface-container py-24 md:rounded-t-[5rem]">
        <div class="mx-auto max-w-7xl px-8">
          <div class="mx-auto mb-16 max-w-2xl text-center">
            <h2 class="mb-6 font-headline text-3xl font-bold text-on-surface md:text-5xl">
              Designed for Growth
            </h2>
            <p class="text-lg text-on-surface-variant">
              We provide a holistic environment where safety meets creativity and nutritional health.
            </p>
          </div>
          <div class="grid gap-8 md:grid-cols-3">
            <div
              class="group rounded-xl bg-surface-container-lowest p-10 shadow-sm transition-shadow hover:shadow-xl"
            >
              <div
                class="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-container text-on-primary-container transition-transform group-hover:scale-110"
              >
                <span
                  class="material-symbols-outlined text-4xl"
                  style="font-variation-settings: 'FILL' 1"
                  >shield_with_heart</span
                >
              </div>
              <h3 class="mb-4 text-2xl font-bold text-sky-900">Safety First</h3>
              <p class="leading-relaxed text-on-surface-variant">
                Secure key-card access, background-checked staff, and 24/7 monitoring ensure your
                peace of mind.
              </p>
            </div>
            <div
              class="group rounded-xl bg-surface-container-lowest p-10 shadow-sm transition-shadow hover:shadow-xl"
            >
              <div
                class="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary-container text-on-secondary-container transition-transform group-hover:scale-110"
              >
                <span
                  class="material-symbols-outlined text-4xl"
                  style="font-variation-settings: 'FILL' 1"
                  >auto_stories</span
                >
              </div>
              <h3 class="mb-4 text-2xl font-bold text-secondary">Playful Learning</h3>
              <p class="leading-relaxed text-on-surface-variant">
                Our STEAM-certified curriculum uses nature and play to teach complex
                problem-solving skills.
              </p>
            </div>
            <div
              class="group rounded-xl bg-surface-container-lowest p-10 shadow-sm transition-shadow hover:shadow-xl"
            >
              <div
                class="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-tertiary-container text-on-tertiary-container transition-transform group-hover:scale-110"
              >
                <span
                  class="material-symbols-outlined text-4xl"
                  style="font-variation-settings: 'FILL' 1"
                  >restaurant</span
                >
              </div>
              <h3 class="mb-4 text-2xl font-bold text-tertiary">Fresh Nutrition</h3>
              <p class="leading-relaxed text-on-surface-variant">
                Chef-prepared organic meals designed by pediatric nutritionists to fuel growing
                minds and bodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-7xl px-8 py-24">
        <div class="grid items-center gap-12 lg:grid-cols-12">
          <div class="lg:col-span-4">
            <h2 class="mb-6 font-headline text-4xl font-bold md:text-5xl">
              What our <span class="text-primary">Family</span> says
            </h2>
            <p class="mb-8 text-lg text-on-surface-variant">
              Real stories from the parents who trust us every day with their most precious
              treasures.
            </p>
            <div class="flex gap-2">
              <button
                type="button"
                class="flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant transition-colors hover:bg-surface-container"
                aria-label="Previous testimonials"
                @click="scrollTestimonials('prev')"
              >
                <span class="material-symbols-outlined">west</span>
              </button>
              <button
                type="button"
                class="flex h-12 w-12 items-center justify-center rounded-full border border-outline-variant transition-colors hover:bg-surface-container"
                aria-label="Next testimonials"
                @click="scrollTestimonials('next')"
              >
                <span class="material-symbols-outlined">east</span>
              </button>
            </div>
          </div>
          <div class="overflow-hidden lg:col-span-8">
            <div
              ref="testimonialStrip"
              class="no-scrollbar flex snap-x gap-6 overflow-x-auto pb-8"
            >
              <div class="min-w-[400px] snap-start rounded-xl bg-secondary-fixed-dim p-12">
                <span class="material-symbols-outlined mb-6 text-5xl opacity-30">format_quote</span>
                <p class="mb-8 text-xl font-medium leading-relaxed text-on-secondary-fixed">
                  "The teachers at Little Feet Learning Academy don't just watch our son, they truly
                  nurture him. He comes home every day excited about what he learned."
                </p>
                <div class="flex items-center gap-4">
                  <div class="h-14 w-14 overflow-hidden rounded-full bg-slate-300">
                    <img
                      class="h-full w-full object-cover"
                      alt="Mrs. Crystal"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtAiERsF1E6zwAVTmAJL7mZN1ZLX9AMAWnpUPFDh1RFsYKGfHSwT9qf7zbL6GzefidCnhZL00v7BYl7ED4Z9p6FLMuW4gdPUkERIq8kRwnA2GRkHe8hxu-udDVuI5wnk2xpG4zsSKnN8AhtxjSB0xzc3Z9nXx-RPDQy_F5U5l5dExsSjzC6QXNmNdGLo14PrLgyTtsm2vvPkAqPlQjCIq-HALul9_ncujZb6pQepOVIlcTM_1P32DiuCIqzY1caJhl8ny7UMJANjw"
                    />
                  </div>
                  <div>
                    <p class="font-bold text-on-secondary-fixed">Mrs. Crystal</p>
                    <p class="text-sm text-on-secondary-fixed-variant">Parent of 2-year-old</p>
                  </div>
                </div>
              </div>
              <div class="min-w-[400px] snap-start rounded-xl bg-tertiary-fixed-dim p-12">
                <span class="material-symbols-outlined mb-6 text-5xl opacity-30">format_quote</span>
                <p class="mb-8 text-xl font-medium leading-relaxed text-on-tertiary-fixed">
                  "Seeing my daughter thrive in the nature program was amazing. She's developed so
                  much confidence and social empathy here."
                </p>
                <div class="flex items-center gap-4">
                  <div class="h-14 w-14 overflow-hidden rounded-full bg-slate-300">
                    <img
                      class="h-full w-full object-cover"
                      alt="Mrs. Tina Colvin"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDekHMUzIPTJm5ao7bC5imjqHwbEdl8RZBKihLpDACWaga_tjhfJ38RtGwIzoWbXcqav26D77kjHYnZCoITIWB-lbt1Ckyq0tYEOBOPt-1jD6TYjOTXAK3TliJ5RUwaSUcb7g2CtUF8wZQB3Qjh4DrHJAf9Gn0aAYfMSZsSsBAqLILONLPwqeAlrP1tXHajece3NFqFgvF5JILmzu3qf1j3adlKKCW9V_mH4VC0d023-vcygst-nB04mzZ3JSdJkDA4UIONS5G92HU"
                    />
                  </div>
                  <div>
                    <p class="font-bold text-on-tertiary-fixed">Mrs. Tina Colvin</p>
                    <p class="text-sm text-on-tertiary-fixed-variant">Parent of 5-year-old</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto mb-24 max-w-7xl px-8">
        <div class="relative overflow-hidden rounded-xl bg-primary p-12 text-center md:p-24">
          <div
            class="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-container opacity-20"
          />
          <div
            class="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-primary-dim opacity-40"
          />
          <div class="relative z-10">
            <h2 class="mb-8 font-headline text-4xl font-bold tracking-tight text-on-primary md:text-6xl">
              Limited spots available for Enrollment.
            </h2>
            <p class="mx-auto mb-12 max-w-2xl text-xl text-on-primary/80">
              Come see why parents love Little Feet Learning Academy. We are currently accepting applications for the 2026-2027 school year.
            </p>
            <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                class="rounded-full bg-on-primary px-10 py-5 text-lg font-bold text-primary shadow-2xl transition-colors hover:bg-white"
              >
                Schedule Your Visit
              </button>
              <a
                class="flex items-center gap-2 px-8 py-4 text-lg font-bold text-on-primary"
                href="tel:+19107381471"
              >
                <span class="material-symbols-outlined">call</span>
                (910) 738-1471
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="mt-20 w-full rounded-t-[3rem] bg-slate-100 dark:bg-slate-950">
      <div class="mx-auto max-w-7xl px-12 py-16">
        <div
          class="flex flex-col items-center justify-between gap-8 md:flex-row md:items-center"
        >
          <span class="font-headline text-lg font-bold text-sky-800 dark:text-sky-400">
            Little Feet Learning Academy
          </span>
          <div class="flex flex-wrap justify-center gap-8">
            <a
              class="font-plus-jakarta-sans text-sm text-slate-500 underline decoration-2 underline-offset-4 transition-all duration-300 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
              href="#"
              >Privacy Policy</a
            >
            <a
              class="font-plus-jakarta-sans text-sm text-slate-500 underline decoration-2 underline-offset-4 transition-all duration-300 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
              href="#"
              >Staff Portal</a
            >
            <a
              class="font-plus-jakarta-sans text-sm text-slate-500 underline decoration-2 underline-offset-4 transition-all duration-300 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
              href="#"
              >Careers</a
            >
            <a
              class="font-plus-jakarta-sans text-sm text-slate-500 underline decoration-2 underline-offset-4 transition-all duration-300 hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400"
              href="#"
              >Licensing Info</a
            >
          </div>
          <div class="flex gap-4">
            <a
              class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-sky-800 transition-transform hover:scale-110 dark:bg-slate-800 dark:text-sky-400"
              href="#"
              aria-label="Social"
            >
              <span class="material-symbols-outlined">social_leaderboard</span>
            </a>
            <a
              class="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 text-sky-800 transition-transform hover:scale-110 dark:bg-slate-800 dark:text-sky-400"
              href="#"
              aria-label="Photos"
            >
              <span class="material-symbols-outlined">photo_camera</span>
            </a>
          </div>
        </div>
        <div
          class="mt-10 border-t border-slate-200/60 pt-8 dark:border-slate-800/80"
        >
          <p
            class="text-center text-sm text-slate-600 dark:text-slate-400 md:text-left font-plus-jakarta-sans"
          >
            ©2026 Little Feet Learning Academy. North Carolina Licensed Childcare Facility.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
