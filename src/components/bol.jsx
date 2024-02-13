import React from "react";

export default function BOL(props){
    return(
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={props.img} style={{ width: '100%', height: '70%' }} className="img-thumbnail"></img> 
                    </div>
                    <div className='col-sm-6'>
                        <div className='col-sm-6 text-center p-3 bol--box'>
                            <h5>Bill of Lading - <a style={{color: "blue"}}>({props.name})</a></h5>
                        </div>
                        <form className='mt-5'>
                            <div className='col-sm-12'>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className='col-sm-4'>
                                            <h6>Shipper</h6>
                                        </div>
                                        <div className='col-sm-10'>
                                            <span style={{fontSize: "13px"}}>{props.form.shipper}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className='col-sm-4'>
                                            <h6>Consignee</h6>
                                        </div>
                                        <div className='col-sm-10'>
                                            <span style={{fontSize: "13px"}}>{props.form.consignee}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 mt-5'>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className='col-sm-6'>
                                            <h6>Port of Origin</h6>
                                        </div>
                                        <div className='col-sm-11'>
                                            <span style={{fontSize: "13px"}}>{props.form.origin}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="row">
                                            <div className='col-sm-4'>
                                                <h6>Carrier</h6>
                                            </div>
                                            <div className='col-sm-10'>
                                                <span style={{fontSize: "13px"}}>{props.form.carrier}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 mt-5'>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className='col-sm-6'>
                                            <h6>Port of Discharge</h6>
                                        </div>
                                        <div className='col-sm-11'>
                                            <span style={{fontSize: "13px"}}>{props.form.destination}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className='col-sm-4'>
                                            <h6>Container #</h6>
                                        </div>
                                        <div className='col-sm-11'>
                                            <span style={{fontSize: "13px"}}>{props.form.container}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 mt-5'>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className='col-sm-4'>
                                            <h6>Packages</h6>
                                        </div>
                                        <div className='col-sm-11'>
                                            <span style={{fontSize: "13px"}}>{props.form.packages}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className='col-sm-4'>
                                            <h6>Payment</h6>
                                        </div>
                                        <div className='col-sm-11'>
                                            <span style={{fontSize: "15px"}}>{props.form.payments}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="table--bol--top--margin">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{background : "lightgray"}}>Id</th>
                                        <th style={{background : "lightgray"}}>Description</th>
                                        <th style={{background : "lightgray"}}>Qty</th>
                                        <th style={{background : "lightgray"}}>Gross Weight</th>
                                        <th style={{background : "lightgray"}}>Net Weight</th>
                                        <th style={{background : "lightgray"}}>Volume</th>
                                    </tr>
                                </thead>
                                {props.table.map((item) => (
                                <tbody>
                                    <tr>
                                        <td style={{fontSize: "13px"}}>{item.id}</td>
                                        <td style={{fontSize: "13px"}}>{item.description}</td>
                                        <td style={{fontSize: "13px"}}>{item.qty}</td>
                                        <td style={{fontSize: "13px"}}>{item.grossWeight}</td>
                                        <td style={{fontSize: "13px"}}>{item.netWeight}</td>
                                        <td style={{fontSize: "13px"}}>{item.volume}</td>
                                    </tr>
                                </tbody>
                                ))}
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}