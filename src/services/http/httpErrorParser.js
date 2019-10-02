const httpErrorParser = (error) => {
  const types = {
    general: {
      type: 'general',
      description: 'Something happened in setting up the request that triggered an Error',
    },
    request: {
      type: 'request',
      description: 'The request was made but no response was received',
    },
    response: {
      type: 'response',
      description: 'The request was made and the server responded with a status code that falls out of the range of 2xx',
    },
  };

  const parsed = {
    classification: types.general,
    message: error.message,
    config: error.config,
    fullError: error,
  };

  if (error.response) {
    const { data, status, headers } = error.response;

    parsed.classification = types.response;
    parsed.status = status;
    parsed.headers = headers;
    parsed.data = data;
  } else if (error.request) {
    parsed.classification = types.request;
    parsed.request = error.request;
  }

  return parsed;
};

export default httpErrorParser;
