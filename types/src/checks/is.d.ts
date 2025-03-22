declare const _default: {
    point: {
        (value: unknown): value is Point;
        (value: unknown, coerce?: boolean): boolean;
        extend: (Type: any) => any;
    };
    vector: {
        (value: unknown): value is Vector;
        (value: unknown, coerce: boolean): boolean;
        extend: (Type: any) => any;
    };
    array: typeof is.array;
    boolean: typeof is.boolean;
    date: typeof is.date;
    float: typeof is.float;
    function: typeof is.function;
    instanceOf: typeof is.instanceOf;
    integer: typeof is.integer;
    json: typeof is.json;
    map: typeof is.map;
    number: typeof is.number;
    object: typeof is.object;
    promise: typeof is.promise;
    regExp: typeof is.regExp;
    set: typeof is.set;
    string: typeof is.string;
    symbol: typeof is.symbol;
    weakMap: typeof is.weakMap;
    weakSet: typeof is.weakSet;
};
export default _default;
import { is } from 'type-enforcer';
import Point from '../Point.js';
import Vector from '../Vector.js';
