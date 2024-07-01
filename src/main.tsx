import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Cart from './pages/Login.tsx';
import './App.css';
const router = createHashRouter([
    {
        path: "/",
        element: <Cart />
    }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />

    </React.StrictMode>
);
