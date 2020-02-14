import React from 'react';
import './App.css';
import { DevMailComponent } from './devEmail/view/DevMailComponent';
import { connect } from 'react-redux';
import { mapState } from './devEmail/services/mapState';
import { mapDispatch } from './devEmail/services/mapDispatch';
import logo from './logo.svg';

const connector = connect(mapState, mapDispatch);

export const App = () => {
	// const [
	// 	isFetch,
	// 	setFetch
	// ] = useState(false);

	// useEffect(
	// 	() => {
	// 		if (!isFetch) {
	// 			const fetching = fetchingMail();
	// 			console.log(fetching);
	// 			setFetch(true);
	// 		}
	// 	},
	// 	[
	// 		isFetch,
	// 		setFetch,
	// 		fetchingMail
	// 	]
	// );

	return (
		<div className="App">
			<header className="App-header">
				<div style={{}}>
					<DevMailComponent logo={logo} />
				</div>
			</header>
		</div>
	);
};

connector(App);
