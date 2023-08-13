import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-lg font-semibold mb-2">Síguenos:</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/michelle-díaz-garduño-49a57b265/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              Michelle Díaz Garduño
            </a>
            <a
              href="https://www.linkedin.com/in/miguel-maximiliano-fonseca-20ab32234/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              Maximiliano Fonseca
            </a>
            <a
              href="https://www.linkedin.com/in/reydavid1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              David Perez Tiburcio
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm">
            &copy; 2023 Proyecto final en SoyHenry, Realizado por el equipo 19
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
