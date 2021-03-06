import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { StyleProvider } from 'native-base';
import App from './app/index.js';
import configureStore from './state/store';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

function setup() {
  class Root extends Component {

    constructor() {
      super();
      this.state = {
        isLoading: false,
        store: configureStore(() => this.setState({ isLoading: false })),
      };
    }

    render() {
      return (
          <StyleProvider style={getTheme(platform)}>
            <Provider store={this.state.store}>
              <App />
            </Provider>
          </StyleProvider>        
      );
    }
  }

  return Root;
}

export default setup;
