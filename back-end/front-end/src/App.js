import React from "react";
import Producto, {Jumbo, NodoCategoria} from "./Body.js";
import NavBar from "./NavBar.js";
import Footer from "./Footer.js";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      productos: [],
      boolean: false
    }

    this.handleBooleanF = this.handleBooleanF.bind(this);
    this.handleBooleanT = this.handleBooleanT.bind(this);
  }

  componentDidMount(){
    fetch("/data")
      .then(res => res.json())
      .then(productos =>  this.setState({
        productos: productos
      })
    );
  }

  renderProductos(){
    return this.state.productos.map(p => <Producto producto={p}></Producto>);
  };

  renderCategoria(){
    return this.state.productos.map(pc => <NodoCategoria producto={pc}></NodoCategoria>)
  };

  handleBooleanT(){
    this.setState({
      boolean: true
    });
  }

  handleBooleanF(){
    this.setState({
      boolean: false
    });
  }

  render(){
    let boolean = this.state.boolean;
    let categoria;

    if (boolean) {
      categoria = <Categoria handler={this.handleBooleanF} render={this.renderCategoria()}></Categoria>
;
    } else {
      categoria =
      <div>
        <NavBar onClick={this.handleBooleanT}></NavBar>
        <Jumbo></Jumbo>
        Hola mundo!!
      </div>
    }

    return (
      <div>{categoria}</div>
    );
  }
}

function Categoria(props) {
  return(
    <div>
    <NavBar onClick={props.handler}></NavBar>
    <Jumbo></Jumbo>
    <div className="container table-responsive">
      <table className="table table-bordered mt-3 ml-3 mr-3">
        <tbody>
          <tr>
            <h1>Catalogo</h1>
          </tr>
          <tr>
            <td>{props.render[0]}</td>
            <td>{props.render[1]}</td>
            <td>{props.render[2]}</td>
          </tr>
          <tr>
            <td>{props.render[3]}</td>
            <td>{props.render[4]}</td>
            <td>{props.render[5]}</td>
          </tr>
          <tr>
            <td>{props.render[6]}</td>
            <td>{props.render[7]}</td>
            <td>{props.render[8]}</td>
          </tr>
          <tr>
            <td>{props.render[9]}</td>
            <td>{props.render[10]}</td>
            <td>{props.render[11]}</td>
          </tr>
        </tbody>
      </table>
      <Footer></Footer>
    </div>
  </div>
  );
}

function name(params) {

}

export default App;

/* export {NavBar} ; */
{/* <div className="container">
  <table className="table table-bordered mt-3">
    <tbody>
      {this.renderProductos()}
    </tbody>
  </table>
  <Footer></Footer>
</div>  */}
