import { useContext, useEffect, useState } from "react";
import { getEmployees } from "../services/employeeService";
import type { Employee } from "../types";
import AppContext from "../context/AppContext";

function Dashboard() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const { state } = context;

  useEffect(() => {
    const loadEmployees = async () => {
      try {
        const data = await getEmployees();
        setEmployees(data);
      } catch (error) {
        setError("Failed to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  const totalEmployees = employees.length;

  const activeEmployees = employees.filter(
    (employee) => employee.active
  ).length;

  const inactiveEmployees = employees.filter(
    (employee) => !employee.active
  ).length;

  if (loading) {
    return <p>Loading dashboard...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1>Dashboard</h1>

      <p>Welcome to the Employee Management Dashboard.</p>

      <p>
        Welcome,{" "}
        <strong>{state.user?.name || "Guest"}</strong>!
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "24px",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "25px",
            textAlign: "center",
          }}
        >
          <h2>Total Employees</h2>
          <p
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              margin: "10px 0 0",
            }}
          >
            {totalEmployees}
          </p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "25px",
            textAlign: "center",
          }}
        >
          <h2>Active Employees</h2>
          <p
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              margin: "10px 0 0",
            }}
          >
            {activeEmployees}
          </p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "25px",
            textAlign: "center",
          }}
        >
          <h2>Inactive Employees</h2>
          <p
            style={{
              fontSize: "36px",
              fontWeight: "bold",
              margin: "10px 0 0",
            }}
          >
            {inactiveEmployees}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;