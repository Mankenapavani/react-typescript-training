import { useState } from "react";
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

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (!name || !email || !role) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const newEmployee = await createEmployee({
        name,
        email,
        role,
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
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>

      {error && <p>{error}</p>}

      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(event) => setRole(event.target.value)}
      />

      <select
        value={active ? "Active" : "Inactive"}
        onChange={(event) =>
          setActive(event.target.value === "Active")
        }
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Employee"}
      </button>
    </form>
  );
}

export default EmployeeForm;