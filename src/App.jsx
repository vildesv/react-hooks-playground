import "./App.css";
import CookieClicker from "./components/CookieClicker.jsx";
import CatFacts from "./components/CatFacts.jsx";
import Users from "./components/Users.jsx";

function App() {
  return (
    <div>
      <h1>React Hooks Playground 🚀</h1>
      <div className="container">
        <div className="card">
          <CookieClicker />
        </div>
        <div className="card catfacts">
          <CatFacts />
        </div>
        <div className="card users">
          <Users />
        </div>
      </div>
    </div>
  );
}

export default App;
