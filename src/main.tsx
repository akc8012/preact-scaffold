import { h, render } from 'preact';
import { useState } from 'preact/hooks'

// TODO: Only import what you need!
import '@fortawesome/fontawesome-free/css/all.css';
import './style.scss'

enum Selection {
	Brush = "Brush",
	Eraser = "Eraser"
};

function App() {
	const [value, setValue] = useState(Selection.Brush);

	return (
		// TODO: Find out why I can't use <></>
		<div>
			<div>Selection: {value}</div>
			<button onClick={() => setValue(Selection.Brush)}>
				<i class='fas fa-paint-brush fa-2x'></i>
			</button>

			<button onClick={() => setValue(Selection.Eraser)}>
				<i class='fas fa-eraser fa-2x'></i>
			</button>
		</div>
	)
}

render(<App />, document.getElementById('root'));
