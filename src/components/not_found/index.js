import React from 'react';
import { Link } from 'react-router-dom'
import './not_found.css'
import Bg from './bg.jpg'
const NotFound = () => {
    return (
            <div id="notfound">
                <div className="notfound-bg"
                     style={{
                         backgroundImage:`url(${Bg})`
                }}/>
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>
                        Unfortunately, this page does not exist
                        </h2>
                    <Link to="/" className="home-btn">Back to home</Link>
                </div>
            </div>
    );
};

export default NotFound;