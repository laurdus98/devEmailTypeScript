import { Reducer, combineReducers } from 'redux';
import { Actions } from '../actions/actions';
import { GState } from '../state/GState';
import { Mail } from '../../model/Mail';
import { IState } from '../state/IState';
import { Messaggio } from '../../model/Messaggio';
import { Categoria } from '../../model/Categoria';

const initMailState: GState<Mail> = {
	isFetching: false,
	payload: [],
	status: ''
};

const initMessageState: GState<Messaggio> = {
	isFetching: false,
	payload: [],
	status: ''
};

const initCategoriaState: GState<Categoria> = {
	isFetching: false,
	payload: [],
	status: ''
};

const reducersMail: Reducer<GState<Mail>, Actions<Mail>> = (state = initMailState, action: Actions<Mail>) => {
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

const reducersMessage: Reducer<GState<Messaggio>, Actions<Messaggio>> = (
	state = initMessageState,
	action: Actions<Messaggio>
) => {
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
			neverReached<Messaggio>(action);
	}

	return state;
};

const reducersCategoria: Reducer<GState<Categoria>, Actions<Categoria>> = (
	state = initCategoriaState,
	action: Actions<Categoria>
) => {
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
			neverReached<Categoria>(action);
	}

	return state;
};

function neverReached<T>(never: Actions<T>) {
	const { type }: Actions<T> = never;
	console.log(type);
}

export const rootReducer = combineReducers<IState>({
	mail: reducersMail,
	messaggio: reducersMessage,
	categoria: reducersCategoria
});
