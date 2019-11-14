import React from 'react';
import ReactDOM from 'react-dom';
import App, { hello, sum } from './App';
import Players from './components/Players';




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Players />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('tells us hello', () => {
  expect(hello('world!!')).toEqual('Hello world!!');
  expect(hello('all.')).toEqual('Hello all.')
});

it('adds', () => {
  expect(sum(1,2)).toBe(3);
  
})