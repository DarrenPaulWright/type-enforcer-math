declare const _default: {
    point: {
        (value: any, alt: any, coerce: any): any;
        extend: (check: import("type-enforcer/types/src/enforcer/enforceObject.js").checkFunction, doCoercion: import("type-enforcer/types/src/enforcer/enforceObject.js").coerceFunction) => any;
    };
    vector: {
        (value: any, alt: any, coerce: any): any;
        extend: (check: import("type-enforcer/types/src/enforcer/enforceObject.js").checkFunction, doCoercion: import("type-enforcer/types/src/enforcer/enforceObject.js").coerceFunction) => any;
    };
    array: {
        (value: any, alt: any, coerce: any): any;
        extend: (check: import("type-enforcer/types/src/enforcer/enforceObject.js").checkFunction, doCoercion: import("type-enforcer/types/src/enforcer/enforceObject.js").coerceFunction) => any;
    };
    boolean: {
        (value: any, alt: any, coerce: any): any;
        extend: (check: import("type-enforcer/types/src/enforcer/enforceObject.js").checkFunction, doCoercion: import("type-enforcer/types/src/enforcer/enforceObject.js").coerceFunction) => any;
    };
    date: {
        (value: any, alt: any, coerce: any): any;
        extend: (check: import("type-enforcer/types/src/enforcer/enforceObject.js").checkFunction, doCoercion: import("type-enforcer/types/src/enforcer/enforceObject.js").coerceFunction) => any;
    };
    enum: typeof enforce.enum;
    float: {
        (value: any, alt: any, coerce: any, minValue?: number, maxValue?: number): any;
        extend(extendedCheck: any, extendedDoCoercion: any): any;
    };
    function: typeof enforce.function;
    instanceOf: typeof enforce.instanceOf;
    integer: {
        (value: any, alt: any, coerce: any, minValue?: number, maxValue?: number): any;
        extend(extendedCheck: any, extendedDoCoercion: any): any;
    };
    map: {
        (value: any, alt: any, coerce: any): any;
        extend: (check: import("type-enforcer/types/src/enforcer/enforceObject.js").checkFunction, doCoercion: import("type-enforcer/types/src/enforcer/enforceObject.js").coerceFunction) => any;
    };
    number: typeof enforce.number;
    object: typeof enforce.object;
    promise: {
        (value: any, alt: any, coerce: any): any;
        extend: (check: import("type-enforcer/types/src/enforcer/enforceObject.js").checkFunction, doCoercion: import("type-enforcer/types/src/enforcer/enforceObject.js").coerceFunction) => any;
    };
    regExp: {
        (value: any, alt: any, coerce: any): any;
        extend: (check: import("type-enforcer/types/src/enforcer/enforceObject.js").checkFunction, doCoercion: import("type-enforcer/types/src/enforcer/enforceObject.js").coerceFunction) => any;
    };
    set: {
        (value: any, alt: any, coerce: any): any;
        extend: (check: import("type-enforcer/types/src/enforcer/enforceObject.js").checkFunction, doCoercion: import("type-enforcer/types/src/enforcer/enforceObject.js").coerceFunction) => any;
    };
    string: {
        (value: any, alt: any, coerce: any): any;
        extend: (check: import("type-enforcer/types/src/enforcer/enforceObject.js").checkFunction, doCoercion: import("type-enforcer/types/src/enforcer/enforceObject.js").coerceFunction) => any;
    };
    symbol: {
        (value: any, alt: any, coerce: any): any;
        extend: (check: import("type-enforcer/types/src/enforcer/enforceObject.js").checkFunction, doCoercion: import("type-enforcer/types/src/enforcer/enforceObject.js").coerceFunction) => any;
    };
    weakMap: {
        (value: any, alt: any, coerce: any): any;
        extend: (check: import("type-enforcer/types/src/enforcer/enforceObject.js").checkFunction, doCoercion: import("type-enforcer/types/src/enforcer/enforceObject.js").coerceFunction) => any;
    };
    weakSet: {
        (value: any, alt: any, coerce: any): any;
        extend: (check: import("type-enforcer/types/src/enforcer/enforceObject.js").checkFunction, doCoercion: import("type-enforcer/types/src/enforcer/enforceObject.js").coerceFunction) => any;
    };
};
export default _default;
import { enforce } from 'type-enforcer';
