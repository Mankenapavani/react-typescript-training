function Profile() {
  const user = {
    name: "Admin User",
    email: "admin@example.com",
    role: "Administrator",
    department: "Management",
  };

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
        <h2>{user.name}</h2>

        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Role:</strong> {user.role}
        </p>

        <p>
          <strong>Department:</strong> {user.department}
        </p>
      </div>
    </div>
  );
}

export default Profile;