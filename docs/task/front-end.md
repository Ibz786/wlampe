# Frontend Setup

>[!Note]
>
> Nuxt.js should be installed locally with full version / source control i.e Git via GitHub, GitLab etc.
>
> From there, once everything is correctly set up and configured, it can be deployed onto the server via CI / CD pipelines

## Install Nuxt
Install the lastest version of Nuxt 

```bash
npm create nuxt@latest <project-name>
```
- Install any required dependencies
- Set up API connection to CraftCMS backend (GraphQL or REST)
- Configure environment variables for API endpoints
- This is a good opportunity to setup or maintain a reusable component and styling library
- Common components and styles can be reused, further developed in each new project
- This also gives the opportunity to add new components and styles and fix any issues


## Nuxt Configuation
In your `nuxt.config.ts`:
```js
export default defineNuxtConfig({
    devtools: { enabled: process.env.NODE_ENV === 'development' },
  
    runtimeConfig: {
        craftApiEndpoint: process.env.CRAFT_API_ENDPOINT || 'http://localhost/api',

        public: {
            siteUrl: process.env.SITE_URL || 'https://www.example.com',
            imgixDomain: process.env.IMGIX_DOMAIN || 'your-source.imgix.net',
            imgixSecureToken: process.env.IMGIX_SECURE_TOKEN,
        }
    },

    app: {
        head: {
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1',
    },

    // Development server
    devServer: {
        port: 3000,
        host: '0.0.0.0'
    }

    ssr: false
});
```



## Development 
```bash
npm run dev
```
Since the backend is served by CraftCMS and PHP, we don't need to worry about configuring a `ecosystem.config.cjs` as PM2 will not be needed on the server. Nuxt.js will serve SSG files


## Build Configuation

```json
{
  "scripts": {
    "dev": "nuxt dev",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "preview": "nuxt preview",
    "postbuild": "nuxt generate",
    "start": "node .output/public/index.html"
  }
}
```

## Build Process
All development code should be pushed to a Git repository e.g. GitHub, from there on the server, in this case Digital Ocean, a docker environment can be setup 
>[!Note]
>
> Its good practice to first test everything locally, to ensure there are no issues or build errors. Once you're happy you can commit your changes to Git, and then CI / CD can initiate a new build
- We can generate a new build locally
```bash
npm run generate
```
- Once it has built the app, we can quicly preview it using
```bash
npm run preview
```
- After all the changes are made, they are then committed and pushed to a Git repository
- On Digital Ocean we can then generate a new build of our Nuxt.js app
- These files will be served via NGINX configuration