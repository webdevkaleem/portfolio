"use client";

import { useEffect, useState } from "react";

export default function CurrentTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const pakistanTime = new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "numeric",
        timeZone: "Asia/Karachi",
      });
      setTime(pakistanTime);
    };

    updateTime();

    // Update every second
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="flex justify-start items-start flex-col md:col-span-2 md:col-start-9 md:justify-end md:items-end">
      PAKISTAN, AT <br /> {time}
    </p>
  );
}
