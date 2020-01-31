import round from './round.js';

export const metricPrefixNames = {
	'-8': ' yocto',
	'-7': ' zepto',
	'-6': ' atto',
	'-5': ' femto',
	'-4': ' pico',
	'-3': ' nano',
	'-2': ' micro',
	'-1': ' milli',
	'0': '',
	'1': ' kilo',
	'2': ' mega',
	'3': ' giga',
	'4': ' tera',
	'5': ' peta',
	'6': ' exa',
	'7': ' zetta',
	'8': ' yotta'
};

const defaultSettings = {
	precision: 2,
	prefix: {
		'-8': 'y',
		'-7': 'z',
		'-6': 'a',
		'-5': 'f',
		'-4': 'p',
		'-3': 'n',
		'-2': 'μ',
		'-1': 'm',
		'0': '',
		'1': 'k',
		'2': 'M',
		'3': 'G',
		'4': 'T',
		'5': 'P',
		'6': 'E',
		'7': 'Z',
		'8': 'Y'
	},
	suffix: ''
};

const getExp = (value) => Math.log10(value) / 3 >> 0;

/**
 * Abbreviates a number in a human readable format.
 * @see https://en.wikipedia.org/wiki/Metric_prefix
 *
 * @function abbrNumber
 *
 * @param {Number} value
 * @param {Object} [settings]
 * @param {Number} [settings.precision=2] - passed to round()
 * @param {Number} [settings.fractionDigits=null] - passed to round()
 * @param {Object} [settings.prefix] - An object of unit name prefixes to use when shortening numbers. {'-8': 'y', '-7': 'z', ... '-1': 'm', '0': '', '1': 'k', ... '7': 'Z', '8': 'Y'}. The default prefixes are single character symbols like 'k' and 'μ' while full prefix names are provided via the separately exported "metricPrefixNames"
 * @param {String} [settings.suffix=''] - Appended after the prefix
 *
 * @returns {string}
 */
export default (value, settings = {}) => {
	if (value === 0) {
		return '0';
	}

	settings = {
		...defaultSettings,
		...settings
	};

	value = round(value, null, settings.precision);
	const abs = Math.abs(value);
	let exp = 0;

	if (abs < 1) {
		exp = -getExp((1 / abs) - 1) - 1;
		value = value * Math.pow(1e3, -exp);
	}
	else {
		exp = getExp(abs);
		value = value / Math.pow(1e3, exp);
	}

	return value + settings.prefix[exp] + settings.suffix;
}
