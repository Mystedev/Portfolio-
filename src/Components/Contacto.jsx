/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Styles/Contacto.css'
//CONTACT ICONS
import { IoMdContact } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";

function Contacto() {
  return (
    <section className="contact-section">
      <h3>Contacto <IoMdContact /></h3>
      <div className="info">
        <a href="#">moyadeni267@gmail.com <BiLogoGmail /></a>
        <a href="#">+34 642-664-859 <FaWhatsapp /></a>
        <a href="#">Spain</a>
      </div>
    </section>
  )
}

export default Contacto