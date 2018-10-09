import { createStore } from 'redux';
import reducers from './reducers';

export * from './actions'
export default createStore(
    reducers
)