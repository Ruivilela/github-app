import State from './state'; 

const searchReducer =
    (state=State, action) => {
  
        switch(action.type){
            case 'MAKE_SEARCH':
                newState = Object.assign({}, state, action.payload)
                return newState
                break;
            case 'UPDATE_SEARCH_TERM':
                newState = Object.assign({} , state, action.payload)
                return newState
                break;
            case 'RESET_SEARCH_STATE':
                return state
                break; 
        }
        
        return state;    
    }

export default searchReducer; 