import {
    Tracer,
    BatchRecorder,
    jsonEncoder,
} from 'zipkin';

import CLSContext = require('zipkin-context-cls');

const ctxImpl = new CLSContext('zipkin');
const ctxImplAsyncAwait = new CLSContext('zipkin', true);
