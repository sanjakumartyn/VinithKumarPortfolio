import React, { useEffect, useRef, useState } from "react";
import rocketCursor from "../Assets/icons8-rocket-64.png";

const ROCKET_OFF_IMG = rocketCursor;
const ROCKET_ON_IMG = rocketCursor;

function RocketCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const stopTimerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setHasMoved(true);
      setIsMoving(true);

      if (stopTimerRef.current) {
        clearTimeout(stopTimerRef.current);
      }

      stopTimerRef.current = setTimeout(() => {
        setIsMoving(false);
        stopTimerRef.current = null;
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (stopTimerRef.current) {
        clearTimeout(stopTimerRef.current);
      }
    };
  }, []);

  const cursorStyle = {
    position: "fixed",
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: "translate(-50%, -50%)",
    pointerEvents: "none",
    zIndex: 999999,
    opacity: hasMoved ? 1 : 0,
    userSelect: "none",
  };

  const imageStyle = {
    width: "40px",  // Adjust size to fit your images
    height: "auto",
    display: "block",
  };

  return (
    <>
      <style>
        {`
          html,
          body,
          #root,
          #root *,
          button,
          a {
            cursor: none !important;
          }
        `}
      </style>
      <div style={cursorStyle} aria-hidden="true">
        {/* Swaps the entire rocket image based on movement */}
        <img
          src={isMoving ? ROCKET_ON_IMG : ROCKET_OFF_IMG}
          alt="Rocket Cursor"
          style={imageStyle}
        />
      </div>
    </>
  );
}

export default RocketCursor;
