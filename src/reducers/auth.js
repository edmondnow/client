import { AUTH_USER, AUTH_ERROR } from '../actions/types';
//auth user means that we only care about getting the authenticated piece of state
//we dont care about sign-up or sign-in

const INITIAL_STATE = {
  authenticated: '',
  errorMessage: '' 
}

export default (state = INITIAL_STATE, action) => {

  switch(action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state
  }
}