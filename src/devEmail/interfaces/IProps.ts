import { IGettingSuccessAction } from '../redux/actions/actions';
import { GState } from '../redux/state/GState';
import { Mail } from '../model/Mail';

export type IProps = {
	fetchingMail: () => Promise<IGettingSuccessAction<Mail>>;
	mail: GState<Mail>[];
	logo: string;
};
