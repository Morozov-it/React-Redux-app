
//исходный state
const defaultState = {
    items: [],
    isFetching: true,
}

//чистая функция редюсера, принимает аргументом state и action, и возвращает новый state
export default function reposReducer(state = defaultState, action) {
    switch (action.type) {
        
        default:
            return state
        
    }
}