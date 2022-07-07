import "./App.css";

const wasmPromise = import("wasm");

function App() {
  return (
    <div className="App">
      <button
        onClick={async () => {
          const { hello } = await wasmPromise;
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
