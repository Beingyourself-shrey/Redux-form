const initialState={
    money:0
}
export const Bank=(state=initialState,action)=>{
    switch(action.type){
        case 'BORROW': return {
            ...state,
           money: state.money-action.PAYLOAD,
        }
        case 'DEPOSIT': return {
            ...state,
           money: state.money+action.PAYLOAD,
        }
        
        default: return {...initialState}
    }

}
