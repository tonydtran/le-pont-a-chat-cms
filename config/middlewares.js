module.exports = [
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:', 'http:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com', 'http:'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com', 'http:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  'strapi::body',
  {
    name: 'strapi::compression',
    config: {
      br: false,
      gzip: true
    },
  },
];
