import { version } from 'app/package.json';

const { APP_NAME } = process.env;
const APP_VERSION = version;

export {
  APP_NAME,
  APP_VERSION,
};
