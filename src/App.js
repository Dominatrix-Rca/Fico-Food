import React from 'react';
import './App.css';
<<<<<<< HEAD
import ClientFun from './components/client/clientJoin';
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import OverviewFun from './components/overview/overviewFun';


function App() {
  return (
    <>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/client' element={<ClientFun />}></Route>
          <Route path='/overview' element={<OverviewFun />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Overview/> */}
      </div>
</>
=======
import NavBar from './components/navBar';

function App() {
  return (
    <NavBar />
>>>>>>> f46a42f45bdbb44bc975c0df200c70c8b64a03d5
  );
}

export default App;
