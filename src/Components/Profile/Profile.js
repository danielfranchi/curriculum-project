import React from 'react'

import logo from '../../Images/foto.jpg'

const Profile = (props) => {

    const {nome, ocupacao, resumo, perfilProfissional} = props.dados

    return (
        <>
            <div className="perfil">
                <img src={logo} alt="Perfil" />
            </div>
            <div className="biografia">
                <h1>
                    {nome}
                </h1>
                <div className="ocupacao">{ocupacao}</div>
                <p>{resumo}</p>
            </div>

            <div className="titulo">
                Perfil <br /> Profissional
            </div>

            <div className="perfil-profissional">
                <p>
                    {perfilProfissional}
                </p>
            </div>  
        </>
    )
}

export default Profile
