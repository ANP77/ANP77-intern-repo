import {createElement, useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return createElement(
        'div',
        null,
        createElement('h1', null, `Count: ${count}`),
        createElement(
            'button',
            {onClick: () => setCount(count + 1)},
            'Increment'
        )
    )
}   

export default Counter;