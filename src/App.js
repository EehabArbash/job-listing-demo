import "./App.css";
import FiltersBar from "./components/FiltersBar";
import Jobs from "./components/Jobs";

function App() {
  return (
    <>
      <header className="header"></header>
      <main className="container">
        <FiltersBar></FiltersBar>
        <Jobs ></Jobs>
        
      </main>
    </>
  );
}

export default App;
