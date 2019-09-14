import React from "react";
import NavBar from "./NavBar";
import {Jumbo} from "./Body";


function Categoria(props) {
  return(
    <div>
    <NavBar onClick={props.handler}></NavBar>
    <Jumbo></Jumbo>
    <div className="container table-responsive">
      <table className="table table-bordered mt-3 ml-3 mr-3 mb-3">
        <tbody>
          <tr>
            <h1>Catalogo</h1>
          </tr>
          <tr>
            <td className="align-middle">{props.render[0]}</td>
            <td className="align-middle">{props.render[1]}</td>
            <td className="align-middle">{props.render[2]}</td>
          </tr>
          <tr>
            <td className="align-middle">{props.render[3]}</td>
            <td className="align-middle">{props.render[4]}</td>
            <td className="align-middle">{props.render[5]}</td>
          </tr>
          <tr>
            <td className="align-middle">{props.render[6]}</td>
            <td className="align-middle">{props.render[7]}</td>
            <td className="align-middle">{props.render[8]}</td>
          </tr>
          <tr>
            <td className="align-middle">{props.render[9]}</td>
            <td className="align-middle">{props.render[10]}</td>
            <td className="align-middle">{props.render[11]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default Categoria;