import React from 'react';
import ReactDOM from 'react-dom';
import './resources/css/normalize.css'
import './resources/fonts/stylesheet.css'
import './resources/css/main.css'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";


const App =()=>{
    return(
        <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    )
};
ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
