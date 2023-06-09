import { ComponentType } from 'react';
import { RelayProp, RelayPaginationProp, RelayRefetchProp } from 'react-relay';

/**
 * Returns original component class wrapped by e.g. createFragmentContainer
 */
declare function unwrapContainer<Props>(
    ComponentClass: ComponentType<Props | RelayProp | RelayPaginationProp | RelayRefetchProp>,
): ComponentType<Props>;

export = unwrapContainer;
