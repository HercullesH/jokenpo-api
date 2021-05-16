import express from 'express';
import JokenpoController from '../controllers/jokenpo.controller';
import JokenpoValidator from '../validators/jokenpo.validator';

class JokenpoRouter {
	constructor() {
		this.router = express.Router();
		this.jokenpoController = new JokenpoController();
		this.jokenpoValidator = new JokenpoValidator();
	}

	setup() {
		this.router.get('/', this.jokenpoValidator.getResult(), this.jokenpoController.getResult);

		return this.router;
	}
}

export default JokenpoRouter;
