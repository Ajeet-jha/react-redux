const initialState = {
    count: 0,
    history : []
}

const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    }
    switch (action.type) {
        case 'INC_NUM':
            return{
                ...state,
                count : state.count + action.val,
                history : state.history.concat({id:Math.random()*100, count:state.count + action.val})
            }
        case 'DEC_NUM':
            return{
                ...state,
                count : state.count - action.val,
                history : state.history.concat({id:Math.random()*100, count:state.count - action.val})
            }
            case 'DEL_NUM':
                // debugger;
                return{
                    ...state,
                    history : state.history.filter(el => el.id != action.val)
                }
        default:
            return newState;
    }
}

export default reducer;