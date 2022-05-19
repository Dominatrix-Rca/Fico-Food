import React, { Component } from 'react'

class RestoInfo extends Component {
  render() {
    return (
      <div>
        <div className='intro'>
            <h3>
                1.Create Your <span>Restaurant Profile</span>
            </h3>
            <ul>
                <li>
                    <div className='one'>1</div>
                    <div className='two'>
                        <span className='span-one'>Restaurant Information</span>
                        <span className='span-two'>Lorem ipsum dolor sit </span>
                        <span className='span-three'>Amet Random Text Around </span>
                    </div>
                </li>

                <li>
                    <div className='one'>2</div>
                    <div className='two'>
                        <span className='span-one'>Restaurant Type & Image</span>
                        <span className='span-two'>Lorem ipsum dolor sit </span>
                        <span className='span-three'>Amet Random Text Around </span>
                    </div>
                </li>

                <li>
                    <div className='one'>3</div>
                    <div className='two'>
                        <span className='span-one'>Create Your Menu </span>
                        <span className='span-two'>Lorem ipsum dolor sit </span>
                        <span className='span-three'>Amet Random Text Around </span>
                    </div>
                </li>

            </ul>

          </div>
      </div>
    )
  }
}

export default RestoInfo