import HttpClient from './utils/HttpClient';

class ThemesService {
  httpClient: HttpClient;

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3333');
  }

  async listThemes() {
    return this.httpClient.get('/themes');
  }
}

export default new ThemesService();
