module.exports = ({ env }) => ({
  host: env('pactice-strapi-cms.herokuapp.com', '0.0.0.0'),
  port: env.int('PORT', 1337),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS', ["testKey1", "testKey2"]),
  },
});
