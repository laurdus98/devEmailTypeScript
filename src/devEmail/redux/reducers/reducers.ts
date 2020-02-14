import { Reducer, combineReducers } from 'redux';
import { Actions } from '../actions/actions';
import { GState } from '../state/GState';
import { Mail } from '../../model/Mail';
import { IState } from '../state/IState';

const initState: GState<Mail> = {
	isFetching: false,
	payload: [],
	status: ''
};

const reducersMail: Reducer<GState<Mail>, Actions<Mail>> = (state = initState, action: Actions<Mail>) => {
	const { type, payload } = action;

	switch (type) {
		case 'Success':
			return {
				...state,
				status: '200',
				isFetching: false,
				payload
			};
		case 'Failure':
			return {
				...state,
				isFetching: true,
				status: '500'
			};
		case 'Getting':
			return {
				...state,
				isFetching: true
			};
		default:
			neverReached<Mail>(action);
	}

	return state;
};

function neverReached<T>(never: Actions<T>) {
	const { type }: Actions<T> = never;
	console.log(type);
}

export const rootReducer = combineReducers<IState>({ mail: reducersMail });
