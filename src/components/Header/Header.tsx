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
                    <div className="col-12 col-md-6 offset-md-3 logo">
                        <Logo style={{width:'100%', height:'5rem'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;