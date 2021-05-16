import { query } from 'express-validator';
import ErrorMessage from '../utils/errorMessage';
class JokenpoValidator {
	getResult() {
		const allowedValues = ['rock', 'scissors', 'paper'];

		return [
			query('player1', ErrorMessage.validatorMessage('Jogador 1')).exists().bail().custom((value) => allowedValues.includes(value)),
			query('player2', ErrorMessage.validatorMessage('Jogador 2')).exists().bail().custom((value) => allowedValues.includes(value))
		];
	}
}

export default JokenpoValidator;
