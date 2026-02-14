import { RandomizedTextEffect } from "@/components/ui/randomized-text-effect";
import CurrentTime from "./current-time";

export default function Hero() {
  return (
    <div className="min-h-96 md:min-h-72 flex justify-end flex-col">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-10 md:gap-0">
        <RandomizedTextEffect
          as="h1"
          content="KALEEM<br />BHATTI"
          className="text-7xl md:col-span-6"
        />

        <RandomizedTextEffect
          as="p"
          content="DESIGNER & <br /> DEVELOPER"
          className="flex justify-start items-start flex-col md:col-span-2 md:col-start-7 md:justify-end md:items-end"
        />

        <CurrentTime />
      </div>
    </div>
  );
}
