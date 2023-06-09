// Type definitions for consumable-stream 2.0
// Project: https://github.com/SocketCluster/consumable-stream
// Definitions by: Daniel Rose <https://github.com/DanielRose>
//                 Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare abstract class ConsumableStream<T> implements AsyncIterator<T>, AsyncIterable<T> {
    next(timeout?: number): Promise<IteratorResult<T>>;
    once(timeout?: number): Promise<T>;
    abstract createConsumer(timeout?: number): ConsumableStream.Consumer<T>;
    [Symbol.asyncIterator](): AsyncIterator<T>;
}

export = ConsumableStream;

declare namespace ConsumableStream {
    interface Consumer<T> {
        next(): Promise<IteratorResult<T>>;
        return(): void;
    }
}
