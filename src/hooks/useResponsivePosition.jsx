import { useEffect, useRef, useState } from "react";

function useResponsivePosition({
  xPercent,
  yPercent,
  rightPercent,
  bottomPercent,
  offsetHalfHeight = true,  // default true
  offsetHalfWidth = true,   // default true
  responsiveScale = false,
  minSize = 36,
  maxSize = 120,
  maxSizeH = 100,
  minSizeH = 10,
  maxSizeW = 300,
  minSizeW = 100,
  borderBase = 0,
}) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  useEffect(() => {
    function update() {
      if (ref.current && ref.current.parentElement) {
        const parent = ref.current.parentElement;
        const parentW = parent.offsetWidth;
        const parentH = parent.offsetHeight;
        const self = ref.current;
        let selfH = self.offsetHeight;
        let selfW = self.offsetWidth;

        // Responsive scale
        if (responsiveScale) {
          if (selfH === selfW) {
            const scaleSize = Math.max(
              minSize,
              Math.min(maxSize, (parentW / 1200) * maxSize)
            );
            selfH = scaleSize;
            selfW = scaleSize;
            self.style.width = `${scaleSize}px`;
            self.style.height = `${scaleSize}px`;

            if (borderBase > 0) {
              const borderScale = scaleSize / maxSize;
              const borderWidth = borderBase * borderScale;
              self.style.borderWidth = `${borderWidth}px`;
            }
          } else {
            const scaleSizeH = Math.max(
              minSizeH,
              Math.min(maxSizeH, (parentH / 400) * maxSizeH)
            );
            const scaleSizeW = Math.max(
              minSizeW,
              Math.min(maxSizeW, (parentW / 1200) * maxSizeW)
            );
            selfH = scaleSizeH;
            selfW = scaleSizeW;
            self.style.height = `${scaleSizeH}px`;
            self.style.width = `${scaleSizeW}px`;
          }
        }

        let newStyle = {};

        // Left/Top
        if (typeof xPercent === "number") {
          let x = parentW * xPercent;
          if (offsetHalfWidth) x -= selfW / 2;
          newStyle.left = x;
        }

        if (typeof yPercent === "number") {
          let y = parentH * yPercent;
          if (offsetHalfHeight) y -= selfH / 2;
          newStyle.top = y;
        }

        // Right/Bottom
        if (typeof rightPercent === "number") {
          let r = parentW * rightPercent;
          if (offsetHalfWidth) r -= selfW / 2;
          newStyle.right = r;
        }

        if (typeof bottomPercent === "number") {
          let b = parentH * bottomPercent;
          if (offsetHalfHeight) b -= selfH / 2;
          newStyle.bottom = b;
        }

        setStyle(newStyle);
      }
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [
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
  ]);

  return [ref, style];
}

export default useResponsivePosition;
