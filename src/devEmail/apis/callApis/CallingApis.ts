import { CallingEnum } from './CallingEnum';

export type CallingApis = {
	get: CallingEnum.GET;
	post: CallingEnum.POST;
	patch: CallingEnum.PATCH;
	put: CallingEnum.PUT;
	options: CallingEnum.OPTIONS;
};
