import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       Hello World
//     </div>
//   );
// }

//Utilização do JSX no render(). Todo o conteúdo deve estar encapsulado, podendo ser em uma única div, por exemplo.

//Para utilizar Javascript dentro do componente render() que está utilizando JSX, é necessário inserir o código entre chaves -> {new Date().toLocaleDateString('pt-BR')}
class App extends React.Component{
  render(){
    return(
      <div>
        <p>Meu primeiro parágrafo</p>
        <p>Meu segundo parágrafo</p>

        <p>
          {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>
    );
  }
}

export default App;
