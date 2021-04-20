import appConfig from './constant';

export const config = appConfig;

interface BaseUrl {
  movie?: any;
}

const baseUrl: BaseUrl = {
  movie: {
    list: `${config.url.api}/movie-api/movie`,
    detail: `${config.url.api}/movie-api/movie/view`,
    createTicket: `${config.url.api}/movie-api/ticket/create`,
  },
};

export default baseUrl;
