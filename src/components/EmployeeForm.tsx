import { useState } from "react";
import type { Employee } from "../types";

interface EmployeeFormProps {
  onAddEmployee: (employee: Employee) => void;
}

function EmployeeForm({ onAddEmployee }: EmployeeFormProps) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const [active, setActive] = useState<boolean>(true);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newEmployee: Employee = {
      id: Date.now(),
      name,
      email,
      role,
      active,
    };

    onAddEmployee(newEmployee);

    setName("");
    setEmail("");
    setRole("");
    setActive(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>

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
        onChange={(event) => setActive(event.target.value === "Active")}
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;