import React from "react";
import ReactDOM from "react-dom"

class MeuComponent extends React.Component{

    mensagem(){
        alert('Hello World')
    }

    render() {
        return <button onClick={this.mensagem}>Click Aqui</button>
    }
}

ReactDOM.render(<MeuComponent />, document.getElementById('root'))