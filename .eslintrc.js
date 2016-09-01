module.exports = {
    extends: 'airbnb',
    env: {
       browser: true,
       es6: true
    },
    rules: {
        'comma-dangle': 0,
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
        'indent': [2, 4, {SwitchCase: 1}],
        'no-console': ['error', { allow: ['warn'] }],
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4]
    },
    globals: {
        window: false,
        describe: false,
        it: false,
        expect: false,
        beforeEach: false,
        afterEach: false,
        sinon: false,
        runs: false,
        waits: false,
        waitsFor: false,
        loadFixtures: false,
        loadStyleFixtures: false
    }
};
