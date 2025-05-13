"use client";

import React from "react";
import { TextGenerateEffect } from "./textGeneration";

const words =
  "I build performant web apps With expertise in Next.js, TypeScript, Payload CMS, Vercel AI SDK and AI-driven features.";

const HeroLandingPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-4xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I&apos;m Piyush — Full Stack Next.js Developer{" "}
        </h1>
        <TextGenerateEffect duration={1} filter={false} words={words} />
        {/* <div className="flex justify-center gap-4 pt-4">
          <Button size="lg">View Projects</Button>
          <Button variant="outline" size="lg">
            Contact Me
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default HeroLandingPage;
