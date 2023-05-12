import "./routes.css";
import Inicio from "./Pages/Inicio/index";
import ScrollToTop from "./Components/ScrollToTop/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Estudantes from "./Pages/Estudantes";
import Login from "./Pages/Login";
import LayoutBase from "./Pages/LayoutBase";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LayoutBase />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/estudantes" element={<Estudantes />} />
        </Route>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
