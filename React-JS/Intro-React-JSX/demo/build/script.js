var containerElement = document.getElementById('root');

var reactRoot = ReactDOM.createRoot(containerElement);

var reactElement = React.createElement('header', { className: 'site-header' }, React.createElement('h1', {}, 'Hello React !'), React.createElement('h3', { id: 'firstId' }, 'This is my first React code :)'));

var reactJSXElement = React.createElement(
    'header',
    { className: 'site-header' },
    React.createElement(
        'h1',
        null,
        'What a JSX !!! '
    ),
    React.createElement(
        'h2',
        { id: 'anId' },
        'React slogan ...'
    )
);

reactRoot.render(reactJSXElement);