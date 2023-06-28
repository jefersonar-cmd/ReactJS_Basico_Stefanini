import React from "react";
import ReactDOM from "react-dom"

class MeuComponent extends React.Component{

    mensagem(nome){
        alert('Olá ' + nome)
        console.log(this)
    }

    render() {
        return <button onClick={this.mensagem.bind(this, 'Jeff')}>Click Aqui</button>
    }
}

ReactDOM.render(<MeuComponent />, document.getElementById('root'))