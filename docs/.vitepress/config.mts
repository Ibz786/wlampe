import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wiedemann Lampe",
  description: "Wiedemann Lampe Server Setup Scenario",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Setup', link: '/setup' }
    ],

    sidebar: [
      {
        text: 'Steps',
        items: [
          { text: 'Server Provisioning', link: '/task/server' },
          { text: 'Load Balancing', link: '/task/load-balance' },
          { text: 'CMS Setup', link: '/task/cms' },
          { text: 'Front-end Setup', link: '/task/front-end' },
          { text: 'Asset Hosting', link: '/task/asset-hosting' },
          { text: 'Image Transformations', link: '/task/image' },
          { text: 'Deployment Pipeline', link: '/task/deployment' },
          { text: 'SSL / Domain Setup', link: '/task/domain' },
          { text: 'NGINX Setup', link: '/task/nginx' },
          { text: 'Environment Management', link: '/task/environment' },
          { text: 'Automation', link: '/task/automation' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
