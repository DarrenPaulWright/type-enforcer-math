import { benchSettings } from 'karma-webpack-bundle';
import { Point, Vector } from '../index.js';

suite('Vector', () => {
	let sandbox;
	let vector;
	let vector2;
	let point;
	let point2;

	benchmark('init default', () => {
		sandbox = new Vector();
	}, benchSettings);

	benchmark('init with a vector', () => {
		sandbox = new Vector(vector);
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [3, 4]);
		}
	});

	benchmark('init start only', () => {
		sandbox = new Vector(point);
	}, {
		...benchSettings,
		onStart() {
			point = new Point(1, 2);
		}
	});

	benchmark('init start and end', () => {
		sandbox = new Vector(point, point2);
	}, {
		...benchSettings,
		onStart() {
			point = new Point(1, 2);
			point2 = new Point(2, 3);
		}
	});

	benchmark('init string', () => {
		sandbox = new Vector('[[1,2],[2,3]]');
	}, benchSettings);

	benchmark('isValid undefined', () => {
		sandbox = Vector.isValid();
	}, benchSettings);

	benchmark('isValid vector', () => {
		sandbox = Vector.isValid(vector);
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
		}
	});

	benchmark('isValid string true', () => {
		sandbox = Vector.isValid('[[1,2],[2,3]]');
	}, benchSettings);

	benchmark('isValid string false', () => {
		sandbox = Vector.isValid('[[1,2],a]');
	}, benchSettings);

	benchmark('isValid array true', () => {
		sandbox = Vector.isValid([[1, 2], [2, 3]]);
	}, benchSettings);

	benchmark('isValid array false', () => {
		sandbox = Vector.isValid([[1, 2], 'a']);
	}, benchSettings);

	benchmark('isSame undefined', () => {
		sandbox = vector.isSame();
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
		}
	});

	benchmark('isSame vector true', () => {
		sandbox = vector.isSame(vector2);
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
			vector2 = new Vector([1, 2], [2, 3]);
		}
	});

	benchmark('isSame vector false', () => {
		sandbox = vector.isSame(vector2);
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
			vector2 = new Vector([1, 2], [2, 4]);
		}
	});

	benchmark('invert', () => {
		vector.invert();
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
		}
	});

	benchmark('toString', () => {
		sandbox = vector.toString();
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
		}
	});

	benchmark('start get', () => {
		sandbox = vector.start();
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
		}
	});

	benchmark('start set', () => {
		vector.start(point);
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
			point = new Point(4, 5);
		}
	});

	benchmark('end get', () => {
		sandbox = vector.end();
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
		}
	});

	benchmark('end set', () => {
		vector.end(point);
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
			point = new Point(4, 5);
		}
	});

	benchmark('length get', () => {
		sandbox = vector.length();
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
		}
	});

	benchmark('length get second', () => {
		sandbox = vector.length();
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
			sandbox = vector.length();
		}
	});

	benchmark('length set', () => {
		vector.length(20);
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
		}
	});

	benchmark('angle get', () => {
		sandbox = vector.angle();
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
		}
	});

	benchmark('angle get second', () => {
		sandbox = vector.angle();
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
			sandbox = vector.angle();
		}
	});

	benchmark('angle set', () => {
		vector.angle(2);
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
		}
	});

	benchmark('offset get', () => {
		sandbox = vector.offset();
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
		}
	});

	benchmark('offset set', () => {
		vector.offset(point);
	}, {
		...benchSettings,
		onStart() {
			vector = new Vector([1, 2], [2, 3]);
			point = new Point(2, 2);
		}
	});

});
