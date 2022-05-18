import React from 'react';
import './client.css';
// import {useNavigate} from 'react-router-dom';
import {Link} from "react-router-dom"
// import Overview from './overview';

const Client =()=>{
  // const navigate = useNavigate();
  return (
  <div>
      <div className="container">
          <div className="left-side">
              <h1><span>Fico-</span>Food</h1>
          </div>
          <div className="right-side">
            <div className="client">
            <h3>Client</h3>
            </div>
            <form>
              <label className="label">Client</label><br></br><input type="text" name="client" placeholder="Client name"></input><br></br>
              <label className="label">Category</label><br></br><input type="text" name="category" placeholder="Choose a category"></input><br></br>
              <label className="label">Representative</label><br></br><input type="text" name="representative" placeholder="Names"></input><br></br>
              <label className="label">Date of creation</label><br></br><input type="text" name="date" placeholder="Month &#38;year"></input><br></br>
              <label className="label">Address</label><br></br><input type="text" name="address" placeholder="Province, District, Sector, Cell"></input><br></br>
              <label className="label">Email</label><br></br><input type="text" name="email" placeholder="Email"></input><br></br>
              <label className="label">Phone</label><br></br><input type="text" name="phone" placeholder="Phone"></input><br></br>
              <label className="label">Bank account&#x276A;IBAN&#x276B;</label><br></br><input type="text" name="bank" placeholder="Bank account"></input><br></br>

              <Link to="/overview">
              <button type="submit" className="add-client" >Add-client</button>
              </Link>
            </form>
          </div>
      </div>
      {/* <Overview /> */}
    </div>
  )
  }


export default Client;
