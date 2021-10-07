import axios from 'axios';
import { FETCH_ADVENTURESTART, saveAdventureStart } from '../actions/adventureStart'

const adventureStartMiddleware = (store) => (next) => (action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case FETCH_ADVENTURESTART :
            axios.get('http://127.0.0.1:8000/adventure/start')
            .then((response) => {
                store.dispatch(saveAdventureStart(response.data));
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

export default adventureStartMiddleware;