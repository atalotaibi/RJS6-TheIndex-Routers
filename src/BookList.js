import React, { Component } from "react";

// Components
import SearchBar from "./SearchBar";
import BookTable from "./BookTable";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };

  filterbooks = query => {
    query = query.toLowerCase();
    const filteredBooks = this.props.books.filter(book =>
      book.title.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  render() {
    const color = this.props.match.params.color;
    let books = this.state.filteredBooks;
    if (color) {
      books = books.filter(book => book.color === color);
    }
    return (
      <div>
        <h3> Books</h3>
        <SearchBar onChange={this.filterbooks} />
        <BookTable books={books} />
      </div>
    );
  }
}

export default BookList;
