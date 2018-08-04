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
  componentDidMount() {
    BooksAPI.getAll().then((booksList) => {
      this.setState({ booksList: booksList})
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
            <LandingPage
              booksList={this.state.booksList}
            />
          )}
        />
        <Route exact path='/search' render={() => (
            <SearchPage

            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
