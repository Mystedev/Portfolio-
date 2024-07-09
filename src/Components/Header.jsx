import './Styles/Header.css'

function Header() {
    const Info_person = {
        section1: "Sobre Mi",
        section2: "Skills",
        section3: "Proyectos",
        section4: "Experiencia",
        section5: "Contacto"
    }
    return (
        <header className='header-section'>
            <a className='index-section' href="#">{Info_person.section1}</a>
            <a className='index-section' href="#">{Info_person.section2}</a>
            <a className='index-section' href="#">{Info_person.section3}</a>
            <a className='index-section' href="#">{Info_person.section4}</a>
            <a className='index-section' href="#">{Info_person.section5}</a>
      </header>
    )
}

export default Header