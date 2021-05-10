import "./App.css";
import JOBS from "./Data";
function App() {
  return (
    <>
      <header className="header"></header>
      <main className="container">
        <div className="filters-bar"></div>
        <ul className="jobs-list">
          {JOBS.map((job) => (
            <li className="job-list-item">
              <h5 className="job-company">{job["company"]}</h5>
              <h3 className="job-position">{job["position"]}</h3>
              <p className="job-info">
                <span>{job["postedAt"]}</span>
                <span>{job["contract"]}</span>
                <span>{job["location"]}</span>
              </p>
              <ul className="job-filters">
                <li className="filter-tablet">{job["role"]}</li>
                <li className="filter-tablet">{job["level"]}</li>
                {job["languages"].map((language) => (
                  <li className="filter-tablet">{language}</li>
                ))}
              </ul>
              {/* <div className="job-company-logo"></div> */}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
