import React from "react";
import ReactDOM from "react-dom"

class MeuComponent extends React.Component{

    mensagem(nome){
        alert('Olá ' + nome)
        console.log(this)
    }

    minhaArrowFunction = (curso) => {
        alert('Hello World Arrow Function do curso: ' + curso)
    }

    teclado = (msg) => {
        alert('Sua mensagem é: ' + msg)
    }
    render() {
        return (
            <div>
                <button onClick={this.mensagem.bind(this, 'Jeff')}>Click Aqui</button>
                <button onClick={()=>{this.minhaArrowFunction('ReactJS')}}>Arrow Function</button>
                <hr />

                <input type={"text"} onChange={(event) => this.teclado(event.target.value)} />
            </div>
        )
    }
}

ReactDOM.render(<MeuComponent />, document.getElementById('root'))