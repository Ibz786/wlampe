# CraftCMS Setup

>[!Note]
>
> CraftCMS should be installed locally with full version / source control i.e Git via GitHub, GitLab etc.
>
> From there, once everything is correctly set up and configured, it can be deployed onto the server via CI / CD pipelines

## Installation
As per the installation instructions on [CraftCMS' documentation](https://craftcms.com/docs/5.x/install.html), it is [recommended](https://craftcms.com/docs/5.x/install.html#why-ddev) to install [DDEV](https://docs.ddev.com/en/stable/users/install/)
* Use Composer to create new Craft project:

With DDEV
```bash
ddev composer create-project craftcms/craft
```
Without DDEV
```bash
composer create-project craftcms/craft
```
* The Craft installer should start automatically
* Configure `.env` file with all the necessary credentials, keys and settings
```bash
# Environment
ENVIRONMENT="development"
CRAFT_ENVIRONMENT="development"

# Security
SECURITY_KEY="auto-generated-key-from-setup"

# Database
DB_DRIVER="mysql"
DB_SERVER="localhost"
DB_PORT="3306"
DB_DATABASE="craft_production"
DB_USER="craft_prod"
DB_PASSWORD="your_secure_password"
DB_SCHEMA="public"

# S3 Configuration
S3_BUCKET="client-site-assets"
S3_REGION="us-east-1"
S3_KEY="your_aws_access_key"
S3_SECRET="your_aws_secret_key"

# Redis
REDIS_HOSTNAME="127.0.0.1"
REDIS_PORT="6379"
REDIS_DEFAULT_DB="0"
REDIS_CRAFT_DB="1"

# imgix
IMGIX_SOURCE_DOMAIN="your-source.imgix.net"
IMGIX_SECURE_TOKEN="your_secure_token"
```
>[!Note]
>
> These credential should **NOT** be included as part of git commits

## Configuration:
* Set up any user permissions and admin accounts
* Configure asset volumes for local and cloud storage
* Set up sections, fields, and content structure
* Enable GraphQL or REST API for Nuxt.js frontend consumption
* Configure CORS headers for frontend API access
