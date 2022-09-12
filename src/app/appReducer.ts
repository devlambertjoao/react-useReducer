interface AppState {
  isLoading: boolean;
  hasError: boolean;
  message?: string;
}

interface AppAction {
  type: "REQUEST_START" | "REQUEST_END" | "REQUEST_ERROR";
  payload?: string;
}

const APP_INITIAL_STATE: AppState = {
  isLoading: false,
  hasError: false
}

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "REQUEST_START":
      return {
        ...state,
        hasError: false,
        isLoading: true
      };
    case "REQUEST_END":
      return {
        ...state,
        isLoading: false,
        hasError: false,
        message: action.payload
      };
    case "REQUEST_ERROR":
      return {
        ...state,
        isLoading: false,
        hasError: true
      };
    default:
      return state;
  }
}

export {
  APP_INITIAL_STATE,
  appReducer
}
