const InitialStates={
    inputField:'',
    }
    

    export default (state=InitialStates,action)=>{
    
    switch(action.type){

        case 'formHandler':  
        // console.log(action.payload.key)
        return  {...state, [action.payload.key]: action.payload.value}

        default:
            return state;
    }

    
    
    }