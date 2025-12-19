# Image Transformations
Digital Ocean will host our server, storage etc. However, it is advisable to use another medium for serving digital assets for the front end 

## Imgix
Imgix offers on demand video and image asset management and processing via their API, automates optimisation, creation, and delivery with powerful transformations (resize, crop, filters) and various other powerful features, allowing forfaster content workflows and better user engagement across devices, all powered by a global CDN.

Since everything is handled by their API, it allows for their powerful features to be eaily integrated into practically any platform

### Imgix Setup
- With Imgix, a source can be set up with, pointing directly to an S3 bucket
- Configure Imgix security credentials if needed
- From there we can integrate it easily with CraftCMS Imgix plugin or allow for custom integration for generating Imgix URLs
    - [https://plugins.craftcms.com/imager-x?craft5](https://plugins.craftcms.com/imager-x?craft5)
    - [https://github.com/sjelfull/craft3-imgix](https://github.com/sjelfull/craft3-imgix)
- From there, we can define transform presets (thumbnails, hero images, responsive sizes) and other resources suited to our development needs

## Alternative Solutions
- Cloudinary: Similar to Imgix with automatic optimization
- ImageKit, will also has its own CraftCMS plugin
     - [https://plugins.craftcms.com/imager-x-imagekit-transformer](https://plugins.craftcms.com/imager-x-imagekit-transformer)
- CloudFront + Lambda@Edge: AWS-native solution for dynamic image resizing
    - [https://plugins.craftcms.com/imager-x-aws-serverless-transformer?craft5](https://plugins.craftcms.com/imager-x-aws-serverless-transformer?craft5)
- CraftCMS has its own [native transforms feature](https://craftcms.com/docs/5.x/development/image-transforms.html) and works well, however, the downside is that it adds to the overall server load