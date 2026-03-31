import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { noop } from 'antd/es/_util/warning';
import Home from './Components/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Login /> */}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>

      </Router>

    </>);
}

export default App;
