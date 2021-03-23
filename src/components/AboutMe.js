import React from "react";
import './AboutMe.sass'



class AboutMe extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            resume: process.env.PUBLIC_URL + "/pdfs/Andy_Danforth_Resume.pdf"
        }
        this.openResume = this.openResume.bind(this);
    }

    openResume(){
        window.open(this.state.resume);
    }
    render(){
        return(
            <div className = "about css-selector">
                <h2>About Me</h2>
                <button onClick = {this.openResume}>RESUME</button>
                <div className = "grid-container">
                    {/* <img src = "../images/unknown.png" className="grid-item picture"/> */}
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