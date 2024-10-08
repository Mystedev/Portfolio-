/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Estilos importados al componente
import './Styles/Experiencia.css'
// Iconos importados desde -> https://react-icons.github.io/react-icons/
import { MdOutlineWork } from "react-icons/md";

// Definicion del componente 'Experiencia'
function Experiencia({ data,position}) {
  return (
    <div className='section-experiencia' id='experiencia'>
      <h1 className='title-intro'>Experiencia laboral <MdOutlineWork id='work-exprience' /></h1>
      <div className='introduction'>
        <div className='card-experience'>
          <h3 className='title-experience'>{data}</h3>
          <h4 className='about-work'>{position}</h4>
        </div>
        <p className='description'>Mantenimiento de equipos y software, 
          gestión y administración de redes y reparación de equipos dañados. 
          Me ocupaba de conectar entre sí una serie de equipos de una sala de estudio mediante 
          redes con IPs estáticas y administrar todo el entorno de red.</p>
      </div>
    </div>
  )
}

export default Experiencia