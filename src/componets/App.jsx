import { Routes, Route, Navigate } from 'react-router-dom';

import { SharedLayout } from './sharedLayout/SharedLayout';
import Home from 'pages/Home';
import Tweets from 'pages/Tweets';
import './App.css';

function App() {
    return (
        <div className='main-container'>
            <Routes>
                <Route path="/" element={<SharedLayout/>}>
                    <Route index element={<Home/>} />
                    <Route path="/tweets" element={<Tweets/>} />
                </Route>
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default App;
