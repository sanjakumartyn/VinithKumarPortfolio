import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          color: {
            value: ["#ffffff", "#ff4d5a", "#ffd1d5"],
          },
          number: {
            value: 190,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            enable: true,
            direction: "none",
            random: true,
            straight: false,
            speed: 0.65,
            out_mode: "bounce",
            attract: {
              enable: true,
              rotateX: 900,
              rotateY: 1200,
            },
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: true,
              speed: 2.5,
              size_min: 0.4,
              sync: false,
            },
          },
          opacity: {
            value: 0.85,
            random: true,
            anim: {
              enable: true,
              speed: 2.2,
              opacity_min: 0.12,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
