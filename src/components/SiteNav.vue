<script setup>
import { RouterLink, useRoute } from 'vue-router'

defineProps({
  brandName: {
    type: String,
    default: 'Little Feet Learning Academy',
  },
})

const route = useRoute()

function linkClass(isActive) {
  return [
    'font-plus-jakarta-sans text-sm font-semibold tracking-tight transition-colors',
    isActive
      ? 'border-b-2 border-sky-600 pb-1 text-sky-700 dark:text-sky-300'
      : 'text-slate-500 hover:text-sky-600 dark:text-slate-400',
  ]
}
</script>

<template>
  <nav
    class="fixed top-0 z-50 w-full bg-white/80 shadow-[0_12px_32px_rgba(45,52,53,0.06)] backdrop-blur-md dark:bg-slate-900/80"
  >
    <div class="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
      <RouterLink
        class="font-headline text-2xl font-bold tracking-tighter text-sky-800 dark:text-sky-300"
        to="/"
        >{{ brandName }}</RouterLink
      >
      <div class="hidden items-center gap-8 md:flex">
        <RouterLink :class="linkClass(route.name === 'home')" to="/">Home</RouterLink>
        <RouterLink :class="linkClass(route.name === 'volunteer')" to="/volunteer"
          >Volunteer & Give</RouterLink
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
</template>
