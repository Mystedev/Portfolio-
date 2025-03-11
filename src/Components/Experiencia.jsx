/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Estilos importados al componente
import './Styles/Experiencia.css'
// Iconos importados desde -> https://react-icons.github.io/react-icons/

// Definicion del componente 'Experiencia'
function Experiencia({ data,position,description}) {
  return (
    <div className='section-experiencia' id='experiencia'>
      
      <div className='introduction'>
        <div className='card-experience'>
          <h3 className='title-experience'>{data}</h3>
          <h4 className='about-work'>{position}</h4>
        </div>
        <p className='description'>{description}</p>
      </div>
    </div>
  )
}

export default Experiencia