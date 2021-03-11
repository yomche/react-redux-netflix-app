import '../styles/styles.scss';
import React from 'react';

import ArrowFuncComponent from './components/arrow-component';
import FuncComponent from './components/func-component';
import ClassComponent from './components/class-component';
import AnotherClassComponent from './components/another-class-component';
import YetAnotherClassComponent from './components/yet-another-class-component';

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
