import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

const jsx = (
	<div>
		<h1>Hola, soy David.</h1>
		<p>Soy Ingeniero Frontend.</p>
	</div>
);

const element = React.createElement(
  'div',
  {},
  React.createElement('h1', {}, 'Hola, soy David.'),
  React.createElement('p', {}, 'Soy Ingeniero Frontend.')
);

const container = document.getElementById('root');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
