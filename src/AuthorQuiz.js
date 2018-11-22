import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';

function Hero(){
  return (
    <div className="row">
      <div className="jumbotron col-10 offset-1">
        <h1>Author Quiz</h1>
        <p>Select the book writter by the author shown</p>
      </div>
    </div>
  );
}

function Turn(){
  return <div className="row turn" style={{backgroundColor: "white"}}>
  <div className="col-4 offset-1">
  <img src={authoer.imageUrl} className="authorImage" alt="Author" />
  </div>

  </div>;
}

function Continue() {
  return <div></div>;
}

function Footer() {
  return <div id="footer" className="row">
    <div className="col-12">
      <p className="text-mutex credit">All images are from google</p>
    </div>
  </div>
}

class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <Turn />
        <Continue />
        <Footer />
      </div>
    );
  }
}

export default AuthorQuiz;
