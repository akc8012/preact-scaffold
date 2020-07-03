import { h, render } from 'preact';
import { useState } from 'preact/hooks'

import './style.scss'

const App = () =>
	<h2>Hello friends! This code is type-safe!! 🥳</h2>;

function Counter() {
	const [value, setValue] = useState(0);

	return (
		<div>
			<div>Counter: {value}</div>
			<button onClick={() => setValue(value + 1)}>Increment</button>
			<button onClick={() => setValue(value - 1)}>Decrement</button>
		</div>
	)
}

render(<Counter />, document.getElementById('root'));
