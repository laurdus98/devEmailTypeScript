import { AnyAction } from 'redux';
import { fetching } from './../redux/actions/actionsCreators';
import { ThunkDispatch } from 'redux-thunk';
import { Mail } from '../model/Mail';
import { Messaggio } from '../model/Messaggio';
import { Categoria } from '../model/Categoria';

export const mapDispatch = (dispatch: ThunkDispatch<any, any, AnyAction>) => {
	return {
		fetchingMail: (pathName: string) => dispatch(fetching<Mail>(pathName)),
		fetchingMessage: (pathName: string) => dispatch(fetching<Messaggio>(pathName)),
		fetchingCategoria: (pathName: string) => dispatch(fetching<Categoria>(pathName))
	};
};
