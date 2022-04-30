import './App.css';
import { Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/candidates">Candidates</Link> | {" "}
        <Link to="/Subject">Subject</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
