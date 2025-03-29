import React from 'react';

const Usage = () => {
  return (
    <section className="usage">
      <h2>Usage <span className="emoji">🏃‍♂️</span></h2>
      <p>Run the script with the following commands:</p>
      <pre>
        <code>./src/outrun.sh &lt;command&gt; [options]</code>
      </pre>
      
      <h3>Available Commands <span className="emoji">🎯</span></h3>
      <ul className="commands">
        <li><strong>help</strong> - Show available commands</li>
        <li><strong>version</strong> - Display the current OutRun version</li>
        <li><strong>init [path]</strong> - Initialize an OutRun project (default: current directory)</li>
      </ul>
      
      <h3>Example Usage <span className="emoji">🏗️</span></h3>
      <pre>
        <code>./src/outrun.sh init my-project</code>
      </pre>
    </section>
  );
};

export default Usage;