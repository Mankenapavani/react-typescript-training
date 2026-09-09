import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Employee } from "../types";
import {
  updateEmployee,
  deleteEmployee,
} from "../services/employeeService";
import useFetch from "../hooks/useFetch";
import useDebounce from "../hooks/useDebounce";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import AppContext from "../context/AppContext";

function EmployeeManagement() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const searchInputRef = useRef<HTMLInputElement>(null);

  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  const { state } = context;
  const isAdmin = state.user?.role === "admin";

  const API_URL = import.meta.env.VITE_API_URL;

  const {
    data,
    loading,
    error,
  } = useFetch<Employee[]>(API_URL);

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (data) {
      setEmployees(data);
    }
  }, [data]);

  useEffect(() => {
    searchInputRef.current?.focus();
  }, []);

  const handleAddEmployee = useCallback(
    (employee: Employee) => {
      setEmployees((currentEmployees) => [
        ...currentEmployees,
        employee,
      ]);

      setSuccess("Employee added successfully!");
    },
    []
  );

  const handleUpdateEmployee = useCallback(
    async (employee: Employee) => {
      try {
        setSuccess("");

        const updatedEmployee = await updateEmployee(
          employee.id,
          {
            name: employee.name,
            email: employee.email,
            role: employee.role,
            active: employee.active,
          }
        );

        setEmployees((currentEmployees) =>
          currentEmployees.map((currentEmployee) =>
            currentEmployee.id === employee.id
              ? updatedEmployee
              : currentEmployee
          )
        );

        setSuccess("Employee updated successfully!");
      } catch (error) {
        setSuccess("");
      }
    },
    []
  );

  const handleDeleteEmployee = useCallback(
    async (id: number) => {
      try {
        setSuccess("");

        await deleteEmployee(id);

        setEmployees((currentEmployees) =>
          currentEmployees.filter(
            (employee) => employee.id !== id
          )
        );

        setSuccess("Employee deleted successfully!");
      } catch (error) {
        setSuccess("");
      }
    },
    []
  );

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) =>
      employee.name
        .toLowerCase()
        .includes(debouncedSearch.toLowerCase())
    );
  }, [employees, debouncedSearch]);

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
          ref={searchInputRef}
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
          {isAdmin && (
            <EmployeeForm
              onAddEmployee={handleAddEmployee}
            />
          )}

          {!isAdmin && (
            <p>
              You have view-only access to the employee list.
            </p>
          )}

          <div style={{ marginTop: "40px" }}>
            <EmployeeList
              employees={filteredEmployees}
              onDelete={
                isAdmin
                  ? handleDeleteEmployee
                  : undefined
              }
              onUpdate={
                isAdmin
                  ? handleUpdateEmployee
                  : undefined
              }
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeManagement;