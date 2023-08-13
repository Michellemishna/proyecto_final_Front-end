import { useState } from "react";
import Register1 from "../../Componentes/FormUsuario/Registro1";
import Register2 from "../../Componentes/FormUsuario/Registro2";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerCustomer as registerCustomerAction } from "../../Redux/Actions/action";
// import axios from "axios";

const Registro = () => {
    const dispatch = useDispatch();
    const registro = useSelector((state) => state.registro);

    const setRegister = (step) => {
        dispatch(registerCustomerAction(step));
    };

    const [customerData, setCustomerData] = useState({
        email: "",
        password: "",
    });

    const setFormData1 = ({ email, password }) => {
        setCustomerData({
            ...customerData,
            email,
            password,
        });
        setRegister(2); //pasa al segundo paso
    };

    return (
        <div>
            <div>
                {registro === 1 && <Register1 callback={setFormData1} />}
                {registro === 2 && <Register2 customerData={customerData} />}
                <div className="flex justify-center items-center mt-6">
                    <div className="
            inline-flex
            items-center
            text-gray-700
            font-medium
            text-xs text-center">Ya tienes una cuenta? {""}
                        <Link to={"/formUsuario"} className="text-xs ml-2 text-violet-500 font-semibold">Inicia sesión</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Registro;