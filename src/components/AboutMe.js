import React from "react";
import './AboutMe.sass'

class AboutMe extends React.Component{
    render(){
        return(
            <div className = "about css-selector">
                <h2>About Me</h2>
                <div className = "grid-container">
                    <img src = "../images/unknown.png" className="grid-item picture">
                    </img>
                    <div className="grid-item contact">
                        <h2>contact</h2>
                    </div>
                    <div className="grid-item about-desc">
                        <h2>About me</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;