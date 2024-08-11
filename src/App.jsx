/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './App.css'
// Components imported
import Presentacion from './Components/Presentacion'
import Header from './Components/Header'
import Experiencia from './Components/Experiencia'
import Contacto from './Components/Contacto'
import Proyectos from './Components/Proyectos'
import { MdStars } from "react-icons/md";
import { RiExternalLinkLine } from "react-icons/ri";
// Hooks imported
import { useState } from 'react'
import { useEffect } from 'react'
function App(){
  //Dynamic alert on window title
  window.addEventListener('blur', () => {
    //On change the page ->
    setTimeout((
      document.title = 'Hey vuelve!🙋‍♂️'
    ),1500)
  })
  window.addEventListener('focus', () => {
    //While we stay on the actually page
    document.title = 'dennys.dev'
  })
  //Show or hide the content on the experience side
  const [showExperiencia] = useState(true)
  const [showPresentacion] = useState(true)
  //Render the webpage
  return (
    <main className='custom-app' id=''>
      <Header
      section1="Presentacion" 
      section2="Experiencia" 
      section4="Proyectos"
      section5="Contacto"
    />
      <section className='introduction-section'>
        {showPresentacion ? ( <Presentacion /> ) : ('')}
        {showExperiencia ? 
        (<Experiencia 
          position="Tecnico de redes y hardware 💻" 
          data="5/1/2020 - 20/6/2020" />)
         : ('')
        }
        <div className='projects-section'>
          <h1>Proyectos <MdStars id='star-project'/></h1>
          <Proyectos 
            name="Weather App" 
            url="/public/preview_weatherApp.png"
            description="A simple weather app used to know the time in a specific country
            and the weather in the next 5 days."
            stack="/public/js.png"
            stack2="/public/logo_dark.svg"
            stack3="/public/css-3.png"
          />
          <Proyectos 
            name="Spotify Clon"
            url="https://private-user-images.githubusercontent.com/138665791/345059188-5aa31808-4e1e-4482-83f5-d3f93384c2f0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjMzODAxOTYsIm5iZiI6MTcyMzM3OTg5NiwicGF0aCI6Ii8xMzg2NjU3OTEvMzQ1MDU5MTg4LTVhYTMxODA4LTRlMWUtNDQ4Mi04M2Y1LWQzZjkzMzg0YzJmMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODExJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgxMVQxMjM4MTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mOTU5MDk4MzE0MWFlNDQ1NzA4NjlkODlkYzhlOTEyMzE3OGM0ZDE2ZGE0Y2U0NjE2ZTNlNDIyMGQwN2U0ZmI1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.jKGHYCiyUK3LdvlRaU_pmS3KrT8xg8q9jcXtVhB6-Mk"
            description="A clone of the spotify web, where you can search for songs and listen it.
            Pd:*Is only a design, javascript doesn't work yet, it's coming soon*"
            stack="/public/js.png"
            stack2="/public/html.png"
            stack3="/public/css-3.png"
          />
          <a className='more-info' href="https://github.com/Mystedev">Ver mas <RiExternalLinkLine /></a>
        </div>
        <div className='contact-section'>
          <Contacto />
        </div>
      </section>
    </main>
  )
}

export default App
