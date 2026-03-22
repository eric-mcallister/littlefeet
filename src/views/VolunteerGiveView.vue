<script setup>
import SiteNav from '@/components/SiteNav.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-surface font-body text-on-surface">
    <SiteNav brand-name="Little Feet Learning Academy" />

    <main class="pt-24">
      <section class="mx-auto max-w-7xl px-8 py-20">
        <div class="grid items-center gap-16 lg:grid-cols-2">
          <div class="relative">
            <div class="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-tertiary-container/30 blur-3xl" />
            <div class="relative z-10">
              <span class="mb-6 inline-block rounded-full bg-tertiary-container px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-on-tertiary-container">
                Our Community Heart
              </span>
              <h1 class="mb-8 font-headline text-5xl font-extrabold leading-[1.1] text-on-surface md:text-6xl">
                Every Seed Needs a <span class="text-primary">Village</span> to Bloom.
              </h1>
              <p class="mb-10 max-w-xl text-lg leading-relaxed text-on-surface-variant">
                At Little Feet Learning Academy, community support is the gentle sunlight that helps our
                children grow. Your time, talent, and generosity allow us to provide enhanced
                learning environments, organic nutrition programs, and specialized creative
                workshops that go beyond the standard curriculum.
              </p>
              <div class="flex flex-wrap gap-4">
                <a class="signature-gradient rounded-full px-8 py-4 font-bold text-on-primary shadow-lg transition-all hover:shadow-xl" href="#donate">
                  Make a Donation
                </a>
                <a class="rounded-full bg-surface-container-highest px-8 py-4 font-bold text-on-surface-variant transition-all hover:bg-surface-dim" href="#newsletter">
                  View Opportunities
                </a>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="rotate-2 overflow-hidden rounded-xl border-8 border-white shadow-2xl transition-transform duration-500 hover:rotate-0">
              <img
                alt="Smiling diverse children playing together"
                class="h-[500px] w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIPBMYcuk9s0Y8ww4aOAhwIr7qFmJPGQ4FT4LyuFfnEMHnjZOVgBPTOcpqevHfCgsgqlKHxuq2ryEfFYJDltP2Pymvs0Pg1mSULTHon2uQnnW4IWWoZ2NZRYTFs5UNsBBwgjT519KhZEdRfNhqQ3HH0rwh4tj_J2tXtKrRqLOOQvMAX6V13NL3OqGVMSUg0Ncyphz_MEv6HkjHnolYEWSeif89SO5gHc-BYUSmYJ0APwJjAUGgFgi5C7fczpY3bOvhIP0PRzdoAHI"
              />
            </div>
            <div class="glass-card absolute -bottom-6 -right-6 hidden max-w-xs rounded-lg p-6 shadow-xl md:block">
              <div class="mb-3 flex items-center gap-4">
                <div class="rounded-full bg-secondary-container p-2 text-on-secondary-container">
                  <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1">favorite</span>
                </div>
                <span class="text-sm font-bold uppercase tracking-tighter">Your Impact</span>
              </div>
              <p class="text-sm italic leading-snug text-on-surface-variant">
                "The new reading nook funded by last year's gala has become the children's favorite
                place to explore." — Ms. Sarah
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="rounded-t-[4rem] bg-surface-container-low py-24" id="donate">
        <div class="mx-auto max-w-7xl px-8">
          <div class="mb-16 text-center">
            <h2 class="mb-4 font-headline text-4xl font-bold">Plant a Seed of Change</h2>
            <p class="mx-auto max-w-2xl text-on-surface-variant">
              Choose a contribution level that resonates with your heart. 100% of donations go
              directly to classroom enrichment.
            </p>
          </div>
          <div class="grid gap-8 md:grid-cols-3">
            <div
              class="group relative overflow-hidden rounded-xl bg-surface-container-lowest p-10 shadow-sm transition-shadow hover:shadow-md">
              <div class="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-primary/20" />
              <div class="mb-6 text-primary">
                <span class="material-symbols-outlined text-5xl">menu_book</span>
              </div>
              <h3 class="mb-2 text-2xl font-bold">$50</h3>
              <p class="mb-4 font-bold text-on-surface">Classroom Library</p>
              <p class="mb-8 text-sm leading-relaxed text-on-surface-variant">
                Provides five new hardback picture books or diverse learning materials for our
                literacy corners.
              </p>
              <button type="button" class="w-full rounded-full border-2 border-primary py-3 font-bold text-primary transition-all group-hover:bg-primary group-hover:text-on-primary">
                Donate $50
              </button>
            </div>

            <div class="relative z-10 scale-105 rounded-xl border-t-4 border-primary bg-white p-10 shadow-[0_20px_50px_rgba(0,101,148,0.1)]">
              <div class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-on-primary">
                Most Impactful
              </div>
              <div class="mb-6 text-secondary">
                <span class="material-symbols-outlined text-5xl">psychology</span>
              </div>
              <h3 class="mb-2 text-2xl font-bold">$250</h3>
              <p class="mb-4 font-bold text-on-surface">STEM Discovery Kit</p>
              <p class="mb-8 text-sm leading-relaxed text-on-surface-variant">
                Funds interactive science kits, magnifying glasses, and sensory table supplies for
                one classroom for a semester.
              </p>
              <button type="button" class="signature-gradient w-full rounded-full py-4 font-bold text-on-primary shadow-lg transition-all duration-200 hover:scale-[1.02] hover:shadow-xl hover:brightness-110 active:scale-[0.98]">
                Donate $250
              </button>
            </div>

            <div class="group relative overflow-hidden rounded-xl bg-surface-container-lowest p-10 shadow-sm transition-shadow hover:shadow-md">
              <div class="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-tertiary/20" />
              <div class="mb-6 text-tertiary">
                <span class="material-symbols-outlined text-5xl">home_repair_service</span>
              </div>
              <h3 class="mb-2 text-2xl font-bold">$100</h3>
              <p class="mb-4 font-bold text-on-surface">Facility Improvements</p>
              <p class="mb-8 text-sm leading-relaxed text-on-surface-variant">
                Helps fund classroom improvements and ongoing facility maintenance—keeping our
                spaces safe, comfortable, and ready for learning every day.
              </p>
              <button type="button" class="w-full rounded-full border-2 border-tertiary py-3 font-bold text-tertiary transition-all group-hover:bg-tertiary group-hover:text-on-tertiary">
                Donate $100
              </button>
            </div>
          </div>

          <div class="mt-16 flex flex-col items-center justify-between gap-6 rounded-lg bg-surface-container-highest p-8 md:flex-row">
            <div>
              <p class="mb-1 text-lg font-bold">Looking to contribute a different amount?</p>
              <p class="text-sm text-on-surface-variant">
                Every dollar makes a difference in a child's educational journey.
              </p>
            </div>
            <div class="flex w-full items-center rounded-full border-2 border-outline-variant/20 bg-surface-container-lowest px-6 py-2 md:w-auto">
              <span class="mr-2 text-on-surface-variant">$</span>
              <input
                class="w-32 border-none bg-transparent font-bold text-on-surface focus:ring-0"
                placeholder="Enter amount"
                type="number"
              />
              <button
                class="ml-4 text-xs font-bold uppercase tracking-widest text-primary"
                type="button"
              >
                Give Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto mb-20 max-w-7xl px-8" id="newsletter">
        <div class="relative overflow-hidden rounded-[3rem] bg-primary-container p-12 text-center md:p-20">
          <div class="pointer-events-none absolute left-0 top-0 h-full w-full opacity-10">
            <svg
              class="h-full w-full text-primary"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
              width="100%"
            >
              <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
            </svg>
          </div>
          <div class="relative z-10">
            <h2 class="mb-6 font-headline text-3xl font-bold text-on-primary-container md:text-4xl">
              Stay Connected to the Facility
            </h2>
            <p class="mx-auto mb-10 max-w-xl text-on-primary-container/80">
              Receive monthly updates on how your contributions are making an impact and get
              notified of community news and events.
            </p>
            <form class="mx-auto flex max-w-md flex-col gap-4 sm:flex-row" @submit.prevent>
              <input
                class="flex-1 rounded-full border border-white/60 bg-white px-6 py-4 text-on-surface shadow-sm placeholder:text-on-surface-variant focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your email address"
                type="email"
              />
              <button class="rounded-full bg-primary px-10 py-4 font-bold text-on-primary transition-all hover:shadow-xl" type="submit">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
