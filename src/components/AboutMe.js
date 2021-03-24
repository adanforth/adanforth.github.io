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
            <div className = "about">
                <header className = "about-header">
                    <img src = "../images/icon.png" className = "about-header-icon"/>
                    <h1>Hi! I'm Andy</h1>
                    <h2>
                        Undergraduate at University of Washington 
                        <br/>
                        Research Assistant at the Applied Physics Lab
                    </h2>
                </header>
                <main className = "about-main">
                    <div className = "container">
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
                                <h3 className = "m">Contact Me</h3>
                                <p>
                                CONTACT ME. CONTACT ME. CONTACT ME.
                                CONTACT ME.
                                CONTACT ME. 
                                CONTACT ME. 
                                </p>
                            </div>
                    </div>
                </main>
            </div>
            // <div className = "about css-selector">
            //     <div>
            //         <h2>About Me</h2>
            //         <button onClick = {this.openResume}>View My Resume</button>
            //     </div>
            //     <div className = "grid-container">
            //         {/* <div className="grid-item picture">  */}
            //             {/* hello/ */}
            //             <img src = "../images/unknown.png" className = "grid-item picture"/>
            //         {/* </div> */}
            //         <div className="grid-item contact">
            //             <h2>contact</h2>
            //         </div>
            //         <div className="grid-item about-desc">
            //             <h2>About me</h2>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default AboutMe;