import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import Games from './pages/Games';
import Players from './pages/Players';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App>
        <Routes>
          <Route
            path='/'
            element={<App />}
          />
          <Route
            path='/partidos'
            element={<Games />}
          />
          <Route
            path='/jugadores'
            element={<Players />}
          />
          <Route
            path='/*'
            element={<Navigate to='/' />}
          />
        </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);
