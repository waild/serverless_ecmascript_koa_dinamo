import App from './app';

const app = new App();
// eslint-disable-next-line import/prefer-default-export
export const handler = async (event, context) => {
    const result = await app.handler(event, context);
    return result;
};
