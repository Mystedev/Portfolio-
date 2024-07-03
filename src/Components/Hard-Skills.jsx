import './Styles/Skills.css'

function Skills(props) {
  
  const hardSkills = {
    skill1:'Java',
    skill2:'Python',
    skill3:'C++',
    skill4:'C#',
  }

  return (
    <div className="hard-skills-container">
      <h1 className='title-hard-skills'>{props.title}</h1>
      <div>
        <a className='skill' href="#">{hardSkills.skill1}</a>
        <a className='skill' href="#">{hardSkills.skill2}</a>
        <a className='skill' href="#">{hardSkills.skill3}</a>
        <a className='skill' href="#">{hardSkills.skill4}</a>
      </div>
    </div>
  )
}

export default Skills