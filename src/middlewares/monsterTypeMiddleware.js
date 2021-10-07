import axios from 'axios';
import { FETCH_MONSTERTYPE, saveMonsterType } from '../actions/monsterType';

const monsterTypeMiddleware = (store) => (next) => (action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case FETCH_MONSTERTYPE :
            axios.get('http://127.0.0.1:8000/monsterType')
            .then((response) => {
                store.dispatch(saveMonsterType(response.data));
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)
            });
            next(action);
            break;

        default:
            next(action);
    }
};

export default monsterTypeMiddleware;