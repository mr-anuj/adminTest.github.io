import React, { Component } from 'react';
import { connect } from 'react-redux';
import {incrementCounter, decrementCounter} from './testActions';
import { Button } from 'semantic-ui-react';

import Script from 'react-load-script';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'



const mapState = (state) => ({
    data: state.test.data
})

const actions = {
    incrementCounter,
    decrementCounter
}
 class TestComponent extends Component {
state = {
  address:''
}

  handleSelect = address => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error));
  };

  render() {
  //   <PlacesAutocomplete
  //   value={this.state.address}
  //   onChange={this.handleChange}
  //   onSelect={this.handleSelect}
  // >
      const {incrementCounter, decrementCounter, data} = this.props;
    return (
      <div>
        <h1>Test Area</h1>
        <h3>Answer is : {data}</h3>
        <Button onClick={incrementCounter} color='green' content='Increment'/>
        <Button onClick={decrementCounter} color='red' content='Decrement'/>

      </div>
    )
  }
}
export default connect(mapState, actions)(TestComponent);