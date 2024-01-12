import { TYPES } from "../actions/dataActions";

export const dataInitialState = {
    user: {
        avatar_url: "https://avatars.githubusercontent.com/u/12100315?v=4",
        login: "notFound",
        created_at: null,
        name: "Not Found",
        public_repos: "0",
        followers: "0",
        following: "0",
        location: null,
        blog: "",
        twitter_username: null,
        company: null
    },
    url: "https://api.github.com/users/fruizotero",
    error: {err:false},
};

export function dataReducer(state, action) {
    let { type, payload } = action;
    switch (type) {
        case TYPES.GET_DATA: {
            return {
                ...state,
                user: { ...payload }

            }
        }

        case TYPES.GET_ERROR: {
            return {
                ...state,
                error: { ...payload }
            }
        }
            
        case TYPES.SET_URL: {
            return {
                ...state,
                url: `https://api.github.com/users/${payload.name}`
            }
            }


        // eslint-disable-next-line no-fallthrough
        default:
            return state;

    }
}