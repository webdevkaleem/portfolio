import CurrentTime from "./current-time";

export default function Hero() {
  return (
    <div className="min-h-96 flex justify-end flex-col text-xs">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-10 md:gap-0">
        <h1 className="text-7xl md:col-span-6">
          KALEEM <br />
          BHATTI
        </h1>

        <p className="flex justify-start items-start flex-col md:col-span-2 md:col-start-7 md:justify-end md:items-end">
          DESIGNER & <br /> DEVELOPER
        </p>

        <CurrentTime />
      </div>
    </div>
  );
}
