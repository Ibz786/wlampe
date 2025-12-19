# Load Balancing

- Digital Ocean provides its own [load balancing solution](https://www.digitalocean.com/products/load-balancers), allowing for incoming site traffic to be distributed across multiple droplets, whilst improving availabilty, scability and performance
- In turn we can also have health checks to monitor server availability
- The best solution is to initially start with a simple, single server add then add load balancing when traffic demands it
- Alternatively other vendors such as Cloudflare or AWS can be used to assist with load balancing