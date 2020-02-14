import { IGettingSuccessAction } from '../redux/actions/actions';
import { GState } from '../redux/state/GState';
import { Mail } from '../model/Mail';
import { Messaggio } from '../model/Messaggio';
import { Categoria } from '../model/Categoria';

export type IProps = {
	fetchingMail: (pathName: string) => Promise<IGettingSuccessAction<Mail>>;
	fetchingMessage: (pathName: string) => Promise<IGettingSuccessAction<Messaggio>>;
	fetchingCategoria: (pathName: string) => Promise<IGettingSuccessAction<Categoria>>;
	mail: GState<Mail>;
	messaggio: GState<Messaggio>;
	categoria: GState<Categoria>;
	logo: string;
};
