import App from '../src/app.js';
import chai from 'chai';
import chaiHttp from 'chai-http';
import ErrorMessage from '../src/app/utils/errorMessage';
const app = new App();
const url = '/api/jokenpos';

app.setup();
chai.use(chaiHttp);

describe('jokenpo integration tests', () => {
	describe('invalid endpoint', () => {
		it('not found', (done) => {
			chai.request(app.app)
				.post(`${url}?playr1=rack&player2=scissors`)
				.end((err, res) => {
					chai.expect(res.body[0]).to.equal('Não encontrado');
					chai.expect(res).to.have.status(404);
					done();
				});
		});
	});

	describe('invalid properties', () => {
		it('invalid p1 property', (done) => {
			chai.request(app.app)
				.get(`${url}?playr1=rack&player2=scissors`)
				.end((err, res) => {
					chai.expect(res.body[0]).to.equal(ErrorMessage.validatorMessage('Jogador 1'));
					chai.expect(res).to.have.status(422);
					done();
				});
		});

		it('invalid p2 property', (done) => {
			chai.request(app.app)
				.get(`${url}?player1=scissors&layer2=rack`)
				.end((err, res) => {
					chai.expect(res.body[0]).to.equal(ErrorMessage.validatorMessage('Jogador 2'));
					chai.expect(res).to.have.status(422);
					done();
				});
		});

		it('invalid p1 and p2 property', (done) => {
			chai.request(app.app)
				.get(`${url}?playr1=test&plaer2=tes`)
				.end((err, res) => {
					chai.expect(res.body[0]).to.equal(ErrorMessage.validatorMessage('Jogador 1'));
					chai.expect(res.body[1]).to.equal(ErrorMessage.validatorMessage('Jogador 2'));
					chai.expect(res).to.have.status(422);
					done();
				});
		});
	});

	describe('invalid inputs', () => {
		it('invalid p1 input', (done) => {
			chai.request(app.app)
				.get(`${url}?player1=rack&player2=scissors`)
				.end((err, res) => {
					chai.expect(res.body[0]).to.equal(ErrorMessage.validatorMessage('Jogador 1'));
					chai.expect(res).to.have.status(422);
					done();
				});
		});

		it('invalid p2 input', (done) => {
			chai.request(app.app)
				.get(`${url}?player1=scissors&player2=rack`)
				.end((err, res) => {
					chai.expect(res.body[0]).to.equal(ErrorMessage.validatorMessage('Jogador 2'));
					chai.expect(res).to.have.status(422);
					done();
				});
		});

		it('invalid p1 and p2 input', (done) => {
			chai.request(app.app)
				.get(`${url}?player1=test&player2=tes`)
				.end((err, res) => {
					chai.expect(res.body[0]).to.equal(ErrorMessage.validatorMessage('Jogador 1'));
					chai.expect(res.body[1]).to.equal(ErrorMessage.validatorMessage('Jogador 2'));
					chai.expect(res).to.have.status(422);
					done();
				});
		});
	});

	describe('Testing endpoint results', () => {
		it('rock and scissors', (done) => {
			chai.request(app.app)
				.get(`${url}?player1=rock&player2=scissors`)
				.end((err, res) => {
					chai.expect(res).to.have.status(200);
					chai.expect(res.body.data).to.equal('p1');
					done();
				});
		});

		it('scissors and rock', (done) => {
			chai.request(app.app)
				.get(`${url}?player1=scissors&player2=rock`)
				.end((err, res) => {
					chai.expect(res).to.have.status(200);
					chai.expect(res.body.data).to.equal('p2');
					done();
				});
		});

		it('rock and paper', (done) => {
			chai.request(app.app)
				.get(`${url}?player1=rock&player2=paper`)
				.end((err, res) => {
					chai.expect(res).to.have.status(200);
					chai.expect(res.body.data).to.equal('p2');
					done();
				});
		});

		it('paper and rock', (done) => {
			chai.request(app.app)
				.get(`${url}?player1=paper&player2=rock`)
				.end((err, res) => {
					chai.expect(res).to.have.status(200);
					chai.expect(res.body.data).to.equal('p1');
					done();
				});
		});

		it('paper and scissors', (done) => {
			chai.request(app.app)
				.get(`${url}?player1=paper&player2=scissors`)
				.end((err, res) => {
					chai.expect(res).to.have.status(200);
					chai.expect(res.body.data).to.equal('p2');
					done();
				});
		});

		it('scissors and paper', (done) => {
			chai.request(app.app)
				.get(`${url}?player1=scissors&player2=paper`)
				.end((err, res) => {
					chai.expect(res).to.have.status(200);
					chai.expect(res.body.data).to.equal('p1');
					done();
				});
		});

		it('rock and rock', (done) => {
			chai.request(app.app)
				.get(`${url}?player1=rock&player2=rock`)
				.end((err, res) => {
					chai.expect(res).to.have.status(200);
					chai.expect(res.body.data).to.equal('equal');
					done();
				});
		});

		it('paper and paper', (done) => {
			chai.request(app.app)
				.get(`${url}?player1=paper&player2=paper`)
				.end((err, res) => {
					chai.expect(res).to.have.status(200);
					chai.expect(res.body.data).to.equal('equal');
					done();
				});
		});

		it('scissors and scissors', (done) => {
			chai.request(app.app)
				.get(`${url}?player1=scissors&player2=scissors`)
				.end((err, res) => {
					chai.expect(res).to.have.status(200);
					chai.expect(res.body.data).to.equal('equal');
					done();
				});
		});
	});
});
