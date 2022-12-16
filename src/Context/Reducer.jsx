export const Reducer = (state, action) => {

    switch (action.type) {
        case "SET_MOVIES":
            return {
                ...state,
                data: { ...state.data, data: [...action.payload] }
            }
        case "SET_SEARCH":
            return {
                ...state, data: { ...state.data, data: [...state.data.data, ...action.payload] }, search: [...action.payload]
            }
        case "MCU":
            return {
                ...state,
                data: { ...state.data, mcu: [...action.payload] }
            }
        case "POPULAR":
            return {
                ...state,
                data: { ...state.data, popular: [...action.payload] }
            }
        case "RECENTLY_VIEWED":
            return { ...state, recent: [...state.recent, action.payload] }


        default:
            break;
    }

}