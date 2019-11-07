const testRunnerConfig = require('test-runner-config');
const config = require('./testRunner.config.js');

const isSingleRun = process.argv.includes('--single-run');

const files = testRunnerConfig.getKarmaFiles(config, {
	src: (file) => ({pattern: file, included: false})
}).files;

const preprocessors = files.reduce((result, pattern) => {
	if (pattern.included !== false) {
		result[pattern] = ['webpack'];
	}

	return result;
}, {});

const reporters = ['brief', 'coverage'];
if (isSingleRun) {
	reporters.push('coveralls');
}

module.exports = function(config) {
	config.set({
		browsers: ['ChromeHeadless', 'FirefoxHeadless'],
		customLaunchers: {
			FirefoxHeadless: {
				base: 'Firefox',
				flags: ['-headless']
			}
		},
		files: files,
		frameworks: ['mocha'],
		preprocessors: preprocessors,
		reporters: reporters,
		briefReporter: {
			renderOnRunCompleteOnly: isSingleRun
		},
		coverageReporter: {
			type: 'lcov',
			dir: 'coverage/'
		},
		webpack: {
			mode: 'development',
			module: {
				rules: [{
					test: /\.js$/,
					enforce: 'pre',
					exclude: /node_modules/,
					use: [{
						loader: 'eslint-loader',
						options: {
							configFile: '.eslintrc.json',
							cache: true,
							emitWarning: true
						}
					}]
				}, {
					test: /\.js/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				}]
			},
			watch: true
		},
		webpackServer: {
			noInfo: true
		}
	});
};
