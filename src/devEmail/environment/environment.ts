import { CallingApis } from '../apis/callApis/CallingApis';
import { GCallApis } from './../apis/callApis/GCallApis';
import { CallingEnum } from '../apis/callApis/CallingEnum';

let path: GCallApis<CallingApis> = {
	host: 'http://localhost:9999',
	request: {
		apis: {
			get: CallingEnum.GET,
			post: CallingEnum.POST,
			put: CallingEnum.PUT,
			patch: CallingEnum.PATCH,
			options: CallingEnum.OPTIONS
		}
	}
};

let GET = () => {
	const { host, request } = path;
	const { apis } = request;
	const { get } = apis;

	return {
		host,
		get
	};
};

export const GETTING = GET();
