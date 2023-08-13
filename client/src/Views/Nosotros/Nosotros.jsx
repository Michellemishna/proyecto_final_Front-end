import React from "react";
import s from "./Nosotros.module.css";
//import { FaLinkedin, FaGithub } from "react-icons/fa"; // Importa los íconos de Linkedin y GitHub

function Nosotros() {
  const avatar = "";

  return (
    <div className={s.fondo}>
      <h1 style={{ fontSize: "30px" }}>Nosotros</h1>
      <div className="flex justify-between w-2/3 h-1/2">
        <div className="border border-2 flex items-center justify-center bg-white w-1/5 ">
          {/* Primera carta */}
          <div>
            <img
              src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar1.png"
              className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
              alt="title image"
            ></img>
            <div className="pt-6 text-center">
              <p>David Perez Tiburcio</p>
              <p>Full Stack</p>
              <div className="mt-2 mb-5 space-x-2">
                {/* <a
                  className="hover:text-blue-700"
                  aria-label="Twitter link"
                  href="#"
                >
                  <i className="fab fa-twitter text-twitter"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="red"
                      d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
                    ></path>
                  </svg>
                </a> */}

                <a
                  className="hover:text-blue-700"
                  aria-label="Linkedin link"
                  href="https://www.linkedin.com/in/reydavid1/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin text-linkedin"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="red"
                      d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-2 flex items-center justify-center bg-white w-1/5  ">
          {/* Primera carta */}
          <div>
            <img
              src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar4.png"
              className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
              alt="title image"
            ></img>
            <div className="pt-6 text-center">
              <p>Miguel Maximiliano Fonseca</p>
              <p>Full Stack</p>
              <div className="mt-2 mb-5 space-x-2">
                {/* <a
                  className="hover:text-blue-700"
                  aria-label="Twitter link"
                  href="#"
                >
                  <i className="fab fa-twitter text-twitter"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="red"
                      d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
                    ></path>
                  </svg>
                </a> */}

                <a
                  className="hover:text-blue-700"
                  aria-label="Linkedin link"
                  href="https://www.linkedin.com/in/miguel-maximiliano-fonseca-20ab32234/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin text-linkedin"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="red"
                      d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-2 flex items-center justify-center bg-white w-1/5 ">
          {/* Primera carta */}
          <div>
            <img
              src="https://tailone.tailwindtemplate.net/src/img/dummy/avatar3.png"
              className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
              alt="title image"
            ></img>
            <div className="pt-6 text-center">
              <p>Michelle Diaz Garduño</p>
              <p>Full Stack</p>
              <div className="mt-2 mb-5 space-x-2">
                {/* <a
                  className="hover:text-blue-700"
                  aria-label="Twitter link"
                  href="#"
                >
                  <i className="fab fa-twitter text-twitter"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="red"
                      d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"
                    ></path>
                  </svg>
                </a> */}

                <a
                  className="hover:text-blue-700"
                  aria-label="Linkedin link"
                  href="https://www.linkedin.com/in/michelle-díaz-garduño-49a57b265/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin text-linkedin"></i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline-block"
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="red"
                      d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nosotros;
