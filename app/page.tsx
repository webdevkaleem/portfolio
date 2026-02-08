import Hero from "./_components/hero";
import Projects from "./_components/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <Hero />
      <Projects />
    </div>
  );
}
