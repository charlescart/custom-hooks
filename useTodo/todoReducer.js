export const todoReducer = (initialState, action) => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]
            break;

        case '[TODO] Delete Todo':
            return initialState.filter(({ id }) => id !== action.payload.id);
            break;

        case '[TODO] Toggle Todo':
            return initialState.map((todo) => {
                if (todo.id === action.payload.id) return { ...todo, done: !todo.done };

                return todo;
            });
            break;

        default:
            return initialState
            break;
    }

}