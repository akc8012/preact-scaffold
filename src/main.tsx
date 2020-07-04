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

			<Button choice={Choice.Brush} click={(clicked: Choice) => setChoice(clicked)} />
			<Button choice={Choice.Eraser} click={(clicked: Choice) => setChoice(clicked)} />
		</div>
	);
}

function Button(props: { choice: Choice, click: any }) {
	let icon = props.choice === Choice.Brush ? 'paint-brush' : 'eraser';

	return (
		<button onClick={() => props.click(props.choice)}>
			<i class={`fas fa-${icon} fa-2x`} />
		</button>
	);
}

render(<App />, document.getElementById('root'));
