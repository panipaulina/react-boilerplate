export const FETCH_USER_DATA = 'user/fetch_data';

export const updateUserData = (userData) => {
  return {
    type: FETCH_USER_DATA,
    payload: userData,
  };
};
