import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios';
import { StatusCodes } from 'http-status-codes';

const BASE_URL = 'https://frontend-test-api.stk8s.66bit.ru/api/Employee';
const REQUEST_TIMEOUT = 5000;

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.NOT_FOUND]: true,
  [StatusCodes.INTERNAL_SERVER_ERROR]: true,
};

const shouldDisplayError = (response: AxiosResponse) => !!StatusCodeMapping[response.status];

const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = error.response.data;

        // processErrorHandle(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};

export default createApi;
