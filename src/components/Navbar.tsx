import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

function Navbar() {
  const navigate = useNavigate();

  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const { state, dispatch } = context;

  const handleLogout = () => {
    dispatch({
      type: "LOGOUT",
    });

    navigate("/login");
  };

  const handleThemeChange = () => {
    dispatch({
      type: "TOGGLE_THEME",
    });
  };

  return (
    <nav>
      <button onClick={() => navigate("/dashboard")}>
        Dashboard
      </button>

      <button onClick={() => navigate("/employees")}>
        Employees
      </button>

      <button onClick={() => navigate("/profile")}>
        Profile
      </button>

      <button onClick={handleThemeChange}>
        {state.theme === "light"
          ? "Dark Mode"
          : "Light Mode"}
      </button>

      <button onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;