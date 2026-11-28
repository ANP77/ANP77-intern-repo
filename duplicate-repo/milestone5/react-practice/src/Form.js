import { createElement, useState } from 'react';

function ListForm() {
    const [text, setText] = useState('');
    const [items, setItems] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();

        if (text.trim() === '') return;

        setItems([...items, { id: crypto.randomUUID(), text: text }]);
        setText('');
    }

    return createElement(
        'div',
        null,
        createElement(
            'form',
            { onSubmit: handleSubmit, className: 'flex gap-2' },
            createElement('input', {
                type: 'text',
                value: text,
                placeholder: 'Enter text',
                onChange: (e) => setText(e.target.value),
                className: 'border border-gray-500 rounded-lg px-2 py-1',
            }),
            createElement(
                'button',
                { type: 'submit', className: 'bg-orange-500 text-white px-4 py-2 rounded-lg' },
                'Add'
            )
        ),
        createElement(
            'ul',
            { className: 'list-disc mt-2 pl-6' },
            items.map((item) =>
                createElement('li', { key: item.id }, item.text)
            )
        )
    );
}

export default ListForm;