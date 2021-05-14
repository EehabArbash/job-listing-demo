import "./App.css";
import FiltersBar from "./components/FiltersBar";
import JobsList from "./components/JobsList";

function App() {
  return (
    <>
      <header className="header"></header>
      <main className="container">
        <FiltersBar></FiltersBar>
        <JobsList></JobsList>
        
      </main>
    </>
  );
}

export default App;
