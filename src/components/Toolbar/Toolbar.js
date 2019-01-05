import React from 'react';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div></div>
            <div className="toolbar__logo"><a href="/">LOGO</a></div>
            <div className="toolbar__navigation-items">
                <ul>
                    <li><a href="/" >Products</a></li>
                    <li><a href="/" >Users</a></li>
                    <li><a href="/" >About</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar;

    