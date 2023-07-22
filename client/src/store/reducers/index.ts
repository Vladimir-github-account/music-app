import { combineReducers } from "redux";
import { playerReducer } from "@/store/reducers/playerReducer";
import { HYDRATE } from "next-redux-wrapper";

const rootReducer = combineReducers({
  player: playerReducer,
});

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count;
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>;
