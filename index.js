import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import {Provider} from 'react-redux';

import App from './App.js';
import store from './Store.js';

const index = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('helloworld', () => index);
