import router from 'koa-joi-router';
import BooksRoute from './books';

class Router {
    constructor() {
        this.router = router();
        this.registerRoutes();
    }

    registerRoutes() {
        const bookRoute = new BooksRoute();
        bookRoute.registerRoutes(this.router);
    }
}

export default Router;
