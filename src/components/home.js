import React from "react";
import './home.sass'

import AboutMe from './AboutMe'
import Hero from './hero'




class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            scroll: window.scrollY,
            width: window.innerWidth,
            height: window.innerHeight,
        }
        
        this.onScroll = this.onScroll.bind(this);
        this.scrollTo = this.scrollTo.bind(this);
        this.Navbar = this.Navbar.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

        this.home = React.createRef();
        this.AboutMe = React.createRef();

        this.links = {
            "Home": this.home,
            "About Me": this.AboutMe
        };
    }

    Navbar(scrollStatus, menuType){
        return(
        <div>
            <ul id= {menuType} className = {scrollStatus}>
                <li><a onClick = {this.scrollTo}>Home</a></li>
                <li><a onClick = {this.scrollTo}>About Me</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="/yeet">Yeet</a></li>
            </ul>
        </div>
        );
    }

    updateWindowDimensions(){
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    scrollTo(event) {
        if (this.links[event.target.innerText]){
            this.links[event.target.innerText].current.scrollIntoView({behavior: 'smooth'});
        }
    }

    onScroll(){
        this.setState({scroll: window.scrollY})
    }
    
    componentDidMount(){
        window.addEventListener("scroll", this.onScroll);
        window.addEventListener("resize", this.updateWindowDimensions);
    }
    
    // unmount style lmao

    render (){
        let scrollStatus = (this.state.scroll > 0) ? "scroll" : "";
        let menuType = (this.state.width < 900) ? "mobile-nav" : "nav"

        return (
            <div>
                <div ref = {this.home}>
                    <Hero/>
                </div>
                <div ref = {this.AboutMe}>
                    <AboutMe/>
                </div>
                <div>
                    {this.Navbar(scrollStatus, menuType)}
                </div>
            </div>
        )
    }
}

export default Home;