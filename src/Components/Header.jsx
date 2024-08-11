/* eslint-disable no-undef */
/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Styles/Header.css'
function Header(props) {

    return (
        <header className='header-section'>
            <a className='index-section' href="#">{props.section1}</a>
            <a className='index-section' href="#">{props.section2}</a>
            <a className='index-section' href="#">{props.section3}</a>
            <a className='index-section' href="#">{props.section4}</a>
            <a className='index-section' href="#">{props.section5}</a>
      </header>
    )
}

export default Header