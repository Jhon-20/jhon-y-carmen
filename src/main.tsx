import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Cart from './pages/Cart.tsx';
import './App.css';
import Invitacion from './pages/Invitacion.tsx';
const router = createHashRouter([
    {
        path: "/",
        element: <Cart />
    },
    {
        path: "/invitacion",
        element: <Invitacion />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
