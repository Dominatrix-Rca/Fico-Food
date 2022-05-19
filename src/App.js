import React from 'react';
import './App.css';
import ClientFun from './components/client/clientJoin';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import OverviewFun from './components/overview/overviewFun';
import NavBar from './components/navBar';


function App() {
  return (
    <div>
    <NavBar />
    <Routes>
          <Route path='/client' element={<ClientFun />}></Route>
          <Route path='/overview' element={<OverviewFun />}></Route>
        </Routes>
        <OverviewFun/>
       </div>
    
  )
}

export default App;
