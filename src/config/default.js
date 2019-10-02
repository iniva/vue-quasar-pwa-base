import { APP_VERSION } from 'constants/app';

const config = {
  app: {
    version: APP_VERSION,
  },
  http: {
    debug: {
      request: false,
      response: false,
    },
  },
};

export default config;
