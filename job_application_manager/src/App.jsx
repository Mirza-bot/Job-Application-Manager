import "./App.css";
import JobForm from "./components/JobForm/JobForm";
import JobsList from "./components/JobsList/JobsList";

function App() {
  return (
    <div className="App">
      <div className="grid 2xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        <JobForm></JobForm>
        <JobsList></JobsList>
      </div>
    </div>
  );
}

export default App;
