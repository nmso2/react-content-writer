import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar-dark bg-dark fixed-top container-fluid">
                <h1 className="text-white mb-0">Create Awesome Content</h1>
                <h3 className="text-white mb-0">Total Budget: 200K</h3>
                <div className="navbar navbar-expand-md navbar-fixed-top navbar-dark bg-dark main-nav p-0 mb-2">
                    <ul className="nav navbar-nav mx-auto">
                        <li className="nav-item"><a className="nav-link" href="./home">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="./about">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="./contact">Contact</a></li>
                        <li className="nav-item"><a className="nav-link" href="./sample">Sample Works</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;