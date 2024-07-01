import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Systems from './pages/Systems';
import background from "./assets/img/fondoDesktop.gif";
function App() {
    return (
        <div className="min-h-full md:h-screen flex items-center justify-center">
            <img src={background} className='fixed top-0 left-0 w-full min-h-full' alt="" />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/system" element={<Systems />} />
            </Routes>
        </div>
    );
}

export default App;
