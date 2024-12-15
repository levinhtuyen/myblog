export default defineAppConfig({
  awesome: {
    name: `Lê Vĩnh Tuyến - Blog's của tôi`,
    description:
      'Để chút thương gửi vào trong gió, để chút buồn gửi vào trong tim...',
    author: {
      name: 'viandwi24',
      links: {
        github: 'https://github.com/levinhtuyen/myblog',
        website: 'https://tuyenleblog.tech',
      },
    },
    layout: {
      home: {
        // if false, in index page will show alert "create file "~/pages/index.vue" to replace this page"
        disableInfoReplaceIndexInHomePage: false,
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
function defineAppConfig(arg0: {
  awesome: {
    name: string
    description: string
    author: { name: string; links: { github: string; website: string } }
    layout: {
      home: {
        // if false, in index page will show alert "create file "~/pages/index.vue" to replace this page"
        disableInfoReplaceIndexInHomePage: boolean
        secondaryActionButton: { title: string }
      }
    }
    project: { links: { github: string } }
  }
}) {
  throw new Error('Function not implemented.')
}
