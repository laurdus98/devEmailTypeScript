import { IState } from './IState';

export const initState: IState = {
	mail: {
		isFetching: false,
		payload: [],
		status: ''
	},
	messaggio: {
		isFetching: false,
		payload: [],
		status: ''
	},
	categoria: {
		isFetching: false,
		payload: [],
		status: ''
	}
};
