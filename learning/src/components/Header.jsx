import React from 'react'
import { Navigation } from './Navigation';

function Header() {
    return (
        <header className="app-header">
            <span>My first React Application</span>
            <Navigation/>
        </header>
    );
}

export { Header };
