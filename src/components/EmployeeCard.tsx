import type { Employee } from "../types";

interface EmployeeCardProps {
  employee: Employee;
  onDelete: (id: number) => void;
}

function EmployeeCard({ employee, onDelete }: EmployeeCardProps) {
  return (
    <div>
      <h3>{employee.name}</h3>
      <p>Email: {employee.email}</p>
      <p>Role: {employee.role}</p>
      <p>Status: {employee.active ? "Active" : "Inactive"}</p>

      <button onClick={() => onDelete(employee.id)}>
        Delete
      </button>
    </div>
  );
}

export default EmployeeCard;