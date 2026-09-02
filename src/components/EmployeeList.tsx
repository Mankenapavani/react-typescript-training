import type { Employee } from "../types";
import EmployeeCard from "./EmployeeCard";

interface EmployeeListProps {
  employees: Employee[];
  onDelete: (id: number) => void;
}

function EmployeeList({ employees, onDelete }: EmployeeListProps) {
  return (
    <div>
      <h2>Employee List</h2>

      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default EmployeeList;