import React, { CSSProperties } from "react";
import { Auto } from "./Auto";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
}

const Ripple = React.memo(function Ripple({
  mainCircleSize = 150,
  mainCircleOpacity = 0.24,
  numCircles = 8,
}: RippleProps) {
  return (
    <div className="inset-0 flex items-center justify-center">
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 68;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = i === numCircles - 1 ? "dashed" : "solid";
        const borderOpacity = 5 + i * 5;

        return (
          <div
            key={i}
            className={`absolute animate-ripple rounded-full bg-green shadow-xl border [--i:${i}] flex items-center justify-center`}
            style={
              {
                width: `${size}px`,
                height: `${size}px`,
                opacity,
                animationDelay,
                borderStyle,
                borderWidth: "1px",
                borderColor: `hsl(var(--foreground), ${borderOpacity / 100})`,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        );
      })}
      <div className="flex items-center justify-center pl-[60px] pt-[80px]">
        <Auto width="60px" height="80px" />
      </div>
    </div>
  );
});

Ripple.displayName = "Ripple";

export default Ripple;
