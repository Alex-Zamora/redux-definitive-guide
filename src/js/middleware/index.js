import { ADD_ARTICLE } from "../constants/action-types";

const forbiddenWords = ["spam", "money"];

export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
      return function(action) {
        if (action.type === ADD_ARTICLE) {

          console.log("middleware ", action);
          const foundWord = forbiddenWords.filter(word =>
            action.payload.title.includes(word)
          );
          console.log("foundWord ", foundWord);
          if (foundWord.length) {
            return dispatch({ type: "FOUND_BAD_WORD" });
          }

        }
        console.log("Next action");
        return next(action);
      };
    };
}