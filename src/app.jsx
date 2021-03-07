import '../styles/styles.scss';
import React from 'react';

import ArrowFuncComponent from './components/arrowComponent.jsx';
import FuncComponent from './components/funcComponent.jsx';
import ClassComponent from './components/classComponent.jsx';
import AnotherClassComponent from './components/anotherClassComponent.jsx';
import YetAnotherClassComponent from './components/yetAnotherClassComponent.jsx';

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
