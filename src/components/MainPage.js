import React from 'react';
import Header from './Header';

const MainPage = () => (
    <div>
        <Header />
        <div className="content-container">
            <h1>Full Stack Web Developer</h1>
            <div className="box-main">
                <div className="box-main__box">
                    <img src="/images/profile.png" alt="Profile image Luis Casas" />
                </div>
            </div>  
            <h2>More coming soon...</h2>          
        </div>
    </div>
);

export default MainPage;