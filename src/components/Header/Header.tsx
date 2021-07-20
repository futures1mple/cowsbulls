import React from 'react'
import './Header.css'
import { ReactComponent as Logo } from '../../assets/cowsbulls.svg'
interface HeaderProps {
}

const Header: React.FC<HeaderProps> = () => {
    return (
        <div className="Header">
            <div className="container p-4"> 
                <div className="row">
                    <div className="col-6 offset-3 logo">
                        <Logo style={{width:'20rem', height:'5rem'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;