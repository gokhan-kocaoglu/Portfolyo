import React from "react";
import clsx from "clsx";

function Shape({ tw = "", className = "" }) {
  return (
    <div
      className={clsx(
        "absolute pointer-events-none transition-all duration-500 ease-in-out",
        tw,
        className
      )}
    />
  );
}

export default Shape;
