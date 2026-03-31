<script setup lang="ts">
interface TimelineTech {
  to: string
  src: string
  alt: string
}

interface TimelineEntry {
  icon: string
  title: string
  subtitle?: string
  period: string
  description: string
  descriptionExtra?: string
  descriptionClass?: string
  techs?: TimelineTech[]
}

const founderTechs: TimelineTech[] = [
  {
    to: 'https://www.typescriptlang.org/',
    src: '/svg/typescript.svg',
    alt: 'typescript',
  },
  { to: 'https://nuxt.com/', src: '/svg/nuxtjs.svg', alt: 'nuxtjs' },
  { to: 'https://vuejs.org/', src: '/svg/vuejs.svg', alt: 'vuejs' },
  {
    to: 'https://tailwindcss.com/',
    src: '/svg/tailwindcss.svg',
    alt: 'tailwindcss',
  },
  {
    to: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    src: '/svg/javascript.svg',
    alt: 'javascript',
  },
  { to: 'https://www.atlassian.com/', src: '/svg/jira.svg', alt: 'jira' },
  { to: 'https://quasar.dev/', src: '/svg/quasar.svg', alt: 'quasar' },
  { to: 'https://github.com/', src: '/svg/github.svg', alt: 'github' },
  {
    to: 'https://www.adobe.com/',
    src: '/svg/adobephotoshop.svg',
    alt: 'Adobe Photoshop',
  },
  { to: 'https://www.postman.com/', src: '/svg/postman.svg', alt: 'Postman' },
  {
    to: 'https://firebase.google.com/',
    src: '/svg/firebase.svg',
    alt: 'firebase',
  },
  { to: 'https://git-scm.com/', src: '/svg/git.svg', alt: 'git' },
  { to: 'https://firebase.google.com/', src: '/svg/ads.png', alt: 'ads' },
  { to: 'https://firebase.google.com/', src: '/svg/cicd.webp', alt: 'cicd' },
  {
    to: 'https://www.digitalocean.com/',
    src: '/svg/digital-ocean.svg',
    alt: 'digitalocean',
  },
  {
    to: 'https://cloud.google.com/',
    src: '/svg/google-cloud.jpg',
    alt: 'google-cloud',
  },
  { to: '#', src: '/svg/marketing.png', alt: 'marketing' },
  { to: 'https://www.nginx.com/', src: '/svg/nginx.jpg', alt: 'nginx' },
  { to: 'https://www.ssl.com/', src: '/svg/ssl.png', alt: 'ssl' },
]

const go2joyTechs: TimelineTech[] = [
  {
    to: 'https://www.typescriptlang.org/',
    src: '/svg/typescript.svg',
    alt: 'typescript',
  },
  { to: 'https://nuxt.com/', src: '/svg/nuxtjs.svg', alt: 'nuxtjs' },
  { to: 'https://vuejs.org/', src: '/svg/vuejs.svg', alt: 'vuejs' },
  {
    to: 'https://tailwindcss.com/',
    src: '/svg/tailwindcss.svg',
    alt: 'tailwindcss',
  },
  {
    to: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    src: '/svg/javascript.svg',
    alt: 'javascript',
  },
  { to: 'https://www.atlassian.com/', src: '/svg/jira.svg', alt: 'jira' },
  { to: 'https://quasar.dev/', src: '/svg/quasar.svg', alt: 'quasar' },
  { to: 'https://github.com/', src: '/svg/github.svg', alt: 'github' },
  {
    to: 'https://www.adobe.com/',
    src: '/svg/adobephotoshop.svg',
    alt: 'Adobe Photoshop',
  },
  { to: 'https://www.postman.com/', src: '/svg/postman.svg', alt: 'Postman' },
  {
    to: 'https://firebase.google.com/',
    src: '/svg/firebase.svg',
    alt: 'firebase',
  },
  { to: 'https://git-scm.com/', src: '/svg/git.svg', alt: 'git' },
  { to: 'https://firebase.google.com/', src: '/svg/ads.png', alt: 'ads' },
  { to: 'https://firebase.google.com/', src: '/svg/cicd.webp', alt: 'cicd' },
  {
    to: 'https://www.digitalocean.com/',
    src: '/svg/digital-ocean.svg',
    alt: 'digitalocean',
  },
  {
    to: 'https://cloud.google.com/',
    src: '/svg/google-cloud.jpg',
    alt: 'google-cloud',
  },
]

