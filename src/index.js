import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from './provider/component-provider';
import 'bulma/css/bulma.css';

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
root.render(
    <Provider>
<App/>
</Provider>
) 

