import react from 'react'
import reactdom from 'react-dom'

// sem JSX
const element = react.createElement('h1', {}, 'Sem JSX')

// com JSX
reactdom.render(element, <h1>Com JSX</h1>, document.getElementById('root'))