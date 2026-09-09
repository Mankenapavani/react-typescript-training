import {
  createContext,
  useReducer,
} from "react";

interface AppState {
  isAuthenticated: boolean;
  user: string;
  theme: "light" | "dark";
}

type AppAction =
  | { type: "LOGIN"; payload: string }
  | { type: "LOGOUT" }
  | { type: "TOGGLE_THEME" };

const initialState: AppState = {
  isAuthenticated: false,
  user: "",
  theme: "light",
};

function appReducer(
  state: AppState,
  action: AppAction
): AppState {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: "",
      };

    case "TOGGLE_THEME":
      return {
        ...state,
        theme:
          state.theme === "light"
            ? "dark"
            : "light",
      };

    default:
      return state;
  }
}

interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const AppContext = createContext<
  AppContextType | undefined
>(undefined);

export function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(
    appReducer,
    initialState
  );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;