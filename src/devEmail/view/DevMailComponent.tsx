import React, { Fragment } from 'react';
import { CategoriaComponent } from './CategoriaComponent';
import { Categoria, CategoriaEnum } from './../model/Categoria';
import { MailComponent } from './MailComponent';
import { Mail } from './../model/Mail';
import { MessaggioComponent } from './MessaggioComponent';
import { Messaggio } from './../model/Messaggio';

interface IDevMailProps {
	logo: any;
}

export function DevMailComponent(props: IDevMailProps) {
	const listCategoria: Categoria[] = [
		{ nome: CategoriaEnum.SocialNetwork },
		{ nome: CategoriaEnum.Promozioni },
		{ nome: CategoriaEnum.FilmSerieTV },
		{ nome: CategoriaEnum.CronacaNera },
		{ nome: CategoriaEnum.Sport }
	];

	const listEmail: Mail[] = [
		{ username: 'Laurdus98' },
		{ username: 'Alejandra98' },
		{ username: 'Zoe98' }
	];

	const listMessaggi: Messaggio[] = [
		{ titolo: 'Messaggio 1', mail: listEmail[0] },
		{ titolo: 'Messaggio 2', mail: listEmail[1] },
		{ titolo: 'Messaggio 3', mail: listEmail[2] }
	];

	const { logo }: IDevMailProps = props;

	return (
		<Fragment>
			{listCategoria.map((el: Categoria, i: any) => <CategoriaComponent categoria={el} key={i} />)}
			{listEmail.map((el: Mail, i: any) => <MailComponent logo={logo} mail={el} key={i} />)}
			{listMessaggi.map((el: Messaggio, i: any) => <MessaggioComponent messaggio={el} key={i} />)}
		</Fragment>
	);
}
