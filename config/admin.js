module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '173869048d0b39363b54648eaa16f4e3'),
  },
  watchIgnoreFiles: [
    '**/config/sync/**',
  ],
});
