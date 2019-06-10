<script>
const totalBalls = 90;
let yetToStart = true;
let inGame = false;
let remainingBalls = [];
let previousBalls = [];
let pickedBall = '';

const generateBalls = () => {
  const total = Array.from(Array(totalBalls + 1).keys());
  total.shift(); // Remove 0 from array
  return total;
};

function playGame() {
	yetToStart = false;

  // Start of the game
  if (!inGame) {
		inGame = true;
		pickedBall = '';
  	previousBalls = [];
		remainingBalls = generateBalls();
	}

	pickedBall = remainingBalls[Math.floor(Math.random() * remainingBalls.length)];

	const index = remainingBalls.indexOf(pickedBall);
	remainingBalls.splice(index, 1);
	remainingBalls = remainingBalls;

	previousBalls.push(pickedBall);
	previousBalls = previousBalls;

	if (remainingBalls.length === 0) {
		inGame = false;
	}
}

function resetGame() {
	yetToStart = true;
	inGame = false;
	pickedBall = '';
  previousBalls = [];
}
</script>

<style>
	.bingo {
		text-align: center;
	}
	h1, h2 {
		margin: 0 auto;
	}

	h1, h2 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 100;
		margin: 0 0 0.5em 0;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	p {
		margin: 0 0 0.5em 0;
	}

	button {
		font-size: 2em;
		margin: 0 0 1em 0;
		border-radius: 0.25em;
		padding: 0.25em;
		font-weight: 100;
		background-color: transparent;
	}

	button.restart {
		font-size: 1em;
	}
</style>

<svelte:head>
	<title>Zeke’s Bingo Game</title>
</svelte:head>

<div class="bingo">
	<h1>{yetToStart ? 'Zeke’s Bingo Game' : pickedBall}</h1>
	<h2>{!yetToStart && !inGame ? 'Game Over' : ''}</h2>

	{#if yetToStart}
		<button on:click={playGame}>Start Game</button>
	{:else}
		{#if inGame}
			<button on:click={playGame}>Pick Bingo Ball</button>
		{:else}
			<button on:click={playGame}>Start New Game</button>
		{/if}
		<p>Remaining Balls: {remainingBalls.length}</p>
		<p>Picked Balls: {previousBalls.join(', ')}</p>
	{/if}

	{#if !yetToStart && inGame}
		<button class="restart" on:click={resetGame}>Restart</button>
	{/if}
</div>
