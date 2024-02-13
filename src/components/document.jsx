import React, { useEffect, useState } from 'react';
import logo from "../assets/images/download.png";
import { useParams } from 'react-router-dom';
import BOL from './bol';
import Invoice from './invoice';
import Packing from './packinglist';

export default function Docs(){
    // const [image, setImage] = useState([]);
    const [billType,setBillType] = useState('');

    const { id } = useParams();
    
    useEffect(() => {
        // const item = sessionStorage.getItem(id);
        const bill = localStorage.getItem(id);
        setBillType(JSON.parse(bill))
    }, [id]);   

    // function handleDashboard(e){
    //     e.preventDefault();
    //     window.location.href = '/dashboard';
    // }

    return(
        <>
            <nav className="container-fluid navbar navbar-expand-sm bg-light">
                <div className="container">
                    <div className='navbar-brand col-sm-3 text-center'>
                        <a href='/'><img src={logo} alt="navbar" ></img></a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="col-sm-8 collapse navbar-collapse" id="navbarNavDarkDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item nav-link">
                                <button className="btn btn-success" aria-current="page" onClick={()=> window.location.href = '/'}>Home</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {billType.type === 'Bill of Lading' && <BOL img = {billType.image} name = {billType.name}table = {billType.table} form = {billType}/>}
            {billType.type === 'Invoice' && <Invoice img = {billType.image} name = {billType.name} table = {billType.table} form = {billType}/>}
            {billType.type === 'Packing List' && <Packing img = {billType.image} name = {billType.name} table = {billType.table} form = {billType}/>}
        </>

    );
}