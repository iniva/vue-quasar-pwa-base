import httpErrorParser from './httpErrorParser';

const errorResponse = (httpError) => {
  const { status = 500, data: error } = httpErrorParser(httpError);

  return {
    status,
    data: null,
    error,
  };
};

export default errorResponse;
