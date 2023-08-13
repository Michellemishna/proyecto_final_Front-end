// eslint-disable-next-line no-unused-vars
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { registerCustomer } from "../../Redux/Actions/action";
import { connect } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cloudinary from "./photoWidget";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Este campo es obligatorio"),
  user: Yup.string().required("Este campo es obligatorio"),
  phone: Yup.string()
    .matches(/^[0-9]{10,15}$/, "El número de teléfono no es válido")
    .required("Este campo es requerido"),
  address: Yup.string().required("Este campo es obligatorio"),
  image: Yup.mixed().required("Agrega una foto de perfil"),
});

const Register2 = ({ customerData, registerCustomer }) => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        name: "",
        user: "",
        phone: "",
        image: null,
        address: "",
      }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const customer = {
          ...customerData,
          name: values.name,
          user: values.user,
          phone: values.phone,
          image: values.image,
          address: values.address,
        };
        try {
          await axios.post("/customer", customer);
          navigate("/formUsuario");
        } catch (error) {
          return {
            error: error.message,
          };
        }
        registerCustomer(1);
        setSubmitting(false);
        resetForm();
      }}
      validationSchema={validationSchema}
    >
      {({ errors, setFieldValue, touched, isSubmitting }) => (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
          <div className="flex flex-col
                bg-white
                shadow-md
                px-4
                sm:px-6
                md:px-8
                lg:px-10
                py-8
                rounded-3xl
                w-500
                max-w-md">
            <div className="font-medium self-center text-xl sm:text-3xl text-gray-800">Crear cuenta</div>
            <div className="mt-4 self-center text-sm sm:text-sm text-gray-800">Ingresa tus datos</div>
            <div className="mt-10">
              <Form>
                <div>
                  <label htmlFor="image" >selecciona una foto de perfil</label>
                  <input
                  type="file"
                  accept="image/*"
                  // className="opacity-0 absolute top-0 left-0 cursor-pointer"
                  onChange={async (event) => {
                    const file = event.currentTarget.files[0];
                    const response = await Cloudinary(file);
                    setFieldValue("image", response);
                  }}
                  />
                  <ErrorMessage name="image" component={() => <p className="text-red-500 text-xm italic">{errors.image}</p>} />
                </div>
                <div className="flex flex-col my-2">
                  <label htmlFor="name" className="block my-1 font-semibold">Nombre:</label>
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
                  <ErrorMessage name="name" component={() => <p className="text-red-500 text-xm italic">{errors.name}</p>} />
                </div>
                <div className="flex flex-col my-2">
                  <label htmlFor="user" className="block my-1 font-semibold">Nombre de usuario:</label>
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
                  <ErrorMessage name="user" component={() => <p className="text-red-500 text-xm italic">{errors.user}</p>} />
                </div>
                <div className="flex flex-col my-2">
                  <label htmlFor="phone" className="block my-1 font-semibold">Teléfono:</label>
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
                  <ErrorMessage name="phone" component={() => <p className="text-red-500 text-xm italic">{errors.phone}</p>} />
                </div>
                <div className="flex flex-col my-2">
                  <label htmlFor="address" className="block my-1 font-semibold">Dirección:</label>
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
                  <ErrorMessage name="address" component={() => <p className="text-red-500 text-xm italic">{errors.address}</p>} />
                </div>
                {/* <div>
            <label htmlFor="image">Agrega una imagen de perfil</label>
            <Field
              type="text"
              name="image"
              className={
                touched.image && errors.image
                  ? "inputError"
                  : touched.image && !errors.image
                  ? "inputSucces"
                  : "input"
              }
            />
            <ErrorMessage name="image" component={() => <p>{errors.image}</p>} />
          </div> */}
                <button type="submit" disabled={isSubmitting}
                  className="flex
                                    mt-2
                                    items-center
                                    justify-center
                                    focus:outline-none
                                    text-white text-sm
                                    sm:text-base
                                    bg-violet-500
                                    hover:bg-violet-600
                                    rounded-2xl
                                    py-2
                                    w-full
                                    transition
                                    duration-150
                                    ease-in"
                >
                  {isSubmitting ? "Enviando..." : "Guardar"}
                </button>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerCustomer: (step) => dispatch(registerCustomer(step)),
  };
};

export default connect(null, mapDispatchToProps)(Register2);