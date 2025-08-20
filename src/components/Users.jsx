import { useState } from "react";

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

    if (!username.trim()) newErrors.username = "Brukernavn kan ikke være tomt";
    if (!email.trim()) newErrors.email = "E-post kan ikke være tomt";
    else if (!emailRegex.test(email)) newErrors.email = "Ugyldig e-postadresse";

    setErrors(newErrors);

    // Sjekk om det er noen feil
    if (!newErrors.username && !newErrors.email) {
      const newUser = { username, email };
      setUsers([...users, newUser]);
      setUsername("");
      setEmail("");
      setErrors({ username: "", email: "" });
    }
  };

  return (
    <div className="users">
      <h2>Users 👥</h2>
      <ul>
        {users.map((user) => (
          <li key={user.email}>
            <strong>{user.username}</strong> - {user.email}
          </li>
        ))}
      </ul>
      <h3>Legg til ny bruker</h3>
      <form onSubmit={addUser}>
        <div>
          <input
            type="text"
            placeholder="Brukernavn"
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
            placeholder="E-post"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "invalid" : ""}
          />
          {errors.email && (
            <div className="error-message show">{errors.email}</div>
          )}
        </div>

        <button type="submit">Legg til</button>
      </form>
    </div>
  );
}

export default Users;
