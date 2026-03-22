<script setup>
import SiteNav from '@/components/SiteNav.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-surface font-body text-on-surface">
    <SiteNav />

    <main class="mx-auto max-w-7xl px-6 pb-20 pt-24 md:pt-28">
      <header class="mb-16 max-w-3xl text-center md:mb-20 md:text-left">
        <h1 class="mb-6 font-headline text-[2.5rem] font-extrabold leading-[1.1] tracking-tight text-on-surface md:text-[3.5rem]">
          Let's start your child's <span class="text-primary">journey</span> together.
        </h1>
        <p class="text-xl leading-relaxed text-on-surface-variant">
          Whether you have questions about our curriculum or want to schedule a visit, our team is
          here to help your little one grow.
        </p>
      </header>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div class="rounded-xl bg-surface-container-lowest p-10 shadow-[0_12px_32px_rgba(45,52,53,0.06)] lg:col-span-7">
          <h2 class="mb-8 font-headline text-2xl font-bold text-on-surface">Send an Inquiry</h2>
          <form class="space-y-6" @submit.prevent>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div class="space-y-2">
                <label class="px-1 text-sm font-semibold text-on-surface-variant">Parent Name</label>
                <input
                  class="w-full rounded-full border-none bg-surface-container-highest px-6 py-4 outline-none transition-all focus:ring-2 focus:ring-primary/40"
                  placeholder="Jane Doe"
                  type="text"
                />
              </div>
              <div class="space-y-2">
                <label class="px-1 text-sm font-semibold text-on-surface-variant">Email Address</label>
                <input
                  class="w-full rounded-full border-none bg-surface-container-highest px-6 py-4 outline-none transition-all focus:ring-2 focus:ring-primary/40"
                  placeholder="jane@example.com"
                  type="email"
                />
              </div>
            </div>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div class="space-y-2">
                <label class="px-1 text-sm font-semibold text-on-surface-variant">Phone Number</label>
                <input
                  class="w-full rounded-full border-none bg-surface-container-highest px-6 py-4 outline-none transition-all focus:ring-2 focus:ring-primary/40"
                  placeholder="(910) 738-1471"
                  type="tel"
                />
              </div>
              <div class="space-y-2">
                <label class="px-1 text-sm font-semibold text-on-surface-variant">Child's Age Range</label>
                <div class="relative">
                  <select class="w-full cursor-pointer appearance-none rounded-full border-none bg-surface-container-highest py-4 pl-6 pr-9 outline-none transition-all focus:ring-2 focus:ring-primary/40">
                    <option>Infant (0-18 months)</option>
                    <option>Toddler (18 months - 3 years)</option>
                    <option>Preschool (3-5 years)</option>
                  </select>
                  <span class="material-symbols-outlined pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xl text-on-surface-variant" aria-hidden="true">expand_more</span>
                </div>
              </div>
            </div>
            <div class="space-y-2">
              <label class="px-1 text-sm font-semibold text-on-surface-variant">Your Message</label>
              <textarea class="w-full resize-none rounded-xl border-none bg-surface-container-highest px-6 py-4 outline-none transition-all focus:ring-2 focus:ring-primary/40" placeholder="How can we help you today?" rows="4"/>
            </div>
            <button class="w-full transform rounded-full bg-primary px-10 py-4 text-lg font-bold text-on-primary shadow-lg transition-all hover:-translate-y-1 hover:shadow-primary/20 active:scale-95 md:w-auto" type="submit">
              Submit Inquiry
            </button>
          </form>
        </div>

        <div class="flex flex-col gap-8 lg:col-span-5">
          <div class="flex flex-col gap-8 rounded-xl bg-surface-container p-8">
            <div class="flex items-start gap-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
                <span class="material-symbols-outlined">call</span>
              </div>
              <div>
                <p class="text-lg font-bold text-on-surface">Call Us</p>
                <p class="text-on-surface-variant">(910) 738-1471</p>
                <p class="mt-1 text-xs font-bold uppercase tracking-wider text-outline">
                  Mon-Fri: 7am - 6pm
                </p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-tertiary-container text-on-tertiary-container">
                <span class="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p class="text-lg font-bold text-on-surface">Email Us</p>
                <p class="text-on-surface-variant">hello@littlefeetlearningacademy.org</p>
              </div>
            </div>
            <div class="flex items-start gap-4">
              <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-container text-on-secondary-container">
                <span class="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p class="text-lg font-bold text-on-surface">Visit Us</p>
                <p class="text-on-surface-variant">123 Little Feet Lane, Robeson County, NC 28379</p>
              </div>
            </div>
          </div>

          <div class="relative overflow-hidden rounded-xl bg-primary p-8 text-on-primary">
            <div class="relative z-10">
              <h3 class="mb-4 font-headline text-xl font-bold">Follow our growth</h3>
              <p class="mb-6 text-sm text-primary-fixed">
                See daily updates, crafts, and happy moments on our social channels.
              </p>
              <div class="flex gap-4">
                <a class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20" href="#" aria-label="Share">
                  <span class="material-symbols-outlined text-white">share</span>
                </a>
                <a class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20" href="#" aria-label="Like">
                  <span class="material-symbols-outlined text-white">thumb_up</span>
                </a>
                <a class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20" href="#" aria-label="Photos">
                  <span class="material-symbols-outlined text-white">photo_camera</span>
                </a>
              </div>
            </div>
            <div class="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/5" />
          </div>
        </div>
      </div>

      <section class="relative mt-16 overflow-hidden rounded-xl bg-secondary-fixed-dim/20 p-12 md:mt-20">
        <div class="absolute right-0 top-0 p-8 opacity-10">
          <span class="material-symbols-outlined text-9xl">format_quote</span>
        </div>
        <div class="relative z-10 max-w-2xl">
          <h2 class="mb-6 font-headline text-3xl font-bold italic leading-snug text-on-secondary-fixed">
            "Finding Little Feet Academy was like finding a second family. The communication is
            incredible, and our son thrives every single day."
          </h2>
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 overflow-hidden rounded-full">
              <img
                alt="Portrait of a smiling parent"
                class="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV6cYryPoODMyERUZB6Tu25S0xG4b_AVnu2cFlc7qYKzy0YAkdYm5v7jy5C_wMR2HxKmyHwgSjDNJm6Ppv82iLnLe4LrHn5SssIDKVeDt4DdMHN28gEPgjFQqnlm0C4QGSiJ-HnUNmSNgbjKqBpIn9_zxrGTOdd5UEiFicenpttRUhGSR9f53guN6lacSxgCgeMPlv2MB5n0oU6YHB9PBKpB4pBJduwW0ZAUrcLq3Lb79Cm5L3j8Gu8wm-yDa4keWGNCh24d9U4_A"
              />
            </div>
            <div>
              <p class="font-bold text-on-secondary-fixed">Sarah Thompson</p>
              <p class="text-sm text-on-secondary-fixed-variant">Parent of a 3-year-old</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>
