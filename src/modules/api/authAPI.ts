import { setAuthTokens } from 'react-native-axios-jwt';
import { API_ROUTES } from 'global/constants';
import { TypeReturn } from 'interfaces/APIResponse';
import {
  RefreshTokenPayload,
  SignInPayload,
  GetMeSuccessData,
  GetProductData,
} from 'interfaces/Auth';
import { axiosInstance } from './config/AxiosInstance';

const authAPI = {
  async login(payload: SignInPayload): TypeReturn<GetMeSuccessData> {
    const response = await axiosInstance.post(API_ROUTES.login, payload);
    try {
      await setAuthTokens({
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token,
      });
    } catch (error) {
      console.error(error);
    }
    return response;
  },
  me() {
    return axiosInstance.get(API_ROUTES.me);
  },
  logout(payload: RefreshTokenPayload): TypeReturn<null> {
    return axiosInstance.post(API_ROUTES.logout, payload);
  },

  async getProduct(): TypeReturn<GetProductData> {
    const result = await axiosInstance.get(API_ROUTES.getProducts);
    return result;
  },
};

export default authAPI;
