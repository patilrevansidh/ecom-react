import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './config/redux';
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
