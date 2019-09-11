import React from "react";

function NavBar(){
  let navBar =
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="index.html">
      <img className="img-fluid" src="images/Logo.PNG" alt="Logo" width="200" heigth="50"></img>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Disabled</a>
        </li>
      </ul>
    </div>
  </nav>;
  return (navBar);
}

/* function NavFooter(){
  let footer =
  <div className="row">
    <div className="col">
      <span id="face">Facebook</span>
    </div>
    <div className="col">
      <span id="insta">Instagram</span>
    </div>
    <div className="col">
      <span id="twit">Twitter</span>
    </div>
  </div>;
  return footer;
} */

export default NavBar;

/* ReactDOM.render(
  <NavFooter />,
  document.getElementById("footer")
) */