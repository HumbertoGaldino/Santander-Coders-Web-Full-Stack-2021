import React, {useState} from 'react';

// export default function HookState(){
//   const [pessoa, setPessoa] = useState({nome:'Humberto', idade:25}); 
//   const onClick = () => {setPessoa({nome: 'Gabriel'}); console.log(pessoa)};

//   return (
//     <h1 onClick={onClick}>{pessoa.nome}</h1>
//   );
// }

export default function HookState(){
  const [nome, setNome] = useState('');

  return(
    <>
      Nome: <input tye='text' value={nome} onChange={(event) => setNome(event.target.value)} />
      <br />
      Olá, {nome}
    </>
  );
}