import React from 'react'
import './Header.css'

interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <div className="Header">
            <div className="container p-4"> 
                <div className="row">
                    <div className="col-3 logo">
                        Cows and Bulls
                    </div>
                    <div className="col-7 nav-bar">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;