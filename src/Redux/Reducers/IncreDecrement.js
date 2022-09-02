const initialState={
    count:2
}
export const IncreDecrement=(state=initialState,action)=>{
    switch(action.type){
        case 'INCREMENT': return {
            ...state,
           count: state.count-1,
        }
        case 'DECREMENT': return {
            ...state,
           count: state.count+1,
        }
        
        default: return {...initialState}
    }

}