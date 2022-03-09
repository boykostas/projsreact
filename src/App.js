import React from 'react';
import Content from './Content';

function App() {
  let project = 'React';
  return (
    <div className="App">
      <h1> Привет МИР!</h1>
      <p>Изучаем React!!!</p>
      <p>Добавляет тег для git'a</p>
      <img alt='image' src={'https://thumbs.dreamstime.com/b/%D0%B8-%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BC%D0%BE-%D0%BE%D1%82%D0%BA%D0%B0-%D0%B8-%D0%BA-%D1%8E%D1%87%D0%B0-31715778.jpg'} ></img>
      <Content text={project}/>
    </div>
  );
}

export default App;
