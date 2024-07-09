/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Styles/Experiencia.css'

function Experiencia({ data,position,description}) {
  return (
    <div className='section-experiencia'>
      <h1 className='title-intro'>Experiencia laboral</h1>
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