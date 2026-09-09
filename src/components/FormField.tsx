interface FormFieldProps {
  label: string;
  type: "text" | "email" | "password";
  value: string;
  placeholder?: string;
  error?: string;
  onChange: (value: string) => void;
}

function FormField({
  label,
  type,
  value,
  placeholder,
  error,
  onChange,
}: FormFieldProps) {
  return (
    <div>
      <label>
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />

      {error && <p>{error}</p>}
    </div>
  );
}

export default FormField;