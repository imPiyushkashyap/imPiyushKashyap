// app/about/page.tsx (or wherever your about route is)
"use client";

import TechStack from "@/components/ui/techStack";

export default function AboutPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-12">
      {/* Header */}
      <div>
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground">
          About me<span className="text-purple-600">.</span>
        </h1>
        <div className="mt-4 pl-3 border-l-4 border-purple-600">
          <p className="text-lg text-muted-foreground">
            I&apos;m a Full Stack Web Developer from Himachal Pradesh, India,
            passionate about building modern web applications, exploring AI
            integration, and working with new frameworks and tools. I&apos;m
            currently pursuing a Master of Computer Applications (MCA) degree
            from Kurukshetra University, Haryana.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <main className="flex min-h-screen flex-col items-center justify-center p-4">
        <div className="max-w-4xl w-full">
          <TechStack />
        </div>{" "}
      </main>
    </section>
  );
}
