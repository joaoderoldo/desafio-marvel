import React from 'react';

export default class Navbar extends React.Component{
    render(){
        return(
            <nav className={"nav-menu"}>
                <div className={"header-menu"}>
                    Marvel <span>React</span>
                </div>
                <div className={"content-menu"}>
                    <a href="/" className={"link"}>Home</a>
                </div>
            </nav>
        );
    }
}