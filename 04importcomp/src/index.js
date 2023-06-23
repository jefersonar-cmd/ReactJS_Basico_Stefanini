import React from 'react'
import ReactDOM from 'react-dom'

// components my

import Component1 from './Component1'
import Component2 from './Component2'

// component do index
class Principal extends React.Component{
    render(){
        return (
            <div>
                <Component1 />
                <Component2 />
            </div>
        )
    }
}

ReactDOM.render(<Principal />, document.getElementById('root'))