import React from "react";

import Aside from "./Components/Aside/Aside";
import Experience from "./Components/Experience/Experience";
import Perfil from "./Components/Profile/Profile";

import "./App.css"

function App() {

  const fakeAPI =  
    {
      nome: 'Daniel Franchi Mucci',
      ocupacao: 'React Developer',
      resumo: 'Entusiasta das tecnologias Front-End',
      perfilProfissional: 'Densenvolvedor React',
      contatos: [
        {
          id: 1,
          tipo: 'telefone',
          contato: '19 98726-3464'
        },
        {
          id: 2,
          tipo: 'email',
          contato: 'daniel2mf@yahoo.com.br'
        }
      ],
      educacao: [
        {
          id: 1,
          instituicao: 'Uninove',
          curso: 'Análise e Desenvolvimento de Sistemas'
        },
        {
          id: 2,
          instituicao: 'Uninove',
          curso: 'Sistemas para Internet'
        }
      ],
      experiencia: [
        {
          id: 1,
          cargo: 'Bootcamp Desenvolvedor Front-End',
          periodo: 'Setembro 2020 - Novembro 2020',
          empresa: 'IGTI',
          local: 'Belo Horizonte - MG',
          conteudo: 'Programação Front-End'
        },
        {
          id: 2,
          cargo: 'Bootcamp Desenvolvedor Full Stack',
          periodo: 'Maio 2020 - Julho 2020',
          empresa: 'IGTI',
          local: 'Belo Horizonte - MG',
          conteudo: 'Programação Full Stack'
        }
      ]
  }

  const [dados] = React.useState(fakeAPI)

  return (
    <main>
      
      <Perfil dados={dados}/>
      <Aside dados={dados} />
      <Experience dados={dados} />
      
    </main>
  );
}

export default App;