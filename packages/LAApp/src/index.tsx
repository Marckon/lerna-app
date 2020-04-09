import React from 'react';
import ReactDOM from 'react-dom';
import Header from 'la-header';

const App = () => {
  return (
    <div>
      <Header text="my Header"/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
