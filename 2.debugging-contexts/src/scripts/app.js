function init() {
    var timerButtons = document.querySelectorAll('[data-timer-value]');
    setupButtonEventsForTimer(timerButtons, timer);
}

/**
 * Setup the event listeners for all buttons with a data set timer value
 * @param {NodeList} buttons
 * @param {Timer} timer
 */
function setupButtonEventsForTimer(buttons, timer) {
    for(var i = 0, l = buttons.length; i < l; i++) {
        buttons[i].addEventListener('click', function() {
            if(buttons[i]) {
                var timerValue = parseInt(buttons[i].dataset.timerValue);
                //----- Content of the click event must run the lines below -------------------------
                timer.duration = timerValue;
                timer.start();
                //-------------------------------------------------------------------------------------
            }
        });
    }
}

/**
 * Append the duration of a completed timer as a li into a set unordered list.
 * @param {number} duration
 */
function updateListOfCompletedTimers(duration) {
    var list = document.getElementById('completedTimers');
    var li = document.createElement('li');
    var textNode = document.createTextNode('Completed timer waiting: ' + (duration / 1000) + 's');

    li.appendChild(textNode);
    list.appendChild(li);
}

//App start!
window.timer = new Timer(-1, updateListOfCompletedTimers);