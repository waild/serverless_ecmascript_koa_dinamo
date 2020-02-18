import { Joi } from 'koa-joi-router';

const modelValidation = Joi.object({
	uuid: Joi.string().guid(),
	name: Joi.string(),
	releaseDate: Joi.date().timestamp(),
	authorName: Joi.string(),
}).optional();

export default {
	update: {
		type: 'json',
		body: modelValidation,
		params: {
			id: Joi.string().guid().required(),
		},
		output: {
			200: {
				body: modelValidation
			}
		}
	},
	create: {
		type: 'json',
		body: modelValidation,
		output: {
			200: {
				body: modelValidation
			},
		},
	},
	delete: {
		params: {
			id: Joi.string().guid().required(),
		}
	},
	getList: {
		params: {},
		output: {
			200: {
				body: Joi.array().items(modelValidation)
			},
		},
	},
	getSingle: {
		params: {
			id: Joi.string().guid(),
		},
		output: {
			200: {
				body: modelValidation
			}
		}
	}
};