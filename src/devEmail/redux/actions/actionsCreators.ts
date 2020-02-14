import { IGettingAction, IGettingSuccessAction, IGettingFailureAction } from './actions';
import { GETTING } from '../../environment/environment';

export const fetchingRequest = (): IGettingAction => {
	return {
		type: 'Getting',
		payload: [],
		status: ''
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
		status: error,
		payload: []
	};
};

// ActionCreator<
// 	ThunkAction<Promise<IGettingSuccessAction<Mail>>, Mail[], null, IGettingSuccessAction<Mail>>
// >

export function fetching<T>(pathName: string) {
	return async (dispatch: any) => {
		dispatch(fetchingRequest());
		try {
			const { host, get } = GETTING;
			let url = new URL(host);
			url.pathname = pathName;
			const { href } = url;
			let response = await fetch(href, { method: get });
			let json = await response.json();
			return dispatch(fetchingSuccess<T>(json));
		} catch (error) {
			return dispatch(fetchingFailure(error));
		}
	};
}
