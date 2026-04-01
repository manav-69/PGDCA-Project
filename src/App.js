import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { noop } from 'antd/es/_util/warning';
import Home from './Components/Home';
import Complaint from "./Components/Complaint";
import Forgot from "./Components/Forgot";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Login /> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/complaint' element={<Complaint />} />
          <Route path='/forgot' element={<Forgot />} />
        </Routes>

      </Router>

    </>);
}

export default App;
