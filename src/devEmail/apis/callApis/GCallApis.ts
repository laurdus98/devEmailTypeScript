import { GRequestApis } from './GRequestApis';

export type GCallApis<T> = {
	request: GRequestApis<T>;
	host: 'http://localhost:9999';
};
