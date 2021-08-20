import { call, put, takeLatest } from 'redux-saga/effects';
import { SEARCH } from '../constants/search';
import { searchFail, searchSuccess } from '../actions/search';
import axios from 'axios';

const handleSearchRequest = async (searchQuery) => {
    const response = await axios.get(`https://api.npms.io/v2/search?q=${searchQuery}`);
    return response?.data;
}

function* search(action) {
    try {
        const search = yield call(handleSearchRequest, action.searchTerm);
        console.log(search?.results);
        yield put(searchSuccess(search?.results));
    } catch (e) {
        yield put(searchFail({ message: e.message || 'unauthorized', code: e.status }));
    }
}

function* searchSaga() {
    yield takeLatest(SEARCH, search);
}

export default searchSaga;
