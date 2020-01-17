import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { findByText, render} from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('is it rendering ', () => {
  render(<App/>)
}) 

test("search is found in search bar", () => {
  const { getByText } = render(<App />);
  getByText(/search/i);
});