// Type definitions for jest-matcher-one-of 1.0
// Project: https://github.com/d4nyll/jest-matcher-one-of#readme
// Definitions by: Joe Mitchard <https://github.com/joemitchard>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.3

/// <reference types="jest" />
declare namespace jest {
    interface Matchers<R, T> {
        toBeOneOf(expected: any[]): R;
    }
}
