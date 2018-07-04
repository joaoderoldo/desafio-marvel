import React from 'react';

import Navbar from '../components/Navbar';

export default class Detalhes extends React.Component{
    render(){
        if (this.props.match.params.id == 1){
            return(
                <div className={"main"}>
                    <Navbar />
                    <div className={"page-detalhes"}>
                        <div className={"thumb"}>
                            <span className={"date"}>06/13/2012</span>
                            <div className={"image"}>
                                <img src="https://i.annihil.us/u/prod/marvel/i/mg/f/d0/5a79bd467fabf/detail.jpg" className={"img-responsive"} />
                            </div>
                        </div>
                        <div className={"content"}>
                            <div className={"title"}>AMAZING SPIDER-MAN (1999) #687</div>
                            <div className={"description"}>ENDS OF THE PART SIX. Doctor Octopus has a new Sinister Six: the Avengers! Can Spider-Man sacrifice one life to save the entire planet?</div>
                            <div className={"writer"}>Writer: <strong>Dan Slott</strong></div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div className={"main"}>
                    <Navbar />
                    <div className={"page-detalhes"}>
                        <div className={"thumb"}>
                            <span className={"date"}>01/01/2018</span>
                            <div className={"image"}>
                                <img src="https://i.annihil.us/u/prod/marvel/i/mg/9/d0/57ed2d6239a8d/detail.jpg" className={"img-responsive"} />
                            </div>
                        </div>
                        <div className={"content"}>
                            <div className={"title"}>teste</div>
                            <div className={"description"}>The phone rings, and killer-for-hire Harvey embarks on another hit. But nothing's going right this job. There's little room for error in the business of killing - so what happens when one occurs?</div>
                            <div className={"writer"}>Writer: <strong>Len Kaminski</strong></div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}