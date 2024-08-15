import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// import 'bulma/css/bulma.css';
import { store } from './store';
import { Provider } from 'react-redux';
import {NavigationProvider} from './context/navigation';
const el = document.getElementById('root')
const root = ReactDOM.createRoot(el)
el.style.overflowX = 'hidden'
root.render(
    <Provider store={store}>
    <NavigationProvider>
       
            <App/>
       
    </NavigationProvider>
    </Provider>
)
