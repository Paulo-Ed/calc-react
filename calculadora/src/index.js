import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'
import Calculator from './main/Calculator';

const dom = document.getElementById('root');
const root = createRoot(dom);

root.render(
    <div>
        <h1>Calculadora</h1>
        <Calculator className="calculator"/>
    </div>
);

