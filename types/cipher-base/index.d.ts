// Type definitions for cipher-base 1.0
// Project: https://github.com/crypto-browserify/cipher-base
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare abstract class CipherBase {
    constructor(hashMode?: string);
    abstract final(): Buffer;
    abstract update(value: Buffer, inputEnc?: string, outputEnc?: string): Buffer;
}

export = CipherBase;
