import { Mail } from '../model/Mail';
import { Categoria } from '../model/Categoria';
import { Messaggio } from '../model/Messaggio';

export interface IDevMailProps {
	logo: any;
	mail: Mail[];
	messaggio: Messaggio[];
	categoria: Categoria[];
}
