import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Employee } from "../types";

function EmployeeDetails() {
  const { id } = useParams();
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadEmployee = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch employee");
        }

        const data = await response.json();

        const formattedEmployee: Employee = {
          id: data.id,
          name: data.name,
          email: data.email,
          role: data.company?.name || "Employee",
          active: true,
        };

        setEmployee(formattedEmployee);
      } catch (err) {
        setError("Failed to load employee details");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadEmployee();
    }
  }, [id]);

  if (loading) {
    return <p>Loading employee details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!employee) {
    return <p>Employee not found.</p>;
  }

  return (
    <div>
      <h1>Employee Details</h1>

      <p>
        <strong>ID:</strong> {employee.id}
      </p>

      <p>
        <strong>Name:</strong> {employee.name}
      </p>

      <p>
        <strong>Email:</strong> {employee.email}
      </p>

      <p>
        <strong>Role:</strong> {employee.role}
      </p>

      <p>
        <strong>Status:</strong> {employee.active ? "Active" : "Inactive"}
      </p>

      <Link to="/employees">← Back to Employees</Link>
    </div>
  );
}

export default EmployeeDetails;