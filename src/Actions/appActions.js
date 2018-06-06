import { GET_APP_DETAILS } from '../Constants';

export function getAppDetails() {
  return dispatch => {
    dispatch({ type: `${GET_APP_DETAILS}_PENDING` });
    apiCallDemo().then(response => {
      dispatch({ type: `${GET_APP_DETAILS}_FULFILLED` });
    });
  };
}

const apiCallDemo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};
