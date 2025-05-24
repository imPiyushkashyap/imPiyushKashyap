import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/lib/getpostbyslug";

interface Props {
  params: {
    slug: string;
  };
}

const BlogPostPage = async ({ params }: Props) => {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return <div className="text-center py-20">Post not found 😢</div>;
  }

  return (
    <div className="container py-12 max-w-3xl mx-auto">
      <Button variant="ghost" size="sm" asChild className="mb-6">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>
      </Button>

      <article className="prose prose-slate dark:prose-invert max-w-none">
        <h1 className="text-3xl font-bold tracking-tight mb-2 mt-0">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.publishedAt).toDateString()}</span>
          </div>
        </div>

        <article
          className="prose dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.html || "" }}
        />
      </article>
    </div>
  );
};

export default BlogPostPage;
