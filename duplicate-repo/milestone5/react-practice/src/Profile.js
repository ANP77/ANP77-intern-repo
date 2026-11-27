import { createElement } from 'react';

function Profile() {
    return createElement(
        'div',
        { className: 'text-center' },
        createElement(
            'h1', 
            { className: 'text-4xl text-orange-600' },
            'Profile Page'
        ),
        createElement(
            'p', 
            { className: 'text-2xl mt-2' },
            'Welcome to your Focus Profile!'
        )
    );
}

export default Profile;