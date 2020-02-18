export default requestHandler => async (ctx, next) => {
	try {
		const response = await requestHandler(ctx.params, ctx.request.body);
		if (response) {
			ctx.body = JSON.stringify(response);
			ctx.status = 200;
		} else {
			ctx.status = 204;
		}
	} catch (error) {
		ctx.status = error.status || 500;
		ctx.body = error.message;
	} finally {
		await next();
	}
};
