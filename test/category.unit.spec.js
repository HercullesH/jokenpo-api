import assert from 'assert';
import JokenpoService from '../src/app/services/jokenpo.service';
const jokenpoService = new JokenpoService;

describe('jokenpo unit tests', () => {
	describe('Testing result', () => {
		it('rock and scissors', () => {
			const result = jokenpoService.getResult({
				player1: 'rock',
				player2: 'scissors'
			});

			assert.strictEqual(result, 'p1', 'Erro: resultado inválido');
		});

		it('scissors and rock', () => {
			const result = jokenpoService.getResult({
				player1: 'scissors',
				player2: 'rock'
			});

			assert.strictEqual(result, 'p2', 'Erro: resultado inválido');
		});

		it('paper and rock', () => {
			const result = jokenpoService.getResult({
				player1: 'paper',
				player2: 'rock'
			});

			assert.strictEqual(result, 'p1', 'Erro: resultado inválido');
		});

		it('rock and paper', () => {
			const result = jokenpoService.getResult({
				player1: 'rock',
				player2: 'paper'
			});

			assert.strictEqual(result, 'p2', 'Erro: resultado inválido');
		});

		it('scissors and paper', () => {
			const result = jokenpoService.getResult({
				player1: 'scissors',
				player2: 'paper'
			});

			assert.strictEqual(result, 'p1', 'Erro: resultado inválido');
		});

		it('paper and scissors', () => {
			const result = jokenpoService.getResult({
				player1: 'paper',
				player2: 'scissors'
			});

			assert.strictEqual(result, 'p2', 'Erro: resultado inválido');
		});

		it('rock and rock', () => {
			const result = jokenpoService.getResult({
				player1: 'rock',
				player2: 'rock'
			});

			assert.strictEqual(result, 'equal', 'Erro: resultado inválido');
		});

		it('paper and paper', () => {
			const result = jokenpoService.getResult({
				player1: 'paper',
				player2: 'paper'
			});

			assert.strictEqual(result, 'equal', 'Erro: resultado inválido');
		});

		it('scissors and scissors', () => {
			const result = jokenpoService.getResult({
				player1: 'paper',
				player2: 'paper'
			});

			assert.strictEqual(result, 'equal', 'Erro: resultado inválido');
		});
	});
});
