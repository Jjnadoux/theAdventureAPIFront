import { SAVE_MONSTERTYPE } from "../actions/monsterType";

const initialState = {
    monsterType: [],
    loading: true,
};

const monsterType = (state = initialState, action = {}) => {
    // eslint-disable-next-line default-case
    switch (action.type){
        case SAVE_MONSTERTYPE:
            return {
                ...state,
                monsterType: action.newMonsterType,
                loading: false,
            };
        default:
            return state;
    }
};

export default monsterType;