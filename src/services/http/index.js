import axios from 'axios';
import { merge } from 'lodash';

import Loader from 'helpers/loader';
import defaultConfig from 'config/default';
import httpErrrorParser from './httpErrorParser';

const { log } = console;
const config = new Loader(defaultConfig);

const initInterceptors = (instance) => {
  // Request Interceptor
  instance.interceptors.request.use((requestConfig) => {
    if (config.get('http.debug.request')) {
      log('Request Configuration');
      log(requestConfig);
    }

    return requestConfig;
  }, (error) => {
    log('Error in Request');
    return Promise.reject(error);
  });

  // Response Interceptor
  instance.interceptors.response.use((responseConfig) => {
    if (config.get('http.debug.response')) {
      log('Response Configuration');
      log(responseConfig);
    }

    return responseConfig;
  }, (error) => {
    log('Error in Response');
    return Promise.reject(error);
  });
};

export default class HTTP {
  constructor(options = {}) {
    const defaults = {
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 5000,
    };
    const settings = merge(defaults, options);

    this.instance = axios.create(settings);
    initInterceptors(this.instance);
  }

  async request(method, endpoint, options) {
    let settings = {
      method,
      url: endpoint,
    };

    settings = merge(settings, options);

    return this.instance(settings);
  }

  async get(endpoint, options = {}) {
    return this.request('get', endpoint, options);
  }

  async post(endpoint, options = {}) {
    return this.request('post', endpoint, options);
  }

  async put(endpoint, options = {}) {
    return this.request('put', endpoint, options);
  }

  async delete(endpoint, options = {}) {
    return this.request('delete', endpoint, options);
  }

  static getParsedError(error) {
    return httpErrrorParser(error);
  }

  static logError(error, options = {}) {
    const settings = {
      logConfig: false,
      logFullError: false,
      ...options,
    };

    const details = httpErrrorParser(error);

    log({ classification: details.classification });

    switch (details.classification.type) {
      case 'request':
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        log({ request: details.request });
        break;

      case 'response':
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        log({ status: details.status });
        log({ headers: details.headers });
        log(details.data);
        break;

      default:
        // Something happened in setting up the request that triggered an Error
        log({ message: details.message });
    }

    if (settings.logConfig) {
      log({ config: details.config });
    }

    if (settings.logFullError) {
      log({ fullError: details.fullError });
    }
  }
}
