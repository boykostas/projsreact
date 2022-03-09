import React from 'react';

const Content = ({ text }) => {
  return (
    <div>
        <ul>
            <li>Первый проект на {text}</li>
            <li>Первый урок</li>
        </ul>
    </div>
  );
}

export default Content;
