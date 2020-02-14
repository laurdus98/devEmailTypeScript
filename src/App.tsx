import React, { FC, useState, useEffect } from 'react';
import './App.css';
import { DevMailComponent } from './devEmail/view/DevMailComponent';
import { connect } from 'react-redux';
import { mapState } from './devEmail/services/mapState';
import { mapDispatch } from './devEmail/services/mapDispatch';
import { IProps } from './devEmail/interfaces/IProps';
import { IGettingSuccessAction, IGettingFailureAction } from './devEmail/redux/actions/actions';
import { Mail } from './devEmail/model/Mail';
import { Categoria } from './devEmail/model/Categoria';
import { Messaggio } from './devEmail/model/Messaggio';

const App: FC<IProps> = ({ fetchingMail, fetchingMessage, fetchingCategoria, logo }) => {
	const [
		isFetch,
		setFetch
	] = useState(false);

	const [
		payloadMail,
		setPayloadMail
	] = useState<Mail[]>([]);

	const [
		payloadMessaggi,
		setPayloadMessaggi
	] = useState<Messaggio[]>([]);

	const [
		payloadCategoria,
		setPayloadCategoria
	] = useState<Categoria[]>([]);

	useEffect(
		() => {
			if (!isFetch) {
				fetchingMail('/Mail')
					.then((resp: IGettingSuccessAction<Mail>) => {
						const { payload, status, type }: IGettingSuccessAction<Mail> = resp;
						if (status === 'OK' && type === 'Success') {
							setPayloadMail(payload);
						}
					})
					.catch((error: IGettingFailureAction) => console.log(error));
				fetchingMessage('/Messaggi')
					.then((resp: IGettingSuccessAction<Messaggio>) => {
						const { payload, status, type }: IGettingSuccessAction<Messaggio> = resp;
						if (status === 'OK' && type === 'Success') {
							setPayloadMessaggi(payload);
						}
					})
					.catch((error: IGettingFailureAction) => console.log(error));
				fetchingCategoria('/Categoria')
					.then((resp: IGettingSuccessAction<Categoria>) => {
						const { payload, status, type }: IGettingSuccessAction<Categoria> = resp;
						if (status === 'OK' && type === 'Success') {
							setPayloadCategoria(payload);
						}
					})
					.catch((error: IGettingFailureAction) => console.log(error));
				setFetch(true);
			}
		},
		[
			isFetch,
			setFetch,
			fetchingMail,
			fetchingMessage,
			fetchingCategoria
		]
	);

	return (
		<div className="App">
			<header className="App-header">
				<div style={{}}>
					<DevMailComponent
						logo={logo}
						mail={payloadMail}
						messaggio={payloadMessaggi}
						categoria={payloadCategoria}
					/>
				</div>
			</header>
		</div>
	);
};

export default connect(mapState, mapDispatch)(App);
