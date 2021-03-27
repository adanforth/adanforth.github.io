import React from "react";
import './AboutMe.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons'


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
            <div className = "about">
                <header className = "about-header">
                    <img src = "../images/icon.png" className = "about-header-icon"/>
                    <h1 className = "about-title">Hi, I'm Andy!</h1>
                    <h2>
                        Undergraduate at University of Washington 
                        <br/>
                        Research Assistant at the Applied Physics Lab
                    </h2>
                </header>
                <main className = "about-main">
                    <div className = "container">
                        <div className = "content">
                            <div className  = "col-aboutme">
                                <h3 className = "m">About Me</h3>
                                <p>
                                    A bunch of words. A bunch2323 of words. A bunch of words. 
                                    A bunch of wor212ds. A bunch of words. A bunch of words. 
                                    A bunch of words. Aasd bunch of words. A asdbunch of words. 
                                    A bunch of wosrds. A bunch of words. A bunch of words. 
                                    A bunch of words. Asz bunch of words. A bunch of words. 
                                    A bunch of wosrds. A bunch of wordaaaass. A bunch of words. 
                                </p>
                            </div>
                            <div className  = "col-contact">
                                <h3 className = "m">Contact</h3>
                                <a>
                                    <FontAwesomeIcon className = "socials-links" icon={faGithubSquare}/>
                                </a>
                                {/* <p>
                                github
                                linked in
                                email
                                instagram
                                
                                </p> */}
                            </div>
                        </div>
                    </div>
                <div>
                    <button id = "resume-btn" onClick = {this.openResume}>
                            <h4>
                                View My Resume
                            </h4>
                        </button>
                </div>
                </main>
            </div>
      
        );
    }
}

export default AboutMe;