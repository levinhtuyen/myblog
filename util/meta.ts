// @ts-ignore

import { reactive, computed } from 'vue'
export const  useMetaSeoIndex = () => {
  const siteData = reactive({
    title: 'Free QR Code Generator - Create QR codes custom with logo',
    description:
      'Free QR Code Generator for URL, vCard, location, event .... Add logo, custom colors, frames, and download in high print quality. Get your free QR Codes now!',
    content: 'Free QR Code Generator - Create QR codes custom with logo',
    ogTitle: 'Free QR Code Generator - Create QR codes custom with logo',
    ogDescription:
      'Free QR Code Generator for URL, vCard, location, event .... Add logo, custom colors, frames, and download in high print quality. Get your free QR Codes now!',
    ogImage: 'https://qrcode-custom.com/logo.png',
    ogType: 'article',
    ogLink: 'https://qrcode-custom.com/',
    robots: 'index, follow',
    ogImageWidth: '1200',
    ogSideName: 'qrcode-custom.com',
    ogImageHeight: '628'
  })

  useHead({
    // Can be static or computed
    title: computed(() => siteData.title),
    meta: [
      {
        name: 'description',
        content:
          'Free QR Code Generator for URL, vCard, location, event .... Add logo, custom colors, frames, and download in high print quality. Get your free QR Codes now!'
      },
      {
        property: 'og:title',
        content: 'Free QR Code Generator - Create QR codes custom with logo'
      },
      {
        property: 'og:url',
        content: computed(() => siteData.ogLink)
      },
      {
        property: 'og:type',
        content: computed(() => 'website')
      },
      {
        property: 'og:description',
        content:
          'Free QR Code Generator for URL, vCard, location, event .... Add logo, custom colors, frames, and download in high print quality. Get your free QR Codes now!'
      },

      {
        property: 'og:image',
        content: 'https://qrcode-custom.com/logo.png'
      },
      {
        name: 'robots',
        content: computed(() => siteData.robots)
      },
      {
        property: 'og:image:width',
        content: '1200'
      },
      {
        property: 'og:site_name',
        content: computed(() => 'website')
      },
      {
        property: 'og:image:height',
        content: computed(() => siteData.ogImageHeight)
      },
      {
        property: 'msvalidate.01',
        content: computed(() => '11B70B71EB4BE19284312ADFF0011957')
      }
    ],

    link: [
      { rel: 'canonical', href: 'https://qrcode-custom.com', id: 'canonical' }
    ]
  })
  return useHead
}
