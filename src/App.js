import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Container from './Container';
import Landing from './Landing';

function App(){
 


  return (
    <Router>

    <Routes>
    <Route path='/dashboard' element= {<Container />} />
    <Route path='/'  exact element = {<Landing />} />

    </Routes>



    </Router>
  )
}


export default App;