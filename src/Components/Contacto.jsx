/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Estilos importados al componente 'Contacto'
import './Styles/Contacto.css'
// Iconos importados desde -> https://react-icons.github.io/react-icons/
import { useState } from 'react';
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { FaArrowTurnUp } from "react-icons/fa6";
// Servicio para enviar y recibir correos
import { Resend } from 'resend';
// Definicion del componente 'Contacto'
function Contacto() {
  // Mi información personal
  const aboutMe = {
    imageUrl : "/dennys.jpg",
    email:"moyadeni267@gmail.com",
    number:"+34 690 95 50 45"
  }
  // Boton para voler al inicio de la pagina
  const turnUp = <button></button>
  // Iniciamos los atributos del estado 'useState' para crear una notificación al copiar al portapapeles
  const [notification, setNotification] = useState(false)
  const turnUpBtn = <FaArrowTurnUp />
  // Función para copiar al portapapeles
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    console.log('Copied ',text)
    setNotification(!notification)
    setTimeout(()=>{
      setNotification(notification)
    },3000)
  }
  {/*RENDERIZADO DEL COMPONENTE CONTACTO*/}
  return (
    <section className="contact-section" id="contacto">
      <h3>Contacto <img src={aboutMe.imageUrl} alt="Profile" /></h3>
      <div className="info">
        <a 
          onClick={() => copyToClipboard(aboutMe.email)}>
          {aboutMe.email} 
          <FaClipboardList  className='icon' />
        </a>
        <a 
          onClick={() => copyToClipboard(aboutMe.number)}>
          {aboutMe.number} 
          <FaClipboardList  className='icon' />
        </a>
      </div>
      {/*NOTIFICACION PARA AVISAR AL USUARIO DE QUE SE HA COPIADO AL PORTAPAPELES*/}
      {notification ? <div className='notification'>
        <MdOutlineNotificationsActive className='icon_push'/> Copiado al portapapeles!
      </div> : ''}
      {turnUp ? <a className='turn_back' href='#top'>{turnUpBtn}</a> : ''}
      <div className='card-text'>
        <p>Soy un joven apasionado por el <p className='stack'>desarrollo de software y el desarrollo web</p>, actualmente en formación continua para perfeccionar mis habilidades y conocimientos en estas áreas. A lo largo de mi trayectoria educativa, <strong className='strong-point'>he trabajado en diversos proyectos que me han permitido adquirir experiencia práctica y entender las necesidades y desafíos del desarrollo moderno.</strong><br/><p>Aspiro a contribuir a proyectos innovadores y a colaborar con equipos dinámicos donde pueda seguir aprendiendo y compartiendo mi pasión por la tecnología.</p></p>
      </div>
    </section>
  )
}
export default Contacto