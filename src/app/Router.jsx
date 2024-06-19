import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutItem from "../components/LayoutItem";
import Home from "../pages/Home";
import Profile from "../pages/Profile/Profile";
import NuevoEvento from "../pages/NuevoEvento/NuevoEvento";
import InvitarPersonas from "../pages/InvitarPersonas/InvitarPersonas";
import ListaEventos from "../pages/ListaEventos/ListaEventos";
import DetallesEvento from "../pages/DetallesEvento/DetallesEvento";
import Register from "../pages/Home/Register";
import Borrar from "../pages/NuevoEvento/NuevoEvento";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Borrar />} />
      <Route path="register" element={<Register />} />
      <Route element={<LayoutItem />}>
        <Route path="profile" element={<Profile />} />
        <Route path="nuevoevento" element={<NuevoEvento />} />
        <Route path="invitarpersonas" element={<InvitarPersonas />} />
        <Route path="listaeventos" element={<ListaEventos />} />
        <Route path="detallesevento/:id" element={<DetallesEvento />} />
      </Route>
      <Route path="*" element={<div>Error 404</div>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
