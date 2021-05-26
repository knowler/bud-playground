import ReactDOM from 'react-dom';

const App = () => (
  <main id="content" tabIndex="-1">
    <h1 sx={{color: 'blue'}}>Hello, World!</h1>
  </main>
);

ReactDOM.render(<App />, document.getElementById('app'));
