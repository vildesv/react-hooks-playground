import { useState, useEffect } from "react";

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const res = await fetch("https://catfact.ninja/facts?limit=5");
        if (!res.ok) throw new Error("Kunne ikke hente kattfakta");
        const data = await res.json();
        setFacts(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFacts();
  }, []);

  return (
    <div>
      <h2>Cat Facts 🐱</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}
      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact.fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CatFacts;
