import React from 'react'
import ReactDOM from 'react-dom'

class Componente extends React.Component{
    render(){
        return <h1>Olá, {this.props.nome}</h1>
    }
}

class CompJSON extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.informações.nome}</p>
                <p>{this.props.informações.idade}</p>
            </div>
        )
    }
}

var dados = {nome: 'Jeff', idade: 23}

ReactDOM.render(<CompJSON informações={dados} />, document.getElementById('root'))