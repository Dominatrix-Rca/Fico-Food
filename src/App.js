import React from 'react';
import './App.css';
import ClientFun from './components/client/clientJoin';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import OverviewFun from './components/overview/overviewFun';
import NavBar from './components/navBar';


function App() {
  return (
    <>
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path='/client' element={<ClientFun />}></Route>
          <Route path='/overview' element={<OverviewFun />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Overview/> */}
      </div>
</>
  )
}

export default App;
