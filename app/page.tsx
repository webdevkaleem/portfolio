import PageWrapper from "@/components/page-wrapper";
import Hero from "./_components/hero";
import Projects from "./_components/projects";

export default function Home() {
  return (
    <PageWrapper className="pb-16 md:pb-0">
      <Hero />
      <Projects />
    </PageWrapper>
  );
}
