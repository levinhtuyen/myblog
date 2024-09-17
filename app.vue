<template>
  <div style="background-color: #f5f5f5;">
    <DelayHydration>
      <div>
        <div
          v-if="loading"
          class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500">
        </div>
        <nuxt-layout>
          <nuxt-page class="bg-gray-50 min-h-screen pt-14 pb-[1px] dark:bg-slate-900 main-layout-bg" />
        </nuxt-layout>
      </div>
    </DelayHydration>
  </div>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
});
</script>
<style lang="scss" scoped>

</style>
