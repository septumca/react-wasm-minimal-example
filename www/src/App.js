import React from "react";
import * as wasm from "wasm-gol";

export const App = () => {
  return <div>Text {wasm.get_greet_str()}</div>;
}
