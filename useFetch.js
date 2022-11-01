import { useEffect, useState } from "react";

import fetch from 'isomorphic-fetch';

export const useFetch = (url) => {
    const initialValues = { data: null, isLoading: true, hasError: null };
    const [state, setState] = useState(initialValues)

    const getFetch = async () => {
        setState({ ...state, isLoading: true });

        const req = await fetch(url);
        const data = await req.json();

        setState({ ...state, data, isLoading: false });
    }

    useEffect(() => {
        getFetch();
    }, [url])

    return { data: state.data, isLoading: state.isLoading, hasError: state.hasError };
}
