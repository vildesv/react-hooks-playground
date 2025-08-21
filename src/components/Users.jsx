import { useState } from "react";
import "./Users.css";

const mockData = [
  { username: "Ola Normann", email: "ola.normann@norge.no" },
  { username: "Torleif", email: "torleif@kodehode.no" },
  { username: "Jan Egil", email: "jan.egil@kodehode.no" },
  { username: "Sander", email: "sander@kodehode.no" },
];

function Users() {
  const [users, setUsers] = useState(mockData);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ username: "", email: "" });

  const addUser = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = { username: "", email: "" };

    if (!username.trim()) newErrors.username = "Username can not be empty";
    if (!email.trim()) newErrors.email = "Email can not be empty";
    else if (!emailRegex.test(email)) newErrors.email = "Invalid email format";

    setErrors(newErrors);

    if (!newErrors.username && !newErrors.email) {
      const newUser = { username, email, isNew: true };
      setUsers([...users, newUser]);
      setUsername("");
      setEmail("");
      setErrors({ username: "", email: "" });
    }
  };

  const deleteUser = (email) => {
    setUsers(users.filter((user) => user.email !== email));
  };

  return (
    <div className="users">
      <h2>Users 👥</h2>
      <ul>
        {users.map((user) => (
          <li key={user.email}>
            <strong className="username">{user.username}</strong> - {user.email}
            {user.isNew && (
              <button
                className="delete-btn"
                onClick={() => deleteUser(user.email)}
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>

      <h3>Add new user</h3>
      <form onSubmit={addUser}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className={errors.username ? "invalid" : ""}
          />
          {errors.username && (
            <div className="error-message show">{errors.username}</div>
          )}
        </div>

        <div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "invalid" : ""}
          />
          {errors.email && (
            <div className="error-message show">{errors.email}</div>
          )}
        </div>

        <button type="submit">Add user</button>
      </form>
    </div>
  );
}

export default Users;
