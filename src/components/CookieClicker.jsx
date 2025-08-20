import { useState } from "react";

function CookieClicker() {
  const [score, setScore] = useState(0);
  const [pop, setPop] = useState(false);

  const handleClick = () => {
    setScore(score + 1);
    setPop(true);
    setTimeout(() => setPop(false), 150); // reset animation
  };

  const handleReset = () => {
    setScore(0); // reset score
  };

  return (
    <div>
      <h2>Cookie Clicker 🍪</h2>
      <img
        src="/cookie.png"
        alt="Image of a Cookie"
        width="150"
        className="cookie-img"
        onClick={handleClick}
      />
      <p className={`score ${pop ? "pop" : ""}`}>Score: {score}</p>
      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default CookieClicker;
