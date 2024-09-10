"use client"
import Image from "next/image";
import { useState, useEffect, use } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  /*   const slides = [
      { title: "NUESTRO PROGRAMA", subtitle: "Conozca nuestros planes", image: "/background1.jpg" },
      { title: "COMPROMISO CON LA COMUNIDAD", subtitle: "Siempre a tu servicio", image: "/background2.jpg" },
      { title: "INNOVACIÓN Y FUTURO", subtitle: "Ideas para el futuro", image: "/background3.jpg" }
    ]; */

  const slides = [
    { title: 'HAZ MATCH CON TU ESTACION', imageUrl: '/fotos_carusel/ariel1.png' },
    { title: 'NUESTRO PROGRAMA', imageUrl: '/fotos_carusel/arielfamilia1.jpg' },
    { title: 'MOTIVACIONES', imageUrl: '/fotos_carusel/ariel2345.jpg' },
  ];


  const toggleMenu = () => {
    setMenuOpen(!menuOpen); //toggle menu burger
  }

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000); //5s
    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <div className="min-h-screen bg-zinc-800">
      {/* Header */}
      <header className="relative bg-orange-600 text-white flex justify-between items-center p-4 w-full z-20">
        <div className="flex items-center">
          <img src="/ISOLOGO_ARIEL_ACUÑA_09.png" alt="Logo" className="w-50 h-10" />
        </div>
        <button onClick={toggleMenu} className="text-3xl">
          &#9776; {/* Hamburger icon */}
        </button>
      </header>

      {/* Carousel */}
      {/*       
      <div className="relative h-[500px] bg-cover bg-center" style={{ backgroundImage: `url('${slides[currentSlide].image}')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-3xl font-bold">{slides[currentSlide].title}</h1>
          <h2 className="text-4xl font-bold">{slides[currentSlide].subtitle}</h2>
        </div>
      </div> */}

      <div className="relative h-[500px] bg-cover bg-center transition-all duration-1000 ease-in-out">
        <div className="absolute inset-0 opacity-100">
          {/* Optimized Image Component */}
          <div className="relative z-0 h-full w-full">
            <Image
              src={slides[currentSlide].imageUrl}
              alt={slides[currentSlide].title}
              fill={true}
              priority // Prioritize loading
            />
            <div className="text-center relative z-10 flex flex-col items-center justify-center h-full text-white">
              <h1 className="text-3xl font-bold">{slides[currentSlide].title}</h1>
            </div>
          </div>
        </div>

      </div>

      {/* Social Media Section */}
      <div className="relative bg-zinc-800 p-4 text-center">
        <h3 className="text-white mb-2">¡SÍGUEME EN MIS REDES!</h3>
        <div className="flex justify-center space-x-4 text-white text-3xl">
          <a href="https://www.instagram.com" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} className="text-white h-6 w-6 hover:text-gray-400" />
          </a>
          <a href="https://www.tiktok.com" aria-label="Tiktok">
            <FontAwesomeIcon icon={faTiktok} className="text-white h-6 w-6 hover:text-gray-400" />
          </a>
          <a href="https://www.facebook.com" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="text-white h-6 w-6 hover:text-gray-400" />
          </a>
        </div>
      </div>

      {/* Header Burger Menu Options */}
      {menuOpen && (
        <div className={`absolute w-full top-[60px] bg-purple-700 bg-opacity-80 p-4 transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
          <button onClick={toggleMenu} className="text-white text-3xl absolute top-4 right-4 z-30">&times;</button>
          <nav className="flex flex-col items-center justify-center text-white space-y-6">
            <a href="#history" className="block hover:bg-gray-600 p-2 rounded transition-colors">Conoce mi historia</a>
            <a href="#program" className="block hover:bg-gray-600 p-2 rounded transition-colors">Nuestro Programa</a>
            <a href="#motivations" className="block hover:bg-gray-600 p-2 rounded transition-colors">Motivaciones</a>
            <a href="#achievements" className="block hover:bg-gray-600 p-2 rounded transition-colors">Que se ha logrado</a>
            <a href="#contribute" className="block hover:bg-gray-600 p-2 rounded transition-colors">Contribuye</a>
            <a href="#gallery" className="block hover:bg-gray-600 p-2 rounded transition-colors">Galería</a>
            <a href="#contact" className="block hover:bg-gray-600 p-2 rounded transition-colors">Contacto</a>
            <a href="#thanks" className="block hover:bg-gray-600 p-2 rounded transition-colors">Agradecimientos</a>
          </nav>
        </div>
      )}

      {/* Sections*/}
      {/* historia */}
      <section id="history" className="">
        <div className="bg-orange-600 opacity-100">
          <div className="pt-4 pb-2 relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-3xl font-bold">CONOCE MI HISTORIA</h1>
          </div>
          <div className="ml-12 mr-12 text-justify pt-2 pb-4 justify-normal">
            <p>Durante mis 6 años de dirigencia
              social ha despertado un profundo
              compromiso por el servicio publico.</p>
          </div>
          <div className="relative h-[350px]">
            <Image src="/fotos_secciones/historia2.JPG" alt="notfoundimg" fill={true} />
          </div>
          <div className="ml-10 mr-10 pt-4 pb-4 text-justify">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          </div>
        </div>

        {/* programa */}

      </section>
      <section id="program" className="">
        <div className="bg-purple-400 opacity-100">
          <div className="pt-4 pb-2 relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-3xl font-bold text-black">NUESTRO PROGRAMA</h1>
          </div>
          <div className="ml-12 mr-12 text-justify pt-2 pb-4 justify-normal">
            <p className="text-black">Mi bandera de lucha es trabajar por un proyecto que potencie las organizaciones territoriales, la cohesión entre vecinos, sus organizaciones y su relación con el Municipio.</p>
          </div>
          <div className="relative h-[350px]">
            <Image src="/fotos_secciones/historia2.JPG" alt="notfoundimg" fill={true} />
          </div>
          <div className="text-black ml-10 mr-10 pt-4 pb-4 text-justify">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          </div>
        </div>
      </section>

      {/* motivaciones */}

      <section id="achivements" className="">
        <div className="bg-customYellow opacity-100">
          <div className="pt-4 pb-2 relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-3xl font-bold text-black">MOTIVACIONES</h1>
          </div>
          <div className="ml-12 mr-12 text-justify pt-2 pb-4 justify-normal">
            <p className="text-black">Mi mayor motivación para ser concejal es cumplir con mi vocación al servicio público, aportar mi granito de arena y dejar una huella positiva en la comuna que me ha visto crecer.</p>
          </div>
          <div className="relative h-[350px]">
            <Image src="/fotos_secciones/historia2.JPG" alt="notfoundimg" fill={true} />
          </div>
        </div>
      </section>

      {/* logros */}

      <section id="achievements" className="">
        <div className="bg-customOrangeLight opacity-100">
          <div className="pt-4 pb-2 relative z-10 flex flex-col items-center justify-center text-center h-full text-white">
            <h1 className="text-3xl font-bold">QUE SE HA LOGRADO HASTA AHORA</h1>
          </div>
          <div className="ml-12 mr-12 text-justify pt-2 pb-4 justify-normal">
            <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>
          <div className="relative h-[350px]">
            <Image src="/fotos_secciones/historia2.JPG" alt="notfoundimg" fill={true} />
          </div>
        </div>
      </section>

      {/* contribuye */}

      <section id="contribute" className="">
        <div className="bg-orange-500 opacity-100">
          <div className="ml-12 mr-12 text-justify pt-2 pb-4 justify-normal">
            <p className="mt-8">Si compartes mi visión de que la política necesita la energía , voluntad y actitud de jóvenes profesionales con vocación, te invito a ser parte de esta historia.</p>
          </div>
          <div className="flex justify-center items-center pt-6 pb-6">
            <button className="bg-purple-600 text-white font-bold py-8 px-20 rounded hover:bg-purple-700 text-2xl">
              ¡CONTRIBUYE!
            </button>
          </div>
          <div className="ml-12 mr-12 text-justify pt-2 pb-8 justify-normal">
            <p>Si compartes mi visión de que la política necesita la energía , voluntad y actitud de jóvenes profesionales con vocación, te invito a ser parte de esta historia.</p>
          </div>
        </div>
      </section>

      {/* GALERIA */}

      <section id="gallery" className="">
        <div className="bg-zinc-800 opacity-100">
          <div className="pt-4 pb-2 relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-3xl font-bold text-white">GALERIA</h1>
          </div>

        </div>
      </section>

      {/* Contacto */}

      <section id="contact" className="">
      <div className="bg-orange-50 opacity-100">
          <div className="pt-4 pb-2 relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-3xl font-bold text-orange-500">CONTACTO</h1>
          </div>
        </div>
      </section>

      {/* Agradecimientos */}

      <section id="thanks" className="">

        <div className="bg-purple-600 opacity-100">
          <div className="pt-4 pb-2 relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-3xl font-bold text-white">AGRADECIMIENTOS</h1>
          </div>
          <div className="ml-8 mr-8 text-justify pt-2 pb-8 justify-normal">
            <p>Porque este camino no se camina solo, les agradezco infinitamente a todos los que han dedicado tiempo y energía y en especial a mi equipo, que juntos estamos comprometidos a mejorar la calidad de vida de los centralinos y centralinas.</p>
          </div>
        </div>
      </section>

      {/* Header Burger Menu Options */}

    </div>
  );
}
