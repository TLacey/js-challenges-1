describe("App", () => {
    const JsDom = require("jsdom").JSDOM;
    let mockWindow = null;

    beforeAll(() => {
        return JsDom.fromFile("src/index.html", {
            contentType: "text/html",
            resources: "usable",
            runScripts: "dangerously"
        }).then((jsDom) => {
            return new Promise((resolve) => {
                jsDom.window.document.addEventListener("DOMContentLoaded", () => {
                    mockWindow = jsDom.window;
                    mockWindow.init();
                    resolve();
                });
            });
        });
    });

    test("it should start the timer on click of all buttons", () => {
        const timerButtons = mockWindow.document.querySelectorAll("[data-timer-value]");
        for (let i = 0, l = timerButtons.length; i < l; i++) {
            timerButtons[i].click();

            expect(mockWindow.timer.activeTimeout).toBeGreaterThan(0);
            mockWindow.timer.stop();
        }
    });

    test("it should set the timer's duration on click of a button to the button's data set value", () => {
        const timerButtons = mockWindow.document.querySelectorAll("[data-timer-value]");
        for (let i = 0, l = timerButtons.length; i < l; i++) {
            timerButtons[i].click();

            expect(mockWindow.timer.duration).toBe(parseInt(timerButtons[i].dataset.timerValue));
            mockWindow.timer.stop();
        }
    });
});

