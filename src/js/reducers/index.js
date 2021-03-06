import { ADD_ARTICLE, FOUND_BAD_WORD } from "../constants/action-types";

const initialState = {
    articles: [],
    errorMessage: "",
    remoteArticles: []
};

function rootReducer(state = initialState, action) {
    console.log("REDUCER ", action);
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    } else if (action.type === FOUND_BAD_WORD) {
        return { ...state, errorMessage: "you cant add this word" }
    } else if (action.type === "DATA_LOADED") {
        return { ...state, remoteArticles: action.payload }
    }
    return state;
}

export default rootReducer;