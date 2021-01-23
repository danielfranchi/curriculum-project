import React from 'react'

const EducationList = (props) => {

    const {instituicao, curso} = props.educationList

    return (
        <div className="lista-de-formacao">
            <li>
                <h4>{instituicao}</h4>
                <p>{curso}</p>
            </li>
        </div>
    )
}

export default EducationList
