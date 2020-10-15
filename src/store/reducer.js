const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    }
    switch (action.type) {
        case 'INC_NUM':
            return{
                ...state,
                count : state.count + action.val
            }
        case 'DEC_NUM':
            return{
                ...state,
                count : state.count - action.val
            }
        default:
            return newState;
    }
}

export default reducer;