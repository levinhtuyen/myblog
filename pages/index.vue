<template>
  <div>
    <Header />
    <div class="mx-auto max-w-7xl lg:px-3 pt-[64px] bg-white">
      <div class="container grid grid-cols-1 lg:grid-cols-3 lg:gap-8">

      </div>
    </div>
    <Footer />
    <client-only>
  </client-only>
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const drawerShare = ref(false)
const useAsset = (path: string): string => {
  const assets: Record<string, string> = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default'
  })
  return assets['/assets/' + path]
}


const activeTab = ref<number>(1)

</script>

<style lang="scss" scoped>
.container > * {
  width: 100%;
}
</style>
