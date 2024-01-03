import React, { useState } from 'react';
import { calcularImc, classificarImc } from './imc';
import './assets/styles.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultadoIMC, setResultadoIMC] = useState('');
  const [classificacaoIMC, setClassificacaoIMC] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');

  const calcularIMC = () => {
    if (!peso || !altura) {
      setMensagemErro('Por favor, preencha ambos os campos de peso e altura.');
      return;
    }

    const imc = calcularImc(parseFloat(peso), parseFloat(altura));
    const classificacao = classificarImc(imc);

    setResultadoIMC(imc.toFixed(2));
    setClassificacaoIMC(classificacao);
    setMensagemErro('');
  };

  return (
    <>
      <form>
        <h1>Calculadora de IMC</h1>
        <label>
          Peso (kg):
          <input
            type="number"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />
        </label>
        <br />
        <label>
          Altura (m):
          <input
            type="number"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={calcularIMC}>
          Calcular IMC
        </button>
      </form>
      {mensagemErro && <p className="erro">{mensagemErro}</p>}
      {resultadoIMC && classificacaoIMC && (
        <div className="result">
          <h2>Resultado</h2>
          <p>IMC: {resultadoIMC}</p>
          <p>Classificação: {classificacaoIMC}</p>
        </div>
      )}
    </>
  );
}

export default App;
