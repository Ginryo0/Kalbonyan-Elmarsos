/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer, useEffect } from 'react';
import {
  CLEAR_ALERT,
  DANGER_ALERT,
  SUCCESS_ALERT,
  SIGN_USER,
  SWITCH_LANG,
  SWITCH_THEME,
  LOG_OUT,
  UPDATE_USER,
  START_LOADING,
  FINISH_LOADING,
} from './actions';

import reducer from './reducer';
const AppCtx = createContext();

const initialState = {
  // UI
  theme: localStorage.getItem('notes-theme') || 'light',
  lang: localStorage.getItem('notes-lang') || 'en',
  // Auth
  user: JSON.parse(localStorage.getItem('notes-user')) || null,
  token: JSON.parse(localStorage.getItem('notes-token')) || null,
  // Alert
  showAlert: false,
  alertText: '',
  alertType: '',
  // Loading
  isLoading: false,
};

const AppCtxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const timer = state.showAlert
      ? setTimeout(() => {
          state.showAlert && dispatch({ type: CLEAR_ALERT });
        }, 1500)
      : 0;

    return () => {
      // clear previous timeout
      state.showAlert && clearTimeout(timer);
    };
  }, [state]);

  const displaySuccessAlert = (msg) => {
    dispatch({
      type: SUCCESS_ALERT,
      payload: {
        message: msg,
      },
    });
  };

  // danger Alert
  const displayDangerAlert = (error) => {
    dispatch({
      type: DANGER_ALERT,
      payload: {
        message: error,
      },
    });
  };

  const signUser = ({ user, token }) => {
    localStorage.setItem('notes-user', JSON.stringify(user));
    localStorage.setItem('notes-token', JSON.stringify(token));

    dispatch({
      type: SIGN_USER,
      payload: {
        user,
        token,
      },
    });
  };

  const switchLang = () => {
    localStorage.setItem('notes-lang', state.lang == 'en' ? 'ar' : 'en');
    dispatch({
      type: SWITCH_LANG,
    });
  };

  const switchTheme = () => {
    localStorage.setItem(
      'notes-theme',
      state.theme == 'dark' ? 'light' : 'dark'
    );
    dispatch({
      type: SWITCH_THEME,
    });
  };

  const logOut = () => {
    localStorage.removeItem('notes-user');
    localStorage.removeItem('notes-token');
    dispatch({
      type: LOG_OUT,
    });
  };

  const updateUser = (user) => {
    localStorage.setItem('notes-user', JSON.stringify(user));

    dispatch({
      type: UPDATE_USER,
      payload: {
        user,
      },
    });
  };

  const startLoading = () => {
    dispatch({
      type: START_LOADING,
    });
  };

  const finishLoading = () => {
    dispatch({
      type: FINISH_LOADING,
    });
  };

  return (
    <AppCtx.Provider
      value={{
        ...state,
        displayDangerAlert,
        displaySuccessAlert,
        signUser,
        switchLang,
        switchTheme,
        logOut,
        updateUser,
        startLoading,
        finishLoading,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};

const useAppCtx = () => {
  return useContext(AppCtx);
};
export default AppCtxProvider;
export { useAppCtx };
