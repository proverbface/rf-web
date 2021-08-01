export default {
  isLocal: process.env.VUE_APP_IS_LOCAL === '1',
  apiUrlRest: process.env.VUE_APP_apiUrlRest,
  gcpPublicBucketUri: process.env.VUE_APP_gcpPublicBucketUri,
};
