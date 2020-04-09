import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../../Header/src/index';

const App = () => {
  return (
    <div>
      <Header text="App's Header"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
