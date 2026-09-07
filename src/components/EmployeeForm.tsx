import { useState } from "react";
import type { FormEvent } from "react";
import type { Employee } from "../types";
import { createEmployee } from "../services/employeeService";

interface EmployeeFormProps {
  onAddEmployee: (employee: Employee) => void;
}

function EmployeeForm({ onAddEmployee }: EmployeeFormProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [active, setActive] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedRole = role.trim();

    if (!trimmedName || !trimmedEmail || !trimmedRole) {
      setError("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const newEmployee = await createEmployee({
        name: trimmedName,
        email: trimmedEmail,
        role: trimmedRole,
        active,
      });

      onAddEmployee(newEmployee);

      setName("");
      setEmail("");
      setRole("");
      setActive(true);
    } catch (error) {
      setError("Failed to add employee.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        background: "#fff",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "25px",
      }}
    >
      <h2>Add Employee</h2>

      {error && (
        <p style={{ marginBottom: "15px" }}>
          {error}
        </p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          style={{
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          style={{
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />

        <input
          type="text"
          placeholder="Role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
          style={{
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        />

        <select
          value={active ? "Active" : "Inactive"}
          onChange={(event) =>
            setActive(event.target.value === "Active")
          }
          style={{
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          border: "none",
          borderRadius: "8px",
        }}
      >
        {loading ? "Adding..." : "Add Employee"}
      </button>
    </form>
  );
}

export default EmployeeForm;