/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Styles/Header.css'
function Header(props) {
    //Alerta dinamico en el titulo de la ventana
  window.addEventListener('blur', () => {
    //Al cambiar la pagina ->
    document.title = 'Hey vuelve!🙋‍♂️'
  })
  window.addEventListener('focus', () => {
    //While we stay on the actually page
    document.title = 'dennys.dev'
  })
    return (
        <header className='header-section'>
            <a className='index-section' href="#">{props.section1}</a>
            <a className='index-section' href="#">{props.section2}</a>
            <a className='index-section' href="#">{props.section4}</a>
            <a className='index-section' href="#">{props.section5}</a>
      </header>
    )
}

export default Header