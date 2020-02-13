import { IState } from '../redux/state/IState';

export const mapState = (state: IState) => {
	const { mail }: IState = state;

	return {
		mail
	};
};
