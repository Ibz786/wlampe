# Automation

Some ways in which to help automate and speed up the process for future clients and deployements can be using:

- Using managed platforms such as Larvel Forge, ServerPilot or RunCloud for example
    - Using these helps to simplify the whole initial server setup and provisioning, manages NGINX, PHP, MySQL, SSL and deployment
    - Having custom scripts to help auto setup Databases, Tables etc.
- With Nuxt, a starter template can be developed, setup with all the necessary configurations, dependencies and packages included. Some examples include
    - `nuxt.config.ts`
    - `package.json` - Including any
        - `scripts`
        - `dependencies`
        - etc
    - `app/assets/main.scss` - Boilerplate standard styles
    - `app/pages` - Boilerplate standard pages
    - `app/utils` - Boilerplate standard utils
* Using Docker
    - By creating images and containerising your environment with Docker and using CI/CD pipeline to push images to the DigitalOcean Container Registry for production deployment
    - No need to constantly recreate things from the ground up
This can significantly help speed up development and project scaffolding 
