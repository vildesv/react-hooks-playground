import { useState } from "react";
import "./CookieClicker.css";

function CookieClicker() {
  const [score, setScore] = useState(0);       // score: holder antall klikk
  const [pop, setPop] = useState(false);       // styrer animasjonseffekten

  // Øker score når man klikker på kjeksen
  const handleClick = () => {
    setScore(score + 1);                       // legg til 1 poeng
    setPop(true);                              // aktiver pop-effekt
    setTimeout(() => setPop(false), 150);      // reset animasjon etter 150 ms
  };

  // Tilbakestiller score til 0
  const handleReset = () => {
    setScore(0); 
  };

  return (
    <div>
      <h2>Cookie Clicker 🍪</h2>

      {/* Klikk på bildet for å øke score */}
      <img
        src="/cookie.png"
        alt="Image of a Cookie"
        width="150"
        className="cookie-img"
        onClick={handleClick}
      />

      {/* Viser score, legger til "pop"-klasse hvis animasjon er aktiv */}
      <p className={`score ${pop ? "pop" : ""}`}>Score: {score}</p>

      {/* Knapp for å resette score */}
      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default CookieClicker;
