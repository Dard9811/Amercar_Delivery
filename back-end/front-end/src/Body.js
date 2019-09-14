import React from "react";

function Jumbo() {
  return(
    <div className="jumbotron text-center">
      <h1>Amercar Domicilios</h1>
      <p>Sirviendote para facilitar tu mercado!</p>
    </div>
  );
}

function NodoCategoria(props){
  return(
    <table className="table table-bordered">
      <tbody>
        <tr>
          <td>Imagen</td>
        </tr>
        <tr>
          <td>{props.producto.Nombre}</td>
        </tr>
        <tr>
          <td>{props.producto.PRECIO}</td>
        </tr>
      </tbody>
    </table>
  );
}

class Producto extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <tr>
        <td>{this.props.producto.Nombre}</td>
        <td>{this.props.producto.Cantidad}</td>
      </tr>
    );
  }
}

export default Producto;
export {Jumbo};
export {NodoCategoria};