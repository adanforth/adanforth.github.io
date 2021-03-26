import React from "react";
import './project.sass'

// {this.props.name}
// {this.props.desc}
// {this.props.url}

class Project extends React.Component{
    constructor(props){
        super(props)
        this.state = {}

    }
    render(){
        return(
            <div className = "project-showcase">
                <div className = "icon icon-test">
                    <div className = "icon-on-hover">
                        <a target="_blank" rel="noopener noreferrer" className = "git-link-button" href = "https://ifunny.co/">LINK</a>
                    </div>
                </div>
                <div className = "desc">
                    <p>{this.props.type}</p>
                    <h2>{this.props.name}</h2>
                </div>
            </div>
        )
    }
}

export default Project
