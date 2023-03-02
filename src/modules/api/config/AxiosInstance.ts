import axios from 'axios';
import { TokenRefreshRequest, applyAuthTokenInterceptor } from 'react-native-axios-jwt';
import { API_URL } from 'global/config';
import { API_ROUTES } from 'global/constants';

// 1. Create an axios instance that you wish to apply the interceptor to
export const axiosInstance = axios.create({
  baseURL: 'https://sevenshop.herokuapp.com',
  headers: {
    // Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// 2. Define token refresh function.
const requestRefresh: TokenRefreshRequest = async (refreshToken: string): Promise<string> => {
  // Important! Do NOT use the axios instance that you supplied to applyAuthTokenInterceptor
  // because this will result in an infinite loop when trying to refresh the token.
  // Use the global axios client or a different instance
  const response = await axios.post(`${API_URL}${API_ROUTES.refresh_token}`, {
    token: refreshToken,
  });

  return response.data.access_token;
};

// 3. Add interceptor to your axios instance
applyAuthTokenInterceptor(axiosInstance, {
  requestRefresh,
  header: 'Authorization', // header name
  headerPrefix: 'Bearer ', // header value prefix
});
