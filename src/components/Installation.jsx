import React from 'react';

const Installation = () => {
  return (
    <section className="installation">
      <h2>Installation <span className="emoji">🛠️</span></h2>
      <p>Ensure you have the required dependencies installed:</p>
      <pre>
        <code>sudo apt install cloudflared yq npm node -y</code>
      </pre>
      <p>Then, clone the repository:</p>
      <pre>
        <code>
          git clone https://github.com/ayushch80/OutRun<br />
          cd outrun<br />
          chmod +x src/outrun.sh
        </code>
      </pre>
    </section>
  );
};

export default Installation;