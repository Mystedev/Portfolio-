/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Estilos y proyectos importados al componente 'Presentacion'
import './Styles/Presentacion.css'
// Iconos importados desde -> https://react-icons.github.io/react-icons/
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaInstagram } from 'react-icons/fa';
import { FaRegUser } from "react-icons/fa";
// Componente definido como 'Presentacion'
const Presentacion = () => {
  // Objetos de Redes sociales
  const Social_Network = {linkedin: "Linkedin",github: "Github",instagram:"instagram"}
  // Presentacion personal e introducción del componente 
  return (
    <div className="container-presentacion" id='presentacion'>
        <div className="header-container">
            <a className='btn-presentacion' href='https://www.linkedin.com/in/dennys-moya-93386927a/'>Disponible para trabajar</a>
        </div>
        <h1 className='title-presentacion'>Hey, soy Dennys <FaRegUser id="user-icon" /></h1>
        <p>Desarrollador de Software, siempre en busca de nuevos conocimientos y desafíos con una fuerte base en el <span>Backend</span> y conocimientos avanzados en el <span>Frontend</span>, puedo abordar casi cualquier producto digital y crear <span>soluciones eficientes.</span> </p>
        <div className="social-network-direct">
            <a className='socials' href="https://www.linkedin.com/in/dennys-moya-93386927a/">{Social_Network.linkedin}<BsLinkedin /></a>
            <a className='socials' href="https://github.com/Mystedev">{Social_Network.github}<FaGithub /></a>
            <a className='socials' href="https://www.instagram.com/d.n.n.y.s09/">{Social_Network.instagram}<FaInstagram /></a>
        </div>
    </div>
  )
}

export default Presentacion