import React from 'react';
import logo from './logo.svg';
import './App.css';
import { DevMailComponent } from './devEmail/view/DevMailComponent';

export function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div style={{}}>
					<DevMailComponent logo={logo} />
				</div>
			</header>
		</div>
	);
}
