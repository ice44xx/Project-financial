import { useState } from "react";
import "./style.css"
import Button from "../Button/index"


const Form = ({handleSave}) => {

  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState(0);

  function salvar(event){
    event.preventDefault();

    const dadosfinanceiro = {
      'descricao': descricao,
      'valor': valor,
      'tipo': tipo
    }
    if(dadosfinanceiro.descricao === ""){
      alert("Preencha a descrição")
      return;
    }else if(dadosfinanceiro.valor === 0){
      alert("Preencha o valor")
      return;
    }
    
    handleSave(dadosfinanceiro);
  }

  return (
    <div className='container-form'>
      <div className="container-content-form">
        <div className="content-inputs">
            <label htmlFor="">Descrição</label>
            <input type="text" required onChange={e => setDescricao(e.target.value)}/>
          </div>

          <div className="content-inputs">
            <label htmlFor="">Valor</label>
            <input type="number" required onChange={e => setValor(e.target.value)}/>
          </div>

          <div className="content-radio-group">
            <input type="radio" name='group' defaultChecked id="entrada" onChange={() => setTipo(0)} />
            <label htmlFor="entrada">Entrada</label>
          </div>

          <div className="content-radio-group">
            <input type="radio" name='group' id="saida" onChange={() => setTipo(1)}/>
              <label htmlFor="saida">Saída</label>
          </div>

          <button className='btn' type="submit" onClick={salvar}>Adicionar</button>
          
        </div>
    </div>
  )
}

export default Form