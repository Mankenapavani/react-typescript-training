import type { Employee } from "../types";

const API_URL = import.meta.env.VITE_API_URL;

const getAuthHeaders = (): HeadersInit => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return {};
  }

  return {
    Authorization: `Bearer ${accessToken}`,
  };
};

const getApiErrorMessage = async (
  response: Response,
  fallbackMessage: string
): Promise<string> => {
  try {
    const data = await response.json();

    if (data?.message) {
      return data.message;
    }

    if (data?.error) {
      return data.error;
    }
  } catch {
    // Response does not contain JSON.
  }

  return fallbackMessage;
};

export const getEmployees = async (): Promise<Employee[]> => {
  const response = await fetch(API_URL, {
    headers: {
      ...getAuthHeaders(),
    },
  });

  if (!response.ok) {
    const message = await getApiErrorMessage(
      response,
      "Failed to fetch employees."
    );

    throw new Error(message);
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
      ...getAuthHeaders(),
    },
    body: JSON.stringify(employee),
  });

  if (!response.ok) {
    const message = await getApiErrorMessage(
      response,
      "Failed to create employee."
    );

    throw new Error(message);
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
      ...getAuthHeaders(),
    },
    body: JSON.stringify(employee),
  });

  if (!response.ok) {
    const message = await getApiErrorMessage(
      response,
      "Failed to update employee."
    );

    throw new Error(message);
  }

  return response.json();
};

export const deleteEmployee = async (
  id: number
): Promise<void> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeaders(),
    },
  });

  if (!response.ok) {
    const message = await getApiErrorMessage(
      response,
      "Failed to delete employee."
    );

    throw new Error(message);
  }
};