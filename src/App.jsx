import "./App.css";
import { Routes, Route } from "react-router-dom";
import Info from "./Info";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" Component={Info} />
      </Routes>
    </div>
  );
}

export default App;
