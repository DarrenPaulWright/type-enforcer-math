import { benchSettings } from 'karma-webpack-bundle';
import { Point } from '../index.js';

suite('Point', () => {
	let sandbox;
	let point;
	let point2;

	const validString = '1,2';
	const validArray = [1, 2];
	const validObject = {x: 1, y: 2};

	benchmark('init default', () => {
		sandbox = new Point();
	}, benchSettings);

	benchmark('init another point', () => {
		sandbox = new Point(point);
	}, {
		...benchSettings,
		onStart() {
			point = new Point(1, 2);
		}
	});

	benchmark('init string', () => {
		sandbox = new Point(validString);
	}, benchSettings);

	benchmark('init array', () => {
		sandbox = new Point(validArray);
	}, benchSettings);

	benchmark('init object', () => {
		sandbox = new Point(validObject);
	}, benchSettings);

	benchmark('init integers', () => {
		sandbox = new Point(1, 2);
	}, benchSettings);

	benchmark('isValid Point', () => {
		sandbox = Point.isValid(point);
	}, {
		...benchSettings,
		onStart() {
			point = new Point();
		}
	});

	benchmark('isValid String true', () => {
		sandbox = Point.isValid(validString);
	}, benchSettings);

	benchmark('isValid String false', () => {
		sandbox = Point.isValid('1,a');
	}, benchSettings);

	benchmark('isValid Array true', () => {
		sandbox = Point.isValid(validArray);
	}, benchSettings);

	benchmark('isValid Array false', () => {
		sandbox = Point.isValid([1, 2, 3]);
	}, benchSettings);

	benchmark('isValid Object true', () => {
		sandbox = Point.isValid(validObject);
	}, benchSettings);

	benchmark('isValid Object false', () => {
		sandbox = Point.isValid({});
	}, benchSettings);

	benchmark('normalizeAngle normalized', () => {
		sandbox = Point.normalizeAngle(3);
	}, benchSettings);

	benchmark('normalizeAngle positive', () => {
		sandbox = Point.normalizeAngle(20);
	}, benchSettings);

	benchmark('normalizeAngle negative', () => {
		sandbox = Point.normalizeAngle(-20);
	}, benchSettings);

	benchmark('toString', () => {
		sandbox = point.toString();
	}, {
		...benchSettings,
		onStart() {
			point = new Point(1, 2);
		}
	});

	benchmark('distance', () => {
		sandbox = point.distance();
	}, {
		...benchSettings,
		onStart() {
			point = new Point(2, 3);
		}
	});

	benchmark('isSame false (undefined)', () => {
		sandbox = point.isSame();
	}, {
		...benchSettings,
		onStart() {
			point = new Point(1, 2);
		}
	});

	benchmark('isSame true (point)', () => {
		sandbox = point.isSame(point2);
	}, {
		...benchSettings,
		onStart() {
			point = new Point(1, 2);
			point2 = new Point(1, 2);
		}
	});

	benchmark('isSame false (point)', () => {
		sandbox = point.isSame(point2);
	}, {
		...benchSettings,
		onStart() {
			point = new Point(1, 2);
			point2 = new Point(1, 3);
		}
	});

	benchmark('isSame true (array)', () => {
		sandbox = point.isSame(validArray);
	}, {
		...benchSettings,
		onStart() {
			point = new Point(validArray);
		}
	});

	benchmark('isSame false (array)', () => {
		sandbox = point.isSame(point2);
	}, {
		...benchSettings,
		onStart() {
			point = new Point(validArray);
			point2 = validArray.slice();
			point2[1] = point2[1] + 1;
		}
	});
});
