type url = string;

export type API_GET_URLS = '/appointment/all';
export type API_POST_URLS = '/appointment' | `/appointment/${string}`;

export type API_URLS = API_GET_URLS | API_POST_URLS;

export type PAGES = API_URLS | url;
