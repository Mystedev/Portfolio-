/* eslint-disable react/prop-types */
import './Styles/Presentacion.css'

const Presentacion = () => {
    //Objetos de Redes sociales
    const Social_Network = {
        linkedin: "Linkedin",
        github: "Github",
    }
    //Presentacion personal e introducción.
  return (
    <div className="container-presentacion">
        <div className="header-container">
            <img src="" alt="" />
            <button  className='btn-presentacion'>Disponible para trabajar</button>
        </div>
        <h1 className='title-presentacion'>Hey, soy Dennys</h1>
        <p>Desarrollador de Software siempre en busca de nuevos conocimientos y desafíos con una fuerte base en el <span>Backend</span> y conocimientos avanzados en el <span>Frontend</span>, puedo abordar casi cualquier producto digital y crear <span>soluciones eficientes.</span> </p>
        <div className="social-network-direct">
            <a className='socials' href="#">{Social_Network.linkedin}</a>
            <a className='socials' href="#">{Social_Network.github}</a>
        </div>
    </div>
  )
}

export default Presentacion