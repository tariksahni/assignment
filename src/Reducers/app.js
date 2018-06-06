import { GET_APP_DETAILS, SITE_NAME } from '../Constants';

export const app = (state = {}, action) => {
  switch (action.type) {
    case `${GET_APP_DETAILS}_FULFILLED`:
      return {
        name: SITE_NAME
      };
    default:
      return state;
  }
};
