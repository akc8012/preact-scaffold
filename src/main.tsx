import { h, render } from 'preact';
import { useState } from 'preact/hooks'

// TODO: Only import what you need!
import '@fortawesome/fontawesome-free/css/all.css';
import './style.scss'

enum Choice {
	Brush = 'Brush',
	Eraser = 'Eraser'
};

function App() {
	const [choice, setChoice] = useState(Choice.Brush);

	return (
		// TODO: Find out why I can't use <></>
		<div class='buttons'>
			<div>Choice: <b>{choice}</b></div>
			<button class='brush' onClick={() => setChoice(Choice.Brush)}>
				<i class='fas fa-paint-brush fa-2x' />
			</button>

			<button class='eraser' onClick={() => setChoice(Choice.Eraser)}>
				<i class='fas fa-eraser fa-2x' />
			</button>
		</div>
	)
}

render(<App />, document.getElementById('root'));
