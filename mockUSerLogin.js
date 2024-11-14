import { useEffect, useState } from "react";

function MockuserLogin() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  const [error, setError] = useState("");

  function handleLoginLogout() {
    setStatus((prevState) => !prevState);
  }

  function handleForm(e) {
    e.preventDefault();

    mockLogin(email, password)
      .then((data) => {
        setUser(data);
        setStatus(true);
        setError("");
      })
      .catch((error) => {
        setError(error);
        setStatus(false);
      });
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  useEffect(() => {
    if (!status) {
      setEmail("");
      setPassword("");
    }
  }, [status]);

  function mockLogin(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "john.doe@example.com" && password === "abc123") {
          resolve({
            name: "John Doe",
            email: "tjohn.doe@example.com",
            token: "abc123",
          });
        } else {
          reject("Invalid Username or password");
        }
      });
    });
  }

  return (
    <div>
      <Header />
      <Form
        status={status}
        handleLoginLogout={handleLoginLogout}
        handleForm={handleForm}
        email={email}
        password={password}
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        user={user}
        error={error}
      />
    </div>
  );
}

function Header() {
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Mock User Login Test
      </h1>
      <p>john.doe@example.com</p>
      <p>abc123</p>
    </>
  );
}

function Form({
  status,
  handleLoginLogout,
  handleForm,
  handleEmailChange,
  handlePasswordChange,
  email,
  password,
  user,
  error,
}) {
  return (
    <form onSubmit={handleForm}>
      {!status && (
        <div>
          <label>Email : </label>
          <input
            type="email"
            placeholder="enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      )}
      {!status && (
        <div>
          <label>Password : </label>
          <input
            type="password"
            placeholder="enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      )}
      <button type="submit" onClick={handleLoginLogout}>
        {!status ? "LogIn" : "LogOut"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {status && user && (
        <div>
          <h2>
            Welcome, {user.name} <p>{user.email}</p>
          </h2>
        </div>
      )}
    </form>
  );
}

export default MockuserLogin;
