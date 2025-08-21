import { useState, useEffect } from "react"; 
import "./CatFacts.css";

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFacts = async () => {
    setLoading(true);
    setError(null);
    try {
      const randomPage = Math.floor(Math.random() * 10) + 1;
      const res = await fetch(`https://catfact.ninja/facts?limit=5&page=${randomPage}`);
      if (!res.ok) throw new Error("Kunne ikke hente fakta");
      const data = await res.json();
      setFacts(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  return (
    <div className="catfacts">
      <h2>Cat Facts 🐱</h2>

      {error && <p className="error">Error: {error}</p>}

      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact.fact}</li>
        ))}
      </ul>

      <button 
        onClick={fetchFacts} 
        disabled={loading} 
        className="new-facts-btn"
      >
        New facts
      </button>

      {/* Loading-tekst under knappen */}
      {loading && <p className="loading-text">Loading...</p>}
    </div>
  );
}

export default CatFacts;