import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Profile from "../pages/Profile/Profile";
const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/profile/" element={<Profile />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
