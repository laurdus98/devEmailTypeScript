import { IState } from '../redux/state/IState';

export const mapState = (state: IState) => {
	const { mail, categoria, messaggio }: IState = state;

	return {
		mail,
		categoria,
		messaggio
	};
};
