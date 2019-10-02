import ExampleApi from 'services/http/exampleApi';
import response from 'services/http/response';
import errorResponse from 'services/http/errorResponse';

export default class ExampleService {
  constructor() {
    this.api = new ExampleApi();
  }

  async login(email, password) {
    try {
      const data = await this.api.login(email, password);

      return response(data);
    } catch (error) {
      return errorResponse(error);
    }
  }

  async getUserProfile(tokens) {
    try {
      const data = await this.api.getUserProfile(tokens);

      return response(data);
    } catch (error) {
      return errorResponse(error);
    }
  }
}
