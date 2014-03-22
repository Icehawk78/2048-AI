animationDelay = 100;
minSearchTime = 100;
gameSize = 8;

// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  GM = new GameManager(gameSize, KeyboardInputManager, HTMLActuator);
});
