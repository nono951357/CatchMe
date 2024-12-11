<script>
  import { onMount } from 'svelte';

  let [x, y, xi, yi] = [1, 1, 0, 0];
  let ex = 0, ey = 0;
  let score = 0;
  let targetScore = 100;
  let gameStarted = false;
  let gameWon = false;
  let target = 'fly'; // Default target
  const radius = 300; // Radius of the circular boundary
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;

  onMount(() => {
    setInterval(() => {
      if (!gameStarted || gameWon) return;

      const distance = Math.sqrt((x - ex) ** 2 + (y - ey) ** 2);
      if (distance < 100) {
        const speedFactor = 0.005 + score * 0.0005; // More gradual speed increase
        xi += (x - ex) * speedFactor;
        yi += (y - ey) * speedFactor;
      }

      x += xi;
      y += yi;
      xi *= 0.95;
      yi *= 0.95;

      // Circular boundary checks
      const distFromCenter = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
      if (distFromCenter > radius) {
        const angle = Math.atan2(y - centerY, x - centerX);
        x = centerX + radius * Math.cos(angle);
        y = centerY + radius * Math.sin(angle);
        xi = -xi;
        yi = -yi;
      }
    }, 16);
  });

  function checkCollision() {
    const targetElement = document.querySelector(`.${target}`);
    const targetRect = targetElement.getBoundingClientRect();
    if (
      ex >= targetRect.left &&
      ex <= targetRect.right &&
      ey >= targetRect.top &&
      ey <= targetRect.bottom
    ) {
      score++;
      if (score >= targetScore) {
        gameWon = true;
      }
    }
  }

  function startGame() {
    [x, y, xi, yi] = [1, 1, 0, 0];
    ex = 0;
    ey = 0;
    score = 0;
    gameStarted = true;
    gameWon = false;
  }

  function validateTargetScore(event) {
    let value = parseInt(event.target.value);
    if (value < 100) {
      targetScore = 100;
    } else if (value > 1000) {
      targetScore = 1000;
    } else {
      targetScore = value;
    }
  }
</script>

<main>
  {#if !gameStarted}
    <div class="start-screen">
      <h1>Set Target Score</h1>
      <input type="number" bind:value={targetScore} min="100" max="1000" on:input={validateTargetScore} />
      <div class="target-selection">
        <label>
          <input type="radio" name="target" value="fly" bind:group={target} />
          Fly
        </label>
        <label>
          <input type="radio" name="target" value="rat" bind:group={target} />
          Rat
        </label>
      </div>
      <button on:click={startGame}>Start</button>
    </div>
  {:else if gameWon}
    <div class="win-screen">
      <h1>You Win!</h1>
      <p>Score: {score}</p>
      <button on:click={() => gameStarted = false}>Play Again</button>
    </div>
  {:else}
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="eg" on:mousemove={(e) => {
      ex = e.clientX; ey = e.clientY;
      checkCollision();
    }}>
      <div class="circle-boundary" style="left: {centerX}px; top: {centerY}px;"></div>
      <div class="{target}" style="left: {x}px; top: {y}px;">
        <img src="{target}.png" alt="{target}" />
      </div>
      <div class="cursor" style="left: {ex}px; top: {ey}px;"></div>
    </div>
    <div class="score">Score: {score}</div>
  {/if}
</main>

<style>
  body {
    margin: 0;
    overflow: hidden;
    background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
    font-family: 'Arial', sans-serif;
  }

  div.eg {
    position: fixed;
    top: 0px;
    left: 0px;
    cursor: none;
    width: 100%;
    height: 100%;
  }

  .fly, .rat {
    position: fixed;
    width: 50px;
    height: 50px;
    transform: translate(-50%, -50%);
  }

  .fly img, .rat img {
    width: 100%;
    height: 100%;
  }

  .cursor {
    position: fixed;
    width: 20px;
    height: 20px;
    background-color: red;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .circle-boundary {
    position: absolute;
    width: 600px; /* 2 * radius */
    height: 600px; /* 2 * radius */
    border: 2px dashed #333;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .score {
    position: fixed;
    top: 10px;
    left: 10px;
    font-size: 20px;
    color: #ffffff;
  }

  .start-screen, .win-screen {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
  }

  .start-screen input[type="number"] {
    margin: 10px;
    padding: 5px;
    font-size: 20px;
    border: none;
    border-radius: 5px;
  }

  .target-selection {
    margin: 10px;
  }

  .target-selection label {
    margin-right: 10px;
    font-size: 20px;
  }

  .start-screen button, .win-screen button {
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #333;
    color: white;
  }

  .start-screen button:hover, .win-screen button:hover {
    background-color: #555;
  }
</style>