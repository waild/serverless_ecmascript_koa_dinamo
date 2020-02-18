export default class ConflictError extends Error {
	constructor(message) {
		super(message);

		this.name = this.constructor.name;
		this.status = 409;
		if (typeof Error.captureStackTrace === 'function') {
			Error.captureStackTrace(this, this.constructor);
		} else {
			this.stack = new Error(message).stack;
		}
	}
}
