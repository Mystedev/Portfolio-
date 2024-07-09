/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './Styles/Skills.css'
import { FaCheck } from "react-icons/fa";

function Skills({ Title,Description }) {
  // Hard skills based on development experience
  let content
  if(Title==="Backend"){
    return (
      <section className='card-container'>
        <h2 className='titles-skills'>{Title}</h2>
        <div className='card-skills'>
          <a href="#"><FaCheck /> Java</a>
          <a href="#"><FaCheck /> Python</a>
          <a href="#"><FaCheck /> C++</a>
          <a href="#"><FaCheck /> .NET</a>
          <a href="#"><FaCheck /> Kotlin</a>
        </div>
      </section>
    )
  }else if(Title==="Frontend"){
    return (
      <section className='card-container'>
        <h2 className='titles-skills'>{Title}</h2>
        <div className='card-skills'>
          <a href="#"><FaCheck /> HTML</a>
          <a href="#"><FaCheck /> CSS</a>
          <a href="#"><FaCheck /> Javascript</a>
          <a href="#"><FaCheck /> React</a>
          <a href="#"><FaCheck /> Astro</a>
        </div>
      </section>
    )
  }else{
    return (
      <div className='card-container'>
        <h2 className='titles-skills'>{Title}</h2>
        <div className='card-skills'>
          <a href="#"><FaCheck /> MySQL</a>
          <a href="#"><FaCheck /> PostgreSQL</a>
        </div>
      </div>
    )
  }
}

export default Skills