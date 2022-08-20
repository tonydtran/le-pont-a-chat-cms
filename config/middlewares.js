module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::compression',
    config: {
      br: false,
      gzip: true
    },
  },
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '10mb',
    },
  }
];
