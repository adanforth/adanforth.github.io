import React from "react";
import './home.sass'

import AboutMe from './AboutMe'
import Hero from './hero'
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

        this.links = {
            "Home": this.home,
            "About Me": this.AboutMe,
            "To Top": this.home
        };
    }

    Navbar(scrollStatus){
        return(
        <div>
            <ul id = "nav" className = {scrollStatus}>
                <li><a onClick = {this.scrollTo}>Home</a></li>
                <li><a onClick = {this.scrollTo}>About Me</a></li>
                <li><a href="#">Projects</a></li>
                {/* <li><a href="/yeet">Yeet</a></li> */}
            </ul>
        </div>
        );
    }

    MobileNavbar(){
        let menuClicked = !(this.state.menuToggle) ? "" : "change"

        return(
            <div id="mobile-nav" className = {menuClicked}>
                <div id = "movile-nav-hamburger" onClick = {this.menuClick}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
                <ul id = "mobile-nav-list">
                    <li><a onClick = {this.scrollTo}>Home</a></li>
                    <li><a onClick = {this.scrollTo}>About Me</a></li>
                    <li><a href="#">Projects</a></li>
                </ul>
            </div>
        )
    }

    updateWindowDimensions(){
        this.setState({width: window.innerWidth, height: window.innerHeight});
    }

    scrollTo(event) {
        if (this.links[event.target.innerText]){
            this.links[event.target.innerText].current.scrollIntoView({behavior: 'smooth'});
        }
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
                <div ref = {this.home}>
                    <Hero/>
                </div>
                <div ref = {this.AboutMe}>
                    <AboutMe/>
                </div>
                <div>
                    {menuType}
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