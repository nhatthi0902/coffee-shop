import React from "react";
import { Link } from "react-router-dom";
import Container from "../Grid/Container";
import Navigation from "../Navigation";
import "./header.scss"
function Header(){
    return(
       <Container>
          <header className="header">
        <div className="logo">
          <Link to= "/">
            <h1>Mộc Coffee!</h1>
          </Link>
        </div>
        <nav><Navigation/></nav>
      </header>
       </Container>
    );
}

export default Header