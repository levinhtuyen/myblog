<template >
  <div>
    <el-drawer class="custom-drawer" :withHeader="false" v-model="drawerShare" direction="btt">
      <template #default>
        <div>
          <p class="is-title-share py-4">Share DowntikApp Now!</p>
          <div class="md:flex md:justify-start grid grid-cols-7 gap-2">
            <img width="40" height="40" @click="onShareSocial('facebook')"  src="@/assets/social/facebook.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('twitter')"  src="@/assets/social/twitter.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('pinterest')"  src="@/assets/social/pinterest.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('linkedin')"  src="@/assets/social/linkedin.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('buffer')"  src="@/assets/social/buffer.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('diggit')"  src="@/assets/social/diggit.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('email')"  src="@/assets/social/email.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('print')"  src="@/assets/social/print.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('reddit')"  src="@/assets/social/reddit.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('stumbleupon')"  src="@/assets/social/stumbleupon.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('tumblr')"  src="@/assets/social/tumblr.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('vk')"  src="@/assets/social/vk.png" alt=""/>
            <img width="40" height="40" @click="onShareSocial('yummly')"  src="@/assets/social/yummly.png" alt=""/>
          </div>
        </div>
      </template>
    </el-drawer>
  </div>
</template>
<script lang="ts" setup>
import
  {
    ref
  } from 'vue'
const drawerShare = ref(false)
const onShareSocial = (social: string) => {
  if (!social) {
    return
  }
  const link = document.createElement('a');
  switch (social) {
    case 'facebook':
      link.href = `https://www.facebook.com/sharer/sharer.php?u=https://qrcode-custom.com/`
      break;
    case 'twitter':
      link.href = `https://twitter.com/share?url=https://qrcode-custom.com/&text=Free QR Code Generator for URL, vCard, location, event .... Add logo, custom colors, frames, and download in high print quality. Get your free QR Codes now!`
      break;
    case 'pinterest':
      link.href = `https://pinterest.com/pin/create/link/?url=https://qrcode-custom.com/&media=https://qrcode-custom.com/bg.png&description=Free QR Code Generator for URL, vCard, location, event .... Add logo, custom colors, frames, and download in high print quality. Get your free QR Codes now!`
      break;
    case 'linkedin':
      link.href = `http://www.linkedin.com/shareArticle?mini=true&url=https://qrcode-custom.com/`
      break;
    case 'bufferapp':
      link.href = `https://bufferapp.com/add?url=https://qrcode-custom.com/&text=Free QR Code Generator for URL, vCard, location, event .... Add logo, custom colors, frames, and download in high print quality. Get your free QR Codes now!`
      break;
    case 'diggit':
      link.href = `http://www.digg.com/submit?url=https://qrcode-custom.com/`
      break;
    case 'email':
      link.href = `mailto:?Subject=Free QR Code Generator - Create QR codes custom with logo&Body=Free QR Code Generator for URL, vCard, location, event .... Add logo, custom colors, frames, and download in high print quality. Get your free QR Codes now! https://qrcode-custom.com/`
      break;
    case 'print':
      window.print()
      break;
    case 'reddit':
      link.href = `http://reddit.com/submit?url=https://qrcode-custom.com/&title=Free QR Code Generator - Create QR codes custom with logo`
      break;
    case 'stumbleupon':
      link.href = `http://www.stumbleupon.com/submit?url=https://qrcode-custom.com/&title=Free QR Code Generator - Create QR codes custom with logo`
      break;
    case 'tumblr':
      link.href = `https://www.tumblr.com/share/link?url=https://qrcode-custom.com/&title=Free QR Code Generator - Create QR codes custom with logo`
      break;
    case 'vk':
      link.href = `http://vkontakte.ru/share.php?url=https://qrcode-custom.com/`
      break;
    case 'yummly':
      link.href = `http://www.yummly.com/urb/verify?url=https://qrcode-custom.com/&title=TFree QR Code Generator - Create QR codes custom with logo`
      break;
    default:
      link.href = `https://www.facebook.com/sharer/sharer.php?url=https://qrcode-custom.com/`
  }
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>
<style lang="scss" scoped>

</style>
