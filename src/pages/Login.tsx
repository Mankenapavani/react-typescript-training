import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <p>Welcome to the Employee Management Dashboard</p>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;