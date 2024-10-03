<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
// compiler micro
definePageMeta({ layout: 'page' })
useHead({ title: 'Feel' })
// query
const query: QueryBuilderParams = { path: '/feel' }
</script>

<template>
  <LayoutPageWrapper>
    <LayoutPageHeader>
      <LayoutPageTitle text="Chuyện của tôi" class="capitalize" />
    </LayoutPageHeader>
    <LayoutPageSection>
      <ContentList path="/feel">
        <template #default="{ list }">
          <div class="grid my-10 grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-2">
            <article v-for="feel in list" :key="feel._path">
              <div class="leading-none mb-2 md:mb-2">
                <AwesomeLink
                  :to="feel._path"
                  class="uppercase text-slate-500 text-[10px] hover:text-sky-600 dark:hover:text-sky-500"
                  >{{ feel.title }}</AwesomeLink
                >
              </div>
              <AwesomeLink
                :to="feel._path"
                class="group block relative rounded-lg bg-white border border-gray-200 overflow-hidden dark:bg-slate-800 dark:border-slate-800"
              >
                <NuxtImg
                  width="600"
                  height="300"
                  :alt="feel.title"
                  :src="feel.image" />
                <div
                  class="bg-black/10 absolute left-0 right-0 bottom-0 top-0 opacity-0 duration-200 transition-all group-hover:opacity-100"
                ></div
              ></AwesomeLink>
              <div class="mt-3 md:mr-2">
                <div>
                  <AwesomeLink
                    class="text-xl font-title hover:text-sky-600 dark:hover:text-sky-500"
                    :to="feel._path"
                  >
                    {{ feel.title }}</AwesomeLink
                  >
                </div>
                <div
                  class="text-slate-500 mt-2 text-sm line-clamp-3 leading-normal"
                >
                  {{ feel.description }}
                </div>
                <div class="mt-2.5 text-xs text-slate-400 dark:text-slate-600">
                  <span>Đăng ngày {{ feel.date }}</span>
                  <span>, {{ feel.author }}</span>
                </div>
              </div>
            </article>
          </div>
        </template>
        <template #not-found>
          <p>Bạn chưa có bài viết nào.</p>
        </template>
      </ContentList>
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
