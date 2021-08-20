import { SEARCH, SEARCH_FAIL, SEARCH_SUCCESS } from '../constants/search';
import axios from 'axios';

const handleSearchRequest = async (searchQuery) => {
    const response = await axios.get(`https://api.npms.io/v2/search?q=${searchQuery}`);
    return response?.data;
}

export function search(searchTerm) {
    return {
        type: SEARCH,
        searchTerm
    };
}

export function searchSuccess(results) {

    // THUNK


    // return async (dispatch) => {
    //     let data = await handleSearchRequest(results);
    //     data = data?.results;
    //     console.log({ data });

    //     return dispatch({
    //         type: SEARCH_SUCCESS,
    //         results: data,
    //     })
    // };


    // SAGA

    return {
        type: SEARCH_SUCCESS,
        results: results,
    };
}

export function searchFail(error) {
    return {
        type: SEARCH_FAIL,
        error,
    };
}
