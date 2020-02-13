import { IState } from '../state/IState';
import { createStore, applyMiddleware, Store } from 'redux';
import { rootReducer } from '../reducers/reducers';
import thunk from 'redux-thunk';

export function configureStore(): Store<IState> {
	const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
	return store;
}
