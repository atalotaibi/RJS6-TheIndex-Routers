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
    let filteredBooks = this.props.books.filter(book =>
      `${book.title} ${book.color}`.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  render() {
    return (
      <div>
        <h3>Books</h3>
        <SearchBar onChange={this.filterbooks} />
        <BookTable books={this.state.filteredBooks} />
      </div>
    );
  }
}

export default BookList;
