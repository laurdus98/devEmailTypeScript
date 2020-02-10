import { Mail } from './Mail';

export type Messaggio = {
	id?: any;
	titolo: string;
	updateAt?: string;
	updateBy?: string;
	contenuto?: string;
	messaggi: Mail;
};
