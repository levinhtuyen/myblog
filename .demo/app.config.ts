// see all availabe configs here: https://github.com/viandwi24/nuxt3-awesome-starter/blob/v2/app.config.ts
export default defineAppConfig({
  awesome: {
    name: `Lê Vĩnh Tuyến - Blog's của tôi`,
    description:
      'Để chút thương gửi vào trong gió, để chút buồn gửi vào trong tim...',
    author: {
      name: 'viandwi24',
      links: {
        github: 'https://github.com/levinhtuyen/myblog',
        website: 'https://viandwi24.site',
      },
    },
    layout: {
      welcome: {
        // if false, in index page will show alert "create file "~/pages/index.vue" to replace this page"
        disableInfoReplaceIndexInWelcomePage: false,
        secondaryActionButton: {
          title: 'See Github',
        },
      },
    },
    project: {
      links: {
        github: 'https://github.com/levinhtuyen/myblog',
      },
    },
  },
})
