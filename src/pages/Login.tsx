import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

function Login() {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] =
    useLocalStorage<boolean>("isAuthenticated", false);

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login Page</h1>

      <p>Welcome to the Employee Management Dashboard</p>

      <p>
        Status: {isAuthenticated ? "Logged in" : "Not logged in"}
      </p>

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;