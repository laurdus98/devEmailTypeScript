import { ThunkAction } from 'redux-thunk';
import { IGettingAction, IGettingSuccessAction, IGettingFailureAction } from './actions';
import { ActionCreator } from 'redux';
import { Mail } from '../../model/Mail';

export const fetchingRequest = (): IGettingAction => {
	return {
		type: 'Getting'
	};
};

export const fetchingSuccess = <T>(json: T[]): IGettingSuccessAction<T> => {
	return {
		type: 'Success',
		payload: json,
		status: 'OK'
	};
};

export const fetchingFailure = (error: string): IGettingFailureAction => {
	return {
		type: 'Failure',
		status: error
	};
};

export const fetchingMail: ActionCreator<
	ThunkAction<Promise<IGettingSuccessAction<Mail>>, Mail[], null, IGettingSuccessAction<Mail>>
> = () => {
	return async (dispatch: any) => {
		dispatch(fetchingRequest());
		try {
			let response = await fetch('https://randomuser.me/api/?results=15');
			let json = await response.json();
			return dispatch(fetchingSuccess<Mail>(json));
		} catch (error) {
			return dispatch(fetchingFailure(error));
		}
	};
};
