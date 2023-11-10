import React, { Component } from 'react';
import "../styles/navbar.css"
import { Link } from 'gatsby';
import { isMobile } from 'react-device-detect';
import { StaticImage } from 'gatsby-plugin-image';

let navbarStyle = 
{
    backgroundColor: "rgb(70, 70, 70)",
    overflow: "hidden",
    padding: "14px",
    display: "block",
    marginBottom: "25px",
  }

const navbarLogo =
{
    overflow: "hidden",
    float: "left",
    borderStyle: "none"
}

class Navbar extends Component {

    constructor(props) 
    {
        super(props);

        this.state = 
        {
            isMenuOpen: false,
        }
    }
    
    OnOpenMenu = () =>
    {
        console.log("Yoo");
        this.setState({isMenuOpen: !this.state.isMenuOpen});
    }
    
    
    render() { 
        
        let links = 
        (
            <div className='Links' style={null}>
                <Link to="/games">games</Link>
                <Link to="/vfx" >vfx</Link>
            </div>
        )

        let currentRender = links;
        let button = null;
        
        let logoStyle = {};

        if(isMobile)
        {
            logoStyle = 
            {
                fontSize: "65%"
            }

            button = 
            (
            <button onClick={this.OnOpenMenu}>
                <StaticImage src="../images/ThreeLines.png" style={{height: "70%", aspectRatio: "1/1"}}/>
            </button>
            )

            if(this.state.isMenuOpen)
            {
                currentRender = links;
            }
            else
            {
                currentRender = null;
            }
        }

        return (<div className="Navbar" style={navbarStyle}>
            <Link style={navbarLogo} to="/"><h1 style={logoStyle}>gabriel lucena</h1></Link>
            {button}
            {currentRender}
        </div>);
    }
}
 
export default Navbar;