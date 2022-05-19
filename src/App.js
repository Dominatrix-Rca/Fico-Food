import React from 'react';
import './App.css';
import ClientFun from './components/client/clientJoin';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import OverviewFun from './components/overview/overviewFun';
import NavBar from './components/navBar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Menu from './pages/Menu';
import Landing from './Landing';
import Order from './Order';

function App(){
  return (
    <div>
    <NavBar />
    <Routes>
          <Route path='/client' element={<ClientFun />}></Route>
          <Route path='/overview' element={<OverviewFun />}></Route>
        <OverviewFun/>
       
          <Route path='/client' element={<ClientFun />}></Route>
          <Route path='/overview' element={<OverviewFun />}></Route>
      <Overview/>
    <Route path='/'  exact element = {<Landing />} />
    <Route path='/Menu' element= {<Menu />} />
    <Route path='/Orders' element={<Order />} />
    </Routes>
     </div>
  )     
}


export default App;