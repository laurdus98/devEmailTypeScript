import { Mail } from './Mail';

export type Messaggio = {
	id: any;
	updateAt: string;
	updateBy: string;
	contenuto: string;
	messaggi: Mail;
};
