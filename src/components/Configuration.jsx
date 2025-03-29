import React from 'react';

const Configuration = () => {
  return (
    <section className="configuration">
      <h2>Configuration <span className="emoji">⚙️</span></h2>
      <p>The init command generates an out.run file with project settings:</p>
      <pre>
        <code>
          {`OUTRUN_VERSION: "1.0.0"
proj: "my-project"
root: "./"
manager: "npm"
port: "3000"
cmd:
    build: "npm run build"
    start: "npm run start"`}
        </code>
      </pre>
    </section>
  );
};

export default Configuration;