import React, { Fragment, useState } from 'react';
import { Categoria, CategoriaEnum } from './../model/Categoria';
import { MailComponent } from './MailComponent';
import { Mail } from './../model/Mail';
import { Messaggio } from './../model/Messaggio';
import { Backdrop, CircularProgress, Theme, Paper, Tabs, Tab } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { IDevMailProps } from '../interfaces/IDevMailProps';
import { MessaggioComponent } from './MessaggioComponent';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		backdrop: {
			zIndex: theme.zIndex.drawer + 1,
			color: '#fff'
		}
	})
);

export function DevMailComponent(props: IDevMailProps) {
	const { logo, mail, messaggio, categoria }: IDevMailProps = props;

	const listEmail: Mail[] = mail;

	const listMessaggi: Messaggio[] = messaggio;

	const listCategoria: Categoria[] = categoria;

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
					<Tab label="Disabilita" />
					<Tab label="Promozioni" />
				</Tabs>
			</Paper>
			{value === 1 && listMessaggi.map((el: Messaggio, i: any) => <MessaggioComponent messaggio={el} key={i} />)}
			{value !== 1 &&
				listEmail
					.filter((el: Mail, i: number, arr: Mail[]) => {
						return (
							[
								...arr
							]
								.map((m: Mail) => m.updateBy)
								.indexOf(el.updateBy) === i
						);
					})
					.map((el: Mail, i: any) => <MailComponent logo={logo} mail={el} key={i} listaMessaggi={msg} />)}
		</Fragment>
	);
}
