import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Igor" surname="Tolkachev" link="vk.com/durov" />
        <SayFullName name="Petr" surname="Petrov" link="facebook.com/durov" />
        <SayFullName name="Vasya" surname="Pupkin" link="#" />
      </div>
    );
  }
}

function SayFullName(props) {
  return (
      <div>
        <h1> Моё имя {props.name}, фамилия - {props.surname} </h1>
        <a href={props.link}> Ссылка на профиль</a>
      </div>
    )
}

export default App;
