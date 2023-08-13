import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Cloudinary from "../FormUsuario/photoWidget";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Este campo es obligatorio"),
  user: Yup.string().required("Este campo es obligatorio"),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "El número de teléfono no es válido")
    .required("Este campo es requerido"),
  address: Yup.string().required("Este campo es obligatorio"),
  password: Yup.string().required("Este campo es obligatorio"),
  image: Yup.mixed().required("Agrega una foto de perfil"),
});

const Register2 = ({ customerData }) => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        user: "",
        phone: "",
        image: null,
        address: "",
        password: "",
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const customer = {
          ...customerData,
          name: values.name,
          user: values.user,
          phone: values.phone,
          image: values.image,
          address: values.address,
          password: values.password,
        };
        try {
          //await axios.post("/customer", customer);
          console.log(customer);
          navigate("/dashboardUsuario/misdatos");
        } catch (error) {
          return {
            error: error.message,
          };
        }
        setSubmitting(false);
        resetForm();
      }}
      validationSchema={validationSchema}
    >
      {({ errors, setFieldValue, touched, isSubmitting }) => (
        <div className="absolute ml-1700 h-700 w-1400 flex items-center flex flex-col mt-20">
          <div className="flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-3xl w-500 max-w-md">
            <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">
              Editar Usuario
            </div>

            <div className="mt-10">
              <Form>
                <div>
                  <label htmlFor="image">Selecciona una foto de perfil:</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={async (event) => {
                      const file = event.currentTarget.files[0];
                      const response = await Cloudinary(file);
                      setFieldValue("image", response);
                    }}
                  />
                  <ErrorMessage
                    name="image"
                    component={() => (
                      <p className="text-red-500 text-xm italic">
                        {errors.image}
                      </p>
                    )}
                  />
                </div>
                <div className="flex flex-col my-2">
                  <label htmlFor="name" className="block my-1 font-semibold">
                    Nombre:
                  </label>
                  <Field
                    type="text"
                    name="name"
                    className={
                      touched.name && errors.name
                        ? "inputError"
                        : touched.name && !errors.name
                        ? "inputSuccess"
                        : "input"
                    }
                    placeholder="Nombre completo"
                  />
                  <ErrorMessage
                    name="name"
                    component={() => (
                      <p className="text-red-500 text-xm italic">
                        {errors.name}
                      </p>
                    )}
                  />
                </div>
                <div className="flex flex-col my-2">
                  <label htmlFor="user" className="block my-1 font-semibold">
                    Nombre de usuario:
                  </label>
                  <Field
                    type="text"
                    name="user"
                    className={
                      touched.user && errors.user
                        ? "inputError"
                        : touched.user && !errors.user
                        ? "inputSucces"
                        : "input"
                    }
                    placeholder="usuarioEjemplo"
                  />
                  <ErrorMessage
                    name="user"
                    component={() => (
                      <p className="text-red-500 text-xm italic">
                        {errors.user}
                      </p>
                    )}
                  />
                </div>
                <div className="flex flex-col my-2">
                  <label htmlFor="phone" className="block my-1 font-semibold">
                    Teléfono:
                  </label>
                  <Field
                    type="text"
                    name="phone"
                    className={
                      touched.phone && errors.phone
                        ? "inputError"
                        : touched.phone && !errors.phone
                        ? "inputSucces"
                        : "input"
                    }
                    placeholder="0230019050"
                  />
                  <ErrorMessage
                    name="phone"
                    component={() => (
                      <p className="text-red-500 text-xm italic">
                        {errors.phone}
                      </p>
                    )}
                  />
                </div>
                <div className="flex flex-col my-2">
                  <label htmlFor="address" className="block my-1 font-semibold">
                    Dirección:
                  </label>
                  <Field
                    type="text"
                    name="address"
                    className={
                      touched.address && errors.address
                        ? "inputError"
                        : touched.address && !errors.address
                        ? "inputSucces"
                        : "input"
                    }
                    placeholder="Dirección..."
                  />
                  <ErrorMessage
                    name="address"
                    component={() => (
                      <p className="text-red-500 text-xm italic">
                        {errors.address}
                      </p>
                    )}
                  />
                </div>
                <div className="flex flex-col my-2">
                  <label
                    htmlFor="password"
                    className="block my-1 font-semibold"
                  >
                    Contraseña:
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className={
                      touched.password && errors.password
                        ? "inputError"
                        : touched.password && !errors.password
                        ? "inputSucces"
                        : "input"
                    }
                    placeholder="Contraseña"
                    onChange={handlePasswordChange}
                  />
                  <ErrorMessage
                    name="password"
                    component={() => (
                      <p className="text-red-500 text-xm italic">
                        {errors.password}
                      </p>
                    )}
                  />
                </div>
                <div className="flex justify-end">
                  <Link to="/dashboardAdmin/misdatosAdmin">
                    <button className="bg-rojo-pf pl-6 pr-6 pt-2.5 pb-2.5 text-white mt-4 mr-5">
                      Volver
                    </button>
                  </Link>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-rojo-pf pl-6 pr-6 pt-2 pb-2 text-white mt-4"
                  >
                    {isSubmitting ? "Enviando..." : <h1>Guardar</h1>}
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default Register2;
