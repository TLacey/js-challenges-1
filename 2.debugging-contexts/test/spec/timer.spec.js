describe("Timer Class", () => {
    const Timer = require("../../src/scripts/classes/timer");
    let timer = null;

    beforeEach(() => {
        timer = new Timer(5, null);
    });

    test("it should start a timer", () => {
        timer.start();
        expect(timer.activeTimeout).toBeGreaterThan(0);
    });

    describe("when there is an active timeout", () => {
        let onComplete = null;

        beforeEach(() => {
            onComplete = jest.fn(); //Wrapper function to spy on invocations.
            timer.onComplete = onComplete;
            timer.start();
        });

        test("it should run a callback after completion", (done) => {
            setTimeout(() => {
                expect(onComplete).toHaveBeenCalledWith(timer.duration);
                done();
            }, timer.duration);
        });

        test("it should reset the activeTimeout on stop", () => {
            timer.stop();
            expect(timer.activeTimeout).toBe(0);
        });

        test("it should stop an existing timeout", (done) => {
            timer.stop();

            setTimeout(() => {
                expect(onComplete).not.toHaveBeenCalledWith(timer.duration);
                done();
            }, timer.duration);
        });

    });

    describe("when resetting a timer", () => {
        test("it should change the duration to the default value", () => {
            timer.duration = 1;
            timer.reset();

            expect(timer.duration).toBe(Timer.defaultDuration);
        });

        test("it should stop a running timeout", () => {
            timer.duration = 1;
            timer.start();
            const stopSpy = jest.spyOn(timer, "stop");

            timer.reset();
            expect(stopSpy).toHaveBeenCalled();
        });
    });
});