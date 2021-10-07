import { combineReducers } from "redux";

import monsterTypeReducer from "./monsterType";

const rootReducer = combineReducers({
    monsterType: monsterTypeReducer,
});

export default rootReducer;
