import React from "react";
import NavBar from "./NavBar.js";


class SignIn extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      nombre: "",
      apellido: "",
      email:"",
      contrasena:"",
      dir:"",
      cedula:"",
      tel:""
    }

    this.handleNombre = this.handleNombre.bind(this);
    this.handleApellido = this.handleApellido.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleContrasena = this.handleContrasena.bind(this);
    this.handleDir = this.handleDir.bind(this);
    this.handleCedula = this.handleCedula.bind(this);
    this.handleTel = this.handleTel.bind(this);
    this.postData = this.postData.bind(this);
  }

  handleNombre(e){
    this.setState({
      nombre: e.target.value
    })
  }

  handleApellido(e){
    this.setState({
      apellido: e.target.value
    })
  }

  handleEmail(e){
    this.setState({
      email: e.target.value
    })
  }

  handleContrasena(e){
    this.setState({
      contrasena: e.target.value
    })
  }

  handleDir(e){
    this.setState({
      dir: e.target.value
    })
  }

  handleCedula(e){
    this.setState({
      cedula: e.target.value
    })
  }

  handleTel(e){
    this.setState({
      tel: e.target.value
    })
  }

  postData() {
    fetch("/post-user",{
      method: "POST",
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        nombre: this.refs.nombre.value,
        apellido: this.refs.apellido.value,
        email: this.refs.email.value,
        contrasena: this.refs.contrasena.value,
        dir: this.refs.direccion.value,
        cedula: this.refs.cedula.value,
        tel: this.refs.telefono.value
      })
    }).then(res=>res.json())
    .then(res => console.log(res));
  }

  render(){
    return(
    <div>
      <NavBar onClick={this.props.handler} isClicked={true}></NavBar>
      <form className="container" onSubmit={this.postData}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Nombres</label>
            <div className="col-sm-10">
              <input type="name"className="form-control" id="inputName" placeholder="Nombres" ref="nombre" onChange={this.handleNombre}/>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputApellidos" className="col-sm-2 col-form-label">Apellidos</label>
            <div className="col-sm-10">
              <input type="apellidos"className="form-control" id="inputApellidos" placeholder="Apellidos" ref="apellido" onChange={this.handleApellido}/>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email"className="form-control" id="inputEmail" placeholder="Email" ref="email" onChange={this.handleEmail}/>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Contraseña</label>
            <div className="col-sm-10">
              <input type="password"className="form-control" id="inputPassword" placeholder="Contraseña" ref="contrasena" onChange={this.handleContrasena}/>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputDireccion" className="col-sm-2 col-form-label">Dirección</label>
            <div className="col-sm-10">
              <input type="direccion"className="form-control" id="inputDireccion" placeholder="Dirección"  ref="direccion" onChange={this.handleDir}/>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputIdentificacion" className="col-sm-2 col-form-label">C.C</label>
            <div className="col-sm-10">
              <input type="identificacion"className="form-control" id="inputIdentificacion" placeholder="Cédula de Ciudadania" ref="cedula" onChange={this.handleCedula}/>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputTelefono" className="col-sm-2 col-form-label">Teléfono</label>
            <div className="col-sm-10">
              <input type="telefono"className="form-control" id="inputTelefono" placeholder="Teléfono" ref="telefono" onChange={this.handleTel}/>
            </div>
          </div>
        </div>
        <div className="form-group row ml-1 mt-3">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </div>
      </form>
    </div>
    );
  }
}

export default SignIn;