import React, { Component } from 'react'
import './profiletwo.css'
import Person from './Person'
import FormTwo from './FormTwo'

import Logo from './Logo'
import RestoInfo from './components/RestoInfo'

class ProfileTwo extends Component {
  render() {
    return (
      <div className='container'>
          <div className='left'>
              <Logo />
              <RestoInfo />
          </div>
          
            <div className='right'>
                <Person />
                <FormTwo />
            </div>
      </div>
    )
  }
}

export default ProfileTwo