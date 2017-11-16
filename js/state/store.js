import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

// import promise from './promise';

// reducers
import searchReducer from './search/reducer.js';

// effects 
import searchEffects from './search/effects';

export default function configureStore(){

  function* rootEffects(){
      yield all([
        searchEffects()
      ])
  }
    
  const sagaMiddleware = createSagaMiddleware();

  const enhancer = compose(
    applyMiddleware(sagaMiddleware),
    devTools({
      name: 'nativestarterkit', realtime: true,
    }),
  );

  const reducer = combineReducers({
    search: searchReducer
  })

  const store = createStore(reducer, enhancer);
  persistStore(store, { storage: AsyncStorage });

  sagaMiddleware.run(rootEffects)

  return store;
}
