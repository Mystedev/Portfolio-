/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// Estados importados de 'React'
import React, { useState } from 'react'
// Estilos importados al componente
import './Styles/Proyectos.css'
// Iconos importados desde -> https://react-icons.github.io/react-icons/
import { IoLogoGithub } from "react-icons/io5";
// Definicion del componente 'Proyectos'
function Proyectos(props) {  
  {/*RENDERIZADO DEL COMPONENTE PROYECTOS*/}
  return (
    <section className='projects-section' id='proyectos'>
      <div className='this-project'>
        <div className='preview'>
          <img src={props.url} alt="Preview" title='Preview of project' className='img-preview'/>
        </div>
        <aside className='info-project'>
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <div className='stack-used'>
            <img src={props.stack} />
            <img src={props.stack2} />
            <img src={props.stack3} />
          </div>
          <div className='shortcuts'>
            <a className='btn-shortcuts' href={props.preview_link}>Code 
              <IoLogoGithub id='icon-shortcuts'/>
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Proyectos