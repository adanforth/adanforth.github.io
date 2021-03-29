import React from "react";
import './AboutMe.sass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'


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
                                    I am currently a second year undergraduate at the University of Washington Seattle!
                                    I am currently pursuing a double major in Computer Science and Applied and Computational Mathematical
                                    Sciences: Discrete Math and Algorithm. I love working with and learning about different coding langauges and 
                                    software!
                                    <br/>
                                    <br/>
                                    blah blah blah I don't want to fill this out yet. The fonts suck too
                                    
                                </p>
                            </div>
                            <div className  = "col-contact">
                                <h3 className = "m">Contact</h3>
                                <div className = "socials-links">
                                    <a target="_blank" rel="noopener noreferrer" href = "https://github.com/adanforth">
                                        <FontAwesomeIcon icon={faGithubSquare}/>
                                        <span>
                                            Github
                                        </span>
                                    </a>
                                </div>
                                <div className = "socials-links">
                                    <a target="_blank" rel="noopener noreferrer" href = "https://www.linkedin.com/in/andy-danforth-56b0421b9/">
                                        <FontAwesomeIcon icon={faLinkedin}/>
                                        <span>
                                            LinkedIn
                                        </span>
                                    </a>
                                </div>
                                <div className = "socials-links">
                                    <a target="_blank" rel="noopener noreferrer" href = "mailto:deandanfo@gmail.com">
                                        <FontAwesomeIcon icon={faEnvelopeSquare}/>
                                        <span>
                                            Email
                                        </span>
                                    </a>
                                </div>
                                <div className = "socials-links">
                                    <a target="_blank" rel="noopener noreferrer" href = "https://www.instagram.com/deandeandaendean/">
                                        <FontAwesomeIcon icon={faInstagramSquare}/>
                                        <span>
                                            Instagram
                                        </span>
                                    </a>
                                </div>
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