import React from 'react';
import Header from './Header';

const MainPage = () => (
    <div>
        <Header />
        <div className="content-container">
            <h1>Hi there! My name is Luis Casas</h1>
            <div className="box-main">
                <div className="box-main__box">
                    <img src="/images/profile.png" alt="Profile image Luis Casas" />
                </div>
            </div>            
        </div>
    </div>
);

export default MainPage;