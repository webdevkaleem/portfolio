"use client";

import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function PageWrapper({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 220;
      setShowScrollTop((prev) => (prev === next ? prev : next));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className={cn("flex flex-col gap-16", className)}
      >
        {children}
      </motion.div>
      <motion.div
        aria-label="Scroll to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={false}
        animate={{
          opacity: showScrollTop ? 1 : 0,
        }}
      >
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "fixed bottom-6 right-6 rounded-full z-50 p-5",
            showScrollTop ? "pointer-events-auto" : "pointer-events-none",
          )}
        >
          <ArrowUp />
        </Button>
      </motion.div>
    </>
  );
}
