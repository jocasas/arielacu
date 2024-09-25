"use client"
import Image from "next/image";
import { useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import EmailForm from "./EmailForm";
import ScrollToTop from "./ScrollToTop";
import Carousel from "./Carousel";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [prevSlide, setPrevSlide] = useState(0); // Track previous slide for animation direction
  const [isAnimating, setIsAnimating] = useState(false);

  /*   const slides = [
      { title: "NUESTRO PROGRAMA", subtitle: "Conozca nuestros planes", image: "/background1.jpg" },
      { title: "COMPROMISO CON LA COMUNIDAD", subtitle: "Siempre a tu servicio", image: "/background2.jpg" },
      { title: "INNOVACIÓN Y FUTURO", subtitle: "Ideas para el futuro", image: "/background3.jpg" }
    ]; */

  // Slides principal
    const slides = [
    { title: 'HAZ MATCH CON TU ESTACION', imageUrl: '/fotos_carusel/ariel1.png' },
    { title: 'NUESTRO PROGRAMA', imageUrl: '/fotos_carusel/arielfamilia1.jpg' },
    { title: 'MOTIVACIONES', imageUrl: '/fotos_carusel/ariel2345.jpg' },
  ];


  // Como los otros carouseles son similares pero tienen otra funcion utilizaremos
  // un componente para no repetir html
  const carousel1 = [
    { title: 'HAZ MATCH CON TU ESTACION', imageUrl: '/fotos_secciones/HISTORIA001.png' },
    { title: 'NUESTRO PROGRAMA', imageUrl: '/fotos_secciones/HISTORIA002.png' },
    { title: 'MOTIVACIONES', imageUrl: '/fotos_secciones/HISTORIA003.png' },
    { title: 'MOTIVACIONES', imageUrl: '/fotos_secciones/historia2.jpg' },
    { title: 'MOTIVACIONES', imageUrl: '/fotos_secciones/HISTORIA004.png' },
    { title: 'MOTIVACIONES', imageUrl: '/fotos_secciones/HISTORIA005.png' },
  ];

  const carousel2 = [
    { title: 'OPORTUNIDADES', imageUrl: '/fotos_secciones/NUESTROPROGRAMA001.png' },
    { title: 'NUESTRO COMPROMISO', imageUrl: '/fotos_secciones/NUESTROPROGRAMA002.png' },
    { title: 'FUTURO', imageUrl: '/fotos_secciones/NUESTROPROGRAMA003.png' },
    { title: 'FUTURO', imageUrl: '/fotos_secciones/NUESTROPROGRAMA004.png' },
    { title: 'FUTURO', imageUrl: '/fotos_secciones/NUESTROPROGRAMA006.png' },
    { title: 'FUTURO', imageUrl: '/fotos_secciones/NEUSTROPROGRAMA007.png' },
  ];

  const carousel3 = [
    { title: 'INNOVACION', imageUrl: '/fotos_secciones/MOTIVACIONES001.png' },
    { title: 'CALIDAD', imageUrl: '/fotos_secciones/MOTIVACIONES002.png' },
    { title: 'SERVICIOS', imageUrl: '/fotos_secciones/MOTIVACIONES003.png' },
    { title: 'SERVICIOS', imageUrl: '/fotos_secciones/MOTIVACIONES004.png' },
    { title: 'SERVICIOS', imageUrl: '/fotos_secciones/MOTIVACIONES005.png' },
    { title: 'SERVICIOS', imageUrl: '/fotos_secciones/MOTIVACIONES006.png' },
    { title: 'SERVICIOS', imageUrl: '/fotos_secciones/MOTIVACIONES007.png' },
  ];

  const carousel4 = [
    { title: 'HAZ MATCH CON TU ESTACION', imageUrl: '/fotos_secciones/QUESEHALOGRADO.png' },
    { title: 'NUESTRO PROGRAMA', imageUrl: '/fotos_secciones/QUESEHALOGRADO001.png' },
    { title: 'MOTIVACIONES', imageUrl: '/fotos_secciones/QUESEHALOGRADO002.png' },
    { title: 'MOTIVACIONES', imageUrl: '/fotos_secciones/QUESEHALOGRADO003.png' },
    { title: 'MOTIVACIONES', imageUrl: '/fotos_secciones/QUESEHALOGRADO004.png' },
    { title: 'MOTIVACIONES', imageUrl: '/fotos_secciones/QUESEHALOGRADO005.png' },
    { title: 'MOTIVACIONES', imageUrl: '/fotos_secciones/QUESEHALOGRADO006.png' },
    { title: 'MOTIVACIONES', imageUrl: '/fotos_secciones/QUESEHALOGRADO007.png' },
  ];

  const carousel5 = [
    { title: 'HAZ MATCH CON TU ESTACION', imageUrl: '/fotos_secciones/AGRADECIMIENTOS001.png' },
    { title: 'NUESTRO PROGRAMA', imageUrl: '/fotos_secciones/AGRADECIMIENTOS002.png' },
    { title: 'MOTIVACIONES', imageUrl: '/fotos_secciones/AGRADECIMIENTOS003.png' },
    { title: 'MOTIVACIONES', imageUrl: '/fotos_secciones/AGRADECIMIENTOS004.png' },
  
  ];


  const toggleMenu = () => {
    setMenuOpen(!menuOpen); //toggle menu burger
  }

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setIsAnimating(false);
      }, 1000); // Match this to the animation duration (1s)
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  // Calculate the next slide index
  const nextSlide = (currentSlide + 1) % slides.length;
  return (
    <div className="min-h-screen bg-zinc-800">
      {/* Header */}
      <header className="relative bg-orange-600 text-white flex justify-between items-center p-4 w-full z-20">
        <div className="flex items-center">
          <Image src="/ISOLOGO_ARIEL_ACUÑA_09.png" alt="Logo" width={105} height={105} className="w-auto h-auto"/>
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

      <div className="relative h-[500px] overflow-hidden">
        {/* Current Slide */}
        <div
          className={`absolute inset-0 h-full w-full transition-all duration-1000 ease-in-out ${isAnimating ? 'animate-slideOutLeft' : ''
            }`}
        >
          <Image
            src={slides[currentSlide].imageUrl}
            alt={slides[currentSlide].title}
            fill={true}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <h1 className="text-3xl font-bold text-white">{slides[currentSlide].title}</h1>
          </div>
        </div>

        {/* Next Slide */}
        <div
          className={`absolute inset-0 h-full w-full transition-all duration-1000 ease-in-out ${isAnimating ? 'anie3mate-slideLeft' : 'hidden'
            }`}
        >
          <Image
            src={slides[nextSlide].imageUrl}
            alt={slides[nextSlide].title}
            fill={true}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            <h1 className="text-3xl font-bold text-white">{slides[nextSlide].title}</h1>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="relative bg-zinc-800 p-4 text-center">
        <h3 className="text-white mb-2">¡SÍGUEME EN MIS REDES!</h3>
        <div className="flex justify-center space-x-4 text-white text-3xl">
          <a href="https://www.instagram.com/arielacunacerda/" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} className="text-white h-6 w-6 hover:text-gray-400" />
          </a>
          <a href="https://www.tiktok.com/@arielacunacerda" aria-label="Tiktok">
            <FontAwesomeIcon icon={faTiktok} className="text-white h-6 w-6 hover:text-gray-400" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61565480699944" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="text-white h-6 w-6 hover:text-gray-400" />
          </a>
        </div>
      </div>

      {/* Header Burger Menu Options */}
      {menuOpen && (
        <div className={`absolute w-full top-[60px] bg-purple-700 bg-opacity-80 p-4 transition-all duration-500 ease-in-out ${menuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
          <nav className="flex flex-col items-center justify-center text-white space-y-8">
            <a href="#history" className="block hover:bg-gray-600 p-2 rounded transition-colors">Conoce mi historia</a>
            <a href="#program" className="block hover:bg-gray-600 p-2 rounded transition-colors">Nuestro Programa</a>
            <a href="#motivations" className="block hover:bg-gray-600 p-2 rounded transition-colors">Motivaciones</a>
            <a href="#achievements" className="block hover:bg-gray-600 p-2 rounded transition-colors">Que se ha logrado</a>
            <a href="#contribute" className="block hover:bg-gray-600 p-2 rounded transition-colors">Contribuye</a>
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
          <div className="ml-12 mr-12 pt-2 pb-4 justify-normal text-justify">
            <p>Durante mis años como dirigente social, he forjado un fuerte compromiso con el servicio público. He trabajado incansablemente para mejorar la calidad de vida de mis vecinos en Estación Central, siempre con la convicción de que el servicio público es la clave para construir una sociedad más justa y solidaria. Hoy, con más de 7 años de experiencia en labores comunitarias, me presento como candidato a concejal con la esperanza de seguir contribuyendo al bienestar de nuestra comuna.</p>
          </div>
          <div className="relative ">
          <Carousel slides={carousel1}/>
          </div>

          <div className="ml-10 mr-10 pt-4 pb-4  text-justify">
            <p>Soy Ariel Acuña, hijo de una familia tradicional chilena, de clase media esforzada y sacrificada. Desde pequeño, mis padres me inculcaron valores como la humildad, la gratitud y la disciplina, lecciones que han marcado cada aspecto de mi vida personal y profesional.
            </p>
            <br></br>
            <p>Ingeniero en Marketing, titulado del Instituto Profesional Duoc UC, donde aprendí a ver más allá de los números y las estrategias, enfocándome siempre en el impacto humano y social de cada proyecto que llevo adelante. Esta formación me ha ayudado a desarrollar habilidades analíticas y de gestión claves para mis proyectos y desafíos.
            </p>
            <br></br>
            <p>Durante más de 7 años me he dedicado a actividades de labor social, siendo dirigente vecinal y participando activamente en proyectos que buscan crear un impacto en la vida de mis vecinos de Estación Central. He trabajado en múltiples iniciativas, desde la organización de eventos comunitarios hasta la gestión de recursos para solucionar problemas barriales.
            </p>
            <br></br>
            <p>Como persona, valoro profundamente la honestidad, la comprensión y la empatía, cualidades que considero imprescindibles para liderar con responsabilidad y humanidad. Mi vocación de servicio público está marcada por mi capacidad de resolver problemas, siempre dispuesto a escuchar y trabajar en conjunto con quienes me rodean.
            </p>
          </div>
        </div>

        {/* programa */}

      </section>
      <section id="program" className="">
        <div className="bg-purple-400 opacity-100">
          <div className="pt-4 pb-2 relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-3xl font-bold text-black">NUESTRO PROGRAMA</h1>
          </div>
          <div className="ml-12 mr-12   pt-2 pb-4 justify-normal">
            <p className="text-black text-justify">Mi bandera de lucha es trabajar por un proyecto que potencie las organizaciones territoriales, la cohesión entre vecinos, sus organizaciones y su relación con el municipio.</p>
          </div>
          <div className="relative">
          <Carousel slides={carousel2}/>
          </div>
          <div className="text-black ml-10 mr-10 pt-4 pb-4  text-justify">
            <p>Como candidato a concejal, mi compromiso es promover el desarrollo integral de la comuna de Estación Central, a través de acciones concretas en diversas áreas:</p>
            <br></br>
            <p><strong>Normar, resolver y fiscalizar</strong></p>
            <br></br>
            <p>Una de mis principales responsabilidades será fiscalizar de manera rigurosa la administración municipal para asegurar la transparencia y eficiencia en la gestión de recursos. Mi participación no solo será de carácter fiscalizador, sino también consultivo y propositivo, proponiendo mejoras y soluciones a las necesidades de la comunidad.
            </p>
            <br></br>
            <p>Me compreto a impulsar el desarrollo de proyectos en areas fundamentales.</p>
            <br></br>
            <p><strong>Salud:</strong> Fomentar la Mejora en la calidad de vida promoviendo una vida sana, actividades en pos de la salud mental y el bienestar comunitario.</p>
            <br></br>
            <p><strong>Infraestructura y Urbanismo:</strong> Fiscalización de obras públicas importantes, como la remodelación de la RUTA 68, el Canal Ortuzano, el Proyecto Sitio Eriazo Av. Oceánica, entre otros. </p>
            <br></br>
            <p><strong>Deporte y Juventudes:</strong> Apoyar a las juventudes mediante programas como torneos deportivos y la vinculación de estudiantes de la USACH en organizaciones territoriales.
            </p>
            <br></br>
            <p><strong>Compromiso con la Comunidad:</strong> Creo en el poder de las comunidades organizadas, por lo que fomentaré la creación de organizaciones sin fines de lucro y el desarrollo de un Fondo de inicio para organizaciones territoriales. Además, trabajaré para fomentar la tecnologización de las Juntas de Vecinos y otros servicios municipales, transformando a estas instituciones en Unidades vecinales de carácter público que estén alineadas con las necesidades del siglo XXI.
            </p>
            <br></br>
            <p><strong>Trabajo con Transparencia y Dedicación:</strong> Mi compromiso es total. De salir electo como concejal, me dedicaré exclusivamente a la gestión municipal como trabajo a tiempo completo. Seré un representante cercano, sincero y proactivo, dispuesto a escuchar y actuar en beneficio de todos los centralinos.
            </p>
            <br></br>
            <p>Este programa refleja mi visión de un municipio más transparente, comprometido con el bienestar de su gente, y preparado para enfrentar los desafíos del futuro con soluciones reales y concretas hoy.</p>
          </div>
        </div>
      </section>

      {/* motivaciones */}

      <section id="achivements" className="">
        <div className="bg-customYellow opacity-100">
          <div className="pt-4 pb-2 relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-3xl font-bold text-black">MOTIVACIONES</h1>
          </div>
          <div className="ml-12 mr-12   pt-2 pb-4 justify-normal text-justify">
            <p className="text-black">Mi mayor motivación para ser concejal es cumplir con mi vocación al servicio público, aportar mi granito de arena y dejar una huella positiva en la comuna que me ha visto crecer. 
            </p>
          </div>
          <div className="relative">
          <Carousel slides={carousel3}/> 
          </div>
          <div className="text-black ml-10 mr-10 pt-4 pb-4 text-justify">
          <p>Quiero aportar con mi experiencia y la formación que he desarrollado tanto en el sector privado como en el rol de dirigente. Mi objetivo es aportar y promover  la profesionalización del municipio, desde el Concejo Municipal. 
          </p>
          </div>
        </div>
      </section>

      {/* logros */}

      <section id="achievements" className="">
        <div className="bg-customOrangeLight opacity-100">
          <div className="pt-4 pb-2 relative z-10 flex flex-col items-center justify-center text-center h-full text-white">
            <h1 className="text-3xl font-bold">QUE SE HA LOGRADO HASTA AHORA</h1>
          </div>
          <div className="ml-12 mr-12   pt-2 pb-4 justify-normal text-justify">
            <p className="">En mi rol como dirigente vecinal, he podido impulsar una serie de actividades deportivas, culturales, de seguridad y actividades para ayudar a vecinas y vecinos.</p>
          </div>
          <div className="relative">   
                   <Carousel slides={carousel4}/>
          </div>
        </div>
      </section>

      {/* contribuye */}

      <section id="contribute" className="">
        <div className="bg-orange-500 opacity-100">
          <div className="ml-12 mr-12   pt-2 pb-4 justify-normal text-justify">
            <p className="mt-8">Si compartes mi visión de que la política necesita la energía, voluntad y actitud de jóvenes profesionales con vocación, te invito a ser parte de esta historia.</p>
          </div>
          <div className="flex justify-center items-center pt-6 pb-6">
            <button className="bg-purple-600 text-white font-bold py-8 px-20 rounded hover:bg-purple-700 text-2xl">
              ¡CONTRIBUYE!
            </button>
          </div>
          <div className="ml-12 mr-12   pt-2 pb-8 justify-normal text-justify">
            <p>Si confías en mi proyecto y trabajo, te invito a que me apoyes donando a mi candidatura o interactuando en mis redes sociales.</p>
          </div>
        </div>
      </section>

      {/* Contacto */}

      <section id="contact" className="">
        <div className="bg-orange-50 opacity-100">
          <div className="pt-4 pb-2 relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-3xl font-bold text-orange-500">CONTACTO</h1>
          </div>
          <div className="ml-10 mr-10   pt-2 pb-8 justify-center flex flex-col items-center text-black text-justify">
            <br></br>
            <p>Si quieres conocer más de mi candidatura, ayudar en la entrega de volantes o necesitas saber más, no dudes en escribirme:</p>
            <br></br>
            <p><strong>WSP: +569 4475 17814</strong></p>
          </div>
          <div>
            <EmailForm />
          </div>
        </div>
      </section>

      {/* Agradecimientos */}

      <section id="thanks" className="">

        <div className="bg-purple-600 opacity-100">
          <div className="pt-4 pb-2 relative z-10 flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-3xl font-bold text-white">AGRADECIMIENTOS</h1>
          </div>
          <div>
            <Carousel slides={carousel5}/>            
          </div>
          <div className="ml-8 mr-8   pt-2 pb-8 justify-normal text-justify">
            <p>Porque este camino no se camina solo, les agradezco infinitamente a todos los que han dedicado tiempo y energía y en especial a mi equipo, que juntos estamos comprometidos a mejorar la calidad de vida de los centralinos y centralinas.</p>
          </div>
        </div>
      </section>

      {/*flecha pa arria*/}
      <ScrollToTop />
    </div>
  );
}
