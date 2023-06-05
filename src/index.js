import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './componets/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
        <BrowserRouter basename='/t1-twit-user-card'>
            <App />
        </BrowserRouter>
    // </React.StrictMode>
);
