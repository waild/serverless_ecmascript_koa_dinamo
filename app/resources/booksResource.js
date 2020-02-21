import BaseResource from './baseResource';

const tableName = process.env.BOOK_TABLE;
export default class BooksResource extends BaseResource {
    constructor() {
        super(tableName);
    }
}
