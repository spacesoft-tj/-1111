import { dispatchTypes } from '../../utils';

const initialUser = {};

// REDUCER FOR REGISTER FLOW
export const roomActiveReducer = (state = { initialUser }, action) => {
  switch (action.type) {
    case dispatchTypes.setRoomActive:
      return action.value;
    case dispatchTypes.setUserLogout:
      return {
        initialUser,
      };
    default:
      return state;
  }
};
