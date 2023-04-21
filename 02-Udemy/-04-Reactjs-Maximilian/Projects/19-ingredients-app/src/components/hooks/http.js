import { useCallback, useReducer } from 'react';

const initalState = {
  loading: false,
  error: null,
  data: null,
  extra: null,
  identifier: null,
};
const httpReducer = (httpState, action) => {
  switch (action.type) {
    case 'SEND':
      return {
        loading: true,
        error: null,
        data: null,
        extra: null,
        identifier: action.identifier,
      };
    case 'RESPONSE':
      return {
        ...httpState,
        loading: false,
        data: action.data,
        extra: action.extra,
      };
    case 'ERROR':
      return { loading: false, error: action.errorMessage };
    case 'CLEAR':
      return initalState;
    default:
      throw new Error('Should not get there!');
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initalState);

  const clear = useCallback(() => dispatchHttp({ type: 'CLEAR' }), []);

  const sendRequest = useCallback(
    (url, method, body, reqExtra, reqIdentifier) => {
      dispatchHttp({ type: 'SEND', identifier: reqIdentifier });
      fetch(url, {
        method: method,
        body: body,
        'Content-Type': 'application/json',
      })
        .then((res) => res.json())
        .then((resData) => {
          dispatchHttp({ type: 'RESPONSE', data: resData, extra: reqExtra });
        })
        .catch((err) => {
          dispatchHttp({ type: 'ERROR', errorMessage: 'Something Went Wrong' });
        });
    },
    []
  );

  return {
    isLoading: httpState.loading,
    error: httpState.error,
    data: httpState.data,
    sendRequest: sendRequest,
    reqExtra: httpState.extra,
    reqIdentifier: httpState.identifier,
    clear: clear,
  };
};

export default useHttp;
