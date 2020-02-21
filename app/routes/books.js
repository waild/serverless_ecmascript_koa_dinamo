import BooksControler from '../controllers/booksController';
import validation from '../validators/booksValidator';
import handlerWrapper from '../lib/handlerWrapper';

class BooksRoute {
    constructor() {
        this.booksController = new BooksControler();
    }

    registerRoutes(router) {
        router.route({
            method: 'GET',
            path: '/books',
            validate: validation.getList,
            handler: handlerWrapper(this.booksController.getList.bind(this.booksController)),
        });

        router.route({
            method: 'GET',
            path: '/book/:id',
            validate: validation.getSingle,
            handler: handlerWrapper(this.booksController.get.bind(this.booksController)),
        });

        router.route({
            method: 'POST',
            path: '/book/add',
            validate: validation.create,
            handler: handlerWrapper(this.booksController.create.bind(this.booksController)),
        });

        router.route({
            method: 'POST',
            path: '/book/:id/update',
            validate: validation.update,
            handler: handlerWrapper(this.booksController.update.bind(this.booksController)),
        });

        router.route({
            method: 'POST',
            path: '/book/:id/delete',
            validate: validation.delete,
            handler: handlerWrapper(this.booksController.delete.bind(this.booksController)),
        });
    }
}

export default BooksRoute;
