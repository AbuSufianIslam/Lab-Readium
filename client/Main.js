import React from 'react'
import Navbar from './Navbar'
import Stories from './Stories'

export default class Main extends React.Component {
  render () {
    return (
      <div id='main'>
        <div className='column container'>
          <div id='header'>
            <h1>Readium</h1>
          </div>
          <Navbar />
        </div>
        <Stories />
      </div>
    )
  }
}
