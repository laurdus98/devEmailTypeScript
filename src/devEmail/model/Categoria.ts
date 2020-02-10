import { Messaggio } from './Messaggio';

export enum CategoriaEnum {
	SocialNetwork = 'SocialNetwork',
	Promozioni = 'Promozioni',
	Sport = 'Sport',
	CronacaNera = 'Cronaca Nera',
	FilmSerieTV = 'Intrattenimento'
}

export type Categoria = {
	id?: any;
	updateAt?: string;
	updateBy?: string;
	tipo?: CategoriaEnum | string;
	categoria: Messaggio;
};
