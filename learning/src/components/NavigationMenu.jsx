import React from 'react'

import { Link } from 'react-router-dom';

function NavigationMenu(props) {

    return (
        <div className="nav-menu-links">
            <Link
                to='/'
                onClick={props.closeMenu}
            >
                Home
            </Link>
            <Link
                to='/about'
                onClick={props.closeMenu}
            >
                About
            </Link>
        </div>
    );
}

export { NavigationMenu }