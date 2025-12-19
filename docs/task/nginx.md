# NGINX Setup

## Backend (CraftCMS) Configuration
```nginx
server {
    listen 443 ssl http2;
    server_name api.example.com;
    root /var/www/backend.example.com/web;
    
    index index.php;
    charset utf-8;
    
    # SSL certificates (managed by Certbot)
    ssl_certificate /etc/letsencrypt/live/api.example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.example.com/privkey.pem;
    
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }
    
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
    }
    
    location ~ /\.ht {
        deny all;
    }
}
```

## Frontend (Nuxt.js) Configuration
```nginx
# Redirect HTTP to HTTPS
server {
    listen 80;
    listen [::]:80;
    server_name example.com www.example.com;
    
    return 301 https://www.example.com$request_uri;
}

# Redirect non-www to www
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name example.com;
    
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;
    
    return 301 https://www.example.com$request_uri;
}

# Nuxt.js SSG
server {
    listen 443 ssl http2;
    server_name example.com;
    root /var/www/frontend.example.com/dist;
    
    index index.html;
    
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```