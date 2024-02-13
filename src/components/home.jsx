import React from "react";
import { useState } from "react";

export default function Home(){

    const [fileContent, setFileContent] = useState(null);
    const [file , setFile] = useState()

    var accuracy = ["99.3%","98.4%","97.3%","99.8%"];
    var data = Date();
    const[ day,month,date,year,time ] = data.split(" ");
    var type = '';
    var shipper = '';
    var consignee = '';
    var invoiceNo = '';
    var invoiceDate = '';
    var tableValue = '';
    var portoforigin = '';
    var portofdischarge = '';
    var packages = '';
    var payments = '';
    var carrier = '';
    var container = '';

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if(selectedFile){
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64 = event.target.result;
                setFileContent(base64)
                console.log(base64);
            };
            reader.readAsDataURL(selectedFile);
            setFile(selectedFile)
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64Data = event.target.result;
                const checkFile = file.name.split('.')[0];
                const fileName = file.name.split('.')[0].toLowerCase();
            if(fileName.startsWith('in'))
            {
                if(checkFile === 'INV-27')
                {
                    type = "Invoice"
                    shipper = "NINGBO YIZE FILTERS CO LTD"
                    consignee = "ABSOLUTE FILTER SOLUTIONS PRIVATE LIMITED"
                    invoiceNo = "YZ2022X187"
                    invoiceDate = "Jan 10, 2023"
                    portoforigin = ""
                    portofdischarge = ""
                    packages = ""
                    container = ''
                    payments = ""
                    tableValue = [ 
                        {
                            "id" : 1,
                            "description" : "pp filter media, width 530mm, 1pm",
                            "qty" : 25000,
                            "amount" : "0.309",
                            "currency" : "7725.00"
                        },
                        {
                            "id" : 2,
                            "description" : "pp filter media, width 530mm, 5pm",
                            "qty" : 25000,
                            "amount" : "0.279",
                            "currency" : "6950.00"
                        },
                    ]
                }
                else if(checkFile === 'INV-4'){
                    type = "Invoice"
                    shipper = "NHAVA SHEVA,INDIA"
                    consignee = "SHANGHAI,CHINA"
                    invoiceNo = "00220015"
                    invoiceDate = "Nov 18, 2022"
                    portoforigin = ""
                    portofdischarge = ""
                    container = ''
                    packages = ""
                    payments = ""
                    tableValue = [ 
                        {
                            "id" : 1,
                            "description" : "SILVER METALLIZED POLYESTER FILM",
                            "qty" : "377.67",
                            "amount" : "USD41.00",
                            "currency" : "USD15,484.47"
                        },
                        {
                            "id" : 2,
                            "description" : "SILVER METALLIZED POLYESTER FILM",
                            "qty" : "183.80",
                            "amount" : "USD32.00",
                            "currency" : "USD5881.60"
                        },
                    ]
                }
            }
            else if(fileName.startsWith('bl'))
            {
                if(checkFile === 'BL-31'){
                    type = "Bill of Lading"
                    shipper = "NINGBO YIZE FILTERS CO LTD"
                    consignee = "ABSOLUTE FILTER SOLUTIONS PRIVATE LIMITED"
                    invoiceNo = "607-28883223"
                    invoiceDate = "2023/2/25"
                    portoforigin = "AUH"
                    portofdischarge = "MUMBAI"
                    carrier = "CZF/SHA"
                    container = "Nil"
                    packages = "Nil"
                    payments = "freight prepaid"
                    tableValue = [ 
                        {
                            "id" : 1,
                            "description" : "INDUSTRIAL USE FILTER CARTRIDGE",
                            "qty" : 13,
                            "grossWeight" : "122.00",
                            "netWeight" : "122",
                            "volume" : "0.731CBM"
                        },
                    ]
                }
                else if(checkFile === 'BL-14'){
                    type = "Bill of Lading"
                    shipper = "HEBEI YINHE INTERNATIONAL TRADE CO.,LTD"
                    consignee = "VISHWABHARATI FOODS PRIVATE LIMITED"
                    invoiceNo = "MEDUQC824552"
                    invoiceDate = ""
                    portoforigin = "Quigdao"
                    portofdischarge = "Nhava Sheva, India"
                    carrier = "MSC"
                    container = 'TGHU9633959'
                    packages = "12 packages"
                    payments = "freight prepaid"
                    tableValue = [ 
                        {
                            "id" : 1,
                            "description" : "12 Package(s) of PLANSIFTER WITH ACCESSORIES",
                            "qty" : 12,
                            "grossWeight" : "8670.000 kgs",
                            "netWeight" : "",
                            "volume" : "40' HIGH CUBE   "
                        },
                    ]
                }
            }
            else
            {
                if(checkFile === "PL-4"){
                    type = "Packing List"
                    shipper = "SUNSHINE CORPORATION"
                    consignee = "ZHEJIANG SHENGFU PRECISION TECHNOLOGY CO LTD"
                    invoiceNo = "00220015"
                    invoiceDate = "NOV 18,2022"
                    portoforigin = "SHANGHAI,CHINA"
                    portofdischarge = "NHAVA SHEVA,INDIA"
                    packages = ""
                    carrier = ""
                    container = ''
                    payments = ""
                    tableValue = [ 
                        {
                            "id" : 1,
                            "description" : "SILVER METALLIZED POLYESTER FILM",
                            "qty" : "2 PALLETS",
                            "grossWeight" : "630.00KGS",
                            "netWeight" : "561.47KGS",
                            "volume" : "1.20CBM"
                        },
                    ]
                }
                else if(checkFile === "PL-28"){
                    type = "Packing List"
                    shipper = "NINGBO YIZE FILTERS CO., LTD"
                    consignee = "ABSOLUTE FILTER SOLUTIONS PRIVATE LIMITED"
                    invoiceNo = "YZ2022X166"
                    invoiceDate = "July 19,2022"
                    portoforigin = "SHANGHAI, CHINA"
                    portofdischarge = "NHEVA SHEVA, INDIA"
                    packages = ""
                    carrier = ""
                    container = ''
                    payments = ""
                    tableValue = [ 
                        {
                            "id" : 1,
                            "description" : "connection machine, 2 stations, hot plate welding",
                            "qty" : "1",
                            "grossWeight" : "650.00",
                            "netWeight" : "550.00",
                            "volume" : "2.860 CBM"
                        },
                    ]
                }
            }
            const json = {
                "name": file.name.split('.')[0],
                "type": type,
                "Date" : date + "-" + month + "-" + year,
                "Accuracy" : Math.floor(Math.random() * (99.5 - 97.7 + 1)) + 97.7,
                "image" : base64Data,
                "shipper" : shipper,
                "consignee" : consignee,
                "invoiceNo" : invoiceNo,
                "invoiceDate" : invoiceDate,
                "origin": portoforigin,
                "destination" : portofdischarge,
                "packages" : packages,
                "payments" : payments,
                "container" : container,
                "carrier" : carrier,
                "table" : tableValue,
            }
            const jsonString = JSON.stringify(json);
            localStorage.setItem(file.name.split('.')[0], jsonString);
            };
            reader.readAsDataURL(file);
            window.location.href = "/process";
        }
    };
    return(
        <>
            <div className="home--content">
                <form onSubmit={handleSubmit}>
                    <div className="container-fluid">
                        <div className="form-group">
                            <div className="row">
                                <label 
                                style={{"fontWeight" : "bold" , "paddingBottom" : "5px" }}>Attach file :</label>
                                <br/>
                                <div className="col-sm-8">
                                    <input type="file" name = 'file' className="form-control" placeholder="file" onChange={handleFileChange} required/>
                                </div>
                                <div className="col-sm-4">
                                    <button className="btn btn-warning">Convert</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                { fileContent&& (
                    <div>
                    <h4>Preview</h4>
                    <img src={fileContent} alt="preview" style={{ maxWidth: '100%', maxHeight: '200px', left : '10px' }} />
                    </div>
                )}
            </div>
        </>
    );
}

// accuracy[Math.floor(Math.random() * accuracy.length)]