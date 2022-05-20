import React, { Component } from 'react'
import './homepage.css'

class Homepage extends Component {
  render() {
    return (
      <div className='main'>opacity: 0;
        <div className='container'>
          <div>
          <h1>Register your restaurant on fico-food</h1>
          <p>for free and get more revenue</p>
          </div>

          <div className='image'>
            <img src='https://o.remove.bg/downloads/ba3fa087-ba94-4ac8-bc55-2d9b0482b91e/delicious-food-removebg-preview.png' alt=''></img>
          </div>
        </div>

        <div className='buttons'>
          <div className='button-1'>
            <button>Register Your restaurant</button>
          </div>
          <div className='button-2'>
            <button>Arleady Registered? Sign In</button>
          </div>
        </div>

        <div className='guide'>
            <h1>How It Works</h1>
        </div>

      <div className='three'>
      <div>
        <img src='https://images.unsplash.com/photo-1614029951470-ef9eb9952be7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHJhdGV8ZW58MHx8MHx8&w=1000&q=80' alt=''></img>
        <h1>Step 1</h1>
        <p>Register Your Account</p>
      </div>

      <div>
        <img src='https://www.reviewpro.com/wp-content/uploads/2021/07/louis-hansel-wVoP_Q2Bg_A-unsplash-1-scaled.jpg' alt=''></img>
        <h1>Step 2</h1>
        <p>Create Your Restaurant<span>Profile and Create <span>Menu Items</span></span></p>
      </div>

      <div>
        <img src='https://images.unsplash.com/photo-1509315703195-529879416a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRocnV8ZW58MHx8MHx8&w=1000&q=80' alt=''></img>
        <h1>Step 3</h1>
        <p>Start Receiving Orders</p>
      </div>

    </div>
    </div>
    )
  }
}

export default Homepage