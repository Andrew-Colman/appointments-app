import { HttpClientBase } from './http.base';
import { PAGES } from './http.types';

export const BASE_URL = process.env.ENDPOINT_URL;

class HttpClient extends HttpClientBase {
    public constructor(baseUrl: string) {
        super(baseUrl);
    }

    public get = (url: PAGES) => this.instance.get(url);

    //public getUsers = () => this.instance.get<User[]>('/users');

    //public getUser = (id: string) => this.instance.get<User>(`/users/${id}`);
}

const http = new HttpClient(BASE_URL);

export default http;
