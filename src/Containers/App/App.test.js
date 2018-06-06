import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from '../../Store';
const store = configureStore();

it('renders without crashing', () => {
  const div = document.createElement('div');
  const elem = (
    <Provider store={store}>
      <App />
    </Provider>
  );
  ReactDOM.render(elem, div);
});
