import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutItem from "../components/LayoutItem";
import Home from "../pages/Home";
import Profile from "../pages/Profile/Profile";
import NuevoEvento from "../pages/NuevoEvento/NuevoEvento";
import InvitarPersonas from "../pages/InvitarPersonas/InvitarPersonas";
import ListaEventos from "../pages/ListaEventos/ListaEventos";
import DetallesEvento from "../pages/DetallesEvento/DetallesEvento";
import Register from "../pages/Home/Register";

const Router = () => (

  <BrowserRouter>
    <Routes>
      <Route >
        <Route index element={<Home />} />
        <Route path="/profile/" element={<Profile />} element={<LayoutItem />} />
        <Route path="/register/" element={<Register />} />
        <Route path="/nuevoevento/" element={<NuevoEvento />} />
        <Route path="/invitarpersonas/" element={<InvitarPersonas />} />
        <Route path="/listaeventos/" element={<ListaEventos />} />
        <Route path="/detallesevento/:id" element={<DetallesEvento />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
