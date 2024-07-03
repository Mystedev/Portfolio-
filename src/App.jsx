import './App.css'
import Presentacion from './Components/Presentacion'
import Skills from './Components/Hard-Skills'

function App() {
  const Info_person = {
    section1: "Sobre Mi",
    section2: "Contacto",
    section3: "Proyectos",
    section4: "Experiencia",
  }
  return (
    <main className='custom-app'>
      <header className='header-section'>
        <a className='index-section' href="#">{Info_person.section1}</a>
        <a className='index-section' href="#">{Info_person.section2}</a>
        <a className='index-section' href="#">{Info_person.section3}</a>
        <a className='index-section' href="#">{Info_person.section4}</a>
      </header>
      <section className='introduction-section'>
        <Presentacion />
        <Skills title="Backend"/>
      </section>
    </main>
  )
}

export default App
