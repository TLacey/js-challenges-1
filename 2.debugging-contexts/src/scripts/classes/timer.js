(function(name, factory) {
    //UMD styled wrapper.
    if (typeof define === "function" && define.amd) {
        define(name, factory);
    } else if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory();
    } else {
        window[name] = factory();
    }
})("Timer", function() {
    /**
     * @param {number} duration - Default and ignored value is -1
     * @param {Function} onComplete - Callback to run when the timer has finished
     * @constructor
     */
    function Timer(duration, onComplete) {
        this.duration = duration || Timer.defaultDuration;
        this.onComplete = onComplete;
        this.activeTimeout = 0;
    }

    Timer.defaultDuration = -1;

    Timer.prototype.start = function() {
        if (this.duration === -1) {
            throw new Error("Duration not set!");
        }

        if (this.activeTimeout !== 0) {
            this.stop();
        }

        this.activeTimeout = setTimeout(function() {
            if (typeof this.onComplete === "function") {
                this.onComplete(this.duration);
            }
            this.activeTimeout = 0;
        }, this.duration);
    };

    Timer.prototype.stop = function() {
        //Stop the active timeout!
    };

    Timer.prototype.reset = function() {
        this.stop();
        this.duration = Timer.defaultDuration;
    };

    return Timer;
});

