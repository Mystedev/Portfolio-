/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './App.css'
// Components
import Presentacion from './Components/Presentacion'
import Skills from './Components/Hard-Skills'
import Header from './Components/Header'
import Experiencia from './Components/Experiencia'
import Sobre_mi from './Components/Sobre-Mi'
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
    document.title = 'Portfolio-Dennys'
  })
  //Mostrar o ocultar el contenido de la sección experiencia
  let isUsed = false
  let isReady = true
  //Renderizado de la página 'Portfolio'
  return (
    <main className='custom-app'>
      <Header />
      <section className='introduction-section'>
        {isReady ? ( <Presentacion /> ) : ('')}
        {isUsed && <Experiencia 
          position="Tecnico de redes y hardware"
          data="5/1/2020 - 20/6/2020" 
          description="Mantenimiento de equipos y software, 
          gestión y administración de redes y reparación de equipos dañados. 
          Me ocupaba de conectar entre si una serie de equipos para estudiar mediante redes con IPs estáticas" 
        />}
        <div className='skills-section'>
          <Skills isUsed = {true} Title="Backend" />
          <Skills isUsed = {true} Title="Frontend" />
          <Skills isUsed = {true} Title="Databases" />
        </div>
      </section>
    </main>
  )
}

export default App
