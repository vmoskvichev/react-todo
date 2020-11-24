import React, { useState, useEffect } from 'react';

function useAPI(cb, options = {}) {
    const [state, setState] = useState({
        isError: false,
        error: {},
        data: '',
    });

    const [isLoading, setIsLoading] = useState(false);

    const refetch = () => {
        setIsLoading(true);
        cb()
            .then((data) => {
                setIsLoading(false);

                setState({ ...state, isError: false, error: {}, data });

                if (options.afterRequset) {
                    options.afterRequset({ isError: false, error: {}, data });
                }
            })
            .catch((error) => {
                setIsLoading(false);

                setState({ ...state, isError: true, error, data: '' });

                if (options.afterRequset) {
                    options.afterRequset({ isError: true, error, data: '' });
                }
            });
    };

    useEffect(() => {
        if (options.isMountRequest) {
            refetch();
        }
    }, [options]);

    return { refetch, ...state, isLoading };
}

export { useAPI };
