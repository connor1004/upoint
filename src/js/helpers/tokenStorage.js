/* eslint-disable import/prefer-default-export */
export const tokenStorage = {
  clearToken: () => window.localStorage.setItem('jwt', ''),
  setToken: token => window.localStorage.setItem('jwt', token),
  getToken: () => window.localStorage.getItem('jwt')
};
