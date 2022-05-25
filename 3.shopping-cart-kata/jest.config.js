module.exports = {
    preset: 'ts-jest',
    globals: {
        "ts-jest": {
            preset: "js-with-ts",
            isolatedModules: true,
            diagnostics: false
        }
    }
};