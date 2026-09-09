import { useContext, useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import AppContext from "../context/AppContext";
import FormField from "../components/FormField";
import type { LoginFormData } from "../types/forms";

function Login() {
  const navigate = useNavigate();

  const context = useContext(AppContext);
  if (!context) {
    return null;
  }

  const { dispatch } = context;

  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<
    Partial<LoginFormData>
  >({});

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (
    field: keyof LoginFormData,
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
    const newErrors: Partial<LoginFormData> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters.";
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

      // Demo authentication.
      // A real application would send these credentials
      // to the backend and receive authentication tokens.
      await new Promise((resolve) =>
        setTimeout(resolve, 800)
      );

      dispatch({
        type: "LOGIN",
        payload: {
          name: "Pavani",
          role: "admin",
        },
      });

      navigate("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "60px auto",
        padding: "20px",
      }}
    >
      <h1>Login Page</h1>

      <p>
        Login to access the Employee Management Dashboard.
      </p>

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

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;