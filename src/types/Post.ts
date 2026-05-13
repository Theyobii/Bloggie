/**
 * Represents a single blog post in Bloggie.
 */
export interface Post {
  /** Unique identifier for the post */
  id: string;

  /** Title of the blog post */
  title: string;

  /** Short excerpt / summary shown on cards */
  excerpt: string;

  /** Publication date in ISO 8601 format (e.g. "2026-05-10") */
  date: string;

  /** Author information */
  author: Author;

  /** Array of tag labels */
  tags: string[];

  /** Optional cover image URL */
  coverImage?: string;

  /** Estimated reading time in minutes */
  readingTime?: number;
}

/**
 * Author metadata attached to a Post.
 */
export interface Author {
  name: string;
  avatar?: string;
}
