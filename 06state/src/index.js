import React from "react";
import ReacDOM from "react-dom"

class Componente extends React.Component{

    constructor(props) {
        super(props);

        this.state = {nome: 'Jeff'}
    }


    render(){
        return <h1>{this.state.nome}</h1>
    }
}

ReacDOM.render(<Componente />, document.getElementById('root'))