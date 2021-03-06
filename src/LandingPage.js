import React, { Component } from 'react'
import BookComponent from './BookComponent'
import { Link } from 'react-router-dom'

class LandingPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {// Filter through list of books from API call.
                  // Leave only the ones that match shelf name.
                  // Map through the result array and create
                  // li element for every single book that
                  // matches the shelf name
                }
                  {this.props.booksList
                  .filter(book => book.shelf === 'currentlyReading')
                  .map(book => (
                    <li key={book.id}>
                      <BookComponent
                        existingShelf='currentlyReading'
                        book={book}
                        changeShelf={this.props.changeShelf}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.booksList
                  .filter(book => book.shelf === 'wantToRead')
                  .map(book => (
                    <li key={book.id}>
                      <BookComponent
                        existingShelf='wantToRead'
                        book={book}
                        changeShelf={this.props.changeShelf}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.booksList
                  .filter(book => book.shelf === 'read')
                  .map(book => (
                    <li key={book.id}>
                      <BookComponent
                        existingShelf='read'
                        book={book}
                        changeShelf={this.props.changeShelf}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link
            to='/search'
            >
          </Link>
        </div>
      </div>
    )
  }
}

export default LandingPage
