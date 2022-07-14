import "./App.css";

import { hello } from './pkg'

function App() {
  return (
    <div className="App">
      <button
        onClick={async () => {
          const res = await hello();
          console.log("wasm said: " + res);
        }}
      >
        {"hello wasm"}
      </button>
    </div>
  );
}

export default App;
