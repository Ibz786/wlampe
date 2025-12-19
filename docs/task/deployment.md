# Deployment Pipeline
Setting up, Git based CI / CD deployments

## Using Digital Ocean
- Connect Git repository (GitHub, GitLab, Bitbucket) 
- Configure build settings - App Platform auto-detects your framework (Node.js, Python, Go, etc.)
- Set environment variables - Add any secrets or config needed
- Deploy - Every push to your main branch automatically triggers a build and deploy
- Optionally you can use Docker too to help manage and configure deployments

## Using Laravel Forge:
- Connect Git repository (GitHub, GitLab, Bitbucket)
- Configure deployment:
```bash
cd /var/www/backend.example.com
git pull origin main
composer install --no-dev
php craft migrate/all
php craft project-config/apply
php craft clear-caches/all
```
## For Nuxt.js
```bash
cd /var/www/frontend.example.com
git pull origin main
npm ci
npm run generate
```

### Set up workflows for automated testing
- Building assets on push to main branch
- Deploying to staging automatically
- Running database migrations
- Clearing caches post-deployment

This can be acheived by GitHub actions, GitLab CI/CD, Bitbucket pipelines, Jenkins or DeployBot

### Deployment Best Practices
- Implement deployment notifications such as Email
- Maintaining deployment logs
- Have emergency rollback procedures setup in case