import React from 'react';

function Results({ results }) {
  return (
    <div>
      {results.map((job) => (
        <div key={job.jobId}>
          <h3>{job.company}</h3>
          <p>{job.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Results;

