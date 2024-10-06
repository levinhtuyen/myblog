<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
// compiler micro
definePageMeta({ layout: 'page' })
useHead({ title: 'Blog' })
// query
// const query: QueryBuilderParams = { path: '/post' }
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="Blog" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <ContentList path="/post">
        <template #default="{ list }">
          <div
            class="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16"
          >
            <article
              v-for="article in list"
              :key="article._path"
              class="flex flex-col items-center gap-4 md:flex-row lg:gap-6 shadow-xl rounded-lg"
            >
              <AwesomeLink
                :to="article._path"
                class="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
              >
                <NuxtImg
                  width="400"
                  height="300"
                  class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  :alt="article.title"
                  :src="article.image"
                />
              </AwesomeLink>

              <div class="flex flex-col gap-2">
                <span class="text-sm text-gray-400">{{ article.date }}</span>

                <h2 class="text-xl font-bold text-gray-800">
                  <AwesomeLink
                    :to="article._path"
                    class="transition duration-100 hover:text-rose-500 active:text-rose-600 line-clamp-1"
                    >{{ article.title }}</AwesomeLink
                  >
                </h2>

                <p class="text-gray-500 line-clamp-2">{{ article.description }}</p>

                <div>
                  <AwesomeLink
                    :to="article._path"
                    class="font-semibold text-rose-500 transition duration-100 hover:text-rose-600 active:text-rose-700"
                    >Read more</AwesomeLink
                  >
                </div>
              </div>
            </article>
          </div>
        </template>
        <template #not-found>
          <p>No articles found.</p>
        </template>
      </ContentList>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
