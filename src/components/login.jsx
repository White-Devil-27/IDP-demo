import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminNavbar from "../../pages/AdminNavbar";


export default function AdminLogin(){
    
    const [loginUser,setLogin] = useState({
        email : '',
        password : '',
    });

    const [showToast, setShowToast] = useState(false);

    const [access, setAccess] = useState(false);  

    function handleChange(e){
        const {name , value} = e.target;
        setLogin({...loginUser , [name] : value})
    }

    async function handleLogin(e){
        e.preventDefault();
        setLogin({
            email : '',
            password : '',
        })
    }

    };
    return(
        <>
        <div>
            <form method="post" onSubmit={handleLogin}>
                <div className="container admin--login">
                    <div className="mb-4">
                        <h3>Admin</h3>
                    </div>
                    <div className="mb-4">
                        <label className="form-label">Email address</label>
                        <input type="email" value={loginUser.email} name="email" onChange={handleChange} className="form-control" />
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Password</label>
                        <input type="password"  value={loginUser.password} name="password" onChange={handleChange} className="form-control" />
                    </div>
                    
                    <div className="row mb-4">
                        <div className="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                </div>
            </form>
            <div className="mt-5">
                {showToast ? <ToastContainer  autoClose={2500} closeOnClick progressStyle={{ background: 'lightgreen' }}/>:
                <ToastContainer  autoClose={2500} closeOnClick progressStyle={{ background: 'red' }}/>
                }
            </div>
        </div>
        </>
    )