import "./App.css";
import Board from "./components/Board";
import "./index.css";

function App() {
  return (
    <div className="py-10 space-y-10 mx-4 lg:mx-10">
      <h1 className="text-center text-3xl font-semibold">React DND, halo</h1>
      <Board />
    </div>
  );
}

export default App;
