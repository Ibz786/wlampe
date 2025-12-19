# SSL and Domain Setup

## SSL Certificates

- Use Let's Encrypt via Certbot
- Install Certbot:
```bash
sudo apt install certbot python3-certbot-nginx
```
- Generate certificates:
```bash
sudo certbot --nginx -d example.com -d www.example.com
```
- Certbot auto-renews certificates, which sets up cron job
- Verify auto-renewal: 
```bash
sudo certbot renew --dry-run
```

## Domain Configuration
- Configure DNS A records pointing to Digital Ocean droplet IP
- Set up www redirect or vice versa
- Configure subdomain for CMS admin (`admin.example.com` or `api.example.com`)
- Test DNS propagation before SSL setup