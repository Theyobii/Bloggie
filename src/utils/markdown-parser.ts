// Custom frontmatter parser to avoid Node.js buffer errors in the browser

export interface PostFrontmatter {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  authorImage?: string;
  imageUrl?: string;
  category?: string;
}

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
}

// In Vite, import.meta.glob with ?raw query parameter returns the raw text content.
const postFiles = import.meta.glob('/content/*.md', { query: '?raw', import: 'default', eager: true });

export function getAllPosts(): Post[] {
  const posts: Post[] = [];

  for (const path in postFiles) {
    // Extract slug from path, e.g., '/content/hello-world.md' -> 'hello-world'
    const slug = path.split('/').pop()?.replace(/\.md$/, '') || '';
    
    const rawContent = postFiles[path] as string;
    
    // Parse frontmatter manually to avoid Node buffer issues
    let frontmatter: Record<string, string> = {};
    let content = rawContent;
    
    const match = rawContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
    if (match) {
      const yamlStr = match[1];
      content = match[2];
      
      yamlStr.split('\n').forEach(line => {
        const colonIdx = line.indexOf(':');
        if (colonIdx > -1) {
          const key = line.slice(0, colonIdx).trim();
          let value = line.slice(colonIdx + 1).trim();
          // Remove surrounding quotes if they exist
          if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
          }
          frontmatter[key] = value;
        }
      });
    }

    posts.push({
      slug,
      frontmatter: frontmatter as unknown as PostFrontmatter,
      content,
    });
  }

  // Sort posts by date descending
  return posts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getPostBySlug(slug: string): Post | undefined {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
}
