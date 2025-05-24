export async function getPostBySlug(slug: string) {
    const res = await fetch(
        `https://payloadcms-supabase.onrender.com/api/posts?where[slug][equals]=${slug}`,
        {
            cache: 'no-store',
        }
    );

    if (!res.ok) {
        throw new Error(`Failed to fetch post: ${res.status}`);
    }

    const data = await res.json();
    return data.docs?.[0] || null;
}
