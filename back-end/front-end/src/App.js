import React from "react";
import Producto, {Jumbo, NodoCategoria} from "./Body.js";
import NavBar from "./NavBar.js";
import Footer from "./Footer.js";
import Categoria from "./Categoria.js";

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
      <div>
        {categoria}
        <div className="container">
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

export default App;
