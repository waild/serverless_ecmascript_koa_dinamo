import cors from '@koa/cors';
import 'cross-fetch/polyfill';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import requestId from 'koa-requestid';
import serverless from 'serverless-http';
import Routes from './routes';

export default class App {
    constructor() {
        const app = new Koa();
        const routes = new Routes();
        app.use(bodyParser());
        app.use(requestId());
        app.use(cors());
        app.use(routes.router.middleware());
        this.handler = serverless(app);
    }
}
