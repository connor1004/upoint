import Types from './types';
import Api from '../apis/app';

export const login = auth => (
  (dispatch) => {
    Api.setAuth(auth);
    return dispatch({
      type: Types.LOGIN, auth
    });
  }
);

export const logout = () => (
  (dispatch) => {
    Api.setAuth(null);
    return dispatch({
      type: Types.LOGOUT
    });
  }
);

export const getServices = services => (
  dispatch => dispatch({
    type: Types.ACCOUNT_SERVICES_GET,
    services
  })
);

export const getOrders = orders => (
  dispatch => dispatch({
    type: Types.DASHBOARD_PAGE_LOADED,
    orders
  })
);
