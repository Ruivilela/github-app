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
    const request = yield query(
        search_query(data.payload)
    )

    let result = yield request.items.map( (item) => {
        return {
            owner:{
                name: item.owner.login,
                url: item.owner.htm_url
            },
            repo:{
                id: item.id,
                name: item.full_name
            }
        }
    })

    yield put(
        MAKE_SEARCH({
            search_done: true,           
            search_result: result
        })
    )
}

function* watchMakeSearch(){
    yield takeEvery('MAKE_SEARCH_ASYNC', make_github_search)
  }