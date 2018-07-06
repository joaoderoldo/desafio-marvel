import React from 'react';
import md5 from 'js-md5'

import Card from '../components/Card';
import Navbar from '../components/Navbar';


export default class App extends React.Component{
    constructor() {
        super();
        this.state = {
            dados: null
        };
    }

    componentDidMount() {
        this.getDados();
    }

    getDados() {
        const PUBLIC_KEY = 'ccca70f60e79cc9cfe739c029a6c3466';
        const PRIVATE_KEY = 'c4d7c99bf89f4b8e02470afda7d3aa9affa1f26c';
        const API_URL = 'https://gateway.marvel.com/v1/public/';
        const PARAMETERS = 'comics?format=digital%20comic&formatType=comic&orderBy=focDate&limit=20';

        const hash = md5.create()
        const timestamp = Number(new Date());

        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

        fetch(`${API_URL}${PARAMETERS}&ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`, {
            method: "GET"
        }).then(res => res.json())
        .then(json => {
            this.setState({
                dados: json.data
            });
          });
    }

    render() {
        if (!this.state.dados)
            return <div className={"loader"}>Carregando...</div>;
        
        return(
            <div className={"main"}>
                <Navbar />
                <section className={"cards"}>
                    {this.state.dados.results.map((item, index) => 
                        <Card key={Math.random()} item={item} />
                    )}
                </section>
            </div>
        );
    }
}