import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './containers/book-list.js'
import BookDetail from './containers/book-detail.js'

class App extends Component {
  render() {
    return (
      <div>
        <BookDetail />
        <BookList />
      </div>
    );
  }
}

export default App;
