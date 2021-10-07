import { createStore, applyMiddleware } from 'redux';

import { composeWithDevTools} from 'redux-devtools-extension';

import monsterTypeMiddleware from '../middlewares/monsterTypeMiddleware';


import reducer from '../reducers';

const enhancers = composeWithDevTools(
    applyMiddleware(
        monsterTypeMiddleware,
    )
);

const store = createStore(
    reducer,
    enhancers,
);

export default store;