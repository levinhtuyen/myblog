<template>
  <div
    class="fixed top-0 left-0 right-0 bg-white/90 border-b-[1px] border-gray-900/10 backdrop-blur-sm z-10 dark:bg-slate-900/90 dark:border-slate-50/10"
  >
    <div class="container max-w-6xl mx-auto">
      <div class="container-inner h-14 px-4 flex items-center">
        <div class="logo-col">
          <a
            aria-current="page"
            href="/"
            class="router-link-active router-link-exact-active group hover:text-slate-900 flex items-center transition-all duration-200 dark:hover:text-slate-100"
            ><div class="mr-2 -mb-1">
              <span class="dark:hidden"
                ><NuxtImg
                  width="24"
                  height="24"
                  alt="logo-icon"
                  class=""
                  src="/images/logo-icon.svg" /></span
              ><span class="hidden dark:inline"
                ><NuxtImg
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
              KytoSai<span
                class="group-hover:text-amber-500 text-slate-300 text-sm transition-all duration-200 dark:text-slate-600"
                >'s page</span
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
                  >Chuyện trời mưa</a
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
            <button
            @click="isDropdown = !isDropdown"
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
              ></span>
            </button>
            <ul v-if="isDropdown"
              id="headlessui-listbox-options-1"
              aria-labelledby="change-color-mode-btn"
              aria-orientation="vertical"
              role="listbox"
              tabindex="0"
              data-headlessui-state="open"
              class="absolute z-20 top-full -right-1 mt-5 bg-white rounded-lg ring-1 ring-slate-900/10 shadow-lg overflow-hidden w-36 py-1 text-sm outline-none dark:bg-slate-800 dark:ring-slate-700/90"
            >
              <li
                class="text-sm py-1.5 px-3 flex items-center cursor-pointer"
                id="headlessui-listbox-option-14"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  class="w-4 h-4 mr-2 text-slate-400 dark:text-slate-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  ></path></svg
                ><span>Sáng</span>
              </li>
              <li
                class="text-sm py-1.5 px-3 flex items-center cursor-pointer "
                :class="isTheme === 1 ? 'text-sky-600': ''"
                id="headlessui-listbox-option-15"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  :class="isTheme === 1 ? 'text-sky-600': ''"
                  class="w-4 h-4 mr-2 text-sky-600 dark:text-sky-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  ></path></svg
                ><span>Tối</span>
              </li>
              <li
                class="text-sm py-1.5 px-3 flex items-center cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                  class="w-4 h-4 mr-2 text-slate-400 dark:text-slate-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  ></path></svg
                ><span>Hệ thống</span>
              </li>
            </ul>
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
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
const isDropdown = ref<boolean>(false)
const colorMode = useColorMode();
const changeColor = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))

</script>
<style lang="scss" scoped>
.style-header {
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
