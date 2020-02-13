export type GState<T> = {
	isFetching: boolean;
	status: string;
	payload: Array<T>;
};
