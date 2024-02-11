import React, { Component } from 'react'
// import gif from './1495.gif'
import './CSS/spinner.css'
export class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
}

export default spinner