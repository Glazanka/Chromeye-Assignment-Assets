import React  from 'react';
import { createRoot } from 'react-dom/client'
import './main_css/_reset.scss';
import './main_css/index.scss';


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
