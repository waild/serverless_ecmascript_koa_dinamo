export default class UnauthorizedError extends Error {
	constructor(message) {
		super(message);

		this.name = this.constructor.name;
		this.status = 401;
		if (typeof Error.captureStackTrace === 'function') {
			Error.captureStackTrace(this, this.constructor);
		} else {
			this.stack = new Error(message).stack;
		}
	}
}
