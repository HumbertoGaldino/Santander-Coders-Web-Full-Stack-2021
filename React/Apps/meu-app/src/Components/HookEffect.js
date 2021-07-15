import React, {useStat, useEffect} from 'react';

export default function HookEffect(){
  const [nome, setNome] = useState('');

  useEffect{ }
  return(
    <>
       Nome: <input tye='text' value={nome} onChange={(event) => setNome(event.target.value)} />
      <br />
      Olá, {nome}
    </>
  );
}
