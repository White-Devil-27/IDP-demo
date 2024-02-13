import React from "react";

export default function Packing(props){
    return(
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={props.img} style={{ width: '100%', height: '70%' }} className="img-thumbnail" alt="packing"></img> 
                    </div>
                    <div className='col-sm-6'>
                        <div className='col-sm-6 text-center p-2 pl--box'>
                            <h4>Packing List - <a style={{color: "blue"}}>({props.name})</a></h4>
                            <h6></h6>
                        </div>
                        <form className='mt-5'>
                            <div className='col-sm-12'>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className='col-sm-4'>
                                            <h6>Shipper</h6>
                                        </div>
                                        <div className='col-sm-11'>
                                            <span style={{fontSize: "15px"}}>{props.form.shipper}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className='col-sm-4'>
                                            <h6>Consignee</h6>
                                        </div>
                                        <div className='col-sm-11'>
                                            <span style={{fontSize: "15px"}}>{props.form.consignee}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 mt-5'>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className='col-sm-4'>
                                            <h6>Invoice #</h6>
                                        </div>
                                        <div className='col-sm-11'>
                                            <span style={{fontSize: "15px"}}>{props.form.invoiceNo}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className='col-sm-4'>
                                            <h6>Invoice Date</h6>
                                        </div>
                                        <div className='col-sm-11'>
                                            <span style={{fontSize: "15px"}}>{props.form.invoiceDate}</span>
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
                                            <span style={{fontSize: "15px"}}>{props.form.origin}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className='col-sm-6'>
                                            <h6>Port of Discharge</h6>
                                        </div>
                                        <div className='col-sm-11'>
                                            <span style={{fontSize: "15px"}}>{props.form.destination}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className='table--packing--top--margin'>
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
                                        <td>{item.id}</td>
                                        <td>{item.description}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.grossWeight}</td>
                                        <td>{item.netWeight}</td>
                                        <td>{item.volume}</td>
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