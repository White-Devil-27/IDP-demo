import React from "react";

export default function Invoice(props){
    return(
        <>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={props.img} style={{ width: '80%' , height : '80%'}} className="img-thumbnail" alt="invoice"></img> 
                    </div>
                    <div className='col-sm-6'>
                        <div className='col-sm-4 text-center p-2 inv--box'>
                            <h5>Invoice - <a style={{color: "blue"}}>({props.name})</a></h5>
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
                                        <div className='col-sm-10'>
                                            <span style={{fontSize: "15px"}}>{props.form.invoiceDate}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="table--invoice--top--margin">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th style={{background : "lightgray"}}>Id</th>
                                        <th style={{background : "lightgray"}}>Description</th>
                                        <th style={{background : "lightgray"}}>Qty</th>
                                        <th style={{background : "lightgray"}}>Amount</th>
                                        <th style={{background : "lightgray"}}>Currency</th>
                                    </tr>
                                </thead>
                                {props.table.map((item) => (
                                <tbody>
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.description}</td>
                                        <td>{item.qty}</td>
                                        <td>{item.amount}</td>
                                        <td>{item.currency}</td>
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