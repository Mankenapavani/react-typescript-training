import type { Employee } from "../types";

const API_URL = import.meta.env.VITE_API_URL;
export const getEmployees = async (): Promise<Employee[]> => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  const data = await response.json();

  return data.map((employee: any) => ({
    id: employee.id,
    name: employee.name,
    email: employee.email,
    role: employee.company?.name || "Employee",
    active: true,
  }));
};

export const createEmployee = async (
  employee: Omit<Employee, "id">
): Promise<Employee> => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });

  if (!response.ok) {
    throw new Error("Failed to create employee");
  }

  return response.json();
};

export const updateEmployee = async (
  id: number,
  employee: Omit<Employee, "id">
): Promise<Employee> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });

  if (!response.ok) {
    throw new Error("Failed to update employee");
  }

  return response.json();
};

export const deleteEmployee = async (id: number): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete employee");
  }
};