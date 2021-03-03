import "./styles.css";
import React from "react";

import {
  ArrowFuncComponent,
  FuncComponent,
  ClassComponent,
  AnotherClassComponent,
  YetAnotherClassComponent
} from "./components";

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
