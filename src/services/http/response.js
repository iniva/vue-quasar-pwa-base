const response = (httpResponse) => {
  const { data, status } = httpResponse;

  return {
    status,
    data,
    error: null,
  };
};

export default response;
