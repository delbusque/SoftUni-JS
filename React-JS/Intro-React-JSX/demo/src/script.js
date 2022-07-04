const containerElement = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(containerElement);

const reactElement = React.createElement('header', { className: 'site-header' },
    React.createElement('h1', {}, 'Hello React !'),
    React.createElement('h3', { id: 'firstId' }, 'This is my first React code :)'));


const reactJSXElement = <header className='site-header'>
    <h1>What a JSX !!! </h1>
    <h2 id='anId'>React slogan ...</h2>
</header>

reactRoot.render(reactJSXElement);

