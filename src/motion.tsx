import { motion as fmMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { JSX } from "preact";

// a little hacky but gets the job done for now
export const MotionDiv = fmMotion.div as (
  props: HTMLMotionProps<"div"> & { ref?: any }
) => JSX.Element;