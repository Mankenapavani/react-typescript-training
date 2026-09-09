import { useState } from "react";
import type { FormEvent } from "react";

import type { Employee } from "../types";
import type { EmployeeFormData } from "../types/forms";

import { createEmployee } from "../services/employeeService";
import FormField from "./FormField";

interface EmployeeFormProps {
  onAddEmployee: (employee: Employee) => void;
}

function EmployeeForm({ onAddEmployee }: EmployeeFormProps) {
  const [formData, setFormData] = useState<EmployeeFormData>({
    name: "",
    email: "",
    role: "",
    active: true,
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (
    field: keyof EmployeeFormData,
    value: string | boolean
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setError("");
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedRole = formData.role.trim();

    if (!trimmedName || !trimmedEmail || !trimmedRole) {
      setError("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const newEmployee = await createEmployee({
        name: trimmedName,
        email: trimmedEmail,
        role: trimmedRole,
        active: formData.active,
      });

      onAddEmployee(newEmployee);

      setFormData({
        name: "",
        email: "",
        role: "",
        active: true,
      });
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="Name"
        type="text"
        value={formData.name}
        placeholder="Enter employee name"
        onChange={(value) => handleChange("name", value)}
      />

      <FormField
        label="Email"
        type="email"
        value={formData.email}
        placeholder="Enter employee email"
        onChange={(value) => handleChange("email", value)}
      />

      <FormField
        label="Role"
        type="text"
        value={formData.role}
        placeholder="Enter employee role"
        onChange={(value) => handleChange("role", value)}
      />

      <div>
        <label>
          <input
            type="checkbox"
            checked={formData.active}
            onChange={(event) =>
              handleChange("active", event.target.checked)
            }
          />
          {" "}Active
        </label>
      </div>

      {error && <p>{error}</p>}

      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Employee"}
      </button>
    </form>
  );
}

export default EmployeeForm;