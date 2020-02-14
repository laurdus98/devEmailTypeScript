import React, { FC, useState, useEffect } from 'react';
import './App.css';
import { DevMailComponent } from './devEmail/view/DevMailComponent';
import { connect } from 'react-redux';
import { mapState } from './devEmail/services/mapState';
import { mapDispatch } from './devEmail/services/mapDispatch';
import { IProps } from './devEmail/interfaces/IProps';

const App: FC<IProps> = ({ fetchingMail, logo }) => {
	const [
		isFetch,
		setFetch
	] = useState(false);

	useEffect(
		() => {
			if (!isFetch) {
				const fetching = fetchingMail();
				console.log(fetching);
				setFetch(true);
			}
		},
		[
			isFetch,
			setFetch,
			fetchingMail
		]
	);

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

export default connect(mapState, mapDispatch)(App);
