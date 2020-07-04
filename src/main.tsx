import { h, render } from 'preact';
import { useState } from 'preact/hooks'

// TODO: Only import what you need!
import '@fortawesome/fontawesome-free/css/all.css';
import './style.scss'

function App() {
	const [value, setValue] = useState(0);

	return (
		// TODO: Find out why I can't use <></>
		<div>
			<div>Counter: {value}</div>
			<button onClick={() => setValue(value + 1)}>
				<i class="fas fa-paint-brush"></i>
			</button>

			<button onClick={() => setValue(value - 1)}>
				<i class="fas fa-eraser"></i>
			</button>
		</div>
	)
}

render(<App />, document.getElementById('root'));
