import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
// import Link from "next/link";
import { getPosts } from "@/lib/getpost";
import { Button } from "@/components/ui/button";

// Define blog type
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  media?: {
    url: string;
    alt?: string;
  };
  publishedAt: string;
  author: string;
}

const Blog = async () => {
  const posts: BlogPost[] = await getPosts();

  return (
    <div className="container py-5 md:py-20 xl:py-20 max-w-4xl mx-auto">
      <div className="space-y-4 mb-12">
        <p className="text-foreground ml-4 mr-2 text-lg">
          My thoughts on software development, design, frameworks, and more.
        </p>
      </div>

      <div className="grid gap-6 w-auto md:grid-cols-2">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="flex flex-col h-full mx-3 dark:bg-foreground/10 dark:border-border"
          >
            <CardHeader className="flex flex-col">
              <div className="">
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="mt-2">
                  By Piyush on {""}
                  {new Date(post.publishedAt).toDateString()}
                </CardDescription>
              </div>
            </CardHeader>

            <CardFooter>
              <Button className="">
                Read More
                {/* {" "}
                <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
                  Read More
                </Link> */}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Blog;
