<template>
  <div
    class="max-w-6xl m-auto pt-[34px]"
    :style="{ 'min-height': 'var(--layout-page-content-min-height)' }"
  >
    <div class="px-4">
      <!--[--><!---->
      <div class="grid my-10 grid-cols-1 gap-x-14 gap-y-10 md:grid-cols-2">
        <!--[-->
        <article>
          <div class="leading-none mb-2 md:mx-2">
            <a
              href="/cat/chuyen-troi-mua"
              class="uppercase text-slate-500 text-[10px] hover:text-sky-600 dark:hover:text-sky-500"
              >Chuyện trời mưa</a
            >
          </div>
          <a
            href="/post/anh-quen-roi"
            class="group block relative rounded-lg bg-white border border-gray-200 overflow-hidden dark:bg-slate-800 dark:border-slate-800"
          >
            <NuxtImg
              width="600"
              height="300"
              alt="Chuyện trời mưa"
              class=""
              src="/images/post-1.png" />
            <div
              class="bg-black/10 absolute left-0 right-0 bottom-0 top-0 opacity-0 duration-200 transition-all group-hover:opacity-100"
            ></div
          ></a>
          <div class="mt-3 md:mx-2">
            <div>
              <a
                href="/post/anh-quen-roi"
                class="text-xl font-title hover:text-sky-600 dark:hover:text-sky-500"
                >Anh quen rồi</a
              >
            </div>
            <div
              class="text-slate-500 mt-2 text-sm line-clamp-3 leading-normal"
            >
              Không biết tự khi nào mà anh đã quen cái cuộc sống như vậy, một
              năm, hai năm, ba năm và nhiều năm trôi qua. Anh vẫn là anh vỗn dĩ
              như cái thuở ban đầu gặp em, những cái chạm tay ngần ngại, những
              cư xử phản ứng không mấy là bình tĩnh như mọi khi anh vẫn làm. Sau
              lưng em anh có thể là một người tự tin với những gì từng trải,
              trước mặt em anh chỉ là một anh chàng khờ ngô nghê như những phút
              đầu gặp gỡ ngày nào....
            </div>
            <div class="mt-2.5 text-xs text-slate-400 dark:text-slate-600">
              Đăng ngày 24/05/2024
            </div>
          </div>
        </article>

        <!--]-->
      </div>
      <!--]-->
    </div>
  </div>
</template>
