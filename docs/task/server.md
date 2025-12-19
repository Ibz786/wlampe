# Server provisioning

## Server Setup

The first thing that would be required is to setup our Digital Ocean and choose the best environemnt / specs that would best suit our needs

* Log in or setup a [DigitalOcean](https://www.digitalocean.com/) account
* Select a [droplet](https://www.digitalocean.com/products/droplets)
    * A droplet is DigitalOcean's brand name for a scalable, Linux based VPS. Allowing for users to run applications, host websites, and databases etc. with dedicated CPU, RAM, and storage.
* Setup Droplet using the latest LTS version of Ubuntu
* The droplet should have the appropriate specs
* Since this droplet is for [CraftCMS](https://craftcms.com/), accroding to their [documentation](https://craftcms.com/docs/5.x/requirements.html), the basic requirements include
    * Minimum:
        * 256MB+ RAM
        * 200MB+ HDD / SSD
    * Recommended:
        * 512MB+ RAM
        * 200MB+ HDD / SSD
* Onwards we need then to select an appropriate data centre region closet to the client 
* It's also important to note of any `SSH keys` and other security information. This should always be safely, and securely saved 

### Droplet Creation Example
```
- Droplet: 4GB RAM / 2 vCPUs
- Region: Choose closest to target audience
- OS: Ubuntu 22.04 LTS x64
- Add-ons: Enable monitoring, weekly backups, snapshots etc.
```
### Droplet Configuation
It is important to configure and secure your droplet
- `ssh` into VPS
```bash
ssh root@your-server-ip
```
* Update system packages
```bash
sudo apt update && sudo apt upgrade -y
```
* Create new user with password and grant sudo permissions
```bash
sudo usermod -aG sudo yourusername
```
#### Secure SSH
*  Disable root login
```bash
Edit /etc/ssh/sshd_config: sudo nano /etc/ssh/sshd_config
Change PermitRootLogin yes to PermitRootLogin no
```
* Use SSH Keys
#### Setup Firewall 
* **Install**
```bash
sudo apt install ufw.
```
* **Allow SSH**
```bash
sudo ufw allow OpenSSH (or sudo ufw allow 22/tcp).
```
* **Enable**
```bash
sudo ufw enable
```
* **Check Status**
```bash
sudo ufw status
```
#### Install Fail2Ban - Intrusion Prevention
* **Install**
```bash
sudo apt install fail2ban (or sudo dnf install fail2ban).
```
* **Enable & Start**
```bash
sudo systemctl enable fail2ban && sudo systemctl start fail2ban.
```

## Database and Required Dependencies
For CraftCMS the following are required:
- **Database**
    - Latest versions of MySQL or PostgreSQL
- **PHP**
    - PHP v8.2+, with all the [required extensions](https://craftcms.com/docs/5.x/requirements.html#required-php-extensions)
- **Redis** - For caching and other resources
- **Composer** - PHP dependency manager

For Nuxt.js:
- **Node.js** - Required for builds

## Install Core Stack
```bash
# Add PHP repository
add-apt-repository ppa:ondrej/php -y
apt update

# Install cURL
apt install curl -y

# Install Composer
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
chmod +x /usr/local/bin/composer

# Install PHP 8.2 and extensions
apt install -y php8.2-fpm php8.2-cli php8.2-mysql php8.2-gd \
    php8.2-mbstring php8.2-xml php8.2-curl php8.2-zip \
    php8.2-intl php8.2-bcmath php8.2-imagick php8.2-redis

# Install NGINX
apt install nginx -y

# Install MySQL 8.0
apt install mysql-server -y
mysql_secure_installation

# Install Redis
apt install redis-server -y

# Install Node.js 20.x (for Nuxt.js)
apt install nodejs -y
apt install npm -y
```

>[!Note]
>
> This tech stack should be installed both locally and on the server


### Database Setup
Using either `MySQL` or `PostgreSQL`, database instances should be set up
* Set up secure installation and connection to DB
* Log into DB
* Create DBs for each instance:
    * DB for production
    * DB for staging (testing)
* For each DB, create DB users
* Configure user's permissions
* Setup and configure automated backups. This can be acheived with Digital Ocean or via custom scripts
* Ensure to document connection credentials securely