import { h, render } from 'preact';
import { useState } from 'preact/hooks'

// TODO: Only import what you need!
import '@fortawesome/fontawesome-free/css/all.css';
import './style.scss'

enum Selection {
	Brush = 'Brush',
	Eraser = 'Eraser'
};

function App() {
	const [value, setValue] = useState(Selection.Brush);

	return (
		// TODO: Find out why I can't use <></>
		<div class='buttons'>
			<div>Selection: {value}</div>
			<button class='brush' onClick={() => setValue(Selection.Brush)}>
				<i class='fas fa-paint-brush fa-2x' />
			</button>

			<button class='eraser' onClick={() => setValue(Selection.Eraser)}>
				<i class='fas fa-eraser fa-2x' />
			</button>
		</div>
	)
}

render(<App />, document.getElementById('root'));
