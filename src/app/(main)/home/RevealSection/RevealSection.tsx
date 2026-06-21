"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import styles from "./RevealSection.module.css";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  /** 0 to 1, how much of the section must be visible before it triggers */
  threshold?: number;
}

export default function RevealSection({
  children,
  className,
  threshold,
}: RevealSectionProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(threshold);

  const combinedClassName = [styles.reveal, className]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      ref={ref}
      data-visible={isVisible}
      className={combinedClassName}
    >
      {children}
    </div>
  );
}
