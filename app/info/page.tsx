import PageWrapper from "@/components/page-wrapper";

export default function InfoPage() {
  return (
    <PageWrapper>
      <div className="min-h-[calc(100vh-128px)] flex flex-col md:flex-row gap-8 md:gap-16 py-16 text-xs">
        {/* Left Column - Project Info */}
        <div className="flex flex-col justify-between md:w-5/12 md:sticky md:top-16 md:self-start md:py-8 gap-8 md:gap-32">
          <h1 className="text-5xl leading-tight break-all">INFO</h1>
          <p className="text-xl leading-tight">
            I'm Kaleem Bhatti, a web developer specializing in the T3 stack,
            particularly with Next.js and its app router. <br />
            <br />
            After spending a couple of years navigating through tutorial hell,
            I've emerged with a solid foundation in modern web technologies and
            a keen interest in building dynamic web applications.
          </p>
        </div>

        {/* Right Column - Scrollable Project Gallery */}
        <div className="flex-1">
          <div className="min-h-96 h-full w-full bg-foreground/15 dark:bg-foreground/10"></div>
        </div>
      </div>
    </PageWrapper>
  );
}
