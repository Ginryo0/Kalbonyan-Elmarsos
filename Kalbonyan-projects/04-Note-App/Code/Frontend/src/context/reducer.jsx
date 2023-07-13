/* eslint-disable no-unused-vars */
import {
  DANGER_ALERT,
  SUCCESS_ALERT,
  CLEAR_ALERT,
  SIGN_USER,
  SWITCH_LANG,
  SWITCH_THEME,
  LOG_OUT,
  UPDATE_USER,
  START_LOADING,
  FINISH_LOADING,
} from './actions';

const initialAlert = {
  showAlert: false,
  alertText: '',
  alertType: '',
};
const reducer = (state, action) => {
  if (action.type == DANGER_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertText: action.payload.message || 'Please provide valid values!',
      alertType: 'danger',
    };
  }

  if (action.type == SUCCESS_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertText: action.payload.message,
      alertType: 'success',
    };
  }

  if (action.type == CLEAR_ALERT) {
    return {
      ...state,
      ...initialAlert,
    };
  }

  if (action.type == SIGN_USER) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.token,
    };
  }

  if (action.type == SWITCH_LANG) {
    return {
      ...state,
      lang: state.lang == 'en' ? 'ar' : 'en',
    };
  }

  if (action.type == SWITCH_THEME) {
    return {
      ...state,
      theme: state.theme == 'light' ? 'dark' : 'light',
    };
  }

  if (action.type == LOG_OUT) {
    return {
      ...state,
      user: null,
      token: null,
    };
  }

  if (action.type == UPDATE_USER) {
    return {
      ...state,
      user: action.payload.user,
    };
  }

  if (action.type == START_LOADING) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type == FINISH_LOADING) {
    return {
      ...state,
      isLoading: false,
    };
  }

  return;
};

export default reducer;
