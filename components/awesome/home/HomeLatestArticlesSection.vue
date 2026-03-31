<script setup lang="ts">
import type { Swiper as SwiperInstance } from 'swiper'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

interface ContentEntry {
  _path: string
  title?: string
  description?: string
  image?: string
  date?: string
  author?: string
}

interface ArticleCard {
  _path: string
  title: string
  description: string
  image: string
  date: string
  author: string
  type: 'post' | 'feel'
  typeLabel: string
  badgeClass: string
}

const swiperRef = ref<SwiperInstance | null>(null)
const canSlidePrev = ref(false)
const canSlideNext = ref(true)
const swiperModules = [Autoplay, Pagination]

function parseEntryDate(value?: string) {
  if (!value) {
    return 0
  }

  const [day, month, year] = value.split('/')

  if (day && month && year) {
    return new Date(Number(year), Number(month) - 1, Number(day)).getTime()
  }

  return new Date(value).getTime() || 0
}

function normalizeEntries(
  entries: ContentEntry[],
  type: 'post' | 'feel',
): ArticleCard[] {
  const typeLabel = type === 'post' ? 'Post' : 'Feel'
  const badgeClass =
    type === 'post'
      ? 'bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-200'
      : 'bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-200'

  return entries
    .filter((entry) => entry._path && entry.title)
    .sort(
      (left, right) => parseEntryDate(right.date) - parseEntryDate(left.date),
    )
    .slice(0, 3)
    .map((entry) => ({
      _path: entry._path,
      title: entry.title || '',
      description: entry.description || '',
      image: entry.image || '/images/project-1.png',
      date: entry.date || '',
      author: entry.author || 'TuyenLe',
      type,
      typeLabel,
      badgeClass,
    }))
}

const { data: articles } = await useAsyncData(
  'home-latest-articles',
  async () => {
    const [posts, feels] = await Promise.all([
      queryContent('/post').find() as Promise<ContentEntry[]>,
      queryContent('/feel').find() as Promise<ContentEntry[]>,
    ])

    return [
      ...normalizeEntries(posts, 'post'),
      ...normalizeEntries(feels, 'feel'),
    ].sort(
      (left, right) => parseEntryDate(right.date) - parseEntryDate(left.date),
    )
  },
)

function updateSwiperState(swiper?: SwiperInstance | null) {
  const instance = swiper || swiperRef.value

  if (!instance) {
    return
  }

  canSlidePrev.value = !instance.isBeginning
  canSlideNext.value = !instance.isEnd
}

function handleSwiper(swiper: SwiperInstance) {
  swiperRef.value = swiper
  updateSwiperState(swiper)
}

function slideArticles(direction: 'next' | 'prev') {
  if (!swiperRef.value) {
    return
  }

  if (direction === 'next') {
    swiperRef.value.slideNext()
    return
  }

  swiperRef.value.slidePrev()
}
</script>

<template>
  <section class="body-font py-14 text-gray-600 md:py-20">
    <div>
      <h2
        class="text-2xl text-center flex justify-center font-bold text-foreground md:text-4xl lg:text-6xl dark:text-slate-300"
      >
        {{ "Blog's" }}
      </h2>
    </div>
    <div
      class="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between"
    >
      <div>&nbsp;</div>
      <div class="flex items-center gap-3 self-start md:self-auto">
        <button
          class="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
          :disabled="!canSlidePrev"
          @click="slideArticles('prev')"
        >
          Prev
        </button>
        <button
          class="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-40 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
          :disabled="!canSlideNext"
          @click="slideArticles('next')"
        >
          Next
        </button>
      </div>
    </div>

    <ClientOnly>
      <Swiper
        class="home-latest-articles-swiper pb-12"
        :modules="swiperModules"
        :space-between="24"
        :slides-per-view="1"
        :grab-cursor="true"
        :speed="700"
        :autoplay="{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }"
        :pagination="{ clickable: true }"
        :breakpoints="{
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }"
        @swiper="handleSwiper"
        @slide-change="updateSwiperState"
        @reach-beginning="updateSwiperState"
        @reach-end="updateSwiperState"
        @from-edge="updateSwiperState"
        @resize="updateSwiperState"
      >
        <SwiperSlide
          v-for="article in articles || []"
          :key="article._path"
          class="h-auto"
        >
          <article class="group h-full">
            <NuxtLink
              :to="article._path"
              class="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div class="relative overflow-hidden">
                <img
                  :src="article.image"
                  :alt="article.title"
                  class="h-56 w-full object-cover object-center transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  width="600"
                  height="320"
                />
                <span
                  class="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]"
                  :class="article.badgeClass"
                >
                  {{ article.typeLabel }}
                </span>
              </div>

              <div class="flex h-full flex-col p-6">
                <div
                  class="mb-4 flex items-center justify-between gap-3 text-xs text-slate-400 dark:text-slate-500"
                >
                  <span>{{ article.date }}</span>
                  <span class="truncate text-right">{{ article.author }}</span>
                </div>

                <h3
                  class="line-clamp-2 text-xl font-semibold text-slate-800 dark:text-slate-100"
                >
                  {{ article.title }}
                </h3>

                <p
                  class="mt-3 line-clamp-3 text-sm leading-6 text-slate-500 dark:text-slate-400"
                >
                  {{ article.description }}
                </p>
              </div>
            </NuxtLink>
          </article>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>
  </section>
</template>

<style scoped>
:deep(.home-latest-articles-swiper .swiper-pagination-bullet) {
  background: rgb(148 163 184);
  opacity: 1;
}

:deep(.home-latest-articles-swiper .swiper-pagination-bullet-active) {
  background: rgb(15 23 42);
}

:deep(.dark .home-latest-articles-swiper .swiper-pagination-bullet) {
  background: rgb(71 85 105);
}

:deep(.dark .home-latest-articles-swiper .swiper-pagination-bullet-active) {
  background: rgb(226 232 240);
}
</style>
