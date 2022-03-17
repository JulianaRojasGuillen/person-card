import logo from './logo.svg';
import './App.css';
import React from 'react';
import PersonCard from './Componentes/PersonCard/PersonCard';

class App extends React.Component{
  constructor (props){
      super(props)
      this.state = {
          personas : [{
              firstname: 'Jane',
              lastname: 'Doe',
              age: 45,
              haircolor: 'Black'
          },
          {
              firstname: 'Jhon',
              lastname: 'Smith',
              age: 88,
              haircolor: 'White'
          },
          {
              firstname: 'Millard',
              lastname: 'Fillmore',
              age: 50,
              haircolor: 'Brown'
          },
          {   firstname: 'María',
              lastname: 'Smith',
              age: 62,
              haircolor: 'Green'
          }]
      }
  }
  
  actualizarEdad = (nombrePersona)=>{
    let personasActualizadas = this.state.personas;
    for ( let i=0; i< personasActualizadas.length; i++){
      if (personasActualizadas[i].firstname === nombrePersona ){
        personasActualizadas[i].age += 1;
      }
    }
    this.setState ({
      personas: personasActualizadas
    });
  }


  render(){
    const {personas} = this.state;
    return (
    <div className='lista_personas'>
      {
        personas.map( (persona, indice) =>{
          return (
            <PersonCard persona = {persona} actualizarEdad = {this.actualizarEdad} key ={'persona_'+ indice}></PersonCard>
          )
        } )
      }
    </div>
    )
  }
}

export default App;
