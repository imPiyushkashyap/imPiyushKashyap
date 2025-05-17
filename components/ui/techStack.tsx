"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Code2, Globe, Package2, Palette, Wrench } from "lucide-react";
import type { JSX } from "react";

interface TechItem {
  name: string;
  icon: string;
  color: string;
  bgColor: string;
}

export default function TechStack() {
  const frontend: TechItem[] = [
    {
      name: "TypeScript",
      icon: "TS",
      color: "text-blue-300",
      bgColor: "bg-blue-900/30",
    },

    {
      name: "TailwindCSS",
      icon: "TW",
      color: "text-sky-300",
      bgColor: "bg-sky-900/30",
    },
    {
      name: "React",
      icon: "R",
      color: "text-green-300",
      bgColor: "bg-green-900/30",
    },
    {
      name: "Shadcn UI",
      icon: "SC",
      color: "text-amber-300",
      bgColor: "bg-amber-900/30",
    },
    {
      name: "NextJS",
      icon: "N",
      color: "text-white",
      bgColor: "bg-gray-900/30",
    },
    {
      name: "Framer Motion",
      icon: "FM",
      color: "text-pink-400",
      bgColor: "bg-pink-900/30",
    },
    {
      name: "Zustand",
      icon: "Z",
      color: "text-orange-300",
      bgColor: "bg-orange-900/30",
    },
    {
      name: "Jotai",
      icon: "J",
      color: "text-emerald-300",
      bgColor: "bg-emerald-900/30",
    },
    {
      name: "TanStack Query",
      icon: "TQ",
      color: "text-red-300",
      bgColor: "bg-red-900/30",
    },
  ];

  const backend: TechItem[] = [
    {
      name: "NodeJS",
      icon: "N",
      color: "text-lime-300",
      bgColor: "bg-lime-900/30",
    },

    {
      name: "Vercel",
      icon: "▲",
      color: "text-white",
      bgColor: "bg-neutral-900/30",
    },
    {
      name: "PayloadCMS",
      icon: "PC",
      color: "text-white",
      bgColor: "bg-neutral-900/30",
    },

    {
      name: "Prisma ORM",
      icon: "PR",
      color: "text-indigo-300",
      bgColor: "bg-indigo-900/30",
    },
    {
      name: "Drizzle ORM",
      icon: "DR",
      color: "text-yellow-300",
      bgColor: "bg-yellow-900/30",
    },

    {
      name: "tRPC",
      icon: "TR",
      color: "text-sky-300",
      bgColor: "bg-sky-900/30",
    },
    {
      name: "GraphQL",
      icon: "GQL",
      color: "text-pink-300",
      bgColor: "bg-pink-900/30",
    },

    {
      name: "NextAuth.js",
      icon: "NA",
      color: "text-fuchsia-300",
      bgColor: "bg-fuchsia-900/30",
    },
    {
      name: "BetterAuth.js",
      icon: "BA",
      color: "text-orange-300",
      bgColor: "bg-orange-900/30",
    },
    {
      name: "Supabase",
      icon: "SB",
      color: "text-teal-300",
      bgColor: "bg-teal-900/30",
    },
    {
      name: "PostgreSQL",
      icon: "PG",
      color: "text-blue-300",
      bgColor: "bg-blue-900/30",
    },
    {
      name: "MongoDB",
      icon: "MG",
      color: "text-emerald-300",
      bgColor: "bg-emerald-900/30",
    },
  ];

  const tools: TechItem[] = [
    {
      name: "Git + GitHub",
      icon: "GH",
      color: "text-orange-400",
      bgColor: "bg-orange-900/30",
    },
    {
      name: "Docker",
      icon: "🐳",
      color: "text-sky-300",
      bgColor: "bg-sky-900/30",
    },
    {
      name: "Fedora Linux",
      icon: "🧢",
      color: "text-blue-300",
      bgColor: "bg-blue-900/30",
    },
    {
      name: "Stripe Links",
      icon: "💳",
      color: "text-indigo-300",
      bgColor: "bg-indigo-900/30",
    },
    {
      name: "TurboRepo",
      icon: "TR",
      color: "text-fuchsia-300",
      bgColor: "bg-fuchsia-900/30",
    },
    {
      name: "Railway",
      icon: "RW",
      color: "text-purple-300",
      bgColor: "bg-purple-900/30",
    },
    {
      name: "Upstash",
      icon: "US",
      color: "text-emerald-300",
      bgColor: "bg-emerald-900/30",
    },
  ];

  const ai: TechItem[] = [
    {
      name: "LangChain",
      icon: "LC",
      color: "text-yellow-300",
      bgColor: "bg-yellow-900/30",
    },
    {
      name: "LangGraph",
      icon: "LG",
      color: "text-yellow-300",
      bgColor: "bg-yellow-900/30",
    },
    {
      name: "n8n Integrations",
      icon: "🪢",
      color: "text-green-300",
      bgColor: "bg-green-900/30",
    },
    {
      name: "Make.com",
      icon: "MK",
      color: "text-pink-300",
      bgColor: "bg-pink-900/30",
    },

    {
      name: "GROQ API",
      icon: "GQ",
      color: "text-lime-300",
      bgColor: "bg-lime-900/30",
    },
    {
      name: "Vercel AI SDK",
      icon: "VA",
      color: "text-indigo-300",
      bgColor: "bg-indigo-900/30",
    },

    {
      name: "MCP Server",
      icon: "MCP",
      color: "text-orange-300",
      bgColor: "bg-orange-900/30",
    },
  ];

  const softwares: TechItem[] = [
    {
      name: "Docker",
      icon: "DC",
      color: "text-blue-300",
      bgColor: "bg-blue-900/30",
    },
  ];

  const mainTechStack = [
    {
      name: "NextJS",
      icon: "N",
      color: "text-white",
      bgColor: "bg-gray-900/30",
    },
    {
      name: "TypeScript",
      icon: "TS",
      color: "text-blue-300",
      bgColor: "bg-blue-900/30",
    },
    {
      name: "TailwindCSS",
      icon: "TW",
      color: "text-teal-300",
      bgColor: "bg-teal-900/30",
    },
    {
      name: "Shadcn UI",
      icon: "SC",
      color: "text-amber-300",
      bgColor: "bg-amber-900/30",
    },
    {
      name: "Prisma ORM",
      icon: "PR",
      color: "text-indigo-300",
      bgColor: "bg-indigo-900/30",
    },
    {
      name: "Drizzle ORM",
      icon: "DR",
      color: "text-yellow-300",
      bgColor: "bg-yellow-900/30",
    },
    {
      name: "PostgreSQL",
      icon: "PG",
      color: "text-blue-300",
      bgColor: "bg-blue-900/30",
    },
    {
      name: "Supabase",
      icon: "SB",
      color: "text-teal-300",
      bgColor: "bg-teal-900/30",
    },
    {
      name: "Upstash",
      icon: "US",
      color: "text-emerald-300",
      bgColor: "bg-emerald-900/30",
    },
    {
      name: "MongoDB",
      icon: "MG",
      color: "text-emerald-300",
      bgColor: "bg-emerald-900/30",
    },
    {
      name: "Vercel",
      icon: "▲",
      color: "text-white",
      bgColor: "bg-neutral-900/30",
    },
    {
      name: "Railway",
      icon: "RW",
      color: "text-purple-300",
      bgColor: "bg-purple-900/30",
    },
    {
      name: "Docker",
      icon: "DC",
      color: "text-blue-300",
      bgColor: "bg-blue-900/30",
    },
    {
      name: "PayloadCMS",
      icon: "PC",
      color: "text-white",
      bgColor: "bg-neutral-900/30",
    },
  ];

  return (
    <Card className="bg-background text-foreground p-6 ">
      <CardHeader className="pb-2">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardTitle className="text-3xl font-mono tracking-wider text-foreground flex items-center gap-2">
            <span className="text-teal-400">&lt;</span>
            My Tech Stack
            <span className="text-teal-400">/&gt;</span>
          </CardTitle>
        </motion.div>
      </CardHeader>

      <CardContent className="space-y-6 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4 bg-gray-950/50 p-4 rounded-lg border  border-gray-700"
        >
          <p className="text-foreground leading-relaxed flex flex-wrap gap-1 items-center">
            My main tech stack is <TechBadge tech={mainTechStack[0]} />{" "}
            framework with App Router and Server Actions
            <TechBadge tech={mainTechStack[1]} />,{" "}
            <TechBadge tech={mainTechStack[2]} /> and
            <TechBadge tech={mainTechStack[3]} /> as a styling library. I use
            <TechBadge tech={mainTechStack[4]} /> or{" "}
            <TechBadge tech={mainTechStack[5]} /> as the ORM. For data storage
            and backend services, I work with{" "}
            <TechBadge tech={mainTechStack[6]} /> via
            <TechBadge tech={mainTechStack[7]} />,{" "}
            <TechBadge tech={mainTechStack[8]} /> for Redis-like caching, and
            <TechBadge tech={mainTechStack[9]} /> for document-based data. I
            deploy projects using
            <TechBadge tech={mainTechStack[10]} />,{" "}
            <TechBadge tech={mainTechStack[11]} />, or
            <TechBadge tech={mainTechStack[12]} /> and manage content with
            <TechBadge tech={mainTechStack[13]} /> as my preferred CMS.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full text-foreground">
          <TabsContent value="all" className="mt-4 text-foreground space-y-6">
            <TechSection
              title="Frontend"
              icon={<Code2 className="w-4 h-4" />}
              items={frontend}
            />
            <TechSection
              title="Backend"
              icon={<Package2 className="w-4 h-4" />}
              items={backend}
            />
            <TechSection
              title="Infrastructure & Tools"
              icon={<Wrench className="w-4 h-4" />}
              items={tools}
            />
            <TechSection
              title="AI and Intregrations"
              icon={<Globe className="w-4 h-4" />}
              items={ai}
            />
          </TabsContent>

          <TabsContent value="Front-End" className="mt-4">
            <TechSection
              title="Front-End"
              icon={<Code2 className="w-4 h-4" />}
              items={frontend}
            />
          </TabsContent>

          <TabsContent value="frameworks" className="mt-4">
            <TechSection
              title="FRAMEWORKS"
              icon={<Package2 className="w-4 h-4" />}
              items={backend}
            />
          </TabsContent>

          <TabsContent value="tools" className="mt-4">
            <TechSection
              title="TOOLS"
              icon={<Wrench className="w-4 h-4" />}
              items={tools}
            />
          </TabsContent>

          <TabsContent value="platforms" className="mt-4">
            <TechSection
              title="PLATFORMS"
              icon={<Globe className="w-4 h-4" />}
              items={ai}
            />
          </TabsContent>

          <TabsContent value="softwares" className="mt-4">
            <TechSection
              title="SOFTWARES"
              icon={<Palette className="w-4 h-4" />}
              items={softwares}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

interface TechSectionProps {
  title: string;
  icon: JSX.Element;
  items: TechItem[];
}

function TechSection({ title, icon, items }: TechSectionProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <motion.div
      className="space-y-3"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="flex items-center gap-2 text-gray-400 text-sm">
        <span className="text-teal-400">&lt;</span>
        {icon}
        <span className="font-mono tracking-wider">{title}</span>
        <span className="text-teal-400">/&gt;</span>
      </div>
      <motion.div className="flex flex-wrap gap-2" variants={container}>
        {items.map((tech) => (
          <motion.div key={tech.name} variants={item}>
            <TechBadge tech={tech} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

interface TechBadgeProps {
  tech: TechItem;
}

function TechBadge({ tech }: TechBadgeProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "border-gray-800 px-3 py-1 gap-1.5 rounded-md transition-all duration-300",
        "hover:scale-105 hover:shadow-md hover:shadow-teal-900/20",
        tech.color,
        tech.bgColor
      )}
    >
      <span className="w-4 h-4 flex items-center justify-center font-bold text-xs">
        {tech.icon}
      </span>
      {tech.name}
    </Badge>
  );
}
