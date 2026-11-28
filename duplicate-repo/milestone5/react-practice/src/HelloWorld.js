import {createElement} from 'react';

function HelloWorld({name}) {
    return createElement('h1', null, `Hello, ${name}!`);
}   

export default HelloWorld;
