import { AnyAction } from 'redux';
import { fetchingMail } from './../redux/actions/actionsCreators';
import { ThunkDispatch } from 'redux-thunk';

export const mapDispatch = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
	return {
		fetchingMail: () => dispatch(fetchingMail())
	};
};
