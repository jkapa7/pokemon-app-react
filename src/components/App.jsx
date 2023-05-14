import { Route, useLocation, Routes } from "react-router-dom";
import Info from "../Info";
import Form from "../views/Form";
import Landing from "../views/Landing";
import Detail from "../views/Detail";
import Home from "../views/Home";
import NavBar from "./NavBar";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" && <NavBar />}

      <Routes>
        <Route exact path="/" Component={Landing} />
        <Route exact path="/home" Component={Home} />
        <Route exact path="/create" Component={Form} />
        <Route exact path="/detail/:id" Component={Detail} />
      </Routes>
    </div>
  );
}

export default App;
