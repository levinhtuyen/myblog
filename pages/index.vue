<script lang="ts" setup>
const { awesome } = useAppConfig()
definePageMeta({ layout: 'page' })
useHead({
  titleTemplate: '',
  title: awesome?.name || `Lê Vĩnh Tuyến - Blog's của tôi`,
})
</script>

<template>
  <AwesomeWelcome :with-alert="true" />
</template>
