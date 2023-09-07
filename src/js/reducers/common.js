/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import Types from '../actions/types';

export const initialState = {
  auth: null,
  services: [],
  orders: []
};

const login = (state, action) => ({
  ...state,
  auth: action.auth
});

const logout = state => ({
  ...state,
  auth: null
});

const getServices = (state, action) => ({
  ...state,
  services: action.services
});

const getOrders = (state, action) => ({
  ...state,
  orders: action.orders
});

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      return login(state, action);
    case Types.LOGOUT:
      return logout(state, action);
    case Types.ACCOUNT_SERVICES_GET:
      return getServices(state, action);
    case Types.DASHBOARD_PAGE_LOADED:
      return getOrders(state, action);
    default:
      return state;
  }
};
