import React from 'react';

export const useEscapeKey = (cb) => {
    React.useEffect(() => {

    const checkKey = (e) => {
        if (e.key === 'Escape') {
            cb();
        }
    }

    window.addEventListener('keyup', checkKey);

    return () => {
        window.removeEventListener('keyup', checkKey)
    }
    }, [cb]);
}