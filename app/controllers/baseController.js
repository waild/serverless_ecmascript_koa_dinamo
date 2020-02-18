import { NotFoundError } from '../lib/errors';

export default class BaseController {
    constructor(resource) {
        this.resource = resource;
    }

    async get({ id }) {
        const result = await this.resource.getSingle(id);
        console.log('result', result);
        if (!result || JSON.stringify(result) === '{}') {
            throw new NotFoundError('Entity Not Found');
        }

        return result;
    }

    getList() {
        return this.resource.getList();
    }

    create(params, body) {
        return this.resource.create(body);
    }

    async update({ id }, body) {
        const result = await this.resource.update(id, body);
        if (!result) {
            throw new NotFoundError('Entity Not Found');
        }
        return result;
    }

    async delete({ id }) {
        const result = await this.resource.deleteSingle(id);
        if (!result) {
            throw new NotFoundError('Entity Not Found');
        }
    }
}