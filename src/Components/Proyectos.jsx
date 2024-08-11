/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './Styles/Proyectos.css'
import { MdStars } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io5";
import { IoMdLink } from "react-icons/io";

function Proyectos(props) {
  /*<a className='btn-shortcuts'>Live 
      <IoMdLink id='icon-shortcuts'/>
    </a>
  */ 
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
            <a className='btn-shortcuts'>Code 
              <IoLogoGithub id='icon-shortcuts'/>
            </a>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Proyectos