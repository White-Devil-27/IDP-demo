import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import logo from "../assets/images/download.png";

export default function Dashboard() {
  const [localStorageItems, setLocalStorageItems] = useState([]);

  useEffect(() => {
    const keys = Object.keys(localStorage);
    const items = keys.map(key => {
        const value = localStorage.getItem(key);
        const parsedValue = JSON.parse(value)
        return { key, value: parsedValue };
    });
    setLocalStorageItems(items);
  }, []);

//   function handleDashboard(e){
//     e.preventDefault();
//     window.location.href = '/dashboard';
// }

  return (
    <div>
        <nav className="container-fluid navbar navbar-expand-sm bg-light">
          <div className="container">
              <div className='navbar-brand col-sm-3 text-center'>
                  <a href='/'><img src={logo} alt="navbar"></img></a>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="col-sm-8 collapse navbar-collapse" id="navbarNavDarkDropdown">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item nav-link">
                        <button className="btn btn-success" aria-current="page" onClick={()=> window.location.href = '/'}>Home</button>
                      </li>
                      {/* <li className="nav-item nav-link">
                          <button className="btn btn-primary" aria-current="page" onClick={handleDashboard}>Dashboard</button>
                      </li> */}
                  </ul>
              </div>
          </div>
        </nav>
        <div className='container'>
          <table className="table table-striped mt-5">
          <thead>
              <tr>
              <th scope="col">Document Name</th>
              <th scope="col">Type</th>
              <th scope="col">Entry Date</th>
              <th scope="col">Accuracy</th>
              </tr>
          </thead>
          {localStorageItems.map((item) => (
              <tbody key={item.key}>
              <tr>
              <td><Link to={`/details/${item.key}`}>{item.value.name}</Link></td>
              <td>{item.value.type}</td>
              <td>{item.value.Date}</td>
              <td>{item.value.Accuracy}%</td>
              </tr>
          </tbody>
          ))}
          </table>
      </div>    
    </div>
  );
};