const vinaasTechs: TimelineTech[] = [
  {
    to: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    src: '/svg/javascript.svg',
    alt: 'javascript',
  },
  { to: 'https://vuejs.org/', src: '/svg/vuejs.svg', alt: 'vuejs' },
  {
    to: 'https://www.w3schools.com/html/',
    src: '/svg/html5.svg',
    alt: 'html5',
  },
  { to: 'https://slack.com/', src: '/svg/slack.svg', alt: 'slack' },
  { to: 'https://about.gitlab.com/', src: '/svg/gitlab.svg', alt: 'gitlab' },
  { to: 'https://www.w3schools.com/css/', src: '/svg/css3.svg', alt: 'css3' },
  { to: 'https://git-scm.com/', src: '/svg/git.svg', alt: 'git' },
]

const journeyEntries: TimelineEntry[] = [
  {
    icon: '/svg/suitcase.svg',
    title: 'Solo Founder',
    subtitle: '(Startup, Product)',
    period: '04/2023 - Now',
    description:
      "With years of experience as a foundation, I've ventured out on my own to build MAPBDS, MyPortfolio, and Chiasedochoi.",
    descriptionExtra:
      'This is not just a technical or marketing exercise; it is a journey dedicated to creating impactful solutions for the community through innovation...',
    descriptionClass: 'text-base',
    techs: founderTechs,
  },
  {
    icon: '/svg/suitcase.svg',
    title: 'Frontend Developer in Go2Joy',
    subtitle: '(Startup, Product)',
    period: '06/2020 - Now',
    description:
      'Create structure project, develop and deploy features within an agile using VueJS, NuxtJS.',
    descriptionClass: 'text-base',
    techs: go2joyTechs,
  },
  {
    icon: '/svg/suitcase.svg',
    title: 'Frontend Developer in VINAAS',
    subtitle: '(Product, Outsource, Freelancer)',
    period: '06/2017 - 06/2020',
    description: 'Development web app, landingpage, websites, tool...',
    descriptionClass: 'text-sm',
    techs: vinaasTechs,
  },
  {
    icon: '/svg/graduation.svg',
    title: 'University of Science - VNUHCM - Hồ Chí Minh',
    period: '09/2014 - 05/2017',
    description: 'Learn, learn, and learn ...',
    descriptionClass: 'text-sm',
  },
]
</script>

<template>
  <section class="content-wrapper pt-16">
    <div class="pb-4 md:pb-12">
      <h2
        class="text-center text-2xl font-bold text-foreground md:text-4xl lg:text-6xl"
      >
        {{ $t('journey') }}
      </h2>
    </div>

    <div>
      <ul class="relative border-s border-gray-200 dark:border-gray-700">
        <li
          v-for="entry in journeyEntries"
          :key="`${entry.title}-${entry.period}`"
          class="mb-10 ms-6"
        >
          <span
            class="absolute -start-3 flex size-6 items-center justify-center rounded-full bg-blue-100 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900"
          >
            <img
              class="size-3.5 text-blue-800 dark:text-blue-300"
              loading="lazy"
              :src="entry.icon"
              :alt="entry.title"
            />
          </span>

          <p
            class="mb-1 flex flex-wrap items-center text-base font-semibold text-gray-700 md:text-lg dark:text-white"
            style="font-display: swap"
          >
            <span>{{ entry.title }}</span>
            <span v-if="entry.subtitle"> {{ entry.subtitle }}</span>
          </p>

          <p
            class="mb-2 block text-sm font-normal leading-none text-gray-500 dark:text-gray-400"
          >
            {{ entry.period }}
          </p>

          <p class="mb-3" :class="entry.descriptionClass">
            <span>{{ entry.description }}</span>
            <span v-if="entry.descriptionExtra">
              {{ entry.descriptionExtra }}</span
            >
          </p>

          <div v-if="entry.techs?.length" class="mt-2 flex flex-wrap">
            <div
              v-for="tech in entry.techs"
              :key="`${entry.title}-${tech.src}`"
              class="mr-2 mb-2 size-max transition-all hover:scale-105"
            >
              <NuxtLink
                aria-current="page"
                tag="a"
                class="m-0 rounded-bl-none rounded-br-3xl rounded-tl-3xl rounded-tr-none p-0 text-black shadow-md dark:text-white"
                :aria-label="tech.alt"
                :to="tech.to"
                target="_blank"
              >
                <div
                  class="rounded-lg border bg-white p-2 text-card-foreground shadow-sm dark:bg-gray-500"
                >
                  <img
                    loading="lazy"
                    class="size-8 object-contain"
                    :src="tech.src"
                    :alt="tech.alt"
                  />
                </div>
              </NuxtLink>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
