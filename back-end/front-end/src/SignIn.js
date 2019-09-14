import React from "react";
import NavBar from "./NavBar";

function SignIn(props){
  return(
    <div>
      <NavBar onClick={props.handler}></NavBar>
    </div>
  )
}

export default SignIn;