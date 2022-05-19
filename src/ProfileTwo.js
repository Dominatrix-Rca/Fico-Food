import React, { Component } from 'react'
import './profiletwo.css'
import FormTwo from './components/FormTwo'
import RestoInfo from './components/RestoInfo'

class ProfileTwo extends Component {
  render() {
    return (
      <div className='container'>
          <div className='left'>
              <RestoInfo />
          </div>
          
            <div className='right'>
                <FormTwo />
            </div>
      </div>
    )
  }
}

export default ProfileTwo