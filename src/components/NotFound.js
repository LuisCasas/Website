import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () => (
    <div className="content-container">
        <h2>Oops!! 404 not found - <Link to="/">Back home</Link></h2>
    </div>
);

export default NotFound;