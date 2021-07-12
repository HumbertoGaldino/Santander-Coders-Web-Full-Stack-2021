import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import App2 from './Components/App2';
import App3 from './Components/App3';
import App4 from './Components/App4';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App2 title = "Título">
      Conteúdo
    </App2>

    <App2 title = "Título 2">
      Conteúdo 2
    </App2>

    <App3>

    </App3>

    <App4>

    </App4>
    
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
