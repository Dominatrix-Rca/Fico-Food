import React, { Component } from 'react'
import './profile.css'
import Form from '../Form'
import RestoInfo from '../components/RestoInfo'

class Profile extends Component {
  render() {
    return (
      <div className='container'>
          <div className='left'>
            <RestoInfo />
          </div>
          
            <div className='right'>
                <Form />
            </div>
      </div>
    )
  }
}

export default Profile