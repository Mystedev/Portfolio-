/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Styles/Proyectos.css'
import { IoLogoGithub } from "react-icons/io5";

function Proyectos(props) {
  return (
    <section className='projects-section'>
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