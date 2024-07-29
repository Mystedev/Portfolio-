/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './App.css'
// Components
import Presentacion from './Components/Presentacion'
import Skills from './Components/Hard-Skills'
import Header from './Components/Header'
import Experiencia from './Components/Experiencia'
import Contacto from './Components/Contacto'
import Proyectos from './Components/Proyectos'
// Hooks
import { useState } from 'react'
function App(){
  //Eventos del DOM
  window.addEventListener('blur', () => {
    setTimeout((
      document.title = 'Hey vuelve!🙋‍♂️'
    ),1500)
  })
  window.addEventListener('focus', () => {
    document.title = 'dennys.dev'
  })
  //Mostrar o ocultar el contenido de la sección experiencia
  const [showExperiencia] = useState(true)
  const [showPresentacion] = useState(true)
  //Renderizado de la página 'Portfolio'
  return (
    <main className='custom-app'>
      <Header 
      section1="Presentacion" 
      section2="Experiencia" 
      section3="Skills" 
      section4="Contacto"
      section5="Proyectos"
    />
      <section className='introduction-section'>
        {showPresentacion ? ( <Presentacion /> ) : ('')}
        {showExperiencia ? 
        (<Experiencia 
          position="Tecnico de redes y hardware 💻" 
          data="5/1/2020 - 20/6/2020" />)
         : 
         ('')
        }
        <div className='projects-section'>

        </div>
        <div className='contact-section'>
          <Contacto />
        </div>
      </section>
    </main>
  )
}

export default App
