import { useContext } from "react";
import AppContext from "../context/AppContext";
import RegisterForm from "../components/RegisterForm";

function Profile() {
  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const { state } = context;

  const user = state.user;

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1>Profile</h1>

      <p>Manage your profile information.</p>

      <div
        style={{
          marginTop: "30px",
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "30px",
        }}
      >
        <h2>{user?.name || "No user logged in"}</h2>

        <p>
          <strong>Role:</strong>{" "}
          {user?.role || "No role assigned"}
        </p>

        {user?.role === "admin" && (
          <div style={{ marginTop: "20px" }}>
            <h3>Admin Access</h3>
            <p>You have administrator permissions.</p>
            <button>Manage Employees</button>
          </div>
        )}
      </div>

      <div
        style={{
          marginTop: "40px",
          border: "1px solid #ddd",
          borderRadius: "12px",
          padding: "30px",
        }}
      >
        <h2>Create Account</h2>
        <p>Test form validation and password confirmation.</p>

        <RegisterForm />
      </div>
    </div>
  );
}

export default Profile;