import { Loader2 } from "lucide-react";
import Image from "next/image";
import PageWrapper from "@/components/page-wrapper";

export default function InfoPage() {
  return (
    <PageWrapper>
      <div className="min-h-[calc(100vh-128px)] flex flex-col md:flex-row gap-8 md:gap-16 py-16 text-sm">
        {/* Left Column - Project Info */}
        <div className="flex flex-col justify-between md:w-5/12 md:sticky md:top-16 md:self-start md:py-8 gap-8">
          <h1 className="text-5xl leading-tight break-all">INFO</h1>
          <p className="text-lg leading-tight">
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
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
              src={
                "https://1nc21dil75.ufs.sh/f/0j4J6npV5BC4u75eGyZ1HBgUXKJ7sYjwhMO0G4qWIVZ3z6ET"
              }
              alt={"Profile Picture"}
              fill
              sizes="(max-width: 768px) 66vw, 33vw"
              className={`object-cover transition-all duration-500 origin-bottom`}
            />
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <Loader2 className="size-4 animate-spin" />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
