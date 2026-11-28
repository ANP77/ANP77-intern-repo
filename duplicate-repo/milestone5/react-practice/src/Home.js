import { createElement } from 'react';

function Home() {
    return createElement(
        'div',
        { className: 'text-center' },
        createElement(
            'h1', 
            { className: 'text-4xl text-orange-600' },
            'Home Page'
        ),
        createElement(
            'p', 
            { className: 'text-2xl mt-2' },
            'Welcome to Focus Bear!'
        )
    );
}

export default Home;