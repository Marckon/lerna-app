import React from 'react';
import ReactDOM from 'react-dom';

interface HeaderProps {
  text: string;
}

export default (props: HeaderProps) => {
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};
