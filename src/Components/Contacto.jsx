/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Styles/Contacto.css'
//CONTACT ICONS
import { IoMdContact } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

function Contacto() {
  const aboutMe = {
    imageUrl : "./public/dennys.jpg",
    email:"moyadeni267@gmail.com",
    number:"+34 642-664-859"
  }

  return (
    <section className="contact-section">
      <h3>Contacto <img src={aboutMe.imageUrl} /></h3>
      <div className="info">
        <a>{aboutMe.email} <BiLogoGmail className='icon'/></a>
        <a>{aboutMe.number} <FaWhatsapp className='icon'/></a>
      </div>
      <div className='card-text'>
        <p>Soy un joven apasionado por el <span className='stack'>desarrollo de software y el desarrollo web</span>, actualmente en formación continua para perfeccionar mis habilidades y conocimientos en estas áreas. A lo largo de mi trayectoria educativa, <strong className='strong-point'>he trabajado en diversos proyectos que me han permitido adquirir experiencia práctica y entender las necesidades y desafíos del desarrollo moderno.</strong><br/><em>Aspiro a contribuir a proyectos innovadores y a colaborar con equipos dinámicos donde pueda seguir aprendiendo y compartiendo mi pasión por la tecnología.</em></p>
      </div>
    </section>
  )
}

export default Contacto