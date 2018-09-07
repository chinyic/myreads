import React from 'react';
import SearchPage from './SearchPage';
import MainPage from './MainPage';

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
  books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  moveShelf = () => {//create method and pass into mainpage

  }

  render() {
    return (
      <div className="app">
        <MainPage
        books = {this.state.books}
        moveShelf={this.moveShelf}
        />
      </div>
    )
  }
}

export default BooksApp
