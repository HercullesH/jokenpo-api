import JokenpoRouter from './jokenpo.route';

class Router {
	constructor() {
		this.jokenpoRouter =  new JokenpoRouter();
	}

	setup(app) {
		app.use('/api/jokenpos', this.jokenpoRouter.setup());
	}
}

export default Router;
