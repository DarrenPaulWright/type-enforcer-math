declare function _default(value: unknown): value is Point;
declare function _default(value: unknown, coerce: boolean): boolean;
declare namespace _default {
    export { customTypeCheck as extend };
}
export default _default;
declare function customTypeCheck(Type: any): {
    (value: any, coerce: any): any;
    extend: (Type: any) => any;
};
import Point from '../Point.js';
