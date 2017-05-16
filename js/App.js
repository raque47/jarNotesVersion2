import React from 'react'
import {render} from 'react-dom'
import '../public/main.css'


const App = React.createClass({
  render () {
    return (
      <div className='content'>
          <h1>Hello world</h1>
          <input type='text' placeholder='Search' />
          <button class="buttons">Search Note</button>
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))