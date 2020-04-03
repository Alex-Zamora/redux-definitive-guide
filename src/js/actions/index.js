import { ADD_ARTICLE } from "../constants/action-types";

export function addArticleAction(payload) {
    console.log("ACTION ", payload);
    return { type: ADD_ARTICLE, payload }
};