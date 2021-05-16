import JokenpoService from '../services/jokenpo.service';
import BaseController from './base.controller';
class JokenpoController extends BaseController {
	constructor() {
		super();

		this.jokenpoService = new JokenpoService();
		this.getResult = this.getResult.bind(this);

	}

	getResult(req, res, next) {
		try {
			this.verifyRequest(req);

			const response = this.jokenpoService.getResult(req.query);

			res.json({ data: response });
		} catch (error) {
			return next(error);
		}
	}

}

export default JokenpoController;
