import React from 'react'
import ExperienceList from '../ExperienceList/ExperienceList'

const Experience = (props) => {

    const {experiencia} = props.dados

    return (
        <div className="experience">
            <h2>Experiência Profissional</h2>

            {experiencia.map(item => (
                    <ExperienceList key={item.id} experienceList={item} />
            ))}
            
      </div>
    )
}

export default Experience
