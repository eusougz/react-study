import { useEffect, useState } from 'react';

function useFetchGet(apiUrl) {
    
    const [state, setState] = useState({
        loading: false,
        data: null,
        error: false
    });

    useEffect(() => {

        setState({
            loading: true,
            data: null,
            error: false
        });

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw Error();
                }
                return response.json();
            })
            .then(data => setState({
                loading: false,
                data,
                error: false
            }), () => setState({
                loading: false,
                data: null,
                error: true
            }));
    }, [apiUrl]);

    return state;
}

export { useFetchGet }