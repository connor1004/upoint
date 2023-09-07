/* eslint-disable no-param-reassign */
import { logout } from '../actions/common';
import Api from '../apis/app';

const fetchInterceptor = (fetchContext = global) => {
  const _fetch = fetchContext.fetch;

  return createStore => (reducer, initialState, enhancer) => {
    const store = createStore(reducer, initialState, enhancer);

    fetchContext.fetch = async (url, options) => {
      if (options) {
        options.headers = {
          ...(options.headers || {}),
          ...Api.getAuthHeader()
        };
      }
      const res = await _fetch(url, options);
      switch (res.status) {
        case 401:
          await logout()(store.dispatch);
          break;
        default:
          break;
      }
      return res;
    };

    return store;
  };
};

export default fetchInterceptor;
