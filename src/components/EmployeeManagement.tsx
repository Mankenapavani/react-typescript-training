import { useState } from "react";
import type { Employee } from "../types";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

function EmployeeManagement() {
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      name: "Ravi",
      email: "ravi@example.com",
      role: "Frontend Developer",
      active: true,
    },
    {
      id: 2,
      name: "Priya",
      email: "priya@example.com",
      role: "UI Designer",
      active: false,
    },
  ]);

  const [search, setSearch] = useState<string>("");

  const handleAddEmployee = (employee: Employee) => {
    setEmployees((currentEmployees) => [...currentEmployees, employee]);
  };

  const handleDeleteEmployee = (id: number) => {
    setEmployees((currentEmployees) =>
      currentEmployees.filter((employee) => employee.id !== id)
    );
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Employee Management</h1>

      <input
        type="text"
        placeholder="Search employee"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <EmployeeForm onAddEmployee={handleAddEmployee} />

      <EmployeeList
        employees={filteredEmployees}
        onDelete={handleDeleteEmployee}
      />
    </div>
  );
}

export default EmployeeManagement;