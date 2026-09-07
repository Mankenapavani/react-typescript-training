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
    <div
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1>Employee Management</h1>

      <p>
        Manage your employees, update their information,
        and view their details.
      </p>

      <div style={{ marginTop: "30px" }}>
        <input
          type="text"
          placeholder="Search employee"
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
          style={{
            width: "100%",
            maxWidth: "400px",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            fontSize: "16px",
          }}
        />
      </div>

      {loading && <p>Loading employees...</p>}

      {error && <p>{error}</p>}

      {success && <p>{success}</p>}

      {!loading && !error && (
        <div style={{ marginTop: "30px" }}>
          <EmployeeForm
            onAddEmployee={handleAddEmployee}
          />

          <div style={{ marginTop: "40px" }}>
            <EmployeeList
              employees={filteredEmployees}
              onDelete={handleDeleteEmployee}
              onUpdate={handleUpdateEmployee}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeManagement;