import React from "react";

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

      {/* <CreateTable nombre={this.props.producto.Nombre} cantidad={this.props.producto.Cantidad}></CreateTable> */}
{/*       <div className="producto">
        <table className="table table-bordered mt-3">
          <tbody>
            <tr>
              <td>{this.props.producto.Nombre}</td>
              <td>{this.props.producto.Cantidad}</td>
            </tr>
          </tbody>
        </table>
      </div> */}