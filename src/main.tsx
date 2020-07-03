import { h, render } from 'preact';
import './style.scss'

const App = () =>
	<h2>Hello friends! This code is type-safe!! 🥳</h2>;

render(<App />, document.getElementById('root'));
