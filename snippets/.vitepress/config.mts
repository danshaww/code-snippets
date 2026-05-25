import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

export default defineConfig({
  title: 'Docs',
  description: 'A VitePress documentation site',

  rewrites: {
    '/': '/snippets',
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: generateSidebar({
      documentRootPath: 'docs',
      collapsed: false,
      capitalizeFirst: true,
      useTitleFromFrontmatter: true,
      useTitleFromFileHeading: true,
      excludePattern: ['index.md','images/*','snippets.md'],
    }),

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'gitea', link: 'https://gitea.epichouse.co.uk/dan/code-snippets' },
    ],
  },
})
