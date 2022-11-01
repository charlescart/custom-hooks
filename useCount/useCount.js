import { useState } from "react"

export const useCount = (initialCount = 10) => {
    const [count, setCount] = useState(initialCount);

    const increment = (value = 1) => {
        setCount(c => c + value);
    }

    const decrement = (value = 1) => {
        if (count <= 0) return;
        setCount(c => c - value);
    };

    const reset = () => setCount(initialCount);

    return { count, increment, decrement, reset }
}