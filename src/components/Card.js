import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
    render(){
        return(
            <article className={"card"}>
                <div className={"thumb"} style={{backgroundImage: "url('" + this.props.item.thumbnail.path+'.'+this.props.item.thumbnail.extension + "')"}}></div>
                <Link to={'detalhes/' + this.props.item.id} className={"link"}>
                    <div className={"thumb-wrapper"} style={{backgroundImage: "url('" + this.props.item.thumbnail.path+'.'+this.props.item.thumbnail.extension + "')"}}></div>
                </Link>
                <div className={"info"}>
                    <span className={"category"}>{this.props.item.format}</span>
                    <h2 className={"title"}>{this.props.item.title}</h2>
                    <span className={"writer"}>by <strong className={"author"}>{this.props.item.format}</strong></span>
                </div>
            </article>
        );
    }
}

Card.propTypes = {
    item: PropTypes.object
}