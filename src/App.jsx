/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './App.css'
// Componentes del proyecto importados desde la estructura de este ->
import Presentacion from './Components/Presentacion'
import Header from './Components/Header'
import Experiencia from './Components/Experiencia'
import Contacto from './Components/Contacto'
import Proyectos from './Components/Proyectos'
// Iconos importados al proyecto desde -> https://react-icons.github.io/react-icons/
import { MdStars } from "react-icons/md";
import { RiExternalLinkLine } from "react-icons/ri";
// Estados importados al proyecto
import { useState } from 'react'
function App(){
  // Muestra o oculta el contenido de la página utilizando <-Estados->
  const [showExperiencia] = useState(true)
  const [showPresentacion] = useState(true)
  const [hide , setHide] = useState(false)
  // Boton que nos lleva al inicio de la pagina
  const [showHome,setShowHome] = useState(true)
  const btnHome = <button></button>
  {/*RENDERIZADO DE LA APLICACIÓN PORTFOLIO EN REACT*/}
  return (
    <main className='custom-app' id='top'>
      <Header className="header-section"/>
      <section className='introduction-section'>
        {showPresentacion ? 
        ( <Presentacion /> ) : ('')}
        {showExperiencia ? 
        (<Experiencia 
          position="Tecnico de redes y hardware 💻" 
          data="5/1/2020 - 20/6/2020" />)
         : ('')}
        <div className='projects-section'>
          <h1>Proyectos <MdStars id='star-project'/></h1>
          <Proyectos 
            name="Weather App" 
            url="https://github.com/user-attachments/assets/52ce2421-198c-49fe-b03e-f26371608daa"
            description="Simple weather app used to know the time in a specific country
            and the weather in the next 5 days."
            stack="/public/js.png"
            stack2="/public/html.png"
            stack3="/public/css-3.png"
            preview_link="https://github.com/Mystedev/Weather-App"
          />
          <Proyectos 
            name="Spotify Clon"
            url="public/spotify.png"
            description="Clone of the spotify web, where you can search for songs and listen it.
            Pd:*Is only a design, javascript doesn't work yet, it's coming soon*"
            stack="/public/js.png"
            stack2="/public/html.png"
            stack3="/public/css-3.png"
            preview_link="https://github.com/Mystedev/Spotify-Clon-Web"
          />
          <Proyectos 
            name="Tic Tac Toe Game"
            url="https://github.com/user-attachments/assets/637fe574-4ef1-4043-86d7-c746f1c3e540"
            description="Tic Tac Toe game to play and reset fast games, is a little project but hardly"
            stack="/public/js.png"
            stack2="/public/html.png"
            stack3="/public/css-3.png"
            preview_link="https://github.com/Mystedev/Tic-Tac-Toe"
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
