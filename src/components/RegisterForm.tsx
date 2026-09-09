import { useState } from "react";
import type { FormEvent } from "react";

import FormField from "./FormField";
import type { RegisterFormData } from "../types/forms";

function RegisterForm() {
  const [formData, setFormData] = useState<RegisterFormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<
    Partial<RegisterFormData>
  >({});

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    field: keyof RegisterFormData,
    value: string
  ) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [field]: "",
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<RegisterFormData> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(formData.email.trim())) {
        newErrors.email =
          "Please enter a valid email address.";
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword =
        "Please confirm your password.";
    } else if (
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword =
        "Passwords do not match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (loading) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      await new Promise((resolve) =>
        setTimeout(resolve, 800)
      );

      alert("Registration successful!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="Email"
        type="email"
        value={formData.email}
        placeholder="Enter your email"
        error={errors.email}
        onChange={(value) =>
          handleChange("email", value)
        }
      />

      <FormField
        label="Password"
        type="password"
        value={formData.password}
        placeholder="Enter your password"
        error={errors.password}
        onChange={(value) =>
          handleChange("password", value)
        }
      />

      <FormField
        label="Confirm Password"
        type="password"
        value={formData.confirmPassword}
        placeholder="Confirm your password"
        error={errors.confirmPassword}
        onChange={(value) =>
          handleChange("confirmPassword", value)
        }
      />

      <button
        type="submit"
        disabled={loading}
      >
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
}

export default RegisterForm;