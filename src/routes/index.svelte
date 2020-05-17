<script>
  const totalBalls = 90;
  let yetToStart = true;
  let inGame = false;
  let remainingBalls = [];
  let previousBalls = [];
  let pickedBall = "";

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
      pickedBall = "";
      previousBalls = [];
      remainingBalls = generateBalls();
    }

    pickedBall =
      remainingBalls[Math.floor(Math.random() * remainingBalls.length)];

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
    if (window.confirm("Are you sure you want to restart?")) {
      yetToStart = true;
      inGame = false;
      pickedBall = "";
      previousBalls = [];
    }
  }
</script>

<style>
  .bingo {
    text-align: center;
  }
  h1,
  h2 {
    margin: 0 auto;
  }

  h1,
  h2 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 100;
    margin: 0 0 0.5em 0;
  }

  h1.ball {
    line-height: 1.5em;
    display: inline-block;
    border: 1px solid black;
    border-radius: 50%;
    padding: 3px;
    width: 1.5em;
    height: 1.5em;
  }

  .results {
    margin: 0 0 0.5em 0;
    padding: 0.5em 1em;
    background-color: #fff4f4;
    box-shadow: inset 0px 0px 2em #ffe1e1;
    border: 2px solid #ffd7d7;
    border-radius: 3px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(auto-fill, minmax(36px, 1fr));
  }

  li {
    border: 1px solid #ffd7d7;
    border-radius: 3px;
    box-shadow: inset 0px 0px 2em #ffe1e1;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }

  p {
    margin: 0 0 0.5em 0;
  }

  p span {
    color: rgb(141, 141, 141);
    font-style: italic;
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
  {#if yetToStart}
    <h1>Zeke’s Bingo Game</h1>
  {:else}
    <h1 class="ball">{pickedBall}</h1>
  {/if}
  <h2>{!yetToStart && !inGame ? 'Game Over' : ''}</h2>

  {#if yetToStart}
    <button on:click={playGame}>Start Game</button>
  {:else}
    {#if inGame}
      <button on:click={playGame}>Pick Bingo Ball</button>
    {:else}
      <button on:click={playGame}>Start New Game</button>
    {/if}
    <div class="results">
      <p>
        <span>Remaining Balls:</span>
        {remainingBalls.length}
      </p>
      <ul>
        {#each previousBalls as ball}
          <li>{ball}</li>
        {/each}
      </ul>
    </div>
  {/if}

  {#if !yetToStart && inGame}
    <button class="restart" on:click={resetGame}>Restart</button>
  {/if}
</div>
