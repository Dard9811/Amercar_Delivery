import React from "react";

function ButtonSignInDisabled(props){
    return (
    <button className="nav-link btn btn-dark text-light mx-2 my-2 disabled" onClick={props.signIn}>{props.txt}</button>
    )
}

function ButtonLogOut(props){
  return(
      <button className="nav-link btn btn-dark text-light mx-2 my-2" onClick={props.logOut}>{props.txt}</button>
  )
}

function NavBar(props){
  let isClicked = props.isClicked;
  let link;
  if (isClicked) {
    link = <ButtonSignInDisabled signIn={props.onClick} txt="Sign in" isClicked={true}></ButtonSignInDisabled>
  } else {
    link = <ButtonLogOut logOut={props.onClick} txt="Log out" ></ButtonLogOut>
  }
  return(
    <div className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="index.html">
          <img className="img-fluid" src="images/Logo.PNG" alt="Logo" width="200" heigth="50"></img>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <form className="form-inline">
              <input type="search" className="form-control mr-sm-2" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success my-2" type="submit">Search</button>
            </form>
            <li className="nav-item my-1">
              {link}
            </li>
          </ul>
        </div>
        <ul className="navbar-nav mr-5">
        </ul>
      </nav>
    </div>
  )
}

export default NavBar;