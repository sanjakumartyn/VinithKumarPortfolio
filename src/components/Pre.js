import React from "react";

const asteroids = [
  { top: "8%", right: "-12%", size: "34px", delay: "0s", duration: "1.25s" },
  { top: "22%", right: "-18%", size: "22px", delay: "0.16s", duration: "1.05s" },
  { top: "38%", right: "-14%", size: "44px", delay: "0.32s", duration: "1.35s" },
  { top: "58%", right: "-20%", size: "28px", delay: "0.52s", duration: "1.15s" },
  { top: "72%", right: "-16%", size: "18px", delay: "0.72s", duration: "1s" },
  { top: "14%", right: "-28%", size: "26px", delay: "0.88s", duration: "1.2s" },
  { top: "46%", right: "-30%", size: "20px", delay: "1.04s", duration: "1.05s" },
  { top: "84%", right: "-22%", size: "38px", delay: "1.18s", duration: "1.3s" },
];

function Pre(props) {
  if (!props.load) {
    return <div id="preloader-none"></div>;
  }

  return (
    <div id="preloader" role="status" aria-label="Loading website">
      <div className="asteroid-field" aria-hidden="true">
        {asteroids.map((asteroid, index) => (
          <span
            className="asteroid"
            key={index}
            style={{
              "--top": asteroid.top,
              "--right": asteroid.right,
              "--size": asteroid.size,
              "--delay": asteroid.delay,
              "--duration": asteroid.duration,
            }}
          >
            <span className="asteroid-core"></span>
          </span>
        ))}
      </div>

      <div className="impact-zone" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="loader-copy">
        <h1>VINITH</h1>
        <p>Loading Portfolio</p>
        <div className="loader-progress" aria-hidden="true">
          <span></span>
        </div>
        <small>Preparing launch sequence</small>
      </div>
    </div>
  );
}

export default Pre;
