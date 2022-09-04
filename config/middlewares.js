module.exports = ({ env }) => {
  let connectSrc = ["'self'", 'https:']
  let imgSrc = ["'self'", 'data:', 'blob:', 'res.cloudinary.com']
  let mediatSrc = ["'self'", 'data:', 'blob:', 'res.cloudinary.com']

  if (env('NODE_ENV') === 'development') {
    connectSrc = ["'self'", 'https:', 'http:']
    imgSrc = ["'self'", 'data:', 'blob:', 'res.cloudinary.com', 'http:']
    mediatSrc = ["'self'", 'data:', 'blob:', 'res.cloudinary.com', 'http:']
  }

  return [
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': connectSrc,
            'img-src': imgSrc,
            'media-src': mediatSrc,
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
  ]
}