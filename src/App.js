import Header from "./components/Header/index"
import Resume from "./components/Resume/index"
import Form from "./components/Form/index"
import Grid from "./components/Grid";
import { useState, useEffect } from "react";
import './App.css';


function App() {
  
  const [dadosFin, setDadosFin] = useState(JSON.parse(localStorage.getItem("Financeiro")) ?? []);
  const [saldo, setSaldo] = useState(0);
  const [entrada, setEntrada] = useState(0);
  const [saida, setSaida] = useState(0);
  const [atualizaGrid, setAtualizaGrid] = useState (false);

  useEffect(() => {
    const TotalSaidas = dadosFin.filter((item) => item.tipo === 1)
    .map((transaction) => Number(transaction.valor))

    const TotalEntradas = dadosFin.filter((item) => item.tipo === 0)
    .map((transaction) => Number(transaction.valor))

    const Entradas = TotalEntradas.reduce((totalAcumulado, corrente) => totalAcumulado + corrente, 0).toFixed (2)
    const Saidas = TotalSaidas.reduce((totalAcumulado, corrente) => totalAcumulado + corrente, 0).toFixed (2)
    const SaldoTotal = Entradas - Saidas

    setSaldo(SaldoTotal)
    setEntrada(Entradas)
    setSaida(Saidas)

  },[atualizaGrid])


  function handleSave(dados){
    const data = [...dadosFin, dados]
    setDadosFin(data);
    setAtualizaGrid(!atualizaGrid)
    localStorage.setItem("Financeiro", JSON.stringify(data))
  }

  function onDelete (index) {
    const data = dadosFin;
    data.splice(index, 1);
    setDadosFin(data);
    setAtualizaGrid(!atualizaGrid)
    localStorage.setItem("Financeiro", JSON.stringify(data))
  }

  return (
    <>
      <Header/>
      <Resume saldo = {saldo} entrada = {entrada} saida = {saida}/>
      <Form handleSave = {handleSave} />
      <Grid dadosFin={dadosFin} onDelete = {onDelete}/>
    </>
  );
}

export default App;
