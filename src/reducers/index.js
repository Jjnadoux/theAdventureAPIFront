import { combineReducers } from "redux";

import monsterTypeReducer from "./monsterType";
import adventureStartReducer from "./adventureStart";

const rootReducer = combineReducers({
    monsterType: monsterTypeReducer,
    adventureStart: adventureStartReducer,

});

export default rootReducer;
