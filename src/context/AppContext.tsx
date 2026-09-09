import {
  createContext,
  useEffect,
  useReducer,
} from "react";

interface User {
  name: string;
  role: "admin" | "user";
}

interface AppState {
  isAuthenticated: boolean;
  user: User | null;
  theme: "light" | "dark";
}

type AppAction =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" }
  | { type: "TOGGLE_THEME" };

const storedUser = localStorage.getItem("user");

const initialState: AppState = {
  isAuthenticated:
    localStorage.getItem("isAuthenticated") === "true",
  user: storedUser ? JSON.parse(storedUser) : null,
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
        user: null,
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

  useEffect(() => {
    if (state.isAuthenticated && state.user) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem(
        "user",
        JSON.stringify(state.user)
      );
    } else {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
    }
  }, [state.isAuthenticated, state.user]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;