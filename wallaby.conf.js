const wallabyWebpack = require('wallaby-webpack');
const testRunnerConfig = require('test-runner-config');
const config = require('./testRunner.config.js');

const files = testRunnerConfig.getWallabyFiles(config, {
	helper: (file) => {
		return {pattern: file, instrument: false, load: false};
	},
	src: (file) => {
		return {pattern: file, instrument: true, load: false};
	},
	specs: (file) => {
		return {pattern: file, instrument: false, load: false};
	}
});

module.exports = function(wallaby) {
	return {
		name: 'type-enforcer-math',
		files: files.files,
		tests: files.tests,
		testFramework: 'mocha',
		env: {kind: 'chrome'},
		postprocessor: wallabyWebpack(),
		compilers: {'**/*.js': wallaby.compilers.babel()},
		setup() {
			window.__moduleBundler.loadTests();
		},
		lowCoverageThreshold: 100
	};
};
