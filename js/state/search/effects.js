import { put, takeEvery, all } from 'redux-saga/effects';
import { search_query } from './../../api/queries/search';
import query from './../../api/requests/query';

import { MAKE_SEARCH } from './actions'; 

export default function* searchEffects(){
    yield all([
      watchMakeSearch()
    ])
}

function* make_github_search(data){
    try {
        const request = yield query(
            search_query(data.payload)
        )

        yield put(
            MAKE_SEARCH({
                search_done: true,           
                search_result: request
            })
        )
    } catch (e) {
        console.info(e)
    }
}

function* watchMakeSearch(){
    yield takeEvery('MAKE_SEARCH_ASYNC', make_github_search )
  }