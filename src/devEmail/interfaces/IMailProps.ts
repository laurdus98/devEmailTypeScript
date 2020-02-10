import { Mail } from './../model/Mail';
import { Messaggio } from './../model/Messaggio';

export type IMailProps = {
	mail: Mail;
	listaMessaggi: Messaggio[];
	logo: any;
};
