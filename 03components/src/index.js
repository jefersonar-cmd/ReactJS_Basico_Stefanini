// Import models
import React from 'react'
import  ReactDOM  from 'react-dom'

// componente
class MeuComponente extends React.Component{
    render(){
        return <h1>Meu Primeiro Component</h1>
    }
}

// Render
ReactDOM.render(<MeuComponente />, document.getElementById('root'))