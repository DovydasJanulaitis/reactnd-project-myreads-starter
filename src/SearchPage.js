import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SearchPage extends Component {
  state = {
    entry: ''
  }

  // method to update search entry in the search field
  updateEntry = (entry) => {
    this.setState({ entry: entry})
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
              onChange={(event) => this.updateEntry(event.target.value)}
              value={this.state.entry}
              />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default SearchPage
