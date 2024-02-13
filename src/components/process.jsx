import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BsCheckCircle } from 'react-icons/bs';
import logo from "../assets/images/download.png";

export default function ProcessComponent (){

  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const steps = [
    { content: 'Step 1: Preprocessing', duration: 2500 },
    { content: 'Step 2: Document Storage', duration: 2000 },
    { content: 'Step 3: Document Classification', duration: 3000 },
    { content: 'Step 4: Text Extraction', duration: 3500 },
    { content: 'Step 5: Document Labelling', duration: 2000 },
    { content: 'Step 6: Table Creation', duration: 1500 }
  ];

  useEffect(() => {
    let interval;
    const startProcess = () => {
      let currentProgress = 0;
      let counter = 0;
  
      interval = setInterval(() => {
        currentProgress += (100 / steps.length);
  
        setProgress(currentProgress);
        setStep((prevStep) => prevStep + 1);
        counter++
        if (counter === steps.length) {
          console.log(counter)
          setIsCompleted(true);
          clearInterval(interval);
        }
      }, steps[step].duration);
    };
    startProcess();
    return () => {
      clearInterval(interval);
    };
  }, []);

  function handleClick(e){
    e.preventDefault();
    window.location.href = '/dashboard';
  }

  return (
    <>
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
                  </ul>
              </div>
          </div>
        </nav>

      <div style={{ width: '50%', margin: 'auto', marginTop: '50px' }}>
        {steps.map((s, index) => (
          <div key={index} style={{ display: index === step ? 'block' : 'none' }}>
            <h2>{s.content}</h2>
          </div>
        ))}

        <ProgressBar className='progress-bar-success' animated now={progress} style={{ marginTop: '20px' }} variant="success" />
        
        {isCompleted && 
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
              <BsCheckCircle style={{ color: 'green', marginRight: '5px' }} size={24} />
              <p style={{ color: 'green', marginBottom: '0' }}>Successful!</p>
          </div>
        }
        
        {isCompleted && 
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
              <button className='btn btn-success' onClick={handleClick}>Ok</button>
          </div>
        }
      </div>
    </>
  );
};

