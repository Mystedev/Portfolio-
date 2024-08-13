/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Styles/Header.css'
function Header() {
  // Alerta dinamico en el titulo de la ventana
  window.addEventListener('blur', () => {
    // Al cambiar de pagina ->
    document.title = 'Hey vuelve!🙋‍♂️'
  })
  window.addEventListener('focus', () => {
    // Mientras estamos en la pagina ->
    document.title = 'dennys.dev'
  })
  // Botones del header para acceder a secciones a través del scroll
  let listSections = {
    section1:"Presentacion",
    section2:"Experiencia",
    section3:"Proyectos",
    section4:"Contacto"
  }
  // Definición del sensor de scroll para animar el header al bajar por la página
  document.addEventListener('scroll', () => {
    const headerScroll = document.querySelector('.header-section')
    console.log(window.scrollY)
    if (window.scrollY > 0) {
      headerScroll.classList.add('scrolled')
    } else {
      headerScroll.classList.remove('scrolled')
    }
  })
  {/*RENDERIZADO DEL CONTENIDO DEL HEADER*/}
  return (
    <header className='header-section'>
      <a className='index-section' id='top'></a>
      <a className='index-section' href="#presentacion">{listSections.section1}</a>
      <a className='index-section' href="#experiencia">{listSections.section2}</a>
      <a className='index-section' href="#proyectos">{listSections.section3}</a>
      <a className='index-section' href="#contacto">{listSections.section4}</a>
    </header>
  )
}

export default Header