import { useEffect, useState } from "react";

function FetchData() {
  return (
    <div>
      <Header />
      <UserDate />
    </div>
  );
}

function Header() {
  return (
    <h1 style={{ display: "flex", justifyContent: "center" }}>User Data</h1>
  );
}

function UserDate() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);

  useEffect(function () {
    async function fetchUsers() {
      try {
        setLoading(true);
        const res = await fetch("http://localhost:9000/users");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setErrors(err.message);
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading) return <Loader />;
  if (errors) return <p>Error : {errors}</p>;

  return (
    <>
      {users.length > 0 ? (
        <>
          {users[0] && (
            <>
              <h2>User 1</h2>
              <p>
                Name: <strong>{users[0]?.name}</strong>
              </p>
              <p>
                Email: <strong>{users[0]?.email}</strong>
              </p>
              <p>
                Username: <strong>{users[0]?.username}</strong>
              </p>
              <hr />
            </>
          )}
          {users[1] && (
            <>
              <h2>User 2</h2>
              <p>
                Name: <strong>{users[1]?.name}</strong>
              </p>
              <p>
                Email: <strong>{users[1]?.email}</strong>
              </p>
              <p>
                Username: <strong>{users[1]?.username}</strong>
              </p>
              <hr />
            </>
          )}
          {users[2] && (
            <>
              <h2>User 3</h2>
              <p>
                Name: <strong>{users[2]?.name}</strong>
              </p>
              <p>
                Email: <strong>{users[2]?.email}</strong>
              </p>
              <p>
                Username: <strong>{users[2]?.username}</strong>
              </p>
            </>
          )}
        </>
      ) : (
        <p>No users found.</p>
      )}
    </>
  );
}

function Loader() {
  return <p>Loading...</p>;
}

export default FetchData;
