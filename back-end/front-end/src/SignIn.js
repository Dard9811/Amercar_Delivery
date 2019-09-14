import React from "react";
import NavBar from "./NavBar";

function SignIn(props){
  return(
    <div>
      <NavBar onClick={props.handler} isClicked={true}></NavBar>
      <form className="container">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputName" className="col-sm-2 col-form-label">Nombres</label>
            <div className="col-sm-10">
              <input type="name"className="form-control" id="inputName" placeholder="Nombres"/>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputApellidos" className="col-sm-2 col-form-label">Apellidos</label>
            <div className="col-sm-10">
              <input type="apellidos"className="form-control" id="inputApellidos" placeholder="Apellidos"/>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email"className="form-control" id="inputEmail" placeholder="Email"/>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Contraseña</label>
            <div className="col-sm-10">
              <input type="password"className="form-control" id="inputPassword" placeholder="Contraseña"/>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputDireccion" className="col-sm-2 col-form-label">Dirección</label>
            <div className="col-sm-10">
              <input type="direccion"className="form-control" id="inputDireccion" placeholder="Dirección"/>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputIdentificacion" className="col-sm-2 col-form-label">C.C</label>
            <div className="col-sm-10">
              <input type="identificacion"className="form-control" id="inputIdentificacion" placeholder="Cédula de Ciudadania"/>
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputTelefono" className="col-sm-2 col-form-label">Teléfono</label>
            <div className="col-sm-10">
              <input type="telefono"className="form-control" id="inputTelefono" placeholder="Teléfono"/>
            </div>
          </div>
        </div>
        <div class="form-group row ml-1 mt-3">
          <div class="col-sm-10">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SignIn;