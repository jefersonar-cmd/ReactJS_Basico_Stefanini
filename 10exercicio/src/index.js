import React from "react";
import ReactDOM from "react-dom"

class MeuComponent extends React.Component{

    constructor(props) {
        super(props);

        this.state = {texto:this.props.textoInicial}
    }

    minhaFuncao = (element) => {
        this.setState({texto:element.target.value})
    }

    render() {
        return (
            <div>
                <h1>{this.state.texto}</h1>
                <input type={"text"} onChange={this.minhaFuncao} value={this.state.texto}/>
            </div>
        )
    }
}

ReactDOM.render(<MeuComponent textoInicial={'Digite algo...'}/>, document.getElementById('root'))