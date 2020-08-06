import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { NavigationMenu } from './NavigationMenu';

function Navigation() {

    const [showMenu, setShowMenu] = useState(false);

    let drawerMenuClass = 'nav-drawer-menu';
    let menuMaskClass = 'nav-menu-mask';

    if (!showMenu) {
        menuMaskClass += ' nav-menu-mask-hide ';
        drawerMenuClass += ' nav-drawer-menu-closed';
    }

    return (
        <nav>
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
