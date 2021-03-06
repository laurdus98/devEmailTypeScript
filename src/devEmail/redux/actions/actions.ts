import { Action } from 'redux';

export interface IGettingAction extends Action<'Getting'> {
	type: 'Getting';
	payload: [];
	status: '';
}
export interface IGettingSuccessAction<T> extends Action<'Success'> {
	type: 'Success';
	payload: T[];
	status: 'OK';
}
export interface IGettingFailureAction extends Action<'Failure'> {
	type: 'Failure';
	payload: [];
	status: string;
}

export type Actions<T> = IGettingAction | IGettingSuccessAction<T> | IGettingFailureAction;
