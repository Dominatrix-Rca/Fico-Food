import React from 'react';
import { FaRegBell } from "react-icons/fa";
import { FaSistrix} from "react-icons/fa";
import {FiPlusCircle} from "react-icons/fi";



function Overview(){
    return(
     <div>
         <div className="container">
            <div className="sub-container">
                <h2>Overview</h2>
                <p>Jacques Kagabo</p>
                <FaRegBell/>
                <FaSistrix/>
                <label className="new-client">New client</label><br></br><input type="text" placeholder="New client"></input><FiPlusCircle/>
                <div className="side-bar">
                 <h3><span>Fico-</span>Food</h3>
                 <p className="overview">Overview</p>
                 <p className="client">Client</p>
                 <p className="users">Users</p>
                 <p className="settings">Settings</p>
                 <p className="account">My account</p>
                </div>
                <div className="main">
                    <p className="sort">Sort</p>
                    <p className="filter">Filter</p>
                    <h3 className="all-clients">All Clients</h3>
                    <table>
                        <tr>
                            <th>Client details</th>
                            <th>Sales</th>
                            <th>Client details</th>

                        </tr>
                    </table>
                </div>
            </div>
         </div>
     </div>
    )
}
export default Overview;