class JokenpoService {
	getResult({ player1, player2 }) {
		const winnerByInput = {
			'rock': 'scissors',
			'scissors': 'paper',
			'paper': 'rock'
		};

		if (player1 === player2) {
			return 'equal';
		}

		return winnerByInput[player1] === player2 ? 'p1' : 'p2';
	}
}

export default JokenpoService;
