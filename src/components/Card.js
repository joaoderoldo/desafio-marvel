import React from 'react';
import md5 from 'js-md5'

export default class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dados: []
        };
    }

    componentDidMount() {
        this.getDados();
    }

    getDados() {
        const PUBLIC_KEY = 'ccca70f60e79cc9cfe739c029a6c3466';
        const PRIVATE_KEY = 'c4d7c99bf89f4b8e02470afda7d3aa9affa1f26c';

        const hash = md5.create()
        const timestamp = Number(new Date());

        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

        fetch(`https://gateway.marvel.com/v1/public/comics?ts=${timestamp}&format=comic&formatType=comic&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`, {
            method: "GET" // POST
        }).then(res => res.json())
        .then(json => {
            //console.log(json);
            this.setState({
                dados: json.data
            });
            console.log(this.state.dados);
          });
    }

    render(){
        return(
            <article className={"card"}>
                <div className={"thumb"} style={this.props.estilo}></div>
                <a href={this.props.link} className={"link"}>
                    <div className={"thumb-wrapper"} style={this.props.estilo}></div>
                </a>
                <div className={"info"}>
                    <span className={"category"}>{this.props.title}</span>
                    <h2 className={"title"}>{this.props.titulo}</h2>
                    <span className={"writer"}>by <strong className={"author"}>{this.props.autor}</strong></span>
                </div>
            </article>
        );
    }
}