<script lang="ts" setup>
const { awesome } = useAppConfig()
const { parseMenuRoute, parseMenuTitle } = useNavbarParser()
const $screen = useAwesomeScreen()
const nuxtApp = useNuxtApp()

const menus = computed(
  () =>
    (awesome?.layout?.page?.navbar?.menus ||
      []) as AwesomeLayoutPageNavbarMenu[]
)

const titlesText = computed<string[]>(() =>
  'Lê Vĩnh Tuyến'
    .replaceAll('&nbsp;', '[space]')
    .split(' ')
    .map((item: any) => item.replaceAll('[space]', ' '))
)
const leadingsText = computed(() => [
  {
    text: titlesText.value[0],
    startColor: '#007CF0',
    endColor: '#00DFD8',
    delay: 0,
  },
  {
    text: titlesText.value[1],
    startColor: '#7928CA',
    endColor: '#FF0080',
    delay: 2,
  },
  {
    text: titlesText.value[2],
    startColor: '#FF4D4D',
    endColor: '#F9CB28',
    delay: 4,
  },
])
// drawer
const showDrawer = ref(false)
</script>

<template>
  <header>
    <div
      class="fixed top-0 left-0 right-0 bg-white/90 border-b-[1px] border-gray-900/10 backdrop-blur-sm z-10 dark:bg-slate-900/90 dark:border-slate-50/10 px-4"
    >
      <div class="max-w-7xl mx-auto">
        <div class="container-inner h-14 flex items-center">
          <div class="logo-col">
            <a
              aria-current="page"
              href="/"
              class="router-link-active router-link-exact-active group hover:text-slate-900 flex items-center transition-all duration-200 dark:hover:text-slate-100"
              ><div class="mr-2 -mb-1">
                <span class="dark:hidden">
                  <NuxtImg
                    width="24"
                    height="24"
                    alt="logo-icon"
                    class=""
                    src="/images/logo-icon.svg" /></span
                ><span class="hidden dark:inline">
                  <NuxtImg
                    width="24"
                    height="24"
                    alt="logo-icon-dark-mode"
                    class=""
                    src="/images/logo-icon-dark-mode.svg"
                /></span>
              </div>
              <div
                class="drop-shadow-sm group-hover:drop-shadow-md transition-all duration-200"
              >
                <span class="flex items-center">
                  <span
                    v-for="(item, i) in leadingsText"
                    :key="i"
                    :style="`--content: '${item.text}'; --start-color: ${
                      item.startColor
                    }; --end-color: ${
                      item.endColor
                    }; --animation-name: anim-fg-${i + 1}`"
                    class="animated-text-bg drop-shadow-xl text-md sm:text-md md:text-md lg:text-md 2xl:text-md flex font-black uppercase"
                  >
                    <span class="animated-text-fg">{{ item.text }}</span> </span
                  ><span
                    class="group-hover:text-amber-500 flex text-slate-300 text-sm transition-all duration-200 dark:text-slate-600"
                  >
                    's&nbsp;Blog</span
                  ></span
                >
              </div></a
            >
          </div>
          <div class="menu-col ml-auto flex items-center">
            <div class="desk-menu hidden md:flex items-center">
              <ul class="flex items-center">
                <!--[-->
                <li class="ml-8">
                  <a
                    href="/cat/chuyen-troi-mua"
                    class="block text-sm hover:text-sky-600"
                    >Kể truyện chơi</a
                  >
                </li>
                <li class="ml-8">
                  <a href="/cat/blog" class="block text-sm hover:text-sky-600"
                    >Blog</a
                  >
                </li>
                <!--]-->
              </ul>
            </div>
            <div
              class="hidden md:block h-6 border-l border-gray-300 ml-6 mr-4 dark:border-slate-700/80"
            ></div>
            <div class="relative">
              <!--[--><!--[--><button
                id="change-color-mode-btn"
                type="button"
                aria-haspopup="listbox"
                aria-expanded="false"
                data-headlessui-state=""
                class="w-8 h-8 flex items-center justify-center outline-none hover:text-sky-600"
                aria-label="Chuyển đổi chế độ màu"
              >
                <span class="dark:hidden"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                    ></path></svg></span
                ><span class="hidden dark:inline"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                    class="h-5 w-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    ></path></svg
                ></span></button
              ><!----><!--]--><!--]-->
            </div>
            <div
              class="w-8 h-8 ml-2 flex items-center justify-center group cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                class="w-5 h-5 group-hover:text-sky-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                ></path>
              </svg>
            </div>
            <div
              class="h-8 w-8 ml-2 -mr-2 flex justify-center items-center md:hidden"
            >
              <!----><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="mobi-menu md:hidden px-4 hidden">
        <ul>
          <!--[-->
          <li class="border-t border-t-gray-100 dark:border-t-slate-800">
            <a href="/cat/chuyen-troi-mua" class="block py-3 text-sm"
              >Chuyện trời mưa</a
            >
          </li>
          <li class="border-t border-t-gray-100 dark:border-t-slate-800">
            <a href="/cat/blog" class="block py-3 text-sm">Blog</a>
          </li>
          <!--]-->
        </ul>
      </div>
    </div>
  </header>
</template>
