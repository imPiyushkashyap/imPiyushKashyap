export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    publishedAt: string;
    author: string;
    tags: string[];
    content?: string;

}
export async function getPosts(): Promise<BlogPost[]> {
    const req = await fetch("https://payloadcms-supabase.onrender.com/api/posts?where[status][equals]=published", {
        next: { revalidate: 60 },
    });

    if (!req.ok) {
        throw new Error("Failed to fetch posts");
    }

    const data = await req.json();
    return data.docs || [];
}
