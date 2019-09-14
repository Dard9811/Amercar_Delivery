import React from "react";

class Footer extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
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
      </div>
    );
  }
}

export default Footer