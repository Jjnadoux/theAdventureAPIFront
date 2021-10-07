import { SAVE_ADVENTURESTART } from "../actions/adventureStart";

const initialState = {
    monsterType: [],
    loading: true,
};

const adventureStart = (state = initialState, action = {}) => {
    // eslint-disable-next-line default-case
    switch (action.type){
        case SAVE_ADVENTURESTART:
            return {
                ...state,
                adventureStart: action.newAdventureStart,
                loading: false,
            };
        default:
            return state;
    }
};

export default adventureStart;