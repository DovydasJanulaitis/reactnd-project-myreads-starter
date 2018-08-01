import React from 'react'
import BookComponent from './BookComponent'
import LandingPage from './LandingPage'
import * as BooksAPI from './BooksAPI'
import './App.css'

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
        <LandingPage />
      </div>
    )
  }
}

export default BooksApp
