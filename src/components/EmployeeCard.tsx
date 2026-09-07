import { useState } from "react";
import { Link } from "react-router-dom";
import type { Employee } from "../types";

interface EmployeeCardProps {
  employee: Employee;
  onDelete: (id: number) => void;
  onUpdate: (employee: Employee) => void;
}

function EmployeeCard({
  employee,
  onDelete,
  onUpdate,
}: EmployeeCardProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [name, setName] = useState<string>(employee.name);
  const [email, setEmail] = useState<string>(employee.email);
  const [role, setRole] = useState<string>(employee.role);
  const [active, setActive] = useState<boolean>(employee.active);

  const handleUpdate = () => {
    const updatedEmployee: Employee = {
      id: employee.id,
      name,
      email,
      role,
      active,
    };

    onUpdate(updatedEmployee);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          type="text"
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

        <button onClick={handleUpdate}>Update</button>

        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </div>
    );
  }

  return (
    <div>
      <h3>
        <Link to={`/employees/${employee.id}`}>
          {employee.name}
        </Link>
      </h3>

      <p>Email: {employee.email}</p>

      <p>Role: {employee.role}</p>

      <p>
        Status: {employee.active ? "Active" : "Inactive"}
      </p>

      <button onClick={() => setIsEditing(true)}>
        Edit
      </button>

      <button onClick={() => onDelete(employee.id)}>
        Delete
      </button>
    </div>
  );
}

export default EmployeeCard;