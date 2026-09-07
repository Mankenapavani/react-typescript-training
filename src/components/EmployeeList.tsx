import type { Employee } from "../types";
import EmployeeCard from "./EmployeeCard";

interface EmployeeListProps {
  employees: Employee[];
  onDelete: (id: number) => void;
  onUpdate: (employee: Employee) => void;
}

function EmployeeList({
  employees,
  onDelete,
  onUpdate,
}: EmployeeListProps) {
  return (
    <div>
      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onDelete={onDelete}
              onUpdate={onUpdate}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default EmployeeList;