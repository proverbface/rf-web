export default {
  isLocal: process.env.VUE_APP_IS_LOCAL === '1',
  apiUrlRest: process.env.VUE_APP_apiUrlRest,
  itemApiUrl: 'http://127.0.0.1:4000/items',
  gcpPublicBucketUri: process.env.VUE_APP_gcpPublicBucketUri,
};
