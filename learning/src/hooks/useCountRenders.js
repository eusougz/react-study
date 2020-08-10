import {useRef} from 'react';

export const useCountRenders = () => {
    const render = useRef(0);

    console.log('Render ', render.current++);
}
