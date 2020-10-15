const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    const newState = {
        ...state
    }
    switch (action.type) {
        case 'INC_NUM':
            newState.count++
            break;
        case 'DEC_NUM':
            newState.count--
            break;
        default:
            break;
    }
    return newState;
}

export default reducer;