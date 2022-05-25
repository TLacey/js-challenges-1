function init() {
  var timerButtons = document.querySelectorAll('[data-timer-value]');
  setupButtonEventsForTimer(timerButtons, window.timer);
}

/**
 * Setup the event listeners for all buttons with a data set timer value
 * @param {NodeList} buttons
 * @param {Timer} timer
 */
function setupButtonEventsForTimer(buttons, timer) {
  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      var timerValue = parseInt(button.dataset.timerValue);
      //----- Content of the click event must run the lines below -------------------------
      timer.duration = timerValue;
      timer.start();
      //-------------------------------------------------------------------------------------
    });
  });
}

/**
 * Append the duration of a completed timer as a li into a set unordered list.
 * @param {number} duration
 */
function updateListOfCompletedTimers(duration) {
  var list = document.getElementById('completedTimers');
  var li = document.createElement('li');
  var textNode = document.createTextNode(
    'Completed timer waiting: ' + duration / 1000 + 's'
  );

  li.appendChild(textNode);
  list.appendChild(li);
}

//App start!
window.timer = new Timer(-1, updateListOfCompletedTimers);
init();
