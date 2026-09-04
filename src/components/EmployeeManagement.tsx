import { useEffect, useState } from "react";
import type { Employee } from "../types";
import {
  getEmployees,
  updateEmployee,
  deleteEmployee,
} from "../services/employeeService";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";

function EmployeeManagement() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  // GET API
  useEffect(() => {
    const loadEmployees = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getEmployees();

        setEmployees(data);
      } catch (error) {
        setError("Failed to load employees.");
      } finally {
        setLoading(false);
      }
    };

    loadEmployees();
  }, []);

  // POST API
  const handleAddEmployee = (employee: Employee) => {
    setEmployees((currentEmployees) => [
      ...currentEmployees,
      employee,
    ]);

    setSuccess("Employee added successfully!");
  };

  // PUT API
  const handleUpdateEmployee = async (employee: Employee) => {
    try {
      setError("");
      setSuccess("");

      const updatedEmployee = await updateEmployee(employee.id, {
        name: employee.name,
        email: employee.email,
        role: employee.role,
        active: employee.active,
      });

      setEmployees((currentEmployees) =>
        currentEmployees.map((currentEmployee) =>
          currentEmployee.id === employee.id
            ? updatedEmployee
            : currentEmployee
        )
      );

      setSuccess("Employee updated successfully!");
    } catch (error) {
      setError("Failed to update employee.");
    }
  };

  // DELETE API
  const handleDeleteEmployee = async (id: number) => {
    try {
      setError("");
      setSuccess("");

      await deleteEmployee(id);

      setEmployees((currentEmployees) =>
        currentEmployees.filter(
          (employee) => employee.id !== id
        )
      );

      setSuccess("Employee deleted successfully!");
    } catch (error) {
      setError("Failed to delete employee.");
    }
  };

  // SEARCH
  const filteredEmployees = employees.filter((employee) =>
    employee.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Employee Management</h1>

      <input
        type="text"
        placeholder="Search employee"
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
      />

      {loading && <p>Loading employees...</p>}

      {error && <p>{error}</p>}

      {success && <p>{success}</p>}

      {!loading && !error && (
        <>
          <EmployeeForm
            onAddEmployee={handleAddEmployee}
          />

          <EmployeeList
            employees={filteredEmployees}
            onDelete={handleDeleteEmployee}
            onUpdate={handleUpdateEmployee}
          />
        </>
      )}
    </div>
  );
}

export default EmployeeManagement;