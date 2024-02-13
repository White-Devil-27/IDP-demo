import './App.css';
import Navbar from './components/navbar';
import ProcessComponent from './components/process';
import Dashboard from './components/table';
import Docs from './components/document';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Navbar />} />
          <Route exact path='/process' element={<ProcessComponent />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/details/:id' element={<Docs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
