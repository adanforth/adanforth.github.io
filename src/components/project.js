import React from "react";
import './project.sass'

// {this.props.name}
// {this.props.desc}
// {this.props.url}

class Project extends React.Component{
    constructor(props){
        super(props)
    }
    

    render(){
        if(this.props.isMobile) {
            return(
                <div className = "mobile-project-showcase">
                    <div className = "mobile-desc">
                        <p className = "desc-type">{this.props.type}</p>
                        <h2 className = "desc-name">{this.props.name}</h2>
                        <p className = "desc-desc">{this.props.desc}</p>
                    </div>
                    <div className = "mobile-icon-on-hover">
                        <a target="_blank" rel="noopener noreferrer" className = "git-link-button" href = "https://google.com/">LINK</a>
                    </div>
                </div>
            )
        } else {
            return(
                <div className = "project-showcase">
                    <div className = "icon icon-test">
                        <div className = "icon-on-hover">
                            <a target="_blank" rel="noopener noreferrer" className = "git-link-button" href = "https://google.com/">LINK</a>
                        </div>
                    </div>
                    <div className = "desc">
                        <p className = "desc-type">{this.props.type}</p>
                        <h2 className = "desc-name">{this.props.name}</h2>
                        <p className = "desc-desc">{this.props.desc}</p>
                    </div>
                </div>
            )
        } 
    }
}

export default Project
