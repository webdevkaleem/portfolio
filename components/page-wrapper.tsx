"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function PageWrapper({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn("flex flex-col gap-16", className)}
    >
      {children}
    </motion.div>
  );
}
