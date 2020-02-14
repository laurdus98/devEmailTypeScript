import { Mail } from '../../model/Mail';
import { GState } from './GState';
import { Messaggio } from '../../model/Messaggio';
import { Categoria } from '../../model/Categoria';

export type IState = {
	readonly mail: GState<Mail>;
	readonly messaggio: GState<Messaggio>;
	readonly categoria: GState<Categoria>;
};
