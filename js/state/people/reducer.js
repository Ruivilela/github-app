import State from './state'; 

const peopleReducer =
    (state=State, action) => {

        let newState; 
  
        switch(action.type){
            case 'GET_PEOPLE':
                return state
                break;
        }
        
        return state;    
    }

export default peopleReducer; 