import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Produtos } from "../components/Produtos/produtos";
import { Login } from "../pages/login";
import { PrivateRoute } from "../contexts/PrivateRoute";
import { RecuperarSenha } from "../pages/recuperarSenha";

export function RoutesWeb() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recuperar-senha" element={<RecuperarSenha />} />
      <Route path="/Produtos" element={
        <PrivateRoute>
          <Produtos/>
        </PrivateRoute>
      } />
    </Routes>
  );
}
