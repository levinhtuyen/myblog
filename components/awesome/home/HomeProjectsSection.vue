<script setup lang="ts">
interface ProjectCard {
  category: string
  title: string
  description: string
  image: string
  alt: string
  url: string
  isExternal: boolean
  cardClass: string
  buttonClass: string
}

const props = defineProps<{
  redirectUrl: (url: string, isOutApp: boolean) => void
}>()

const projects: ProjectCard[] = [
  {
    category: 'Flatform',
    title: 'BUY, SELL & RENT FASTER Professional',
    description:
      'Professional tools to manage, buy, sell and rent properties efficiently. Mark property boundaries precisely, visualize potential and create impressive shareable links',
    image: '/images/mymap.png',
    alt: 'MAPBDS',
    url: 'https://mapbds.com/en',
    isExternal: true,
    cardClass: 'shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50',
    buttonClass:
      'bg-gradient-to-r from-cyan-400 text-white to-blue-400 shadow-cla-blue',
  },
  {
    category: 'Tool',
    title: 'QR Code Generator and Custom Design',
    description:
      'Free QR Code Generator with Logo and Custom Design Create custom QR codes for URL, text, map, Wifi, vCard, SMS, phone, and events. Add logos, colors, and frames, then download high-quality PNG, JPG, or SVG files.',
    image: '/images/project-2.png',
    alt: 'blog',
    url: 'https://customqr.org/',
    isExternal: true,
    cardClass: 'shadow-cla-violate bg-gradient-to-r from-pink-50 to-red-50',
    buttonClass:
      'bg-gradient-to-r from-orange-300 to-amber-400 text-white shadow-cla-violate',
  },
  {
    category: 'Website',
    title: 'My portfolio and blog',
    description:
      "Lê Vĩnh Tuyến - Blog's của tôi - Để chút thương gửi vào trong gió, để chút buồn gửi vào trong tim...",
    image: '/images/project-1.png',
    alt: 'blog',
    url: '/project/my-portfolio-and-blog',
    isExternal: false,
    cardClass: 'shadow-cla-pink bg-gradient-to-r from-fuchsia-50 to-pink-50',
    buttonClass:
      'bg-gradient-to-r from-fuchsia-300 to-pink-400 text-white shadow-cla-blue',
  },
]
</script>

<template>
  <section class="body-font text-gray-600">
    <div class="pb-4 md:pb-12">
      <h2
        class="text-center text-2xl font-bold text-foreground md:text-4xl lg:text-6xl dark:text-slate-300"
      >
        {{ $t('projects') }}
      </h2>
    </div>

    <div class="container mx-auto px-5 py-8">
      <div class="-m-4 flex flex-wrap">
        <div
          v-for="project in projects"
          :key="project.title"
          class="p-4 md:w-1/3"
        >
          <div
            class="h-full overflow-hidden rounded-xl"
            :class="project.cardClass"
          >
            <img
              width="372"
              height="211"
              loading="lazy"
              class="w-full cursor-pointer object-cover object-center transition-all duration-400 hover:scale-100 md:h-36 lg:h-48 scale-110"
              :src="project.image"
              :alt="project.alt"
              @click="props.redirectUrl(project.url, project.isExternal)"
            />
            <div class="p-6">
              <h2
                class="title-font mb-1 text-xs font-medium tracking-widest text-gray-400"
              >
                {{ project.category }}
              </h2>
              <h1
                class="title-font mb-3 line-clamp-1 text-lg font-medium text-gray-600"
              >
                {{ project.title }}
              </h1>
              <p class="mb-3 line-clamp-3 leading-relaxed">
                {{ project.description }}
              </p>
              <div class="flex flex-wrap items-center">
                <button
                  class="rounded-lg px-4 py-1 drop-shadow-md hover:scale-105"
                  :class="project.buttonClass"
                  @click="props.redirectUrl(project.url, project.isExternal)"
                >
                  learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
