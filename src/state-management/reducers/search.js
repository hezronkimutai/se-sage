import {
    SEARCH,
    SEARCH_FAIL,
    SEARCH_SUCCESS,
} from '../constants/search';
const results = [{
    package: {
        name: "axios",
        scope: "unscoped",
        version: "0.21.1",
        description: "Promise based HTTP client for the browser and node.js",
        keywords: [
            "xhr",
            "http",
            "ajax",
            "promise",
            "node"
        ],
        date: "2020-12-22T04:20:06.101Z",
        links: {
            npm: "https://www.npmjs.com/package/axios",
            homepage: "https://github.com/axios/axios",
            repository: "https://github.com/axios/axios",
            bugs: "https://github.com/axios/axios/issues"
        },
        author: {
            name: "Matt Zabriskie"
        },
        publisher: {
            username: "emilyemorehouse",
            email: "emilyemorehouse@gmail.com"
        },
        maintainers: [
            {
                username: "emilyemorehouse",
                email: "emilyemorehouse@gmail.com"
            },
            {
                username: "mzabriskie",
                email: "mzabriskie@gmail.com"
            },
            {
                username: "nickuraltsev",
                email: "nick.uraltsev@gmail.com"
            }
        ]
    },
    flags: {
        unstable: true
    },
    score: {
        final: 0.795472802990692,
        detail: {
            quality: 0.8995730038310638,
            popularity: 0.9560420638547701,
            maintenance: 0.5456747985491525
        }
    },
    searchScore: 100000.82
},]
const initialState = {
    isLoading: false,
    results,
    error: '',
};

function searchReducer(state = initialState, action = {}) {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                isLoading: true,
            };
        case SEARCH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                results: action.results,
            };
        case SEARCH_FAIL:
            return {
                ...state,
                error: action.error,
                isLoading: false,
            };
        default:
            return state;
    }
}

export default searchReducer;
