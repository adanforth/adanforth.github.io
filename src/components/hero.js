import React from "react";
import './hero.sass'

const name = 'Andy Danforth';
const welcomemsg = "Welcome to my website!";


class Hero extends React.Component {
    render (){
        return (
            <div className = "hero">
                <h1>
                    {name}
                    <p>
                        {welcomemsg}
                    </p>
                </h1>
            </div>
        )
    }
}

export default Hero;