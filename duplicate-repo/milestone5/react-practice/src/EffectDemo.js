import { createElement, useState, useEffect } from 'react';

function EffectDemo() {
    const [data, setData] = useState(null);
    const [error, setError] = useState('');

    // useEffect to log messages when the component mounts and unmounts
    useEffect(() => {
        console.log('Component mounted');

        // Cleanup function to log when the component unmounts
        return () => {
            console.log('Component unmounted');
        };
    }, []);

    // Function to fetch data from the API
    async function fetchData() {
        try {
            setError('');

            const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');

            if (!response.ok) {
                throw new Error('Failed to fetch data. Please try again later.');
            }

            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
        }
    }

    // Render the component
    return createElement(
        'div',
        { className: 'text-xl text-center max-w-lg' },
        createElement(
            'button',
            {
                onClick: fetchData,
                className: 'bg-orange-500 text-white px-4 py-2 rounded-lg',
            },
            'Fetch Data'
        ),
        data && createElement(
            'div',
            { className: 'mt-4' },
            createElement('h2', { className: 'font-bold' }, data.title),
            createElement('p', null, data.body)
        ),
        error && createElement(
            'p',
            { className: 'mt-4 text-red-500' },
            error
        )
    );
}

export default EffectDemo;