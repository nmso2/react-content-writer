import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar-dark bg-dark fixed-top container-fluid">
                <div className="navbar navbar-expand-md navbar-fixed-top navbar-dark bg-dark main-nav">
                    <ul className="nav navbar-nav mx-auto">
                        <li className="nav-item"><a className="nav-link" href="./home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="./about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="./contact">Contact</a></li>
                        <li className="nav-item"><a className="nav-link" href="./sample">Sample Works</a></li>
                    </ul>
                </div>
                <p className="text-white">Total Budget: 200k</p>
            </nav>
        </div>
    );
};

export default Header;