"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const BorderBeam = ({
  className,
  size = 50,
  delay = 0,
  duration = 20,
  colorFrom = "#fff",
  colorTo = "#8083ff",
  transition,
  style,
  reverse = false,
  initialOffset = 0,
  borderWidth = 2.5,
}) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit]",
        // Added webkit-prefixed mask properties for Safari
        "[mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]",
        "[mask-composite:intersect]",
        "[mask-clip:padding-box,border-box]"
      )}
      style={{
        "--border-beam-width": `${borderWidth}px`,
        borderWidth: `${borderWidth}px`,
        borderStyle: "solid",
        borderColor: "transparent",
        WebkitMaskImage:
          "linear-gradient(transparent,transparent),linear-gradient(#000,#000)",
        WebkitMaskComposite: "source-in",
        WebkitMaskClip: "padding-box,border-box",
        maskImage:
          "linear-gradient(transparent,transparent),linear-gradient(#000,#000)",
        maskComposite: "intersect",
        maskClip: "padding-box,border-box",
      }}
    >
      <motion.div
        className={cn(
          "absolute aspect-square",
          "bg-gradient-to-l from-[var(--color-from)] via-[var(--color-to)] to-transparent",
          className
        )}
        style={{
          width: size,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          // Safari fallback: if offsetPath unsupported, use transform animation
          offsetPath: `rect(0 auto auto 0 round ${size}px)`,
          WebkitOffsetPath: `rect(0 auto auto 0 round ${size}px)`,
          ...style,
        }}
        initial={{
          offsetDistance: `${initialOffset}%`,
          WebkitOffsetDistance: `${initialOffset}%`,
        }}
        animate={{
          offsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
          WebkitOffsetDistance: reverse
            ? [`${100 - initialOffset}%`, `${-initialOffset}%`]
            : [`${initialOffset}%`, `${100 + initialOffset}%`],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay: -delay,
          ...transition,
        }}
      />
    </div>
  );
};
