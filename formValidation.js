import { useState } from "react";

function FormValidation() {
  return (
    <div>
      <Header />
      <Form />
    </div>
  );
}

function Header() {
  return (
    <h1 style={{ display: "flex", justifyContent: "center" }}>Add your form</h1>
  );
}

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  function validateFields() {
    const newErrors = {};
    if (!firstName) newErrors.firstName = "First name is required.";
    if (!lastName) newErrors.lastName = "Last name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!password) newErrors.password = "Password is required.";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validateFields();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Add your First name :</label>
          <input
            type="text"
            placeholder="Firstname"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setErrors((prev) => ({ ...prev, firstName: "" }));
            }}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>{errors.firstName}</p>
          )}
        </div>
        <div>
          <label>Add your Last name :</label>
          <input
            type="text"
            placeholder="Lastname"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              setErrors((prev) => ({ ...prev, lastName: "" }));
            }}
          />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
        </div>
        <div>
          <label>Add your Email :</label>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors((prev) => ({ ...prev, email: "" }));
            }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div>
          <label>Create Password :</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prev) => ({ ...prev, password: "" }));
            }}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>
        <button type="submit">Submit Form</button>
      </form>
      <FormDetails fullName={`${firstName} ${lastName}`} email={email} />
    </div>
  );
}

function FormDetails({ fullName, email }) {
  return (
    <div>
      <h2>Full Name: {fullName}</h2>
      <h2>Email: {email}</h2>
    </div>
  );
}

export default FormValidation;
