// ASSETS ========================================================//
import React from 'react';
import scssHeader from './header.module.scss'; // Ensure you have a type declaration for SCSS modules

// COMPONENTS ====================================================//
const Header: React.FC = () => {
    return (
        <header className={scssHeader.header}>
            <p className={scssHeader.beta}>Beta early access only - v 0.2.1</p>
        </header>
    );
}

export default Header;

// END OF COMPONENT ==============================================//