import React, { useRef, useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

function PercentPositionedBox({
  top,
  left,
  right,
  bottom,
  width = 20,
  height,
  borderPercent, // opsiyonel, yüzde olarak (örn: 10)
  borderColor = "#EA2678",
  darkBorderColor = "#525252",
  style = {},
  className = "",
  children,
  ...props
}) {
  const { theme } = useAppContext();
  const ref = useRef(null);
  const [borderPx, setBorderPx] = useState(undefined);

  const effectiveColor = theme === "dark" ? darkBorderColor : borderColor;

  useEffect(() => {
    if (borderPercent !== undefined) {
      function update() {
        if (ref.current) {
          const w = ref.current.offsetWidth;
          setBorderPx((w * borderPercent) / 100);
        }
      }
      update();
      window.addEventListener("resize", update);
      return () => window.removeEventListener("resize", update);
    }
  }, [borderPercent, width]);

  // Border style'ı otomatik oluştur
  const borderStyle =
    borderPercent !== undefined
      ? {
          border: `${borderPx || 0}px solid ${effectiveColor}`,
          boxSizing: "border-box",
        }
      : {};

  // Pozisyon ve boyut style'ı oluştur
  const computedStyle = {
    position: "absolute",
    ...(top !== undefined ? { top: `${top}%` } : {}),
    ...(left !== undefined ? { left: `${left}%` } : {}),
    ...(right !== undefined ? { right: `${right}%` } : {}),
    ...(bottom !== undefined ? { bottom: `${bottom}%` } : {}),
    width: `${width}%`,
    ...(height !== undefined
      ? { height: `${height}%` }
      : { aspectRatio: "1 / 1" }),
    ...borderStyle,
    ...style,
  };

  return (
    <div ref={ref} style={computedStyle} className={className} {...props}>
      {children}
    </div>
  );
}

export default PercentPositionedBox;
