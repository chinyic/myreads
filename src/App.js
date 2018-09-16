import React from 'react';
import { Route } from 'react-router-dom';
import SearchPage from './SearchPage';
import BookList from './BookList';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
      console.log("Books displayed are", this.state.books)
    })
  }

//moving book to shelf
  moveShelf = (book, shelf) => {//create method and pass into BookList
    BooksAPI.update(book, shelf).then(() => {
         BooksAPI.getAll().then((books) => {
           this.setState({ books })
           //console.log (`Book ${book.title} moved to ${shelf} shelf`);
         })
       })

  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <BookList books = {this.state.books}
           moveShelf={this.moveShelf}
           />
        )} />

        <Route path="/search" render={() => (
          <SearchPage
            moveShelf= {this.moveShelf}
            books = {this.state.books}
            />
        )} />

      </div>
    )
  }
}

export default BooksApp
