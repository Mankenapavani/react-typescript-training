import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <nav>
      <button onClick={() => navigate("/dashboard")}>Dashboard</button>
      <button onClick={() => navigate("/employees")}>Employees</button>
      <button onClick={() => navigate("/profile")}>Profile</button>

      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;