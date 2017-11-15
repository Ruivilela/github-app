import State from './state'; 

const peopleReducer =
    (state=State, action) => {

        let newState; 
  
        switch(action.type){
            case 'GET_PEOPLE':
                return state
                break;

            case 'UPDATE_SEARCH_TERM':
                newState = Object.assign(...state, action.payload)
                return newState
                break;
        }
        
        return state;    
    }

export default peopleReducer; 