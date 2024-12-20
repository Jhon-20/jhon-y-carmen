import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Cart';
import Systems from './pages/Invitacion';
import ScrollToTop from './pages/components/scroll/ScrollTop';


function App() {
    return (

        <div className="min-h-full md:h-screen flex items-center justify-center">
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/system" element={<Systems />} />
            </Routes>
        </div>
    );
}

export default App;
