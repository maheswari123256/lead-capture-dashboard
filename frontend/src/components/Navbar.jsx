import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "../styles/navbar.css";

function Navbar() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <h3>Lead Dashboard</h3>
      <div>
        <Link to="/">Create</Link>
        <Link to="/leads">Leads</Link>
        <button onClick={toggleTheme}>
          {darkMode ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
