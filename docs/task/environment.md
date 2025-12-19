# Environment Management

Ideally, there should be three environments setup
## Local Development
- Locally, either Docker can be used to setup the local dev environment or native installations and other depedencies can be used e.g. XAMPP, 
- When developing locally, `.env` files can be used
- Hot module reloading for rapid development
- Git-ignored environment files
- Local development environements should mock / be as similar as possible to staging and production environments

## Staging Environment
- When looking to test, either a separate droplet can be created to manage the environment or a subdomain of the main droplet e.g. `staging.example.com`
- The staging environment would need to have mock data set up. It's always helpful to have build up and tear down scripts
- If for any reason, production data can be used, however, user data should be completely sanitised
- All deployments should be tested throughly before pushing to production
- Staging should have the same configuration as production. So as to find any issues before the build is finalised and pushed out

## Production Environment:
- Optimised settings across the board for PHP / MySQL / Node.js etc.
- Caching enabled (Redis, OpCache)
- Error logging configured properly
- Monitoring tools installed

## Environment Variables
- Never commit .env files to Git
- Use different credentials for each environment
- Store in server using Forge/Ploi or .env files
- Document required variables in .env.example