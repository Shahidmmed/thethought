import { AuthReducer } from "./auth_reducer";
import { PostsReducer } from "./posts_reducer";
import { PlainReducer } from "./plain_reducer";
import { FormReducer } from "./form_reducer";
import combineReducers from "redux";

const rootReducer = combineReducers({
  plainReducer: PlainReducer,
  authReducer: AuthReducer,
  postsReducer: PostsReducer,
});
