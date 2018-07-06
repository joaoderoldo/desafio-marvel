import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component{
    render(){
        return(
            <nav className={"nav-menu"}>
                <div className={"header-menu"}>
                    Marvel <span>React</span>
                </div>
                <div className={"content-menu"}>
                    <Link to={'/'} className={"link"}>
                        Home
                    </Link>
                </div>
            </nav>
        );
    }
}