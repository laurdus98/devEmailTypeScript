import React, { Fragment, useState } from 'react';
// import { CategoriaComponent } from './CategoriaComponent';
import { Categoria, CategoriaEnum } from './../model/Categoria';
import { MailComponent } from './MailComponent';
import { Mail } from './../model/Mail';
// import { MessaggioComponent } from './MessaggioComponent';
import { Messaggio } from './../model/Messaggio';
import { CategoriaAPI } from './../apis/CategoriaAPI';
import { MailAPI } from './../apis/MailAPI';
import { MessaggiAPI } from './../apis/MessaggiAPI';
import { Backdrop, CircularProgress, Theme, Paper, Tabs, Tab } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		backdrop: {
			zIndex: theme.zIndex.drawer + 1,
			color: '#fff'
		}
	})
);

interface IDevMailProps {
	logo: any;
}

export function DevMailComponent(props: IDevMailProps) {
	const listEmail: Mail[] = [
		{ ...MailAPI.mails[0], username: 'Laurdus98' },
		{ ...MailAPI.mails[1], username: 'Alejandra98' },
		{ ...MailAPI.mails[2], username: 'Zoe98' }
	];

	const listMessaggi: Messaggio[] = [
		{ ...MessaggiAPI.messaggi[0], titolo: 'Messaggio 1', messaggi: listEmail[0] },
		{ ...MessaggiAPI.messaggi[1], titolo: 'Messaggio 2', messaggi: listEmail[1] },
		{ ...MessaggiAPI.messaggi[2], titolo: 'Messaggio 3', messaggi: listEmail[2] }
	];

	const listCategoria: Categoria[] = [
		{ ...CategoriaAPI.categorie[0], categoria: listMessaggi[0] },
		{ ...CategoriaAPI.categorie[1], categoria: listMessaggi[1] },
		{ ...CategoriaAPI.categorie[0], categoria: listMessaggi[2] },
		{ ...CategoriaAPI.categorie[1], categoria: listMessaggi[1] },
		{ ...CategoriaAPI.categorie[0], categoria: listMessaggi[1] }
	];

	const { logo }: IDevMailProps = props;
	const [
		value,
		setValue
	] = useState(1);
	const classes = useStyles();
	const [
		open,
		setOpen
	] = React.useState(true);

	const handleClose = () => {
		setOpen(true);
	};
	const handleToggle = () => {
		setOpen(false);
	};
	const handleChange = (e: React.ChangeEvent<{}>, nuovoValore: number) => {
		e.preventDefault();
		setValue(nuovoValore);
	};

	const checkValue = (checkValore: number): CategoriaEnum | any => {
		switch (checkValore) {
			case 0:
				return CategoriaEnum.SocialNetwork;
			case 2:
				return CategoriaEnum.Promozioni;
			default:
				break;
		}
	};

	setTimeout(() => {
		handleToggle();
	}, 1050);

	const msg: Messaggio[] = listCategoria
		.filter((el: Categoria, i: any): Categoria | any => {
			if (el.tipo === checkValue(value)) {
				return listCategoria[i];
			}
			return false;
		})
		.map((el: Categoria): Messaggio => el.categoria);

	return open ? (
		<Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
			<CircularProgress color="inherit" />
		</Backdrop>
	) : (
		<Fragment>
			<Paper square>
				<Tabs
					value={value}
					indicatorColor="primary"
					textColor="primary"
					onChange={handleChange}
					aria-label="disabled tabs example"
				>
					<Tab label="SocialNetwork" />
					<Tab label="Disabilita" disabled />
					<Tab label="Promozioni" />
				</Tabs>
			</Paper>
			{/* {listCategoria.map((el: Categoria, i: any) => <CategoriaComponent categoria={el} key={i} />)} */}
			{listEmail.map((el: Mail, i: any) => <MailComponent logo={logo} mail={el} key={i} listaMessaggi={msg} />)}
			{/* {listMessaggi.map((el: Messaggio, i: any) => <MessaggioComponent messaggio={el} key={i} />)} */}
		</Fragment>
	);
}
