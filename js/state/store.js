import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

// import promise from './promise';

// reducers
import peopleReducer from './people/reducer.js';
import searchReducer from './search/reducer.js';

export default function configureStore(onCompletion:()=>void):any {
  const enhancer = compose(
    applyMiddleware(createSagaMiddleware()),
    devTools({
      name: 'nativestarterkit', realtime: true,
    }),
  );

  const reducer = combineReducers({
    people: peopleReducer,
    search: searchReducer
  })

  const store = createStore(reducer, enhancer);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}
