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
  'strapi::body',
  {
    name: 'strapi::compression',
    config: {
      br: false,
      gzip: true
    },
  },
];
