const SET_COUNT = 'SET_COUNT';

//исходный state
const defaultState = {
    items: [],
    isFetching: true,
    count: 0
}

//чистая функция редюсера, принимает аргументом state и action, и возвращает новый state
export default function reposReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_COUNT:
            return {
                ...state,
                count: state.count + action.payload
            }
        default:
            return state
        
    }
}

//action creator
export const setCount = (count) => ({
    type: SET_COUNT,
    payload: count
})