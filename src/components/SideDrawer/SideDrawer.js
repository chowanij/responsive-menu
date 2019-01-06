import React from 'react';

import './SideDrawer.css';


const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    console.log('sideDrawer props:', props);
    if(props.show){
        drawerClasses = 'side-drawer open';
    }   
    return(
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/" >Products</a></li>
                <li><a href="/" >Users</a></li>
                <li><a href="/" >About</a></li>
            </ul>
        </nav>
    );
}
export default sideDrawer;