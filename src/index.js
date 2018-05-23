import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//render app component on root id
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
