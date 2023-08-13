import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Componentes/NavBar/NavBar.jsx";
import Landing from "./Views/Landing/Landing.jsx";
import Home from "./Views/Home/Home.jsx";
import Detail from "./Views/Detail/Detail.jsx";
import Footer from "./Componentes/Footer/Footer.jsx";
import Contacto from "./Views/Contacto/Contacto.jsx";
import Nosotros from "./Views/Nosotros/Nosotros.jsx";
import Favoritos from "./Views/Favoritos/Favoritos.jsx";
import ProductForm from "./Views/FormProductos/FormProductos.jsx";
import FormUsuario from "./Componentes/FormUsuario/FormUsuario";
import DashboardUsuario from "./Views/DashboardUsuario/DashUsuario";
import DashboardAdmin from "./Views/DashboardAdmin/DashAdmin";
import Misdatos from "./Componentes/MisDatos/MisDatos";
import MisdatosAdmin from "./Componentes/MisDatosAdmin/MisDatos";
import Compras from "./Componentes/Compras/Compras";
import PayMercadoPago from "./Componentes/Payment/PaymentButton";
import SuccessPayment from "./Componentes/Payment/confirmacion";
import OrderPreview from "./Componentes/Payment/OrderPreview";
import Carrito from "./Views/Carrito/Carrito";
import Registro from "./Views/CustomerRegistro/Registro";
import EditarUsuario from "./Componentes/EditarUsuario/EsitarUsuario.jsx";
import EditarAdmin from "./Componentes/EditarAdmin/EsitarUsuario.jsx";
import Usuarios from "./Componentes/Usuarios/Usuarios";
import Ventas from "./Componentes/Ventas/Ventas";
import Publicaciones from "./Componentes/Publicaciones/Publicaciones";
import Reviews from "./Componentes/Reviews/Reviews";
import UserBaneado from "./Views/Ususario Baneado/UserBaneado";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/userBaneado" element={<UserBaneado />} />
        <Route path="/Productos/page/:page" element={<Home />} />
        <Route path="/formUsuario" element={<FormUsuario />} />
        <Route path="/nuevaCuenta" element={<Registro />} />
        <Route path="/dashboardUsuario" element={<DashboardUsuario />}>
          <Route path="compras" element={<Compras />} />
          <Route path="misdatos" element={<Misdatos />} />
          <Route path="editUser" element={<EditarUsuario />} />
        </Route>
        <Route path="/dashboardAdmin" element={<DashboardAdmin />}>
          <Route path="publicaciones" element={<Publicaciones />} />
          <Route path="ventas" element={<Ventas />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="misdatosAdmin" element={<MisdatosAdmin />} />
          <Route path="editAdmin" element={<EditarAdmin />} />
        </Route>
        <Route path="/" element={<Landing />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/nuevoProd" element={<ProductForm />} />
        <Route path="/pay" element={<PayMercadoPago />} />
        <Route path="/ordencompra/:id" element={<OrderPreview />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/confirmacion/:id" element={<SuccessPayment />} />
        <Route path="/review/:id" element={<Reviews />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
