import React, { Component } from 'react';
import Doc from './Doc';
import { Card, List } from '@material-ui/core';
// c


class ListOfDocs extends Component {
  // render array of Docs

  render() {
    const arrOfDocs: Object[] = [];

    // let url: String = '';

    arrOfDocs.push(<Doc />)
    arrOfDocs.push(<Doc />)
    // console.log('url', this.props.url);
  return (
    <div>
      <div>
        {arrOfDocs}
      </div>
    </div>
  )
  }
}

export default ListOfDocs;
