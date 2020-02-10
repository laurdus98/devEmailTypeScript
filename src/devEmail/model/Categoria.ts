export enum CategoriaEnum {
	SocialNetwork = 'Social Network',
	Promozioni = 'Promozioni',
	Sport = 'Sport',
	CronacaNera = 'Cronaca Nera',
	FilmSerieTV = 'Intrattenimento'
}

export type Categoria = {
	id?: any;
	nome: CategoriaEnum;
};
