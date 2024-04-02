import React from 'react'
import Navbar from "../components/navbar"
import "../styles/globalLayout.css"

  const portfolioStyles = {
    color: "white",
    height: "100%",
    //padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }

function GlobalLayout(props) {

  let centerDivStyle = {};

  if(props.centerStyle)
  {
    console.log("This works!!!");
    centerDivStyle = props.centerStyle
  }

    return ( 
    <main style={portfolioStyles}>
        <Navbar/>
        <div style={centerDivStyle} className='pageStyles'>
            {props.children}
        </div>
        <a style={{paddingBottom: "50px", marginTop: "150px", color: "rgb(70, 70, 70)", textDecoration: "none", fontSize:".8em"}} href="https://www.gatsbyjs.com/">Made with Gatsby.js, a React framework</a>
    </main> 
    );
}

export default GlobalLayout;