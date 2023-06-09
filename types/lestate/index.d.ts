// Type definitions for LeState 0.1
// Project: https://github.com/LeTools/LeState
// Definitions by: DefinitelyTyped <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface LeState {
    set(newValue: {}): [{
        id: number;
        state: {};
    }];
    get(): any;
    insert(newValue: {}): void;
    getDescription(): {};
    createListener(options: {
        id: number;
        selector(state: any): {};
        force?: boolean | undefined;
    }): void;
}

export function createState(props?: { initialState: {} }): LeState;
