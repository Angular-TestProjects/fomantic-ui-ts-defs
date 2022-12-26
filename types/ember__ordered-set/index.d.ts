// Type definitions for @ember/ordered-set 4.0
// Project: https://github.com/emberjs/ember-ordered-set
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
//                 Peter Wagenet <https://github.com/wagenet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

/**
 * The `OrderedSet` class lets you store unique values of any type, whether
 * primitive values or object references. It is mostly similar to the native
 * `Set` class introduced in ES2015.
 */
export default class OrderedSet<T = unknown> {
    constructor();

    // Disable this to let users call like `OrderedSet.create<string>();`. This
    // is a rare case where it's preferable, because it's *much* briefer than
    // `let set: OrderedSet<string> = OrderedSet.create();`. If TS could infer
    // from usage what the type would be, this wouldn't be required, but until
    // it does, this is better than *not* allowing it.
    // tslint:disable-next-line:no-unnecessary-generics
    static create<T = unknown>(): OrderedSet<T>;

    add(value: T): this;
    clear(): void;
    delete(value: T): boolean;
    forEach(callbackfn: (this: undefined, value: T, value2: T, set: OrderedSet<T>) => void): void;
    forEach<Ctx>(callbackfn: (this: Ctx, value: T, value2: T, set: OrderedSet<T>) => void, context: Ctx): void;
    has(value: T): boolean;
    isEmpty(): boolean;
    toArray(): T[];
    copy(): OrderedSet<T>;
}
