import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

function Login() {
  const navigate = useNavigate();

  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const { state, dispatch } = context;

  const handleLogin = () => {
    dispatch({
      type: "LOGIN",
      payload: "Pavani",
    });

    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login Page</h1>

      <p>Welcome to the Employee Management Dashboard</p>

      <p>
        Status:{" "}
        {state.isAuthenticated
          ? "Logged in"
          : "Not logged in"}
      </p>

      <p>
        User: {state.user || "No user logged in"}
      </p>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;