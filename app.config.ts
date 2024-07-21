export default defineAppConfig({
  docus: {
    title: '2kbit',
    description: '2kbit 食用方法（？）',
    image: './public/cover.png',
    socials: {
      github: 'Abjust'
    },
    github: {
      dir: './content',
      branch: 'main',
      repo: '2kbit-docs',
      owner: 'Abjust',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    footer: {
      textLinks: [
        {
          text: 'bug是杀不完的，你杀死了一个bug，就会有千千万万个bug站起来！',
          href: '#',
        }
      ]
    }
  }
})
