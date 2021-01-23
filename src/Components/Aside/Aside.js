import React from 'react'
import ContactList from '../ContactList/ContactList'
import EducationList from '../EducationList/EducationList'

const Aside = (props) => {

    const {contatos} = props.dados
    const {educacao} = props.dados

    const [dados, setDadoss] = React.useState(false)

    return (
        <aside>
            <div className="sidebar">
                <h3>Contatos</h3>
                <button onClick={ () => setDadoss(!dados)}>Mostrar Contatos</button>

                {dados && contatos.map(item => (
                    <ContactList key={item.id} contactList={item} />
                ))}
            </div>


            <div className="sidebar">
                <h3>Educação</h3>

                {educacao.map(item => (
                    <EducationList key={item.id} educationList={item} />
                ))} 
            </div>
      </aside>
    )
}

export default Aside
