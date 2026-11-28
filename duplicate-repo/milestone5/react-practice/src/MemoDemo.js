import { createElement, useState, useMemo } from 'react';

// Function to simulate an expensive calculation
function expensiveCalculation(num) {
    console.log('Calculating...');

    let result = 0;

    for (let i = 0; i < num * 1000; i++) {
        result += i;
    }

    return result;
}

function MemoDemo() {
    const [size, setSize] = useState(1000);
    const [count, setCount] = useState(0);

    // Create an array of numbers based on the current size
    const numbers = Array.from({ length: size }, (_, i) => i + 1);

    // Use useMemo to memoize the result of the expensive calculation
    const total = useMemo(() => expensiveCalculation(size), [size]);

    return createElement(
        'div',
        { className: 'text-center m-25' },
        createElement('h2', { className: 'text-2xl font-bold' }, 'useMemo Demo'),
        createElement('div', null, `Calculated Total: ${total}`),
        createElement('div', null, `Test Count: ${count}`),
        // Trigger a re-render without changing the dependency
        createElement(
            'button',
            {
                onClick: () => setCount(count + 1),
                className: 'bg-orange-500 text-white px-4 py-2 rounded-lg m-2',
            },
            'Re-render Component'
        ),
        // Change the list size to trigger recalculation 
        createElement(
            'button',
            {
                onClick: () => setSize(size + 100),
                className: 'bg-orange-500 text-white px-4 py-2 rounded-lg m-2',
            },
            'Increase List by 100'
        ),
        createElement('p', null, `List size: ${size}`),
        // Display the list of numbers
        createElement(
            'ul',
            { className: 'list-disc list-inside h-20 overflow-y-auto border rounded-lg' },
            numbers.map((num) =>
                createElement('li', { key: num }, num)
            )
        )
    );
}

export default MemoDemo;