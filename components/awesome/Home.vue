<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import HomeAboutSection from './home/HomeAboutSection.vue'
import HomeJourneySection from './home/HomeJourneySection.vue'
import HomeLatestArticlesSection from './home/HomeLatestArticlesSection.vue'
import HomeProjectsSection from './home/HomeProjectsSection.vue'

defineProps<{
  withAlert?: boolean
}>()

const router = useRouter()
const { t } = useI18n()
const currentPhraseIndex = ref(0)
const currentCharacterIndex = ref(0)
const currentPhrase = ref<string>(`${t('im')} Lê Vĩnh Tuyến`)
const isDeleting = ref(false)
const phrases = [`${t('im')} Lê Vĩnh Tuyến`, t('iLearnIdeveloper')]

let loopTimer: ReturnType<typeof setTimeout> | undefined

function scheduleLoop(delay: number) {
  loopTimer = setTimeout(loop, delay)
}

function loop() {
  const currentPhraseText = phrases[currentPhraseIndex.value]

  if (!isDeleting.value) {
    currentPhrase.value += currentPhraseText[currentCharacterIndex.value]
    currentCharacterIndex.value++
  } else {
    currentPhrase.value = currentPhrase.value.slice(0, -1)
    currentCharacterIndex.value--
  }

  if (currentCharacterIndex.value === currentPhraseText.length) {
    isDeleting.value = true
  }

  if (currentCharacterIndex.value === 0) {
    currentPhrase.value = ''
    isDeleting.value = false
    currentPhraseIndex.value++

    if (currentPhraseIndex.value === phrases.length) {
      currentPhraseIndex.value = 0
    }
  }

  const spedUp = Math.random() * (80 - 50) + 150
  const normalSpeed = Math.random() * (300 - 250) + 50
  const time = isDeleting.value ? spedUp : normalSpeed
  scheduleLoop(time)
}

onMounted(() => {
  currentPhrase.value = ''
  scheduleLoop(3000)
})

onBeforeUnmount(() => {
  if (loopTimer) {
    clearTimeout(loopTimer)
  }
})

const redirectUrl = (url: string, isOutApp: boolean) => {
  if (!url) {
    return
  }

  if (!isOutApp) {
    router.push({ path: url })
    return
  }

  window.open(url)
}
</script>

<template>
  <LayoutPageWrapper class="m-auto max-w-6xl">
    <LayoutPageSection>
      <HomeAboutSection :current-phrase="currentPhrase" />
      <HomeJourneySection />
      <HomeLatestArticlesSection />
      <HomeProjectsSection :redirect-url="redirectUrl" />
    </LayoutPageSection>
  </LayoutPageWrapper>
</template>
