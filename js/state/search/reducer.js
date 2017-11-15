import State from './state'; 

const searchReducer =
    (state=State, action) => {
  
        switch(action.type){
            case 'MAKE_SEARCH':
            return state
            break;
        }
        
        return state;    
    }

export default peopleReducer; 