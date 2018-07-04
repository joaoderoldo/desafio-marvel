import React from 'react';

import MarvelContainer from '../components/MarvelContainer';

const dados = {
    card1: {
        estilo: {backgroundImage: "url(https://i.annihil.us/u/prod/marvel/i/mg/f/d0/5a79bd467fabf/detail.jpg)"},
        data: "01/03/1993",
        categoria: "Marvel Universe",
        titulo: "IRON MAN (1968) #290",
        descricao: "Tony Stark returns from the dead! Morgan Stark makes his move for control of Stark Enterprises! And no sooner is Tony back in command of his new suit of armor then he's attacked on all sides by weapon-wielding warriors! (Originally published as IRON MAN (1993) #290)",
        autor: "Len Kaminski",
        link: "/detalhes/1",
    },
    
    card2: {
        estilo: {backgroundImage: "url(https://i.annihil.us/u/prod/marvel/i/mg/9/d0/57ed2d6239a8d/detail.jpg)"},
        data: "06/13/2012",
        categoria: "Marvel Universe",
        titulo: "AMAZING SPIDER-MAN (1999) #687",
        descricao: "ENDS OF THE PART SIX. Doctor Octopus has a new Sinister Six: the Avengers! Can Spider-Man sacrifice one life to save the entire planet?",
        autor: "Dan Slott",
        link: "/detalhes/2",
    },
};

export default class App extends React.Component{
    render(){
        return <MarvelContainer {...dados} />;
    }
}