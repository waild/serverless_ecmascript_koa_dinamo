export default class BadInputError extends Error {
    constructor(message) {
        super(message);

        this.name = this.constructor.name;
        this.status = 400;
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(this, this.constructor);
        } else {
            this.stack = new Error(message).stack;
        }
    }
}
