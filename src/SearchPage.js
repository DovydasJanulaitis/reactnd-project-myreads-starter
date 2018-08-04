import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookComponent from './BookComponent'

class SearchPage extends Component {
  state = {
    entry: '',
    identifiedBooks: []
  }

  // method to update search entry in the search field
  updateEntry = (entry) => {
    this.setState({ entry: entry})

    this.updateIdentifiedBooks(entry)
  }

  updateIdentifiedBooks = (entry) => {
    if(entry) {
      BooksAPI.search(entry).then((identifiedBooks) => {
        if(identifiedBooks.error) {
          this.setState({ identifiedBooks: [] })
        } else {
          this.setState({ identifiedBooks: identifiedBooks})
        }
      })
    } else {
      this.setState({ identifiedBooks: [] })
    }
  }


  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className='close-search'
            to='/'
            >
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.entry}
              onChange={(event) => this.updateEntry(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.identifiedBooks.map(identifiedBook => (
              <li key={identifiedBook.id}>
                <BookComponent
                  book={identifiedBook}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
