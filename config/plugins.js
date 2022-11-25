module.exports = ({ env }) => ({
  // ...
  seo: {
    enabled: true,
  },
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: 'do4lpm3un', 
        api_key: '192295799214958', 
        api_secret: 'vTdJJ_HPN2QyOE0bLEoWCyiKBK4' 
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
