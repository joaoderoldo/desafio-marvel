import React from 'react';

import Card from './Card';
import Navbar from './Navbar';

export default class MarvelContainer extends React.Component{
    render(){
        const { card1 , card2 } = this.props;

        return(
            <div className={"main"}>
                <Navbar />
                <section className={"cards"}>
                    <Card {...card1} />
                    <Card {...card2} />
                </section>
            </div>
        );
    }
}