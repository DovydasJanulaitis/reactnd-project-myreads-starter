import React from 'react'
import BookComponent from './BookComponent'
import LandingPage from './LandingPage'
import SearchPage from './SearchPage'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    booksList: []
  }

  // API call to fetch book data from Udacity API
  getBooks = () => {
    BooksAPI.getAll().then((booksList) => {
      this.setState({ booksList: booksList})
    })
  }

  // lifecycle event invokes the API call
  componentDidMount() {
    this.getBooks()
  }

// function to move books to another shelf on landing page
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.getBooks()
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <LandingPage
              changeShelf={this.changeShelf}
              booksList={this.state.booksList}
            />
          )}
        />
        <Route exact path='/search' render={() => (
            <SearchPage
              booksList={this.state.booksList}
              changeShelf={this.changeShelf}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
