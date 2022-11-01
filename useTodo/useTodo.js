import { useCallback, useEffect, useReducer } from "react";

import { todoReducer } from './todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    const totalTodo = todos.length;
    const pendingTodo = todos.filter(todo => todo.done === false).length;

    const onNewTodo = (todo) => {
        dispatch({ type: '[TODO] Add Todo', payload: todo });
    }

    const onDeleteTodo = (id) => {
        dispatch({ type: '[TODO] Delete Todo', payload: { id } });
    }

    const onToggleTodo = (id) => {
        dispatch({ type: '[TODO] Toggle Todo', payload: { id } });
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return { todos, onNewTodo, onDeleteTodo, onToggleTodo, totalTodo, pendingTodo };
}
