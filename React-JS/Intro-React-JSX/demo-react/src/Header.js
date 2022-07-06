import logo from './logo.svg';


export const Header = (props) => {
    return (<header className="App-header">
        <div>{props.text}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
    </header>);
};