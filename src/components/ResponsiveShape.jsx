import React from "react";
import useResponsivePosition from "../hooks/useResponsivePosition";

function ResponsiveShape({
  xPercent,
  yPercent,
  rightPercent,
  bottomPercent,
  offsetHalfHeight = false,
  offsetHalfWidth = false,
  responsiveScale = false,
  minSize = 36,
  maxSize = 120,
  maxSizeH = 100,
  minSizeH = 10,
  maxSizeW = 300,
  minSizeW = 100,
  borderBase = 0,
  className = "",
  style: customStyle = {},
  ...props
}) {
  const [ref, style] = useResponsivePosition({
    xPercent,
    yPercent,
    rightPercent,
    bottomPercent,
    offsetHalfHeight,
    offsetHalfWidth,
    responsiveScale,
    minSize,
    maxSize,
    maxSizeH,
    minSizeH,
    maxSizeW,
    minSizeW,
    borderBase,
  });

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        ...style,
        zIndex: -1,
        ...customStyle,
      }}
      className={`pointer-events-none transition-all duration-500 ${className}`}
      {...props}
    />
  );
}

export default ResponsiveShape;
