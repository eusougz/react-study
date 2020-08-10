import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { NavigationMenu } from './NavigationMenu';

function Navigation() {

    const [showMenu, setShowMenu] = useState(false);

    const drawerMenuClass = `nav-drawer-menu ${
        showMenu ?
        '' :
        ' nav-drawer-menu-closed'}`;
    const menuMaskClass = `nav-menu-mask ${
        showMenu ?
        '' :
        ' nav-menu-mask-hide'}`;

    return (
        <nav>
            <Link to='/' className='mr-05'>
                <FontAwesomeIcon
                    icon={faHome}
                />
            </Link>
            <FontAwesomeIcon
                icon={faBars}
                onClick={() => {
                    setShowMenu(!showMenu);
                }}
            />
            <div className={drawerMenuClass}>
                This is menu
                <NavigationMenu closeMenu={() => setShowMenu(false)}/>
            </div>
            <div className={menuMaskClass}
                onClick={() => setShowMenu(false)}
            ></div>
        </nav>
    );
}

export { Navigation };
