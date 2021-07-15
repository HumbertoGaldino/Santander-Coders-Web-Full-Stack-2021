import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import App2 from './Components/App2';
import App3 from './Components/App3';
import App4 from './Components/App4';
import App5 from './Components/App5';
import Formulario from './Components/Formulario';
import Listas from './Components/Listas';
import Hello from './Components/Hello';
import HookState from './Components/HookState';
import HookEffect from './Components/HookEffect';
import {Listas2, Item} from './Components/Listas2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App2 title = "Título">
      Conteúdo
    </App2>

    <App2 title = "Título 2">
      Conteúdo 2
    </App2>

    <App3 />

    <App4 /> 

    <App5 /> 

    <Listas />

    <Listas2>
      text
      <Item key={999} id={999} completo={false}>
        Teste1
      </Item>
      <Item key={998} id={998} completo={true}>
        Teste2
      </Item>
    </Listas2>

    <Formulario /> 

    <Hello text="Olá">
      <h1>Hello</h1>
    </Hello>

    <HookState>

    </HookState>*/}

    <HookEffect>
      
    </HookEffect>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
