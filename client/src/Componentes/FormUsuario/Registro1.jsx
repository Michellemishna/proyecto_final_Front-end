import { Formik, Form, ErrorMessage, Field } from "formik";
import { useToggle } from "./toggle";
import * as Yup from "yup";
// import Eye from "../../Img/icons8-mostrar-contraseña-16.png";

const Register1 = ({ callback }) => {
  const [isPasswordShow, toggleShowPassword] = useToggle();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("El correo no es valido.")
      .required("Este campo es requerido"),
    password: Yup.string()
      .min(7, "Debe tener al menos 7 caracteres")
      .matches(
        /^(?=.*[0-9])[a-zA-Z0-9]{8,}$/,
        "Debe tener al menos un número y no debe contener caracteres especiales."
      )
      .required("Este campo es requerido"),
    passwordConfirm: Yup.string()
      .required("Este campo es requerido")
      .test("password-match", "Las contraseñas no coinciden", function (value) {
        return this.parent.password === value;
      }),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        passwordConfirm: "",
      }}
      onSubmit={async (values, { resetForm, setSubmitting }) => {
        try {
          const formData = {
            email: values.email.trim(),
            password: values.password,
          };
          callback(formData);
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
      {({ errors, touched }) => (
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
            <div className="mt-4 self-center text-sm sm:text-sm text-gray-800">Ingresa tu correo y crea una contraseña</div>
            <div className="mt-10">
              <Form>
                <div className="flex flex-col my-2">
                  <label htmlFor="email" className="block my-1 font-semibold">
                    Email:
                  </label>
                  <Field
                    className={
                      touched.email && errors.email
                        ? "inputError"
                        : touched.email && !errors.email
                          ? "inputSuccess"
                          : "input"
                    }
                    type="email"
                    name="email"
                    placeholder="correo@example.com"
                    autoComplete="false"
                  />
                  <ErrorMessage
                    name="email"
                    component={() => <p className="text-red-500 text-xm italic">{errors.email}</p>}
                  />
                </div>
                <div className="flex flex-col my-2">
                  <label htmlFor="password" className="block my-1 font-semibold">
                    Contraseña:
                  </label>
                  <div className="flex flex-col justify-between  relative w-full">
                    <Field
                      placeholder="Contraseña"
                      type={isPasswordShow ? "text" : "password"}
                      name="password"
                      className={
                        touched.password && errors.password
                          ? "inputError"
                          : touched.password && !errors.password
                            ? "inputSuccess"
                            : "input"
                      }
                    />
                    <div className="absolute inset-y-0 right-0 flex items-end pr-2 pb-1">
                      <button
                        onClick={toggleShowPassword}
                        type="button"
                        className="text-gray-400 focus:outline-none"
                      >
                        {isPasswordShow ? (
                          <p>👁️</p>
                        ) : (
                          <p>👁️</p>
                        )}
                      </button>
                    </div>
                  </div>
                  <div>
                    <ErrorMessage
                      name="password"
                      component={() => <p className="text-red-500 text-xm italic">{errors.password}</p>}
                    />
                  </div>
                </div>
                <div className="flex flex-col my-2">
                  <label
                    htmlFor="passwordConfirm"
                    className="block  my-1 font-semibold"
                  >
                    Confirmar contraseña:
                  </label>
                  <Field
                    className={
                      touched.passwordConfirm && errors.passwordConfirm
                        ? "inputError"
                        : touched.passwordConfirm && !errors.passwordConfirm
                          ? "inputSuccess"
                          : "input"
                    }
                    type={isPasswordShow ? "text" : "password"}
                    name="passwordConfirm"
                    placeholder="Repite tu contraseña"
                  />
                  <ErrorMessage
                    name="passwordConfirm"
                    component={() => (
                      <p className="text-red-500 text-xm italic">{errors.passwordConfirm}</p>
                    )}
                    className="errorMessage"
                  />
                </div>
                <div className="flex w-full">
                  <button
                    type="submit"
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
                    Siguiente
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
export default Register1;
