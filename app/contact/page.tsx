import {
  Github,
  Linkedin,
  type LucideIcon,
  Mail,
  MessageCircle,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import PageWrapper from "@/components/page-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  const contacts = [
    {
      content: "LINKEDIN",
      href: "https://www.linkedin.com/in/webdevkaleem",
      icon: Linkedin,
      description: "Connect professionally",
      className: "sm:col-span-3 lg:col-span-2",
    },
    {
      content: "GITHUB",
      href: "https://github.com/webdevkaleem",
      icon: Github,
      description: "Explore my repositories",
      className: "sm:col-span-3 lg:col-span-2",
    },
    {
      content: "EMAIL",
      href: "mailto:webdevkaleem@gmail.com",
      icon: Mail,
      description: "Send me a direct message",
      className: "sm:col-span-3 lg:col-span-2",
    },
    {
      content: "X (Twitter)",
      href: "https://x.com/webdevkaleem",
      icon: Twitter,
      description: "Follow for quick updates",
      className: "sm:col-span-3 lg:col-span-3",
    },
    {
      content: "DISCORD",
      href: "https://discord.gg/cAa3dJmq",
      icon: MessageCircle,
      description: "Drop me a message",
      className: "sm:col-span-3 lg:col-span-3",
    },
  ];

  return (
    <PageWrapper>
      <section className="min-h-[calc(100vh-128px)] py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-8 md:w-2/3 lg:w-1/2">
            <h1 className="text-5xl leading-tight break-all">CONTACT</h1>
            <p className="text-xl leading-tight">
              I'm always looking for new opportunities and collaborations. If
              you have any questions or would like to work together, please
              don't hesitate to contact me.
            </p>
          </div>

          <div className="relative mt-10 md:mt-14">
            <div className="relative z-10 grid grid-cols-6 gap-4">
              {contacts.map((contact) => (
                <ContactCard
                  key={contact.content}
                  content={contact.content}
                  href={contact.href}
                  icon={contact.icon}
                  description={contact.description}
                  className={contact.className}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

function ContactCard({
  content,
  href,
  icon: Icon,
  description,
  className,
}: {
  content: string;
  href: string;
  icon: LucideIcon;
  description: string;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "col-span-full overflow-hidden border-muted/60 bg-foreground/15 dark:bg-foreground/10",
        className,
      )}
    >
      <Link href={href} target="_blank" rel="noreferrer">
        <CardContent className="relative p-6">
          <div className="relative z-10 flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-border/70 bg-background/90">
              <Icon className="size-5" />
            </div>
            <div className="space-y-1">
              <h2 className="text-lg">{content}</h2>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}
