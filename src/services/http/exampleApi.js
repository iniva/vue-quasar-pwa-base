import HTTP from '.';

const { EXAMPLE_API_URL } = process.env;

const getAuthorizationHeader = userAccessToken => ({ Authorization: `Bearer ${userAccessToken}` });

export default class ExampleApi extends HTTP {
  constructor() {
    const options = {
      baseURL: EXAMPLE_API_URL,
    };

    super(options);
  }

  async login(email, password) {
    const endpoint = 'login-endpoint';
    const options = {
      data: {
        login: email,
        password,
      },
    };

    return this.post(endpoint, options);
  }

  async getUserProfile(tokens) {
    const endpoint = 'user-profile-endpoint';
    const options = {
      headers: getAuthorizationHeader(tokens.access_token),
    };

    return this.get(endpoint, options);
  }
}
