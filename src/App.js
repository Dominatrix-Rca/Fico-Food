import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Menu from './pages/Menu';
import Landing from './Landing';
import Order from './Order';

function App(){
 


  return (
    <Router>

    <Routes>
    <Route path='/'  exact element = {<Landing />} />
    <Route path='/Menu' element= {<Menu />} />
    <Route path='/Orders' element={<Order />} />

    </Routes>



    </Router>
  )
}


export default App;