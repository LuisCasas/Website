import React from 'react';

export const Header = () => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <img className="header__image" src="/images/lc_logo.png" alt="LuisCasas.com logo" />
           
                <a href="https://github.com/LuisCasas"><button className="button">Github</button></a>
            </div>
        </div>
    </header>
);

export default Header;