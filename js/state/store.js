import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
// import promise from './promise';

// reducers
import peopleReducer from './people/reducer'

export default function configureStore(onCompletion:()=>void):any {
  const enhancer = compose(
    // applyMiddleware(thunk, promise),
    devTools({
      name: 'nativestarterkit', realtime: true,
    }),
  );

  const reducer = combineReducers({
    people: peopleReducer
  })

  const store = createStore(reducer, enhancer);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}
