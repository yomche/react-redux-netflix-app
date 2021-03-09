import '../styles/styles.scss';
import React from 'react';

import ArrowFuncComponent from './components/arrowComponent';
import FuncComponent from './components/funcComponent';
import ClassComponent from './components/classComponent';
import AnotherClassComponent from './components/anotherClassComponent';
import YetAnotherClassComponent from './components/yetAnotherClassComponent';

export default function App() {
  return (
    <div className="App">
      <ArrowFuncComponent />
      <FuncComponent name="React" />
      <ClassComponent />
      <AnotherClassComponent />
      <YetAnotherClassComponent />
    </div>
  );
}
