import router from 'koa-joi-router';
import BooksRoute from './books';
class Router {
	constructor() {
		this.router = router();
		this.registerRoutes();
	}

	registerRoutes() {
        new BooksRoute(this.router);
	}
}

export default Router;