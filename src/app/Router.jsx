import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Profile from "../pages/Profile/Profile";
import NuevoEvento from "../pages/NuevoEvento/NuevoEvento";
import InvitarPersonas from "../pages/InvitarPersonas/InvitarPersonas";
import ListaEventos from "../pages/ListaEventos/ListaEventos";
import DetallesEvento from "../pages/DetallesEvento/DetallesEvento";

const Router = () => (

  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="/nuevoevento/" element={<NuevoEvento />} />
        <Route path="/invitarpersonas/" element={<InvitarPersonas />} />
        <Route path="/listaeventos/" element={<ListaEventos />} />
        <Route path="/detallesevento/" element={<DetallesEvento />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
