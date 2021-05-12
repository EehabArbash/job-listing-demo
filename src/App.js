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
            <li
              className={`job-list-item ${job["featured"] ? "featured" : ""}`}
            >
              <main>
                <div>
                  <div className="job-header">
                    <h2 className="job-company">{job["company"]}</h2>
                    {job["new"] ? <span className="new-tablet">NEW!</span> : ""}
                    {job["featured"] ? (
                      <span className="featured-tablet">FEATURED</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <h3 className="job-position">{job["position"]}</h3>
                  <p className="job-info">
                    <span>{job["postedAt"]}</span>
                    <span className="job-info-sep">•</span>
                    <span>{job["contract"]}</span>
                    <span className="job-info-sep">•</span>
                    <span>{job["location"]}</span>
                  </p>
                </div>
                <img
                  src={
                    require(`./challenge-files/${job["logo"].slice(2)}`).default
                  }
                  alt="company-logo"
                  className="job-logo"
                ></img>
              </main>
              <aside>
                <ul className="job-filters">
                  <li className="filter-tablet">{job["role"]}</li>
                  <li className="filter-tablet">{job["level"]}</li>
                  {job["languages"].map((language) => (
                    <li className="filter-tablet">{language}</li>
                  ))}
                  {job["tools"].map((tool) => (
                    <li className="filter-tablet">{tool}</li>
                  ))}
                </ul>
              </aside>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

export default App;
