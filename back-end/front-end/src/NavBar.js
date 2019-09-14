import React from "react";

/* function LinkCategoria(props){
  return(
    <a className="nav-link my-2" href="#categoria" onClick={props.onClick}>Categoria</a>
  );
}

function LinkCategoria2(props) {
  return(
    <a className="nav-link my-2" href="#categoria" onClick={props.onClick}><b>Categoria</b></a>
  )
} */

function ButtonSignIn(props){
  return(
    <button href="#Login" className="nav-link btn btn-dark text-light mx-2 my-2" onClick={props.signIn}>{props.txt}</button>
  )
}

function ButtonLogOut(props){
  return(
      <button href="#LogOut" className="nav-link btn btn-dark text-light mx-2 my-2" onClick={props.logOut}>{props.txt}</button>
  )
}

class NavBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isClicked: true
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
  }

  handleClick(){
    this.setState({
      isClicked: false
    });
  }
  handleClick2(){
    this.setState({
      isClicked: true
    })
  }

  render(){
    let isClicked = this.state.isClicked;
    let link;

    if (isClicked) {
      link = <ButtonSignIn signIn={this.handleClick, this.props.onClick} txt="Sign In"></ButtonSignIn>
    } else {
      link = <ButtonLogOut logOut={this.handleClick2, this.props.onClick} txt="Log Out"></ButtonLogOut>
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
    );
  }
}

export default NavBar;