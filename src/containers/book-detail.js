import React, { Component } from 'react';

import { connect } from 'react-redux';

class BookDetail extends Component {

  render() {
    if (!this.props.book) {
      return <div>Please select a book</div>
    }

    return (
      <div>
        Book Detail
        <p>{this.props.book.title}</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
