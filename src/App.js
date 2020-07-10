import React from 'react';
import Modal from './components/modal'
import M from 'materialize-css'
import {ReactComponent as Warning} from './assets/warning.svg'
import './App.css'


class App extends React.Component{
  constructor(){
    super();

    this.state = {
      isModalOpened: false
    }

    this.openModalParent = this.openModalParent.bind(this);
    this.closeModalFromChild = this.closeModalFromChild.bind(this);
  }

  componentDidMount(){
    if(!window.M){
      let s = document.createElement("script");
      s.type = "text/javascript";
      s.src = "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js";
      let z = document.getElementsByTagName("script")[0];
      z.parentNode.insertBefore(s, z);
    } else {
      let side = document.querySelector('.sidenav');
      let daySelect = document.querySelector('#day')
      let monthSelect = document.querySelector('#month')
      let yearSelect = document.querySelector('#year')
      let singleSelect = document.querySelector('#select')
      let datePicker = document.querySelector(".datepicker")
      let optionsDatePicker = {
        format: 'dd mmmm yyyy',
        autoClose: true,
        i18n: {
          months: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
          monthsShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Dic"],
          weekdays: ["Domingo","Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
          weekdaysShort: ["Dom","Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
          weekdaysAbbrev: ["D","L", "M", "M", "J", "V", "S"]
        }
      }
      M.Sidenav.init(side);
      M.FormSelect.init(daySelect);
      M.FormSelect.init(monthSelect);
      M.FormSelect.init(yearSelect);
      M.FormSelect.init(singleSelect);
      M.Datepicker.init(datePicker, optionsDatePicker);
    }
  }

  openModalParent(){
    let { isModalOpened } = this.state;
    if(isModalOpened)
      this.setState({ isModalOpened: false})
    else
      this.setState({ isModalOpened: true})
  }

  closeModalFromChild(){
    this.setState({isModalOpened: false})
  }

  render(){
    return(
      <React.Fragment>
      <div className="container">
        <div className="row">

          {/* Input Text */}
          <div className="col s12">
            <div className="input-field">
              <input id="user_name" type="text" className="validate"/>
              <label htmlFor="user_name">Correo electrónico</label>
            </div>
          </div>

          {/* Input password */}
          <div className="col s12">
            <div className="input-field">
              <input id="password" type="password" className="validate"/>
                <label htmlFor="password">Contraseña</label>
            </div>
          </div>

          {/* Select */}
          <div className="col s3">
            <div className="input-field">
            <select id="day">
              <option value="" disabled selected>Day</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            </div>
          </div>

          <div className="col s6">
            <div className="input-field">
            <select id="month">
              <option value="" disabled selected>Month</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            </div>
          </div>

          <div className="col s3">
            <div className="input-field">
            <select id="year">
              <option value="" disabled selected>Year</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            </div>
          </div>

          <div className="col s12">
            <div className="input-field">
            <select id="select">
              <option value="" disabled selected>Year</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
            <label className="label-single-color">Etiqueta</label>
            </div>
          </div>

          {/* Ejemplos de botones */}
          {/* Boton Naranja Width 100% */}
          <div className="col s12">
            <a className="waves-effect waves-light btn btn-orange btn-full-width">Hola</a>
          </div>

          <div className="line"></div>
          {/* Boton Naranja Outlined Width 100%*/}
          <div className="col s12">
            <a className="waves-effect waves-light btn btn-orange-outlined btn-full-width">Hola</a>
          </div>

          {/* Boton Naranja*/}
              {/* <a className="waves-effect waves-light btn btn-orange">Hello</a> */}
              {/* Boton Naranja Outlined*/}
              {/* <a className="waves-effect waves-light btn btn-orange-outlined">Hello</a> */}


          {/* Ejemplo de un date picker */}
          <div className="col s12">
            <div className="input-field">
              <input type="text" className="datepicker" />
              <label htmlFor="user_name">Fecha</label>
            </div>
          </div>

          {/* Ejemplo de un modal */}
          <div className="col s12">
              <Modal open={this.state.isModalOpened} closeModalFromChild={this.closeModalFromChild}>
                <div className="container">
                  <div className="row">
                    <div className="col s12 center-align">
                      <Warning /><br></br>
                      <span>Hola GNP</span> 
                    </div>
                  </div>
                </div>
              </Modal>
              <br></br>
              <a className="btn btn-orange btn-full-width" onClick={this.openModalParent}>Open Modal</a>
          </div>
         

        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default App;
