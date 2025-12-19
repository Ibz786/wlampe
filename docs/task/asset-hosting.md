# Asset Hosting

## S3 Bucket Setup

- Create S3 bucket in AWS Console (region close to your servers)
- Configure bucket permissions: private bucket with public read access via CloudFront
- Set up IAM user with programmatic access (API keys)
- Configure bucket CORS policy to allow frontend access

## CraftCMS S3 Integration

- Install AWS SDK plugin or use native S3 volume support
- Configure asset volume in Craft to use S3
- Set up transforms to generate optimized versions
- Test upload and access from Craft admin panel

## Cloudflare CDN Integration

### DNS & CDN Setup

- Point domain nameservers to Cloudflare
- Configure DNS records: A record for main domain, CNAME for www/subdomains
- Enable Cloudflare proxy (orange cloud) for CDN benefits
- Configure Cloudflare settings:
    - Caching: Set browser cache TTL, enable Argo for faster routing
    - Security: Enable firewall rules, rate limiting, bot protection
    - Performance: Enable minification, Brotli compression, HTTP/3
    - SSL: Full (strict) mode

### Cloudflare + S3 Integration

- Use Cloudflare as CDN in front of S3 or CloudFront
- Configure cache rules for static assets
- Set up page rules for different cache behaviors