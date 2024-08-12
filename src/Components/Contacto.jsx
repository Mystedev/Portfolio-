/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Styles/Contacto.css'
//CONTACT ICONS
import { IoMdContact } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
function Contacto() {
  //My personal info
  const aboutMe = {
    imageUrl : "/dennys.jpg",
    email:"moyadeni267@gmail.com",
    number:"+34 642-664-859"
  }
  //set useState to give to user a push notification
  const [notification, setNotification] = useState(false)
  //Function to copy info from gmail or whatsapp buttons
  // Function to copy info from gmail or whatsapp buttons
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    console.log('Copied ',text)
    setNotification(!notification)

    setTimeout(()=>{
      setNotification(notification)
    },3000)
  };
  //Rendered the 'Contacto' section
  return (
    <section className="contact-section">
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
      {/*NOTIFICATION PUSH AT COPY TO CLIPBOARD*/}
      {notification ? <div className='notification'>
        <MdOutlineNotificationsActive className='icon_push'/> Copiado al portapapeles!
      </div> : ''}
      <div className='card-text'>
        <p>Soy un joven apasionado por el <span className='stack'>desarrollo de software y el desarrollo web</span>, actualmente en formación continua para perfeccionar mis habilidades y conocimientos en estas áreas. A lo largo de mi trayectoria educativa, <strong className='strong-point'>he trabajado en diversos proyectos que me han permitido adquirir experiencia práctica y entender las necesidades y desafíos del desarrollo moderno.</strong><br/><em>Aspiro a contribuir a proyectos innovadores y a colaborar con equipos dinámicos donde pueda seguir aprendiendo y compartiendo mi pasión por la tecnología.</em></p>
      </div>
    </section>
  )
}
export default Contacto;