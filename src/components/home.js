import React from "react";
import './home.sass'

import AboutMe from './AboutMe'
import Hero from './hero'
import Project from './project'
// import Footer from './footer'



class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            scroll: window.scrollY,
            width: window.innerWidth,
            height: window.innerHeight,
            menuToggle: false
        }
        
        this.onScroll = this.onScroll.bind(this);
        this.scrollTo = this.scrollTo.bind(this);
        this.Navbar = this.Navbar.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.menuClick = this.menuClick.bind(this);

        this.home = React.createRef();
        this.AboutMe = React.createRef();
        this.projects = React.createRef();
    }

    Navbar(scrollStatus){
        return(
        <div>
            <ul id = "nav" className = {scrollStatus}>
                <li><a onClick = {this.scrollTo}>Home</a></li>
                <li><a onClick = {this.scrollTo}>About Me</a></li>
                <li><a onClick = {this.scrollTo}>Projects</a></li>
                {/* <li><a href="/yeet">Yeet</a></li> */}
            </ul>
        </div>
        );
    }

    MobileNavbar(){
        let menuClicked = !(this.state.menuToggle) ? "" : "change"
        let navOpen = !(this.state.menuToggle) ? "mobile-nav-closed" : "mobile-nav-opened"

        return(
            <div id="mobile-nav" className = {menuClicked}>
                <div id = "movile-nav-hamburger" onClick = {this.menuClick}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <ul id = "mobile-nav-list" className = {navOpen}>
                    <li><a onClick = {this.scrollTo}>Home</a></li>
                    <li><a onClick = {this.scrollTo}>About Me</a></li>
                    <li><a onClick = {this.scrollTo}>Projects</a></li>
                </ul>
            </div>
        )
    }

    updateWindowDimensions(){
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    scrollTo(event) {
        const yOffset = (this.state.width > 710) ? -87 : 0;

        const id = event.target.innerText
        const element = document.getElementById(id);
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    menuClick(){
        this.setState({menuToggle: !this.state.menuToggle})
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
        let menuType = (this.state.width > 710) ? this.Navbar(scrollStatus) : this.MobileNavbar()

        return (
            <div>
                <div id = "Home">
                    <Hero/>
                </div>
                <div id = "About Me">
                    <AboutMe/>
                </div>
                <div>
                    {menuType}
                </div>
                <div id = "Projects">
                    HELLO
                    <div className = "projects-container">
                        <Project type = "xdd" name = "xdd" desc = "this is an xd" url = "peepee"/>
                    </div>
                    <div className = "projects-container">
                        <Project type = "TEER" name = "asdasd" desc = "xxx is an xd" url = "aww"/>
                    </div>
                </div>
                <div className = "footer">
                    <div className = "copywrite">
                        @ 2021 Andy Danforth
                        <button onClick = {this.scrollTo} className = "footer-button">
                            To Top
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;