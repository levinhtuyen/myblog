<script setup lang="ts">
interface SocialLink {
  to: string
  label: string
  className: string
  paths: string[]
  size?: number
  target?: '_blank'
}

interface TechItem {
  src: string
  alt: string
  hoverClass: string
}

interface BadgeLink {
  to: string
  src: string
  alt: string
}

defineProps<{
  currentPhrase: string
}>()

const { t } = useI18n()

const socialLinks: SocialLink[] = [
  {
    to: 'mailto:levinhtuyen210@gmail.com',
    label: 'Mail',
    className:
      'fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-8 w-8',
    paths: [
      'M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z',
      'M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z',
    ],
    target: '_blank',
  },
  {
    to: 'https://github.com/levinhtuyen',
    label: 'GitHub',
    className:
      'fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6',
    paths: [
      'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
    ],
    size: 24,
    target: '_blank',
  },
  {
    to: '#',
    label: 'X',
    className:
      'fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6',
    paths: [
      'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
    ],
    size: 24,
  },
  {
    to: '#',
    label: 'linkedin',
    className:
      'fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6',
    paths: [
      'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    ],
  },
  {
    to: 'https://www.facebook.com/profile.php?id=100007906847424',
    label: 'facebook',
    className:
      'fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6',
    paths: [
      'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    ],
    target: '_blank',
  },
  {
    to: 'https://www.youtube.com/@ngaodusonthuy3000',
    label: 'youtube',
    className:
      'fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-6 w-6',
    paths: [
      'M23.499 6.203a3.008 3.008 0 00-2.089-2.089c-1.87-.501-9.4-.501-9.4-.501s-7.509-.01-9.399.501a3.008 3.008 0 00-2.088 2.09A31.258 31.26 0 000 12.01a31.258 31.26 0 00.523 5.785 3.008 3.008 0 002.088 2.089c1.869.502 9.4.502 9.4.502s7.508 0 9.399-.502a3.008 3.008 0 002.089-2.09 31.258 31.26 0 00.5-5.784 31.258 31.26 0 00-.5-5.808zm-13.891 9.4V8.407l6.266 3.604z',
    ],
    target: '_blank',
  },
]

const techStackIcons: TechItem[] = [
  { src: '/svg/vuejs.svg', alt: 'vuejs', hoverClass: 'hover:text-[#61DAFB]' },
  { src: '/svg/nuxtjs.svg', alt: 'nuxtjs', hoverClass: 'hover:text-[#007ACC]' },
  {
    src: '/svg/tailwindcss.svg',
    alt: 'tailwindcss',
    hoverClass: 'hover:text-[#3178C6]',
  },
  { src: '/svg/npm.svg', alt: 'Npm', hoverClass: 'hover:text-[#61DAFB]' },
  { src: '/svg/figma.svg', alt: 'Figma', hoverClass: 'hover:text-[#06B6D4]' },
  {
    src: '/svg/firebase.svg',
    alt: 'firebase',
    hoverClass: 'hover:text-[#0055FF]',
  },
  {
    src: '/svg/git.svg',
    alt: 'GIT',
    hoverClass: 'hover:text-[#000000] dark:hover:text-[#FFFFFF]',
  },
  {
    src: '/svg/javascript.svg',
    alt: 'JavaScript',
    hoverClass: 'hover:text-[#007ACC]',
  },
  { src: '/svg/jira.svg', alt: 'jira', hoverClass: 'hover:text-[#007ACC]' },
  {
    src: '/svg/laravel.svg',
    alt: 'Laravel',
    hoverClass: 'hover:text-[#007ACC]',
  },
  { src: '/svg/nodejs.svg', alt: 'Nodejs', hoverClass: 'hover:text-[#007ACC]' },
  {
    src: '/svg/postman.svg',
    alt: 'Postman',
    hoverClass: 'hover:text-[#007ACC]',
  },
  { src: '/svg/slack.svg', alt: 'Slack', hoverClass: 'hover:text-[#007ACC]' },
  {
    src: '/svg/typescript.svg',
    alt: 'TypeScript',
    hoverClass: 'hover:text-[#007ACC]',
  },
  { src: '/svg/vitejs.svg', alt: 'Vitejs', hoverClass: 'hover:text-[#007ACC]' },
  { src: '/svg/vscode.svg', alt: 'vscode', hoverClass: 'hover:text-[#007ACC]' },
  { src: '/svg/yarn.svg', alt: 'yarn', hoverClass: 'hover:text-[#007ACC]' },
  { src: '/svg/quasar.svg', alt: 'Quasar', hoverClass: 'hover:text-[#007ACC]' },
  { src: '/svg/html5.svg', alt: 'html5', hoverClass: 'hover:text-[#007ACC]' },
  {
    src: '/svg/adobephotoshop.svg',
    alt: 'adobephotoshop',
    hoverClass: 'hover:text-[#007ACC]',
  },
]

const badgeLinks: BadgeLink[] = [
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
</script>

<template>
  <section>
    <div class="content-wrapper pt-2">
      <div class="relative">
        <div class="relative z-10">
          <div class="w-full lg:w-3/5">
            <div
              class="mb-1 flex items-center gap-1 text-2xl text-slate-600 md:mb-0 md:gap-2 md:text-4xl dark:text-slate-400"
            >
              {{ $t('hi') }}!
              <div
                style="
                  opacity: 1;
                  transform-origin: right center;
                  transform: none;
                "
                class="w-8 md:w-16"
              >
                <img
                  alt="hi"
                  width="64"
                  height="64"
                  format="webp"
                  loading="lazy"
                  src="/images/hi.webp"
                  style="color: transparent"
                />
              </div>
            </div>
            <span class="text-slate-700 dark:text-slate-300">
              <span
                class="mb-1 block text-[2.1rem] font-[1000] leading-none md:text-6xl"
              >
                {{ currentPhrase }}&nbsp;
              </span>
            </span>
          </div>
          <div class="grid grid-cols-1 md:flex md:grid-cols-2">
            <div
              class="col-span-1 w-full pt-5 text-base text-slate-600 md:text-xl lg:w-1/3 dark:text-slate-400"
            >
              <div>
                <p>
                  <strong class="text-slate-700 dark:text-slate-300">
                    {{ t('aFrontEnDeveloper') }}
                  </strong>
                </p>
                <p
                  class="text-base font-normal text-gray-700 md:text-lg dark:text-white"
                >
                  <span>{{ t('imAlwaysEagerToExpandMySkill') }}</span>
                </p>
                <p
                  class="text-base font-normal text-gray-700 md:text-lg dark:text-white"
                >
                  <i>"- With Small Steps, I Will Go Very Far_"</i>
                </p>
              </div>

              <div class="mt-3 md:mt-5">
                <div class="mb-3 flex space-x-4">
                  <NuxtLink
                    v-for="link in socialLinks"
                    :key="link.label"
                    aria-current="page"
                    tag="a"
                    class="text-sm text-gray-500 transition hover:text-gray-600"
                    :aria-label="link.label"
                    :to="link.to"
                    :target="link.target"
                    rel="noopener noreferrer"
                  >
                    <AwesomeSVGComponent
                      :class-name="link.className"
                      :size="link.size"
                      :label="link.label"
                    >
                      <path v-for="path in link.paths" :key="path" :d="path" />
                    </AwesomeSVGComponent>
                  </NuxtLink>
                </div>
              </div>

              <div class="mt-4 lg:mt-8">
                <div class="w-full">
                  <p
                    class="mb-2.5 text-sm text-slate-600 dark:text-slate-400"
                    style="opacity: 1; transform: none"
                  >
                    {{ t('techStackTools') }}
                  </p>
                  <ul
                    class="flex w-full flex-wrap items-center gap-3.5 text-slate-500 dark:text-slate-500"
                  >
                    <template
                      v-for="(icon, index) in techStackIcons"
                      :key="icon.src"
                    >
                      <li style="opacity: 1; transform: none">
                        <div
                          class="transition duration-200"
                          :class="icon.hoverClass"
                        >
                          <img
                            loading="lazy"
                            class="h-6 w-6"
                            :src="icon.src"
                            :alt="icon.alt"
                          />
                        </div>
                      </li>
                      <li
                        v-if="index < techStackIcons.length - 1"
                        style="opacity: 1; transform: none"
                      >
                        <div
                          class="h-3 w-[1px] bg-slate-300 dark:bg-slate-700"
                        />
                      </li>
                    </template>

                    <li
                      v-for="badge in badgeLinks"
                      :key="badge.src"
                      style="opacity: 1; transform: none"
                    >
                      <NuxtLink
                        aria-current="page"
                        tag="a"
                        class="m-0 p-0 text-black shadow-md dark:text-white"
                        :aria-label="badge.alt"
                        :to="badge.to"
                        target="_blank"
                      >
                        <div class="rounded-lg border text-card-foreground">
                          <img
                            loading="lazy"
                            class="size-8 object-contain"
                            :src="badge.src"
                            :alt="badge.alt"
                          />
                        </div>
                      </NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <ClientOnly>
              <model-viewer
                class="custome-model-me col-span-1"
                src="/images/model.glb"
                loading="eager"
                camera-controls
                autoplay
                touch-action=""
                style="height: 340px"
                disable-zoom
                interaction-prompt="none"
                animation-name="Running"
                scale="0.52 0.52 0.52"
                alt="avatar me"
              />
            </ClientOnly>
          </div>
        </div>

        <div
          class="pointer-events-none absolute -top-36 right-0 z-0 hidden select-none lg:block"
        >
          <div class="relative md:hidden lg:block lg:h-[590px] lg:w-[603px]">
            <div
              class="from-accent-400/20 via-accent-400/0 absolute top-20 right-0 h-[520px] w-[416px] rounded-full bg-gradient-to-t dark:from-accent-600/10 dark:via-accent-600/0 dark:bg-slate-400"
            >
              <div
                class="absolute right-0 bottom-0 hidden overflow-hidden lg:block md:hidden"
              >
                <div style="opacity: 1s">
                  <img
                    format="webp"
                    width="416"
                    height="520"
                    alt="me"
                    src="/images/me.webp"
                    class="hidden rounded-full dark:brightness-[.82] lg:block lg:h-[520px] lg:w-[416px]"
                    style="color: transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
