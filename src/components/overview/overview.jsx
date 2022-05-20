import React from 'react';
// import { FaRegBell } from "react-icons/fa";
// import { FiMoreVertical} from "react-icons/fa";
import {FiPlusCircle} from "react-icons/fi";
import {FiMoreVertical} from "react-icons/fi";
import {FiEye} from "react-icons/fi";
import "./overview.css";



function Overview(){
    return(
     <div>
         <div className="container">
            <div className="sub-container">
                <label className="new-client">New client</label><br></br>
                <input type="text" placeholder="New client" className="new"></input><FiPlusCircle className="plus"/>
                {/* <div className="side-bar">
                 <h3><span>Fico-</span>Food</h3>
                 <p className="overview">Overview</p>
                 <p className="client">Client</p>
                 <p className="users">Users</p>
                 <p className="settings">Settings</p>
                 <p className="account">My account</p>
                </div> */}
                <div className="main">
                    <p className="sort">Sort</p>
                    <p className="filter">Filter</p>
                    <h3 className="all-clients">All Clients</h3>
                    <table cellspacing="0">
                        <tr>
                            <th>Client details</th>
                            <th>Sales</th>
                            <th>Detailed reports</th>
                            <th>Categories</th>
                        </tr>
                        <tr>
                            <td >Soya restaurant<br></br><p>Updated 1 day ago</p></td>
                            <td>1256789 frw<br></br><p>On 22/12/022</p></td>
                            <td><FiEye className="eye"/></td>
                            <td><button className="resto">Resto</button></td>
                            <td><FiMoreVertical/></td>
                        </tr>
                        <tr>
                            <td>Soya restaurant<br></br><p>Updated 1 day ago</p></td>
                            <td>1256789 frw<br></br><p>On 22/12/022</p></td>
                            <td><FiEye className="eye"/></td>
                            <td><button className="resto">Resto</button></td>
                            <td><FiMoreVertical/></td>
                        </tr>
                        <tr>
                            <td>Soya restaurant<br></br><p>Updated 1 day ago</p></td>
                            <td>1256789 frw<br></br><p>On 22/12/022</p></td>
                            <td><FiEye className="eye"/></td>
                            <td><button className="resto">Resto</button></td>
                            <td><FiMoreVertical/></td>
                        </tr>
                        <tr cellspacing="0">
                            <td>Soya restaurant<br></br><p>Updated 1 day ago</p></td>
                            <td>1256789 frw<br></br><p>On 22/12/022</p></td>
                            <td><FiEye className="eye"/></td>
                            <td><button className="resto">Resto</button></td>
                            <td><FiMoreVertical/></td>
                        </tr>
                        <tr cellspacing="0">
                            <td>Soya restaurant<br></br><p>Updated 1 day ago</p></td>
                            <td>1256789 frw<br></br><p>On 22/12/022</p></td>
                            <td><FiEye className="eye"/></td>
                            <td><button className="resto">Resto</button></td>
                            <td><FiMoreVertical/></td>
                        </tr>
                    </table>
                </div>
            </div>
         </div>
     </div>
    )
}
export default Overview;