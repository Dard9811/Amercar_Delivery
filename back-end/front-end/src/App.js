import React from "react";
import Producto, {NodoCategoria} from "./Body.js";
import Footer from "./Footer.js";
import Categoria from "./Categoria.js";
import SignIn from "./SignIn.js";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      productos: [],
      booleanCategoria: true,
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
      booleanCategoria: true
    });
  }

  handleBooleanF(){
    this.setState({
      booleanCategoria: false
    });
  }

  render(){
    let booleanC = this.state.booleanCategoria;
    let categoria;

    if (booleanC) {
      categoria = <Categoria handler={this.handleBooleanF} render={this.renderCategoria()}></Categoria>;
    } else {
      categoria = <SignIn></SignIn>

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
