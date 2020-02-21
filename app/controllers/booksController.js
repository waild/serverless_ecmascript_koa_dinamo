import BaseController from './baseController';
import BookResource from '../resources/booksResource';

export default class BooksControler extends BaseController {
    constructor() {
        super(new BookResource());
    }
}
