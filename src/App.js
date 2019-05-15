import React, { Component } from 'react';
import './App.css';
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';
import { clickButton } from './actions';

class App extends Component {
  state = {
    input: ''
  }
  onInputChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    const { newValue, clickButton } = this.props;
    return (
      <div className="App">
        <span>Texto:</span>
        <input onChange={this.onInputChange} value={this.state.input} type="text" />
        <button
          onClick={() => clickButton(this.state.input)}
        >
          Atualizar
        </button>

        <div>
          {newValue}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newValue: state.clickButton.newValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ clickButton }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
