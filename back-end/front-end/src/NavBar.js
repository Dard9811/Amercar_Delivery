import React from "react";

function LinkCategoria(props){
  return(
    <a className="nav-link" href="#categoria" onClick={props.onClick}>Categoria</a>
  );
}

function LinkCategoria2(props) {
  return(
    <a className="nav-link" href="#categoria" onClick={props.onClick}><b>Categoria</b></a>
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
      link = <LinkCategoria onClick={this.handleClick, this.props.onClick}></LinkCategoria>
    } else {
      link = <LinkCategoria2 onClick={this.handleClick2, this.props.onClick}></LinkCategoria2>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                {link}
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;